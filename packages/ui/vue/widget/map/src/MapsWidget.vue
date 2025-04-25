<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { computed, onMounted, ref, toRaw, toRefs, watch } from 'vue'
import type { IMapSettings } from './Settings'
import 'leaflet/dist/leaflet.css'

import { LMap, LWmsTileLayer, LTileLayer, LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import { useComparator } from './composables/comparator'
import { useUtils } from './composables/utils'
import { type BoxedDatastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/interfaces/OgcStaConfiguration'
import type { FeatureCollection } from './api/FeatureCollection'
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

const props = defineProps<{ datasourceId: string, config: IMapSettings }>()
const { datasourceId, config } = toRefs(props)

const map = ref(null)
const defaultConfig: IMapSettings = {
  baseMapUrl: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  zoom: 14,
  center: [50.93115286, 11.60392726],
  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  layers: [],
  styles: [],
  OGCSstyles: [],
  services: []
}

const { filterFeatureCollection, compareDatastream, compareThing } = useComparator()
const { isPoint, isFeatureCollection, transformToGeoJson, isFeature } = useUtils()


//const { data,callEvent } = useDatasourceRepository(datasourceId, OGCSTAData);

//const { datasourceId } = toRefs(props)
const data = ref(null)

watch(datasourceId, (oldVal, newVal) => {
  update(oldVal, newVal)
})

const { update, callEvent } = useDatasourceRepository(datasourceId, 'OGCSTAData', data)

const { getById } = useDataPointRegistry()
const openThing = ref<{ [key: string]: boolean }>({})
let mounted = false

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

  if (mapDiv) resizeObserver.observe(mapDiv)
})

const locations = computed(() => {
  return (data.value as any)['locations'] ?? []
})

const getStyle = computed(() => {

  return (feature: any) => {
    if (resolve(config, 'value', 'renderer', 0, 'renderer', 'point')) {
      return (config.value as any).renderer[0].renderer.area
    } else return {}
  }
})

