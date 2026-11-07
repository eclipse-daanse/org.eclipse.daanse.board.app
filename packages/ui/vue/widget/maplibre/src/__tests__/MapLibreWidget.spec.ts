/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

// @vitest-environment jsdom
/*
 * The widget mounted against a stand-in for MapLibre: jsdom has no WebGL.
 * The stand-in keeps the layers and sources the widget puts on the style,
 * which is all the widget decides; drawing them is MapLibre's part.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { EventsPackage, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { TinyEmitter } from 'tiny-emitter'
import { MaplibrePackage } from '../gen/MaplibrePackage'
import { modelledSettings } from '../settingsModel'
import { clickEventOf } from '../events/payloads'
import { TextAttributionControl, attributionFragment } from '../attribution'
import { placing } from '../models/placementMode'
import { newModelLayer } from '../settingsModel'

void EventsPackage.eINSTANCE
void MaplibrePackage.eINSTANCE

const maps: any[] = []
vi.mock('maplibre-gl', () => {
  const handler = () => ({ enable: vi.fn(), disable: vi.fn() })
  class Map {
    handlers: Record<string, (event?: unknown) => void> = {}
    styleLayers = [{ id: 'building-3d', type: 'fill-extrusion', source: 'openmaptiles', 'source-layer': 'building' }]
    layers: any[] = []
    sources: Record<string, any> = {}
    jumpTo = vi.fn()
    flyTo = vi.fn()
    fitBounds = vi.fn()
    images = new globalThis.Map<string, any>()
    hasImage(id: string) {
      return this.images.has(id)
    }
    addImage = vi.fn((id: string, image: any) => this.images.set(id, image))
    resolveImage?: (id: string) => unknown
    setMissingStyleImageResolver(resolver: (id: string) => unknown) {
      this.resolveImage = resolver
    }
    getBearing = () => -20
    getPitch = () => 55
    setStyle = vi.fn()
    setTerrain = vi.fn()
    setSky = vi.fn()
    setLayoutProperty = vi.fn()
    queryRenderedFeatures = vi.fn((): any[] => [])
    scrollZoom = handler()
    dragPan = handler()
    constructor(public options: any) {
      maps.push(this)
    }
    on(event: string, fn: (event?: unknown) => void) {
      this.handlers[event] = fn
    }
    controls: any[] = []
    addControl(control: any) {
      control.element = control.onAdd?.(this)
      this.controls.push(control)
    }
    removeControl(control: any) {
      control.onRemove?.(this)
      this.controls = this.controls.filter((c) => c !== control)
    }
    getStyle() {
      return { layers: [...this.styleLayers, ...this.layers], sources: { openmaptiles: { type: 'vector' }, ...this.sources } }
    }
    getTerrain() {
      return null
    }
    addSource(id: string, source: any) {
      this.sources[id] = { ...source, setData: vi.fn() }
    }
    getSource(id: string) {
      return this.sources[id]
    }
    removeSource(id: string) {
      delete this.sources[id]
    }
    addLayer(layer: any, beforeId?: string) {
      const at = beforeId ? this.layers.findIndex((l) => l.id === beforeId) : -1
      if (at >= 0) this.layers.splice(at, 0, layer)
      else this.layers.push(layer)
    }
    getLayer(id: string) {
      return this.layers.find((l) => l.id === id)
    }
    removeLayer(id: string) {
      this.layers = this.layers.filter((l) => l.id !== id)
    }
    canvasStyle: Record<string, string> = {}
    getCanvas() {
      return { style: this.canvasStyle }
    }
    /* A plain projection for the test: 1 px per 0.0001 degree, from 11.6 / 50.95. */
    project([lng, lat]: [number, number]) {
      return { x: (lng - 11.6) * 10000, y: (50.95 - lat) * 10000 }
    }
    resize() {}
    remove() {}
  }
  class NavigationControl {}
  class AttributionControl {
    constructor(public options: any) {}
  }
  return { Map, NavigationControl, AttributionControl, getWorkerUrl: () => '', setWorkerUrl: vi.fn() }
})

vi.mock('vue-router', () => ({ useRoute: () => ({ params: { pageid: 'p1' } }) }))

