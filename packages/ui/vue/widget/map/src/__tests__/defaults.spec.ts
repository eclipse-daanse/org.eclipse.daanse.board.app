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

import { describe, it, expect } from 'vitest'
import { drawsGeoJson, geoJsonLayer, geoJsonStyle, presetFor } from '../defaults'

const id = () => 'style-1'

describe('what a map made from a source starts with', () => {
  /*
   * The defect this closes: such a map arrived with the source set and
   * nothing else. The GeoJSON layer draws once per style, so with no
   * style there was no loop to run and no geometry on the map - and
   * nothing anywhere saying a layer and a style had to be added by hand.
   */
  it('gives a GeoJSON source a layer and a style to draw it with', () => {
    const preset = presetFor('rest', { layers: [], styles: [] }, id)

    expect(preset?.layers).toHaveLength(1)
    expect(preset?.styles).toHaveLength(1)
  })

  it('points the layer at the style, which is how the layer finds one at all', () => {
    const preset = presetFor('rest', { layers: [], styles: [] }, id)

    expect(preset?.layers[0].styleIds).toEqual([preset?.styles[0].id])
  })

  /* A layer without a source of its own is handed the widget's own. */
  it('leaves the layer without a source id, so it draws the widget\'s', () => {
    expect(geoJsonLayer('s1')).not.toHaveProperty('datasourceId')
    expect(geoJsonLayer('s1').type).toBe('REST-GEOJSON')
  })

  /*
   * Without conditions the comparator lets the whole collection through,
   * which is what is wanted before anybody has said what to single out.
   */
  it('draws every feature until someone says otherwise', () => {
    expect(geoJsonStyle('s1')).not.toHaveProperty('datastream')
  })

  describe('and what it leaves alone', () => {
    it('a map that already has a layer', () => {
      expect(presetFor('rest', { layers: [{ type: 'WMS' }], styles: [] }, id)).toBeUndefined()
    })

    it('a map that already has a style', () => {
      expect(presetFor('rest', { layers: [], styles: [{ id: 'mine' }] }, id)).toBeUndefined()
    })

    it('a map with no source', () => {
      expect(presetFor(undefined, { layers: [], styles: [] }, id)).toBeUndefined()
      expect(presetFor('', { layers: [], styles: [] }, id)).toBeUndefined()
    })

    /*
     * SensorThings keeps its geography inside observations and brings its
     * own layer; a GeoJSON preset on top of it would draw nothing and sit
     * in the settings as noise.
     */
    it('a source whose geography is read another way', () => {
      expect(drawsGeoJson('ogcsta')).toBe(false)
      expect(presetFor('ogcsta', { layers: [], styles: [] }, id)).toBeUndefined()
    })

    it('a kind of source it has never heard of', () => {
      expect(drawsGeoJson('something-new')).toBe(false)
      expect(presetFor('something-new', { layers: [], styles: [] }, id)).toBeUndefined()
    })
  })

  /* Both kinds whose geography is GeoJSON once asked for properly. */
  it('covers the sources that answer geography as GeoJSON', () => {
    expect(drawsGeoJson('rest')).toBe(true)
    expect(drawsGeoJson('valhalla')).toBe(true)
  })
})
