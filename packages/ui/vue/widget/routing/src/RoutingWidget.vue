<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import {
  ref,
  toRefs,
  computed,
  onMounted,
  onUnmounted,
  watch,
} from 'vue'
import { useRoute } from 'vue-router'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  container as coreContainer,
  identifiers,
} from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import {
  EventActionsRegistry,
  EVENT_ACTIONS_REGISTRY,
} from 'org.eclipse.daanse.board.app.lib.events'
import { RoutingWidgetInterface } from './gen/RoutingWidgetInterface'
import { RouteCalculatedPayload } from './gen/RouteCalculatedPayload'
import { WaypointPayload } from './gen/WaypointPayload'
import { RoutingWidgetSettings } from './gen/RoutingWidgetSettings'
import {
  SET_WAYPOINTS,
  type Waypoint,
  type ValhallaRouteResult,
  type CostingModel,
} from 'org.eclipse.daanse.board.app.lib.datasource.valhalla'
import { debounce } from 'lodash'

const props = defineProps<{
  datasourceId: string
  config: RoutingWidgetSettings
  id?: string
}>()
const { datasourceId, config, id: widgetId } = toRefs(props)

const eventBus =
  coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER)
const actionsRegistry =
  coreContainer.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)

const route = useRoute()
const pageId = (route.params.pageid as string) || ''

const savedWaypoints = config.value?.waypoints as Waypoint[] | undefined
const waypoints = ref<Waypoint[]>(
  Array.isArray(savedWaypoints) ? [...savedWaypoints] : [],
)
const costing = ref<CostingModel>(
  (config.value?.costing as CostingModel) ||
  (config.value?.defaultCosting as CostingModel) ||
  'auto',
)
const routeResult = ref<ValhallaRouteResult | null>(null)
const isCalculating = ref(false)
const showManeuvers = ref(false)
const addressInputs = ref<string[]>(
  Array.isArray(savedWaypoints) && savedWaypoints.length > 0
    ? savedWaypoints.map(wp => wp.name || `${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}`)
    : ['', ''],
)
const suggestions = ref<any[][]>(
  Array.isArray(savedWaypoints) && savedWaypoints.length > 0
    ? savedWaypoints.map(() => [])
    : [[], []],
)
const activeSuggestionIndex = ref<number>(-1)

function persistState() {
  if (!config.value) return
  const validWaypoints = waypoints.value.filter(wp => wp.lat !== 0 || wp.lon !== 0)
  config.value.waypoints = validWaypoints.length > 0 ? [...validWaypoints] : undefined
  config.value.costing = costing.value
}

watch(waypoints, persistState, { deep: true })
watch(costing, persistState)

const data = ref(null as any)
const { update } = useDatasourceRepository(
  datasourceId,
  'object',
  data,
)

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal)
})

watch(data, (newData) => {
  if (newData) {
    routeResult.value = newData as ValhallaRouteResult
  }
})

const costingOptions = [
  { text: 'Auto', value: 'auto', icon: '🚗' },
  { text: 'Fahrrad', value: 'bicycle', icon: '🚲' },
  { text: 'Zu Fuß', value: 'pedestrian', icon: '🚶' },
  { text: 'LKW', value: 'truck', icon: '🚛' },
  { text: 'Bus', value: 'bus', icon: '🚌' },
  { text: 'Roller', value: 'motor_scooter', icon: '🛵' },
  { text: 'Motorrad', value: 'motorcycle', icon: '🏍️' },
]

const selectedCostingLabel = computed(() => {
  const opt = costingOptions.find((o) => o.value === costing.value)
  return opt ? `${opt.icon} ${opt.text}` : costing.value
})

const formattedDuration = computed(() => {
  if (!routeResult.value) return ''
  const min = routeResult.value.summary.duration_min
  if (min < 60) return `${min} min`
  const h = Math.floor(min / 60)
  const m = min % 60
  return m > 0 ? `${h} h ${m} min` : `${h} h`
})

const allManeuvers = computed(() => {
  if (!routeResult.value?.legs) return []
  return routeResult.value.legs.flatMap((leg, li) =>
    leg.maneuvers.map((m) => ({ ...m, legIndex: li })),
  )
})

