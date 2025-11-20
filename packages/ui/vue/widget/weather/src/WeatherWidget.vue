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
import ForecastChart from './components/ForecastChart.vue'

const props = defineProps<{
  datasourceId: string
}>()

const settings = defineModel<WeatherWidgetSettings>('configv', { required: false, default: () => ({}) })
const weatherDataRef = ref<any>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const refreshTimer = ref<NodeJS.Timeout | null>(null)

const { update, callEvent, getDataWithOptions } = useDatasourceRepository(computed(() => props.datasourceId), 'WeatherData', weatherDataRef)

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


  try {
    // Only update subscriptions if datasource ID actually changed
    if (newVal !== oldVal && newVal && oldVal) {
      update(newVal, oldVal)
    } else {
      // Just get the data without updating subscriptions
      await getDataWithOptions()
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
})

watch(() => settings.value.refreshInterval, setupRefreshTimer, { immediate: true })

watch(() => [settings.value.startTime, settings.value.endTime], () => {
  if (hasTimeFilter.value) {
    //refreshData()
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


const formatValue = (item: { value: number, unit: string, timestamp?: string }) => {
  if (item.value === null || item.value === undefined || isNaN(item.value)) {
    return `--${item.unit || ''}`
  }

  let value = item.value
  let unit = item.unit || ''

  // Temperature conversion: Kelvin to Celsius
  if (unit === 'K' || unit === 'Kelvin') {
    value = value - 273.15
    unit = '°C'
  }

  // Visibility conversion: meters to kilometers
  if (unit === 'm' && value >= 1000) {
    value = value / 1000
    unit = 'km'
  }

  // Pressure conversion: Pascals to kilopascals
  if (unit === 'Pa') {
    value = value / 1000
    unit = 'kPa'
  }

  return `${Math.round(value * 10) / 10}${unit}`
}

const getWindDirection = (degrees: number) => {
  if (degrees === null || degrees === undefined || isNaN(degrees)) {
    return ''
  }
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return directions[Math.round(degrees / 45) % 8]
}

const formatTimestamp = (timestamp?: string) => {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleString()
}

// WMO Weather Codes to icons mapping
const getWeatherIconFromWMO = (wmoCode: number): string => {
  const wmoIcons: { [key: number]: string } = {
    0: '☀️',   // Clear sky
    1: '🌤️',   // Mainly clear
    2: '⛅',   // Partly cloudy
    3: '☁️',   // Overcast
    45: '🌫️',  // Fog
    48: '🌫️',  // Depositing rime fog
    51: '🌦️',  // Drizzle: Light
    53: '🌦️',  // Drizzle: Moderate
    55: '🌧️',  // Drizzle: Dense
    56: '🌨️',  // Freezing drizzle: Light
    57: '🌨️',  // Freezing drizzle: Dense
    61: '🌧️',  // Rain: Slight
    63: '🌧️',  // Rain: Moderate
    65: '⛈️',  // Rain: Heavy
    66: '🌨️',  // Freezing rain: Light
    67: '🌨️',  // Freezing rain: Heavy
    71: '❄️',   // Snow fall: Slight
    73: '❄️',   // Snow fall: Moderate
    75: '🌨️',  // Snow fall: Heavy
    77: '❄️',   // Snow grains
    80: '🌦️',  // Rain showers: Slight
    81: '🌧️',  // Rain showers: Moderate
    82: '⛈️',  // Rain showers: Violent
    85: '🌨️',  // Snow showers: Slight
    86: '🌨️',  // Snow showers: Heavy
    95: '⛈️',  // Thunderstorm: Slight or moderate
    96: '⛈️',  // Thunderstorm with slight hail
    99: '⛈️'   // Thunderstorm with heavy hail
  }

  return wmoIcons[wmoCode] || '🌤️'
}

// Get weather icon from available data
const getWeatherIcon = (weather: any): string => {
  if (!weather) return '🌤️'

  // Check if we have a WMO weather code in the data
  const wmoCode = weather.weatherCode?.value || weather.wmoCode?.value
  if (wmoCode !== undefined && wmoCode !== null) {
    return getWeatherIconFromWMO(wmoCode)
  }

  // Fallback: derive from available measurements
  const temp = weather.temperature?.value
  const humidity = weather.humidity?.value
  const precipitation = weather.precipitation?.value
  const cloudCover = weather.cloudCover?.value
  const windSpeed = weather.windSpeed?.value

  // Precipitation check (highest priority)
  if (precipitation && precipitation > 0) {
    if (temp && temp < 2) return '❄️' // Snow
    if (precipitation > 5) return '🌧️' // Heavy rain
    return '🌦️' // Light rain
  }

  // Cloud cover based
  if (cloudCover) {
    if (cloudCover > 80) return '☁️' // Overcast
    if (cloudCover > 50) return '⛅' // Partly cloudy
  }

  // Temperature based when no other indicators
  if (temp) {
    if (temp > 25) return '☀️' // Hot and sunny
    if (temp > 15) return '🌤️' // Pleasant
    if (temp > 0) return '🌥️' // Cool
    return '🥶' // Cold
  }

  // High humidity without precipitation
  if (humidity && humidity > 85) return '🌫️' // Foggy/misty

  // Default
  return '🌤️'
}

// Available forecast periods and parameters
const availableForecastPeriods = ['forecast3h', 'forecast6h', 'forecast9h', 'forecast12h', 'forecast24h', 'forecast36h', 'forecast48h', 'forecast60h', 'forecast72h']
const availableForecastParameters = ['temperature', 'humidity', 'pressure', 'windSpeed', 'windDirection', 'precipitation', 'visibility', 'cloudCover']


// Get forecast data for specific parameter and period
const getForecastData = (weatherData: any, parameter: string): { period: string, value: number, unit: string }[] => {
  const forecastKey = `${parameter}Forecast`
  const forecastData = weatherData[forecastKey]
  if (!forecastData) return []

  return availableForecastPeriods
    .filter(period => forecastData[period])
    .map(period => {
      let value = forecastData[period].value
      let unit = forecastData[period].unit

      // Apply same unit conversions as formatValue
      if (unit === 'K' || unit === 'Kelvin') {
        value = value - 273.15
        unit = '°C'
      }

      if (unit === 'm' && value >= 1000) {
        value = value / 1000
        unit = 'km'
      }

      if (unit === 'Pa') {
        value = value / 1000
        unit = 'kPa'
      }

      return {
        period: period.replace('forecast', '').replace('h', ' hours'),
        value: value,
        unit: unit
      }
    })
}

// Check if forecast data is available
const hasForecastData = computed(() => {
  if (!processedWeather.value) return false
  return availableForecastParameters.some(param => {
    const forecastKey = `${param}Forecast`
    return processedWeather.value[forecastKey] && Object.keys(processedWeather.value[forecastKey]).length > 0
  })
})

// Get enabled forecast parameters from settings
const enabledForecastParameters = computed(() => {
  if (!settings.value.selectedForecastParameters) {
    return hasForecastData.value ? ['temperature', 'humidity', 'pressure', 'windSpeed'] : []
  }
  return settings.value.selectedForecastParameters
})

// Process current weather from the fetched data
const processedWeather = computed(() => {
  if (!weatherDataRef.value) return null


  // Check if this is WeatherData from Weather Composer (array format)
  if (Array.isArray(weatherDataRef.value) && weatherDataRef.value.length > 0) {
    let weatherStation = weatherDataRef.value[0]

    // If thingId is specified, find the matching station
    if (settings.value.thingId) {
      const specificStation = weatherDataRef.value.find((station: any) =>
        station.thingId == settings.value.thingId || String(station.thingId) == String(settings.value.thingId)
      )
      if (specificStation) {
        weatherStation = specificStation
      }
    }

    return weatherStation // Return weather data directly
  }

  // Legacy OGC STA format handling
  if (!weatherDataRef.value?.datastreams) return null

  let datastreams = weatherDataRef.value.datastreams

  // If thingId is specified, filter datastreams to only those from that Thing
  if (settings.value.thingId) {
    datastreams = datastreams.filter((ds: any) => {
      const thingMatch = ds.thing && ds.thing['@iot.id'] == settings.value.thingId
      return thingMatch
    })
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

// Get chart color from settings or fallback to default
const getChartColor = (parameter: string): string => {
  const defaultColors: { [key: string]: string } = {
    temperature: '#e74c3c',
    humidity: '#3498db',
    pressure: '#2ecc71',
    windSpeed: '#f39c12',
    windDirection: '#9b59b6',
    precipitation: '#2980b9',
    visibility: '#1abc9c',
    cloudCover: '#95a5a6'
  }

  return settings.value.chartColors?.[parameter] || defaultColors[parameter] || '#3498db'
}

// Get font color from CSS variable (set by wrapper) or fallback to default
const getFontColor = computed(() => {
  return 'var(--title-color, #495057)'
})

const processedLocationInfo = computed(() => {
  if (!weatherDataRef.value?.things || weatherDataRef.value.things.length === 0) return null

  let thing = weatherDataRef.value.things[0]

  // If thingId is specified, find the specific Thing
  if (settings.value.thingId) {
    const specificThing = weatherDataRef.value.things.find((t: any) => t['@iot.id'] == settings.value.thingId)
    if (specificThing) {
      thing = specificThing
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
        <div class="weather-icon-section">
          <span class="weather-icon">{{ getWeatherIcon(processedWeather) }}</span>
        </div>

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

      <!-- Forecast Charts -->
      <div v-if="settings.showForecast && hasForecastData" class="forecast-section">
        <h3 class="forecast-title">Weather Forecast</h3>
        <div class="forecast-charts">
          <ForecastChart
            v-for="parameter in enabledForecastParameters"
            :key="parameter"
            :data="getForecastData(processedWeather, parameter)"
            :parameter="parameter"
            :color="getChartColor(parameter)"
            :fontColor="getFontColor"
            :gridColor="settings.gridColor || '#e0e0e0'"
          />
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
  /* background: #f8f9fa;*/
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
  color: v-bind(getFontColor);
  font-size: 1.2em;
}

.location-desc {
  margin: 0;
  color: v-bind(getFontColor);
  font-size: 0.9em;
  opacity: 0.7;
}

.weather-main {
  flex: 1;
}

.weather-icon-section {
  text-align: center;
  margin-bottom: 16px;
}

.weather-icon {
  font-size: 5em;
  line-height: 1;
}

.temperature {
  text-align: center;
  margin-bottom: 24px;
}

.temp-value {
  font-size: 2.5em;
  font-weight: 200;
  color: v-bind(getFontColor);
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
  background: rgba(255, 255, 255, 0.20);
  border-radius: 6px;
  /*border: 1px solid #e9ecef;*/
}

.weather-item .label {
  color: v-bind(getFontColor);
  opacity: 0.7;
  font-weight: 500;
}

.weather-item .value {
  color: v-bind(getFontColor);
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
  color: v-bind(getFontColor);
  opacity: 0.7;
  font-style: italic;
}

.timestamp {
  margin-top: 8px;
  text-align: center;
}

.timestamp small {
  color: v-bind(getFontColor);
  opacity: 0.7;
  font-size: 0.8em;
}

.refresh-info {
  margin-top: 16px;
  text-align: center;
  color: v-bind(getFontColor);
  opacity: 0.7;
  border-top: 1px solid #dee2e6;
  padding-top: 12px;
}

/* Forecast section styles */
.forecast-section {
  margin-top: 20px;
  border-top: 2px solid #dee2e6;
  padding-top: 16px;
}

.forecast-title {
  margin: 0 0 20px 0;
  color: v-bind(getFontColor);
  font-size: 1.3em;
  text-align: center;
}

.forecast-charts {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  .forecast-charts {
    gap: 15px;
  }

  .forecast-title {
    font-size: 1.1em;
  }

}
</style>
