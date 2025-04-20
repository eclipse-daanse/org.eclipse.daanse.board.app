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
import { useDataSourcesStore } from '@/stores/DatasourcePinia'
import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { ref, computed, watch, getCurrentInstance } from 'vue'
import Draggable from 'vuedraggable'
import type { Container } from 'inversify'
// import SERVICE_IDENTIFIER from "@/config/identifiers/services";

const selectedDatasource = ref('')
const selectedType = ref('')
const { dataSources } = useDataSourcesStore()
const instance = getCurrentInstance()
const container = instance?.appContext.config.globalProperties.$container as Container

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

const registeredWidgets = container.get<WidgetRepository>(identifier)
console.log(registeredWidgets.getAllWidgets())
const availableWidgets = Object.entries(registeredWidgets.getAllWidgets())
  .filter(([_, widget]) => widget.icon)
  .map(([name, widget]) => ({ type: name, icon: widget.icon }))

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
    ...dataSources.map((ds) => ds.type).filter((el, id, arr) => id === arr.indexOf(el)),
  ]
})

const filteredIds = computed(() => {
  return dataSources.filter((ds) => ds.type === selectedType.value).map((ds) => ({ uid: ds.uid }))
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
    <h1>Add Widget</h1>
    <VaSelect
      label="Datasource type"
      class="mx-3 my-3"
      v-model="selectedType"
      :options="filteredTypes"
      teleport=".add_widget_window"
    />
    <VaSelect
      v-if="selectedType && selectedType !== 'None'"
      label="Datasource ID"
      class="mx-3 my-3"
      v-model="selectedDatasource"
      :options="filteredIds"
      text-by="uid"
      value-by="uid"
      teleport=".add_widget_window"
    />
    <draggable
      class="widgets_grid"
      :list="computedWidgets"
      :group="{ name: 'widgets', pull: 'clone', put: false }"
      itemKey="type"
    >
      <template #item="{ element }">
        <div class="widgets_grid-item" draggable="true" @dragstart="(event) => onDragStart(event)">
          <!-- <div style="height: 100px; width: 100px;
          background-image: url(https://via.assets.so/img.jpg?w=100&h=100&tc=black&bg=silver);">
        </div> -->
          <!-- <VaIcon class="material-icons mt-4" size="4rem">{{ element.icon }}</VaIcon> -->
          <img class="m-2" :src="element.icon" />
          <span>{{ element.type }}</span>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.widgets_grid {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 1rem;
}

:deep() .widgets_grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 1rem; */
  border: 1px solid gray;
  border-radius: 5px;
}

.add_widget_window {
  position: absolute;
  height: calc(100% - 100px);
  width: 400px;
  right: 20px;
  top: 20px;
  background-color: #ecf0f1;
  padding: 1rem;
  border-radius: 8px;
  z-index: 1000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
