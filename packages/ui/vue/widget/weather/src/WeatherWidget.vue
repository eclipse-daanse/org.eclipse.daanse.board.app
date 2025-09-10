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
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { WeatherWidgetSettings } from './types/WeatherWidgetSettings'
import { useWeatherData } from './composables/useWeatherData'

const props = defineProps<{
  datasourceId: string
}>()

const settings = defineModel<WeatherWidgetSettings>('configv', { required: false, default: () => ({}) })
const weatherDataRef = ref<any>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const refreshTimer = ref<NodeJS.Timeout | null>(null)

const { update, callEvent, getDataWithOptions } = useDatasourceRepository(computed(() => props.datasourceId), 'OGCSTAData', weatherDataRef)

const {
  currentWeather,
  locationInfo,
  formatTimeRange
} = useWeatherData(settings.value, props.datasourceId)

const hasTimeFilter = computed(() => {
  return settings.value.useTimeRange && (settings.value.startTime || settings.value.endTime)
})

const refreshData = async (newVal?: string, oldVal?: string) => {
  if (!props.datasourceId) return

  loading.value = true
  error.value = null

  console.log('Weather Widget: All settings received:', settings.value)
  console.log('Weather Widget: thingId from settings:', settings.value.thingId)
  console.log('Weather Widget: typeof thingId:', typeof settings.value.thingId)

  try {
    if (settings.value.thingId) {
      // First: Load the specific Thing with its Datastreams
      console.log('Weather Widget: Loading specific Thing with ID:', settings.value.thingId)
      await getDataWithOptions({
        filter: {
          things: {
            ids: [settings.value.thingId]
          }
        }
      })
      
      // Second: Load observations for the datastreams of this Thing
      if (weatherDataRef.value?.datastreams && weatherDataRef.value.datastreams.length > 0) {
        console.log('Weather Widget: Loading observations for', weatherDataRef.value.datastreams.length, 'datastreams')
        await getDataWithOptions({
          filter: {
            observations: weatherDataRef.value.datastreams
          }
        })
      }
    } else {
      // Load all data without filter
      console.log('Weather Widget: Loading all things and datastreams...')
      await getDataWithOptions()
    }
    
    // Update subscriptions if datasource changed
    if (newVal !== oldVal) {
      update(newVal || props.datasourceId, oldVal || '')
    }
  } catch (e) {
    error.value = 'Failed to load weather data'
    console.error('Weather widget error:', e)
  } finally {
    loading.value = false
  }
}

const setupRefreshTimer = () => {
  if (refreshTimer.value) {
    clearInterval(refreshTimer.value)
  }

  const interval = settings.value.refreshInterval || 300000 // 5 minutes default
  refreshTimer.value = setInterval(() => refreshData(), interval)
}

watch(() => props.datasourceId, (newVal, oldVal) => {
  refreshData(newVal, oldVal)
}, { immediate: true })

watch(() => settings.value.refreshInterval, setupRefreshTimer, { immediate: true })

watch(() => [settings.value.startTime, settings.value.endTime], () => {
  if (hasTimeFilter.value) {
    refreshData()
  }
})

// Watch for changes in thingId
watch(() => settings.value.thingId, () => {
  refreshData()
})

onMounted(() => {
  setupRefreshTimer()
})

onUnmounted(() => {
  if (refreshTimer.value) {
    clearInterval(refreshTimer.value)
  }
})

// Update weatherData in useWeatherData composable
watch(weatherDataRef, (newData) => {
  console.log('Weather Widget: Raw data received:', newData)
  console.log('Weather Widget: Datastreams available:', newData?.datastreams?.length || 0)
  if (newData?.datastreams) {
    newData.datastreams.forEach((ds: any, index: number) => {
      console.log(`Datastream ${index}:`, {
        name: ds.name,
        description: ds.description,
        observations: ds.observations?.length || 0
      })
    })
  }
}, { deep: true })

const formatValue = (item: { value: number, unit: string, timestamp?: string }) => {
  return `${Math.round(item.value * 10) / 10}${item.unit}`
}

