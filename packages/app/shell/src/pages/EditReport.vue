<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  Board editor after mockup screen 4 "Board bearbeiten": widget palette and
  widget settings are docked panels with draggable splitters
  (240px | 4px | canvas | 4px | 300px) instead of a floating FAB and modal
  windows. The palette is open by default - placing widgets is what this
  mode is for.
-->

<script setup lang="ts">
import { ref, computed, inject, nextTick, onBeforeUnmount, onMounted } from 'vue'

import { useWidgetsStore, type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import AddWidgetWindow from '@/components/common/AddWidgetWindow.vue'
import WidgetSettingsOverlay from '@/components/common/WidgetSettingsOverlay.vue'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { useRoute } from 'vue-router'
import PageSettings from '@/components/pageEditor/PageSettings.vue'
import { usePages } from '@/composables/usePages'
import { useWidgetPalette } from '@/composables/useWidgetPalette'
import LayoutRenderer from '@/components/pageEditor/LayoutRenderer.vue'

const widgetSettingsOpenedId = ref('')
const route = useRoute()

const pageID = route.params.pageid ?? ''
const { widgets } = useWidgetsStore((pageID as string) || '')

const innerWidgets = ref<IWidget[]>([])

const endpointfinder = inject('endpointfinder', null)
const endPointFinder = () => {
  ;(endpointfinder as any)()
}
const endpointfinder_present = computed(() => !!endpointfinder)

/* Asked for in the topbar, shown here - see usePages */
const { settingsFor: pageSettingsFor, closeSettings: closePageSettings } = usePages()

const openWidgetSettings = (id: string) => {
  widgetSettingsOpenedId.value = id
}

const currentlyEditingWidget = computed(() => {
  const widgetFromStore = widgets?.find((widget: any) => widget.uid === widgetSettingsOpenedId.value)
  if (widgetFromStore) return widgetFromStore
  return innerWidgets.value.find((widget) => widget.uid === widgetSettingsOpenedId.value)
})

/*
 * The preview shows the widget at the size it has on the board, so what is
 * set here is set for the real thing rather than for a stand-in.
 */
const { layout } = useLayoutStore((pageID as string) || '')
const editedWidgetSize = computed(() => {
  const item = (layout as Array<{ id?: string; width?: number; height?: number }> | undefined)?.find(
    (entry) => entry.id === widgetSettingsOpenedId.value,
  )
  if (!item?.width || !item?.height) return undefined
  return { width: item.width, height: item.height }
})

/* ---- the palette, floating -------------------------------------------- */

/*
 * Dragged by its title bar, resized from its bottom right corner, and the
 * board underneath stays reachable - which is the point of it floating
 * rather than taking a column of its own. Where it was left is remembered.
 */
const {
  visible: paletteVisible,
  placement: palette,
  hide: hidePalette,
  moveTo,
  resizeTo,
  settle,
  keepInView,
} = useWidgetPalette()

const board = ref<HTMLElement>()

type Gesture =
  | { kind: 'move'; startX: number; startY: number; fromX: number; fromY: number }
  | { kind: 'size'; startX: number; startY: number; fromW: number; fromH: number }

let gesture: Gesture | null = null

function bounds() {
  const rect = board.value?.getBoundingClientRect()
  return { width: rect?.width ?? window.innerWidth, height: rect?.height ?? window.innerHeight }
}

/**
 * How close to an edge counts as "at it".
 *
 * Enough that aiming at the edge lands on it, small enough that a window
 * deliberately placed a little way in stays where it was put.
 */
const SNAP = 24

/** The left and right edges pull: they are where a palette usually belongs. */
function magnetic(x: number, width: number, available: number): number {
  if (x <= SNAP) return 0
  if (x + width >= available - SNAP) return Math.max(0, available - width)
  return x
}

const onMove = (e: PointerEvent) => {
  if (!gesture) return
  if (gesture.kind === 'move') {
    const b = bounds()
    const w = palette.value.w
    // Kept inside the board: a window dragged past the edge cannot be
    // brought back, because the bar you drag it by went with it
    const x = Math.min(Math.max(0, gesture.fromX + (e.clientX - gesture.startX)), Math.max(0, b.width - w))
    moveTo(
      magnetic(x, w, b.width),
      Math.min(Math.max(0, gesture.fromY + (e.clientY - gesture.startY)), Math.max(0, b.height - 28)),
    )
  } else {
    resizeTo(
      gesture.fromW + (e.clientX - gesture.startX),
      gesture.fromH + (e.clientY - gesture.startY),
    )
  }
}

const endDrag = () => {
  if (gesture) settle()
  gesture = null
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerup', endDrag)
  document.body.style.userSelect = ''
}

function begin(g: Gesture) {
  gesture = g
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', endDrag)
  document.body.style.userSelect = 'none'
}

const startMove = (e: PointerEvent) =>
  begin({
    kind: 'move',
    startX: e.clientX,
    startY: e.clientY,
    fromX: palette.value.x,
    fromY: palette.value.y,
  })

const startResize = (e: PointerEvent) =>
  begin({
    kind: 'size',
    startX: e.clientX,
    startY: e.clientY,
    fromW: palette.value.w,
    fromH: palette.value.h,
  })

/** Keyboard equivalent, so the window can be placed without a pointer. */
const nudge = (dx: number, dy: number) => {
  moveTo(Math.max(0, palette.value.x + dx), Math.max(0, palette.value.y + dy))
  settle()
}

/* A window remembered on a wide screen must not be lost on a narrow one */
const onResize = () => keepInView(bounds())
onMounted(() => {
  nextTick(onResize)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  endDrag()
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div ref="board" class="editor">
    <!--
      The palette floats over the board and can be pushed aside, rather than
      taking a column from it: on a board that fills the screen, the column
      was width the widgets could have had. The button that opens it sits in
      the topbar.
    -->
    <aside
      v-if="paletteVisible"
      class="palette"
      aria-label="Widgets"
      :style="{
        left: palette.x + 'px',
        top: palette.y + 'px',
        width: palette.w + 'px',
        height: palette.h + 'px',
      }"
    >
      <div
        class="palette__bar"
        role="toolbar"
        tabindex="0"
        aria-label="Palette verschieben - mit den Pfeiltasten bewegen"
        @pointerdown.prevent="startMove($event)"
        @keydown.left.prevent="nudge(-16, 0)"
        @keydown.right.prevent="nudge(16, 0)"
        @keydown.up.prevent="nudge(0, -16)"
        @keydown.down.prevent="nudge(0, 16)"
      >
        <span class="palette__title">Widgets</span>
        <button
          v-if="endpointfinder_present"
          type="button"
          class="palette__act"
          title="Endpunkte suchen"
          @pointerdown.stop
          @click="endPointFinder()"
        >
          <va-icon name="travel_explore" size="15px" />
        </button>
        <button
          type="button"
          class="palette__act"
          title="Schließen"
          aria-label="Palette schließen"
          @pointerdown.stop
          @click="hidePalette"
        >
          <va-icon name="close" size="15px" />
        </button>
      </div>

      <div class="palette__body">
        <AddWidgetWindow />
      </div>

      <div
        class="palette__grip"
        role="separator"
        aria-label="Größe der Palette"
        title="Größe ändern"
        @pointerdown.prevent="startResize($event)"
      ></div>
    </aside>

    <!-- Board surface -->
    <div class="report-container dottet">
      <LayoutRenderer :pageId="pageID as string" @openWidgetSettings="openWidgetSettings" />

      <!--
        Which page is open, and how to reach another, is asked in the topbar
        now - the card that used to float here said the same thing the
        breadcrumb above already did. The settings still belong over the
        board, since that is what they change.
      -->
      <Transition :duration="150">
        <PageSettings
          v-if="pageSettingsFor"
          v-model="pageSettingsFor"
          @close="closePageSettings"
        ></PageSettings>
      </Transition>
    </div>

    <!-- Widget settings: an overlay, so the widget can be shown beside them -->
    <WidgetSettingsOverlay
      v-if="widgetSettingsOpenedId && currentlyEditingWidget"
      v-model="currentlyEditingWidget"
      :board-size="editedWidgetSize"
      @close="widgetSettingsOpenedId = ''"
    >
      <template #preview>
        <WidgetWrapper :widget="currentlyEditingWidget" :edit-enabled="false" />
      </template>
    </WidgetSettingsOverlay>
  </div>
</template>

<style>
.ghost {
  display: none;
}
</style>

<style scoped>
/* Three docked columns; the panels keep their width, the board takes the rest. */
.editor {
  /* The frame the palette floats in, and is kept inside of */
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg);
}

/* ------------------------------------------------- the floating palette */

.palette {
  position: absolute;
  z-index: 900;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%));
}

