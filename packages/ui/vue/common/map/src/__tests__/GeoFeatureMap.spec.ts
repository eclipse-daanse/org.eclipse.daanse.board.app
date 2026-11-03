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
vi.mock('leaflet', () => ({ default: { latLngBounds: () => ({}) } }))
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
})
