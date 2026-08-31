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
import { ref, computed, inject, onBeforeUnmount } from 'vue'

import { useWidgetsStore, type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import AddWidgetWindow from '@/components/common/AddWidgetWindow.vue'
import WidgetSettingsOverlay from '@/components/common/WidgetSettingsOverlay.vue'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { useRoute } from 'vue-router'
import PageSettings from '@/components/pageEditor/PageSettings.vue'
import { usePages } from '@/composables/usePages'
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

/* The palette is a panel now, so it starts open - the mockups show it as
 * part of the edit mode rather than something you summon. */
const widgetSelectorVisible = ref(true)

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

/* ---- palette splitter ------------------------------------------------ */
const paletteWidth = ref(240)
const MIN = 200
const MAX = 460

let drag: { startX: number; startW: number } | null = null

const onMove = (e: PointerEvent) => {
  if (!drag) return
  paletteWidth.value = Math.min(MAX, Math.max(MIN, drag.startW + (e.clientX - drag.startX)))
}

const endDrag = () => {
  drag = null
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerup', endDrag)
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

const startDrag = (_side: 'left', e: PointerEvent) => {
  drag = { startX: e.clientX, startW: paletteWidth.value }
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', endDrag)
  document.body.style.cursor = 'col-resize'
  document.body.style.userSelect = 'none'
}

/** Keyboard equivalent for the splitter. */
const nudge = (_side: 'left', step: number) => {
  paletteWidth.value = Math.min(MAX, Math.max(MIN, paletteWidth.value + step))
}

onBeforeUnmount(endDrag)
</script>

<template>
  <div class="editor">
    <!-- Widget palette -->
    <aside v-if="widgetSelectorVisible" class="panel" :style="{ width: paletteWidth + 'px' }">
      <div class="ph">
        Widgets
        <span class="sp"></span>
        <button
          v-if="endpointfinder_present"
          type="button"
          class="pha"
          title="Endpunkte suchen"
          @click="endPointFinder()"
        >
          <va-icon name="travel_explore" size="16px" />
        </button>
        <button
          type="button"
          class="pha"
          title="Palette schließen"
          @click="widgetSelectorVisible = false"
        >
          <va-icon name="close" size="16px" />
        </button>
      </div>
      <div class="pbody">
        <AddWidgetWindow />
      </div>
    </aside>

    <div
      v-if="widgetSelectorVisible"
      class="split-x"
      role="separator"
      aria-orientation="vertical"
      aria-label="Breite der Widget-Palette"
      tabindex="0"
      @pointerdown.prevent="startDrag('left', $event)"
      @keydown.left.prevent="nudge('left', -16)"
      @keydown.right.prevent="nudge('left', 16)"
    ></div>

    <!-- Board surface -->
    <div class="report-container dottet">
      <LayoutRenderer :pageId="pageID as string" @openWidgetSettings="openWidgetSettings" />

      <button
        v-if="!widgetSelectorVisible"
        type="button"
        class="palette-reopen"
        title="Widget-Palette öffnen"
        @click="widgetSelectorVisible = true"
      >
        <va-icon name="add" size="18px" />
        Widgets
      </button>

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
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg);
}

.panel {
  flex: none;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--color-pane);
  overflow: hidden;
}
.panel:first-child {
  border-right: 1px solid var(--color-divider);
}
.panel:last-child {
  border-left: 1px solid var(--color-divider);
}

/* Panel header: 30px, 11px uppercase, as specified in the mockups */
.ph {
  height: var(--spacing-panelHeader, 30px);
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 6px 0 12px;
  font-size: var(--text-xs, 11px);
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
  white-space: nowrap;
  overflow: hidden;
}
.ph .sp {
  flex: 1;
}
.ph .pha {
  border: 0;
  background: transparent;
  color: var(--color-dim);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-xs, 3px);
}
.ph .pha:hover {
  color: var(--color-fg);
  background: var(--color-bg);
}
.ph .pha:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.pbody {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

/* 4px splitter, as in the mockups - draggable, and reachable by keyboard. */
.split-x {
  flex: none;
  width: var(--spacing-splitter, 4px);
  background: var(--color-divider);
  cursor: col-resize;
  position: relative;
}
.split-x::after {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 2px;
  height: 26px;
  border-radius: 2px;
  background: var(--color-outline);
}
.split-x:hover {
  background: var(--color-outline);
}
.split-x:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -1px;
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

/* Only shown when the palette was closed. */
.palette-reopen {
  position: absolute;
  left: 12px;
  top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px 5px 7px;
  font: inherit;
  font-size: var(--text-sm, 12px);
  font-weight: 500;
  color: var(--color-fg);
  background: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm, 5px);
  box-shadow: var(--shadow-e1);
  cursor: pointer;
  z-index: 10;
}
.palette-reopen:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
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