const getWindDirection = (degrees: number) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return directions[Math.round(degrees / 45) % 8]
}

const formatTimestamp = (timestamp?: string) => {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleString()
}

// Process current weather from the fetched data
const processedWeather = computed(() => {
  if (!weatherDataRef.value?.datastreams) return null

  let datastreams = weatherDataRef.value.datastreams
  
  // If thingId is specified, filter datastreams to only those from that Thing
  if (settings.value.thingId) {
    console.log('Weather Widget: Filtering datastreams for Thing ID:', settings.value.thingId)
    datastreams = datastreams.filter((ds: any) => {
      const thingMatch = ds.thing && ds.thing['@iot.id'] == settings.value.thingId
      console.log(`Datastream ${ds.name}: thing ID = ${ds.thing?.['@iot.id']}, matches = ${thingMatch}`)
      return thingMatch
    })
    console.log('Weather Widget: Filtered datastreams count:', datastreams.length)
  }
  
  const weather: any = {}

  datastreams.forEach((ds: any) => {
    if (ds.observations && ds.observations.length > 0) {
      const obs = ds.observations[0]
      const name = ds.name?.toLowerCase()
      const description = ds.description?.toLowerCase()

      // Enhanced pattern matching for German weather data
      if (name?.includes('temperature') || name?.includes('temp') ||
          description?.includes('temperatur') || name?.includes('lufttemperatur')) {
        weather.temperature = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || '°C',
          timestamp: obs.phenomenonTime
        }
      } else if (name?.includes('humidity') || name?.includes('feuchte') ||
                 description?.includes('luftfeuchte')) {
        weather.humidity = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || '%',
          timestamp: obs.phenomenonTime
        }
      } else if (name?.includes('pressure') || name?.includes('luftdruck') ||
                 description?.includes('pressure')) {
        weather.pressure = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || 'hPa',
          timestamp: obs.phenomenonTime
        }
      } else if ((name?.includes('wind') && name?.includes('speed')) ||
                 name?.includes('windgeschwindigkeit')) {
        weather.windSpeed = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || 'm/s',
          timestamp: obs.phenomenonTime
        }
      } else if ((name?.includes('wind') && name?.includes('direction')) ||
                 name?.includes('windrichtung')) {
        weather.windDirection = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || '°',
          timestamp: obs.phenomenonTime
        }
      } else if (name?.includes('precipitation') || name?.includes('niederschlag') ||
                 name?.includes('rain') || name?.includes('regen')) {
        weather.precipitation = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || 'mm',
          timestamp: obs.phenomenonTime
        }
      } else if (name?.includes('visibility') || name?.includes('sicht')) {
        weather.visibility = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || 'm',
          timestamp: obs.phenomenonTime
        }
      } else if (name?.includes('cloud') || name?.includes('wolken') ||
                 name?.includes('bedeckung')) {
        weather.cloudCover = {
          value: obs.result,
          unit: ds.unitOfMeasurement?.symbol || '%',
          timestamp: obs.phenomenonTime
        }
      }
    }
  })

  return weather
})

const processedLocationInfo = computed(() => {
  if (!weatherDataRef.value?.things || weatherDataRef.value.things.length === 0) return null

  let thing = weatherDataRef.value.things[0]
  
  // If thingId is specified, find the specific Thing
  if (settings.value.thingId) {
    const specificThing = weatherDataRef.value.things.find((t: any) => t['@iot.id'] == settings.value.thingId)
    if (specificThing) {
      thing = specificThing
      console.log('Weather Widget: Found specific Thing:', thing.name)
    }
  }
  
  const location = thing.Locations?.[0]

  return {
    name: thing.name || 'Unknown Location',
    description: thing.description,
    coordinates: location?.location ? {
      latitude: location.location.coordinates?.[1],
      longitude: location.location.coordinates?.[0]
    } : undefined
  }
})
</script>

