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
 * One value on an arc, against the range it belongs to.
 *
 * Drawn as a single path and a dash pattern rather than as two shapes: the
 * arc's length is known exactly - it is a circle's circumference times the
 * share of it the shape draws - so the filled part is a dash of that
 * length, and the track underneath is the same path in another colour.
 * Bands are the same trick once per threshold, each offset to where its
 * range begins.
 */
import { computed, inject, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDatasourceRepository, useEObject, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { EVENT_ACTIONS_REGISTRY, type EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { GaugeSettings } from './gen/GaugeSettings'
import { GaugeSettingsImpl } from './gen/GaugeSettingsImpl'
import { GaugeWidgetInterface } from './api/GaugeWidgetInterface'

const props = defineProps<{ datasourceId: string; id?: string }>()
const { datasourceId, id: widgetId } = toRefs(props)

const config = defineModel<GaugeSettings>('configv', { required: true })

/*
 * The settings, watched rather than read off the model prop.
 *
 * Widget.config is an attribute, not a containment, so the adapter the
 * wrapper holds on the widget never hears a write inside this object - and
 * the wrapper hands this component the same instance on every change, which
 * is not a prop change Vue acts on. A setting changed in the open dialog
 * reached the gauge only once the dialog was reopened (#1203). Watching the
 * instance itself is what makes a write inside it a change here; the reads
 * go through `settings`, the writes on mount still go to `config`.
 */
const settings = useEObject<GaugeSettings>(() => config.value)

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!
const route = useRoute()
const pageId = (route.params.pageid as string) || ''

const data = ref(null)
const { update } = useDatasourceRepository(datasourceId, 'object', data)
watch(datasourceId, (now, before) => update(now, before))

/* ------------------------------------------------------------ settings */

/*
 * Every wrapped setting with the value the model gives it.
 *
 * A board stores a wrapper as plain JSON, so what comes back is an object
 * with a `value` and no methods; one that was never set is missing
 * altogether. Both are made into wrappers here, once, rather than guarded
 * at every read.
 */
const WRAPPED: Record<string, string> = {
  value: '',
  min: '0',
  max: '100',
  color: '#2563eb',
  trackColor: '#e5e7eb',
  thickness: '14',
  unit: '',
  label: '',
  textColor: '',
}

const PLAIN: Record<string, unknown> = {
  shape: 'threeQuarter',
  showBands: false,
  showValue: true,
  decimals: 0,
}

function wrap(held: unknown, fallback: string): VariableWrapper<string> {
  if (held instanceof VariableWrapper) return held
  if (held && typeof held === 'object' && 'value' in (held as any)) {
    const made = new VariableWrapper((held as any).value)
    if ((held as any).variable) made.variable = (held as any).variable
    return made
  }
  return new VariableWrapper(held === undefined || held === null ? fallback : String(held))
}

class GaugeWidgetApi extends GaugeWidgetInterface {
  setValue(value: number): void {
    if (config.value?.value) (config.value.value as any).value = String(value)
  }
  setMax(max: number): void {
    if (config.value?.max) (config.value.max as any).value = String(max)
  }
  refresh(): void {
    update(datasourceId.value, datasourceId.value)
  }
}
const api = new GaugeWidgetApi()
defineExpose<GaugeWidgetInterface>(api)

onMounted(() => {
  if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'GaugeWidget', pageId)
  if (!config.value) config.value = new GaugeSettingsImpl()

  for (const [key, fallback] of Object.entries(WRAPPED)) {
    ;(config.value as any)[key] = wrap((config.value as any)[key], fallback)
  }
  for (const [key, fallback] of Object.entries(PLAIN)) {
    if ((config.value as any)[key] === undefined || (config.value as any)[key] === null) {
      ;(config.value as any)[key] = fallback
    }
  }
})

onUnmounted(() => {
  if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value)
})

/** What a wrapper holds, whatever shape it arrived in. */
function held(key: keyof GaugeSettings): string {
  const slot = (settings.value as any)?.[key]
  const value = slot && typeof slot === 'object' && 'value' in slot ? slot.value : slot
  return value === undefined || value === null ? '' : String(value)
}

function number(key: keyof GaugeSettings, fallback: number): number {
  const parsed = parseFloat(held(key))
  return Number.isFinite(parsed) ? parsed : fallback
}

/* -------------------------------------------------------------- value */

