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
 * A window that floats over a surface: dragged by its title bar, optionally
 * resized from its bottom right corner, and remembered where it was left.
 *
 * Floating rather than docked into the layout, because a panel that takes a
 * column takes it from the thing it is about. What it covers stays
 * reachable by moving it, which is cheaper than a layout that has to make
 * room.
 *
 * It measures itself against the element it is positioned in - whatever
 * ancestor is `position: relative` - so a window is kept inside the board
 * it belongs to rather than inside the browser window.
 */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { dockCount, dockSlot, dockWidth, joinDock, leaveDock, setDockWidth, type DockSide } from './dock'

export interface Placement {
  x: number
  y: number
  w: number
  h: number
  /** Which side it is fastened to, if any. */
  dock: 'left' | 'right' | null
  /** Where and how tall it was before it was docked. */
  freeY: number
  freeH: number
}

const props = withDefaults(
  defineProps<{
    title: string
    /** Where it starts, the first time it is ever opened. */
    initial?: Partial<Placement>
    /** Remembered per browser under this key; omit to not remember. */
    rememberAs?: string
    /** Can it be resized from the corner? */
    resizable?: boolean
    /**
     * Can it fasten to the left or right edge, over the full height?
     * An edge is a side of the room, so a docked window takes all of it.
     */
    dockable?: boolean
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    /** Shown as a close button in the title bar. */
    closable?: boolean
    /**
     * Where it sits in the stack.
     *
     * The default puts it above what it floats over and below the windows
     * that cover everything: on a board that is above the widgets and the
     * controls they show on hover, and below the settings windows.
     */
    layer?: number
  }>(),
  {
    resizable: true,
    dockable: false,
    minWidth: 160,
    maxWidth: 480,
    minHeight: 120,
    closable: true,
    layer: 20000,
  },
)

const emit = defineEmits<{ close: [] }>()

/*
 * A window that starts on an edge can return to one.
 *
 * Declaring it docked but not dockable puts it in a state it cannot reach
 * again: pull it off the edge once and it floats for good. The two say the
 * same thing, so one implies the other rather than contradicting it.
 */
const canDock = computed(() => props.dockable || props.initial?.dock != null)

/** How close to an edge counts as "at it". */
const SNAP = 24

const DEFAULT: Placement = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 }

function read(): Placement {
  const start: Placement = { ...DEFAULT, ...props.initial } as Placement
  start.freeY = start.y
  start.freeH = start.h
  if (!props.rememberAs) return start

  try {
    const raw = localStorage.getItem(props.rememberAs)
    if (!raw) return start
    const d = JSON.parse(raw)
    const num = (v: unknown, fallback: number) => (Number.isFinite(v) ? (v as number) : fallback)
    return {
      x: num(d?.x, start.x),
      y: num(d?.y, start.y),
      w: num(d?.w, start.w),
      h: num(d?.h, start.h),
      dock: d?.dock === 'left' || d?.dock === 'right' ? d.dock : null,
      freeY: num(d?.freeY, start.y),
      freeH: num(d?.freeH, start.h),
    }
  } catch {
    // Private windows and cleared site data are normal, not an error
    return start
  }
}

const place = ref<Placement>(read())
const root = ref<HTMLElement>()

function persist() {
  if (!props.rememberAs) return
  try {
    localStorage.setItem(props.rememberAs, JSON.stringify(place.value))
  } catch {
    // Remembering is a convenience; failing to must not break the app
  }
}

function clampW(w: number) {
  return Math.min(props.maxWidth, Math.max(props.minWidth, w))
}

/** The element it is positioned in, which is what it is kept inside of. */
function bounds() {
  const parent = root.value?.offsetParent as HTMLElement | null
  return {
    width: parent?.clientWidth ?? window.innerWidth,
    height: parent?.clientHeight ?? window.innerHeight,
  }
}

/*
 * Its name in the register. The remembered key where there is one, so a
 * window keeps its place in the column across reloads; the title otherwise.
 */
const dockId = computed(() => props.rememberAs ?? props.title)

/** The area to divide up, measured when it is needed. */
const room = ref({ width: 0, height: 0 })

/**
 * Takes this window's share of its column.
 *
 * Asked for, not watched: the register is written while a window joins or
 * leaves, and a watcher that writes back the placement it just read would
 * chase its own tail.
 */
