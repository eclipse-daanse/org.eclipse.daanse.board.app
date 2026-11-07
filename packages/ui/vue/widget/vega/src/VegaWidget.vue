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
import { compileRecipe, DEFAULT_DATASET, RecipeError } from './recipe'
import { SAMPLE_VALUES, withDatasets, type Row } from './sample'
import { datasetSources, rowsOf, typed } from './datasets'
import { useDatasets, type ChartStore } from './useDatasets'
import { modelledSettings } from './settingsModel'
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
useDatasets({
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
    const spec = withDatasets(compileRecipe(s), datasetsNow())
    const { drawChart, signalsOf, restoreSignals } = await import('./embedChart')
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
 * The frame decides the size. Vega follows its container only on a window
 * resize; a widget is resized without one.
 */
const fit = () => {
  const el = container.value
  if (!chart || !el || !el.clientWidth || !el.clientHeight) return
  void chart.view.width(el.clientWidth).height(el.clientHeight).runAsync()
}

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
  void draw()
})

watch(settings, () => void draw())
watch(themeRevision, () => void draw(true))

onUnmounted(() => {
  unmounted = true
  generation++
  resizeObserver?.disconnect()
  themeObserver?.disconnect()
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