/* The custom layer draws with three in WebGL; here it only records what it is handed. */
const drawnModels: any[][] = []
vi.mock('../models/modelLayer', () => ({
  MODELS_ID: 'daanse:models',
  createModelLayer: () => ({ id: 'daanse:models', type: 'custom', update: (layers: any[]) => drawnModels.push(layers) }),
}))

class Observer {
  observe() {}
  disconnect() {}
}
vi.stubGlobal('ResizeObserver', Observer)

const polygon = { type: 'Polygon', coordinates: [[[11.6, 50.94], [11.61, 50.94], [11.61, 50.95], [11.6, 50.94]]] }
const things = [
  { iotId: 'JeN-06', name: 'Reference Area JeN-06', locations: [{ location: { features: [{ type: 'Feature', geometry: polygon }] } }] },
]

function fakeStore() {
  return {
    getData: vi.fn(async () => ({ things })),
    subscribe: vi.fn(() => () => {}),
    setThingScope: vi.fn(),
    latestObservations: vi.fn(async (ids: string[]) => new Map(ids.map((id) => [id, { result: id.endsWith('color') ? 'RED' : 4 }]))),
  }
}

async function mountWidget(stored: object, store = fakeStore()) {
  const { default: MapLibreWidget } = await import('../MapLibreWidget.vue')
  const bus = new TinyEmitter()
  const registry = { registerInstance: vi.fn(), unregisterInstance: vi.fn() }
  const wrapper = mount(MapLibreWidget, {
    props: { id: 'w1', datasourceId: 'sta', configv: stored as any },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: bus,
        [EVENT_ACTIONS_REGISTRY as symbol]: registry,
        [identifier as symbol]: { getDatasource: () => store },
      },
    },
    attachTo: document.body,
  })
  await flushPromises()
  const map = maps[maps.length - 1]
  map.handlers['style.load']?.()
  return { wrapper, bus, registry, store, map }
}

/** The ids of the layers the map added, a WMS layer by its kind (its id is made anew). */
const idsOf = (map: any) => map.layers.map((l: any) => (l.id.startsWith('daanse:wms:') ? 'daanse:wms' : l.id))

const stored = () => ({
  pitch: 55,
  rasterUrl: 'https://kartenportal.jena.de/mapproxy/service',
  rasterLayers: 'stadtplan_sw',
  thingLayers: [
    {
      id: 'areas',
      thingNames: ['Reference Area*'],
      colorSuffix: '~referenceArea~color',
      colors: [{ code: 'RED', color: '#d32f2f' }],
      extrude: true,
      heightSuffix: '~referenceArea~sensorCount',
      refreshSeconds: 0,
    },
  ],
})

beforeEach(() => {
  maps.length = 0
})

