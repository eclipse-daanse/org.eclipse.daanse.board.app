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
import { ref, computed, watch, shallowRef, nextTick } from 'vue'
import { LMap, LTileLayer, LGeoJson, LCircleMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import type { PointExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  SET_WAYPOINTS,
  SET_COSTING,
  OPTIMIZE_ROUTE,
  type Waypoint,
  type CostingModel,
} from 'org.eclipse.daanse.board.app.lib.datasource.valhalla'

const props = defineProps<{ dataSource: any }>()

const data = ref(null as any)
const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource)
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore)

const waypoints = ref<Waypoint[]>([])
const costing = ref<CostingModel>((props.dataSource.config?.costing as CostingModel) || 'auto')
const searchQuery = ref('')
const searchResults = ref<any[]>([])
const searching = ref(false)
let searchTimeout: ReturnType<typeof setTimeout> | null = null
const mapRef = ref<any>(null)
const mapCenter = ref<[number, number]>([50.93, 11.59])
const mapZoom = ref(10)
const draggingIndex = ref<number | null>(null)
const calculating = ref(false)

const costingOptions = [
  { text: 'Auto', value: 'auto' },
  { text: 'Fahrrad', value: 'bicycle' },
  { text: 'Fußgänger', value: 'pedestrian' },
  { text: 'LKW', value: 'truck' },
  { text: 'Bus', value: 'bus' },
  { text: 'Motorroller', value: 'motor_scooter' },
  { text: 'Motorrad', value: 'motorcycle' },
]

const lineFeatures = computed(() => {
  if (!data.value?.geojson?.features) return []
  return data.value.geojson.features.filter((f: any) => f.geometry?.type === 'LineString')
})

const lineGeoJson = computed(() => {
  if (lineFeatures.value.length === 0) return null
  return { type: 'FeatureCollection' as const, features: lineFeatures.value }
})

const lineStyle = () => ({ color: '#c45e00', weight: 5, opacity: 0.8 })

function waypointColor(index: number): string {
  if (index === 0) return '#4caf50'
  if (index === waypoints.value.length - 1) return '#f44336'
  return '#2196f3'
}

function waypointLabel(index: number): string {
  if (index === 0) return 'Start'
  if (index === waypoints.value.length - 1) return 'Ziel'
  return `Stop ${index}`
}

watch(tempStore, async () => {
  if (tempStore.value) {
    data.value = await tempStore.value.getData('object')
    tempStore.value.subscribe(async () => {
      data.value = await tempStore.value.getData('object')
    })
  }
}, { deep: true })

watch(props.dataSource, () => update(), { deep: true })

