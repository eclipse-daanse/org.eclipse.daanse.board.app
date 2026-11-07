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
 */
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import type { Result } from 'vega-embed'
import { useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
import { compileRecipe, RecipeError } from './recipe'
import { sampleDatasets, withDatasets } from './sample'
import { modelledSettings } from './settingsModel'

const stored = defineModel<unknown>('configv', { required: true })
defineProps<{ id?: string }>()

/*
 * The stored settings as the model's object, and watched rather than read
 * off the model prop: the wrapper hands over the same instance on every
 * change, which Vue does not see (#1203).
 */
const config = computed(() => modelledSettings(stored.value))
const settings = useEObject<VegaWidgetSettings>(() => config.value)
const { t } = useTranslation('vega')

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

const draw = async () => {
  const el = container.value
  const s = settings.value
  if (!el || !s || unmounted) return
  const mine = ++generation
  try {
    /* Compiled before Vega is loaded: a recipe that gives no chart needs none. */
    const spec = withDatasets(compileRecipe(s), sampleDatasets())
    const { drawChart } = await import('./embedChart')
    const next = await drawChart(el, spec, {
      renderer: s?.renderer === 'svg' ? 'svg' : 'canvas',
      tooltip: s?.tooltip !== false,
    })
    if (mine !== generation || unmounted) {
      next.finalize()
      return
    }
    finalize()
    chart = next
    error.value = null
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
  void draw()
})

watch(settings, () => void draw())

onUnmounted(() => {
  unmounted = true
  generation++
  resizeObserver?.disconnect()
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