/*
 * The same $value.field placeholder the other widgets take, resolved
 * against whatever the source answered.
 */
const measured = computed<number | null>(() => {
  const written = held('value')
  if (!written) return null

  const { parts } = helpers.widget.extractValuesAndFullObject(written)
  let text = ''
  for (const part of parts) {
    const found = part.path !== undefined ? helpers.widget.getValueByPath(data.value, part.path) : undefined
    text += found !== undefined ? found : part.text
  }

  const parsed = parseFloat(text)
  return Number.isFinite(parsed) ? parsed : null
})

const min = computed(() => number('min', 0))
const max = computed(() => number('max', 100))

/** Where the value sits in its range, 0 to 1 - and 0 where there is none. */
const share = computed(() => {
  if (measured.value === null) return 0
  const span = max.value - min.value
  if (span <= 0) return 0
  return Math.max(0, Math.min(1, (measured.value - min.value) / span))
})

/* --------------------------------------------------------- thresholds */

interface Threshold {
  at: number
  color: string
}

/*
 * Sorted, because the order they were typed in is not the order they
 * apply in, and a gauge whose second threshold is lower than its first
 * would otherwise take the wrong colour.
 */
const thresholds = computed<Threshold[]>(() => {
  const list: any[] = (settings.value as any)?.thresholds?.toArray?.() ?? (settings.value as any)?.thresholds ?? []
  return list
    .map((each) => {
      const at = parseFloat(each?.at && typeof each.at === 'object' ? each.at.value : each?.at)
      const color = each?.color && typeof each.color === 'object' ? each.color.value : each?.color
      return { at, color: String(color ?? '') }
    })
    .filter((each) => Number.isFinite(each.at) && each.color)
    .sort((a, b) => a.at - b.at)
})

/** The colour of the highest threshold the value has passed. */
const valueColor = computed(() => {
  const base = held('color') || '#2563eb'
  if (measured.value === null) return base
  let colour = base
  for (const threshold of thresholds.value) {
    if (measured.value >= threshold.at) colour = threshold.color
  }
  return colour
})

/* ------------------------------------------------------------ geometry */

/** Where each shape starts, and how much of a circle it covers. */
const SHAPES: Record<string, { from: number; sweep: number }> = {
  /* From the top, all the way round. */
  full: { from: 270, sweep: 360 },
  /* Open at the bottom, which is the shape a dial has. */
  threeQuarter: { from: 135, sweep: 270 },
  /* The upper half only. */
  half: { from: 180, sweep: 180 },
}

const shape = computed(() => SHAPES[(settings.value as any)?.shape as string] ?? SHAPES.threeQuarter)

/* Out of a 100 by 100 box, so the widget scales with its tile. */
const thickness = computed(() => Math.max(2, Math.min(40, number('thickness', 14))))
const radius = computed(() => 50 - thickness.value / 2 - 1)

/** The arc's length, which every dash is measured against. */
const length = computed(() => 2 * Math.PI * radius.value * (shape.value.sweep / 360))

function at(degrees: number) {
  const radians = (degrees * Math.PI) / 180
  return {
    x: 50 + radius.value * Math.cos(radians),
    y: 50 + radius.value * Math.sin(radians),
  }
}

/*
 * Two arcs rather than one.
 *
 * An arc of a full circle ends where it begins, and SVG draws nothing at
 * all for it - so every shape is halved, which costs nothing and spares
 * the full circle a case of its own.
 */
const path = computed(() => {
  const { from, sweep } = shape.value
  const middle = at(from + sweep / 2)
  const end = at(from + sweep)
  const start = at(from)
  const large = sweep / 2 > 180 ? 1 : 0
  return [
    `M ${start.x} ${start.y}`,
    `A ${radius.value} ${radius.value} 0 ${large} 1 ${middle.x} ${middle.y}`,
    `A ${radius.value} ${radius.value} 0 ${large} 1 ${end.x} ${end.y}`,
  ].join(' ')
})

/** The filled part, as a dash of the arc's own length. */
const filled = computed(() => `${length.value * share.value} ${length.value}`)

/*
 * The track in the threshold colours, one segment per range.
 *
 * Drawn only where it was asked for: without it the track is one quiet
 * colour and the value carries the meaning, which is the right reading
 * for a gauge that stands among others.
 */
