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
import { ref, computed, watch } from 'vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier, DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource'

const { config, dataSources } = defineProps<{
  config: any
  dataSources: any
}>()

// Filter for OGC STA datasources
const datasourcesFiltered = computed(() => {
  return dataSources.filter((ds: any) => ds.type === 'ogcsta')
})

// Available things from connected datasources
const availableThings = ref<Array<{ iotId: string; name: string }>>([])
const isLoadingThings = ref(false)

// Load things when datasources change
watch(() => config.connectedDatasources, async () => {
  await loadAvailableThings()
}, { immediate: true })

async function loadAvailableThings() {
  if (!config.connectedDatasources || config.connectedDatasources.length === 0) {
    availableThings.value = []
    return
  }

  isLoadingThings.value = true
  try {
    const datasourceRepository = container.get(identifier) as DatasourceRepository
    const allThings: Array<{ iotId: string; name: string }> = []

    for (const datasourceId of config.connectedDatasources) {
      try {
        const datasource = datasourceRepository.getDatasource(datasourceId)
        const data = await datasource.getData('OGCSTAData', {
          filter: {
            things: {
              all: {
                includeDatastreams: false,
                includeLocations: false
              }
            }
          }
        })

        if (data?.things) {
          data.things.forEach((thing: any) => {
            const thingId = thing['@iot.id'] || thing.iotId || thing.id
            if (thingId) {
              allThings.push({
                iotId: String(thingId),
                name: thing.name || `Thing ${thingId}`
              })
            }
          })
        }
      } catch (error) {
        console.error('Error loading things from datasource:', datasourceId, error)
      }
    }

    availableThings.value = allThings
  } finally {
    isLoadingThings.value = false
  }
}

// State for collapsible mapping section
const isMappingSectionExpanded = ref(false)

// Custom mapping for weather parameters
const weatherParameters = [
  { key: 'temperature', label: 'Temperature', placeholder: 'temp, temperatur, lufttemperatur' },
  { key: 'humidity', label: 'Humidity', placeholder: 'humidity, feuchte, luftfeuchte' },
  { key: 'pressure', label: 'Pressure', placeholder: 'pressure, luftdruck' },
  { key: 'windSpeed', label: 'Wind Speed', placeholder: 'windspeed, windgeschwindigkeit' },
  { key: 'windDirection', label: 'Wind Direction', placeholder: 'winddirection, windrichtung' },
  { key: 'precipitation', label: 'Precipitation', placeholder: 'precipitation, niederschlag, rain' },
  { key: 'visibility', label: 'Visibility', placeholder: 'visibility, sicht' },
  { key: 'cloudCover', label: 'Cloud Cover', placeholder: 'cloudcover, wolken, bedeckung' }
]

const updateCustomMapping = (parameter: string, keywords: string) => {
  if (!config.customMapping) {
    config.customMapping = {}
  }
  if (keywords.trim()) {
    config.customMapping[parameter] = keywords.split(',').map((k: string) => k.trim())
  } else {
    delete config.customMapping[parameter]
  }
}

const getCustomMappingValue = (parameter: string) => {
  return config.customMapping?.[parameter]?.join(', ') || ''
}
</script>

<template>
  <div class="weather-composer-settings">
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaSelect v-model="config.connectedDatasources" label="OGC STA Sources" :options="datasourcesFiltered" multiple text-by="name" value-by="uid" />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaSelect
      v-model="config.thingId"
      label="Thing (Optional)"
      placeholder="All Things"
      :options="availableThings"
      text-by="name"
      value-by="iotId"
      :loading="isLoadingThings"
      :disabled="isLoadingThings || availableThings.length === 0"
      clearable
    />

    <div class="collapsible-section">
      <div class="collapsible-header" @click="isMappingSectionExpanded = !isMappingSectionExpanded">
        <h3>Custom Keyword Mapping (Optional)</h3>
        <span class="collapse-icon" :class="{ 'expanded': isMappingSectionExpanded }">▼</span>
      </div>

      <div v-if="isMappingSectionExpanded" class="collapsible-content">
        <p class="section-description">Override default keywords for weather parameter detection</p>

        <div v-for="param in weatherParameters" :key="param.key" class="mapping-item">
          <!-- eslint-disable-next-line vue/no-mutating-props -->
          <VaInput
            :model-value="getCustomMappingValue(param.key)"
            @update:model-value="updateCustomMapping(param.key, $event)"
            :label="param.label"
            :placeholder="param.placeholder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-composer-settings {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  max-height: 600px;
  overflow-y: auto;
}

.section-description {
  margin: 0 0 16px 0;
  color: #6c757d;
  font-size: 0.9em;
}

/* Collapsible section styles */
.collapsible-section {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
}

.collapsible-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  padding: 12px 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.collapsible-header:hover {
  background: #e9ecef;
}

.collapsible-header h3 {
  margin: 0;
  color: #495057;
  font-size: 1.1em;
}

.collapse-icon {
  font-size: 12px;
  transition: transform 0.2s ease;
  color: #6c757d;
}

.collapse-icon.expanded {
  transform: rotate(-180deg);
}

.collapsible-content {
  padding: 16px;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 800px;
  }
}

.mapping-item {
  margin-bottom: 12px;
}
</style>
