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
 * The drawing mode of a weather region, over the board.
 *
 * Takes every pointer - the widgets stay visible underneath and take
 * none - and turns it into a point in grid units for the draft
 * (regionDrawing.ts). Grid units never show: the person draws on the
 * page, and the numbers are the page's business.
 *
 * Done hands the draft over; Escape, or the cancel button, leaves
 * without it. Both are the layer's to act on, which owns the page.
 */
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import type { ShapeSpec } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { RegionDrawing, type DrawingTool, type GridPoint } from './regionDrawing'
import type { GridCell } from './useWeatherLayer'

const props = defineProps<{
  /** The page's shapes as drawing starts, in grid units. */
  shapes: readonly ShapeSpec[]
  /** One grid unit of the layout, in pixels. */
  cell: GridCell
  /** The element that scrolls the board, if one does. */
  scroller?: () => HTMLElement | null | undefined
}>()

const emit = defineEmits<{
  done: [shapes: ShapeSpec[]]
  cancel: []
}>()

const { t } = useTranslation('layoutsBase')

/* How near, in pixels, a click has to be to a point to hit it */
const HIT_PX = 8

const drawing = reactive(new RegionDrawing(props.shapes))
drawing.tolerance = HIT_PX / Math.max(1, props.cell.width)

const surface = ref<SVGSVGElement>()
const scroll = ref({ left: 0, top: 0 })

function readScroll() {
  const element = props.scroller?.()
  scroll.value = { left: element?.scrollLeft ?? 0, top: element?.scrollTop ?? 0 }
}

/** Where a pointer is on the board, in grid units. */
function gridPoint(event: MouseEvent): GridPoint {
  const box = surface.value?.getBoundingClientRect()
  const x = event.clientX - (box?.left ?? 0) + scroll.value.left
  const y = event.clientY - (box?.top ?? 0) + scroll.value.top
  return { x: x / props.cell.width, y: y / props.cell.height }
}

function onDown(event: PointerEvent) {
  if (event.button !== undefined && event.button > 0) return
  try {
    surface.value?.setPointerCapture?.(event.pointerId)
  } catch {
    /* A synthetic event has no pointer to capture */
  }
  drawing.down(gridPoint(event), event.shiftKey)
}

const onMove = (event: PointerEvent) => drawing.move(gridPoint(event))
const onUp = (event: PointerEvent) => drawing.up(gridPoint(event))
const onDoubleClick = (event: MouseEvent) => drawing.doubleClick(gridPoint(event))

/* The board underneath cannot be reached, so its scrolling is passed on */
function onWheel(event: WheelEvent) {
  const element = props.scroller?.()
  if (!element) return
  element.scrollLeft += event.deltaX
  element.scrollTop += event.deltaY
  readScroll()
}

function finish() {
  emit('done', drawing.result())
}

function onKey(event: KeyboardEvent) {
  const target = event.target as HTMLElement | null
  if (target?.closest?.('input, textarea, [contenteditable="true"]')) return
  let handled = true
  /* A first Escape clears what is selected; the next one leaves */
  if (event.key === 'Escape') {
    if (!drawing.escape()) emit('cancel')
  }
  else if (event.key === 'Delete' || event.key === 'Backspace') drawing.remove()
  else if (event.key === 'Enter') {
    if (drawing.drawingPolygon) drawing.closePolygon()
    else finish()
  } else handled = false
  if (!handled) return
  /* Before the board's own shortcuts: Delete here is not a widget deleted */
  event.preventDefault()
  event.stopImmediatePropagation()
}

onMounted(() => {
  readScroll()
  window.addEventListener('keydown', onKey, true)
  props.scroller?.()?.addEventListener('scroll', readScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey, true)
  props.scroller?.()?.removeEventListener('scroll', readScroll)
})

/* ------------------------------------------------------------ drawing */

type Drawn =
  | { kind: 'rect'; x: number; y: number; width: number; height: number }
  | { kind: 'ellipse'; cx: number; cy: number; rx: number; ry: number }
  | { kind: 'polygon'; points: string }