async function searchAddress() {
  const q = searchQuery.value.trim()
  if (q.length < 3) {
    searchResults.value = []
    return
  }
  searching.value = true
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5&addressdetails=1`,
    )
    searchResults.value = await res.json()
  } catch {
    searchResults.value = []
  } finally {
    searching.value = false
  }
}

function onSearchInput() {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(searchAddress, 400)
}

function selectSearchResult(result: any) {
  const wp: Waypoint = {
    lat: parseFloat(result.lat),
    lon: parseFloat(result.lon),
    name: result.display_name.split(',').slice(0, 2).join(', '),
  }
  waypoints.value.push(wp)
  searchQuery.value = ''
  searchResults.value = []
  fitMapToWaypoints()
}

function onMapClick(e: any) {
  const { lat, lng } = e.latlng
  waypoints.value.push({ lat, lon: lng, name: `${lat.toFixed(4)}, ${lng.toFixed(4)}` })
}

function removeWaypoint(index: number) {
  waypoints.value.splice(index, 1)
}

function clearAllWaypoints() {
  waypoints.value = []
  data.value = null
  if (tempStore.value) {
    tempStore.value.callEvent(SET_WAYPOINTS, { waypoints: [], costing: costing.value })
  }
}

function moveWaypoint(from: number, to: number) {
  if (to < 0 || to >= waypoints.value.length) return
  const item = waypoints.value.splice(from, 1)[0]
  waypoints.value.splice(to, 0, item)
}

async function calculateRoute() {
  if (!tempStore.value || waypoints.value.length < 2) return
  calculating.value = true
  try {
    await tempStore.value.callEvent(SET_WAYPOINTS, {
      waypoints: waypoints.value.map(wp => ({ lat: wp.lat, lon: wp.lon, name: wp.name })),
      costing: costing.value,
    })
    fitMapToWaypoints()
  } finally {
    calculating.value = false
  }
}

async function optimizeRoute() {
  if (!tempStore.value || waypoints.value.length < 3) return
  calculating.value = true
  try {
    await tempStore.value.callEvent(OPTIMIZE_ROUTE, {
      waypoints: waypoints.value.map(wp => ({ lat: wp.lat, lon: wp.lon, name: wp.name })),
      costing: costing.value,
    })
    const result = await tempStore.value.getData('object')
    if (result?.waypoints) {
      waypoints.value = result.waypoints.map((wp: any) => ({
        lat: wp.lat,
        lon: wp.lon,
        name: wp.name || `${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}`,
      }))
    }
    fitMapToWaypoints()
  } finally {
    calculating.value = false
  }
}

function fitMapToWaypoints() {
  if (waypoints.value.length === 0) return
  nextTick(() => {
    const map = mapRef.value?.leafletObject
    if (!map) return
    if (waypoints.value.length === 1) {
      map.setView([waypoints.value[0].lat, waypoints.value[0].lon], 14)
    } else {
      const lats = waypoints.value.map(wp => wp.lat)
      const lons = waypoints.value.map(wp => wp.lon)
      map.fitBounds(
        [[Math.min(...lats), Math.min(...lons)], [Math.max(...lats), Math.max(...lons)]],
        { padding: [40, 40] },
      )
    }
  })
}

function onDragStart(index: number) {
  draggingIndex.value = index
}

function onDragOver(e: DragEvent, index: number) {
  e.preventDefault()
  if (draggingIndex.value === null || draggingIndex.value === index) return
  const from = draggingIndex.value
  const item = waypoints.value.splice(from, 1)[0]
  waypoints.value.splice(index, 0, item)
  draggingIndex.value = index
}

function onDragEnd() {
  draggingIndex.value = null
}

const maneuvers = computed(() => {
  if (!data.value?.legs) return []
  return data.value.legs.flatMap((leg: any) => leg.maneuvers || [])
})
</script>

<template>
  <div class="valhalla-preview">
    <div class="sidebar">
      <div class="search-section">
        <div class="search-box">
          <VaInput
            v-model="searchQuery"
            placeholder="Adresse suchen..."
            class="search-input"
            @input="onSearchInput"
            @keydown.enter="searchAddress"
          >
            <template #prependInner>
              <va-icon name="search" size="small" />
            </template>
          </VaInput>
          <div v-if="searchResults.length > 0" class="search-results">
            <div
              v-for="result in searchResults"
              :key="result.place_id"
              class="search-result-item"
              @click="selectSearchResult(result)"
            >
              <va-icon name="location_on" size="small" color="primary" />
              <span>{{ result.display_name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="controls-row">
        <VaSelect
          v-model="costing"
          :options="costingOptions"
          text-by="text"
          value-by="value"
          label="Modus"
          class="costing-select"
        />
        <VaButton
          v-if="waypoints.length > 0"
          preset="secondary"
          size="small"
          icon="delete_sweep"
          @click="clearAllWaypoints"
        >
          Alle löschen
        </VaButton>
      </div>

      <div class="waypoints-list">
        <div class="waypoints-header">
          <span class="section-title">Wegpunkte ({{ waypoints.length }})</span>
          <span class="hint">Klick auf Karte = Wegpunkt hinzufügen</span>
        </div>
        <div
          v-for="(wp, i) in waypoints"
          :key="i"
          class="waypoint-item"
          :class="{ dragging: draggingIndex === i }"
          draggable="true"
          @dragstart="onDragStart(i)"
          @dragover="onDragOver($event, i)"
          @dragend="onDragEnd"
        >
          <div class="waypoint-grip">
            <va-icon name="drag_indicator" size="small" color="secondary" />
          </div>
          <div class="waypoint-marker" :style="{ backgroundColor: waypointColor(i) }">
            {{ i + 1 }}
          </div>
          <div class="waypoint-info">
            <span class="waypoint-role">{{ waypointLabel(i) }}</span>
            <span class="waypoint-name">{{ wp.name || `${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}` }}</span>
          </div>
          <div class="waypoint-actions">
            <va-button preset="plain" size="small" icon="arrow_upward" :disabled="i === 0" @click="moveWaypoint(i, i - 1)" />
            <va-button preset="plain" size="small" icon="arrow_downward" :disabled="i === waypoints.length - 1" @click="moveWaypoint(i, i + 1)" />
            <va-button preset="plain" size="small" icon="close" color="danger" @click="removeWaypoint(i)" />
          </div>
        </div>
        <div v-if="waypoints.length === 0" class="no-waypoints">
          Noch keine Wegpunkte. Klicke auf die Karte oder suche eine Adresse.
        </div>
      </div>

      <div v-if="waypoints.length >= 2" class="action-buttons">
        <VaButton
          :disabled="calculating"
          :loading="calculating"
          icon="route"
          @click="calculateRoute"
        >
          Route berechnen
        </VaButton>
        <VaButton
          v-if="waypoints.length >= 3"
          preset="secondary"
          :disabled="calculating"
          :loading="calculating"
          icon="auto_fix_high"
          @click="optimizeRoute"
        >
          Route optimieren
        </VaButton>
      </div>

      <div v-if="data?.summary" class="route-summary">
        <div class="summary-header">Route</div>
        <div class="summary-stats">
          <div class="stat">
            <va-icon name="straighten" size="small" />
            <span>{{ data.summary.distance_km.toFixed(1) }} km</span>
          </div>
          <div class="stat">
            <va-icon name="schedule" size="small" />
            <span>{{ data.summary.duration_min }} min</span>
          </div>
          <div class="stat">
            <va-icon name="turn_right" size="small" />
            <span>{{ maneuvers.length }} Manöver</span>
          </div>
        </div>
        <div v-if="maneuvers.length > 0" class="maneuvers-list">
          <div v-for="(m, i) in maneuvers" :key="i" class="maneuver-item">
            <span class="maneuver-index">{{ i + 1 }}.</span>
            <span class="maneuver-text">{{ m.instruction }}</span>
            <span class="maneuver-dist">{{ (m.length).toFixed(1) }} km</span>
          </div>
        </div>
      </div>
    </div>

    <div class="map-container">
      <l-map
        ref="mapRef"
        :center="mapCenter as PointExpression"
        :zoom="mapZoom"
        style="height: 100%; width: 100%"
        @click="onMapClick"
      >
        <l-tile-layer
          url="https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          :options="{ maxNativeZoom: 19, maxZoom: 21 }"
        />

        <l-geo-json
          v-if="lineGeoJson"
          :geojson="lineGeoJson"
          :options-style="lineStyle"
        />

        <l-circle-marker
          v-for="(wp, i) in waypoints"
          :key="'wp-' + i"
          :lat-lng="[wp.lat, wp.lon]"
          :radius="10"
          :fill-color="waypointColor(i)"
          color="#fff"
          :weight="3"
          :fill-opacity="1"
        >
          <l-popup>
            <strong>{{ waypointLabel(i) }}</strong><br>
            {{ wp.name || `${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}` }}
          </l-popup>
        </l-circle-marker>
      </l-map>
    </div>
  </div>
</template>

<style scoped>
.valhalla-preview {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar {
  width: 360px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;
  background: #fafafa;
}

.search-section {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  background: white;
}

.search-box {
  position: relative;
}

.search-input {
  width: 100%;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 250px;
  overflow-y: auto;
}

.search-result-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-size: 0.85em;
  border-bottom: 1px solid #f3f4f6;
}

.search-result-item:hover {
  background-color: #f0f4ff;
}

.search-result-item:last-child {
  border-bottom: none;
}

.controls-row {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  background: white;
}

.costing-select {
  flex: 1;
}

.waypoints-list {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
}

.waypoints-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem 0.5rem;
}

.section-title {
  font-weight: 600;
  font-size: 0.9em;
  color: #374151;
}

.hint {
  font-size: 0.75em;
  color: #9ca3af;
}

.waypoint-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.5rem;
  margin-bottom: 0.25rem;
  background: white;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  cursor: grab;
  transition: box-shadow 0.15s, opacity 0.15s;
}

.waypoint-item:hover {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.waypoint-item.dragging {
  opacity: 0.5;
}

.waypoint-grip {
  cursor: grab;
  display: flex;
  align-items: center;
}

.waypoint-marker {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7em;
  font-weight: 700;
  flex-shrink: 0;
}

.waypoint-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.waypoint-role {
  font-size: 0.7em;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.waypoint-name {
  font-size: 0.85em;
  color: #374151;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.waypoint-actions {
  display: flex;
  gap: 0;
  flex-shrink: 0;
}

.no-waypoints {
  text-align: center;
  color: #9ca3af;
  font-size: 0.85em;
  padding: 2rem 1rem;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  border-top: 1px solid #e5e7eb;
  background: white;
}

.route-summary {
  border-top: 1px solid #e5e7eb;
  padding: 0.75rem;
  background: white;
}

.summary-header {
  font-weight: 600;
  font-size: 0.95em;
  color: #111827;
  margin-bottom: 0.5rem;
}

.summary-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9em;
  color: #374151;
  font-weight: 500;
}

.maneuvers-list {
  max-height: 200px;
  overflow-y: auto;
  border-top: 1px solid #f3f4f6;
  padding-top: 0.5rem;
  margin-top: 0.25rem;
}

.maneuver-item {
  display: flex;
  gap: 0.4rem;
  padding: 0.2rem 0;
  font-size: 0.8em;
  color: #4b5563;
  align-items: flex-start;
}

.maneuver-index {
  color: #9ca3af;
  min-width: 1.5em;
  text-align: right;
}

.maneuver-text {
  flex: 1;
}

.maneuver-dist {
  color: #9ca3af;
  flex-shrink: 0;
}

.map-container {
  flex: 1;
  min-width: 300px;
}
</style>
