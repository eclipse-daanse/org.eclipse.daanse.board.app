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
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { inject, ref, computed, watch } from 'vue'
import Draggable from 'vuedraggable'
// import SERVICE_IDENTIFIER from "@/config/identifiers/services";

const selectedDatasource = ref('')
const selectedType = ref('')
const dataSources = useEList(inject<Workspace>(WORKSPACE)!, (w) => w.datasources)

const dataSourceTypeToDataTypes = {
  CSV: ['DataTable'],
  GraphQL: ['DataTable'],
  REST: ['String', 'Object', 'DataTable'],
  XMLA: ['DataTable', 'PivotTable'],
  WS: ['String', 'Object', 'DataTable'],
  Chart: ['ChartData'],
  'SQL over XMLA': ['DataTable'],
}

const onDragStart = (event: DragEvent) => {
  const dragElement = document.createElement('div')
  document.body.appendChild(dragElement)
  event.dataTransfer?.setDragImage(dragElement, 0, 0)
  setTimeout(() => {
    document.body.removeChild(dragElement)
  }, 0)
}

const registeredWidgets = inject<WidgetRepository>(identifier)!
console.log(registeredWidgets.getAllWidgets())
const availableWidgets = Object.entries(registeredWidgets.getAllWidgets())
  //.filter(([_, widget]) => widget.icon)
  .map(([name, widget]) => ({ type: name,name:widget.name ,icon: widget.icon }))

const computedWidgets = computed(() => {
  return availableWidgets
  // if (!selectedType.value || selectedType.value === "None") {
  //     return availableWidgets
  //         .filter((widget) => {
  //             const supportedTypes =
  //                 registeredWidgets.getAllWidgets()[widget.type]?.supportedDSTypes || [];
  //             return supportedTypes.includes("None");
  //         })
  //         .map((widget) => ({
  //             ...widget,
  //             ds: selectedDatasource.value,
  //         }));
  // }

  // const allowedDataTypes =
  //     dataSourceTypeToDataTypes[selectedType.value as keyof typeof dataSourceTypeToDataTypes] ||
  //     [];

  // const baseWidgets = Object.entries(registeredWidgets.getAllWidgets())
  //     .filter(([_, widget]) => {
  //         const supportedTypes = widget.supportedDSTypes || [];
  //         return supportedTypes.some((type) => allowedDataTypes.includes(type));
  //     })
  //     .map(([name, widget]) => ({ type: name, icon: widget.icon }));

  // return baseWidgets.map((widget) => ({
  //     ...widget,
  //     ds: selectedDatasource.value,
  // }));
})

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
          <span class="widgets_grid-name">{{ element.name }}</span>
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