async function searchAddress(query: string, index: number) {
  if (!query || query.length < 3) {
    suggestions.value[index] = []
    return
  }
  try {
    const url =
      'https://nominatim.openstreetmap.org/search?' +
      new URLSearchParams({
        q: query,
        format: 'json',
        limit: '5',
        addressdetails: '1',
      })
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'DaanseBoard/1.0' },
    })
    suggestions.value[index] = await resp.json()
  } catch {
    suggestions.value[index] = []
  }
}

const debouncedSearch = debounce(searchAddress, 400)

function onAddressInput(index: number) {
  activeSuggestionIndex.value = index
  debouncedSearch(addressInputs.value[index], index)
}

function selectSuggestion(sIndex: number, suggestion: any) {
  const wp: Waypoint = {
    lat: parseFloat(suggestion.lat),
    lon: parseFloat(suggestion.lon),
    name: suggestion.display_name?.split(',')[0] || '',
  }

  addressInputs.value[sIndex] = wp.name || suggestion.display_name
  suggestions.value[sIndex] = []
  activeSuggestionIndex.value = -1

  if (sIndex < waypoints.value.length) {
    waypoints.value[sIndex] = wp
  } else {
    waypoints.value.push(wp)
  }

  emitWaypointAdded(wp, sIndex)
}

function addIntermediateStop() {
  const newIndex = waypoints.value.length > 0
    ? waypoints.value.length - 1
    : waypoints.value.length
  waypoints.value.splice(newIndex, 0, {
    lat: 0,
    lon: 0,
    name: '',
  })
  addressInputs.value.splice(newIndex, 0, '')
  suggestions.value.splice(newIndex, 0, [])
}

function removeWaypointAt(index: number) {
  const removed = waypoints.value.splice(index, 1)[0]
  addressInputs.value.splice(index, 1)
  suggestions.value.splice(index, 1)

  if (removed) {
    emitWaypointRemoved(removed, index)
  }
}

function waypointLabel(index: number): string {
  if (index === 0) return 'Start'
  if (index === waypoints.value.length - 1 && waypoints.value.length > 1)
    return 'Ziel'
  return `Halt ${index}`
}

function waypointColor(index: number): string {
  if (index === 0) return '#4caf50'
  if (index === waypoints.value.length - 1 && waypoints.value.length > 1)
    return '#f44336'
  return '#2196f3'
}

async function doCalculateRoute() {
  const validWaypoints = waypoints.value.filter(
    (wp) => wp.lat !== 0 || wp.lon !== 0,
  )
  if (validWaypoints.length < 2) return

  isCalculating.value = true
  try {
    const {
      DatasourceRepository,
      identifier,
    } = await import(
      'org.eclipse.daanse.board.app.lib.repository.datasource'
    )
    const dsRepo = coreContainer.get<any>(identifier)
    const ds = dsRepo.getDatasource(datasourceId.value)
    if (ds && typeof ds.callEvent === 'function') {
      await ds.callEvent(SET_WAYPOINTS, {
        waypoints: validWaypoints,
        costing: costing.value,
      })
    }
  } catch (e) {
    console.warn('Route calculation failed:', e)
  } finally {
    isCalculating.value = false
  }
}

function clearAll() {
  waypoints.value = []
  addressInputs.value = ['', '']
  suggestions.value = [[], []]
  routeResult.value = null
  persistState()

  if (widgetId?.value) {
    eventBus.emit('widget:RoutingWidget:route_cleared', {
      type: 'widget:RoutingWidget:route_cleared',
      widgetId: widgetId.value,
      payload: { widgetId: widgetId.value, timestamp: Date.now() },
    })
  }
}

function emitWaypointAdded(wp: Waypoint, index: number) {
  if (!widgetId?.value) return
  const payload = new WaypointPayload()
  payload.lat = wp.lat
  payload.lon = wp.lon
  payload.name = wp.name
  payload.index = index
  eventBus.emit('widget:RoutingWidget:waypoint_added', {
    type: 'widget:RoutingWidget:waypoint_added',
    widgetId: widgetId.value,
    payload,
    timestamp: Date.now(),
  })
}

