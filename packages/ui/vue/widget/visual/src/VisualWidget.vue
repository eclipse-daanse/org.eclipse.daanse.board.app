<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
/**
 * A table drawn as something to look at.
 *
 * Everything that decides what is drawn is in drawing.ts and runs without
 * a canvas; this component reads the settings and the data, hands the
 * result to ECharts - or, for the cube, to the three.js view - and keeps
 * it the size of its tile.
 */
import { computed, inject, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDatasourceRepository, useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { EVENT_ACTIONS_REGISTRY, type EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { VisualSettings } from './gen/VisualSettings'
import { VisualSettingsImpl } from './gen/VisualSettingsImpl'
import { VisualWidgetInterface } from './api/VisualWidgetInterface'
import { asTable } from './table'
import { draw, homeOf, kindOf, shapeOf, SMALL, SPATIAL, WORDS, type Look, type Word } from './drawing'
import { createChart, type Chart } from './echarts'
import type { CubeView } from './cube-view'

const WIDGET_TYPE = 'VisualWidget'

const props = defineProps<{ datasourceId: string; id?: string }>()
const { datasourceId, id: widgetId } = toRefs(props)

const config = defineModel<VisualSettings>('configv', { required: true })

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!
const route = useRoute()
const pageId = (route.params.pageid as string) || ''
const { t, language } = useTranslation('visual')

const data = ref<unknown>(null)
const { update, loading, error } = useDatasourceRepository(datasourceId, 'DataTable', data)
watch(datasourceId, (now, before) => update(now, before))

/*
 * Whether the source has answered since the widget came up. Until then the
 * data is null because nothing has come yet, not because nothing came back,
 * and saying "no data" would be wrong for the second or so a query takes.
 * Watched synchronously: a request that fails at once is on its way and
 * back again before any later flush would see it was.
 */
const answered = ref(!datasourceId.value)
const settle = () => {
  answered.value = true
}
watch(
  loading,
  (now) => {
    if (!now) settle()
  },
  { flush: 'sync' },
)
watch([data, error], settle, { flush: 'sync' })
/* Waiting for a first answer or a newer one: the tile stays quiet rather than naming a problem the answer may not have. */
const waiting = computed(() => loading.value || !answered.value)

/* ------------------------------------------------------------ settings */

/*
 * Read through this, never off config: a kind chosen in the settings is
 * set on the same instance, and only the adapter useEObject attaches says
 * that it changed. A wrapper's value reaches the computed by itself.
 */
const settings = useEObject(() => config.value as VisualSettings | undefined)
const defaults = new VisualSettingsImpl()

function setting(key: keyof VisualSettings): unknown {
  for (const source of [settings.value, defaults] as unknown as Record<string, unknown>[]) {
    let value = source?.[key]
    // A wrapper holds its value; one read back from a stored board may hold another wrapper, or an empty object.
    for (let depth = 0; depth < 3 && value !== null && typeof value === 'object' && 'value' in value; depth++) {
      value = (value as { value: unknown }).value
    }
    // Settings are text, numbers and flags: an object left over is no value, and would be written as "[object Object]".
    if (value !== undefined && value !== null && typeof value !== 'object') return value
  }
  return undefined
}
const text = (key: keyof VisualSettings) => String(setting(key) ?? '')
const flag = (key: keyof VisualSettings) => setting(key) !== false && setting(key) !== 'false'
const count = (key: keyof VisualSettings, fallback: number) => {
  const parsed = Number(setting(key))
  return Number.isFinite(parsed) ? parsed : fallback
}

/* The board's own text colour, read off the tile, so a dark board gets light labels. */
const host = ref<HTMLElement>()
const textColor = ref('')
function readTextColor() {
  if (host.value) textColor.value = getComputedStyle(host.value).color
}

/*
 * The tile's shape, in steps coarse enough that dragging a tile's edge
 * redraws only now and then: a redraw puts a 3D camera back home.
 */
const aspect = ref(0)
const small = ref(false)
function readShape() {
  const { clientWidth: width = 0, clientHeight: height = 0 } = host.value ?? {}
  if (!width || !height) return
  aspect.value = Math.round((width / height) * 4) / 4
  small.value = width < SMALL.width || height < SMALL.height
}

/* The words a tooltip says, in the board's language. i18n-keys: visual:Words.* */
const words = computed(() => Object.fromEntries(WORDS.map((word) => [word, t(`Words.${word}`)])) as Record<Word, string>)

const look = computed<Look>(() => ({
  kind: kindOf(setting('kind')),
  title: text('title'),
  palette: text('palette').toLowerCase(),
  valueColumn: text('valueColumn'),
  xColumn: text('xColumn'),
  yColumn: text('yColumn'),
  zColumn: text('zColumn'),
  sizeColumn: text('sizeColumn'),
  separator: settings.value?.pathSeparator ?? ' - ',
  autoRotate: flag('autoRotate'),
  showScale: flag('showScale'),
  showLabels: flag('showLabels'),
  topN: count('topN', 10),
  frameDuration: count('frameDuration', 1500),
  textColor: textColor.value,
  locale: language.value ?? '',
  words: words.value,
  aspect: aspect.value,
  small: small.value,
}))

const drawing = computed(() => draw(asTable(data.value), look.value))
/* Said in words, one text per problem drawing.ts can name. i18n-keys: visual:Problem.* */
const problem = computed(() => ('problem' in drawing.value ? drawing.value.problem : undefined))
const isCube = computed(() => 'cube' in drawing.value)

/* --------------------------------------------------------------- chart */

const canvas = ref<HTMLElement>()
const cubeHost = ref<HTMLElement>()
const chart = shallowRef<Chart>()
/*
 * Made when the cube is first asked for and let go when another kind is:
 * WebGL contexts are few. three.js is fetched only then, as its own chunk -
 * a board without a cube never loads it.
 */
let cubeView: CubeView | undefined
let cubeLoading: Promise<void> | undefined
let unmounted = false

function startCube(): Promise<void> {
  cubeLoading ??= import('./cube-view')
    .then(({ createCubeView }) => {
      if (unmounted || !cubeHost.value || !('cube' in drawing.value)) return
      cubeView = createCubeView(cubeHost.value)
      cubeView.on('click', (params) => emit('click', params))
      cubeView.on('contextmenu', (params) => emit('right_click', params))
    })
    .catch((error) => console.warn('The visual widget could not start its cube', error))
    .finally(() => (cubeLoading = undefined))
  return cubeLoading
}
let resizing: ResizeObserver | undefined
let charting: ResizeObserver | undefined
/** The kind and the shape last drawn: a new kind or shape starts from nothing, a new value of the same moves to it. */
let drawnKind: string | undefined
let drawnShape: string | undefined

function render() {
  const now = drawing.value
  if ('cube' in now) {
    drawnKind = 'cube'
    // Drawn once it is there; by then the cube shown is whatever is current.
    if (cubeView) cubeView.show(now.cube)
    else void startCube().then(() => 'cube' in drawing.value && cubeView?.show(drawing.value.cube))
    return
  }
  cubeView?.dispose()
  cubeView = undefined
  if (!chart.value || !('option' in now)) return
  const kind = look.value.kind
  // A tooltip left standing would name what the new answer has at the old place, until the mouse moves.
  chart.value.dispatchAction({ type: 'hideTip' })
  const shape = shapeOf(now.option)
  chart.value.setOption(now.option, { notMerge: kind !== drawnKind || shape !== drawnShape || kind === 'race' })
  drawnKind = kind
  drawnShape = shape
}

watch(drawing, () => nextTick(render))

/* A double click on a 3D box brings its camera back to where it started; the cube does the same by itself. */
function home() {
  if (chart.value && SPATIAL.has(look.value.kind) && 'option' in drawing.value) {
    chart.value.setOption({ grid3D: { viewControl: homeOf(look.value) } })
  }
}

function emit(event: 'click' | 'right_click', params: { name?: string; value?: unknown }) {
  if (!widgetId?.value) return
  const type = `widget:${WIDGET_TYPE}:${event}`
  eventBus.emit(type, {
    type,
    widgetId: widgetId.value,
    payload: { widgetId: widgetId.value, name: params.name, value: params.value, timestamp: Date.now() },
  })
}

class VisualWidgetApi extends VisualWidgetInterface {
  setKind(kind: string): void {
    if (config.value) config.value.kind = kindOf(kind).toUpperCase() as VisualSettings['kind']
  }
  refresh(): void {
    update(datasourceId.value, datasourceId.value)
  }
}
const api = new VisualWidgetApi()
defineExpose<VisualWidgetInterface>(api)

onMounted(() => {
  if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, WIDGET_TYPE, pageId)
  if (!config.value) config.value = new VisualSettingsImpl()
  readTextColor()
  readShape()
  if (cubeHost.value) {
    resizing = new ResizeObserver(() => cubeView?.resize())
    resizing.observe(cubeHost.value)
  }
  if (canvas.value) {
    try {
      chart.value = createChart(canvas.value)
      chart.value.on('click', (params) => emit('click', params))
      chart.value.on('contextmenu', (params) => emit('right_click', params))
      charting = new ResizeObserver(() => {
        readTextColor()
        readShape()
        chart.value?.resize()
      })
      charting.observe(canvas.value)
    } catch (error) {
      // No WebGL - an old machine, a locked-down browser: the 2D kinds still have a chance next time.
      console.warn('The visual widget could not start its chart', error)
    }
  }
  render()
})

onBeforeUnmount(() => {
  unmounted = true
  if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value)
  resizing?.disconnect()
  charting?.disconnect()
  cubeView?.dispose()
  cubeView = undefined
  chart.value?.dispose()
  chart.value = undefined
})

const spatial = computed(() => SPATIAL.has(look.value.kind))
</script>

<template>
  <div ref="host" class="visual" :data-kind="look.kind">
    <div
      ref="canvas"
      class="visual__canvas"
      :class="{ 'visual__canvas--hidden': problem || isCube }"
      @contextmenu.prevent
      @dblclick="home"
    />
    <div ref="cubeHost" class="visual__canvas" :class="{ 'visual__canvas--hidden': !isCube }" @contextmenu.prevent />
    <p v-if="problem && !waiting" class="visual__problem">{{ t(`Problem.${problem}`) }}</p>
    <p v-else-if="spatial && !problem" class="visual__hint">{{ t('Hint.turn') }}</p>
  </div>
</template>

<style scoped>
.visual {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 120px;
  overflow: hidden;
}

.visual__canvas {
  position: absolute;
  inset: 0;
}

.visual__canvas--hidden {
  visibility: hidden;
}

.visual__problem {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.7;
}

.visual__hint {
  position: absolute;
  left: 8px;
  bottom: 6px;
  margin: 0;
  font-size: 0.6875rem;
  opacity: 0.45;
  pointer-events: none;
}
</style>
