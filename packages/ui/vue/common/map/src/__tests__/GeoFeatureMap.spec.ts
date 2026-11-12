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
 * ********************************************************************/

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import GeoFeatureMap from '../GeoFeatureMap.vue'

/*
 * Leaflet draws into a real box and measures it; jsdom has neither. What
 * is checked here is what the component says about an answer - the count,
 * the kinds of geometry in it, and the three ways of having nothing to
 * show - so the map itself stands in as an empty element.
 */
vi.mock('@vue-leaflet/vue-leaflet', () => ({
  LMap: { name: 'LMap', template: '<div class="l-map"><slot /></div>' },
  LTileLayer: { name: 'LTileLayer', template: '<div class="l-tiles" />' },
  LGeoJson: {
    name: 'LGeoJson',
    props: ['geojson', 'optionsStyle', 'options'],
    template: '<div class="l-geojson" />',
  },
}))
/* The Leaflet vue-leaflet draws with, handed over when the test says so (#1302). */
const leafletModule = { circleMarker: vi.fn((latlng: unknown, options: unknown) => ({ latlng, options })) }
let releaseLeaflet: (() => void) | undefined
let leafletAtOnce = true
vi.mock('../leaflet', () => ({
  loadLeaflet: () =>
    leafletAtOnce ? Promise.resolve(leafletModule) : new Promise((resolve) => (releaseLeaflet = () => resolve(leafletModule))),
}))
vi.mock('leaflet/dist/leaflet.css', () => ({}))

/* Without a translator the keys stand for themselves, which is what the
  assertions read. */
function show(props: Record<string, unknown>) {
  return mount(GeoFeatureMap, { props: { data: null, ...props } })
}

describe('GeoFeatureMap', () => {
  it('says there is nothing where the answer carries no geography', async () => {
    const wrapper = show({ data: { rows: [{ id: 1, name: 'no geometry here' }] } })
    await flushPromises()

    expect(wrapper.text()).toContain('Map.none')
    expect(wrapper.find('.l-geojson').exists()).toBe(false)
  })

  it('says it is waiting while the source has not answered', async () => {
    const wrapper = show({ data: null, loading: true })
    await flushPromises()

    expect(wrapper.text()).toContain('Map.loading')
    expect(wrapper.text()).not.toContain('Map.none')
  })

  it('counts what it found, and names the kinds of geometry', async () => {
    const wrapper = show({
      data: {
        type: 'FeatureCollection',
        features: [
          { type: 'Feature', geometry: { type: 'Point', coordinates: [7, 51] }, properties: null },
          { type: 'Feature', geometry: { type: 'Point', coordinates: [8, 52] }, properties: null },
          {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[7, 51], [8, 52]] },
            properties: null,
          },
        ],
      },
    })
    await flushPromises()

    expect(wrapper.text()).toContain('Map.features')
    const kinds = wrapper.findAll('.geomap__kind').map((each) => each.text())
    expect(kinds.join(' ')).toContain('Point')
    expect(kinds.join(' ')).toContain('LineString')
    expect(wrapper.find('.l-geojson').exists()).toBe(true)
  })

  /*
   * The defect behind this: a geometry of an unknown type reaches
   * L.geoJSON, which throws and takes the view down. The good features
   * beside it still have to arrive.
   */
  it('draws the good features in an answer that also holds a broken one', async () => {
    const wrapper = show({
      data: {
        type: 'FeatureCollection',
        features: [
          { type: 'Feature', geometry: { type: 'Point', coordinates: [7, 51] }, properties: null },
          { type: 'Feature', geometry: { type: 'Foo', coordinates: [1, 2] }, properties: null },
        ],
      },
    })
    await flushPromises()

    expect(wrapper.find('.l-geojson').exists()).toBe(true)
    const drawn = wrapper.findComponent({ name: 'LGeoJson' }).props('geojson') as {
      features: unknown[]
    }
    expect(drawn.features).toHaveLength(1)
    expect(wrapper.findAll('.geomap__kind').map((each) => each.text()).join(' ')).not.toContain('Foo')
  })

  it('makes its point markers with the Leaflet the map is drawn with (#1302)', async () => {
    const wrapper = show({ data: { type: 'Point', coordinates: [7, 51] } })
    await flushPromises()
    const options = wrapper.findComponent({ name: 'LGeoJson' }).props('options') as {
      pointToLayer: (feature: unknown, latlng: unknown) => unknown
    }
    const marker = options.pointToLayer({}, { lat: 51, lng: 7 })
    expect(leafletModule.circleMarker).toHaveBeenCalledWith({ lat: 51, lng: 7 }, expect.objectContaining({ radius: 5 }))
    expect(marker).toMatchObject({ latlng: { lat: 51, lng: 7 } })
  })

  it('mounts no map once it is gone before Leaflet is there (#1302)', async () => {
    leafletAtOnce = false
    try {
      const wrapper = show({ data: { type: 'Point', coordinates: [7, 51] } })
      await flushPromises()
      expect(wrapper.find('.l-map').exists()).toBe(false)
      const vm = wrapper.vm as unknown as { leaflet?: unknown }
      wrapper.unmount()
      releaseLeaflet?.()
      await flushPromises()
      expect(vm.leaflet ?? null).toBeNull()
    } finally {
      leafletAtOnce = true
    }
  })
})

describe('loadLeaflet', () => {
  it('is the ES module build that vue-leaflet imports, the same module each time', async () => {
    const { loadLeaflet } = await vi.importActual<typeof import('../leaflet')>('../leaflet')
    const first = await loadLeaflet()
    const second = await import('leaflet/dist/leaflet-src.esm')
    expect(first).toBe(second)
    expect(typeof first.circleMarker).toBe('function')
  })
})
