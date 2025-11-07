<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { ref } from 'vue'
import { LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import { type BoxedDatastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/interfaces/OgcStaConfiguration'
import L from 'leaflet'
import { ERefType } from '../api/Renderer'
import MapMarker from './MapMarker.vue'

interface OGCSTALayerProps {
  locations: any[]
  renderers: any[]
  layerOptions: any
  markerPane: string
  compareThing: (thing: any, renderer: any) => boolean
  compareDatastream: (datastream: any, renderer: any) => boolean
  isFeatureCollection: (obj: any) => boolean
  isPoint: (obj: any) => boolean
  getPoint: (obj: any) => any
  getPointformArea: (obj: any) => any
  transformToGeoJson: (obj: any) => any
  getById: (id: string) => any
}

const props = defineProps<OGCSTALayerProps>()
const openThing = ref<{ [key: string]: boolean }>({})
</script>

<template>
  <template v-for="renderer in renderers" :key="renderer.id">
    <template v-for="location in locations" :key="location['@iot.id']+'markr'">
      <template v-for="thing in location.things??[]" :key="thing['@iot.id']+'markrThing'">
        <template v-if="compareThing(thing, renderer)">
          <template v-if="isFeatureCollection(location.location)">
            <l-geo-json
              v-if="!isPoint(location.location)"
              ref="thingsLayer"
              :geojson="location.location"
              :options="layerOptions"
              :options-style="()=>renderer.renderer.area as any"
            />
          </template>

          <l-marker
            v-if="getPoint(location.location)"
            :lat-lng="getPoint(location.location) as L.LatLngExpression"
            :options="{ pane: markerPane }"
            @click="openThing[thing.iotId??'null']=(openThing[thing.iotId??'null'])?!openThing[thing.iotId??'null']:true"
          >
            <l-icon class-name="someExtraClass">
              <MapMarker
                :render-as="renderer.renderer.point_render_as"
                :background-color="renderer.renderer.pointPin?.color"
                :icon-config="renderer.renderer.point"
                :property-value="thing[renderer.renderer.point_prop ?? '']"
                :image-url="renderer.renderer.point_image_url"
                :image-size="renderer.renderer.point_image_size || 32"
              />
            </l-icon>
          </l-marker>

          <template v-for="(datastream) in thing.datastreams??[]" :key="(datastream as BoxedDatastream).iotId">
            <template v-for="subrenderer in renderer.ds_renderer" :key="subrenderer.id">
              <template v-if="compareDatastream(datastream as BoxedDatastream, subrenderer)">
                <l-geo-json
                  ref="thingsLayer"
                  :geojson="transformToGeoJson(datastream.observedArea)"
                  :options="layerOptions"
                  :options-style="()=>subrenderer.renderer.area as any"
                />

                <l-marker
                  v-if="((subrenderer.placement == ERefType.Thing)?getPoint(location.location):getPointformArea(transformToGeoJson(datastream.observedArea))) as L.LatLngExpression"
                  :lat-lng="((subrenderer.placement == ERefType.Thing)?getPoint(location.location):getPointformArea(transformToGeoJson(datastream.observedArea))) as L.LatLngExpression"
                  :options="{ pane: markerPane }"
                >
                  <l-icon class-name="someExtraClass">
                    <MapMarker
                      :render-as="subrenderer.renderer.point_render_as"
                      :background-color="subrenderer.renderer.pointPin?.color"
                      :icon-config="subrenderer.renderer.point"
                      :property-value="datastream[subrenderer.renderer.point_prop ?? '']"
                      :image-url="subrenderer.renderer.point_image_url"
                      :image-size="subrenderer.renderer.point_image_size || 32"
                      :is-round="true"
                    >
                      <template #observation>
                        <template v-if="datastream.observations">
                          <component
                            :is="getById(subrenderer.observation?.component)?.component"
                            v-if="getById(subrenderer.observation?.component)"
                            :config="subrenderer.observation?.setting"
                            :data="datastream.observations[subrenderer.renderer.point_render_as === 'none' ? 0 : datastream.observations.length-1]?.result"
                            :key="datastream.observations[subrenderer.renderer.point_render_as === 'none' ? 0 : datastream.observations.length-1]?.phenomenonTime"
                            :marker-size="subrenderer.renderer.point_render_as === 'image' ? 0 : subrenderer.renderer.point_render_as === 'none' ? (renderer.renderer.point_image_size||32) : 45"
                          />
                        </template>
                      </template>
                    </MapMarker>
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