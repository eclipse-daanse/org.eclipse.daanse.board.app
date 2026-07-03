<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { ref, computed, onErrorCaptured, toRaw, type Ref } from 'vue'
import { LGeoJson, LMarker, LIcon, LTooltip } from '@vue-leaflet/vue-leaflet'
import { type BoxedDatastream } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
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
  tooltipThingId?: string | null
  tooltipContent?: string | null
  currentZoom?: number
  clusterGlobal?: boolean
}

const props = defineProps<OGCSTALayerProps>()
const openThing = ref<{ [key: string]: boolean }>({})

// Safety net for a known vue-leaflet (0.10.1) teardown race: when markers are
// unmounted during cluster/zoom transitions, Leaflet's removeLayer can touch an
// already-detached layer and throw `_leaflet_id`. It is harmless (the layer is
// going away anyway), but must be caught so it doesn't tear down the marker layer.
// We log it instead of swallowing it silently, and let every other error propagate.
// TODO: re-evaluate removing this once verified in-app that reduced churn no longer triggers it.
onErrorCaptured((err) => {
  if (err instanceof TypeError && err.message.includes('_leaflet_id')) {
    log('suppressed known vue-leaflet teardown race: %s', err.message)
    return false
  }
})

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
        // Condition matching (compareThing/compareDatastream → resolveObj) reads
        // many properties per datastream. Doing that through Vue's reactive
        // proxies dominated zoom/pan profiles, so match on the raw objects.
        // Reactivity is kept by explicitly touching `observations` below —
        // the store re-assigns it when new observations are merged.
        const rawThing = toRaw(thing)
        if (!props.compareThing(rawThing, renderer)) continue

        const thingId = rawThing['@iot.id'] || rawThing.iotId || ''
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
          // Track the reactive observations reference so observation merges
          // still retrigger this computed (see db4d3512).
          void (datastream as any).observations
          const rawDs = toRaw(datastream) as BoxedDatastream
          const dsId = rawDs.iotId || ''
          for (const subrenderer of renderer.ds_renderer) {
            if (!props.compareDatastream(rawDs, subrenderer)) continue

            const observedAreaGeoJson = (rawDs as any).observedArea
              ? props.transformToGeoJson((rawDs as any).observedArea)
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

const handleThingHover = (thing: any, location: any, renderer: any) => {
  if (!props.widgetId) return

  const payload = new ThingClickPayload()
  payload.id = thing['@iot.id'] || thing.iotId
  payload.name = thing.name
  payload.description = thing.description
  payload.properties = thing.properties
  payload.location = location.location
  payload.rendererId = renderer.id

  eventBus.emit('widget:MapWidget:hover_on_thing', {
    type: 'widget:MapWidget:hover_on_thing',
    widgetId: props.widgetId,
    payload,
    timestamp: Date.now()
  })
}

const handleDatastreamHover = (datastream: BoxedDatastream, thing: any) => {
  if (!props.widgetId) return

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

  eventBus.emit('widget:MapWidget:hover_on_datastream', {
    type: 'widget:MapWidget:hover_on_datastream',
    widgetId: props.widgetId,
    payload,
    timestamp: Date.now()
  })
}

const isActionTooltipVisible = (thing: any) => {
  if (!props.tooltipThingId) return false
  const thingId = thing['@iot.id'] || thing.iotId
  return thingId === props.tooltipThingId
}

const getActionTooltipContent = (thing: any) => {
  if (!isActionTooltipVisible(thing)) return null
  return props.tooltipContent || null
}

const getThingTooltip = (thing: any) => {
  return thing.name || thing.description || thing.iotId || ''
}

const getDatastreamTooltip = (datastream: any, thing: any) => {
  const parts = []
  if (thing.name) parts.push(thing.name)
  if (datastream.name) parts.push(datastream.name)
  const observations = datastream.observations || []
  if (observations.length > 0) {
    const latest = observations[observations.length - 1]
    const unit = datastream.unitOfMeasurement?.symbol || ''
    parts.push(`${latest.result} ${unit}`)
  }
  return parts.join(' - ')
}

// Check if a thing is selected
const isThingSelected = (thing: any): boolean => {
  if (!props.selectedThingId) return false
  const thingId = thing['@iot.id'] || thing.iotId
  return thingId === props.selectedThingId
}

// Get highlight color with default
const highlightColor = computed(() => props.selectionHighlightColor || '#ff0000')

// Whether any renderer actually uses zoom-dependent features. If none do,
// effectiveZoom stays constant so zooming/panning never re-renders the
// (potentially hundreds of) markers — Leaflet moves them via CSS on its own.
const usesZoomSettings = (s: any): boolean =>
  s != null && (s.iconMinZoom != null || s.iconScaleWithZoom || s.labelMinZoom != null ||
    s.labelScaleWithZoom || s.clusterEnabled)

const zoomFeaturesActive = computed(() =>
  props.renderers.some((r: any) =>
    usesZoomSettings(r.renderer) || (r.ds_renderer ?? []).some((d: any) => usesZoomSettings(d.renderer))
  )
)

const effectiveZoom = computed(() => zoomFeaturesActive.value ? (props.currentZoom ?? 99) : 99)

// Zoom-based visibility and scaling for icons
const isIconVisible = (renderer: any): boolean => {
  const settings = renderer.renderer
  if (settings?.iconMinZoom == null) return true
  return effectiveZoom.value >= settings.iconMinZoom
}

const getIconScale = (renderer: any): number => {
  const settings = renderer.renderer
  if (!settings?.iconScaleWithZoom) return 1
  const fullSizeZoom = settings.iconFullSizeZoom ?? 18
  const zoom = props.currentZoom ?? fullSizeZoom
  if (zoom >= fullSizeZoom) return 1
  return Math.max(0.2, zoom / fullSizeZoom)
}

// Zoom-based visibility and scaling for labels
const isLabelVisible = (renderer: any): boolean => {
  const settings = renderer.renderer
  if (settings?.labelMinZoom == null) return true
  return effectiveZoom.value >= settings.labelMinZoom
}

const getLabelScale = (renderer: any): number => {
  const settings = renderer.renderer
  if (!settings?.labelScaleWithZoom) return 1
  const fullSizeZoom = settings.labelFullSizeZoom ?? 18
  const zoom = props.currentZoom ?? fullSizeZoom
  if (zoom >= fullSizeZoom) return 1
  return Math.max(0.2, zoom / fullSizeZoom)
}

// Clustering: should this renderer cluster at current zoom?
const shouldCluster = (renderer: any): boolean => {
  const settings = renderer.renderer
  if (!settings?.clusterEnabled) return false
  const clusterBelow = settings.clusterBelowZoom ?? 14
  return effectiveZoom.value < clusterBelow
}

// Grid-based clustering: divides the map into cells of clusterRadius pixels.
// Each cell that contains more than one marker becomes a cluster.
// This prevents the greedy "chain" effect where distant markers get lumped together.
const gridCluster = <T extends { point: any; renderer: any }>(
  items: T[],
  keyPrefix: string
) => {
  const clusters: Array<{
    key: string
    point: any
    count: number
    renderer: any
    items: T[]
  }> = []
  const unclustered: T[] = []

  // Group items that should cluster. Per renderer by default; with
  // clusterGlobal all cluster-enabled renderers share one group so nearby
  // markers of different renderers merge into a single cluster.
  const byGroup = new Map<string, T[]>()
  for (const item of items) {
    if (!item.point) continue
    if (!shouldCluster(item.renderer)) {
      unclustered.push(item)
      continue
    }
    const gid = props.clusterGlobal ? '__global__' : (item.renderer.id ?? 'default')
    if (!byGroup.has(gid)) byGroup.set(gid, [])
    byGroup.get(gid)!.push(item)
  }

  for (const [rid, rendererItems] of byGroup) {
    const renderer = rendererItems[0].renderer

    // Global group: largest configured radius wins so the merge is at least
    // as aggressive as each participating renderer expects.
    const radiusPx = props.clusterGlobal
      ? Math.max(...rendererItems.map(g => g.renderer.renderer?.clusterRadius ?? 40))
      : (renderer.renderer?.clusterRadius ?? 40)
    const zoom = props.currentZoom ?? 14
    // Grid cell size in degrees: convert pixel radius to degrees at current zoom
    const metersPerPixel = 156543.03 / Math.pow(2, zoom)
    const cellSize = (radiusPx * metersPerPixel) / 111320

    // Assign each item to a grid cell
    const cells = new Map<string, T[]>()
    for (const item of rendererItems) {
      const cellX = Math.floor(item.point[1] / cellSize) // lng
      const cellY = Math.floor(item.point[0] / cellSize) // lat
      const cellKey = `${cellX},${cellY}`
      if (!cells.has(cellKey)) cells.set(cellKey, [])
      cells.get(cellKey)!.push(item)
    }

    for (const [cellKey, cellItems] of cells) {
      if (cellItems.length === 1) {
        unclustered.push(cellItems[0])
      } else {
        let sumLat = 0, sumLng = 0
        for (const g of cellItems) {
          sumLat += g.point[0]
          sumLng += g.point[1]
        }
        // The cluster is styled after the renderer contributing the most
        // markers, so global clusters look like per-renderer ones unless
        // they genuinely mix renderers — then the majority wins.
        let clusterRenderer = renderer
        if (props.clusterGlobal) {
          const countByRenderer = new Map<any, number>()
          for (const g of cellItems) {
            countByRenderer.set(g.renderer, (countByRenderer.get(g.renderer) ?? 0) + 1)
          }
          let best = 0
          for (const [r, n] of countByRenderer) {
            if (n > best) { best = n; clusterRenderer = r }
          }
        }
        clusters.push({
          key: `${keyPrefix}-${rid}-${cellKey}`,
          point: [sumLat / cellItems.length, sumLng / cellItems.length],
          count: cellItems.length,
          renderer: clusterRenderer,
          items: cellItems,
        })
      }
    }
  }

  return { clusters, unclustered }
}

// Grid-clustered marker sets, recomputed reactively. Vue's keyed diffing only
// mounts/unmounts the markers whose keys actually change on a cluster/zoom
// transition, so we avoid the mass destroy/create that used to trigger the
// vue-leaflet removeLayer race (see onErrorCaptured above).
const clusteredThings = computed(() =>
  gridCluster(matchedItems.value.things, 'cluster')
)
const clusteredDatastreams = computed(() =>
  gridCluster(matchedItems.value.datastreams.filter(i => i.showMarker), 'ds-cluster')
)

// Areas belong to a location/observedArea, not to a thing or renderer. Emit each
// unique geometry once instead of once per (renderer × thing [× datastream × ds_renderer]),
// which previously stacked dozens of identical polygons on top of each other.
const thingAreas = computed(() => {
  const seen = new Map<string, any>()
  for (const item of matchedItems.value.things) {
    if (!item.isArea || !item.geoJson) continue
    const locId = item.location['@iot.id'] || item.location.iotId || item.key
    if (!seen.has(locId)) {
      seen.set(locId, {
        key: `area-${locId}`,
        geojson: item.location.location,
        area: item.renderer.renderer.area,
        selected: false,
      })
    }
    // an area counts as selected if ANY thing on it is selected
    if (isThingSelected(item.thing)) seen.get(locId)!.selected = true
  }
  return [...seen.values()]
})

const datastreamAreas = computed(() => {
  const seen = new Map<string, any>()
  for (const item of matchedItems.value.datastreams) {
    if (!item.observedAreaGeoJson) continue
    const dsId = item.datastream.iotId || (item.datastream as any)['@iot.id'] || item.key
    if (seen.has(dsId)) continue
    seen.set(dsId, {
      key: `dsarea-${dsId}`,
      geojson: item.observedAreaGeoJson,
      area: item.subrenderer.renderer.area,
    })
  }
  return [...seen.values()]
})
</script>

<template>
  <!-- Thing areas — one <l-geo-json> per unique location geometry -->
  <template v-for="area in thingAreas" :key="area.key">
    <l-geo-json
      :geojson="area.geojson"
      :options="layerOptions"
      :options-style="() => area.selected
        ? { ...area.area, fillColor: highlightColor, color: highlightColor, fillOpacity: 0.5, weight: 3 }
        : area.area as any"
    />
  </template>

  <!-- Thing cluster markers -->
  <template v-for="cluster in clusteredThings.clusters" :key="cluster.key">
    <l-marker
      v-if="isIconVisible(cluster.renderer)"
      :lat-lng="cluster.point as L.LatLngExpression"
      :options="{ pane: markerPane }"
    >
      <l-icon class-name="someExtraClass">
        <div class="cluster-marker" :style="{ background: cluster.renderer.renderer.pointPin?.color || '#3388ff' }">
          {{ cluster.count }}
        </div>
      </l-icon>
      <l-tooltip>{{ cluster.count }} items</l-tooltip>
    </l-marker>
  </template>

  <!-- Unclustered thing markers -->
  <template v-for="item in clusteredThings.unclustered" :key="item.key + 'marker'">
    <l-marker
      v-if="item.point && isIconVisible(item.renderer)"
      :lat-lng="item.point as L.LatLngExpression"
      :options="{ pane: markerPane }"
      @click="handleThingClick(item.thing, item.location, item.renderer)"
      @mouseenter="handleThingHover(item.thing, item.location, item.renderer)"
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
          :scale="getIconScale(item.renderer)"
        />
      </l-icon>
      <l-tooltip
        v-if="isLabelVisible(item.renderer)"
        :options="{
          permanent: isActionTooltipVisible(item.thing),
          direction: 'top',
          offset: [0, -20]
        }"
      >
        <span v-if="getLabelScale(item.renderer) !== 1" :style="{ transform: `scale(${getLabelScale(item.renderer)})`, display: 'inline-block', transformOrigin: 'center' }">
          {{ getActionTooltipContent(item.thing) || getThingTooltip(item.thing) }}
        </span>
        <template v-else>{{ getActionTooltipContent(item.thing) || getThingTooltip(item.thing) }}</template>
      </l-tooltip>
    </l-marker>
  </template>

  <!-- Datastream areas — one per unique observedArea -->
  <template v-for="area in datastreamAreas" :key="area.key">
    <l-geo-json
      :geojson="area.geojson"
      :options="{ ...layerOptions, pane: areaPane || 'overlayPane' }"
      :options-style="() => area.area as any"
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

  <!-- Datastream cluster markers -->
  <template v-for="cluster in clusteredDatastreams.clusters" :key="cluster.key">
    <l-marker
      v-if="isIconVisible(cluster.renderer)"
      :lat-lng="cluster.point as L.LatLngExpression"
      :options="{ pane: markerPane }"
    >
      <l-icon class-name="someExtraClass">
        <div class="cluster-marker" :style="{ background: cluster.renderer.renderer.pointPin?.color || '#3388ff' }">
          {{ cluster.count }}
        </div>
      </l-icon>
      <l-tooltip>{{ cluster.count }} items</l-tooltip>
    </l-marker>
  </template>

  <!-- Unclustered datastream markers -->
  <template v-for="item in clusteredDatastreams.unclustered" :key="item.key + 'dsmarker'">
    <l-marker
      v-if="item.showMarker && isIconVisible(item.renderer)"
      :lat-lng="item.point as L.LatLngExpression"
      :options="{ pane: markerPane }"
      @click="handleDatastreamMarkerClick(item.datastream as BoxedDatastream, item.thing, item.subrenderer)"
      @mouseenter="handleDatastreamHover(item.datastream as BoxedDatastream, item.thing)"
    >
      <l-tooltip v-if="isLabelVisible(item.renderer)">
        <span v-if="getLabelScale(item.renderer) !== 1" :style="{ transform: `scale(${getLabelScale(item.renderer)})`, display: 'inline-block', transformOrigin: 'center' }">
          {{ getDatastreamTooltip(item.datastream, item.thing) }}
        </span>
        <template v-else>{{ getDatastreamTooltip(item.datastream, item.thing) }}</template>
      </l-tooltip>
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
          :scale="getIconScale(item.renderer)"
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

<style scoped>
.cluster-marker {
  min-width: 32px;
  min-height: 32px;
  padding: 4px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.8);
  transform: translate(-50%, -50%);
}
</style>
