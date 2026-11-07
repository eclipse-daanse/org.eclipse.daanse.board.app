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
 * The spec is derived from the settings (spec.ts) and drawn by
 * embedChart.ts, which this component loads on first use - Vega is the
 * heavy part of the bundle and stays out of it until a chart is shown.
 */
import { onMounted, onUnmounted, ref, watch } from 'vue'
import type { Result } from 'vega-embed'
import { plainSettings, useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
import { VegaWidgetSettingsImpl } from './gen/VegaWidgetSettingsImpl'
import { specOf } from './spec'

const config = defineModel<VegaWidgetSettings>('configv', { required: true })
defineProps<{ id?: string }>()

/*
 * Watched rather than read off the model prop: the wrapper hands over the
 * same instance on every change, which Vue does not see (#1203).
 */
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
  if (!el || unmounted) return
  const mine = ++generation
  try {
    const { drawChart } = await import('./embedChart')
    const s = settings.value
    const next = await drawChart(el, specOf(s), {
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
    error.value = e instanceof Error ? e.message : String(e)
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
  if (config.value) {
    /* Missing features take the model's defaults, read by feature name. */
    Object.assign(config.value, {
      ...plainSettings(new VegaWidgetSettingsImpl()),
      ...plainSettings(config.value),
    })
  }
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
      {{ t('Widget.error', { message: error }) }}
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