/** A shape as the SVG draws it, in board pixels. */
function drawn(shape: ShapeSpec): Drawn {
  const { width: cw, height: ch } = props.cell
  if (shape.kind === 'polygon') {
    return { kind: 'polygon', points: shape.points.map((p) => `${p.x * cw},${p.y * ch}`).join(' ') }
  }
  if (shape.kind === 'ellipse') {
    return {
      kind: 'ellipse',
      cx: (shape.x + shape.width / 2) * cw,
      cy: (shape.y + shape.height / 2) * ch,
      rx: (shape.width / 2) * cw,
      ry: (shape.height / 2) * ch,
    }
  }
  return { kind: 'rect', x: shape.x * cw, y: shape.y * ch, width: shape.width * cw, height: shape.height * ch }
}

const shapes = computed(() => drawing.shapes.map((shape, index) => ({ index, drawn: drawn(shape) })))

/* A box being dragged out, or the polygon clicked in so far as a line to the pointer */
const pendingBox = computed(() =>
  drawing.pending && drawing.pending.kind !== 'polygon' ? drawn(drawing.pending) : undefined,
)
const pendingLine = computed(() => {
  const pending = drawing.pending
  if (pending?.kind !== 'polygon') return undefined
  const points = drawing.cursor ? [...pending.points, drawing.cursor] : pending.points
  return points.map((p) => `${p.x * props.cell.width},${p.y * props.cell.height}`).join(' ')
})
/* The selected shape's handles, in board pixels */
const handles = computed(() =>
  drawing.handles.map((handle) => ({
    key: handle.kind === 'box' ? handle.id : `${handle.kind}${handle.index}`,
    kind: handle.kind,
    x: handle.x * props.cell.width,
    y: handle.y * props.cell.height,
  })),
)

const firstPoint = computed(() => {
  const pending = drawing.pending
  if (pending?.kind !== 'polygon') return undefined
  return { x: pending.points[0].x * props.cell.width, y: pending.points[0].y * props.cell.height }
})

/* ------------------------------------------------------------ toolbar */

const TOOL_ICONS: Record<DrawingTool, string> = {
  rectangle: 'crop_square',
  ellipse: 'radio_button_unchecked',
  polygon: 'polyline',
  select: 'near_me',
}

const tools = computed(() =>
  (Object.keys(TOOL_ICONS) as DrawingTool[]).map((tool) => ({
    tool,
    icon: TOOL_ICONS[tool],
    // i18n-keys: layoutsBase:Region.tool.*
    label: t(`Region.tool.${tool}`),
  })),
)

defineExpose({ drawing })
</script>

