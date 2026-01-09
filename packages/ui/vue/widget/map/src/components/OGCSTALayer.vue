<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { ref, watch, computed, type Ref } from 'vue'
import { LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import { type BoxedDatastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/interfaces/OgcStaConfiguration'
import L from 'leaflet'
import { ERefType } from '../api/Renderer'
import MapMarker from './MapMarker.vue'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { ThingClickPayload } from '../gen/ThingClickPayload'
import { DatastreamClickPayload } from '../gen/DatastreamClickPayload'
import { LocationClickPayload } from '../gen/LocationClickPayload'
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger'

const log = loggerFactory.createLogger('daanse:maps:click')

interface OGCSTALayerProps {
  locations: any[]
  renderers: any[]
  layerOptions: any
  markerPane: string
  areaPane?: string
  widgetId: string | undefined
  compareThing: (thing: any, renderer: any) => boolean
  compareDatastream: (datastream: any, renderer: any) => boolean
  isFeatureCollection: (obj: any) => boolean
  isPoint: (obj: any) => boolean
  getPoint: (obj: any) => any
  getPointformArea: (obj: any) => any
  transformToGeoJson: (obj: any) => any
  getById: (id: string) => any
  selectedThingId?: string | null
  selectionHighlightColor?: string
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
const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER)

const emitThingClick = (thing: any, location: any, renderer: any) => {
  if (!props.widgetId) return

  const payload = new ThingClickPayload()
  payload.id = thing['@iot.id'] || thing.iotId
  payload.name = thing.name
  payload.description = thing.description
  payload.properties = thing.properties
  payload.location = location.location
  payload.rendererId = renderer.id

  const datastreams = thing.datastreams || thing.Datastreams || []
  payload.datastreams = datastreams.map((ds: any) => ({
    id: ds['@iot.id'] || ds.iotId,
    name: ds.name,
    observedProperty: ds.ObservedProperty?.name || ds.observedProperty?.name
  }))

  const event = {
    type: 'widget:MapWidget:click_on_thing',
    widgetId: props.widgetId,
    payload: payload,
    timestamp: Date.now()
  }

  console.log('🗺️ Map Widget: Emitting thing click event', event)
  eventBus.emit('widget:MapWidget:click_on_thing', event)
}

const emitDatastreamClick = (datastream: BoxedDatastream, thing: any, subrenderer: any) => {
  log('Emitting datastream click, widgetId: %s', props.widgetId)
  if (!props.widgetId) {
    log('⚠️ widgetId is undefined, not emitting event')
    return
  }

  const payload = new DatastreamClickPayload()
  payload.id = datastream.iotId || (datastream as any)['@iot.id']
  payload.name = datastream.name
  payload.thingId = thing['@iot.id'] || thing.iotId
  payload.unitOfMeasurement = datastream.unitOfMeasurement
  payload.observedProperty = datastream.observedProperty?.name

  const observations = datastream.observations || []
  if (observations.length > 0) {
    const latestObs = observations[observations.length - 1]
    payload.latestObservationResult = latestObs.result
    payload.latestObservationTime = latestObs.phenomenonTime
  }

  eventBus.emit('widget:MapWidget:click_on_datastream', {
    type: 'widget:MapWidget:click_on_datastream',
    widgetId: props.widgetId,
    payload: payload,
    timestamp: Date.now()
  })
}

const emitLocationClick = (location: any) => {
  if (!props.widgetId) return

  const payload = new LocationClickPayload()
  payload.id = location['@iot.id'] || location.iotId
  payload.name = location.name
  payload.geometry = location.location

  const things = location.things || location.Things || []
  payload.thingIds = things.map((t: any) => t['@iot.id'] || t.iotId)

  eventBus.emit('widget:MapWidget:click_on_location', {
    type: 'widget:MapWidget:click_on_location',
    widgetId: props.widgetId,
    payload: payload,
    timestamp: Date.now()
  })
}

const handleThingClick = (thing: any, location: any, renderer: any) => {
  log('🖱️ Thing clicked: %o', thing)
  openThing.value[thing.iotId ?? 'null'] = !openThing.value[thing.iotId ?? 'null']
  emitThingClick(thing, location, renderer)
}

const handleDatastreamMarkerClick = (datastream: BoxedDatastream, thing: any, subrenderer: any) => {
  log('🖱️ Datastream marker clicked: %o', datastream)
  emitDatastreamClick(datastream, thing, subrenderer)
}

// Check if a thing is selected
const isThingSelected = (thing: any): boolean => {
  if (!props.selectedThingId) return false
  const thingId = thing['@iot.id'] || thing.iotId
  return thingId === props.selectedThingId
}

// Get highlight color with default
const highlightColor = computed(() => props.selectionHighlightColor || '#ff0000')
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
              :options-style="() => isThingSelected(thing)
                ? { ...renderer.renderer.area, fillColor: highlightColor, color: highlightColor, fillOpacity: 0.5, weight: 3 }
                : renderer.renderer.area as any"
            />
          </template>

          <l-marker
            v-if="getPoint(location.location)"
            :lat-lng="getPoint(location.location) as L.LatLngExpression"
            :options="{ pane: markerPane }"
            @click="handleThingClick(thing, location, renderer)"
          >
            <l-icon class-name="someExtraClass">
              <MapMarker
                :render-as="renderer.renderer.point_render_as"
                :background-color="renderer.renderer.pointPin?.color"
                :icon-config="renderer.renderer.point"
                :property-value="thing[renderer.renderer.point_prop ?? '']"
                :image-url="renderer.renderer.point_image_url"
                :image-size="renderer.renderer.point_image_size || 32"
                :is-selected="isThingSelected(thing)"
                :selection-color="highlightColor"
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
                  @click="handleDatastreamMarkerClick(datastream as BoxedDatastream, thing, subrenderer)"
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
                      :is-selected="isThingSelected(thing)"
                      :selection-color="highlightColor"
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
