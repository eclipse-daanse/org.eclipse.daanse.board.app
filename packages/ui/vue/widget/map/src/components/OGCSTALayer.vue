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

const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER)

// Pre-compute all matched things and datastreams in a flat list
// This eliminates O(renderers × locations × things × datastreams × ds_renderers) template evaluations
const matchedItems = computed(() => {
  const things: Array<{
    key: string
    thing: any
    location: any
    renderer: any
    point: any
    geoJson: any
    isArea: boolean
  }> = []

  const datastreams: Array<{
    key: string
    datastream: any
    thing: any
    location: any
    renderer: any
    subrenderer: any
    point: any
    observedAreaGeoJson: any
    showMarker: boolean
  }> = []

  for (const renderer of props.renderers) {
    for (const location of props.locations) {
      const locationThings = location.things ?? []
      for (const thing of locationThings) {
        if (!props.compareThing(thing, renderer)) continue

        const thingId = thing['@iot.id'] || thing.iotId || ''
        const locationId = location['@iot.id'] || ''
        const point = props.getPoint(location.location)
        const isFc = props.isFeatureCollection(location.location)
        const isPt = props.isPoint(location.location)

        things.push({
          key: `${renderer.id}-${locationId}-${thingId}`,
          thing,
          location,
          renderer,
          point,
          geoJson: (isFc && !isPt) ? location.location : null,
          isArea: isFc && !isPt
        })

        const thingDatastreams = thing.datastreams ?? []
        for (const datastream of thingDatastreams) {
          const dsId = (datastream as BoxedDatastream).iotId || ''
          for (const subrenderer of renderer.ds_renderer) {
            if (!props.compareDatastream(datastream as BoxedDatastream, subrenderer)) continue

            const observedAreaGeoJson = datastream.observedArea
              ? props.transformToGeoJson(datastream.observedArea)
              : null

            const dsPoint = subrenderer.placement === ERefType.Thing
              ? point
              : (observedAreaGeoJson ? props.getPointformArea(observedAreaGeoJson) : null)

            const hasNonLayerObs = subrenderer.observations?.some(
              (obs: any) => !props.getById(obs.component)?.isLayerRenderer
            )
            const showMarker = (subrenderer.renderer.point_render_as !== 'none' || hasNonLayerObs) && !!dsPoint

            datastreams.push({
              key: `${renderer.id}-${subrenderer.id}-${dsId}`,
              datastream,
              thing,
              location,
              renderer,
              subrenderer,
              point: dsPoint,
              observedAreaGeoJson,
              showMarker
            })
          }
        }
      }
    }
  }

  return { things, datastreams }
})

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
  <!-- Thing markers/areas - flat list, no nested loops -->
  <template v-for="item in matchedItems.things" :key="item.key + 'area'">
    <l-geo-json
      v-if="item.isArea"
      ref="thingsLayer"
      :geojson="item.location.location"
      :options="layerOptions"
      :options-style="() => isThingSelected(item.thing)
        ? { ...item.renderer.renderer.area, fillColor: highlightColor, color: highlightColor, fillOpacity: 0.5, weight: 3 }
        : item.renderer.renderer.area as any"
    />
  </template>

  <template v-for="item in matchedItems.things" :key="item.key + 'marker'">
    <l-marker
      v-if="item.point"
      :lat-lng="item.point as L.LatLngExpression"
      :options="{ pane: markerPane }"
      @click="handleThingClick(item.thing, item.location, item.renderer)"
    >
      <l-icon class-name="someExtraClass">
        <MapMarker
          :render-as="item.renderer.renderer.point_render_as"
          :background-color="item.renderer.renderer.pointPin?.color"
          :icon-config="item.renderer.renderer.point"
          :property-value="item.thing[item.renderer.renderer.point_prop ?? '']"
          :image-url="item.renderer.renderer.point_image_url"
          :image-size="item.renderer.renderer.point_image_size || 32"
          :is-solid="item.renderer.renderer.pointPin?.solid"
          :is-selected="isThingSelected(item.thing)"
          :selection-color="highlightColor"
        />
      </l-icon>
    </l-marker>
  </template>

  <!-- Datastream areas -->
  <template v-for="item in matchedItems.datastreams" :key="item.key + 'dsarea'">
    <l-geo-json
      v-if="item.observedAreaGeoJson"
      ref="thingsLayer"
      :geojson="item.observedAreaGeoJson"
      :options="{ ...layerOptions, pane: areaPane || 'overlayPane' }"
      :options-style="()=>item.subrenderer.renderer.area as any"
    />
  </template>

  <!-- Datastream layer-based observation renderers -->
  <template v-for="item in matchedItems.datastreams" :key="item.key + 'dslayer'">
    <template v-if="item.subrenderer.observations && item.datastream.observations">
      <template v-for="obsRenderer in item.subrenderer.observations" :key="obsRenderer.component">
        <template v-if="getById(obsRenderer.component)?.isLayerRenderer">
          <template v-for="observation in item.datastream.observations" :key="observation.iotId">
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
  </template>

  <!-- Datastream markers -->
  <template v-for="item in matchedItems.datastreams" :key="item.key + 'dsmarker'">
    <l-marker
      v-if="item.showMarker"
      :lat-lng="item.point as L.LatLngExpression"
      :options="{ pane: markerPane }"
      @click="handleDatastreamMarkerClick(item.datastream as BoxedDatastream, item.thing, item.subrenderer)"
    >
      <l-icon class-name="someExtraClass">
        <MapMarker
          :render-as="item.subrenderer.renderer.point_render_as"
          :background-color="item.subrenderer.renderer.pointPin?.color"
          :icon-config="item.subrenderer.renderer.point"
          :property-value="item.datastream[item.subrenderer.renderer.point_prop ?? '']"
          :image-url="item.subrenderer.renderer.point_image_url"
          :image-size="item.subrenderer.renderer.point_image_size || 32"
          :is-solid="item.subrenderer.renderer.pointPin?.solid"
          :is-round="true"
          :is-selected="isThingSelected(item.thing)"
          :selection-color="highlightColor"
        >
          <template #observation>
            <template v-if="item.datastream.observations">
              <template v-for="obsRenderer in item.subrenderer.observations" :key="obsRenderer.component">
                <component
                  :is="getById(obsRenderer.component)?.component"
                  v-if="getById(obsRenderer.component) && !getById(obsRenderer.component)?.isLayerRenderer"
                  :config="obsRenderer.setting"
                  :data="item.datastream.observations[item.subrenderer.renderer.point_render_as === 'none' ? 0 : item.datastream.observations.length-1]?.result"
                  :key="item.datastream.observations[item.subrenderer.renderer.point_render_as === 'none' ? 0 : item.datastream.observations.length-1]?.phenomenonTime"
                  :marker-size="item.subrenderer.renderer.point_render_as === 'image' ? 0 : item.subrenderer.renderer.point_render_as === 'none' ? (item.renderer.renderer.point_image_size||32) : 45"
                />
              </template>
            </template>
          </template>
        </MapMarker>
      </l-icon>
    </l-marker>
  </template>
</template>