describe('the 3D map widget', () => {
  it('starts tilted where its settings say, over the city map, with buildings and areas in 3D', async () => {
    const { map } = await mountWidget(stored())
    expect(map.options.pitch).toBe(55)
    const ids = idsOf(map)
    // A board of before #1274 names its WMS layer in rasterLayers: it is drawn as a WMS layer now.
    expect(ids).toEqual(['daanse:wms', 'daanse:things:areas:line', 'daanse:things:areas:circle', 'daanse:buildings', 'daanse:things:areas:extrusion'])
    // The style's own 3D buildings give way to the map's.
    expect(map.setLayoutProperty).toHaveBeenCalledWith('building-3d', 'visibility', 'none')
  })

  it('puts flat areas below the 3D buildings, and blocks above them (#1270)', async () => {
    const settings = stored()
    const { map } = await mountWidget(settings)
    const model = modelledSettings(settings)
    model.thingLayers.get(0).extrude = false
    await nextTick()
    expect(idsOf(map)).toEqual([
      'daanse:wms',
      'daanse:things:areas:fill',
      'daanse:things:areas:line',
      'daanse:things:areas:circle',
      'daanse:buildings',
    ])

    model.buildings = false
    await nextTick()
    expect(map.layers.map((l: any) => l.id).at(-1)).toBe('daanse:things:areas:circle')
  })

  it('shows the attribution a board sets in place of the sources\' one, and follows it without a reload (#1271)', async () => {
    const settings = stored()
    const { map } = await mountWidget(settings)
    const model = modelledSettings(settings)
    const attributionOf = () => map.controls.find((c: any) => c.constructor.name.includes('Attribution'))

    // An old board: MapLibre's own control, folded, as before.
    expect(attributionOf().constructor.name).toBe('AttributionControl')
    expect(attributionOf().options).toEqual({ compact: true })

    model.attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    await nextTick()
    const control = attributionOf()
    expect(control).toBeInstanceOf(TextAttributionControl)
    expect(control.element.textContent).toBe('© OpenStreetMap contributors')
    expect(control.element.querySelector('a').getAttribute('href')).toBe('https://www.openstreetmap.org/copyright')

    model.attribution = '© Stadt Jena'
    await nextTick()
    expect(attributionOf()).toBe(control)
    expect(control.element.textContent).toBe('© Stadt Jena')

    model.attributionCompact = false
    await nextTick()
    expect(attributionOf()).not.toBe(control)
    expect(attributionOf().element.tagName).toBe('DIV')
    expect(map.controls.filter((c: any) => c.constructor.name.includes('Attribution'))).toHaveLength(1)
    expect(map.setStyle).not.toHaveBeenCalled()
  })

  it('loads only the things of its patterns, and colours and raises them by their latest values', async () => {
    const { map, store } = await mountWidget(stored())
    expect(store.setThingScope).toHaveBeenCalledWith('maplibre:w1', "startswith(name,'Reference Area')")
    expect(store.latestObservations).toHaveBeenCalledWith(['JeN-06~referenceArea~color', 'JeN-06~referenceArea~sensorCount'])
    const source = map.sources['daanse:things:areas']
    const data = source.setData.mock.calls.at(-1)?.[0] ?? source.data
    expect(data.features[0].properties).toMatchObject({ thingId: 'JeN-06', color: '#d32f2f', height: 60 })
  })

  it('follows a changed setting at once, without a reload', async () => {
    const settings = stored()
    const { map } = await mountWidget(settings)
    const model = modelledSettings(settings)

    model.pitch = 70
    await nextTick()
    expect(map.jumpTo).toHaveBeenLastCalledWith(expect.objectContaining({ pitch: 70 }))

    model.thingLayers.get(0).extrude = false
    await nextTick()
    expect(map.layers.map((l: any) => l.id)).toContain('daanse:things:areas:fill')
    expect(map.layers.map((l: any) => l.id)).not.toContain('daanse:things:areas:extrusion')

    model.buildings = false
    await nextTick()
    expect(map.layers.map((l: any) => l.id)).not.toContain('daanse:buildings')
    expect(map.setStyle).not.toHaveBeenCalled()

    // Dark is the shell's default; the light theme takes the light style.
    expect(map.options.style).toBe('https://tiles.openfreemap.org/styles/dark')
    document.documentElement.setAttribute('data-theme', 'light')
    await flushPromises()
    expect(map.setStyle).toHaveBeenLastCalledWith('https://tiles.openfreemap.org/styles/liberty', { diff: false })

    model.styleUrl = 'https://example.org/style.json'
    await nextTick()
    expect(map.setStyle).toHaveBeenLastCalledWith('https://example.org/style.json', { diff: false })
    document.documentElement.removeAttribute('data-theme')
  })

  it('sends click_on_thing with what the source says of the thing', async () => {
    const { map, bus } = await mountWidget(stored())
    const heard = vi.fn()
    bus.on('widget:MapLibreWidget:click_on_thing', heard)
    map.queryRenderedFeatures.mockReturnValueOnce([
      { layer: { id: 'daanse:things:areas:extrusion' }, properties: { thingId: 'JeN-06', value: 'RED', heightValue: 4 } },
    ])
    map.handlers.click({ point: { x: 1, y: 1 }, lngLat: { lng: 11.605, lat: 50.945 } })
    expect(heard).toHaveBeenCalledTimes(1)
    const { payload, widgetId } = heard.mock.calls[0][0]
    expect(widgetId).toBe('w1')
    expect(payload).toMatchObject({ id: 'JeN-06', name: 'Reference Area JeN-06', layerId: 'areas', value: 'RED', height: 4 })
  })

  it('answers the actions: select draws the thing in the selection colour, zoomToThing flies to it', async () => {
    const { map, registry } = await mountWidget(stored())
    const [id, api, type] = registry.registerInstance.mock.calls[0]
    expect([id, type]).toEqual(['w1', 'MapLibreWidget'])

    api.selectThingById('JeN-06')
    await nextTick()
    const source = map.sources['daanse:things:areas']
    expect(source.setData.mock.calls.at(-1)[0].features[0].properties.selected).toBe(true)

    api.zoomToThing('JeN-06', 17, 0)
    expect(map.fitBounds).toHaveBeenLastCalledWith([[11.6, 50.94], [11.61, 50.95]], expect.objectContaining({ maxZoom: 17, pitch: 55, bearing: -20 }))

    api.flyTo(50.9, 11.5, 14, 60, 30, 500)
    expect(map.flyTo).toHaveBeenLastCalledWith({ center: [11.5, 50.9], zoom: 14, pitch: 60, bearing: 30, duration: 500 })
  })
})

