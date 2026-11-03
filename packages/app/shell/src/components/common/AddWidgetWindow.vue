<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList, useRegistrations, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { inject, ref, computed, watch } from 'vue'
import Draggable from 'vuedraggable'
// import SERVICE_IDENTIFIER from "@/config/identifiers/services";

const selectedDatasource = ref('')
const selectedType = ref('')
const dataSources = useEList(inject<Workspace>(WORKSPACE)!, (w) => w.datasources)

const onDragStart = (event: DragEvent) => {
  const dragElement = document.createElement('div')
  document.body.appendChild(dragElement)
  event.dataTransfer?.setDragImage(dragElement, 0, 0)
  setTimeout(() => {
    document.body.removeChild(dragElement)
  }, 0)
}

const registeredWidgets = inject<WidgetRepository>(identifier)!
const { t } = useTranslation('shell')
/*
 * Read again on every registration: a widget bundle can activate after the
 * palette has mounted, and the pivot table used to be missing until the
 * route changed.
 */
const availableWidgets = useRegistrations(registeredWidgets, () =>
  Object.entries(registeredWidgets.getAllWidgets())
    //.filter(([_, widget]) => widget.icon)
    .map(([name, widget]) => ({ type: name, name: widget.name, nameKey: widget.nameKey, icon: widget.icon })),
)

/*
 * Every registered widget, unfiltered.
 *
 * What stood here was a commented-out filter matching widget.supportedDSTypes
 * against a hand-written table of source types - both of which are gone
 * (#1183): a widget now says which data shapes it reads, a source type says
 * which it answers, and `fits` puts the two together. Wiring that into this
 * palette is #1184.
 */
const computedWidgets = computed(() => availableWidgets.value)

const filteredTypes = computed(() => {
  return [
    'None',
    ...dataSources.value.map((ds) => ds.type).filter((el, id, arr) => id === arr.indexOf(el)),
  ]
})

const filteredIds = computed(() => {
  return dataSources.value.filter((ds) => ds.type === selectedType.value).map((ds) => ({ uid: ds.uid }))
})

watch(selectedType, (newType) => {
  if (!newType || newType === 'None') {
    selectedDatasource.value = ''
  } else {
    const availableIds = filteredIds.value.map((ds) => ds.uid)
    if (!availableIds.includes(selectedDatasource.value)) {
      selectedDatasource.value = ''
    }
  }
})
</script>

<template>
  <div class="add_widget_window">
    <div class="add_widget_window__scroll">
    <draggable
      class="widgets_grid"
      :list="computedWidgets"
      :group="{ name: 'widgets', pull: 'clone', put: false }"
      itemKey="type"
    >
      <template #item="{ element }">
        <div
          class="widgets_grid-item"
          draggable="true"
          @dragstart="(event) => onDragStart(event)"
        >
          <span class="widgets_grid-icon"><img :src="element.icon" alt="" /></span>
          <span class="widgets_grid-name">{{ element.nameKey ? t(element.nameKey, { defaultValue: element.name }) : element.name }}</span>
        </div>
      </template>
    </draggable>
    </div>
  </div>
</template>

<style scoped>
/* A list, not a tile grid - that is what the mockups' palette is, and it
  survives a 240px column. */
.widgets_grid {
  display: flex;
  flex-direction: column;
}

:deep() .widgets_grid-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  padding: 6px 12px;
  font-size: var(--text-base, 13px);
  color: var(--color-fg);
  cursor: grab;
  border-radius: var(--radius-sm, 5px);
  margin: 0 6px;
}

:deep() .widgets_grid-item:hover {
  background: var(--color-bg);
}

:deep() .widgets_grid-icon {
  width: 26px;
  height: 26px;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm, 5px);
  overflow: hidden;
}

:deep() .widgets_grid-icon img {
  max-width: 18px;
  max-height: 18px;
}

:deep() .widgets_grid-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Docked into the palette panel of the editor (mockup screen 4) - the panel
  owns position, width and header now. */
.add_widget_window {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 6px 0;
}

/* What the scroll container was: a box that scrolls. */
.add_widget_window__scroll {
  height: 100%;
  overflow-y: auto;
}
</style>