function applySlot() {
  const side = place.value.dock
  if (!side) return
  const slot = dockSlot(dockId.value, room.value.height)
  if (!slot) return
  const w = dockWidth(side)
  place.value = {
    ...place.value,
    w,
    x: side === 'left' ? 0 : Math.max(0, room.value.width - w),
    y: slot.y,
    h: slot.h,
  }
}

/*
 * Another window joining or leaving the same edge changes what is left for
 * this one. Watching the count alone is enough - it is the only thing that
 * changes without this window doing anything.
 */
watch(
  () => {
    const side = place.value.dock
    if (!side) return ''
    // An edge is one column, so its windows share both the split and the width
    return `${dockCount(side)}:${dockWidth(side)}`
  },
  (now) => {
    if (!now) return
    room.value = bounds()
    applySlot()
  },
)

function dockTo(side: DockSide, b: { width: number; height: number }) {
  const p = place.value
  room.value = b

  // Only remember the floating shape on the way in, not on every move
  const freeY = p.dock ? p.freeY : p.y
  const freeH = p.dock ? p.freeH : p.h

  if (!p.dock) setDockWidth(side, clampW(p.w))
  joinDock(dockId.value, side, freeH, props.minHeight)

  place.value = { ...p, dock: side, freeY, freeH }
  applySlot()
}

function undock() {
  const p = place.value
  if (!p.dock) return
  leaveDock(dockId.value)
  place.value = { ...p, y: p.freeY, h: p.freeH, dock: null }
}

type Gesture =
  | { kind: 'move'; startX: number; startY: number; fromX: number; fromY: number }
  | { kind: 'size'; startX: number; startY: number; fromW: number; fromH: number }

let gesture: Gesture | null = null

function onMove(e: PointerEvent) {
  if (!gesture) return
  const b = bounds()

  if (gesture.kind === 'move') {
    const w = place.value.w
    // Kept inside: a window dragged past the edge cannot be brought back,
    // because the bar you drag it by went with it
    const x = Math.min(
      Math.max(0, gesture.fromX + (e.clientX - gesture.startX)),
      Math.max(0, b.width - w),
    )
    const y = Math.min(
      Math.max(0, gesture.fromY + (e.clientY - gesture.startY)),
      Math.max(0, b.height - 28),
    )

    if (canDock.value && x <= SNAP) dockTo('left', b)
    else if (canDock.value && x + w >= b.width - SNAP) dockTo('right', b)
    else {
      undock()
      place.value = { ...place.value, x, y }
    }
    return
  }

  const w = clampW(gesture.fromW + (e.clientX - gesture.startX))
  if (place.value.dock) {
    /*
     * The column's width, not this window's: they share an edge, so they
     * share how wide it is. The height is the column's to divide.
     */
    room.value = b
    setDockWidth(place.value.dock, w)
    applySlot()
    return
  }
  place.value = {
    ...place.value,
    w,
    h: Math.max(props.minHeight, gesture.fromH + (e.clientY - gesture.startY)),
  }
}

function endGesture() {
  if (gesture) persist()
  gesture = null
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerup', endGesture)
  document.body.style.userSelect = ''
}

function begin(g: Gesture) {
  gesture = g
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', endGesture)
  document.body.style.userSelect = 'none'
}

const startMove = (e: PointerEvent) =>
  begin({ kind: 'move', startX: e.clientX, startY: e.clientY, fromX: place.value.x, fromY: place.value.y })

const startResize = (e: PointerEvent) =>
  begin({ kind: 'size', startX: e.clientX, startY: e.clientY, fromW: place.value.w, fromH: place.value.h })

/** Keyboard equivalent, so the window can be placed without a pointer. */
function nudge(dx: number, dy: number) {
  const b = bounds()
  const w = place.value.w
  const x = Math.min(Math.max(0, place.value.x + dx), Math.max(0, b.width - w))

  if (canDock.value && x <= SNAP) dockTo('left', b)
  else if (canDock.value && x + w >= b.width - SNAP) dockTo('right', b)
  else {
    undock()
    place.value = {
      ...place.value,
      x,
      y: Math.min(Math.max(0, place.value.y + dy), Math.max(0, b.height - 28)),
    }
  }
  persist()
}

