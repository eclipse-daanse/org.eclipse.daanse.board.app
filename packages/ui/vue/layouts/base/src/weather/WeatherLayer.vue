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
/*
 * A page's weather around a layout's board.
 *
 * The board goes in the slot. One canvas lies behind it, for what falls
 * far away; one lies above it, for what lands on the widgets and splashes
 * off them, and lets every pointer through - the board stays operable.
 * The board itself sits in a stacking context of its own, so a widget's
 * z-index orders it among the widgets and never above the weather.
 *
 * Asked to on the event bus (DRAW_WEATHER_REGION, for this page), it lays
 * the drawing mode of the weather region over the board. The widgets stay
 * visible and take no pointer meanwhile. Done writes the drawn shapes to
 * the page and makes them its region; Escape leaves the page as it was.
 * Meanwhile the weather runs, on the board being edited too, clipped to
 * the shapes as they are drawn - the person sees what they will get.
 */
import { inject, onBeforeUnmount, ref } from 'vue'
import type { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  DRAW_WEATHER_REGION,
  createWeather,
  readShapes,
  writeShapes,
  type DrawWeatherRegionEvent,
  type Page,
  type ShapeSpec,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { DEFAULT_CELL, useWeatherLayer, type GridCell } from './useWeatherLayer'
import RegionDrawing from './RegionDrawing.vue'

const props = defineProps<{
  page?: Page
  editMode?: boolean
  /** A selector for the element inside the slot that scrolls the widgets. */
  scroller?: string
  /**
   * One grid unit of the layout, in pixels, given the board's width: what
   * an area region is measured in. Left out, the base layout's 24 px grid.
   */
  cell?: (hostWidth: number) => GridCell
}>()

const host = ref<HTMLElement>()
const back = ref<HTMLCanvasElement>()
const front = ref<HTMLCanvasElement>()

const cellAt = (width: number) => props.cell?.(width) ?? DEFAULT_CELL
const scrollerElement = () =>
  props.scroller ? host.value?.querySelector<HTMLElement>(props.scroller) : undefined

/* The draft while drawing, which the weather keeps to meanwhile */
const preview = ref<ShapeSpec[] | undefined>()

const { running, engine, settings, affectsWidgets } = useWeatherLayer({
  page: () => props.page,
  editMode: () => Boolean(props.editMode),
  drawing: () => preview.value,
  host,
  back,
  front,
  cell: cellAt,
  scroller: scrollerElement,
})

/* ------------------------------------------------------------ drawing */

/* While drawing: the shapes it started from, and the grid it draws in */
const drawing = ref<{ shapes: ShapeSpec[]; cell: GridCell } | undefined>()

function startDrawing(): void {
  if (!props.page) return
  const width = host.value?.getBoundingClientRect().width ?? 0
  const shapes = readShapes(props.page.weather)
  drawing.value = { shapes, cell: cellAt(width) }
  preview.value = shapes
}

/** Writes what was drawn to the page, and makes it the page's region. */
function finishDrawing(shapes: ShapeSpec[]): void {
  const page = props.page
  drawing.value = undefined
  preview.value = undefined
  if (!page) return
  const weather = page.weather ?? (page.weather = createWeather())
  if (weather.region) weather.region.value = 'area'
  writeShapes(weather, shapes)
}

function cancelDrawing(): void {
  drawing.value = undefined
  preview.value = undefined
}

const bus = inject<TinyEmitter | null>(identifiers.TINY_EMITTER, null)
const onDrawAsked = (event: DrawWeatherRegionEvent | undefined) => {
  if (event?.pageId && event.pageId === props.page?.id) startDrawing()
}
bus?.on(DRAW_WEATHER_REGION, onDrawAsked)
onBeforeUnmount(() => bus?.off(DRAW_WEATHER_REGION, onDrawAsked))

defineExpose({ running, engine, settings, affectsWidgets, startDrawing, drawing })
</script>

<template>
  <div ref="host" class="weather" :class="{ 'weather--on': running, 'weather--drawing': drawing }">
    <canvas ref="back" class="weather__sky weather__sky--back" aria-hidden="true" />
    <div class="weather__board">
      <slot />
    </div>
    <!-- Only while what falls acts with the widgets: otherwise all of it is behind them -->
    <canvas v-if="affectsWidgets" ref="front" class="weather__sky weather__sky--front" aria-hidden="true" />
    <RegionDrawing
      v-if="drawing"
      :shapes="drawing.shapes"
      :cell="drawing.cell"
      :scroller="scrollerElement"
      @change="preview = $event"
      @done="finishDrawing"
      @cancel="cancelDrawing"
    />
  </div>
</template>

<style scoped>
.weather {
  position: relative;
  width: 100%;
  height: 100%;
}

/*
 * Its own stacking context while the weather runs: widgets order among
 * themselves, under the sky. Only then - a board being edited keeps its
 * menus and handles free to rise above everything around it.
 */
.weather__board {
  position: relative;
  width: 100%;
  height: 100%;
}

.weather--on .weather__board {
  z-index: 0;
}

/*
 * Visible, and out of reach: every pointer goes to the drawing. In a
 * stacking context of its own here too, or a widget's z-index would lift
 * it over the drawing.
 */
.weather--drawing .weather__board {
  z-index: 0;
  pointer-events: none;
  user-select: none;
}

.weather__sky {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Nothing to show until the weather runs */
  visibility: hidden;
}

.weather--on .weather__sky {
  visibility: visible;
}
</style>