const bands = computed(() => {
  if (!(settings.value as any)?.showBands || !thresholds.value.length) return []

  const span = max.value - min.value
  if (span <= 0) return []

  const edges = [min.value, ...thresholds.value.map((each) => each.at), max.value]
  const colours = [held('color') || '#2563eb', ...thresholds.value.map((each) => each.color)]

  const out: Array<{ color: string; dash: string; offset: number }> = []
  for (let index = 0; index < colours.length; index++) {
    const from = Math.max(0, Math.min(1, (edges[index] - min.value) / span))
    const to = Math.max(0, Math.min(1, (edges[index + 1] - min.value) / span))
    if (to <= from) continue
    out.push({
      color: colours[index],
      dash: `${(to - from) * length.value} ${length.value}`,
      offset: -from * length.value,
    })
  }
  return out
})

/* ---------------------------------------------------------------- text */

const shown = computed(() => {
  if (measured.value === null) return '–'
  const places = Math.max(0, Math.min(6, Number((settings.value as any)?.decimals ?? 0)))
  return measured.value.toFixed(places)
})

const unit = computed(() => held('unit'))
const caption = computed(() => held('label'))
/* Empty means "whatever the board's text colour is", not black. */
const textColor = computed(() => held('textColor') || 'currentColor')

/*
 * A half gauge has nothing below its middle, so the number sits where the
 * arc actually is rather than in the centre of an empty box.
 */
const textY = computed(() => ((settings.value as any)?.shape === 'half' ? 44 : 50))

function emitClick() {
  if (!widgetId?.value) return
  eventBus.emit('widget:GaugeWidget:click', {
    type: 'widget:GaugeWidget:click',
    widgetId: widgetId.value,
    payload: { widgetId: widgetId.value, timestamp: Date.now() },
  })
}

function emitRightClick() {
  if (!widgetId?.value) return
  eventBus.emit('widget:GaugeWidget:right_click', {
    type: 'widget:GaugeWidget:right_click',
    widgetId: widgetId.value,
    payload: { widgetId: widgetId.value, timestamp: Date.now() },
  })
}
</script>

<template>
  <div class="gauge" @click="emitClick" @contextmenu.prevent="emitRightClick">
    <svg
      class="gauge__face"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      :aria-label="caption || undefined"
      :aria-valuenow="measured ?? undefined"
      :aria-valuemin="min"
      :aria-valuemax="max"
    >
      <!-- The track: one colour, or the threshold ranges where asked. -->
      <path
        v-if="!bands.length"
        :d="path"
        fill="none"
        :stroke="held('trackColor') || '#e5e7eb'"
        :stroke-width="thickness"
        stroke-linecap="butt"
      />
      <path
        v-for="(band, index) in bands"
        :key="index"
        :d="path"
        fill="none"
        :stroke="band.color"
        :stroke-width="thickness"
        :stroke-dasharray="band.dash"
        :stroke-dashoffset="band.offset"
        stroke-linecap="butt"
        :opacity="0.3"
      />

      <!-- The value. -->
      <path
        class="gauge__value"
        :d="path"
        fill="none"
        :stroke="valueColor"
        :stroke-width="thickness"
        :stroke-dasharray="filled"
        stroke-linecap="butt"
      />

      <template v-if="(settings as any)?.showValue !== false">
        <text
          class="gauge__number"
          x="50"
          :y="textY"
          text-anchor="middle"
          dominant-baseline="central"
          :fill="textColor"
        >
          {{ shown }}<tspan v-if="unit" class="gauge__unit" dx="1.5">{{ unit }}</tspan>
        </text>
      </template>

      <text
        v-if="caption"
        class="gauge__caption"
        x="50"
        :y="textY + 16"
        text-anchor="middle"
        dominant-baseline="central"
        :fill="textColor"
      >
        {{ caption }}
      </text>
    </svg>
  </div>
</template>

<style scoped>
.gauge {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gauge__face {
  width: 100%;
  height: 100%;
}

/* Moves to a new reading rather than jumping to it. */
.gauge__value {
  transition: stroke-dasharray 0.6s ease, stroke 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .gauge__value {
    transition: none;
  }
}

.gauge__number {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 600;
}

.gauge__unit {
  font-size: 11px;
  font-weight: 400;
  opacity: 0.7;
}

.gauge__caption {
  font-family: var(--font-sans);
  font-size: 8px;
  opacity: 0.7;
}
</style>
