<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { inject, computed, onMounted, onUnmounted, reactive, ref, toRaw, toRefs, watch } from 'vue'
import type { IMapSettings } from './Settings'
import 'leaflet/dist/leaflet.css'

import { LMap, LWmsTileLayer, LTileLayer, LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import { useComparator } from './composables/comparator'
import { thingFilterOf } from './composables/thingScope'
import { useUtils } from './composables/utils'
import { type BoxedDatastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import L, { PointExpression } from 'leaflet'
import { ERefType, IRenderer } from './api/Renderer'
import { resolve } from './utils/helpers'
import { debounce, uniq, uniqBy } from 'lodash'
import type { GeoJsonObject, GeoJsonProperties, Geometry, Polygon } from 'geojson'
import type { Datastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import { Task, useTaskManager } from './composables/tasktimer'
import { FILTER, FILTERRESET, UPDATE_MQTT_SUBSCRIPTIONS, MQTT_UNSUBSCRIBE_ALL } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import { useDatasourceRepository, isModelled, useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import booleanContains from '@turf/boolean-contains'
import { feature } from '@turf/helpers'
import pointOnFeature from '@turf/point-on-feature'
import { useDataPointRegistry } from './composables/datapointRegistry'
import { IconWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import { IDataRetrieveable, DatasourceRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { IconSettings } from './gen/IconSettings'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import WFSLayer from './components/WFSLayer.vue'
import GeoJsonLayer from './components/GeoJsonLayer.vue'
import RestGeoJsonLayer from './components/RestGeoJsonLayer.vue'
import OGCSTALayer from './components/OGCSTALayer.vue'
import RouteLayer from './components/RouteLayer.vue'
import { useOGCService } from './composables/ogcService'
import { logMap, logDatasource, logObservations, logServices, logTasks } from './utils/logger'
import type { MapWidgetInterface } from './gen/MapWidgetInterface'
// The class to extend: the interface now carries the EObject members too
import { MapWidgetInterfaceImpl } from './gen/MapWidgetInterfaceImpl'
import type { MapSettings } from './gen/MapSettings'
import { modelled, modelledLayer, modelledSettings } from './settingsModel'
import { MapSettingsFactory } from './gen/MapSettingsFactory'


/**
 * A modelled list as a plain array, for the template and for leaflet.
 *
 * Anything typed in the model comes back as an EList, and neither v-for nor
 * leaflet's PointExpression knows what to do with one.
 */
const asArray = (list: unknown): any[] => {
  const any = list as any
  if (typeof any?.toArray === 'function') return any.toArray()
  return Array.isArray(any) ? any : []
}

import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { MapClickPayload } from './gen/MapClickPayload'
import { MapClickPayloadImpl } from './gen/MapClickPayloadImpl'
import { useRoute } from 'vue-router'
import { clientOf } from './serviceClient'
import { dataTypeFor } from './dataTypes'
import { presetFor } from './defaults'
import { renewBaseMap } from './baseMap'
import { drawOverlay, overlayKey, overlayTiles } from './roadOverlay'
import { followZoom } from './zoom'
import { v4 as uuid } from 'uuid'

const props = defineProps<{ datasourceId: string; id: string }>()
const { datasourceId, id: widgetId } = toRefs(props)

// Get pageId from route
const route = useRoute()
const pageId = (route.params.pageid as string) || ''
const stored = defineModel<MapSettings>('configv', { required: true});
/*
 * The settings as the model's own object (#1262). A board hands them over
 * as plain JSON; the adoption is shared with the settings and the preview,
 * which hold the same configuration, so all three work on one instance.
 * The widget does not write it back - opening a board is not a change -
 * the settings do, as soon as they are opened.
 */
const config = computed(() => modelledSettings(stored.value) as MapSettings)
/*
 * Read through this, not through config: a list changed in the settings
 * is a change below the instance, which only the adapter hears (#1203).
 */
const settings = useEObject(() => config.value)
const map = ref(null)


/**
 * Puts a whole list into the configuration, by the name the model gives it.
 *
 * The model types these as ELists, but what the widget holds is a plain
 * object: toJSON is how the generated defaults get in, and it hands a
 * many-valued feature back as an array. So the values replace the list.
 * A board stored while one of them was still an EList carries one, and
 * that is filled rather than replaced - a containment list belongs to its
 * object.
 */
function setList(name: 'center' | 'layers' | 'styles', values: unknown[]) {
  const held = (config.value as any)[name] as { clear: () => void; add: (value: unknown) => void }
  held.clear()
  for (const value of values) held.add(value)
}

/*
 * A value the map itself keeps - where it was left, what was selected.
 *
 * Written into the model without a notification: a pan is not an edit, and
 * re-rendering on it would fight leaflet. Until the settings have written
 * the adopted instance back, the stored plain object is what a save
 * writes, so the value goes there as well, as it always did.
 */
function remember(name: 'center' | 'zoom' | 'selectedThingId', value: unknown) {
  const held = config.value as unknown as { eDeliver(): boolean; eSetDeliver(deliver: boolean): void }
  const delivering = held.eDeliver()
  held.eSetDeliver(false)
  try {
    if (name === 'center') setList('center', value as unknown[])
    else (config.value as any)[name] = value
  } finally {
    held.eSetDeliver(delivering)
  }
  if (!isModelled(stored.value)) (stored.value as any)[name] = value
}


// Get EventActionsRegistry
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!
const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!

function handleMapClick(e: any) {
  if (!widgetId?.value) return
  const { lat, lng } = e.latlng
  const payload = new MapClickPayloadImpl()
  payload.lat = lat
  payload.lon = lng
  eventBus.emit('widget:MapWidget:click_on_map', {
    type: 'widget:MapWidget:click_on_map',
    widgetId: widgetId.value,
    payload,
    timestamp: Date.now(),
  })
}

const { filterFeatureCollection, compareDatastream, compareThing } = useComparator()
const { isPoint, isFeatureCollection, transformToGeoJson, isFeature } = useUtils()
const { createServiceWMS, createServiceWFS } = useOGCService()


const data = ref<any>({})
const additionalDatasourcesData = ref<Map<string, any>>(new Map())
const servicesReady = ref(false) // Track when services are reconstructed
const subscribedDatasources = new Set<string>() // Track which datasources are already subscribed
const datasourceUnsubscribeFunctions = new Map<string, () => void>() // Track unsubscribe functions
const loadingDatasources = new Set<string>() // Track which datasources are currently loading
// Session-based cancellation replaces the old isLoadingObservations flag
// Each new call increments loadObservationsSessionId; old runs detect the mismatch and abort
let isUnmounting = false // Track if component is unmounting
const activeTasks = new Map<string, Task>() // Track active tasks for cleanup
// Create a local TaskManager instance for this widget
const localTaskManager = useTaskManager()

// Memoization cache for expensive operations
const geoJsonCache = new WeakMap<any, any>()
const boundsCache = new WeakMap<any, boolean>()

// Pre-computed spatial index: coordinates extracted once, reused on every map move
// For points: lng/lat are the coordinates, for complex geometries: geoJsonFeature is set
interface SpatialEntry {
  lng: number
  lat: number
  dsId: string
  dataStream: any
  geoJsonFeature: any  // only set for complex (non-point) geometries
}
let spatialIndex: SpatialEntry[] = []
let buildIndexSessionId = 0

const buildSpatialIndex = async () => {
  const currentSession = ++buildIndexSessionId
  const entries: SpatialEntry[] = []

  const rawData = toRaw(data.value) as any
  const rawAdditional = toRaw(additionalDatasourcesData.value)

  const sources: Array<[string, any[]]> = []
  if (rawData?.datastreams) {
    sources.push([datasourceId.value, rawData.datastreams])
  }
  for (const [dsId, dsData] of rawAdditional.entries()) {
    const raw = toRaw(dsData) as any
    if (raw?.datastreams) {
      sources.push([dsId, raw.datastreams])
    }
  }

  const YIELD_MS = 4
  let lastYield = performance.now()

  for (const [dsId, datastreams] of sources) {
    for (let i = 0; i < datastreams.length; i++) {
      // Time-based yielding: yield every 4ms to keep 60fps
      const now = performance.now()
      if (now - lastYield > YIELD_MS) {
        if (currentSession !== buildIndexSessionId) return // cancelled
        await new Promise(resolve => setTimeout(resolve, 0))
        lastYield = performance.now()
      }

      const ds = datastreams[i]

      if (ds.observedArea) {
        // Complex geometry - cache the geoJson transform now, check bounds at query time
        if (!geoJsonCache.has(ds.observedArea)) {
          geoJsonCache.set(ds.observedArea, transformToGeoJson(toRaw(ds.observedArea)))
        }
        entries.push({ lng: 0, lat: 0, dsId, dataStream: ds, geoJsonFeature: geoJsonCache.get(ds.observedArea) })
      } else if (ds.thing?.locations?.[0]) {
        const location = ds.thing.locations[0].location
        const coords = extractPointCoords(location)
        if (coords) {
          // Point: store coordinates directly
          entries.push({ lng: coords[0], lat: coords[1], dsId, dataStream: ds, geoJsonFeature: null })
        } else {
          // Non-point geometry
          if (!geoJsonCache.has(location)) {
            geoJsonCache.set(location, transformToGeoJson(location))
          }
          entries.push({ lng: 0, lat: 0, dsId, dataStream: ds, geoJsonFeature: geoJsonCache.get(location) })
        }
      }
      // no geometry → not added to index (can never be in bounds)
    }
  }

  if (currentSession !== buildIndexSessionId) return // cancelled
  spatialIndex = entries
  logMap('Spatial index built:', entries.length, 'entries')
}

// Detect datasource type dynamically
const datasourceType = computed(() => {
  try {
    if (!datasourceId.value) return 'ogcsta'
    const dsRepository = inject<DatasourceRepository>(identifier)!
    const datasource = dsRepository.getDatasource(datasourceId.value)
    return (datasource as any).type || 'ogcsta'
  } catch (e) {
    logDatasource('Could not detect datasource type:', e)
    return 'ogcsta'
  }
})

/* Which shape to ask for, by the kind of source - see ./dataTypes. */
const dataType = computed(() => dataTypeFor(datasourceType.value))

/*
 * Each OGC STA source learns which things this map shows, before it loads
 * anything: the thing rules as a filter on /Things. A source then loads
 * those things instead of its whole catalogue (#1250). A rule without a
 * server form gives null, and that source loads everything, as before.
 */
const scopeRepository = inject<DatasourceRepository>(identifier)
const scopeKey = computed(() => `map:${widgetId.value}`)
let scopedSources = new Set<string>()
const applyThingScope = () => {
  if (!scopeRepository) return
  const filter = thingFilterOf(asArray(config.value?.OGCSstyles) as any)
  const ids = new Set<string>([
    datasourceId.value,
    ...(config.value?.datasourceIds ?? []),
    ...asArray(config.value?.layers).map((layer: any) => layer.datasourceId),
  ].filter((id): id is string => !!id))
  const scoped = (id: string) => {
    try {
      const source = scopeRepository.getDatasource(id) as unknown as { setThingScope?: (key: string, filter: string | null | undefined) => void }
      return typeof source?.setThingScope === 'function' ? source : undefined
    } catch {
      return undefined
    }
  }
  for (const id of scopedSources) {
    if (!ids.has(id)) scoped(id)?.setThingScope!(scopeKey.value, undefined)
  }
  for (const id of ids) scoped(id)?.setThingScope!(scopeKey.value, filter)
  scopedSources = ids
}
applyThingScope()
/*
 * What the sources and the styles depend on, as one value: the settings
 * are watched as a whole (#1203), and a pan writes into them as well -
 * which must not reload anything.
 */
const sourcesKey = computed(() => {
  const held = settings.value
  if (!held) return ''
  return JSON.stringify([
    held.datasourceIds.toArray(),
    held.layers.toArray().map((layer) => [layer.id, layer.type, layer.datasourceId, asArray(layer.styleIds)]),
  ])
})
const stylesKey = computed(() => {
  const held = settings.value
  return held ? JSON.stringify([held.OGCSstyles.toArray(), held.styles.toArray()]) : ''
})

watch([datasourceId, sourcesKey, stylesKey], applyThingScope)
onUnmounted(() => {
  const leaving = new Set(scopedSources)
  scopedSources = new Set()
  for (const id of leaving) {
    try {
      ;(scopeRepository?.getDatasource(id) as any)?.setThingScope?.(scopeKey.value, undefined)
    } catch { /* source already removed */ }
  }
})

const { update, callEvent } = useDatasourceRepository(datasourceId, dataType.value as any, data)

// Multi-datasource support - load and cache data from additional datasources
const loadDatasourceData = async (dsId: string) => {
  if (!dsId) return

  // Skip if already loading
  if (loadingDatasources.has(dsId)) {
    logDatasource('Datasource', dsId, 'is already loading, skipping')
    return
  }

  loadingDatasources.add(dsId)

  try {
    const dsRepository = inject<DatasourceRepository>(identifier)!
    const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
    const dsType = dsRepository.getDatasourceType(dsId)

    // Determine the data type for this datasource
    const requestType = dataTypeFor(dsType)

    // Get the raw data from the datasource
    if (datasource && typeof datasource.getData === 'function') {
      const rawData = await datasource.getData(requestType)
      additionalDatasourcesData.value.set(dsId, rawData)

      // Subscribe to updates for this datasource (only once)
      if (!subscribedDatasources.has(dsId) && typeof datasource.subscribe === 'function') {
        subscribedDatasources.add(dsId)
        const updateCallback = async () => {
          const updatedData = await datasource.getData(requestType)
          additionalDatasourcesData.value.set(dsId, updatedData)
        }
        const unsubscribe = datasource.subscribe(updateCallback)
        if (typeof unsubscribe === 'function') {
          datasourceUnsubscribeFunctions.set(dsId, unsubscribe)
        }
      }
    }
  } catch (e) {
    logDatasource('Could not get datasource data for', dsId, e)
  } finally {
    loadingDatasources.delete(dsId)
  }
}

// Watch for changes in datasourceIds and layers to load additional datasources
watch(sourcesKey, async () => {
  const allDsIds = new Set<string>()

  // Collect all datasource IDs
  if (config.value?.datasourceIds) {
    config.value.datasourceIds.forEach(id => allDsIds.add(id))
  }

  if (config.value?.layers) {
    config.value.layers.forEach(layer => {
      if (layer.datasourceId && layer.datasourceId !== datasourceId.value) {
        allDsIds.add(layer.datasourceId)
      }
    })
  }

  // Load data for each datasource
  let newDatasourceLoaded = false
  for (const dsId of allDsIds) {
    if (!additionalDatasourcesData.value.has(dsId)) {
      await loadDatasourceData(dsId)
      newDatasourceLoaded = true
    }
  }

  // Trigger observation loading after new datasources are loaded
  if (newDatasourceLoaded && map.value) {
    await buildSpatialIndex()
    loadObservationsInView()
  }
}, { immediate: true })

watch(datasourceId, (value, oldValue, onCleanup) => {
  update(value, oldValue)
})

watch(() => settings.value && JSON.stringify(settings.value.OGCSstyles.toArray()), () => {
  loadObservationsInView()
  loadHistoricalLocationsForAllThings()
})


const { getById } = useDataPointRegistry()
const openThing = ref<{ [key: string]: boolean }>({})
// Initialize selectedThingId from config to persist across mode switches
const selectedThingId = ref<string | null>(config.value?.selectedThingId ?? null)

// Tooltip state for action-triggered tooltips
const tooltipThingId = ref<string | null>(null)
const tooltipContent = ref<string | null>(null)

// Route overlay state
const routeGeoJson = ref<any>(null)
const routeColor = ref('#c45e00')
const routeWeight = ref(5)
let routeLayerGroup: L.LayerGroup | null = null

// Watch for changes to selectedThingId and sync back to config
watch(selectedThingId, (newValue) => {
  if (config.value) remember('selectedThingId', newValue ?? undefined)
})

const mapReady = ref(false)
let mounted = false

// Helper function to get data for a specific layer
const getLayerData = (layer: any) => {
  // If layer has its own datasourceId, use that
  if (layer.datasourceId) {
    const cachedData = additionalDatasourcesData.value.get(layer.datasourceId)
    if (cachedData) {
      return cachedData
    }
    // If not cached yet, load it
    loadDatasourceData(layer.datasourceId)
    return {}
  }
  // Otherwise use the primary datasource
  return data.value
}

/*
 * The live clients of the services and of the WMS and WFS layers.
 *
 * Storage keeps an address, not a client, so a client is built again from
 * it - on mount, and whenever a service or a layer arrives later: one added
 * in the settings, or put back by "Verwerfen". Only reconstructing on mount
 * left a layer that came later undrawn until the widget was mounted again
 * (#1262). Each entry is rebuilt in place; the list itself stays the same.
 */
const reviving = new WeakSet<object>()

async function reviveService(service: any) {
  const isWms = service.type === 'WMS'
  if (!isWms && service.type !== 'WFS') return
  const client = clientOf(service.service)
  const live = isWms ? typeof client?.getLayers === 'function' : typeof client?.getFeatureTypes === 'function'
  if (live || !service.url || reviving.has(service)) return
  reviving.add(service)
  logServices('Reconstructing %s service from URL: %s', service.type, service.url)
  try {
    const made = isWms ? await createServiceWMS(service.url) : await createServiceWFS(service.url)
    service.reconstructionFailed = false
    service.service = made
  } catch (e) {
    logServices('Could not reconstruct %s service: %o', service.type, e)
    service.reconstructionFailed = true
    service.service = undefined
  } finally {
    reviving.delete(service)
  }
}

async function reviveLayer(layer: any) {
  if (reviving.has(layer)) return
  if (layer.type === 'WMSLayer' && layer.service && typeof clientOf(layer.service)?.getOperationUrl !== 'function') {
    const held = clientOf(layer.service)
    const serviceUrl = held?._capabilitiesUrl || held?.url || held?.serviceUrl
    if (!serviceUrl) {
      logServices('WMS layer missing service URL: %s', layer.name)
      layer.reconstructionFailed = true
      return
    }
    reviving.add(layer)
    try {
      const made = await createServiceWMS(serviceUrl)
      layer.reconstructionFailed = false
      layer.service = made
    } catch (e) {
      logServices('Could not reconstruct WMS service for layer %s: %o', layer.name, e)
      layer.reconstructionFailed = true
      layer.service = { url: serviceUrl }
    } finally {
      reviving.delete(layer)
    }
  } else if (layer.type === 'WFSLayer' && layer.wfs_service && typeof clientOf(layer.wfs_service)?.fetch !== 'function') {
    const wfsUrl = clientOf(layer.wfs_service)?.url
    if (!wfsUrl) {
      logServices('WFS layer missing service URL: %s', layer.name)
      layer.reconstructionFailed = true
      return
    }
    reviving.add(layer)
    try {
      const WFS = (await import('./WFS')).default
      const made = new WFS(wfsUrl)
      await made.fetch()
      layer.reconstructionFailed = false
      layer.wfs_service = made
    } catch (e) {
      logServices('Could not reconstruct WFS service for layer %s: %o', layer.name, e)
      layer.reconstructionFailed = true
    } finally {
      reviving.delete(layer)
    }
  }
}

async function reviveClients() {
  const held = config.value
  if (!held) return
  await Promise.all([
    ...held.services.toArray().map(reviveService),
    ...held.layers.toArray().map(reviveLayer),
  ])
}

/* The entries the lists hold, by identity - a new one is what needs a client. */
const listedEntries = computed(() => {
  const held = settings.value
  return held ? [...held.services.toArray(), ...held.layers.toArray()] : []
})
watch(listedEntries, (now, before) => {
  // Before that, the mount is still reviving what the board stored
  if (!servicesReady.value) return
  if (now.length === before?.length && now.every((entry, index) => entry === before[index])) return
  void reviveClients()
})

onMounted(async () => {
  if (config.value) {

    /*
     * A board saved with the retired tiles draws its background again.
     * Silent on purpose: this happens to every old board at once, and
     * there is nothing for the person to decide - see ./baseMap.
     */
    const renewed = renewBaseMap(config.value as any)
    if (renewed.baseMapUrl) {
      Object.assign(config.value as any, renewed)
      logMap('replaced the retired base map address on a stored board')
    }

    /*
     * A map made from a source starts with something to draw it with.
     *
     * It arrives with the source set and nothing else, and the GeoJSON
     * layer draws once per style - so with no style there is no loop to
     * run, no geometry on the map, and nothing saying why. Only ever
     * where there is neither a layer nor a style, so a map somebody has
     * set up is never touched (#1187).
     */
    const preset = presetFor(datasourceType.value, config.value as any, () => uuid())
    if (preset) {
      setList('layers', preset.layers.map((layer) => modelledLayer({ id: uuid(), checked: true, ...layer })))
      setList('styles', preset.styles.map((style) => modelled(() => MapSettingsFactory.eINSTANCE.createDSRenderer(), style)))
      logMap('a source-made map starts with a GeoJSON layer and style')
    }

    await reviveClients()
    servicesReady.value = true
  }

  const mapDiv = document.getElementById('mapholder')
  const resizeObserver = new ResizeObserver(() => {
    if (map.value && (map.value as any).leafletObject) {
      ((map.value as any).leafletObject as L.Map).invalidateSize()
    }
  })

  if (mapDiv) {
    resizeObserver.observe(mapDiv)
  }

})
// Watch data changes - load observations when data arrives
// Use a targeted getter instead of deep: true to avoid expensive deep comparison of the entire data tree
let previousLocationCount = 0
watch(() => (data.value as any)?.locations?.length || 0, async (newLocations) => {
  // First load: when we go from no locations to having locations
  if (previousLocationCount === 0 && newLocations > 0) {
    await buildSpatialIndex()
    loadObservationsInView()
    loadHistoricalLocationsForAllThings()
  }
  previousLocationCount = newLocations
})

const loadHistoricalLocationsForAllThings = () => {
  // Check if there are any OGCSTA styles configured
  if (!config.value?.OGCSstyles || config.value.OGCSstyles.length === 0) {
    logObservations('No OGCSTA styles configured, skipping historical locations load')
    return
  }

  // Collect all things that match the style filters
  const matchingThingsMap = new Map()

  // Process primary datasource
  const things = (data.value as any)?.things || []
  for (const thing of things) {
    if (!thing || !thing.iotId) continue

    // Check if thing matches any renderer's thing filter
    for (const renderer of config.value.OGCSstyles) {
      if (compareThing(thing, renderer)) {
        matchingThingsMap.set(thing.iotId, thing)
        break // Thing matches, no need to check other renderers
      }
    }
  }

  // Process additional datasources
  for (const [dsId, dsData] of additionalDatasourcesData.value.entries()) {
    const additionalThings = (dsData as any)?.things || []
    for (const thing of additionalThings) {
      if (!thing || !thing.iotId) continue

      // Check if thing matches any renderer's thing filter
      for (const renderer of config.value.OGCSstyles) {
        if (compareThing(thing, renderer)) {
          matchingThingsMap.set(thing.iotId, thing)
          break
        }
      }
    }
  }

  const matchingThings = Array.from(matchingThingsMap.values())

  if (matchingThings.length > 0) {
    logObservations(`Setting historical locations filter for ${matchingThings.length} matching things`)
    // Set filter for primary datasource with shouldUpdate=false to avoid triggering chart updates
    callEvent(FILTER, { historicalLocations: matchingThings }, false)

    // Set filter for additional datasources
    for (const dsId of additionalDatasourcesData.value.keys()) {
      try {
        const dsRepository = inject<DatasourceRepository>(identifier)!
        const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
        if (datasource && typeof datasource.callEvent === 'function') {
          datasource.callEvent(FILTER, { historicalLocations: matchingThings }, false)
        }
      } catch (e) {
        logDatasource('Could not call event on datasource', dsId, e)
      }
    }
  } else {
    logObservations('No things match the configured style filters')
  }
}

const setFixed = ()=>{
  try {
    const map3 = ((map.value as any).leafletObject as L.Map)
    if (config.value.fixed) {
      map3.dragging.disable()
      map3.scrollWheelZoom.disable()
      map3.doubleClickZoom.disable()
      map3.touchZoom.disable()
      map3.keyboard.disable()
      map3.zoomControl.remove()
    } else {
      map3.dragging.enable()
      map3.scrollWheelZoom.enable()
      map3.doubleClickZoom.disable()
      map3.touchZoom.enable()
      map3.keyboard.enable()
      map3.zoomControl.addTo(map3)
    }
  } catch (e) {
    logMap('Error in setFixed:', e)
  }
}
watch(() => settings.value?.fixed, (value, oldValue, onCleanup) => {
  setFixed();
})
const locations = computed(() => {
  return (data.value as any)?.['locations'] ?? []
})

// Helper to get locations from a specific layer
const getLayerLocations = (layer: any) => {
  const layerData = getLayerData(layer)
  const locations = (layerData as any)?.['locations'] ?? []
  // Filter out invalid locations to prevent Leaflet errors
  return locations.filter((loc: any) => loc && (loc['@iot.id'] || loc.iotId))
}

const getStyle = computed(() => {

  return (feature: any) => {
    if (resolve(config, 'value', 'renderer', 0, 'renderer', 'point')) {
      return (config.value as any)?.renderer?.[0]?.renderer?.area ?? {}
    } else return {}
  }
})

const options = computed(() => {
  return {
    pointToLayer: (feature: any, latlng: any) => {
      return L.circleMarker(latlng, {
        radius: 0,
        fillColor: '#ff7800',
        color: '#000',
        weight: 1,
        opacity: 0,
        fillOpacity: 0
      })
    }
  }
})

// Helper to get the original layer index (before reverse)
const getOriginalLayerIndex = (layer: any) => {
  return config.value.layers.findIndex(l => l === layer)
}

// Helper to get options with pane for a specific layer
const getLayerOptions = (layer: any) => {
  const originalIndex = getOriginalLayerIndex(layer)
  return {
    ...options.value,
    pane: `layer-pane-${originalIndex}`
  }
}

// Helper to get the pane name for markers
const getMarkerPane = (layer: any) => {
  const originalIndex = getOriginalLayerIndex(layer)
  return `layer-pane-${originalIndex}`
}

// Helper to get the pane name for areas (observedArea) - use layer-specific area pane
const getAreaPane = (layer?: any) => {
  if (!layer) return 'overlayPane'
  const originalIndex = getOriginalLayerIndex(layer)
  return `layer-area-pane-${originalIndex}`
}

// Cache style lookups to avoid repeated .find() calls in templates
// Use a revision counter to invalidate cache when styles change
const stylesRevision = ref(0)

const stylesByIdCache = computed(() => {
  // Access stylesRevision to make this computed dependent on it
  const _rev = stylesRevision.value
  const cache = new Map()
  if (config.value?.styles) {
    for (const style of config.value.styles) {
      if (style.id) {
        cache.set(style.id, style)
      }
    }
  }
  return cache
})

const getStyleById = (styleId: string) => {
  return stylesByIdCache.value.get(styleId)
}

// Force re-render of styles by incrementing revision
const invalidateStylesCache = () => {
  stylesRevision.value++
}

// Watch for changes in styles and invalidate cache
// We create a hash of the styles to detect actual changes
let stylesHash = ''
watch(() => settings.value?.styles.toArray(), (newStyles) => {
  if (!newStyles) return

  // Create a simple hash by stringifying the styles
  const newHash = JSON.stringify(newStyles)

  // Only invalidate if actually changed
  if (newHash !== stylesHash) {
    stylesHash = newHash
    invalidateStylesCache()
  }
})


// Track whether the user is actively interacting with the map (drag/zoom)
// During interaction, suppress all data processing to keep the UI smooth
let isMapInteracting = false

/*
 * How far the map is zoomed in, which decides which icons are drawn and
 * how large - see ./zoom.
 *
 * It was written to and read from without ever being declared: the
 * zoomend handler threw a ReferenceError, and the layer below was handed
 * undefined, for which it substitutes 99. That is above every threshold,
 * so every icon was visible at every zoom and none of them scaled, and
 * iconMinZoom, iconScaleWithZoom and iconFullSizeZoom did nothing at all
 * (#1190).
 */
const currentZoom = ref<number | undefined>(undefined)

const maploaded = () => {
  mounted = true
  logMap('map ready')
  setFixed()
  createLayerPanes()
  redrawOverlay()

  // Register drag/zoom listeners to suppress processing during interaction
  const leaflet = (map.value as any)?.leafletObject as L.Map
  if (leaflet) {
    leaflet.on('movestart', () => {
      isMapInteracting = true
      // Cancel any in-progress processing immediately
      loadObservationsSessionId++
    })
    leaflet.on('moveend', () => {
      isMapInteracting = false
    })
  }

  /* Outside the guard above: a map that cannot be reached still reports
    the zoom its settings ask for, which is the one it is about to be at. */
  followZoom(leaflet, config.value?.zoom, (zoom) => {
    currentZoom.value = zoom
  })
}

/*
 * The roads over the base map (#1235).
 *
 * Read through the watched instance: the wrapper hands the widget the same
 * settings object on every change, which Vue does not count as one
 * (#1203). Redrawn only when what is drawn changes - the settings also
 * change on every pan, when the zoom is written back.
 */
const overlay = computed(() => overlayTiles(settings.value as any))
let overlayLayers: L.Layer[] = []

const redrawOverlay = () => {
  const leaflet = (map.value as any)?.leafletObject as L.Map | undefined
  for (const layer of overlayLayers) layer.remove()
  overlayLayers = leaflet ? drawOverlay(leaflet, overlay.value) : []
}

watch(() => overlayKey(overlay.value), () => {
  if (mounted) redrawOverlay()
})

const createLayerPanes = () => {
  const mapObject = (map.value as any)?.leafletObject as L.Map
  if (!mapObject || !config.value.layers) return

  // Create or update panes for each layer with the appropriate z-index
  config.value.layers.forEach((layer, index) => {
    // Create marker pane for this layer
    const paneName = `layer-pane-${index}`
    let pane = mapObject.getPane(paneName)
    if (!pane) {
      pane = mapObject.createPane(paneName)
    }
    // Layer at index 0 should be on top, so highest z-index
    // Base z-index 400, then add (layers.length - index) * 2 to leave room for area panes
    const baseZIndex = 400 + (config.value.layers.length - index) * 2
    pane.style.zIndex = String(baseZIndex)

    // Create area pane for this layer (for observedArea polygons)
    // Area pane has z-index 1 lower than marker pane
    const areaPaneName = `layer-area-pane-${index}`
    let areaPane = mapObject.getPane(areaPaneName)
    if (!areaPane) {
      areaPane = mapObject.createPane(areaPaneName)
    }
    areaPane.style.zIndex = String(baseZIndex - 1)
  })
}

// Watch for layer changes and update z-index
watch(() => settings.value?.layers.toArray().map((layer) => layer.id).join(), () => {
  if (mounted) {
    createLayerPanes()
  }
})
const rev = (arr: any) => {
  return {
    lat: arr[1],
    lng: arr[0]
  }
}
const reverse = (arr: any) => {

  return [arr[1], arr[0]]

}

// Fast point coordinate extraction: returns [lng, lat] for Point geometries, null otherwise
const extractPointCoords = (geom: any): [number, number] | null => {
  if (!geom) return null
  // Direct Point geometry
  if (geom.type === 'Point' && Array.isArray(geom.coordinates)) {
    return geom.coordinates as [number, number]
  }
  // Feature wrapping a Point
  if (geom.type === 'Feature' && geom.geometry?.type === 'Point' && Array.isArray(geom.geometry.coordinates)) {
    return geom.geometry.coordinates as [number, number]
  }
  return null
}

const mapmove = debounce(() => {
  // Skip if user is still interacting with the map
  if (isMapInteracting) return

  // Sync center/zoom from Leaflet to config only after movement stops
  const leaflet = (map.value as any)?.leafletObject
  if (leaflet) {
    const center = leaflet.getCenter()
    remember('center', [center.lat, center.lng])
    remember('zoom', leaflet.getZoom())
  }
  loadObservationsInView()
}, 500, { leading: false, trailing: true })

// Session ID to cancel outdated processing when map moves again
let loadObservationsSessionId = 0

const loadObservationsInView = async () => {
  logMap('loadObservationsInView called')

  // Check if map is ready and mounted
  if (!map.value || !(map.value as any)?.leafletObject) {
    logMap('Map not ready')
    return
  }

  let inBounds = (map.value as any)?.leafletObject.getBounds()
  if (!inBounds) {
    logMap('No map bounds available yet')
    return
  }

  // Cancel any in-progress loading by incrementing session ID
  const currentSessionId = ++loadObservationsSessionId

  // Extract bounds as plain numbers (no repeated object access in hot loop)
  const swLng = inBounds._southWest.lng
  const swLat = inBounds._southWest.lat
  const neLng = inBounds._northEast.lng
  const neLat = inBounds._northEast.lat

  // Lazy-create bboxFeature only if needed (for complex geometries)
  let bboxFeature: any = null
  const getBboxFeature = () => {
    if (!bboxFeature) {
      bboxFeature = feature({
        type: 'Polygon',
        coordinates: [[[neLng, neLat], [neLng, swLat], [swLng, swLat], [swLng, neLat], [neLng, neLat]]]
      } as Polygon)
    }
    return bboxFeature
  }

  // Build renderer lookup map (small: ~17 renderers)
  const rawStyles = toRaw(config.value.OGCSstyles)
  const renderersByRefreshTime = new Map<number, Array<{ renderer: any, subrender: any }>>()
  for (const renderer of rawStyles) {
    const refreshtime: number = renderer.ObservationrefreshTime !== undefined && renderer.ObservationrefreshTime !== null ? renderer.ObservationrefreshTime : 0
    if (!renderersByRefreshTime.has(refreshtime)) {
      renderersByRefreshTime.set(refreshtime, [])
    }
    for (const subrender of renderer.ds_renderer) {
      renderersByRefreshTime.get(refreshtime)!.push({ renderer, subrender })
    }
  }

  const taskListByTimeAndDatasource: { [key: string]: { [dsId: string]: BoxedDatastream[] } } = {}

  // Use pre-computed spatial index for fast bounds checking
  const index = spatialIndex
  // Time-based yielding: yield every ~4ms to maintain 60fps
  // (16ms per frame, leave ~12ms for browser rendering/input)
  const YIELD_MS = 4
  let lastYield = performance.now()

  for (let i = 0; i < index.length; i++) {
    // Time-based yield: check elapsed time instead of fixed chunk count
    const now = performance.now()
    if (now - lastYield > YIELD_MS) {
      if (currentSessionId !== loadObservationsSessionId || isMapInteracting) {
        return
      }
      await new Promise(resolve => setTimeout(resolve, 0))
      lastYield = performance.now()
    }

    const entry = index[i]

    // Fast bounds check - hot path is just 4 number comparisons
    let inView: boolean
    if (entry.geoJsonFeature) {
      // Complex geometry (rare): use booleanContains
      inView = booleanContains(getBboxFeature(), entry.geoJsonFeature as Polygon)
    } else {
      // Point (common, ~99%): pure number comparison
      inView = entry.lng >= swLng && entry.lng <= neLng && entry.lat >= swLat && entry.lat <= neLat
    }

    if (!inView) continue

    // Only do expensive renderer matching for items actually in bounds
    const { dsId, dataStream } = entry
    for (const [refreshtime, renderers] of renderersByRefreshTime.entries()) {
      let matched = false
      for (const { renderer, subrender } of renderers) {
        const datastreamMatches = compareDatastream(dataStream, subrender)
        const thingMatches = dataStream.thing ? compareThing(dataStream.thing, renderer) : true

        if (datastreamMatches && thingMatches) {
          matched = true
          break
        }
      }

      if (matched) {
        if (!taskListByTimeAndDatasource[refreshtime]) taskListByTimeAndDatasource[refreshtime] = {}
        if (!taskListByTimeAndDatasource[refreshtime][dsId]) taskListByTimeAndDatasource[refreshtime][dsId] = []
        taskListByTimeAndDatasource[refreshtime][dsId].push(dataStream)
      }
    }
  }

  // Final session check after all chunks are processed
  if (currentSessionId !== loadObservationsSessionId) {
    logMap('Session invalidated after chunked processing, aborting')
    return
  }

  // Don't clear tasks here - let TaskManager handle it based on IDs
  // Only track new task IDs
  const newTaskIds = new Set<string>()
  const tasks = []
  for (const [refreshTime, datasourceItems] of Object.entries(taskListByTimeAndDatasource)) {
    for (const [dsId, _items] of Object.entries(datasourceItems)) {
      const items: Datastream[] = uniqBy(_items, 'iotId')
      if (items.length > 0) {
        // Get the correct datasource to call events on
        const isDatasourcePrimary = dsId === datasourceId.value

        // Create deterministic task ID using a fast hash instead of sorting+joining all IDs
        let hash = 0
        for (const item of items) {
          const id = String(item.iotId || (item as any)['@iot.id'] || '')
          for (let c = 0; c < id.length; c++) {
            hash = ((hash << 5) - hash + id.charCodeAt(c)) | 0
          }
        }
        const taskId = `obs-${dsId}-${refreshTime}-${items.length}-${hash >>> 0}`

        const task = new class extends Task {
          readonly id = taskId
          private handle: number | undefined

          invoke() {
            window.clearInterval(this.handle)
          }

          async run() {

            // Call event on the appropriate datasource with shouldUpdate=false to avoid triggering chart updates
            if (isDatasourcePrimary) {
              callEvent(FILTER, { observations: items }, false)
            } else {
              // For additional datasources, call event directly on the datasource
              try {
                const dsRepository = inject<DatasourceRepository>(identifier)!
                const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
                if (datasource && typeof datasource.callEvent === 'function') {
                  datasource.callEvent(FILTER, { observations: items }, false)
                }
              } catch (e) {
                logDatasource('Could not call event on datasource', dsId, e)
              }
            }

            if(parseInt(refreshTime) !== 0){
              this.handle = window.setInterval(async () => {
                if (isDatasourcePrimary) {
                  callEvent(FILTER, { observations: items }, false)
                } else {
                  try {
                    const dsRepository = inject<DatasourceRepository>(identifier)!
                    const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
                    if (datasource && typeof datasource.callEvent === 'function') {
                      datasource.callEvent(FILTER, { observations: items }, false)
                    }
                  } catch (e) {
                    logDatasource('Could not call event on datasource', dsId, e)
                  }
                }
              }, (parseInt(refreshTime) * 1000))
            }
          }
        }()

        tasks.push(task)
        // Track task for cleanup
        activeTasks.set(task.id, task)
      }
    }
  }

  logMap('Created', tasks.length, 'tasks to invoke')
  localTaskManager.addTasksAndIvnoke(tasks)

  // Update MQTT subscriptions for all datasources based on current view
  // This ensures subscriptions are cleaned up when observations leave the view
  // Collect all observations currently in view per datasource
  const observationsByDatasource = new Map<string, Datastream[]>()
  for (const [refreshTime, datasourceItems] of Object.entries(taskListByTimeAndDatasource)) {
    for (const [dsId, items] of Object.entries(datasourceItems)) {
      if (!observationsByDatasource.has(dsId)) {
        observationsByDatasource.set(dsId, [])
      }
      observationsByDatasource.get(dsId)!.push(...items)
    }
  }

  // Send UPDATE_MQTT_SUBSCRIPTIONS for primary datasource
  const primaryObservations = observationsByDatasource.get(datasourceId.value) || []
  callEvent(UPDATE_MQTT_SUBSCRIPTIONS, { observations: uniqBy(primaryObservations, 'iotId') })

  // Send UPDATE_MQTT_SUBSCRIPTIONS for additional datasources
  for (const dsId of additionalDatasourcesData.value.keys()) {
    const observations = observationsByDatasource.get(dsId) || []
    try {
      const dsRepository = inject<DatasourceRepository>(identifier)!
      const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
      if (datasource && typeof datasource.callEvent === 'function') {
        datasource.callEvent(UPDATE_MQTT_SUBSCRIPTIONS, { observations: uniqBy(observations, 'iotId') })
      }
    } catch (e) {
      logDatasource('Could not call UPDATE_MQTT_SUBSCRIPTIONS on datasource', dsId, e)
    }
  }

}
const collectionToPoint = (fc: any) => {
  try {
    let point = pointOnFeature(fc)
    return reverse(point.geometry.coordinates)
  } catch (e) {
    return null
  }

}
const getPoint = (PointOrFeature: any) => {
  if (isPoint(PointOrFeature)) {
    return reverse(PointOrFeature.coordinates)
  } else if (isFeatureCollection(PointOrFeature) || isFeature(PointOrFeature)) {
    try {
      let point = pointOnFeature(PointOrFeature)
      return reverse(point.geometry.coordinates)
    } catch (e) {
      return null
    }
  }
  return null
}
const getPointformArea = (PointOrFeature: any) => {
  if (isPoint(PointOrFeature)) {
    return reverse(PointOrFeature.coordinates)
  } else if (isFeatureCollection(PointOrFeature) || isFeature(PointOrFeature)) {
    try {
      let point = pointOnFeature(PointOrFeature)
      return reverse(point.geometry.coordinates)
    } catch (e) {
      return null
    }
  }
}


let api = new class extends MapWidgetInterfaceImpl implements MapWidgetInterface {
  zoomToThing = (thingId: string, zoom: number = 16, duration: number = 1000) => {
    if (!map.value || !(map.value as any).leafletObject) {
      console.warn('Map instance not available. Cannot zoom to thing.')
      return
    }

    // Search for the thing in primary datasource
    let thing = ((data.value as any)?.things || []).find((t: any) => t.iotId === thingId || t['@iot.id'] === thingId)

    // If not found, search in additional datasources
    if (!thing) {
      for (const [dsId, dsData] of additionalDatasourcesData.value.entries()) {
        const additionalThings = (dsData as any)?.things || []
        thing = additionalThings.find((t: any) => t.iotId === thingId || t['@iot.id'] === thingId)
        if (thing) break
      }
    }

    if (!thing) {
      console.warn(`Thing with ID "${thingId}" not found.`)
      return
    }

    // Extract location from thing
    if (!thing.locations || !thing.locations[0]) {
      console.warn(`Thing with ID "${thingId}" has no location.`)
      return
    }

    const location = thing.locations[0].location
    const geoJson = transformToGeoJson(location)

    // Get center point from GeoJSON
    const point = getPoint(geoJson)
    if (!point) {
      console.warn(`Could not extract coordinates from thing location.`)
      return
    }

    // Get the Leaflet map instance and zoom to location
    const mapInstance = (map.value as any).leafletObject as L.Map
    mapInstance.flyTo(point as L.LatLngExpression, zoom, {
      duration: duration / 1000, // Leaflet expects seconds
      easeLinearity: 0.25
    })
  }

  selectThingById = (thingId: string) => {
    logMap('selectThingById called with:', thingId)

    // Toggle selection: if already selected, deselect
    if (selectedThingId.value === thingId) {
      selectedThingId.value = null
      logMap('Thing deselected')
    } else {
      selectedThingId.value = thingId
      logMap('Thing selected:', thingId)
    }
  }

  zoomToLocation = async (location: any, zoom: number = 16, duration: number = 1000) => {
    console.log('🎯 zoomToLocation called with:', { location, zoom, duration })

    // Wait for map to be ready (max 3 seconds)
    let waitTime = 0
    while ((!map.value || !(map.value as any).leafletObject) && waitTime < 3000) {
      console.log('🎯 Waiting for map to be ready...')
      await new Promise(resolve => setTimeout(resolve, 100))
      waitTime += 100
    }

    if (!map.value || !(map.value as any).leafletObject) {
      console.warn('🎯 Map instance not available after waiting. Cannot zoom to location.')
      return
    }

    if (!location) {
      console.warn('🎯 zoomToLocation called without location')
      return
    }

    console.log('🎯 Location type:', typeof location, 'value:', location)

    // Transform to GeoJSON if needed
    const geoJson = transformToGeoJson(location)
    console.log('🎯 Transformed GeoJSON:', geoJson)

    // Get center point from GeoJSON
    const point = getPoint(geoJson)
    console.log('🎯 Extracted point:', point)

    if (!point) {
      console.warn('🎯 Could not extract coordinates from location. GeoJSON was:', geoJson)
      return
    }

    // Get the Leaflet map instance and zoom to location
    const mapInstance = (map.value as any).leafletObject as L.Map
    console.log('🎯 Flying to', point, 'with zoom', zoom, 'duration', duration)

    mapInstance.flyTo(point as L.LatLngExpression, zoom, {
      duration: duration / 1000, // Leaflet expects seconds
      easeLinearity: 0.25
    })
    console.log('🎯 flyTo called successfully')
  }

  showTooltip = (thingId: string, content?: string) => {
    tooltipThingId.value = thingId
    tooltipContent.value = content || null
  }

  hideTooltip = () => {
    tooltipThingId.value = null
    tooltipContent.value = null
  }

  displayRoute = (geojson: any, color: string = '#c45e00', width: number = 5) => {
    if (!map.value || !(map.value as any).leafletObject) {
      console.warn('Map not ready. Cannot display route.')
      return
    }

    const mapInstance = (map.value as any).leafletObject as L.Map

    if (routeLayerGroup) {
      mapInstance.removeLayer(routeLayerGroup)
      routeLayerGroup = null
    }

    if (!geojson || !geojson.features) return

    routeLayerGroup = L.layerGroup()

    for (const feature of geojson.features) {
      if (feature.geometry.type === 'LineString') {
        const coords = feature.geometry.coordinates.map(
          (c: number[]) => [c[1], c[0]] as L.LatLngTuple,
        )
        const polyline = L.polyline(coords, {
          color,
          weight: width,
          opacity: 0.8,
        })
        routeLayerGroup.addLayer(polyline)
      } else if (feature.geometry.type === 'Point') {
        const [lon, lat] = feature.geometry.coordinates
        const role = feature.properties?.role
        let markerColor = '#2196f3'
        if (role === 'start') markerColor = '#4caf50'
        else if (role === 'end') markerColor = '#f44336'

        const circle = L.circleMarker([lat, lon], {
          radius: 8,
          fillColor: markerColor,
          color: '#fff',
          weight: 2,
          fillOpacity: 1,
        })

        if (feature.properties?.name) {
          circle.bindTooltip(feature.properties.name)
        }

        routeLayerGroup.addLayer(circle)
      }
    }

    routeLayerGroup.addTo(mapInstance)

    const lineFeatures = geojson.features.filter(
      (f: any) => f.geometry.type === 'LineString',
    )
    if (lineFeatures.length > 0) {
      const allCoords = lineFeatures.flatMap(
        (f: any) => f.geometry.coordinates.map(
          (c: number[]) => [c[1], c[0]] as L.LatLngTuple,
        ),
      )
      if (allCoords.length > 0) {
        mapInstance.fitBounds(L.latLngBounds(allCoords), {
          padding: [50, 50],
        })
      }
    }

    routeGeoJson.value = geojson
    routeColor.value = color
    routeWeight.value = width
  }

  clearRoute = () => {
    if (routeLayerGroup && map.value && (map.value as any).leafletObject) {
      const mapInstance = (map.value as any).leafletObject as L.Map
      mapInstance.removeLayer(routeLayerGroup)
      routeLayerGroup = null
    }
    routeGeoJson.value = null
  }
};

// Expose MapWidgetInterface methods
defineExpose<MapWidgetInterface>(api)

// Register widget instance with EventActionsRegistry
onMounted(() => {
  actionsRegistry.registerInstance(widgetId.value, api, 'MapWidget', pageId)
  logMap('Registered instance with EventActionsRegistry:', widgetId.value, 'on page:', pageId)
})

// Cleanup on unmount
onUnmounted(() => {
  isUnmounting = true

  // Unregister instance from EventActionsRegistry
  actionsRegistry.unregisterInstance(widgetId.value)
  logMap('Unregistered instance from EventActionsRegistry:', widgetId.value)

  // Clear all active tasks and their intervals DIRECTLY
  // We use our local task references to stop the intervals
  for (const [taskId, task] of activeTasks.entries()) {
    try {
      task.invoke() // This clears the interval using our local reference
    } catch (e) {
      logTasks('Error stopping task interval:', e)
    }
  }

  // Clear the entire local TaskManager since this widget is unmounting
  localTaskManager.clearAll()
  activeTasks.clear()

  // Cleanup MQTT subscriptions for all datasources
  try {
    callEvent(MQTT_UNSUBSCRIBE_ALL, {})
  } catch (e) {
    logDatasource('Could not unsubscribe from MQTT for primary datasource on unmount:', e)
  }

  for (const dsId of additionalDatasourcesData.value.keys()) {
    try {
      const dsRepository = inject<DatasourceRepository>(identifier)!
      const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
      if (datasource && typeof datasource.callEvent === 'function') {
        datasource.callEvent(MQTT_UNSUBSCRIBE_ALL, {})
      }
    } catch (e) {
      logDatasource('Could not unsubscribe from MQTT for datasource', dsId, 'on unmount:', e)
    }
  }

  // Unsubscribe from all datasources
  for (const [dsId, unsubscribe] of datasourceUnsubscribeFunctions.entries()) {
    try {
      unsubscribe()
    } catch (e) {
      logDatasource(`Error unsubscribing from datasource ${dsId}:`, e)
    }
  }
  datasourceUnsubscribeFunctions.clear()
  subscribedDatasources.clear()

  // Clear caches
  additionalDatasourcesData.value.clear()
})
</script>

<template>

  <div id="mapholder" class="holder" style="height: 100%">
    <l-map v-if="settings!.baseMapUrl" id="map" ref="map"
            :center="asArray(settings!.center) as PointExpression"
            :max-zoom="21"
            :use-global-leaflet="false"
            :zoom="settings!.zoom"
            :options="{ zoomAnimation: true,
                        zoomSnap: 0,
                        wheelPxPerZoomLevel: 120,
                        wheelDebounceTime: 5,
                        zoomAnimationThreshold: 4,
                        zoomDelta: 0.25,
                        scrollWheelZoom: true
            }"
            style="height: 100%"
            @moveend="mapmove"
            @ready="maploaded"
            @click="handleMapClick"
            :dragging="!settings!.fixed"
    >
      <l-tile-layer :attribution="settings!.attribution" :options="{maxNativeZoom:19,
        maxZoom:25}" :url="settings!.baseMapUrl"></l-tile-layer>
      <template v-for="(wmsLayer, index) in [...settings!.layers].reverse()" :key="`${wmsLayer.name}-${getOriginalLayerIndex(wmsLayer)}`">
        <LWmsTileLayer v-if="wmsLayer.type == 'WMSLayer' && wmsLayer.service && typeof clientOf(wmsLayer.service)?.getOperationUrl === 'function'"
                        :attribution="wmsLayer.attribution"
                        :layers="wmsLayer.name!"
                        :name="wmsLayer.name"
                        :opacity="wmsLayer.opacity"
                        :transparent="true"
                        :url="(wmsLayer.service as  any).getOperationUrl('GetMap')"
                        :visible="(wmsLayer as any).checked"
                        :z-index="getOriginalLayerIndex(wmsLayer)"
                        :options="{ pane: `layer-pane-${getOriginalLayerIndex(wmsLayer)}` }"
                        format="image/png"
                        layer-type="base">
        </LWmsTileLayer>
        <WFSLayer
          v-if="wmsLayer.type == 'WFSLayer'"
          :geo-json="clientOf(wmsLayer.wfs_service)?.geoJson"
          :style-ids="asArray(wmsLayer.styleIds)"
          :layer-options="getLayerOptions(wmsLayer)"
          :filter-feature-collection="filterFeatureCollection"
          :get-style-by-id="getStyleById"
          :is-point="isPoint"
        />
        <GeoJsonLayer
          v-if="wmsLayer.type == 'GEOJSON'"
          :layer-data="getLayerData(wmsLayer)"
          :style-ids="asArray(wmsLayer.styleIds)"
          :layer-options="getLayerOptions(wmsLayer)"
          :marker-pane="getMarkerPane(wmsLayer)"
          :filter-feature-collection="filterFeatureCollection"
          :get-style-by-id="getStyleById"
          :is-point="isPoint"
          :get-point="getPoint"
        />
        <RestGeoJsonLayer
          v-if="wmsLayer.type == 'REST-GEOJSON'"
          :layer-data="getLayerData(wmsLayer)"
          :style-ids="asArray(wmsLayer.styleIds)"
          :layer-options="getLayerOptions(wmsLayer)"
          :marker-pane="getMarkerPane(wmsLayer)"
          :filter-feature-collection="filterFeatureCollection"
          :get-style-by-id="getStyleById"
          :is-point="isPoint"
          :get-point="getPoint"
        />
        <RouteLayer
          v-if="wmsLayer.type == 'ROUTE' && wmsLayer.datasourceId"
          :datasource-id="wmsLayer.datasourceId"
        />
        <OGCSTALayer
          v-if="wmsLayer.type == 'OGCSTA'"
          :locations="getLayerLocations(wmsLayer)"
          :renderers="asArray(settings!.OGCSstyles)"
          :layer-options="getLayerOptions(wmsLayer)"
          :marker-pane="getMarkerPane(wmsLayer)"
          :area-pane="getAreaPane(wmsLayer)"
          :widget-id="widgetId"
          :compare-thing="compareThing"
          :compare-datastream="compareDatastream"
          :is-feature-collection="isFeatureCollection"
          :is-point="isPoint"
          :get-point="getPoint"
          :get-pointform-area="getPointformArea"
          :transform-to-geo-json="transformToGeoJson"
          :get-by-id="getById"
          :selected-thing-id="selectedThingId"
          :selection-highlight-color="settings!.selectionHighlightColor ?? '#ff0000'"
          :tooltip-thing-id="tooltipThingId"
          :tooltip-content="tooltipContent"
          :current-zoom="currentZoom"
          :cluster-global="settings!.clusterGlobal ?? false"
        />
      </template>

    </l-map>
  </div>


</template>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  align-items: stretch;
}

.pin {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0;


  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 71px 0 -15px;
  box-shadow: -4px -6px 8px #0000005c;

  &.round {
    border-radius: 50% 50% 50% 50%;
  }

  &.contain {
    width: auto;
    height: auto;
    border-radius: 25%;
    display: inline-block;
    transform: rotate(0deg);
    padding: 4px;
    margin: 0px;

    .inner {
      width: auto;
      height: auto;
      margin: 0;
      position: relative;
      transform: rotate(0deg);
      border-radius: 17%;
      display: inline-block;
      font-size: 13px;
      padding: 3px;
    }
  }

  .datapoint {
    transform: rotate(45deg);
    position: absolute;
    top: 50px;
    left: 0;
    margin: 0;
  }

  &.marker {
    &::before {

      content: " ";
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      transform: rotate(-45deg);
      border-radius: 50% 50% 50% 0;
      top: 14px;
      left: 5px;
      z-index: -24;

    }
  }

  .inner {
    padding: 5px 0 0 0;
    width: 37px;
    height: 37px;
    margin: 3px 0 0 4px;
    background: #fff;
    position: absolute;
    transform: rotate(45deg);
    border-radius: 50%;
  }
}

.component {
  overflow: hidden;
}

.cmap_container {
  width: 100%;
  height: 100%;
  position: relative;
}

.image-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -50%;
  margin-top: -50%;
}
</style>
