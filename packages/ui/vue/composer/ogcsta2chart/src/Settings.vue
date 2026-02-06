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
import { ref, computed, watch, onMounted } from 'vue'
import { OGCSTAToChartComposer } from 'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart'
import {
  DatasourceRepository, identifier as DatasourceRepositoryIdentifier
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const { config, dataSources } = defineProps<{
  config: any
  dataSources: any
}>()

// Filter for OGC STA datasources
const datasourcesFiltered = computed(() => {
  return dataSources.filter((ds: any) => ds.type === 'ogcsta')
})

// Available things and datastreams from selected datasources
const availableThings = ref<any[]>([])
const availableDatastreams = ref<any[]>([])
const isLoadingThings = ref(false)
const isLoadingDatastreams = ref(false)

// Initialize arrays if not exists (without triggering watchers)
console.log('🔧 Settings.vue mounted with config:', JSON.stringify(config, null, 2))

if (!Array.isArray(config.datastreams)) {
  console.log('⚠️ datastreams is not an array, initializing:', config.datastreams)
  config.datastreams = []
} else {
  console.log('✅ datastreams initialized with', config.datastreams.length, 'items:', config.datastreams)
}

if (!Array.isArray(config.thingIds)) {
  console.log('⚠️ thingIds is not an array, initializing:', config.thingIds)
  config.thingIds = []
} else {
  console.log('✅ thingIds initialized:', config.thingIds)
}

if (!Array.isArray(config.connectedDatasources)) {
  console.log('⚠️ connectedDatasources is not an array, initializing:', config.connectedDatasources)
  config.connectedDatasources = []
} else {
  console.log('✅ connectedDatasources initialized:', config.connectedDatasources)
  // Remove undefined/null values from existing array
  const cleaned = config.connectedDatasources.filter((id: any) => id != null && id !== undefined)
  if (cleaned.length !== config.connectedDatasources.length) {
    console.log('🧹 Cleaning connectedDatasources, removed', config.connectedDatasources.length - cleaned.length, 'invalid values')
    config.connectedDatasources = cleaned
  }
}

// Load available things when datasources change
const loadThings = async () => {
  if (!config.connectedDatasources || config.connectedDatasources.length === 0) {
    availableThings.value = []
    return
  }

  // Filter out undefined/null values
  const validDatasources = config.connectedDatasources.filter((id: any) => id != null && id !== undefined)
  if (validDatasources.length === 0) {
    availableThings.value = []
    return
  }

  isLoadingThings.value = true
  try {
    const datasourceRepository = container.get(DatasourceRepositoryIdentifier) as DatasourceRepository
    const allThings: any[] = []

    for (const datasourceId of validDatasources) {
      const datasourceInstance = datasourceRepository.getDatasource(datasourceId)

      const options = {
        filter: {
          things: {
            all: {
              includeDatastreams: false,
              includeLocations: false
            }
          }
        }
      }

      const data = await datasourceInstance.getData('OGCSTAData', options)

      if (data?.things) {
        data.things.forEach((thing: any) => {
          const thingId = thing['@iot.id'] || thing.iotId
          // Avoid duplicates by checking if ID already exists
          if (!allThings.some(t => t.id === thingId)) {
            allThings.push({
              id: thingId,
              name: thing.name,
              description: thing.description
            })
          }
        })
      }
    }

    availableThings.value = allThings
  } catch (error) {
    console.error('Error loading things:', error)
    availableThings.value = []
  } finally {
    isLoadingThings.value = false
  }
}

// Load available datastreams when datasources or thingIds changes
const loadDatastreams = async () => {
  if (!config.connectedDatasources || config.connectedDatasources.length === 0) {
    availableDatastreams.value = []
    return
  }

  if (!config.thingIds || config.thingIds.length === 0) {
    availableDatastreams.value = []
    return
  }

  isLoadingDatastreams.value = true
  try {
    const datasourceRepository = container.get(DatasourceRepositoryIdentifier) as DatasourceRepository
    const datastreams = await OGCSTAToChartComposer.getAvailableDatastreams(
      config.connectedDatasources,
      config.thingIds,
      datasourceRepository
    )
    availableDatastreams.value = datastreams
  } catch (error) {
    console.error('Error loading datastreams:', error)
    availableDatastreams.value = []
  } finally {
    isLoadingDatastreams.value = false
  }
}

watch(() => config.connectedDatasources, () => {
  console.log( config.connectedDatasources)
  loadThings()
}, { deep: true })

watch(() => config.thingIds, () => {
  console.log( config.thingIds)
  loadDatastreams()
}, { deep: true })

// Add a datastream selection
const addDatastream = () => {
  if (!config.datastreams) {
    config.datastreams = []
  }
  config.datastreams.push({
    datastreamId: '',
    label: '',
    color: generateRandomColor()
  })
}

// Remove a datastream selection
const removeDatastream = (index: number) => {
  config.datastreams.splice(index, 1)
}

// Generate random color for new datastream
const generateRandomColor = () => {
  const colors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    '#FF6384',
    '#C9CBCF'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Format datastream option for display
const formatDatastreamOption = (ds: any) => {
  return `${ds.name} (${ds.thingName}) - ${ds.unit}`
}

// Load things and datastreams on mount if datasources are already configured
onMounted(() => {
  console.log('🔧 Settings.vue onMounted')
  if (config.connectedDatasources && config.connectedDatasources.length > 0) {
    console.log('🔧 Loading things on mount')
    loadThings()
  }
  if (config.thingIds && config.thingIds.length > 0 && config.connectedDatasources && config.connectedDatasources.length > 0) {
    console.log('🔧 Loading datastreams on mount')
    loadDatastreams()
  }
})
</script>

<template>
  <div class="ogcsta2chart-composer-settings">
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaSelect
      v-model="config.connectedDatasources"
      label="OGC STA Sources"
      :options="datasourcesFiltered"
      multiple
      text-by="name"
      value-by="uid"
    />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaSelect
      v-model="config.thingIds"
      label="Things (Required)"
      :options="availableThings"
      multiple
      searchable
      text-by="name"
      value-by="id"
      placeholder="Select one or more Things"
      :loading="isLoadingThings"
      no-options-text="No things found"
    />

    <div class="datastreams-section">
      <div class="section-header">
        <h3>Selected Datastreams</h3>
        <VaButton
          size="small"
          @click="addDatastream"
          :disabled="isLoadingDatastreams || availableDatastreams.length === 0"
        >
          Add Datastream
        </VaButton>
      </div>

      <div v-if="isLoadingDatastreams" class="loading-indicator">
        Loading available datastreams...
      </div>

      <div v-if="availableDatastreams.length === 0 && config.datastreams.length === 0" class="no-datastreams">
        No datastreams available. Please select an OGC STA datasource and one or more Things first.
      </div>

      <div v-if="config.datastreams.length > 0" class="datastream-list">
        <div
          v-for="(datastream, index) in config.datastreams"
          :key="index"
          class="datastream-item"
        >
          <div class="datastream-fields">
            <!-- eslint-disable-next-line vue/no-mutating-props -->
            <VaSelect
              v-model="datastream.datastreamId"
              label="Datastream"
              :options="availableDatastreams"
              searchable
              text-by="name"
              value-by="id"
              class="datastream-select"
              :loading="isLoadingDatastreams"
              no-options-text="No datastreams found"
            />

            <!-- eslint-disable-next-line vue/no-mutating-props -->
            <VaInput
              v-model="datastream.label"
              label="Label (Optional)"
              placeholder="Custom label for chart"
              class="datastream-label"
            />

            <!-- eslint-disable-next-line vue/no-mutating-props -->
            <VaColorInput
              v-model="datastream.color"
              label="Color"
              class="datastream-color"
            />
          </div>

          <VaButton
            preset="plain"
            icon="delete"
            color="danger"
            size="small"
            @click="removeDatastream(index)"
            class="remove-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ogcsta2chart-composer-settings {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  max-height: 600px;
  overflow-y: auto;
}

.datastreams-section {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 16px;
  background: #f8f9fa;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-header h3 {
  margin: 0;
  color: #495057;
  font-size: 1.1em;
}

.loading-indicator,
.no-datastreams {
  padding: 16px;
  text-align: center;
  color: #6c757d;
  font-style: italic;
}

.datastream-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 300px;
  overflow-y: auto;
}

.datastream-item {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
}

.datastream-fields {
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  gap: 12px;
  align-items: start;
}

.datastream-select {
  grid-column: 1 / 2;
}

.datastream-label {
  grid-column: 2 / 3;
}

.datastream-color {
  grid-column: 3 / 4;
  width: 100px;
}

.remove-button {
  margin-top: 8px;
}
</style>
