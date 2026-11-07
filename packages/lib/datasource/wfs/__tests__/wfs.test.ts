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
 * #1282: a WFS feature type as a data source. The answers are recorded in
 * the form the services give them (__tests__/fixtures), with made-up values.
 */
import { describe, it, expect, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { boxOf, columnTypesOfSchema, describeFeatureTypePath, exceptionOf, featuresOf, getCapabilitiesPath, getFeaturePath, tableOf } from '../src/wfs'
import { WfsStore } from '../src/classes/WfsStore'

const fixture = (name: string) => readFileSync(join(__dirname, 'fixtures', name), 'utf-8')

describe('the GetFeature request', () => {
  it('names typeNames and count in 2.0.0, GeoJSON in EPSG:4326 by default', () => {
    const path = getFeaturePath({ typeName: 'baumbestand:strassenbaeume', maxFeatures: 200 })
    const query = new URLSearchParams(path.slice(1))
    expect(Object.fromEntries(query)).toEqual({
      service: 'WFS',
      version: '2.0.0',
      request: 'GetFeature',
      typeNames: 'baumbestand:strassenbaeume',
      outputFormat: 'application/json',
      srsName: 'EPSG:4326',
      count: '200',
    })
  })

  it('names typeName and maxFeatures in 1.1.0, and sends a box and a filter', () => {
    const path = getFeaturePath({
      url: 'ows?map=trees',
      typeName: 'trees',
      version: '1.1.0',
      maxFeatures: 0,
      bbox: '13.44, 52.44, 13.45, 52.45',
      filter: "gattung_deutsch='Linde'",
    })
    expect(path.startsWith('ows?map=trees&service=WFS&version=1.1.0')).toBe(true)
    const query = new URLSearchParams(path.split('?')[1])
    expect(query.get('typeName')).toBe('trees')
    expect(query.has('maxFeatures')).toBe(false)
    expect(query.get('bbox')).toBe('13.44,52.44,13.45,52.45,EPSG:4326')
    expect(query.get('cql_filter')).toBe("gattung_deutsch='Linde'")
    expect(boxOf('1,2,3')).toBeNull()
    expect(getCapabilitiesPath({})).toBe('?service=WFS&request=GetCapabilities')
  })
})

describe('the answer of a WFS', () => {
  it('is GeoJSON as it comes', () => {
    const collection = featuresOf(fixture('strassenbaeume.geojson.json'), 'application/json;charset=UTF-8')
    expect(collection.features.map((f) => f.properties?.gattung_deutsch)).toEqual(['Linde', 'Ahorn'])
  })

  it('is read from GML where the service has no GeoJSON, latitude first where the URN says so', () => {
    const collection = featuresOf(fixture('strassenbaeume.gml32.xml'), 'text/xml; subtype=gml/3.2')
    expect(collection.features).toHaveLength(2)
    expect(collection.features[0]).toEqual({
      type: 'Feature',
      id: 'strassenbaeume.1',
      geometry: { type: 'Point', coordinates: [13.4482, 52.4431] },
      properties: { gattung_deutsch: 'Linde', baumhoehe: 15 },
    })
    expect(collection.features[1].geometry).toEqual({
      type: 'Polygon',
      coordinates: [[[13.4, 52.4], [13.41, 52.4], [13.41, 52.41], [13.4, 52.4]]],
    })
  })

  it('says what the service said where it refuses', () => {
    expect(exceptionOf(fixture('exception.xml'))).toBe('Service unknown or not permitted')
    expect(() => featuresOf(fixture('exception.xml'), 'text/xml')).toThrow('Service unknown or not permitted')
    expect(exceptionOf(fixture('strassenbaeume.gml32.xml'))).toBeNull()
  })

  it('makes a table of the properties', () => {
    const table = tableOf(featuresOf(fixture('strassenbaeume.geojson.json')))
    expect(table.headers).toEqual(['gattung_deutsch', 'art_dtsch', 'baumhoehe', 'kronedurch'])
    expect(table.rows[0]).toEqual(['Linde', 'Winter-Linde', 15, 8])
  })
})

describe('the WFS store', () => {
  function storeAnswering(answer: () => Promise<Response>) {
    const store = new WfsStore()
    const fetch = vi.fn(answer)
    ;(store as any).connectionRepository = { getConnection: () => ({ fetch }) }
    store.init({ connection: 'berlin', typeName: 'baumbestand:strassenbaeume', maxFeatures: 2 } as any)
    return { store, fetch }
  }

  it('asks the connection for the feature type and answers GeoJSON, a table where one is asked for', async () => {
    const { store, fetch } = storeAnswering(async () => new Response(fixture('strassenbaeume.geojson.json'), { headers: { 'content-type': 'application/json' } }))
    const [collection, table] = await Promise.all([store.getData('geojson'), store.getData('DataTable')])
    // Two asking at once share one read.
    expect(fetch).toHaveBeenCalledTimes(1)
    expect((fetch.mock.calls[0] as unknown as [{ url: string }])[0].url).toContain('typeNames=baumbestand%3Astrassenbaeume')
    expect((collection as any).features).toHaveLength(2)
    expect((table as any).headers[0]).toBe('gattung_deutsch')
  })

  it('answers no features and says why where the service refuses', async () => {
    const { store } = storeAnswering(async () => new Response(fixture('exception.xml'), { headers: { 'content-type': 'text/xml' } }))
    expect(await store.getData('geojson')).toEqual({ type: 'FeatureCollection', features: [] })
    await Promise.resolve()
    expect(store.lastFailure?.message).toBe('Service unknown or not permitted')
  })
})

describe('the column types of a feature type (#1295)', () => {
  it('come from DescribeFeatureType: numbers, dates and text; the geometry is left out', () => {
    expect(describeFeatureTypePath({ typeName: 'baumbestand:strassenbaeume' })).toBe(
      '?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=baumbestand%3Astrassenbaeume',
    )
    expect(columnTypesOfSchema(fixture('strassenbaeume.xsd'))).toEqual([
      { column: 'gattung_deutsch', type: 'string' },
      { column: 'pflanzjahr', type: 'number' },
      { column: 'baumhoehe', type: 'number' },
      { column: 'erfasst', type: 'date' },
    ])
  })

  it('read the values of the features before the store answers', async () => {
    const store = new WfsStore()
    const fetch = vi.fn(async () => new Response(JSON.stringify({
      type: 'FeatureCollection',
      features: [{ type: 'Feature', geometry: null, properties: { baumhoehe: '15', name: 'Linde' } }],
    }), { headers: { 'content-type': 'application/json' } }))
    ;(store as any).connectionRepository = { getConnection: () => ({ fetch }) }
    store.init({ connection: 'c', typeName: 't', columnTypes: [{ column: 'baumhoehe', type: 'number', unit: 'm' }] } as any)
    const collection = (await store.getData('geojson')) as any
    expect(collection.features[0].properties).toEqual({ baumhoehe: 15, name: 'Linde' })
  })
})