<template>
  <div class="weather-widget">
    {{settings}}
    <div v-if="loading" class="weather-loading">
      <div class="spinner"></div>
      <p>Loading weather data...</p>
    </div>

    <div v-else-if="error" class="weather-error">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="processedWeather" class="weather-content">
      <div class="weather-header" v-if="processedLocationInfo">
        <h3>{{ processedLocationInfo.name }}</h3>
        <p v-if="processedLocationInfo.description" class="location-desc">{{ processedLocationInfo.description }}</p>
        <div v-if="hasTimeFilter" class="time-range">
          <small>{{ formatTimeRange() }}</small>
        </div>
      </div>

      <div class="weather-main">
        <div v-if="processedWeather.temperature" class="temperature">
          <span class="temp-value">{{ formatValue(processedWeather.temperature) }}</span>
          <div v-if="processedWeather.temperature.timestamp" class="timestamp">
            <small>{{ formatTimestamp(processedWeather.temperature.timestamp) }}</small>
          </div>
        </div>

        <div class="weather-details">
          <div v-if="processedWeather.humidity" class="weather-item">
            <span class="label">Humidity:</span>
            <span class="value">{{ formatValue(processedWeather.humidity) }}</span>
          </div>

          <div v-if="processedWeather.pressure" class="weather-item">
            <span class="label">Pressure:</span>
            <span class="value">{{ formatValue(processedWeather.pressure) }}</span>
          </div>

          <div v-if="processedWeather.windSpeed" class="weather-item">
            <span class="label">Wind:</span>
            <span class="value">
              {{ formatValue(processedWeather.windSpeed) }}
              <span v-if="processedWeather.windDirection">
                {{ getWindDirection(processedWeather.windDirection.value) }}
              </span>
            </span>
          </div>

          <div v-if="processedWeather.precipitation" class="weather-item">
            <span class="label">Precipitation:</span>
            <span class="value">{{ formatValue(processedWeather.precipitation) }}</span>
          </div>

          <div v-if="processedWeather.visibility" class="weather-item">
            <span class="label">Visibility:</span>
            <span class="value">{{ formatValue(processedWeather.visibility) }}</span>
          </div>

          <div v-if="processedWeather.cloudCover" class="weather-item">
            <span class="label">Cloud Cover:</span>
            <span class="value">{{ formatValue(processedWeather.cloudCover) }}</span>
          </div>
        </div>
      </div>

      <div v-if="settings.refreshInterval" class="refresh-info">
        <small>Auto-refresh every {{ Math.round(settings.refreshInterval / 60000) }} minutes</small>
      </div>
    </div>

    <div v-else class="weather-empty">
      <p>No weather data available</p>
    </div>
  </div>
</template>

<style scoped>
.weather-widget {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.weather-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #6c757d;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #e9ecef;
  border-top: 2px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 8px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.weather-error {
  color: #dc3545;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.weather-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.weather-header {
  margin-bottom: 16px;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 12px;
}

.weather-header h3 {
  margin: 0 0 4px 0;
  color: #495057;
  font-size: 1.2em;
}

.location-desc {
  margin: 0;
  color: #6c757d;
  font-size: 0.9em;
}

.weather-main {
  flex: 1;
}

.temperature {
  text-align: center;
  margin-bottom: 24px;
}

.temp-value {
  font-size: 2.5em;
  font-weight: bold;
  color: #007bff;
}

.weather-details {
  display: grid;
  gap: 12px;
}

.weather-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.weather-item .label {
  color: #6c757d;
  font-weight: 500;
}

.weather-item .value {
  color: #495057;
  font-weight: 600;
}

.weather-empty {
  text-align: center;
  color: #6c757d;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-range {
  margin-top: 8px;
  color: #6c757d;
  font-style: italic;
}

.timestamp {
  margin-top: 8px;
  text-align: center;
}

.timestamp small {
  color: #6c757d;
  font-size: 0.8em;
}

.refresh-info {
  margin-top: 16px;
  text-align: center;
  color: #6c757d;
  border-top: 1px solid #dee2e6;
  padding-top: 12px;
}

@media (max-width: 480px) {
  .weather-widget {
    padding: 12px;
  }

  .temp-value {
    font-size: 2em;
  }

  .weather-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
