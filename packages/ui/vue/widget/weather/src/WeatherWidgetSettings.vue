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

const inputMode = ref<'thingId' | 'location'>(
  localSettings.value.useLocation ? 'location' : 'thingId'
)

watch(inputMode, (newMode) => {
  settings.value.useLocation = newMode === 'location'
  if (newMode === 'location') {
    settings.value.thingId = ''
  } else {
    settings.value.location = ''
  }
})

watch(timeMode, (newMode) => {
  settings.value.useTimeRange = newMode === 'range'
  settings.value.manualTimeSelection = newMode === 'manual'

  if (newMode === 'auto') {
    settings.value.startTime = ''
    settings.value.endTime = ''
  }
})

const isValid = computed(() => {
  if (inputMode.value === 'thingId') {
    return (localSettings.value.thingId || '').trim() !== ''
  } else {
    return (localSettings.value.location || '').trim() !== ''
  }
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
</script>

<template>
  <div class="weather-settings">
    {{settings}}
    <div class="settings-section">
      <h4>Data Source Configuration</h4>

      <div class="input-mode-selector">
        <label>
          <input
            type="radio"
            value="thingId"
            v-model="inputMode"
          />
          Use Thing ID
        </label>
        <label>
          <input
            type="radio"
            value="location"
            v-model="inputMode"
          />
          Use Location
        </label>
      </div>

      <div v-if="inputMode === 'thingId'" class="form-group">
        <label for="thingId">Thing ID:</label>
        <input
          id="thingId"
          type="text"
          v-model="settings.thingId"
          placeholder="Enter OGC STA Thing ID (e.g., 10567)"
          class="form-control"
        />
        <small class="form-text">
          Enter the unique identifier for the weather station Thing in the OGC SensorThings API
        </small>
      </div>

      <div v-if="inputMode === 'location'" class="form-group">
        <label for="location">Location:</label>
        <input
          id="location"
          type="text"
          v-model="settings.location"
          placeholder="Enter location name"
          class="form-control"
        />
        <small class="form-text">
          Enter a location name to find the nearest weather station
        </small>
      </div>
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

    <div class="settings-validation" v-if="!isValid">
      <p class="error">
        Please provide either a Thing ID or location to configure the weather widget.
      </p>
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