const options = computed(() => {
  return {
    pointToLayer: (feature: any, latlng: any) => {
      console.log(feature)
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


const maploaded = () => {
  mounted = true
}
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

  let inBounds = (map.value as any)?.leafletObject.getBounds()

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
  for (const dataStream of (((data.value) as any)?.datastreams ?? [])) {
    for (const renderer of config.value.OGCSstyles) {
      const refreshtime: number = renderer.ObservationrefreshTime ?? 10
      if (!taskListByTime[refreshtime]) taskListByTime[refreshtime] = []
      for (const subrender of renderer.ds_renderer) {

        if (compareDatastream(dataStream, subrender)) {
          if (dataStream.observedArea) {

            const featrueObservedArea = (transformToGeoJson(toRaw(dataStream.observedArea)) as Polygon)

            if (booleanContains(bboxFeature, featrueObservedArea)) {
              taskListByTime[refreshtime].push(dataStream)
            }
          } else {
            if (dataStream.thing && dataStream.thing!.locations && dataStream.thing!.locations[0]) {
              if (booleanContains(bboxFeature, transformToGeoJson(dataStream.thing!.locations[0].location))) {
                taskListByTime[refreshtime].push(dataStream)
              }
            }

            console.log(dataStream.Thing)
          }
        }
      }

    }
  }

  const tasks = []
  for (const [key, _items] of Object.entries(taskListByTime)) {
    const items: Datastream[] = uniq(_items)
    if (items.length > 0) {
      tasks.push(new class extends Task {
        readonly id = Math.random().toString()
        private handle: number | undefined

        invoke() {
          window.clearInterval(this.handle)
        }

        async run() {
          console.log('run')
          console.log(items.map(e => e.iotId))
          //store.value.getObservations(items)
          callEvent(FILTER, { observations: items })

          this.handle = window.setInterval(async () => {

            //store.value.getObservations(items)
            callEvent(FILTER, { observations: items })

          }, (parseInt(key) * 1000))
        }
      }())
    }
  }

  useTaskManager().addTasksAndIvnoke(tasks)


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

</script>

<template>

  <div id="mapholder" class="holder" style="height: 100%">
    <l-map v-if="config.baseMapUrl" id="map" ref="map"
            :center="config.center as PointExpression" :max-zoom="21" :use-global-leaflet="false"
            :zoom="config.zoom"
            style="height: 100%"
            @move="mapmove"
            @ready="maploaded"
    >
      <l-tile-layer :attribution="config.attribution" :options="{maxNativeZoom:19,
        maxZoom:25}" :url="config.baseMapUrl"></l-tile-layer>
      <template v-for="wmsLayer in config.layers" :key="wmsLayer.name">
        <LWmsTileLayer v-if="wmsLayer.type == 'WMSLayer'"
                        :attribution="wmsLayer.attribution"
                        :layers="wmsLayer.name!"
                        :name="wmsLayer.name"
                        :opacity="wmsLayer.opacity"
                        :transparent="true"
                        :url="wmsLayer.service.getOperationUrl('GetMap')"
                        :visible="(wmsLayer as any).checked"
                        format="image/png"
                        layer-type="base">
        </LWmsTileLayer>
        <template v-if="wmsLayer.type == 'WFSLayer'">

          <template v-for="styleID in wmsLayer.styleIds" :key="styleID">
            <!--<template v-if="compareDatastream(wmsLayer.wfs_service?.geoJson as BoxedDatastream, config.styles.find(style=>style.id==styleID)!)">-->
            <l-geo-json v-if="!isPoint(wmsLayer.wfs_service?.geoJson)" ref="thingsLayer"
                        :geojson="filterFeatureCollection(wmsLayer.wfs_service?.geoJson as any,config.styles.find(style=>style.id==styleID)!) as unknown as  GeoJsonObject[]"
                        :options-style="()=>config.styles.find(style=>style.id==styleID)?.renderer.area"></l-geo-json>
            <!-- </template>-->
          </template>
        </template>
        <template v-if="wmsLayer.type == 'WFSLayer'">

          <template v-for="styleID in wmsLayer.styleIds" :key="styleID">
            <!--<template v-if="compareDatastream(wmsLayer.wfs_service?.geoJson as BoxedDatastream, config.styles.find(style=>style.id==styleID)!)">-->
            <l-geo-json v-if="!isPoint(wmsLayer.wfs_service?.geoJson)" ref="thingsLayer"
                        :geojson="filterFeatureCollection(wmsLayer.wfs_service?.geoJson as any,config.styles.find(style=>style.id==styleID)!)"
                        :options-style="()=>config.styles.find(style=>style.id==styleID)?.renderer.area"></l-geo-json>
            <!-- </template>-->
          </template>
        </template>
        <template v-if="wmsLayer.type=='OGCSTA'">
          <template v-for="renderer in config.OGCSstyles" :key="renderer.id">

            <template v-for="location in locations" :key="location['@iot.id']+'markr'">
              <template v-for="thing in location.things??[]" :key="thing['@iot.id']+'markrThing'">
                <template v-if="compareThing(thing, renderer)">
                  <template v-if="isFeatureCollection(location.location)">
                    <l-geo-json v-if="!isPoint(location.location)" ref="thingsLayer"
                                :geojson="location.location" :options="options"
                                :options-style="()=>renderer.renderer.area"></l-geo-json>
                  </template>


                  <l-marker
                    v-if="getPoint(location.location)"
                    :lat-lng="getPoint(location.location) as  L.LatLngExpression"
                    @click="openThing[thing.iotId??'null']=(openThing[thing.iotId??'null'])?!openThing[thing.iotId??'null']:true">
                    <l-icon class-name="someExtraClass">
                      <template v-if="renderer.renderer.point_render_as=='icon'">
                        <div :style="{background:renderer.renderer.pointPin.color}" class="pin icon">
                          <div class="inner">
                            <!--<IconWidget currentIcon="add_location_alt"
                                        v-bind="renderer.renderer.point"></IconWidget>-->
                          </div>
                        </div>


                      </template>
                      <template v-if="renderer.renderer.point_render_as=='prop'">
                        <div :style="{background:renderer.renderer.pointPin.color}"
                              class="pin contain marker">
                          <div class="inner">
                            {{ thing[((renderer as IRenderer).renderer.point_prop) ?? ''] }}
                          </div>
                        </div>
                      </template>
                    </l-icon>
                  </l-marker>
                  <template v-for="(datastream) in thing.datastreams??[]" :key="(datastream as BoxedDatastream).iotId">
                    <template v-for="subrenderer in renderer.ds_renderer" :key="subrenderer.id">

                      <template
                        v-if="compareDatastream(datastream as BoxedDatastream, subrenderer) /*&& openThing[thing['@iot.id']]*/">
                        <l-geo-json ref="thingsLayer"
                                    :geojson="transformToGeoJson(datastream.observedArea)" :options="options"
                                    :options-style="()=>subrenderer.renderer.area"></l-geo-json>
                        <l-marker
                          v-if="((subrenderer.placement == ERefType.Thing)?getPoint(location.location):getPointformArea(transformToGeoJson(datastream.observedArea))) as L.LatLngExpression"
                          :lat-lng="((subrenderer.placement == ERefType.Thing)?getPoint(location.location):getPointformArea(transformToGeoJson(datastream.observedArea))) as L.LatLngExpression">
                          <l-icon class-name="someExtraClass">
                            <template v-if="subrenderer.renderer.point_render_as=='icon'">
                              <div :style="{background:subrenderer.renderer.pointPin.color}"
                                    class="pin icon round">
                                <div class="inner">
                                  <!--<IconWidget
                                      v-bind="subrenderer.renderer.point"></IconWidget>-->
                                </div>
                                <template v-if="datastream.observations">
                                  <component
                                    :is="getById(subrenderer.observation?.component)?.component"
                                    v-if="getById(subrenderer.observation?.component)"
                                    v-bind="{...subrenderer.observation?.setting,data:datastream.observations[0]?.result}"></component>
                                </template>
                              </div>
                            </template>
                            <template v-if="subrenderer.renderer.point_render_as=='prop'">
                              <div :style="{background:subrenderer.renderer.pointPin.color}"
                                    class="pin round contain">
                                <div class="inner">
                                  {{ datastream[((subrenderer as IRenderer).renderer.point_prop) ?? ''] }}
                                </div>
                                <template v-if="datastream.observations">
                                  <component
                                    :is="getById(subrenderer.observation?.component)?.component"
                                    v-if="getById(subrenderer.observation?.component)"
                                    v-bind="{...subrenderer.observation?.setting,data:datastream.observations[0]?.result}"></component>
                                </template>
                              </div>
                            </template>
                            <template v-if="subrenderer.renderer.point_render_as=='none'">
                              <template v-if="datastream.observations">
                                <component
                                  :is="getById(subrenderer.observation?.component)?.component"
                                  v-if="getById(subrenderer.observation?.component)"
                                  v-bind="{...subrenderer.observation?.setting,data:datastream.observations[0]?.result}"></component>
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

</style>
