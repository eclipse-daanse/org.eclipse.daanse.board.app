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
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import GeoFeatureMap from '../GeoFeatureMap.vue'
import { FREE_BASE_MAP_ATTRIBUTION, FREE_BASE_MAP_URL } from '../baseMap'

/* The tile layer is replaced by a stub that shows what it was given, so the
  test reads the address the map would fetch tiles from (#1197). */
vi.mock('@vue-leaflet/vue-leaflet', () => ({
  LMap: { name: 'LMap', template: '<div class="l-map"><slot /></div>' },
  LTileLayer: {
    name: 'LTileLayer',
    props: ['url', 'attribution'],
    template: '<div class="l-tiles" :data-url="url" :data-attribution="attribution" />',
  },
  LGeoJson: { name: 'LGeoJson', props: ['geojson'], template: '<div class="l-geojson" />' },
}))
/* The map mounts once the Leaflet it draws with is there (#1302). */
vi.mock('../leaflet', () => ({ loadLeaflet: async () => ({ circleMarker: () => ({}) }) }))
vi.mock('leaflet/dist/leaflet.css', () => ({}))

describe('the background of a map nobody chose one for', () => {
  it('comes from a tile server that asks for no key', () => {
    expect(FREE_BASE_MAP_URL).toContain('tile.openstreetmap.org')
    expect(FREE_BASE_MAP_URL).not.toContain('cartocdn')
    expect(FREE_BASE_MAP_ATTRIBUTION).toContain('OpenStreetMap')
  })

  it('is what the map draws its tiles from', async () => {
    const wrapper = mount(GeoFeatureMap, { props: { data: null } })
    await flushPromises()
    const tiles = wrapper.find('.l-tiles')
    expect(tiles.attributes('data-url')).toBe(FREE_BASE_MAP_URL)
    expect(tiles.attributes('data-attribution')).toBe(FREE_BASE_MAP_ATTRIBUTION)
  })

  it('gives way to a background the caller names', async () => {
    const wrapper = mount(GeoFeatureMap, {
      props: { data: null, baseMapUrl: 'https://tiles.example.org/{z}/{x}/{y}.png' },
    })
    await flushPromises()
    expect(wrapper.find('.l-tiles').attributes('data-url')).toBe('https://tiles.example.org/{z}/{x}/{y}.png')
  })
})
