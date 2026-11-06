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
    addControl() {}
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
    getCanvas() {
      return { style: {} }
    }
    resize() {}
    remove() {}
  }
  class NavigationControl {}
  return { Map, NavigationControl, getWorkerUrl: () => '', setWorkerUrl: vi.fn() }
})

vi.mock('vue-router', () => ({ useRoute: () => ({ params: { pageid: 'p1' } }) }))

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
    const ids = map.layers.map((l: any) => l.id)
    expect(ids).toEqual(['daanse:raster', 'daanse:things:areas:line', 'daanse:things:areas:circle', 'daanse:buildings', 'daanse:things:areas:extrusion'])
    // The style's own 3D buildings give way to the map's.
    expect(map.setLayoutProperty).toHaveBeenCalledWith('building-3d', 'visibility', 'none')
  })

  it('puts flat areas below the 3D buildings, and blocks above them (#1270)', async () => {
    const settings = stored()
    const { map } = await mountWidget(settings)
    const model = modelledSettings(settings)
    model.thingLayers.get(0).extrude = false
    await nextTick()
    expect(map.layers.map((l: any) => l.id)).toEqual([
      'daanse:raster',
      'daanse:things:areas:fill',
      'daanse:things:areas:line',
      'daanse:things:areas:circle',
      'daanse:buildings',
    ])

    model.buildings = false
    await nextTick()
    expect(map.layers.map((l: any) => l.id).at(-1)).toBe('daanse:things:areas:circle')
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
    expect(map.flyTo).toHaveBeenCalledWith(expect.objectContaining({ center: [11.605, 50.945], zoom: 17 }))

    api.flyTo(50.9, 11.5, 14, 60, 30, 500)
    expect(map.flyTo).toHaveBeenLastCalledWith({ center: [11.5, 50.9], zoom: 14, pitch: 60, bearing: 30, duration: 500 })
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
