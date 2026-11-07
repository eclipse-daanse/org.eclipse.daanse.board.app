<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0
Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * A map drawn with MapLibre GL (#1266): a vector or raster base that can be
 * tilted and turned, the buildings of the style in 3D, terrain, and the
 * data layers on top - OGC STA things coloured and raised by their latest
 * values, and GeoJSON.
 *
 * The settings are read through useEObject (#1203), so a change in the
 * settings reaches the preview and the board at once. A change of the
 * style loads the style again; any other change of the look takes the
 * map's own additions off and puts them on again, which costs no reload;
 * new data only replaces the data of its source.
 */
import './referencedPackages'
import { computed, inject, onMounted, onUnmounted, ref, shallowRef, toRefs, watch } from 'vue'
import { AttributionControl, Map as MapLibreMap, NavigationControl, type GeoJSONSource, type IControl, type MapMouseEvent } from 'maplibre-gl'
import { TextAttributionControl } from './attribution'
import { PIN_PIXEL_RATIO, PIN_PREFIX, pinImage, pinOfImageId, pinWithIcon } from './pin'
import { MODELS_ID, createModelLayer, type DrawnModelLayer, type ModelCustomLayer } from './models/modelLayer'
import { nearestWithin } from './models/placement'
import { placing } from './models/placementMode'
import { MaplibreFactory } from './gen/MaplibreFactory'
import type { ModelInstance } from './gen/ModelInstance'
import type { ModelLayer } from './gen/ModelLayer'
import { layerId as newId } from './settingsModel'
import { useMapLibreWorker } from './worker'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useRoute } from 'vue-router'
import type { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { EVENT_ACTIONS_REGISTRY, type EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifier, type DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { MapLibreSettings } from './gen/MapLibreSettings'
import { MapLibreWidgetInterfaceImpl } from './gen/MapLibreWidgetInterfaceImpl'
import { modelledSettings } from './settingsModel'
import {
  PREFIX,
  RASTER_ID,
  TERRAIN_ID,
  BUILDINGS_ID,
  beforeIdOf,
  buildingLayerOf,
  buildingSourceOf,
  dataLayerOf,
  exaggerationOf,
  featureLayersOf,
  geoJsonLookOf,
  rasterLayerOf,
  rasterSourceOf,
  wmsLayersOf,
  skyOf,
  sourceIdOf,
  styleExtrusionsOf,
  styleUrlOf,
  terrainSourceOf,
  thingLookOf,
} from './mapStyle'
import { boundsOf, geometriesOf, thingFeaturesOf, thingIdOf, type ThingLike } from './things'
import { useFeatureData, useGeoJsonData, useThingData, type ThingStore } from './useLayerData'
import { symbolsByModel } from './models/symbols'
import { createViewportSender, viewOfMap } from './viewportEvents'
import { WIDGET_TYPE, busEventOf, clickEventOf } from './events/payloads'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)
const stored = defineModel<MapLibreSettings>('configv', { required: true })
const { t } = useTranslation('maplibre')

/* The adoption is shared with the settings, which hold the same object (#1262). */
const config = computed(() => modelledSettings(stored.value))
const settings = useEObject(() => config.value)
const held = () => settings.value ?? config.value

const route = useRoute()
const pageId = (route?.params?.pageid as string) || ''
const eventBus = inject<TinyEmitter | undefined>(identifiers.TINY_EMITTER, undefined)
const actionsRegistry = inject<EventActionsRegistry | undefined>(EVENT_ACTIONS_REGISTRY, undefined)
const repository = inject<DatasourceRepository | undefined>(identifier, undefined)

const container = ref<HTMLElement | null>(null)
const failed = ref(false)
const selectedThingId = ref<string | undefined>()
let map: MapLibreMap | undefined
/*
 * Whether the style is there to add to. Not isStyleLoaded(): that waits for
 * every tile as well, and stays false while the map moves.
 */
let styleReady = false

/* ---------------------------------------------------------------- theme */

/* Dark is the shell's default; only an explicit light theme is light. */
const readDark = () => typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') !== 'light'
const dark = ref(readDark())
let themeObserver: MutationObserver | undefined

/* ----------------------------------------------------------------- data */

const resolveStore = (id: string): ThingStore | undefined => {
  try {
    return repository?.getDatasource(id) as unknown as ThingStore
  } catch {
    return undefined
  }
}
const thingLayers = () => held().thingLayers.toArray()
const geoJsonLayers = () => held().geoJsonLayers.toArray()
const thingData = useThingData({
  layers: thingLayers,
  fallbackSource: () => props.datasourceId || held().datasourceId,
  resolve: resolveStore,
  scopeKey: () => `maplibre:${widgetId?.value ?? ''}`,
})
const geoJsonData = useGeoJsonData(geoJsonLayers)

function findThing(id: string): ThingLike | undefined {
  for (const layer of thingLayers()) {
    const thing = thingData.thingsOf(layer).find((each) => thingIdOf(each) === id)
    if (thing) return thing
  }
  return undefined
}

/* What each data source of the map holds now, by source id. */
const collections = computed(() => {
  void thingData.revision.value
  void geoJsonData.revision.value
  const out = new Map<string, unknown>()
  for (const layer of thingLayers()) {
    if (layer.visible === false) continue
    out.set(
      sourceIdOf('things', layer.id),
      thingFeaturesOf(layer, thingData.thingsOf(layer), thingData.latestOf(layer), selectedThingId.value),
    )
  }
  for (const layer of geoJsonLayers()) {
    if (layer.visible !== false) out.set(sourceIdOf('geojson', layer.id), geoJsonData.documentOf(layer))
  }
  return out
})

/* ---------------------------------------------------------------- style */

const styleUrl = computed(() => styleUrlOf(held(), dark.value))

/* Everything the map adds to its style, as one value: a change re-applies it. */
const lookKey = computed(() => {
  const s = held()
  return JSON.stringify([
    dark.value,
    [s.rasterUrl, s.rasterLayers, s.rasterOpacity, s.rasterAttribution, s.rasterInvertDark],
    s.services.toArray().map((w) => [w.id, w.url, w.getMapUrl]),
    s.wmsLayers.toArray().map((w) => [w.id, w.serviceId, w.name, w.opacity, w.checked, w.attribution]),
    [s.buildings, s.buildingColor, s.buildingOpacity, s.buildingSourceLayer],
    [s.terrainUrl, s.terrainEncoding, s.terrainExaggeration, s.sky, s.selectionColor],
    s.thingLayers.toArray().map((l) => [l.id, l.visible, l.fillColor, l.fillOpacity, l.outlineColor, l.pointRadius, l.extrude, l.pointStyle, l.markerSize, l.markerIcon]),
    s.geoJsonLayers.toArray().map((l) => [l.id, l.visible, l.color, l.opacity, l.extrude, l.heightProperty, l.heightFactor, l.baseHeight]),
  ])
})

/** Takes off everything the map added to its style. */
function clearAdditions(target: MapLibreMap) {
  // A custom layer is not part of the serialised style: taken off by its id.
  if (target.getLayer(MODELS_ID)) target.removeLayer(MODELS_ID)
  modelLayer = undefined
  const style = target.getStyle()
  if (target.getTerrain()) target.setTerrain(null)
  for (const layer of [...(style.layers ?? [])].reverse()) {
    if (layer.id.startsWith(PREFIX)) target.removeLayer(layer.id)
  }
  for (const id of Object.keys(style.sources ?? {})) {
    if (id.startsWith(PREFIX)) target.removeSource(id)
  }
}

/** Puts the raster base, buildings, terrain, sky and data layers on the style. */
function applyAdditions() {
  const target = map
  if (!target || !styleReady) return
  const s = held()
  clearAdditions(target)
  const style = target.getStyle()

  for (const id of styleExtrusionsOf(style)) target.setLayoutProperty(id, 'visibility', 'none')

  const raster = rasterSourceOf(s)
  if (raster) {
    target.addSource(RASTER_ID, raster)
    target.addLayer(rasterLayerOf(s, dark.value))
  }

  // The WMS layers, over the raster base and under the buildings (#1274).
  for (const wms of wmsLayersOf(s.services.toArray(), s.wmsLayers.toArray(), s, dark.value)) {
    target.addSource(wms.id, wms.source)
    target.addLayer(wms.layer)
  }

  if (s.buildings) {
    const source = buildingSourceOf(style, s.buildingSourceLayer || 'building')
    if (source) target.addLayer(buildingLayerOf(s, source))
  }

  const terrain = terrainSourceOf(s)
  if (terrain) {
    target.addSource(TERRAIN_ID, terrain)
    target.setTerrain({ source: TERRAIN_ID, exaggeration: exaggerationOf(s) })
  }

  if (typeof target.setSky === 'function') target.setSky(s.sky ? skyOf(dark.value) : {})

  const selection = s.selectionColor || '#ffb300'
  const data = collections.value
  const addData = (id: string, layers: ReturnType<typeof featureLayersOf>) => {
    target.addSource(id, { type: 'geojson', data: (data.get(id) ?? { type: 'FeatureCollection', features: [] }) as never })
    const buildingsShown = !!target.getLayer(BUILDINGS_ID)
    for (const layer of layers) target.addLayer(layer, beforeIdOf(layer, buildingsShown))
  }
  for (const layer of s.thingLayers.toArray()) {
    if (layer.visible === false) continue
    const id = sourceIdOf('things', layer.id)
    addData(id, featureLayersOf(id, thingLookOf(layer, selection)))
  }
  for (const layer of s.geoJsonLayers.toArray()) {
    if (layer.visible === false) continue
    const id = sourceIdOf('geojson', layer.id)
    addData(id, featureLayersOf(id, geoJsonLookOf(layer, selection)))
  }
  // The 3D models on top, meeting the buildings in the 3D pass (#1281).
  if (s.modelLayers.size() > 0) {
    modelLayer = createModelLayer()
    target.addLayer(modelLayer)
    modelLayer.update(drawnModels())
  }
}

/* ---------------------------------------------------------- 3D models */

let modelLayer: ModelCustomLayer | undefined

/* The points the model layers stand their models on (#1282). */
const modelData = useFeatureData({
  ids: () => held().modelLayers.toArray().map((layer) => String(layer.datasourceId ?? '')),
  resolve: resolveStore,
})

/*
 * The sources of the symbol layers hear what the map shows (#1297): a WFS
 * with the extent viewport then reads only the tiles in view.
 */
const viewportSender = createViewportSender({
  sender: () => String(widgetId?.value ?? ''),
  sources: () => held().modelLayers.toArray().filter((layer) => layer.visible !== false).map((layer) => String(layer.datasourceId ?? '')),
  resolve: resolveStore,
})
function tellViewport() {
  if (!map) return
  const b = map.getBounds()
  const c = map.getCenter()
  const canvas = map.getCanvas()
  const bbox = viewOfMap([b.getWest(), b.getSouth(), b.getEast(), b.getNorth()], [c.lng, c.lat], map.getZoom(), canvas.clientWidth, canvas.clientHeight)
  viewportSender.moved(bbox, map.getZoom())
}
watch(() => held().modelLayers.toArray().map((layer) => `${layer.datasourceId ?? ''}:${layer.visible !== false}`).join(), () => viewportSender.resend())

/** The units of the column types of a data source, by column (#1295). */
function unitsOf(datasourceId: string): Record<string, string> {
  try {
    const types = (repository as any)?.getDatasourceModel?.(datasourceId)?.config?.columnTypes ?? []
    return Object.fromEntries(Array.from(types as Iterable<any>).filter((t) => t?.column && t?.unit).map((t) => [String(t.column), String(t.unit)]))
  } catch {
    return {}
  }
}

/**
 * What the custom layer draws: per symbol layer its instances placed by hand
 * and the points of its data source, each encoded by its fields, as one
 * drawn layer per model file (#1296).
 */
const drawnModels = (): DrawnModelLayer[] => {
  void modelData.revision.value
  const out: DrawnModelLayer[] = []
  for (const layer of held().modelLayers.toArray()) {
    const parts = layer.parts.toArray()
    const base = { visible: layer.visible, scale: layer.scale, rotation: layer.rotation, altitudeOffset: layer.altitudeOffset, parts }
    const url = String(layer.url ?? '').trim()
    const id = String(layer.datasourceId ?? '')
    const byModel = symbolsByModel(layer, id ? modelData.answerOf(id) : undefined, id ? unitsOf(id) : {})
    // The layer's own file is drawn even before it stands anywhere: the custom layer is there to place into.
    if (url && !byModel.has(url)) byModel.set(url, [])
    for (const [file, instances] of byModel) {
      out.push({ ...base, id: file === url ? layer.id : `${layer.id}:${file}`, url: file, format: file === url ? layer.format : '', instances })
    }
  }
  return out
}
const modelsKey = computed(() => JSON.stringify(drawnModels()))
watch(modelsKey, () => {
  if (!map || !styleReady) return
  // The first model layer needs the custom layer; later changes only hand it the layers.
  if (!modelLayer && held().modelLayers.size() > 0) applyAdditions()
  else modelLayer?.update(drawnModels())
})

/** The model layer the settings place with, if they place in this map. */
const placingLayer = computed<ModelLayer | undefined>(() => {
  const mode = placing.value
  if (!mode || mode.settings !== config.value) return undefined
  return held().modelLayers.toArray().find((layer) => layer.id === mode.layerId)
})

/** The instance of the placing layer under a point of the screen. */
function instanceAt(point: { x: number; y: number }): ModelInstance | undefined {
  const layer = placingLayer.value
  if (!map || !layer) return undefined
  const candidates = layer.instances.toArray().map((item) => ({ item, ...map!.project([item.lon ?? 0, item.lat ?? 0]) }))
  return nearestWithin(point, candidates, 14)
}

let dragged: ModelInstance | undefined
function onPlaceDown(event: MapMouseEvent) {
  const hit = instanceAt(event.point)
  if (!hit || !map) return
  dragged = hit
  map.dragPan.disable()
}
function onPlaceUp() {
  if (!dragged) return
  dragged = undefined
  map?.dragPan.enable()
}
function onPlaceMenu(event: MapMouseEvent) {
  const layer = placingLayer.value
  const hit = instanceAt(event.point)
  if (layer && hit) {
    event.preventDefault()
    layer.instances.remove(hit)
  }
}
/** A click while placing adds an instance where no instance is. */
function placeAt(event: MapMouseEvent): boolean {
  const layer = placingLayer.value
  if (!layer) return false
  if (instanceAt(event.point)) return true
  const instance = MaplibreFactory.eINSTANCE.createModelInstance()
  instance.id = newId('model')
  instance.lon = event.lngLat.lng
  instance.lat = event.lngLat.lat
  layer.instances.add(instance)
  return true
}

/** Replaces the data of each source the map holds. */
function applyData() {
  if (!map || !styleReady) return
  for (const [id, data] of collections.value) {
    ;(map.getSource(id) as GeoJSONSource | undefined)?.setData(data as never)
  }
}

/* ----------------------------------------------------------------- view */

const view = computed(() => {
  const s = held()
  return { center: [s.centerLon, s.centerLat] as [number, number], zoom: s.zoom, pitch: s.pitch, bearing: s.bearing }
})

const HANDLERS = ['scrollZoom', 'boxZoom', 'dragRotate', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate', 'touchPitch'] as const
function applyInteractive(target: MapLibreMap, on: boolean) {
  for (const name of HANDLERS) {
    const handler = (target as unknown as Record<string, { enable(): void; disable(): void } | undefined>)[name]
    if (on) handler?.enable()
    else handler?.disable()
  }
}

/* ---------------------------------------------------------- attribution */

/*
 * The attribution (#1271): MapLibre's own control, with what the style and
 * the raster base say, until a board sets a text of its own - that text then
 * replaces all of it. A changed text is put in place; a changed fold makes
 * the control anew. Neither reloads the map.
 */
let attribution: IControl | undefined
let attributionKind = ''
function applyAttribution() {
  if (!map) return
  const s = held()
  const text = String(s.attribution ?? '').trim()
  const compact = s.attributionCompact !== false
  const kind = `${text ? 'text' : 'sources'}:${compact}`
  if (attribution && kind === attributionKind) {
    if (attribution instanceof TextAttributionControl) attribution.setText(text)
    return
  }
  if (attribution) map.removeControl(attribution)
  attribution = text
    ? new TextAttributionControl(text, compact, t('Widget.attribution'))
    : new AttributionControl({ compact })
  attributionKind = kind
  map.addControl(attribution, 'bottom-right')
}

/* --------------------------------------------------------------- events */

function onClick(event: MapMouseEvent) {
  if (placeAt(event)) return
  if (!map || !widgetId?.value) return
  const dataLayers = (map.getStyle().layers ?? []).filter((l) => dataLayerOf(l.id)).map((l) => l.id)
  const hit = dataLayers.length ? map.queryRenderedFeatures(event.point, { layers: dataLayers })[0] : undefined
  const clicked = clickEventOf(
    {
      lng: event.lngLat.lng,
      lat: event.lngLat.lat,
      layer: hit ? dataLayerOf(hit.layer.id) ?? undefined : undefined,
      properties: hit?.properties as Record<string, unknown> | undefined,
      featureId: hit?.id,
    },
    widgetId.value,
    findThing,
  )
  const type = busEventOf(clicked.event)
  eventBus?.emit(type, { type, widgetId: widgetId.value, payload: clicked.payload, timestamp: Date.now() })
}

function onMove(event: MapMouseEvent) {
  if (!map) return
  if (dragged) {
    dragged.lon = event.lngLat.lng
    dragged.lat = event.lngLat.lat
    return
  }
  if (placingLayer.value) {
    map.getCanvas().style.cursor = instanceAt(event.point) ? 'move' : 'crosshair'
    return
  }
  const dataLayers = (map.getStyle().layers ?? []).filter((l) => dataLayerOf(l.id)).map((l) => l.id)
  const over = dataLayers.length > 0 && map.queryRenderedFeatures(event.point, { layers: dataLayers }).length > 0
  map.getCanvas().style.cursor = over ? 'pointer' : ''
}

/* -------------------------------------------------------------- actions */

/**
 * Flies to geometries: an area is fitted into the view, no closer than the
 * zoom given; a point is flown to at that zoom. Tilt and rotation stay.
 */
function goTo(geometries: ReturnType<typeof geometriesOf>, zoom: unknown, duration: unknown) {
  const box = boundsOf(geometries)
  if (!map || !box) return
  const level = Number(zoom) || 16
  const time = Number(duration) || 0
  const [[west, south], [east, north]] = box
  if (west === east && south === north) {
    map.flyTo({ center: [west, south], zoom: level, duration: time })
    return
  }
  map.fitBounds(box, { padding: 48, maxZoom: level, duration: time, bearing: map.getBearing(), pitch: map.getPitch() })
}

/* A thing asked for before it was loaded (#1272). */
let pendingZoom: { thingId: string; zoom: unknown; duration: unknown } | undefined
watch(thingData.revision, () => {
  if (pendingZoom && findThing(pendingZoom.thingId)) api.zoomToThing(pendingZoom.thingId, Number(pendingZoom.zoom), Number(pendingZoom.duration))
})

const api = new (class extends MapLibreWidgetInterfaceImpl {
  flyTo = (lat: number, lon: number, zoom?: number, pitch?: number, bearing?: number, duration = 1000) => {
    const has = (n: unknown) => n !== undefined && n !== null && (n as unknown) !== '' && Number.isFinite(Number(n))
    map?.flyTo({
      center: [Number(lon), Number(lat)],
      ...(has(zoom) ? { zoom: Number(zoom) } : {}),
      ...(has(pitch) ? { pitch: Number(pitch) } : {}),
      ...(has(bearing) ? { bearing: Number(bearing) } : {}),
      duration: Number(duration) || 0,
    })
  }
  zoomToLocation = (location: unknown, zoom = 16, duration = 1000) => {
    goTo(geometriesOf(location), zoom, duration)
  }
  zoomToThing = (thingId: string, zoom = 16, duration = 1000) => {
    const thing = findThing(String(thingId))
    if (thing) {
      pendingZoom = undefined
      goTo(geometriesOf(thing.locations?.[0]?.location), zoom, duration)
    } else {
      // Not loaded yet - right after a change of page: flown to once it is (#1272).
      pendingZoom = { thingId: String(thingId), zoom, duration }
    }
  }
  selectThingById = (thingId: string) => {
    selectedThingId.value = thingId ? String(thingId) : undefined
  }
  clearSelection = () => {
    selectedThingId.value = undefined
  }
})()

/* ------------------------------------------------------------ lifecycle */

let resizeObserver: ResizeObserver | undefined

onMounted(() => {
  if (widgetId?.value) actionsRegistry?.registerInstance(widgetId.value, api, WIDGET_TYPE, pageId)
  themeObserver = new MutationObserver(() => (dark.value = readDark()))
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  if (!container.value) return
  try {
    useMapLibreWorker()
    map = new MapLibreMap({
      container: container.value,
      style: styleUrl.value,
      ...view.value,
      maxPitch: 85,
      attributionControl: false,
    })
  } catch {
    failed.value = true
    return
  }
  map.addControl(new NavigationControl({ visualizePitch: true }), 'top-right')
  applyAttribution()
  applyInteractive(map, held().interactive !== false)
  map.on('style.load', () => {
    styleReady = true
    applyAdditions()
  })
  /*
   * A pin in a colour not drawn yet is made when the map first asks for it
   * (#1273). A resolver, not the styleimagemissing event: since MapLibre 6
   * an image added from the event comes too late for the tile that asked.
   */
  map.setMissingStyleImageResolver(async (id: string) => {
    if (!map || !id.startsWith(PIN_PREFIX) || map.hasImage(id)) return
    const { color, icon } = pinOfImageId(id)
    const image = icon ? await pinWithIcon(color, icon) : pinImage(color)
    if (map && !map.hasImage(id)) map.addImage(id, image, { pixelRatio: PIN_PIXEL_RATIO })
  })
  map.on('click', onClick)
  map.on('mousemove', onMove)
  map.on('mousedown', onPlaceDown)
  map.on('mouseup', onPlaceUp)
  map.on('contextmenu', onPlaceMenu)
  map.on('moveend', tellViewport)
  map.on('load', tellViewport)
  resizeObserver = new ResizeObserver(() => map?.resize())
  resizeObserver.observe(container.value)
})

watch(styleUrl, (url) => {
  if (!map) return
  styleReady = false
  // Loaded whole, not diffed: only a whole load says style.load, which puts the additions back.
  map.setStyle(url, { diff: false })
})
watch(lookKey, applyAdditions)
watch(collections, applyData)
watch(view, (next) => map?.jumpTo(next))
watch(() => [held().attribution, held().attributionCompact], applyAttribution)
watch(() => held().interactive, (on) => map && applyInteractive(map, on !== false))

onUnmounted(() => {
  if (widgetId?.value) actionsRegistry?.unregisterInstance(widgetId.value)
  viewportSender.stop()
  themeObserver?.disconnect()
  resizeObserver?.disconnect()
  map?.remove()
  map = undefined
})

</script>

<template>
  <div class="maplibre-widget">
    <div ref="container" class="maplibre-widget__map" />
    <div v-if="failed" class="maplibre-widget__failed">{{ t('Widget.noWebGL') }}</div>
  </div>
</template>

<style scoped>
.maplibre-widget {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 120px;
}

.maplibre-widget__map {
  position: absolute;
  inset: 0;
}

/* The attribution box is light; the text inherits the app's, which is light in the dark theme. */
.maplibre-widget :deep(.maplibregl-ctrl-attrib) {
  color: #222;
}

.maplibre-widget__failed {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  color: var(--color-fg-muted, #666);
}
</style>