<template>
  <div class="region" :class="`region--${drawing.tool}`" @wheel.prevent="onWheel">
    <svg
      ref="surface"
      class="region__surface"
      @pointerdown="onDown"
      @pointermove="onMove"
      @pointerup="onUp"
      @dblclick="onDoubleClick"
    >
      <g :transform="`translate(${-scroll.left} ${-scroll.top})`">
        <template v-for="{ index, drawn: d } in shapes" :key="index">
          <rect
            v-if="d.kind === 'rect'"
            class="region__shape"
            :class="{ 'region__shape--selected': drawing.isSelected(index) }"
            :data-shape="index"
            :x="d.x" :y="d.y" :width="d.width" :height="d.height"
          />
          <ellipse
            v-else-if="d.kind === 'ellipse'"
            class="region__shape"
            :class="{ 'region__shape--selected': drawing.isSelected(index) }"
            :data-shape="index"
            :cx="d.cx" :cy="d.cy" :rx="d.rx" :ry="d.ry"
          />
          <polygon
            v-else
            class="region__shape"
            :class="{ 'region__shape--selected': drawing.isSelected(index) }"
            :data-shape="index"
            :points="d.points"
          />
        </template>

        <rect
          v-if="pendingBox?.kind === 'rect'"
          class="region__shape region__shape--pending"
          :x="pendingBox.x" :y="pendingBox.y" :width="pendingBox.width" :height="pendingBox.height"
        />
        <ellipse
          v-else-if="pendingBox?.kind === 'ellipse'"
          class="region__shape region__shape--pending"
          :cx="pendingBox.cx" :cy="pendingBox.cy" :rx="pendingBox.rx" :ry="pendingBox.ry"
        />
        <template v-if="pendingLine">
          <polyline class="region__line" :points="pendingLine" />
          <!-- Where a click closes it -->
          <circle class="region__first" :cx="firstPoint!.x" :cy="firstPoint!.y" r="5" />
        </template>

        <template v-for="handle in handles" :key="handle.key">
          <rect
            v-if="handle.kind === 'box'"
            class="region__handle"
            :data-handle="handle.key"
            :x="handle.x - 4" :y="handle.y - 4" width="8" height="8"
          />
          <circle
            v-else
            class="region__handle"
            :class="{ 'region__handle--insert': handle.kind === 'insert' }"
            :data-handle="handle.key"
            :cx="handle.x" :cy="handle.y" :r="handle.kind === 'insert' ? 3 : 5"
          />
        </template>
      </g>
    </svg>

    <div class="region__toolbar" role="toolbar" :aria-label="t('Region.toolbar')" @pointerdown.stop @wheel.stop>
      <button
        v-for="each in tools"
        :key="each.tool"
        type="button"
        class="region__button"
        :class="{ 'region__button--on': drawing.tool === each.tool }"
        :data-tool="each.tool"
        :title="each.label"
        :aria-label="each.label"
        :aria-pressed="drawing.tool === each.tool"
        @click="drawing.setTool(each.tool)"
      >
        <DIcon :name="each.icon" size="sm" />
      </button>
      <span class="region__divider" />
      <button
        type="button"
        class="region__button"
        :class="{ 'region__button--on': drawing.snap }"
        data-action="snap"
        :title="t('Region.snap')"
        :aria-label="t('Region.snap')"
        :aria-pressed="drawing.snap"
        @click="drawing.snap = !drawing.snap"
      >
        <DIcon :name="drawing.snap ? 'grid_on' : 'grid_off'" size="sm" />
      </button>
      <button
        type="button"
        class="region__button"
        data-action="delete"
        :disabled="drawing.selection.length === 0"
        :title="t('Region.delete')"
        :aria-label="t('Region.delete')"
        @click="drawing.remove()"
      >
        <DIcon name="delete" size="sm" />
      </button>
      <span class="region__divider" />
      <button
        type="button"
        class="region__button"
        data-action="cancel"
        :title="t('Region.cancel')"
        :aria-label="t('Region.cancel')"
        @click="emit('cancel')"
      >
        <DIcon name="close" size="sm" />
      </button>
      <button type="button" class="region__done" data-action="done" @click="finish">
        <DIcon name="check" size="sm" />
        {{ t('Region.done') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.region {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  /* A hint that the board is not what is being worked on now */
  background: color-mix(in srgb, var(--color-bg, #000) 12%, transparent);
  touch-action: none;
}

.region__surface {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  cursor: crosshair;
}

.region--select .region__surface {
  cursor: default;
}

.region__shape {
  fill: color-mix(in srgb, var(--color-accent, #3b82f6) 18%, transparent);
  stroke: var(--color-accent, #3b82f6);
  stroke-width: 1.5;
  vector-effect: non-scaling-stroke;
}

.region__shape--selected {
  stroke-width: 3;
  fill: color-mix(in srgb, var(--color-accent, #3b82f6) 34%, transparent);
  filter: drop-shadow(0 0 3px var(--color-accent, #3b82f6));
}

.region__shape--pending,
.region__line {
  stroke-dasharray: 5 4;
}

.region__line {
  fill: none;
  stroke: var(--color-accent, #3b82f6);
  stroke-width: 1.5;
}

.region__handle {
  fill: var(--color-pane, #fff);
  stroke: var(--color-accent, #3b82f6);
  stroke-width: 1.5;
}

.region__handle--insert {
  fill: var(--color-accent, #3b82f6);
  opacity: 0.6;
}

.region__first {
  fill: var(--color-pane, #fff);
  stroke: var(--color-accent, #3b82f6);
  stroke-width: 1.5;
}

.region__toolbar {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%));
}

.region__button,
.region__done {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 26px;
  color: var(--color-fg);
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.region__button {
  width: 26px;
}

.region__done {
  padding: 0 8px;
  font-size: var(--text-sm, 12px);
  color: var(--color-on-accent, #fff);
  background: var(--color-accent);
}

.region__button:hover:not(:disabled) {
  background: var(--color-raised);
}

.region__button--on {
  color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 16%, transparent);
}

.region__button:disabled {
  opacity: 0.4;
  cursor: default;
}

.region__button:focus-visible,
.region__done:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.region__divider {
  width: 1px;
  height: 18px;
  margin: 0 3px;
  background: var(--color-divider);
}
</style>