describe('the actions after a change of page (#1272)', () => {
  it('fit an area given as GeoJSON into the view, and fly to a point', async () => {
    const { map, registry } = await mountWidget(stored())
    const api = registry.registerInstance.mock.calls[0][1]
    api.zoomToLocation({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: polygon }] }, 17, 0)
    expect(map.fitBounds).toHaveBeenLastCalledWith([[11.6, 50.94], [11.61, 50.95]], expect.objectContaining({ maxZoom: 17 }))
    api.zoomToLocation({ type: 'Point', coordinates: [11.6, 50.9] }, 18, 0)
    expect(map.flyTo).toHaveBeenLastCalledWith({ center: [11.6, 50.9], zoom: 18, duration: 0 })
    api.zoomToLocation(undefined)
    expect(map.flyTo).toHaveBeenCalledTimes(1)
  })

  it('fly to a thing asked for before it was loaded, once it is', async () => {
    let answer!: (value: unknown) => void
    const store = fakeStore()
    store.getData = vi.fn(() => new Promise((resolve) => (answer = resolve))) as any
    const { map, registry } = await mountWidget(stored(), store)
    const api = registry.registerInstance.mock.calls[0][1]

    api.selectThingById('JeN-06')
    api.zoomToThing('JeN-06', 16, 0)
    expect(map.fitBounds).not.toHaveBeenCalled()

    answer({ things })
    await flushPromises()
    expect(map.fitBounds).toHaveBeenCalledTimes(1)
    const source = map.sources['daanse:things:areas']
    expect(source.setData.mock.calls.at(-1)[0].features[0].properties.selected).toBe(true)
  })
})

describe('the pins of a layer (#1273)', () => {
  it('are drawn in a colour when the map first asks for it, once', async () => {
    const { map } = await mountWidget(stored())
    await map.resolveImage('daanse-pin:#E53935')
    await map.resolveImage('daanse-pin:#E53935')
    await map.resolveImage('other-image')
    expect(map.addImage).toHaveBeenCalledTimes(1)
    const [id, image, options] = map.addImage.mock.calls[0]
    expect(id).toBe('daanse-pin:#E53935')
    expect([image.width, image.height]).toEqual([48, 64])
    expect(options).toEqual({ pixelRatio: 2 })
  })
})

