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
import {  ref, shallowRef, watch } from 'vue'
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';

const props = defineProps<{ dataSource: any }>();



const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
const waetherData = ref(null as any);

watch(tempStore, async () => {
  waetherData.value = await tempStore.value.getData('WeatherData');
});

watch(props.dataSource, () => {
  update();
}, { deep: true });

// Helper functions for timestamp handling
function hasTimestamp(station: any): boolean {
  const measurements = ['temperature', 'humidity', 'pressure', 'windSpeed', 'windDirection', 'precipitation', 'visibility', 'cloudCover'];
  return measurements.some(key => station[key]?.timestamp);
}

function getLatestTimestamp(station: any): string {
  const measurements = ['temperature', 'humidity', 'pressure', 'windSpeed', 'windDirection', 'precipitation', 'visibility', 'cloudCover'];
  let latest = '';

  measurements.forEach(key => {
    if (station[key]?.timestamp && station[key].timestamp > latest) {
      latest = station[key].timestamp;
    }
  });

  return latest;
}

function formatTimestamp(timestamp: string): string {
  if (!timestamp) return '';

  try {
    const date = new Date(timestamp);
    return date.toLocaleString();
  } catch {
    return timestamp;
  }
}

</script>

<template>
  <div class="weather-composer-preview">
    <div class="preview-header">
      <h3>🌤️ Weather Data Composer</h3>
    </div>

    <div v-if="!waetherData || waetherData.length === 0" class="preview-empty">
      <p>No weather data available</p>
      <small>Configure connected datasources to see weather data</small>
    </div>

    <div v-else class="weather-stations">
      <div v-for="station in waetherData" :key="station.thingId" class="weather-station">
        <div class="station-header">
          <h4>📍 {{ station.location.name }}</h4>
          <small v-if="station.location.description">{{ station.location.description }}</small>
          <small v-if="station.location.coordinates?.latitude != null && station.location.coordinates?.longitude != null" class="coordinates">
            {{ station.location.coordinates.latitude.toFixed(4) }}°N,
            {{ station.location.coordinates.longitude.toFixed(4) }}°E
          </small>
        </div>

        <div class="weather-measurements">
          <div v-if="station.temperature" class="measurement">
            <div class="measurement-icon">🌡️</div>
            <div class="measurement-info">
              <span class="label">Temperature</span>
              <span class="value">{{ station.temperature.value }}{{ station.temperature.unit }}</span>
            </div>
          </div>

          <div v-if="station.humidity" class="measurement">
            <div class="measurement-icon">💧</div>
            <div class="measurement-info">
              <span class="label">Humidity</span>
              <span class="value">{{ station.humidity.value }}{{ station.humidity.unit }}</span>
            </div>
          </div>

          <div v-if="station.pressure" class="measurement">
            <div class="measurement-icon">📊</div>
            <div class="measurement-info">
              <span class="label">Pressure</span>
              <span class="value">{{ station.pressure.value }}{{ station.pressure.unit }}</span>
            </div>
          </div>

          <div v-if="station.windSpeed" class="measurement">
            <div class="measurement-icon">💨</div>
            <div class="measurement-info">
              <span class="label">Wind Speed</span>
              <span class="value">{{ station.windSpeed.value }}{{ station.windSpeed.unit }}</span>
            </div>
          </div>

          <div v-if="station.windDirection" class="measurement">
            <div class="measurement-icon">🧭</div>
            <div class="measurement-info">
              <span class="label">Wind Direction</span>
              <span class="value">{{ station.windDirection.value }}{{ station.windDirection.unit }}</span>
            </div>
          </div>

          <div v-if="station.precipitation" class="measurement">
            <div class="measurement-icon">🌧️</div>
            <div class="measurement-info">
              <span class="label">Precipitation</span>
              <span class="value">{{ station.precipitation.value }}{{ station.precipitation.unit }}</span>
            </div>
          </div>

          <div v-if="station.visibility" class="measurement">
            <div class="measurement-icon">👁️</div>
            <div class="measurement-info">
              <span class="label">Visibility</span>
              <span class="value">{{ station.visibility.value }}{{ station.visibility.unit }}</span>
            </div>
          </div>

          <div v-if="station.cloudCover" class="measurement">
            <div class="measurement-icon">☁️</div>
            <div class="measurement-info">
              <span class="label">Cloud Cover</span>
              <span class="value">{{ station.cloudCover.value }}{{ station.cloudCover.unit }}</span>
            </div>
          </div>
        </div>

        <div v-if="hasTimestamp(station)" class="timestamp">
          <small>Last updated: {{ formatTimestamp(getLatestTimestamp(station)) }}</small>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.weather-composer-preview {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  max-width: 400px;
}

.preview-header h3 {
  margin: 0 0 16px 0;
  color: #495057;
  font-size: 1.2em;
}

.preview-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #dee2e6;
}

.info-item .label {
  color: #6c757d;
  font-weight: 500;
}

.info-item .value {
  color: #495057;
  font-weight: 600;
}

.capabilities {
  margin-top: 16px;
}

.capabilities h4 {
  margin: 0 0 8px 0;
  color: #495057;
  font-size: 1em;
}

.capabilities ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.capabilities li {
  padding: 4px 0;
  color: #6c757d;
  font-size: 0.9em;
}

.preview-empty {
  text-align: center;
  color: #6c757d;
  font-style: italic;
  padding: 20px;
}

.weather-stations {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.weather-station {
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e9ecef;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.station-header {
  margin-bottom: 16px;
  border-bottom: 1px solid #f1f3f4;
  padding-bottom: 12px;
}

.station-header h4 {
  margin: 0 0 4px 0;
  color: #343a40;
  font-size: 1.1em;
}

.station-header small {
  display: block;
  color: #6c757d;
  margin-bottom: 2px;
}

.coordinates {
  font-family: monospace;
  font-size: 0.85em !important;
}

.weather-measurements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.measurement {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.measurement-icon {
  font-size: 1.2em;
  width: 24px;
  text-align: center;
}

.measurement-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.measurement-info .label {
  font-size: 0.85em;
  color: #6c757d;
  font-weight: 500;
}

.measurement-info .value {
  font-size: 1em;
  color: #495057;
  font-weight: 600;
}

.timestamp {
  text-align: center;
  padding-top: 8px;
  border-top: 1px solid #f1f3f4;
}

.timestamp small {
  color: #6c757d;
  font-size: 0.8em;
}
</style>
