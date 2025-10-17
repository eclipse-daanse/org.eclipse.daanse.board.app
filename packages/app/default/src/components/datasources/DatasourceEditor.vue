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
import { computed, onMounted, ref } from 'vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { useDataSourcesStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { cloneDeep } from 'lodash'

const props = defineProps({
  itemId: {
    type: String,
    required: true,
  },
})

const datasourceProxy = ref({} as any)

const datasourceRepository = container.get<DatasourceRepository>(identifier)
const { dataSources, updateDataSource } = useDataSourcesStore()
const { connections } = useConnectionsStore()

const availableDatasources = computed(() => {
  return datasourceRepository.registeredDatasources
})

onMounted(() => {
  const dataSource = dataSources.find((ds: any) => ds.uid === props.itemId)
  datasourceProxy.value = cloneDeep(dataSource)
})

const saveDataSource = () => {
  updateDataSource(datasourceProxy.value.uid, datasourceProxy.value)
  emit('close')
}

const previewComponent = computed(() => {
  const identifiers = datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type)

  if (!identifiers) {
    return null
  }

  return container.get(identifiers.Preview)
})

const settingsComponent = computed(() => {
  const identifiers = datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type)
  console.log(identifiers);

  if (!identifiers) {
    return null
  }

  return container.get(identifiers.Settings)
})

const updateConfig = (config: any) => {
  console.log(config)
  datasourceProxy.value.config = config
}

const emit = defineEmits(['close'])
</script>
<template>
  <div class="w-full h-full flex gap-4">
    <div class="min-w-[350px]">
      <div class="flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full">
        <div class="flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center">
          <h4 class="flex-grow text-sm font-semibold leading-[1.5rem]">Datasource settings</h4>
        </div>
        <div class="flex-grow flex flex-col h-full">
          <div class="flex-grow p-4 flex flex-col gap-2">
            <template v-if="datasourceProxy">
              <VaInput v-model="datasourceProxy.uid" label="UID" readonly />
              <VaInput v-model="datasourceProxy.name" label="Name" />
              <VaSelect
                v-model="datasourceProxy.type"
                label="Type"
                :options="availableDatasources"
              />
              <component
                :is="settingsComponent"
                :config="datasourceProxy.config"
                :connections="connections"
                :dataSources="dataSources"
              />
            </template>
          </div>
          <div class="self-end flex gap-4 p-4">
            <va-button @click="saveDataSource">Save</va-button>
            <va-button @click="$emit('close')" preset="plain">Close</va-button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow overflow-hidden w-full">
      <div class="bg-white rounded-lg p-4 border border-gray-300
        h-full w-full flex items-center justify-center overflow-hidden">
        <component :is="previewComponent" :data-source="datasourceProxy" :key="datasourceProxy.uid"
          @updateConfig="updateConfig" />
      </div>
    </div>
  </div>
</template>
