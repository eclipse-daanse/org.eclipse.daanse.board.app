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
import { inject, computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDatasourceRepository, useEObject, useFormat, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { WeatherSettings } from './gen/WeatherSettings'
import type { WeatherWidgetSettings } from './types/WeatherWidgetSettings'
import { useWeatherData } from './composables/useWeatherData'
import { isNight, nightIcon } from './composables/weatherUnits'
import ForecastChart from './components/ForecastChart.vue'

const props = defineProps<{
  datasourceId: string;
  id?: string;
}>()

const { t } = useTranslation('weather')
const format = useFormat()

import { toRefs } from 'vue';
const { id: widgetId } = toRefs(props);
const config = defineModel<WeatherSettings>('configv', { required: false })

/*
 * The settings, watched rather than read off the model prop.
 *
 * Widget.config is an attribute, not a containment, so the adapter the
 * wrapper holds on the widget never hears a write inside this object - and
 * the wrapper hands this component the same instance on every change, which
 * is not a prop change Vue acts on. A setting changed in the open dialog
 * reached the weather only once the dialog was reopened (#1203). The reads go
 * through `settings`; the writes still go to `config`.
 */
const settings = useEObject<WeatherSettings>(() => config.value)

import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events';
import { WeatherWidgetInterface } from './api/WeatherWidgetInterface';

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!;

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

class WeatherWidgetApi extends WeatherWidgetInterface {
    refresh(): void {
        refreshData();
    }
}
const api = new WeatherWidgetApi();
defineExpose<WeatherWidgetInterface>(api);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:WeatherWidget:click', {
        type: 'widget:WeatherWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:WeatherWidget:right_click', {
        type: 'widget:WeatherWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};
const loading = ref(false)
const error = ref<string | null>(null)
const refreshTimer = ref<NodeJS.Timeout | null>(null)

/*
 * One path for the data. The composable owns the answer and everything
 * computed from it; the datasource writes straight into that ref. This
 * widget used to fill a ref of its own and compute the weather a second
 * time beside the composable, which therefore filtered nothing (#1211).
 */
const {
  weatherData,
  currentWeather,
  locationInfo,
  formatTimeRange
} = useWeatherData(() => settings.value, props.datasourceId)

const { update, callEvent, getDataWithOptions } = useDatasourceRepository(computed(() => props.datasourceId), 'WeatherData', weatherData)

const hasTimeFilter = computed(() => {
  return settings.value?.useTimeRange && (settings.value?.startTime || settings.value?.endTime)
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
    error.value = t('Widget.loadFailed')
    console.error('Weather widget error:', e)
  } finally {
    loading.value = false
  }
}

const setupRefreshTimer = () => {
  if (refreshTimer.value) {
    clearInterval(refreshTimer.value)
  }

  const interval = settings.value?.refreshInterval || 300000 // 5 minutes default
  console.log('Weather widget refresh interval (ms):', interval, 'seconds:', interval/1000)
  refreshTimer.value = setInterval(() => {
    console.log('Weather widget auto-refresh triggered')
    refreshData()
  }, interval)
}

watch(() => props.datasourceId, (newVal, oldVal) => {
  refreshData(newVal, oldVal)
})

watch(() => settings.value?.refreshInterval, setupRefreshTimer)

watch(() => [settings.value?.startTime, settings.value?.endTime], () => {
  if (hasTimeFilter.value) {
    //refreshData()
  }
})

// Watch for changes in thingId
watch(() => settings.value?.thingId, () => {
  refreshData()
})

onMounted(() => {
  actionsRegistry.registerInstance(widgetId.value || '', api, 'WeatherWidget', pageId);
  setupRefreshTimer()
  refreshData()
})

onUnmounted(() => {
  actionsRegistry.unregisterInstance(widgetId.value || '');
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
  return format.date(timestamp, { dateStyle: 'short', timeStyle: 'short' })
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

/*
 * The icon as it is at the time of the value: at night a clear sky shows
 * the moon and no icon shows the sun (#1267). The place is the station's;
 * without one the day icons stay, as before.
 */
const getWeatherIcon = (weather: any): string => {
  const icon = getDayIcon(weather)
  const at = weather?.temperature?.timestamp ?? weather?.timestamp
  const place = weather?.location?.coordinates ?? locationInfo.value?.coordinates
  return isNight(at, place) ? nightIcon(icon) : icon
}

// Get weather icon from available data
const getDayIcon = (weather: any): string => {
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
  if (!currentWeather.value) return false
  return availableForecastParameters.some(param => {
    const forecastKey = `${param}Forecast`
    return currentWeather.value[forecastKey] && Object.keys(currentWeather.value[forecastKey]).length > 0
  })
})

// Get enabled forecast parameters from settings
const enabledForecastParameters = computed(() => {
  if (!settings.value?.selectedForecastParameters) {
    return hasForecastData.value ? ['temperature', 'humidity', 'pressure', 'windSpeed'] : []
  }
  return settings.value?.selectedForecastParameters
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

  /* The colours are not in the model yet; the dialog writes them as a plain property. */
  const colors = (settings.value as Pick<WeatherWidgetSettings, 'chartColors'> | undefined)?.chartColors
  return colors?.[parameter] || defaultColors[parameter] || '#3498db'
}

// Get font color from CSS variable (set by wrapper) or fallback to default
const getFontColor = computed(() => {
  return 'var(--title-color, #495057)'
})
</script>

<template>
  <div class="weather-widget" @click="emitClick" @contextmenu.prevent="emitRightClick">
    <div v-if="loading" class="weather-loading">
      <div class="spinner"></div>
      <p>{{ t('Widget.loading') }}</p>
    </div>

    <div v-else-if="error" class="weather-error">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="currentWeather" class="weather-content">
      <div class="weather-header" v-if="locationInfo">
        <h3>{{ locationInfo.name }}</h3>
        <p v-if="locationInfo.description" class="location-desc">{{ locationInfo.description }}</p>
        <div v-if="hasTimeFilter" class="time-range">
          <small>{{ formatTimeRange() }}</small>
        </div>
      </div>

      <div class="weather-main">
        <div class="weather-icon-section">
          <span class="weather-icon">{{ getWeatherIcon(currentWeather) }}</span>
        </div>

        <div v-if="currentWeather.temperature" class="temperature">
          <span class="temp-value">{{ formatValue(currentWeather.temperature) }}</span>
          <div v-if="currentWeather.temperature.timestamp" class="timestamp">
            <small>{{ formatTimestamp(currentWeather.temperature.timestamp) }}</small>
          </div>
        </div>

        <div class="weather-details">
          <div v-if="currentWeather.humidity" class="weather-item">
            <span class="label">{{ t('Widget.humidity') }}</span>
            <span class="value">{{ formatValue(currentWeather.humidity) }}</span>
          </div>

          <div v-if="currentWeather.pressure" class="weather-item">
            <span class="label">{{ t('Widget.pressure') }}</span>
            <span class="value">{{ formatValue(currentWeather.pressure) }}</span>
          </div>

          <div v-if="currentWeather.windSpeed" class="weather-item">
            <span class="label">{{ t('Widget.wind') }}</span>
            <span class="value">
              {{ formatValue(currentWeather.windSpeed) }}
              <span v-if="currentWeather.windDirection">
                {{ getWindDirection(currentWeather.windDirection.value) }}
              </span>
            </span>
          </div>

          <div v-if="currentWeather.precipitation" class="weather-item">
            <span class="label">{{ t('Widget.precipitation') }}</span>
            <span class="value">{{ formatValue(currentWeather.precipitation) }}</span>
          </div>

          <div v-if="currentWeather.visibility" class="weather-item">
            <span class="label">{{ t('Widget.visibility') }}</span>
            <span class="value">{{ formatValue(currentWeather.visibility) }}</span>
          </div>

          <div v-if="currentWeather.cloudCover" class="weather-item">
            <span class="label">{{ t('Widget.cloudCover') }}</span>
            <span class="value">{{ formatValue(currentWeather.cloudCover) }}</span>
          </div>
        </div>
      </div>

      <!-- Forecast Charts -->
      <div v-if="settings?.showForecast && hasForecastData" class="forecast-section">
        <h3 class="forecast-title">{{ t('Widget.forecast') }}</h3>
        <div class="forecast-charts">
          <ForecastChart
            v-for="parameter in enabledForecastParameters"
            :key="parameter"
            :data="getForecastData(currentWeather, parameter)"
            :parameter="parameter"
            :color="getChartColor(parameter)"
            :fontColor="getFontColor"
            :gridColor="settings?.gridColor || '#e0e0e0'"
          />
        </div>
      </div>

      <div v-if="settings?.refreshInterval" class="refresh-info">
        <small>{{ t('Widget.autoRefresh', { count: Math.round((settings?.refreshInterval ?? 0) / 60000) }) }}</small>
      </div>
    </div>

    <div v-else class="weather-empty">
      <p>{{ t('Widget.noData') }}</p>
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
