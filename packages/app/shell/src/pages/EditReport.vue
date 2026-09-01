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
import { ref, computed, inject } from 'vue'

import { useWidgetsStore, type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import AddWidgetWindow from '@/components/common/AddWidgetWindow.vue'
import WidgetSettingsOverlay from '@/components/common/WidgetSettingsOverlay.vue'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { useRoute } from 'vue-router'
import PageSettings from '@/components/pageEditor/PageSettings.vue'
import { usePages } from '@/composables/usePages'
import { useWidgetPalette } from '@/composables/useWidgetPalette'
import { DFloatingWindow } from 'org.eclipse.daanse.board.app.ui.vue.controls'
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

/* ---- the palette ------------------------------------------------------- */

/*
 * Dragging, resizing, docking and remembering are the floating window's
 * job - the same one the overview uses. What is left here is whether the
 * palette shows at all, which the topbar asks about.
 */
const { visible: paletteVisible, hide: hidePalette } = useWidgetPalette()
</script>

<template>
  <div ref="board" class="editor">
    <!--
      The palette floats over the board and can be pushed aside, rather than
      taking a column from it: on a board that fills the screen, the column
      was width the widgets could have had. The button that opens it sits in
      the topbar.
    -->
    <DFloatingWindow
      v-if="paletteVisible"
      title="Widgets"
      remember-as="daanse.board.palette"
      :initial="{ x: 0, y: 0, w: 240, h: 460, dock: 'left' }"
      :min-width="180"
      :max-width="420"
      :min-height="200"
      dockable
      @close="hidePalette"
    >
      <template #actions>
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
      </template>

      <AddWidgetWindow />
    </DFloatingWindow>

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
  /* Said out loud: the board goes to the edge, and a class named "editor"
     is common enough that something else may try to pad it */
  padding: 0;
  border: 0;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg);
}

/* The one action the palette adds to its window's title bar */
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