describe('the 3D models of the map (#1281)', () => {
  it('draw in a custom layer over the data, and take instances while the settings place', async () => {
    const settings = stored()
    const { map, bus } = await mountWidget(settings)
    const model = modelledSettings(settings)
    const layer = newModelLayer('Trees')
    layer.url = 'http://localhost:8080/tree.fbx'
    model.modelLayers.add(layer)
    await nextTick()
    expect(map.layers.at(-1).id).toBe('daanse:models')
    expect(map.layers.at(-1).type).toBe('custom')

    const heard = vi.fn()
    bus.on('widget:MapLibreWidget:click_on_map', heard)
    placing.value = { settings: model, layerId: String(layer.id) }
    await nextTick()
    const at = (x: number, y: number) => ({ point: { x, y }, lngLat: { lng: 11.6 + x / 10000, lat: 50.95 - y / 10000 }, preventDefault: vi.fn() })

    // A click adds an instance, and sends no click event.
    map.handlers.click(at(10, 20))
    expect(layer.instances.size()).toBe(1)
    expect(layer.instances.get(0).lon).toBeCloseTo(11.601, 9)
    expect(layer.instances.get(0).lat).toBeCloseTo(50.948, 9)
    expect(heard).not.toHaveBeenCalled()
    // A click on it adds none; dragging moves it.
    map.handlers.click(at(12, 21))
    expect(layer.instances.size()).toBe(1)
    map.handlers.mousedown(at(11, 19))
    expect(map.dragPan.disable).toHaveBeenCalled()
    map.handlers.mousemove(at(50, 60))
    map.handlers.mouseup(at(50, 60))
    expect(layer.instances.get(0).lon).toBeCloseTo(11.605, 9)
    expect(map.dragPan.enable).toHaveBeenCalled()
    // A right click on it removes it.
    map.handlers.contextmenu(at(49, 61))
    expect(layer.instances.size()).toBe(0)

    // Not placing, a click is an event again.
    placing.value = null
    await nextTick()
    map.handlers.click(at(10, 20))
    expect(layer.instances.size()).toBe(0)
    expect(heard).toHaveBeenCalledTimes(1)
  })
})

describe('the 3D models on data (#1282, #1296)', () => {
  it('stand at the points of their data source, with the size and colour of their encodings', async () => {
    const store = fakeStore()
    ;(store as any).getData = vi.fn(async (type: string) =>
      type === 'geojson'
        ? { type: 'FeatureCollection', features: [{ id: 'b1', type: 'Feature', geometry: { type: 'Point', coordinates: [11.6, 50.95] }, properties: { gattung: 'Linde', hoehe: 12 } }] }
        : { things },
    )
    const settings = stored()
    const { map } = await mountWidget(settings, store)
    const model = modelledSettings(settings)
    model.modelLayers.add(modelledSettings({ modelLayers: [{
      id: 'trees', url: 'https://x/tree.fbx', datasourceId: 'wfs',
      size: { height: { field: 'hoehe' } },
      color: { field: 'gattung', mappings: [{ code: 'Linde', color: '#2e7d32' }] },
    }] }).modelLayers.get(0))
    await flushPromises()
    expect(map.layers.at(-1).id).toBe('daanse:models')
    expect(store.getData).toHaveBeenCalledWith('geojson')
    const last = drawnModels.at(-1)!
    expect(last).toHaveLength(1)
    expect(last[0].url).toBe('https://x/tree.fbx')
    expect(last[0].instances).toEqual([{ id: 'b1', lon: 11.6, lat: 50.95, height: 12, color: '#2e7d32' }])
  })
})

describe('the attribution text', () => {
  it('keeps links and emphasis, and drops scripts, handlers and other link targets', () => {
    const box = document.createElement('div')
    box.appendChild(attributionFragment('<b>Map</b> <a href="https://a.example" onclick="x()">A</a> <a href="javascript:alert(1)">B</a><script>bad()</script><img src=x onerror="y()">'))
    expect(box.innerHTML).toBe('<b>Map</b> <a href="https://a.example" target="_blank" rel="noopener noreferrer">A</a> <a>B</a>')
  })
})

describe('the payload of a click', () => {
  it('is a map click where no feature is, and a feature click on GeoJSON', () => {
    const onMap = clickEventOf({ lng: 11.6, lat: 50.9 }, 'w', () => undefined)
    expect(onMap.event).toBe('click_on_map')
    expect(onMap.payload).toMatchObject({ lat: 50.9, lon: 11.6, widgetId: 'w' })

    const onFeature = clickEventOf(
      { lng: 1, lat: 2, layer: { kind: 'geojson', id: 'g' }, properties: { name: 'x' }, featureId: 7 },
      'w',
      () => undefined,
    )
    expect(onFeature.event).toBe('click_on_feature')
    expect(onFeature.payload).toMatchObject({ layerId: 'g', featureId: '7', properties: { name: 'x' } })
  })
})
