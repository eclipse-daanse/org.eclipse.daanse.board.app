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

import { describe, test, expect } from 'vitest'
import { boundsOf, countByType, featuresIn } from '../features'

const POINT = { type: 'Point', coordinates: [11.58, 50.92] }
const LINE = { type: 'LineString', coordinates: [[11.5, 50.9], [11.6, 51.0]] }
const AREA = {
  type: 'Polygon',
  coordinates: [[[11.5, 50.9], [11.7, 50.9], [11.7, 51.1], [11.5, 51.1], [11.5, 50.9]]],
}

const feature = (geometry: unknown, properties: Record<string, unknown> | null = null) => ({
  type: 'Feature',
  geometry,
  properties,
})

/*
 * What the two previews before this one could not do (#1187): the
 * SensorThings one drew markers from a Thing's own shape, the routing one
 * kept the LineStrings out of `data.geojson`. Neither showed a plain
 * FeatureCollection, which is what a catalogue serves.
 */
describe('featuresIn', () => {
  test('a FeatureCollection, which is what an endpoint usually answers', () => {
    const data = { type: 'FeatureCollection', features: [feature(POINT), feature(LINE)] }
    expect(featuresIn(data)).toHaveLength(2)
  })

  test('a single feature on its own', () => {
    expect(featuresIn(feature(AREA))).toHaveLength(1)
  })

  test('a bare geometry, wrapped so the rest sees a feature', () => {
    const found = featuresIn(POINT)
    expect(found).toHaveLength(1)
    expect(found[0].type).toBe('Feature')
    expect(found[0].geometry?.type).toBe('Point')
  })

  test('an array of features', () => {
    expect(featuresIn([feature(POINT), feature(LINE), feature(AREA)])).toHaveLength(3)
  })

  /* The routing source keeps its route under `geojson`, and said so in its
    own preview's code. Found here without being told. */
  test('a collection held under a key', () => {
    const data = { trip: { summary: {} }, geojson: { type: 'FeatureCollection', features: [feature(LINE)] } }
    expect(featuresIn(data)).toHaveLength(1)
  })

  test('geometry several levels down', () => {
    const data = { result: { page: 1, items: [{ record: { shape: AREA } }] } }
    expect(featuresIn(data)).toHaveLength(1)
  })

  /*
   * A row with a geometry column - what a table of places looks like once
   * parsed. The other columns become the feature's properties, so a popup
   * has something to show.
   */
  test('a record carrying its geometry beside its fields', () => {
    const found = featuresIn({ name: 'Freizeitbad', visitors: 120, geometry: POINT })
    expect(found).toHaveLength(1)
    expect(found[0].properties).toEqual({ name: 'Freizeitbad', visitors: 120 })
    expect(found[0].geometry?.type).toBe('Point')
  })

  test('all the geometry types, not only lines or only points', () => {
    const data = { type: 'FeatureCollection', features: [feature(POINT), feature(LINE), feature(AREA)] }
    expect(countByType(featuresIn(data))).toEqual({ Point: 1, LineString: 1, Polygon: 1 })
  })

  test('an answer with no geography contributes nothing', () => {
    expect(featuresIn({ rows: [{ id: 1, name: 'a' }], total: 1 })).toEqual([])
    expect(featuresIn(null)).toEqual([])
    expect(featuresIn('a string')).toEqual([])
  })

  /* A deep answer of no geography is not walked to the bottom. */
  test('the search has a floor', () => {
    let nested: Record<string, unknown> = { leaf: POINT }
    for (let depth = 0; depth < 20; depth++) nested = { down: nested }
    expect(featuresIn(nested)).toEqual([])
  })
})

describe('boundsOf', () => {
  test('covers every coordinate, at any nesting', () => {
    const found = featuresIn({ type: 'FeatureCollection', features: [feature(POINT), feature(AREA)] })
    expect(boundsOf(found)).toEqual([50.9, 11.5, 51.1, 11.7])
  })

  test('a GeometryCollection is walked too', () => {
    const found = featuresIn(feature({ type: 'GeometryCollection', geometries: [POINT, LINE] }))
    expect(boundsOf(found)).toEqual([50.9, 11.5, 51, 11.6])
  })

  test('nothing where there is nothing to measure', () => {
    expect(boundsOf([])).toBeUndefined()
    expect(boundsOf(featuresIn(feature({ type: 'Point', coordinates: ['x', 'y'] })))).toBeUndefined()
  })
})
