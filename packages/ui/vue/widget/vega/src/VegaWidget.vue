<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
/*
 * A chart drawn with Vega-Lite (#1283).
 *
 * The spec is compiled from the chart recipe (recipe.ts, #1284) and drawn
 * by embedChart.ts, which this component loads on first use - Vega is the
 * heavy part of the bundle and stays out of it until a chart is shown.
 *
 * The data comes from board datasources (#1286): the widget's own source is
 * the dataset table, other datasets name a source of their own. New rows go
 * into the drawn chart (embedChart.replaceData), so what the reader did
 * with it - a zoom, a brush - stays.
 */
import { computed, inject, onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import type { Result } from 'vega-embed'
import { useDatasourceRepository, useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { identifier as DATASOURCE_REPOSITORY, type DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
import { compileRecipe, DEFAULT_DATASET, RecipeError, withSize } from './recipe'
import { withOverlay } from './overlay'
import { applyStarter } from './starters'
import { SAMPLE_VALUES, withDatasets, type Row } from './sample'
import { datasetSources, rowsOf, typed } from './datasets'
import { useDatasets, type ChartStore } from './useDatasets'
import { modelledSettings } from './settingsModel'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { busEventOf, clickEventOf, paramEventOf, selectionEventOf, WIDGET_TYPE, type VegaEvent } from './events/VegaWidgetEvents'
import { EVENT_ACTIONS_REGISTRY, type EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { useRoute } from 'vue-router'
import { VegaWidgetInterfaceImpl } from './gen/VegaWidgetInterfaceImpl'
import type { VegaWidgetInterface } from './gen/VegaWidgetInterface'
import { themeConfig } from './theme'

const stored = defineModel<unknown>('configv', { required: true })
const props = defineProps<{ id?: string; datasourceId?: string }>()

/*
 * The stored settings as the model's object, and watched rather than read
 * off the model prop: the wrapper hands over the same instance on every
 * change, which Vue does not see (#1203).
 */
const config = computed(() => modelledSettings(stored.value))
const settings = useEObject<VegaWidgetSettings>(() => config.value)
const { t } = useTranslation('vega')

/* ----------------------------------------------------------- events */

/*
 * What the chart tells the board (#1289): board events with modelled
 * payloads, on the bus every widget uses. A rule maps them to actions;
 * the chart itself writes no variable.
 */
const bus = inject<TinyEmitter | undefined>(identifiers.TINY_EMITTER, undefined)
const emit = ({ event, payload }: VegaEvent) => {
  if (!props.id || !bus) return
  const type = busEventOf(event)
  bus.emit(type, { type, widgetId: props.id, payload })
}

/* --------------------------------------------------------- starters */

/*
 * A starter chart picked in the form (#1292) is written into the recipe,
 * filled with the columns of the rows the chart has now; the choice is
 * then empty again. The board and the preview hold the same settings, so
 * whichever widget sees it first writes it, once.
 */
watch(
  () => settings.value?.starter,
  (starter) => {
    const held = config.value
    if (!held || !starter || starter === 'none') return
    const rows = arrived.get(DEFAULT_DATASET) ?? (ownSource.value || tableHasOwnSource.value ? [] : SAMPLE_VALUES)
    applyStarter(held, starter, rows)
  },
)

/* ---------------------------------------------------------- actions */

/*
 * What the board can ask of the chart (#1290), as the actions modelled in
 * VegaWidgetInterface. A parameter set before the chart is drawn - right
 * after a change of page - is set once it is.
 */
const actionsRegistry = inject<EventActionsRegistry | undefined>(EVENT_ACTIONS_REGISTRY, undefined)
const route = useRoute()
const pageId = (route?.params?.pageid as string) || ''
const pendingParams = new Map<string, unknown>()

const applyParam = async (name: string, value: unknown) => {
  if (!chart) {
    pendingParams.set(name, value)
    return
  }
  const { setSelection, setValueParam } = await import('./embedChart')
  if (!chart) return
  const kind = [...(settings.value?.params ?? [])].find((p) => String(p.name ?? '').trim() === name)?.kind
  if (kind === 'value' || !(await setSelection(chart.view, name, value))) await setValueParam(chart.view, name, value)
}

class VegaWidgetApi extends VegaWidgetInterfaceImpl {
  setParam = (name: string, value?: unknown) => applyParam(String(name ?? '').trim(), value)
  clearSelection = (name: string) => applyParam(String(name ?? '').trim(), null)
  refresh = () => {
    update(ownSource.value, ownSource.value)
    datasets.reload()
  }
  exportAsImage = async (format = 'png') => {
    if (!chart) return
    const type = format === 'svg' ? 'svg' : 'png'
    const { imageOf } = await import('./embedChart')
    const link = document.createElement('a')
    link.href = await imageOf(chart.view, type)
    link.download = `${String(settings.value?.title ?? '').trim() || 'chart'}.${type}`
    link.click()
  }
}
const api = new VegaWidgetApi()
/* Exposed by the modelled interface, not the class: a class type carries EMF's private fields. */
defineExpose<Pick<VegaWidgetInterface, 'setParam' | 'clearSelection' | 'refresh' | 'exportAsImage'>>(api)

/* ------------------------------------------------------------ theme */

/*
 * Counted up when the shell changes its theme (#1287): data-theme on
 * <html>, or the tokens it sets there inline. The config is compile time,
 * so the chart is drawn anew - keeping its data and its signals.
 */
const themeRevision = ref(0)
let themeObserver: MutationObserver | undefined
/* What the theme resolved to when last drawn; a mutation that changes nothing draws nothing. */
let themeSeen = ''

/* ------------------------------------------------------------- data */

/** The rows of each dataset as they arrived, before their columns are read. */
const arrived = new Map<string, Row[]>()
/** Counted up with every arrival; a draw that started before one catches up. */
let dataRevision = 0

const sources = computed(() => datasetSources(settings.value?.datasets))
const ownSource = computed(() => props.datasourceId ?? '')
/* The widget's own source fills table, unless an entry of that name reads another. */
const tableHasOwnSource = computed(() => !!sources.value.find((source) => source.name === DEFAULT_DATASET)?.datasourceId)

/** The rows of every dataset, read as their columns say; the sample while nothing feeds the chart. */
const datasetsNow = (): Record<string, Row[]> => {
  const datasets: Record<string, Row[]> = {}
  for (const source of sources.value) {
    const rows = arrived.get(source.name)
    if (rows) datasets[source.name] = typed(rows, source.types)
  }
  if (!ownSource.value && !tableHasOwnSource.value && !arrived.has(DEFAULT_DATASET)) {
    datasets[DEFAULT_DATASET] = SAMPLE_VALUES
  }
  return datasets
}

const own = ref<unknown>(null)
const { update } = useDatasourceRepository(ownSource as unknown as Ref<string>, 'DataTable', own)
watch(ownSource, (next, previous) => {
  if (!next) arrived.delete(DEFAULT_DATASET)
  update(next, previous)
})
watch(own, (answer) => {
  if (tableHasOwnSource.value || !ownSource.value) return
  arrived.set(DEFAULT_DATASET, rowsOf(answer, 'table'))
  void push(DEFAULT_DATASET)
})

const repository = inject<DatasourceRepository | undefined>(DATASOURCE_REPOSITORY, undefined)
const datasets = useDatasets({
  sources: () => sources.value.filter((source) => source.datasourceId),
  resolve: (id) => {
    try {
      return repository?.getDatasource(id) as ChartStore | undefined
    } catch {
      return undefined
    }
  },
  onRows: (name, rows) => {
    arrived.set(name, rows)
    void push(name)
  },
})

/** New rows of a dataset into the drawn chart; drawn anew where it has no such dataset. */
async function push(name: string) {
  dataRevision++
  if (!chart) return
  const source = sources.value.find((each) => each.name === name)
  const rows = typed(arrived.get(name) ?? [], source?.types ?? {})
  const { replaceData } = await import('./embedChart')
  if (!chart) return
  if (!(await replaceData(chart.view, name, rows))) void draw()
}

const container = ref<HTMLDivElement | null>(null)
const error = ref<string | null>(null)
let chart: Result | null = null
/* Counts the draws; an answer for an older one is dropped. */
let generation = 0
let resizeObserver: ResizeObserver | undefined
let unmounted = false

const finalize = () => {
  chart?.finalize()
  chart = null
}

const draw = async (keepSignals = false) => {
  const el = container.value
  const s = settings.value
  if (!el || !s || unmounted) return
  const mine = ++generation
  const drawnRevision = dataRevision
  try {
    /* Compiled before Vega is loaded: a recipe that gives no chart needs none. */
    /* The advanced overlay applies for every reader, whether the Spec tab is shown or not (#1291). */
    const drawn = withOverlay(compileRecipe(s), s.specOverlay)
    if (drawn.error) console.warn(`vega: the stored spec overlay is not applied: ${drawn.error}`)
    const spec = withSize(withDatasets(drawn.spec, datasetsNow()), el.clientWidth, el.clientHeight)
    const { drawChart, signalsOf, restoreSignals, listenTo } = await import('./embedChart')
    const kept = keepSignals && chart ? signalsOf(chart.view) : undefined
    const next = await drawChart(el, spec, {
      renderer: s?.renderer === 'svg' ? 'svg' : 'canvas',
      tooltip: s?.tooltip !== false,
      config: themeConfig(),
    })
    if (mine !== generation || unmounted) {
      next.finalize()
      return
    }
    finalize()
    chart = next
    error.value = null
    if (kept) await restoreSignals(next.view, kept)
    const params = [...(s.params ?? [])].filter((p) => String(p.name ?? '').trim())
    const layers = [...(s.layers ?? [])]
    listenTo(next.view, {
      selections: params.filter((p) => p.kind !== 'value').map((p) => String(p.name).trim()),
      values: params.filter((p) => p.kind === 'value').map((p) => String(p.name).trim()),
      onClick: (hit) => {
        const clicked = clickEventOf(hit, props.id ?? '')
        /* The mark as the recipe names it - Vega calls a bar a rect. */
        const layer = layers[(clicked.payload as { layer?: number }).layer ?? 0]
        if (layer?.mark) (clicked.payload as { mark?: string }).mark = layer.mark
        emit(clicked)
      },
      onSelection: (name, value) => emit(selectionEventOf(name, value, props.id ?? '')),
      onValue: (name, value) => emit(paramEventOf(name, value, props.id ?? '')),
    })
    /* The frame may have changed while Vega loaded, and a font may still come. */
    void fit()
    void fonts?.ready?.then(() => { if (!unmounted) void fit() })
    for (const [name, value] of pendingParams) void applyParam(name, value)
    pendingParams.clear()
    /* Rows that arrived while the chart was drawn go in now. */
    if (dataRevision !== drawnRevision) for (const name of Object.keys(datasetsNow())) void push(name)
  } catch (e) {
    if (mine !== generation) return
    finalize()
    /* i18n-keys: vega:Recipe.* - one text per RecipeProblem. */
    error.value =
      e instanceof RecipeError ? t(`Recipe.${e.code}`) : t('Widget.error', { message: e instanceof Error ? e.message : String(e) })
  }
}

/*
 * The frame decides the size: the total one, which autosize fit fills
 * with plot, axes and legend. Vega follows nothing by itself here - a
 * widget is resized without a window resize.
 */
const fit = async () => {
  const el = container.value
  if (!chart || !el || !el.clientWidth || !el.clientHeight) return
  const { fitTo } = await import('./embedChart')
  if (chart) await fitTo(chart.view, el.clientWidth, el.clientHeight)
}

/*
 * Fonts that arrive after the chart was laid out (#1305): the labels were
 * measured in the fallback font, and the chart is laid out again once the
 * board's own font is there.
 */
const fonts = typeof document !== 'undefined' ? (document as Document & { fonts?: FontFaceSet }).fonts : undefined
const onFontsLoaded = () => void fit()

onMounted(() => {
  /*
   * The adopted settings go back to the widget, so the settings form edits
   * the instance this chart is drawn from rather than adopting its own.
   */
  if (stored.value !== config.value) stored.value = config.value
  if (typeof ResizeObserver !== 'undefined' && container.value) {
    resizeObserver = new ResizeObserver(fit)
    resizeObserver.observe(container.value)
  }
  if (typeof MutationObserver !== 'undefined') {
    themeSeen = JSON.stringify(themeConfig())
    themeObserver = new MutationObserver(() => {
      const now = JSON.stringify(themeConfig())
      if (now === themeSeen) return
      themeSeen = now
      themeRevision.value++
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'style', 'class'] })
  }
  if (props.id) actionsRegistry?.registerInstance(props.id, api, WIDGET_TYPE, pageId)
  fonts?.addEventListener?.('loadingdone', onFontsLoaded)
  void draw()
})

watch(settings, () => void draw())
watch(themeRevision, () => void draw(true))

onUnmounted(() => {
  unmounted = true
  generation++
  resizeObserver?.disconnect()
  themeObserver?.disconnect()
  fonts?.removeEventListener?.('loadingdone', onFontsLoaded)
  if (props.id) actionsRegistry?.unregisterInstance(props.id)
  finalize()
})
</script>

<template>
  <div class="vega-widget">
    <div ref="container" class="vega-widget__chart" data-testid="vega-chart" />
    <div v-if="error" class="vega-widget__error" role="alert">
      {{ error }}
    </div>
  </div>
</template>

<style scoped>
.vega-widget {
  position: relative;
  width: 100%;
  height: 100%;
}

.vega-widget__chart {
  width: 100%;
  height: 100%;
}

.vega-widget__error {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  text-align: center;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg-muted);
  background: var(--color-raised, transparent);
}
</style>
