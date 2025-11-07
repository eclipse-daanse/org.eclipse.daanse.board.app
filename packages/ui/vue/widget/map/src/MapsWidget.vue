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
import { FILTER, FILTERRESET } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import booleanContains from '@turf/boolean-contains'
import { feature } from '@turf/helpers'
import pointOnFeature from '@turf/point-on-feature'
import { useDataPointRegistry } from './composables/datapointRegistry'
import { IconWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import { MapSettings } from './gen/MapSettings'
import { IDataRetrieveable, DatasourceRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { IconSettings } from './gen/IconSettings'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import WFSLayer from './components/WFSLayer.vue'
import GeoJsonLayer from './components/GeoJsonLayer.vue'
import RestGeoJsonLayer from './components/RestGeoJsonLayer.vue'
import OGCSTALayer from './components/OGCSTALayer.vue'
import { useOGCService } from './composables/Service'

const props = defineProps<{ datasourceId: string }>()
const { datasourceId } = toRefs(props)
const config = defineModel<MapSettings>('configv', { required: true});
const map = ref(null)
const defaultConfig = new MapSettings()

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
    console.warn('Could not detect datasource type', e)
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
    console.log('Datasource', dsId, 'is already loading, skipping')
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
    console.warn('Could not get datasource data for', dsId, e)
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
              newLayers.push({ ...layer, service: newService })
            } catch (e) {
              console.warn('Could not reconstruct WMS service for layer', layer.name, e)
              newLayers.push(layer)
            }
          } else {
            console.warn('WMS layer missing service URL:', layer.name)
            newLayers.push(layer)
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
                newLayers.push({ ...layer, wfs_service: newWfsService })
              } catch (e) {
                console.warn('Could not reconstruct WFS service for layer', layer.name, e)
                newLayers.push(layer)
              }
            } else {
              console.warn('WFS layer missing service URL:', layer.name)
              newLayers.push(layer)
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
watch(data, (value, oldValue, onCleanup) => {
  loadObservationsInView()
  loadHistoricalLocationsForAllThings()
}, { deep: true, once: true })

const loadHistoricalLocationsForAllThings = () => {
  // Check if there are any OGCSTA styles configured
  if (!config.value?.OGCSstyles || config.value.OGCSstyles.length === 0) {
    console.log('📍 No OGCSTA styles configured, skipping historical locations load')
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
    console.log(`📍 Setting historical locations filter for ${matchingThings.length} matching things`)
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
        console.warn('Could not call event on datasource', dsId, e)
      }
    }
  } else {
    console.log('📍 No things match the configured style filters')
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
    console.log(e)
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
  return (layerData as any)?.['locations'] ?? []
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

// Cache style lookups to avoid repeated .find() calls in templates
const stylesByIdCache = computed(() => {
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

// Helper to get style by ID - much faster than repeated .find() calls
const getStyleById = (styleId: string) => {
  return stylesByIdCache.value.get(styleId)
}


const maploaded = () => {
  mounted = true
  console.log('map ready')
  setFixed()
  createLayerPanes()
  //loadObservationsInView();
}

const createLayerPanes = () => {
  const mapObject = (map.value as any)?.leafletObject as L.Map
  if (!mapObject || !config.value.layers) return

  // Create or update panes for each layer with the appropriate z-index
  config.value.layers.forEach((layer, index) => {
    const paneName = `layer-pane-${index}`
    let pane = mapObject.getPane(paneName)
    if (!pane) {
      pane = mapObject.createPane(paneName)
    }
    // Layer at index 0 should be on top, so highest z-index
    // Default overlay pane is at z-index 400
    pane.style.zIndex = String(400 + config.value.layers.length - index)
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
}, 2000, { leading: false })

const loadObservationsInView = () => {
  if (isLoadingObservations) {
    return
  }

  // Check if map is ready and mounted
  if (!map.value || !(map.value as any)?.leafletObject) {
    return
  }

  let inBounds = (map.value as any)?.leafletObject.getBounds()
  if (!inBounds) {
    console.log('No map bounds available yet')
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
  }

  // Add datastreams from additional datasources
  for (const [dsId, dsData] of additionalDatasourcesData.value.entries()) {
    if ((dsData as any)?.datastreams) {
      datasourceDatastreams.set(dsId, (dsData as any).datastreams)
    }
  }

  // Build task list grouped by time and datasource
  const taskListByTimeAndDatasource: { [key: string]: { [dsId: string]: BoxedDatastream[] } } = {}

  for (const [dsId, datastreams] of datasourceDatastreams.entries()) {
    for (const dataStream of datastreams) {
      for (const renderer of config.value.OGCSstyles) {
        const refreshtime: number = renderer.ObservationrefreshTime !== undefined && renderer.ObservationrefreshTime !== null ? renderer.ObservationrefreshTime : 10

        // Skip if refresh time is 0 (no polling)
        if (refreshtime === 0) {
          continue
        }

        if (!taskListByTimeAndDatasource[refreshtime]) taskListByTimeAndDatasource[refreshtime] = {}
        if (!taskListByTimeAndDatasource[refreshtime][dsId]) taskListByTimeAndDatasource[refreshtime][dsId] = []

        for (const subrender of renderer.ds_renderer) {

          if (compareDatastream(dataStream, subrender)) {
            if (dataStream.observedArea) {

              const featrueObservedArea = (transformToGeoJson(toRaw(dataStream.observedArea)) as Polygon)

              if (booleanContains(bboxFeature, featrueObservedArea)) {
                taskListByTimeAndDatasource[refreshtime][dsId].push(dataStream)
              }
            } else {
              if (dataStream.thing && dataStream.thing!.locations && dataStream.thing!.locations[0]) {
                try {
                  if (booleanContains(bboxFeature, transformToGeoJson(dataStream.thing!.locations[0].location))) {
                    taskListByTimeAndDatasource[refreshtime][dsId].push(dataStream)
                  }
                } catch (e) {
                  console.log('FeatureCollection not supported')
                }

              }

              console.log(dataStream.Thing)
            }
          }
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
                console.warn('Could not call event on datasource', dsId, e)
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
                    console.warn('Could not call event on datasource', dsId, e)
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

  localTaskManager.addTasksAndIvnoke(tasks)

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

// Cleanup on unmount
onUnmounted(() => {
  isUnmounting = true

  // Clear all active tasks and their intervals DIRECTLY
  // We use our local task references to stop the intervals
  for (const [taskId, task] of activeTasks.entries()) {
    try {
      task.invoke() // This clears the interval using our local reference
    } catch (e) {
      console.warn('Error stopping task interval:', e)
    }
  }

  // Clear the entire local TaskManager since this widget is unmounting
  localTaskManager.clearAll()
  activeTasks.clear()

  // Unsubscribe from all datasources
  for (const [dsId, unsubscribe] of datasourceUnsubscribeFunctions.entries()) {
    try {
      unsubscribe()
    } catch (e) {
      console.warn(`Error unsubscribing from datasource ${dsId}:`, e)
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
            @move="mapmove"
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
          :compare-thing="compareThing"
          :compare-datastream="compareDatastream"
          :is-feature-collection="isFeatureCollection"
          :is-point="isPoint"
          :get-point="getPoint"
          :get-pointform-area="getPointformArea"
          :transform-to-geo-json="transformToGeoJson"
          :get-by-id="getById"
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