function emitWaypointRemoved(wp: Waypoint, index: number) {
  if (!widgetId?.value) return
  const payload = new WaypointPayload()
  payload.lat = wp.lat
  payload.lon = wp.lon
  payload.name = wp.name
  payload.index = index
  eventBus.emit('widget:RoutingWidget:waypoint_removed', {
    type: 'widget:RoutingWidget:waypoint_removed',
    widgetId: widgetId.value,
    payload,
    timestamp: Date.now(),
  })
}

function emitRouteCalculated(result: ValhallaRouteResult) {
  if (!widgetId?.value) return
  const payload = new RouteCalculatedPayload()
  payload.geojson = result.geojson
  payload.distance_km = result.summary.distance_km
  payload.duration_min = result.summary.duration_min
  payload.waypoints = result.waypoints
  payload.costing = costing.value
  eventBus.emit('widget:RoutingWidget:route_calculated', {
    type: 'widget:RoutingWidget:route_calculated',
    widgetId: widgetId.value,
    payload,
    timestamp: Date.now(),
  })
}

watch(routeResult, (newResult) => {
  if (newResult) {
    emitRouteCalculated(newResult)
  }
})

class RoutingWidgetApi extends RoutingWidgetInterface {
  addWaypoint(lat: number, lon: number, name?: string): void {
    const wp: Waypoint = { lat, lon, name }
    waypoints.value.push(wp)
    addressInputs.value.push(name || `${lat.toFixed(4)}, ${lon.toFixed(4)}`)
    suggestions.value.push([])
    emitWaypointAdded(wp, waypoints.value.length - 1)
  }

  removeWaypoint(index: number): void {
    removeWaypointAt(index)
  }

  clearWaypoints(): void {
    clearAll()
  }

  setCosting(newCosting: string): void {
    costing.value = newCosting as CostingModel
  }

  calculateRoute(): void {
    doCalculateRoute()
  }
}

const api = new RoutingWidgetApi()
defineExpose<RoutingWidgetInterface>(api)

onMounted(() => {
  if (widgetId?.value) {
    actionsRegistry.registerInstance(
      widgetId.value,
      api,
      'RoutingWidget',
      pageId,
    )
  }
  const validWaypoints = waypoints.value.filter(wp => wp.lat !== 0 || wp.lon !== 0)
  if (validWaypoints.length >= 2) {
    doCalculateRoute()
  }
})

onUnmounted(() => {
  if (widgetId?.value) {
    actionsRegistry.unregisterInstance(widgetId.value)
  }
})
</script>