/* The whole bar is the handle, so there is nothing small to aim at */
.palette__bar {
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

.palette__bar:active {
  cursor: grabbing;
}

.palette__bar:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.palette__title {
  flex: 1;
  font-size: var(--text-xs, 11px);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.palette__act {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: var(--color-dim);
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.palette__act:hover {
  color: var(--color-fg);
  background-color: var(--color-raised);
}

.palette__act:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.palette__body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

/* Bottom right corner, where a window is resized */
.palette__grip {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 14px;
  height: 14px;
  cursor: nwse-resize;
  touch-action: none;
}

.palette__grip::after {
  content: '';
  position: absolute;
  right: 3px;
  bottom: 3px;
  width: 6px;
  height: 6px;
  border-right: 2px solid var(--color-outline, #3a4756);
  border-bottom: 2px solid var(--color-outline, #3a4756);
}

.report-container {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  min-width: 0;
  height: 100%;
  position: relative;
  /* Board surface from the mockups (edit mode): canvas token + 24px dot grid */
  background: var(--color-canvas);
}

.report-container.dottet {
  background-image: radial-gradient(var(--color-divider) 1px, transparent 0);
  background-size: 24px 24px;
  background-position: -12px -12px;
  background-repeat: repeat;
}

.report-container__title {
  width: 100%;
  padding: 16px;
  border-bottom: 1px dashed var(--color-divider);
}

.report-container .widgets-adding-controls {
  display: flex;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-md, 8px);
  margin: 16px;
}

.report-container .widget-board {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}

.report-container .add-btn {
  margin: 0 16px 16px 0;
  align-self: self-end;
}

.dashboard-item {
  position: absolute;
  width: 100%;
  height: 100%;
}

.dashboard-item-container {
  position: absolute;
}

.dropdown-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
}

.va-dropdown__content {
  z-index: 10000000 !important;
}

.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper {
  z-index: 20000000 !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
