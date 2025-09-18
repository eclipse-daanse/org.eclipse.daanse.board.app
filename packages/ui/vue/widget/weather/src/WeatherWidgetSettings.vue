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
import type { WeatherWidgetSettings } from './types/WeatherWidgetSettings'

const settings = defineModel<WeatherWidgetSettings>( { required: true})

const localSettings = computed(() => settings.value)

const timeMode = ref<'auto' | 'range' | 'manual'>(
  localSettings.value.manualTimeSelection ? 'manual' :
  localSettings.value.useTimeRange ? 'range' : 'auto'
)

// Removed inputMode - only use thingId now

watch(timeMode, (newMode) => {
  settings.value.useTimeRange = newMode === 'range'
  settings.value.manualTimeSelection = newMode === 'manual'

  if (newMode === 'auto') {
    settings.value.startTime = ''
    settings.value.endTime = ''
  }
})

const isValid = computed(() => {
  return (localSettings.value.thingId || '').trim() !== ''
})

const setCurrentTime = () => {
  const now = new Date()
  settings.value.endTime = now.toISOString().slice(0, 16)

  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000)
  settings.value.startTime = oneHourAgo.toISOString().slice(0, 16)
}

const setTimeRange = (hours: number) => {
  const now = new Date()
  settings.value.endTime = now.toISOString().slice(0, 16)

  const startTime = new Date(now.getTime() - hours * 60 * 60 * 1000)
  settings.value.startTime = startTime.toISOString().slice(0, 16)
}

// Forecast settings
const availableForecastParameters = [
  { key: 'temperature', label: 'Temperature' },
  { key: 'humidity', label: 'Humidity' },
  { key: 'pressure', label: 'Pressure' },
  { key: 'windSpeed', label: 'Wind Speed' },
  { key: 'windDirection', label: 'Wind Direction' },
  { key: 'precipitation', label: 'Precipitation' },
  { key: 'visibility', label: 'Visibility' },
  { key: 'cloudCover', label: 'Cloud Cover' }
]

const availableForecastPeriods = [
  { key: 'forecast12h', label: '12 hours' },
  { key: 'forecast24h', label: '24 hours' },
  { key: 'forecast36h', label: '36 hours' },
  { key: 'forecast48h', label: '48 hours' },
  { key: 'forecast60h', label: '60 hours' },
  { key: 'forecast72h', label: '72 hours' }
]

// Initialize forecast settings if not set
onMounted(() => {
  if (!settings.value.selectedForecastParameters) {
    settings.value.selectedForecastParameters = ['temperature', 'humidity', 'pressure', 'windSpeed']
  }
  if (!settings.value.forecastPeriods) {
    settings.value.forecastPeriods = ['forecast12h', 'forecast24h', 'forecast48h', 'forecast72h']
  }
  if (settings.value.showForecast === undefined) {
    settings.value.showForecast = false
  }
  if (!settings.value.chartColors) {
    settings.value.chartColors = {
      temperature: '#e74c3c',
      humidity: '#3498db',
      pressure: '#2ecc71',
      windSpeed: '#f39c12',
      windDirection: '#9b59b6',
      precipitation: '#2980b9',
      visibility: '#1abc9c',
      cloudCover: '#95a5a6'
    }
  }
  if (!settings.value.gridColor) {
    settings.value.gridColor = '#e0e0e0'
  }
})
</script>