<template>
  <div class="routing-widget">
    <!-- Header -->
    <div class="routing-header">
      <span class="routing-title">Routing</span>
      <select v-model="costing" class="costing-select">
        <option
          v-for="opt in costingOptions"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.icon }} {{ opt.text }}
        </option>
      </select>
    </div>

    <!-- Waypoints -->
    <div class="waypoints-list">
      <!-- Start + End (minimum 2) -->
      <div
        v-for="(wp, i) in Math.max(2, waypoints.length)"
        :key="i"
        class="waypoint-row"
      >
        <div
          class="waypoint-dot"
          :style="{ backgroundColor: waypointColor(i) }"
        ></div>
        <div class="waypoint-input-wrapper">
          <label class="waypoint-label">
            {{ waypointLabel(i) }}
          </label>
          <input
            v-model="addressInputs[i]"
            class="waypoint-input"
            :placeholder="'Adresse eingeben...'"
            @input="onAddressInput(i)"
            @focus="activeSuggestionIndex = i"
          />
          <div
            v-if="
              activeSuggestionIndex === i &&
              suggestions[i] &&
              suggestions[i].length > 0
            "
            class="suggestions-dropdown"
          >
            <div
              v-for="(s, si) in suggestions[i]"
              :key="si"
              class="suggestion-item"
              @mousedown.prevent="selectSuggestion(i, s)"
            >
              {{ s.display_name }}
            </div>
          </div>
        </div>
        <button
          v-if="i >= 2"
          class="remove-btn"
          title="Entfernen"
          @click="removeWaypointAt(i)"
        >
          &times;
        </button>
      </div>
    </div>

    <!-- Actions -->
    <div class="routing-actions">
      <button class="btn-secondary" @click="addIntermediateStop">
        + Zwischenhalt
      </button>
      <button
        class="btn-primary"
        :disabled="isCalculating"
        @click="doCalculateRoute"
      >
        {{ isCalculating ? 'Berechne...' : 'Route berechnen' }}
      </button>
      <button
        v-if="routeResult || waypoints.length > 0"
        class="btn-clear"
        @click="clearAll"
      >
        Löschen
      </button>
    </div>

    <!-- Result -->
    <div v-if="routeResult" class="route-result">
      <div class="result-summary">
        <div class="summary-item">
          <span class="summary-value">
            {{ routeResult.summary.distance_km.toFixed(1) }} km
          </span>
          <span class="summary-label">Distanz</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">
            {{ formattedDuration }}
          </span>
          <span class="summary-label">Dauer</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">
            {{ selectedCostingLabel }}
          </span>
          <span class="summary-label">Verkehrsart</span>
        </div>
      </div>

      <!-- Maneuvers -->
      <div class="maneuvers-section">
        <button
          class="maneuvers-toggle"
          @click="showManeuvers = !showManeuvers"
        >
          {{ showManeuvers ? '▾' : '▸' }}
          Manöver ({{ allManeuvers.length }})
        </button>
        <div v-if="showManeuvers" class="maneuvers-list">
          <div
            v-for="(m, mi) in allManeuvers"
            :key="mi"
            class="maneuver-item"
          >
            <span class="maneuver-instruction">
              {{ m.instruction }}
            </span>
            <span class="maneuver-distance">
              {{ m.length.toFixed(1) }} km
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.routing-widget {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.75rem;
  gap: 0.75rem;
  overflow-y: auto;
  font-family: inherit;
  font-size: 0.875rem;
}

.routing-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.routing-title {
  font-weight: 600;
  font-size: 1rem;
  color: #c45e00;
}

.costing-select {
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.8rem;
  background: #fff;
}

.waypoints-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.waypoint-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.waypoint-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 1.4rem;
  flex-shrink: 0;
}

.waypoint-input-wrapper {
  flex: 1;
  position: relative;
}

.waypoint-label {
  display: block;
  font-size: 0.7rem;
  color: #888;
  margin-bottom: 2px;
}

.waypoint-input {
  width: 100%;
  padding: 0.35rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.8rem;
  box-sizing: border-box;
}

.waypoint-input:focus {
  outline: none;
  border-color: #c45e00;
}

.suggestions-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.suggestion-item {
  padding: 0.4rem 0.5rem;
  cursor: pointer;
  font-size: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
}

.suggestion-item:hover {
  background: #fff3e0;
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.2rem;
  margin-top: 1.2rem;
  line-height: 1;
}

.remove-btn:hover {
  color: #f44336;
}

.routing-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 0.4rem 0.75rem;
  background: #c45e00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
}

.btn-primary:hover {
  background: #a04e00;
}

.btn-primary:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-secondary {
  padding: 0.4rem 0.75rem;
  background: #fff;
  color: #555;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.btn-secondary:hover {
  background: #f5f5f5;
}

.btn-clear {
  padding: 0.4rem 0.75rem;
  background: #fff;
  color: #f44336;
  border: 1px solid #ffcdd2;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.btn-clear:hover {
  background: #ffebee;
}

.route-result {
  border-top: 1px solid #e0e0e0;
  padding-top: 0.75rem;
}

.result-summary {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.summary-item {
  display: flex;
  flex-direction: column;
}

.summary-value {
  font-weight: 600;
  font-size: 1rem;
  color: #333;
}

.summary-label {
  font-size: 0.7rem;
  color: #888;
}

.maneuvers-section {
  margin-top: 0.75rem;
}

.maneuvers-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  color: #555;
  padding: 0.25rem 0;
  font-weight: 500;
}

.maneuvers-toggle:hover {
  color: #c45e00;
}

.maneuvers-list {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.maneuver-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.75rem;
}

.maneuver-instruction {
  flex: 1;
  color: #333;
}

.maneuver-distance {
  color: #888;
  white-space: nowrap;
}
</style>