/**
 * Pulls the window back into view.
 *
 * A window remembered at the edge of a wide screen is off-screen on a
 * narrow one, and a window nobody can reach cannot even be closed.
 */
function keepInView() {
  const b = bounds()
  room.value = b
  const p = place.value
  const w = Math.min(clampW(p.w), b.width)

  if (p.dock) {
    applySlot()
    return
  }

  const h = Math.min(p.h, b.height)
  place.value = {
    ...p,
    w,
    h,
    x: Math.min(Math.max(0, p.x), Math.max(0, b.width - w)),
    y: Math.min(Math.max(0, p.y), Math.max(0, b.height - h)),
  }
}

onMounted(() => {
  // A window that starts docked has to say so, or the column will not know
  if (place.value.dock) {
    const b = bounds()
    room.value = b
    setDockWidth(place.value.dock, clampW(place.value.w))
    joinDock(dockId.value, place.value.dock, place.value.freeH, props.minHeight)
  }
  keepInView()
  window.addEventListener('resize', keepInView)
})

onBeforeUnmount(() => {
  endGesture()
  // Its share goes back to the others
  leaveDock(dockId.value)
  window.removeEventListener('resize', keepInView)
})

const style = computed(() => ({
  left: place.value.x + 'px',
  top: place.value.y + 'px',
  width: place.value.w + 'px',
  height: place.value.h + 'px',
  zIndex: String(props.layer),
}))

defineExpose({ placement: place, keepInView })
</script>

<template>
  <aside
    ref="root"
    :class="[
      'fw',
      {
        'fw--docked': !!place.dock,
        'fw--left': place.dock === 'left',
        'fw--right': place.dock === 'right',
      },
    ]"
    :style="style"
    :aria-label="title"
  >
    <div
      class="fw__bar"
      role="toolbar"
      tabindex="0"
      :aria-label="`${title} verschieben - mit den Pfeiltasten bewegen`"
      @pointerdown.prevent="startMove($event)"
      @keydown.left.prevent="nudge(-16, 0)"
      @keydown.right.prevent="nudge(16, 0)"
      @keydown.up.prevent="nudge(0, -16)"
      @keydown.down.prevent="nudge(0, 16)"
    >
      <span class="fw__title">{{ title }}</span>
      <!-- Anything the window itself offers, before the close button -->
      <slot name="actions" />
      <button
        v-if="closable"
        type="button"
        class="fw__act"
        title="Schließen"
        :aria-label="`${title} schließen`"
        @pointerdown.stop
        @click="emit('close')"
      >
        ×
      </button>
    </div>

    <div class="fw__body">
      <slot />
    </div>

    <div
      v-if="resizable"
      class="fw__grip"
      role="separator"
      :aria-label="`Größe von ${title}`"
      title="Größe ändern"
      @pointerdown.prevent="startResize($event)"
    ></div>
  </aside>
</template>

<style scoped>
.fw {
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%));
}

/* Fastened to a side: square against the edge it holds, and no border
   shared with it */
.fw--docked {
  border-radius: 0;
}

.fw--docked.fw--left {
  border-left: 0;
}

.fw--docked.fw--right {
  border-right: 0;
}

.fw--docked .fw__grip {
  cursor: ew-resize;
}

/* The whole bar is the handle, so there is nothing small to aim at */
.fw__bar {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: none;
  height: 28px;
  padding: 0 4px 0 10px;
  border-bottom: 1px solid var(--color-divider);
  cursor: grab;
  touch-action: none;
  user-select: none;
}

.fw__bar:active {
  cursor: grabbing;
}

.fw__bar:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.fw__title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--text-xs, 11px);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.fw__act {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 14px;
  line-height: 1;
  color: var(--color-dim);
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.fw__act:hover {
  color: var(--color-fg);
  background-color: var(--color-raised);
}

.fw__act:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.fw__body {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

/* Bottom right corner, where a window is resized */
.fw__grip {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 14px;
  height: 14px;
  cursor: nwse-resize;
  touch-action: none;
}

.fw__grip::after {
  content: '';
  position: absolute;
  right: 3px;
  bottom: 3px;
  width: 6px;
  height: 6px;
  border-right: 2px solid var(--color-outline, #3a4756);
  border-bottom: 2px solid var(--color-outline, #3a4756);
}
</style>