<template>
  <div class="weather-settings">
    <div class="settings-section">
      <h4>Data Source Configuration</h4>
    </div>

    <div class="settings-section">
      <h4>Time Range Configuration</h4>

      <div class="time-mode-selector">
        <label>
          <input
            type="radio"
            value="auto"
            v-model="timeMode"
          />
          Latest Data
        </label>
        <label>
          <input
            type="radio"
            value="range"
            v-model="timeMode"
          />
          Time Range
        </label>
        <label>
          <input
            type="radio"
            value="manual"
            v-model="timeMode"
          />
          Manual Selection
        </label>
      </div>

      <div v-if="timeMode === 'range'" class="time-range-buttons">
        <button
          type="button"
          @click="setTimeRange(1)"
          class="btn btn-sm"
        >
          Last Hour
        </button>
        <button
          type="button"
          @click="setTimeRange(6)"
          class="btn btn-sm"
        >
          Last 6 Hours
        </button>
        <button
          type="button"
          @click="setTimeRange(24)"
          class="btn btn-sm"
        >
          Last 24 Hours
        </button>
        <button
          type="button"
          @click="setTimeRange(168)"
          class="btn btn-sm"
        >
          Last Week
        </button>
      </div>

      <div v-if="timeMode === 'manual' || timeMode === 'range'" class="time-inputs">
        <div class="form-group">
          <label for="startTime">Start Time:</label>
          <input
            id="startTime"
            type="datetime-local"
            v-model="settings.startTime"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="endTime">End Time:</label>
          <input
            id="endTime"
            type="datetime-local"
            v-model="settings.endTime"
            class="form-control"
          />
        </div>

        <button
          type="button"
          @click="setCurrentTime"
          class="btn btn-sm btn-secondary"
        >
          Set to Current Time
        </button>
      </div>
    </div>

    <div class="settings-section">
      <h4>Refresh Settings</h4>

      <div class="form-group">
        <label for="refreshInterval">Refresh Interval (seconds):</label>
        <select
          id="refreshInterval"
          v-model="settings.refreshInterval"
          class="form-control"
        >
          <option :value="60000">1 minute</option>
          <option :value="300000">5 minutes</option>
          <option :value="600000">10 minutes</option>
          <option :value="1800000">30 minutes</option>
          <option :value="3600000">1 hour</option>
        </select>
      </div>
    </div>

    <div class="settings-section">
      <h4>Forecast Settings</h4>

      <div class="form-group">
        <label>
          <input
            type="checkbox"
            v-model="settings.showForecast"
          />
          Show Forecast Data
        </label>
        <small class="form-text">
          Enable forecast tabs to display weather predictions for different time periods
        </small>
      </div>

      <div v-if="settings.showForecast" class="forecast-configuration">
        <div class="form-group">
          <label>Forecast Parameters:</label>
          <div class="checkbox-grid">
            <label
              v-for="param in availableForecastParameters"
              :key="param.key"
              class="checkbox-item"
            >
              <input
                type="checkbox"
                :value="param.key"
                v-model="settings.selectedForecastParameters"
              />
              {{ param.label }}
            </label>
          </div>
          <small class="form-text">
            Select which weather parameters to show in forecast tabs
          </small>
        </div>

        <div class="form-group">
          <label>Forecast Periods:</label>
          <div class="checkbox-grid">
            <label
              v-for="period in availableForecastPeriods"
              :key="period.key"
              class="checkbox-item"
            >
              <input
                type="checkbox"
                :value="period.key"
                v-model="settings.forecastPeriods"
              />
              {{ period.label }}
            </label>
          </div>
          <small class="form-text">
            Select which forecast time periods to include in charts
          </small>
        </div>
      </div>
    </div>

    <div class="settings-section" v-if="settings.showForecast">
      <h4>Chart Colors</h4>

      <div class="color-settings">
        <div
          v-for="param in availableForecastParameters"
          :key="param.key"
          class="color-setting-item"
        >
          <label :for="`color-${param.key}`">{{ param.label }}:</label>
          <input
            :id="`color-${param.key}`"
            type="color"
            v-model="settings.chartColors![param.key]"
            class="color-picker"
          />
          <span class="color-preview" :style="{ backgroundColor: settings.chartColors?.[param.key] }"></span>
        </div>

        <!-- Grid Color Setting -->
        <div class="color-setting-item">
          <label for="grid-color">Grid Color:</label>
          <input
            id="grid-color"
            type="color"
            v-model="settings.gridColor"
            class="color-picker"
          />
          <span class="color-preview" :style="{ backgroundColor: settings.gridColor }"></span>
        </div>
      </div>

      <small class="form-text">
        Choose colors for each weather parameter in forecast charts and grid lines
      </small>
    </div>

  </div>
</template>

<style scoped>
.weather-settings {
  padding: 16px;
  max-width: 600px;
}

.settings-section {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e9ecef;
}

.settings-section:last-child {
  border-bottom: none;
}

.settings-section h4 {
  margin: 0 0 16px 0;
  color: #495057;
  font-size: 1.1em;
}

.input-mode-selector,
.time-mode-selector {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.input-mode-selector label,
.time-mode-selector label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
  color: #495057;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.form-text {
  color: #6c757d;
  font-size: 0.875em;
  margin-top: 4px;
  display: block;
}

.time-range-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.time-inputs {
  display: grid;
  gap: 16px;
}

.btn {
  padding: 6px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background: #f8f9fa;
  cursor: pointer;
  font-size: 14px;
}

.btn:hover {
  background: #e9ecef;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

.btn-secondary {
  background: #6c757d;
  color: white;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background: #5a6268;
}

.settings-validation .error {
  color: #dc3545;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 12px;
  margin: 0;
}

/* Forecast settings styles */
.forecast-configuration {
  margin-top: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px;
  margin: 8px 0;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: normal !important;
  margin-bottom: 0;
  cursor: pointer;
}

.checkbox-item input[type="checkbox"] {
  width: auto;
  padding: 0;
}

/* Color picker styles */
.color-settings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin: 16px 0;
}

.color-setting-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-setting-item label {
  font-weight: 500;
  color: #495057;
  min-width: 80px;
  margin-bottom: 0;
}

.color-picker {
  width: 40px;
  height: 30px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
}

.color-picker:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.color-preview {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 0 0 1px #ced4da;
}

@media (max-width: 480px) {
  .input-mode-selector,
  .time-mode-selector {
    flex-direction: column;
    gap: 8px;
  }

  .time-range-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
