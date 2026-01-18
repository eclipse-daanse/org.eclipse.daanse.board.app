<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { computed, onMounted, onUnmounted, reactive, ref, toRaw, toRefs, watch } from 'vue'
import type { IMapSettings } from './Settings'
import 'leaflet/dist/leaflet.css'

import { LMap, LWmsTileLayer, LTileLayer, LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import { useComparator } from './composables/comparator'
import { useUtils } from './composables/utils'
import { type BoxedDatastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/interfaces/OgcStaConfiguration'
import L, { PointExpression } from 'leaflet'
import { ERefType, IRenderer } from './api/Renderer'
import { resolve } from './utils/helpers'
import { debounce, uniq, uniqBy } from 'lodash'
import type { GeoJsonObject, GeoJsonProperties, Geometry, Polygon } from 'geojson'
import type { Datastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/client'
import { Task, useTaskManager } from './composables/tasktimer'
import { FILTER, FILTERRESET, UPDATE_MQTT_SUBSCRIPTIONS, MQTT_UNSUBSCRIBE_ALL } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import booleanContains from '@turf/boolean-contains'
import { feature } from '@turf/helpers'
import pointOnFeature from '@turf/point-on-feature'
import { useDataPointRegistry } from './composables/datapointRegistry'
import { IconWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import { IDataRetrieveable, DatasourceRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { IconSettings } from './gen/IconSettings'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import WFSLayer from './components/WFSLayer.vue'
import GeoJsonLayer from './components/GeoJsonLayer.vue'
import RestGeoJsonLayer from './components/RestGeoJsonLayer.vue'
import OGCSTALayer from './components/OGCSTALayer.vue'
import { useOGCService } from './composables/Service'
import { logMap, logDatasource, logObservations, logServices, logTasks } from './utils/logger'
import type { MapWidgetInterface } from './gen/MapWidgetInterface'
import { MapSettings } from './gen/MapSettings'
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { useRoute } from 'vue-router'

const props = defineProps<{ datasourceId: string; id: string }>()
const { datasourceId, id: widgetId } = toRefs(props)

// Get pageId from route
const route = useRoute()
const pageId = (route.params.pageid as string) || ''
const config = defineModel<MapSettings>('configv', { required: true});
const map = ref(null)
const defaultConfig = new MapSettings()

// Get EventActionsRegistry
const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)

const { filterFeatureCollection, compareDatastream, compareThing } = useComparator()
const { isPoint, isFeatureCollection, transformToGeoJson, isFeature } = useUtils()
const { createServiceWMS, createServiceWFS } = useOGCService()


const data = ref<any>({})
const additionalDatasourcesData = ref<Map<string, any>>(new Map())
const servicesReady = ref(false) // Track when services are reconstructed
const subscribedDatasources = new Set<string>() // Track which datasources are already subscribed
const datasourceUnsubscribeFunctions = new Map<string, () => void>() // Track unsubscribe functions
const loadingDatasources = new Set<string>() // Track which datasources are currently loading
let isLoadingObservations = false // Prevent concurrent observation loading
let isUnmounting = false // Track if component is unmounting
const activeTasks = new Map<string, Task>() // Track active tasks for cleanup
// Create a local TaskManager instance for this widget
const localTaskManager = useTaskManager()

// Memoization cache for expensive operations
const geoJsonCache = new WeakMap<any, any>()
const boundsCache = new WeakMap<any, boolean>()

// Detect datasource type dynamically
const datasourceType = computed(() => {
  try {
    if (!datasourceId.value) return 'ogcsta'
    const dsRepository = container.get<DatasourceRepository>(identifier)
    const datasource = dsRepository.getDatasource(datasourceId.value)
    return (datasource as any).type || 'ogcsta'
  } catch (e) {
    logDatasource('Could not detect datasource type:', e)
    return 'ogcsta'
  }
})

// Dynamic data type mapping
const dataTypeMapping: Record<string, string> = {
  'rest': 'object',
  'ogcsta': 'OGCSTAData',
  'OGC Composer': 'OGCSTAData'
}

const dataType = computed(() => dataTypeMapping[datasourceType.value] || 'OGCSTAData')

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
    const dsRepository = container.get<DatasourceRepository>(identifier)
    const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
    const dsType = dsRepository.getDatasourceType(dsId)

    // Determine the data type for this datasource
    const requestType = dataTypeMapping[dsType] || 'OGCSTAData'

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
watch(() => [config.value?.datasourceIds, config.value?.layers], async () => {
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
    loadObservationsInView()
  }
}, { deep: true, immediate: true })

watch(datasourceId, (value, oldValue, onCleanup) => {
  update(value, oldValue)
})

watch(() => config.value?.OGCSstyles, (value, oldValue, onCleanup) => {
  loadObservationsInView()
  loadHistoricalLocationsForAllThings()
}, { deep: true })


const { getById } = useDataPointRegistry()
const openThing = ref<{ [key: string]: boolean }>({})
// Initialize selectedThingId from config to persist across mode switches
const selectedThingId = ref<string | null>(config.value?.selectedThingId ?? null)

// Watch for changes to selectedThingId and sync back to config
watch(selectedThingId, (newValue) => {
  if (config.value) {
    config.value.selectedThingId = newValue
  }
})

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

onMounted(async () => {
  if (config.value) {
    Object.assign(config.value, { ...defaultConfig, ...config.value })

    // Reconstruct services from URLs after deserialization
    if (config.value.services) {
      for (const service of config.value.services) {
        // Check if service needs reconstruction by checking for methods
        if (service.type === 'WMS') {
          const hasGetLayersMethod = typeof service.service?.getLayers === 'function'
          if (!hasGetLayersMethod && service.url) {
            logServices('Reconstructing WMS service from URL: %s', service.url)
            try {
              service.service = await createServiceWMS(service.url)
              logServices('WMS service reconstructed successfully')
              ;(service as any).reconstructionFailed = false
            } catch (e) {
              logServices('Could not reconstruct WMS service: %o', e)
              ;(service as any).reconstructionFailed = true
            }
          }
        } else if (service.type === 'WFS') {
          const hasGetFeatureTypesMethod = typeof service.service?.getFeatureTypes === 'function'
          if (!hasGetFeatureTypesMethod && service.url) {
            logServices('Reconstructing WFS service from URL: %s', service.url)
            try {
              service.service = await createServiceWFS(service.url)
              logServices('WFS service reconstructed successfully')
              ;(service as any).reconstructionFailed = false
            } catch (e) {
              logServices('Could not reconstruct WFS service: %o', e)
              ;(service as any).reconstructionFailed = true
            }
          }
        }
      }
      // Trigger reactivity by reassigning the array
      config.value.services = [...config.value.services]
    }

    // Reconstruct service instances for WMS/WFS layers after deserialization
    if (config.value.layers) {
      const newLayers = []
      for (const layer of config.value.layers) {
        if (layer.type === 'WMSLayer' && layer.service && !layer.service.getOperationUrl) {
          // Service was deserialized as plain object, reconstruct WmsEndpoint
          const serviceUrl = layer.service._capabilitiesUrl || layer.service.url || layer.service.serviceUrl
          if (serviceUrl) {
            try {
              const newService = await createServiceWMS(serviceUrl)
              newLayers.push({ ...layer, service: newService, reconstructionFailed: false })
            } catch (e) {
              logServices('Could not reconstruct WMS service for layer %s: %o', layer.name, e)
              newLayers.push({ ...layer, reconstructionFailed: true })
            }
          } else {
            logServices('WMS layer missing service URL: %s', layer.name)
            newLayers.push({ ...layer, reconstructionFailed: true })
          }
        } else if (layer.type === 'WFSLayer' && layer.wfs_service) {
          // WFS service needs reconstruction - check if it has fetch method
          if (typeof layer.wfs_service.fetch !== 'function') {
            // Deserialized WFS service - reconstruct from URL
            const wfsUrl = layer.wfs_service.url
            if (wfsUrl) {
              try {
                // Import WFS class dynamically
                const WFS = (await import('./WFS')).default
                const newWfsService = new WFS(wfsUrl)
                // Fetch the GeoJSON data
                await newWfsService.fetch()
                newLayers.push({ ...layer, wfs_service: newWfsService, reconstructionFailed: false })
              } catch (e) {
                logServices('Could not reconstruct WFS service for layer %s: %o', layer.name, e)
                newLayers.push({ ...layer, reconstructionFailed: true })
              }
            } else {
              logServices('WFS layer missing service URL: %s', layer.name)
              newLayers.push({ ...layer, reconstructionFailed: true })
            }
          } else {
            // WFS service is already valid, just keep it
            newLayers.push(layer)
          }
        } else {
          newLayers.push(layer)
        }
      }
      config.value.layers = newLayers
    }
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
watch(data, (value, oldValue) => {
  const oldLocations = (oldValue as any)?.locations?.length || 0
  const newLocations = (value as any)?.locations?.length || 0

  // First load: when we go from no locations to having locations
  if (oldLocations === 0 && newLocations > 0) {
    loadObservationsInView()
    loadHistoricalLocationsForAllThings()
  }
}, { deep: true })

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
    // Set filter for primary datasource
    callEvent(FILTER, { historicalLocations: matchingThings })

    // Set filter for additional datasources
    for (const dsId of additionalDatasourcesData.value.keys()) {
      try {
        const dsRepository = container.get<DatasourceRepository>(identifier)
        const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
        if (datasource && typeof datasource.callEvent === 'function') {
          datasource.callEvent(FILTER, { historicalLocations: matchingThings })
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
watch(() => config.value.fixed, (value, oldValue, onCleanup) => {
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
watch(() => config.value?.styles, (newStyles) => {
  if (!newStyles) return

  // Create a simple hash by stringifying the styles
  const newHash = JSON.stringify(newStyles)

  // Only invalidate if actually changed
  if (newHash !== stylesHash) {
    stylesHash = newHash
    invalidateStylesCache()
  }
}, { deep: true })


const maploaded = () => {
  mounted = true
  logMap('map ready')
  setFixed()
  createLayerPanes()
  //loadObservationsInView();
}

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
watch(() => config.value.layers, () => {
  if (mounted) {
    createLayerPanes()
  }
}, { deep: true })
const rev = (arr: any) => {
  return {
    lat: arr[1],
    lng: arr[0]
  }
}
const reverse = (arr: any) => {

  return [arr[1], arr[0]]

}

const mapmove = debounce(() => {
  loadObservationsInView()
}, 500, { leading: false, trailing: true })

const loadObservationsInView = () => {
  console.log('[MAP] loadObservationsInView called')

  if (isLoadingObservations) {
    console.log('[MAP] Already loading, skipping')
    return
  }

  // Check if map is ready and mountedt
  if (!map.value || !(map.value as any)?.leafletObject) {
    console.log('[MAP] Map not ready')
    return
  }

  let inBounds = (map.value as any)?.leafletObject.getBounds()
  if (!inBounds) {
    logMap('No map bounds available yet')
    return
  }

  isLoadingObservations = true

  let geometry: Polygon = {
    type: 'Polygon',
    coordinates: [[[inBounds._northEast.lng, inBounds._northEast.lat],

      [inBounds._northEast.lng, inBounds._southWest.lat],
      [inBounds._southWest.lng, inBounds._southWest.lat],
      [inBounds._southWest.lng, inBounds._northEast.lat],
      [inBounds._northEast.lng, inBounds._northEast.lat]
    ]]
  }
  const bboxFeature = feature(geometry)
  const catchedDSIds = []
  const taskListByTime: { [key: string]: BoxedDatastream[] } = {}

  // Collect all datastreams from primary datasource and additional datasources
  // Group by datasource to call events separately
  const datasourceDatastreams = new Map<string, any[]>()

  // Add datastreams from primary datasource
  if ((data.value as any)?.datastreams) {
    datasourceDatastreams.set(datasourceId.value, (data.value as any).datastreams)
    console.log('[MAP] Found', (data.value as any).datastreams.length, 'datastreams in primary datasource')
  } else {
    console.log('[MAP] No datastreams in data.value')
  }

  // Add datastreams from additional datasources
  for (const [dsId, dsData] of additionalDatasourcesData.value.entries()) {
    if ((dsData as any)?.datastreams) {
      datasourceDatastreams.set(dsId, (dsData as any).datastreams)
    }
  }

  console.log('[MAP] OGCSstyles count:', config.value.OGCSstyles?.length || 0)

  // Build task list grouped by time and datasource
  const taskListByTimeAndDatasource: { [key: string]: { [dsId: string]: BoxedDatastream[] } } = {}

  // Build renderer lookup map for faster matching (optimization: avoid nested loops)
  const renderersByRefreshTime = new Map<number, Array<{ renderer: any, subrender: any }>>()
  for (const renderer of config.value.OGCSstyles) {
    const refreshtime: number = renderer.ObservationrefreshTime !== undefined && renderer.ObservationrefreshTime !== null ? renderer.ObservationrefreshTime : 0

    if (!renderersByRefreshTime.has(refreshtime)) {
      renderersByRefreshTime.set(refreshtime, [])
    }
    for (const subrender of renderer.ds_renderer) {
      renderersByRefreshTime.get(refreshtime)!.push({ renderer, subrender })
    }
  }

  // Process datastreams with optimized renderer matching
  for (const [dsId, datastreams] of datasourceDatastreams.entries()) {
    for (const dataStream of datastreams) {
      // Check if datastream is in bounds ONCE (before renderer matching)
      let inBoundsCheck: boolean | null = null
      let geoJsonFeature: any = null

      // Compute and cache geometry check
      if (dataStream.observedArea) {
        // Use cached transformation if available
        if (!geoJsonCache.has(dataStream.observedArea)) {
          geoJsonCache.set(dataStream.observedArea, transformToGeoJson(toRaw(dataStream.observedArea)))
        }
        geoJsonFeature = geoJsonCache.get(dataStream.observedArea)
        inBoundsCheck = booleanContains(bboxFeature, geoJsonFeature as Polygon)
      } else if (dataStream.thing?.locations?.[0]) {
        try {
          const location = dataStream.thing.locations[0].location
          if (!geoJsonCache.has(location)) {
            geoJsonCache.set(location, transformToGeoJson(location))
          }
          geoJsonFeature = geoJsonCache.get(location)
          inBoundsCheck = booleanContains(bboxFeature, geoJsonFeature)
        } catch (e) {
          logObservations('FeatureCollection not supported')
          inBoundsCheck = false
        }
      }

      // Skip if not in bounds
      if (inBoundsCheck === false || inBoundsCheck === null) continue

      // Match against renderers (now O(1) lookup instead of nested loops)
      for (const [refreshtime, renderers] of renderersByRefreshTime.entries()) {
        let matched = false
        for (const { renderer, subrender } of renderers) {
          // Check both datastream AND thing filters
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

        // Create deterministic task ID based on datasource and datastream IDs
        const itemIds = items.map(i => i.iotId || (i as any)['@iot.id']).sort().join(',')
        const taskId = `obs-${dsId}-${refreshTime}-${itemIds}`

        const task = new class extends Task {
          readonly id = taskId
          private handle: number | undefined

          invoke() {
            window.clearInterval(this.handle)
          }

          async run() {

            // Call event on the appropriate datasource
            if (isDatasourcePrimary) {
              callEvent(FILTER, { observations: items })
            } else {
              // For additional datasources, call event directly on the datasource
              try {
                const dsRepository = container.get<DatasourceRepository>(identifier)
                const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
                if (datasource && typeof datasource.callEvent === 'function') {
                  datasource.callEvent(FILTER, { observations: items })
                }
              } catch (e) {
                logDatasource('Could not call event on datasource', dsId, e)
              }
            }

            if(parseInt(refreshTime) !== 0){
              this.handle = window.setInterval(async () => {
                if (isDatasourcePrimary) {
                  callEvent(FILTER, { observations: items })
                } else {
                  try {
                    const dsRepository = container.get<DatasourceRepository>(identifier)
                    const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
                    if (datasource && typeof datasource.callEvent === 'function') {
                      datasource.callEvent(FILTER, { observations: items })
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

  console.log('[MAP] Created', tasks.length, 'tasks to invoke')
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
      const dsRepository = container.get<DatasourceRepository>(identifier)
      const datasource = dsRepository.getDatasource(dsId) as IDataRetrieveable
      if (datasource && typeof datasource.callEvent === 'function') {
        datasource.callEvent(UPDATE_MQTT_SUBSCRIPTIONS, { observations: uniqBy(observations, 'iotId') })
      }
    } catch (e) {
      logDatasource('Could not call UPDATE_MQTT_SUBSCRIPTIONS on datasource', dsId, e)
    }
  }

  isLoadingObservations = false

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
const zoomUpdated = (zoom: any) => {
  config.value.zoom = zoom
}
const centerUpdated = (center: any) => {
  config.value.center = center
}


let api = new class implements MapWidgetInterface{
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
      const dsRepository = container.get<DatasourceRepository>(identifier)
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
    <l-map v-if="config.baseMapUrl" id="map" ref="map"
            :center="config.center as PointExpression"
            :max-zoom="21"
            :use-global-leaflet="false"
            :zoom="config.zoom"
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
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            :dragging="!config.fixed"
    >
      <l-tile-layer :attribution="config.attribution" :options="{maxNativeZoom:19,
        maxZoom:25}" :url="config.baseMapUrl"></l-tile-layer>
      <template v-for="(wmsLayer, index) in [...config.layers].reverse()" :key="`${wmsLayer.name}-${getOriginalLayerIndex(wmsLayer)}`">
        <LWmsTileLayer v-if="wmsLayer.type == 'WMSLayer' && wmsLayer.service && typeof wmsLayer.service.getOperationUrl === 'function'"
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
          :geo-json="wmsLayer.wfs_service?.geoJson"
          :style-ids="wmsLayer.styleIds"
          :layer-options="getLayerOptions(wmsLayer)"
          :filter-feature-collection="filterFeatureCollection"
          :get-style-by-id="getStyleById"
          :is-point="isPoint"
        />
        <GeoJsonLayer
          v-if="wmsLayer.type == 'GEOJSON'"
          :layer-data="getLayerData(wmsLayer)"
          :style-ids="wmsLayer.styleIds"
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
          :style-ids="wmsLayer.styleIds"
          :layer-options="getLayerOptions(wmsLayer)"
          :marker-pane="getMarkerPane(wmsLayer)"
          :filter-feature-collection="filterFeatureCollection"
          :get-style-by-id="getStyleById"
          :is-point="isPoint"
          :get-point="getPoint"
        />
        <OGCSTALayer
          v-if="wmsLayer.type == 'OGCSTA'"
          :locations="getLayerLocations(wmsLayer)"
          :renderers="config.OGCSstyles ?? []"
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
          :selection-highlight-color="config.selectionHighlightColor ?? '#ff0000'"
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
