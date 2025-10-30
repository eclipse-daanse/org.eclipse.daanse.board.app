<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, toRaw, toRefs, watch } from 'vue'
import type { IMapSettings } from './Settings'
import 'leaflet/dist/leaflet.css'

import { LMap, LWmsTileLayer, LTileLayer, LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import { useComparator } from './composables/comparator'
import { useUtils } from './composables/utils'
import { type BoxedDatastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/interfaces/OgcStaConfiguration'
import L, { PointExpression } from 'leaflet'
import { ERefType, IRenderer } from './api/Renderer'
import { resolve } from './utils/helpers'
import { debounce, uniq } from 'lodash'
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

const props = defineProps<{ datasourceId: string }>()
const { datasourceId } = toRefs(props)
const config = defineModel<MapSettings>('configv', { required: true});
const map = ref(null)
const defaultConfig = new MapSettings()

const { filterFeatureCollection, compareDatastream, compareThing } = useComparator()
const { isPoint, isFeatureCollection, transformToGeoJson, isFeature } = useUtils()


const data = ref<any>({})
const additionalDatasourcesData = ref<Map<string, any>>(new Map())
const subscribedDatasources = new Set<string>() // Track which datasources are already subscribed
const loadingDatasources = new Set<string>() // Track which datasources are currently loading
let isLoadingObservations = false // Prevent concurrent observation loading

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
        datasource.subscribe(updateCallback)
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
  console.log('ObservationrefreshTime changed, reloading observations')
  loadObservationsInView()
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

onMounted(() => {
  if (config.value) {
    Object.assign(config.value, { ...defaultConfig, ...config.value })
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

}, { deep: true, once: true })

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
        const refreshtime: number = renderer.ObservationrefreshTime ?? 10
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

  console.log('taskListByTimeAndDatasource:', taskListByTimeAndDatasource)

  const tasks = []
  for (const [refreshTime, datasourceItems] of Object.entries(taskListByTimeAndDatasource)) {
    for (const [dsId, _items] of Object.entries(datasourceItems)) {
      const items: Datastream[] = uniq(_items)
      if (items.length > 0) {
        // Get the correct datasource to call events on
        const isDatasourcePrimary = dsId === datasourceId.value

        tasks.push(new class extends Task {
          readonly id = Math.random().toString()
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
        }())
      }
    }
  }

  useTaskManager().addTasksAndIvnoke(tasks)

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
</script>

<template>

  <div id="mapholder" class="holder" style="height: 100%">
    <l-map v-if="config.baseMapUrl" id="map" ref="map"
            :center="config.center as PointExpression"
            :max-zoom="21"
            :use-global-leaflet="false"
            :zoom="config.zoom"
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
        <LWmsTileLayer v-if="wmsLayer.type == 'WMSLayer'"
                        :attribution="wmsLayer.attribution"
                        :layers="wmsLayer.name!"
                        :name="wmsLayer.name"
                        :opacity="wmsLayer.opacity"
                        :transparent="true"
                        :url="(wmsLayer.service as  any).getOperationUrl('GetMap')"
                        :visible="(wmsLayer as any).checked"
                        :z-index="config.layers.length - index"
                        format="image/png"
                        layer-type="base">
        </LWmsTileLayer>
        <template v-if="wmsLayer.type == 'WFSLayer'">

          <template v-for="styleID in wmsLayer.styleIds" :key="styleID">
            <!--<template v-if="compareDatastream(wmsLayer.wfs_service?.geoJson as BoxedDatastream, config.styles.find(style=>style.id==styleID)!)">-->
            <l-geo-json v-if="!isPoint(wmsLayer.wfs_service?.geoJson)" ref="thingsLayer"
                        :geojson="filterFeatureCollection(wmsLayer.wfs_service?.geoJson as any,config.styles.find(style=>style.id==styleID)!) as unknown as  GeoJsonObject[]"
                        :options="getLayerOptions(wmsLayer)"
                        :options-style="()=>config.styles.find(style=>style.id==styleID)?.renderer.area as any"></l-geo-json>
            <!-- </template>-->
          </template>
        </template>
        <template v-if="wmsLayer.type == 'GEOJSON'">
          <template v-for="styleID in wmsLayer.styleIds" :key="styleID">

            <template v-for="feature in (filterFeatureCollection(getLayerData(wmsLayer),config.styles.find(style=>
              style.id==styleID)!).features)" :key="feature.id">
              <l-geo-json v-if="!isPoint(feature.geometry)" ref="geojsonLayer"
                          :geojson="feature"
                          :options="getLayerOptions(wmsLayer)"
                          :options-style="()=>config.styles.find(style=>
                          style.id==styleID)?.renderer.area as any"></l-geo-json>

              <l-marker
                v-if="getPoint(feature.geometry)"
                :lat-lng="getPoint(feature.geometry) as  L.LatLngExpression"
                :options="{ pane: getMarkerPane(wmsLayer) }"
                >
                <l-icon class-name="someExtraClass">
                  <template v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_render_as=='icon'">
                    <div :style="{background:config.styles.find(style=>style.id==styleID)?.renderer.pointPin.color}" class="pin icon">
                      <div class="inner">
                        <IconWidget :config="config.styles.find(style=>style.id==styleID)?.renderer.point" v-model:configv="(config.styles.find(style=>style.id==styleID)!.renderer.point) as IconSettings"></IconWidget>
                      </div>
                    </div>
                  </template>
                  <template v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_render_as=='prop'">
                    <div :style="{background:config.styles.find(style=>style.id==styleID)?.renderer.pointPin.color}" class="pin contain marker">
                      <div class="inner">
                        {{ feature.properties![(config.styles.find(style=>style.id==styleID)?.renderer.point_prop) ?? ''] }}
                      </div>
                    </div>
                  </template>
                  <template v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_render_as=='image'">
                    <div class="image-marker" :style="{width: (config.styles.find(style=>style.id==styleID)?.renderer.point_image_size || 32) + 'px', height: (config.styles.find(style=>style.id==styleID)?.renderer.point_image_size || 32) + 'px'}">
                      <img v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_image_url"
                            :src="config.styles.find(style=>style.id==styleID)?.renderer.point_image_url"
                            :style="{width: '100%', height: '100%', objectFit: 'contain'}" />
                    </div>
                  </template>
                </l-icon>
              </l-marker>

            </template>
            <!--<template v-if="compareDatastream(wmsLayer.wfs_service?.geoJson as BoxedDatastream, config.styles.find(style=>style.id==styleID)!)">-->

            <!-- </template>-->
          </template>
        </template>
        <template v-if="wmsLayer.type == 'REST-GEOJSON'">
          <template v-for="styleID in wmsLayer.styleIds" :key="styleID">
            <template v-if="getLayerData(wmsLayer) && getLayerData(wmsLayer).features">
              <!-- Render non-point geometries (Polygons, LineStrings, etc.) -->
              <template v-for="feature in (filterFeatureCollection(getLayerData(wmsLayer),config.styles.find(style=>
                style.id==styleID)!).features)" :key="'area-'+feature.id">
                <l-geo-json v-if="feature.geometry && !isPoint(feature.geometry)" ref="restGeojsonLayer"
                            :geojson="feature"
                            :options="getLayerOptions(wmsLayer)"
                            :options-style="()=>config.styles.find(style=>
                            style.id==styleID)?.renderer.area as any"></l-geo-json>
              </template>

              <!-- Render point geometries with custom markers -->
              <template v-for="feature in (filterFeatureCollection(getLayerData(wmsLayer),config.styles.find(style=>
                style.id==styleID)!).features)" :key="'point-'+feature.id">
                <l-marker
                  v-if="feature.geometry && isPoint(feature.geometry) && getPoint(feature.geometry)"
                  :lat-lng="getPoint(feature.geometry) as  L.LatLngExpression"
                  :options="{ pane: getMarkerPane(wmsLayer) }"
                  >
                  <l-icon class-name="someExtraClass">
                    <template v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_render_as=='icon'">
                      <div :style="{background:config.styles.find(style=>style.id==styleID)?.renderer.pointPin.color}" class="pin icon">
                        <div class="inner">
                          <IconWidget :config="config.styles.find(style=>style.id==styleID)?.renderer.point" v-model:configv="(config.styles.find(style=>style.id==styleID)!.renderer.point) as IconSettings"></IconWidget>
                        </div>
                      </div>
                    </template>
                    <template v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_render_as=='prop'">
                      <div :style="{background:config.styles.find(style=>style.id==styleID)?.renderer.pointPin.color}" class="pin contain marker">
                        <div class="inner">
                          {{ feature.properties![(config.styles.find(style=>style.id==styleID)?.renderer.point_prop) ?? ''] }}
                        </div>
                      </div>
                    </template>
                    <template v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_render_as=='image'">
                      <div class="image-marker" :style="{width: (config.styles.find(style=>style.id==styleID)?.renderer.point_image_size || 32) + 'px', height: (config.styles.find(style=>style.id==styleID)?.renderer.point_image_size || 32) + 'px'}">
                        <img v-if="config.styles.find(style=>style.id==styleID)?.renderer.point_image_url"
                              :src="config.styles.find(style=>style.id==styleID)?.renderer.point_image_url"
                              :style="{width: '100%', height: '100%', objectFit: 'contain'}" />
                      </div>
                    </template>
                  </l-icon>
                </l-marker>
              </template>

            </template>
          </template>
        </template>
        <template v-if="wmsLayer.type=='OGCSTA'">
          <template v-for="renderer in (config.OGCSstyles ?? [])" :key="renderer.id">

            <template v-for="location in getLayerLocations(wmsLayer)" :key="location['@iot.id']+'markr'">
              <template v-for="thing in location.things??[]" :key="thing['@iot.id']+'markrThing'">
                <template v-if="compareThing(thing, renderer)">
                  <template v-if="isFeatureCollection(location.location)">
                    <l-geo-json v-if="!isPoint(location.location)" ref="thingsLayer"
                                :geojson="location.location" :options="getLayerOptions(wmsLayer)"
                                :options-style="()=>renderer.renderer.area as any"></l-geo-json>
                  </template>


                  <l-marker
                    v-if="getPoint(location.location)"
                    :lat-lng="getPoint(location.location) as  L.LatLngExpression"
                    :options="{ pane: getMarkerPane(wmsLayer) }"
                    @click="openThing[thing.iotId??'null']=(openThing[thing.iotId??'null'])?!openThing[thing.iotId??'null']:true">
                    <l-icon class-name="someExtraClass">
                      <template v-if="renderer.renderer.point_render_as=='icon'">
                        <div :style="{background:renderer.renderer.pointPin.color}" class="pin icon">
                          <div class="inner">
                            <IconWidget :config="renderer.renderer.point" v-model:configv="renderer.renderer.point"></IconWidget>
                          </div>
                        </div>


                      </template>
                      <template v-if="renderer.renderer.point_render_as=='prop'">
                        <div :style="{background:renderer.renderer.pointPin.color}"
                              class="pin contain marker">
                          <div class="inner">
                            {{ thing[(renderer.renderer.point_prop) ?? ''] }}
                          </div>
                        </div>
                      </template>
                      <template v-if="renderer.renderer.point_render_as=='image'">
                        <div class="image-marker" :style="{width: (renderer.renderer.point_image_size || 32) + 'px', height: (renderer.renderer.point_image_size || 32) + 'px'}">
                          <img v-if="renderer.renderer.point_image_url"
                                :src="renderer.renderer.point_image_url"
                                :style="{width: '100%', height: '100%', objectFit: 'contain'}" />
                        </div>
                      </template>
                    </l-icon>
                  </l-marker>
                  <template v-for="(datastream) in thing.datastreams??[]" :key="(datastream as BoxedDatastream).iotId">
                    <template v-for="subrenderer in renderer.ds_renderer" :key="subrenderer.id">

                      <template
                        v-if="compareDatastream(datastream as BoxedDatastream, subrenderer) /*&& openThing[thing['@iot.id']]*/">
                        <l-geo-json ref="thingsLayer"
                                    :geojson="transformToGeoJson(datastream.observedArea)" :options="getLayerOptions(wmsLayer)"
                                    :options-style="()=>subrenderer.renderer.area as any"></l-geo-json>
                        <l-marker
                          v-if="((subrenderer.placement == ERefType.Thing)?getPoint(location.location):getPointformArea(transformToGeoJson(datastream.observedArea))) as L.LatLngExpression"
                          :lat-lng="((subrenderer.placement == ERefType.Thing)?getPoint(location.location):getPointformArea(transformToGeoJson(datastream.observedArea))) as L.LatLngExpression"
                          :options="{ pane: getMarkerPane(wmsLayer) }">
                          <l-icon class-name="someExtraClass">
                            <template v-if="subrenderer.renderer.point_render_as=='icon'">
                              <div :style="{background:subrenderer.renderer.pointPin.color}"
                                    class="pin icon round">
                                <div class="inner">
                                  <IconWidget :config="subrenderer.renderer.point" v-model:configv="subrenderer.renderer.point"></IconWidget>
                                </div>
                                <template v-if="datastream.observations">
                                  <component
                                    :is="getById(subrenderer.observation?.component)?.component"
                                    v-if="getById(subrenderer.observation?.component)"
                                    :config="subrenderer.observation?.setting"
                                    :data="datastream.observations[datastream.observations.length-1]?.result"
                                    :key="datastream.observations[datastream.observations.length-1]?.phenomenonTime"
                                    :marker-size="45"></component>
                                </template>
                              </div>
                            </template>
                            <template v-if="subrenderer.renderer.point_render_as=='prop'">
                              <div :style="{background:subrenderer.renderer.pointPin.color}"
                                    class="pin round contain">
                                <div class="inner">
                                  {{ datastream[((subrenderer as unknown as IRenderer).renderer.point_prop) ?? ''] }}
                                </div>
                                <template v-if="datastream.observations">
                                  <component
                                    :is="getById(subrenderer.observation?.component)?.component"
                                    v-if="getById(subrenderer.observation?.component)"
                                    :config="subrenderer.observation?.setting"
                                    :data="datastream.observations[datastream.observations.length-1]?.result"
                                    :key="datastream.observations[datastream.observations.length-1]?.phenomenonTime"
                                    :marker-size="45"></component>
                                </template>
                              </div>
                            </template>
                            <template v-if="subrenderer.renderer.point_render_as=='image'">
                              <div class="image-marker" :style="{width: (subrenderer.renderer.point_image_size || 32) + 'px', height: (subrenderer.renderer.point_image_size || 32) + 'px'}">
                                <img v-if="subrenderer.renderer.point_image_url"
                                      :src="subrenderer.renderer.point_image_url"
                                      :style="{width: '100%', height: '100%', objectFit: 'contain'}" />
                              </div>
                                <template v-if="datastream.observations">
                                  <component
                                    :is="getById(subrenderer.observation?.component)?.component"
                                    v-if="getById(subrenderer.observation?.component)"
                                    :config="subrenderer.observation?.setting"
                                    :data="datastream.observations[datastream.observations.length-1]?.result"
                                    :key="datastream.observations[datastream.observations.length-1]?.phenomenonTime"
                                    :marker-size="0"></component>
                                </template>
                            </template>
                            <template v-if="subrenderer.renderer.point_render_as=='none'">
                              <template v-if="datastream.observations">
                                <component
                                  :is="getById(subrenderer.observation?.component)?.component"
                                  v-if="getById(subrenderer.observation?.component)"
                                  :config="subrenderer.observation?.setting"
                                  :data="datastream.observations[0]?.result"
                                  :marker-size="renderer.renderer.point_image_size||32"></component>
                              </template>
                            </template>


                          </l-icon>
                        </l-marker>
                      </template>
                    </template>
                  </template>
                </template>
              </template>
            </template>
          </template>

        </template>
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
