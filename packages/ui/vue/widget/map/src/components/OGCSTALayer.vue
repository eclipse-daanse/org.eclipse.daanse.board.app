<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { ref, watch } from 'vue'
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
  areaPane?: string
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

// Debug logging
watch(() => props.locations, (newVal) => {
  console.log('[OGCSTALayer] Locations:', newVal)
  if (newVal && newVal.length > 0) {
    console.log('[OGCSTALayer] First location:', newVal[0])
    console.log('[OGCSTALayer] Has things:', newVal[0]?.things?.length)
    if (newVal[0]?.things?.[0]) {
      console.log('[OGCSTALayer] First thing:', newVal[0].things[0])
      console.log('[OGCSTALayer] Datastreams:', newVal[0].things[0].datastreams?.length)
      if (newVal[0].things[0].datastreams?.[0]) {
        console.log('[OGCSTALayer] First datastream:', newVal[0].things[0].datastreams[0])
        console.log('[OGCSTALayer] Observations:', newVal[0].things[0].datastreams[0].observations?.length)
      }
    }
  }
}, { immediate: true })

watch(() => props.renderers, (newVal) => {
  console.log('[OGCSTALayer] Renderers:', newVal)
  if (newVal && newVal.length > 0) {
    console.log('[OGCSTALayer] First renderer thing conditions:', newVal[0].thing)
    console.log('[OGCSTALayer] First renderer ds_renderer:', newVal[0].ds_renderer)
    if (newVal[0].ds_renderer?.[0]) {
      console.log('[OGCSTALayer] First ds_renderer conditions:', newVal[0].ds_renderer[0].datastream)
      console.log('[OGCSTALayer] First ds_renderer observations:', newVal[0].ds_renderer[0].observations)
    }
  }
}, { immediate: true })

// Check which things match
watch(() => [props.locations, props.renderers] as const, ([locations, renderers]) => {
  if (!locations || !renderers || locations.length === 0 || renderers.length === 0) return

  console.log('[OGCSTALayer] Checking thing matches...')
  let matchedThingCount = 0
  let matchedDatastreamCount = 0

  for (const location of locations) {
    if (!location.things) continue
    for (const thing of location.things) {
      for (const renderer of renderers) {
        if (props.compareThing(thing, renderer)) {
          matchedThingCount++
          console.log('[OGCSTALayer] ✓ Thing matched:', thing.name, thing.iotId)
          console.log('[OGCSTALayer]   Location:', location.location)
          console.log('[OGCSTALayer]   Has point:', !!props.getPoint(location.location))
          if (props.getPoint(location.location)) {
            console.log('[OGCSTALayer]   Point coords:', props.getPoint(location.location))
            console.log('[OGCSTALayer]   Renderer point config:', renderer.renderer.point)
            console.log('[OGCSTALayer]   Renderer point_render_as:', renderer.renderer.point_render_as)
          }

          // Check datastreams
          if (thing.datastreams && renderer.ds_renderer) {
            for (const datastream of thing.datastreams) {
              for (const dsRenderer of renderer.ds_renderer) {
                if (props.compareDatastream(datastream, dsRenderer)) {
                  matchedDatastreamCount++
                  console.log('[OGCSTALayer]   ✓ Datastream matched:', datastream.name, datastream.iotId)
                  console.log('[OGCSTALayer]     Observations count:', datastream.observations?.length || 0)
                  console.log('[OGCSTALayer]     Has observation renderers:', dsRenderer.observations?.length || 0)
                }
              }
            }
          }
        }
      }
    }
  }

  console.log(`[OGCSTALayer] Total matched: ${matchedThingCount} things, ${matchedDatastreamCount} datastreams`)
}, { immediate: true })
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
                  :options="{ ...layerOptions, pane: areaPane || 'overlayPane' }"
                  :options-style="()=>subrenderer.renderer.area as any"
                />

                <!-- Layer-based renderers (e.g., GeoJSON) -->
                <template v-if="subrenderer.observations && datastream.observations">
                  <template v-for="obsRenderer in subrenderer.observations" :key="obsRenderer.component">
                    <template v-if="getById(obsRenderer.component)?.isLayerRenderer">
                      <template v-for="observation in datastream.observations" :key="observation.iotId">
                        <component
                          :is="getById(obsRenderer.component)?.component"
                          v-if="getById(obsRenderer.component) && observation.result"
                          :config="obsRenderer.setting"
                          :data="observation.result"
                          :marker-size="0"
                        />
                      </template>
                    </template>
                  </template>
                </template>

                <!-- Marker-based renderers (e.g., ValueUnit, TLC) -->
                <l-marker
                  v-if="subrenderer.observations && subrenderer.observations.some((obs: any) => !getById(obs.component)?.isLayerRenderer) && ((subrenderer.placement == ERefType.Thing)?getPoint(location.location):getPointformArea(transformToGeoJson(datastream.observedArea))) as L.LatLngExpression"
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
                          <template v-for="obsRenderer in subrenderer.observations" :key="obsRenderer.component">
                            <component
                              :is="getById(obsRenderer.component)?.component"
                              v-if="getById(obsRenderer.component) && !getById(obsRenderer.component)?.isLayerRenderer"
                              :config="obsRenderer.setting"
                              :data="datastream.observations[subrenderer.renderer.point_render_as === 'none' ? 0 : datastream.observations.length-1]?.result"
                              :key="datastream.observations[subrenderer.renderer.point_render_as === 'none' ? 0 : datastream.observations.length-1]?.phenomenonTime"
                              :marker-size="subrenderer.renderer.point_render_as === 'image' ? 0 : subrenderer.renderer.point_render_as === 'none' ? (renderer.renderer.point_image_size||32) : 45"
                            />
                          </template>
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
