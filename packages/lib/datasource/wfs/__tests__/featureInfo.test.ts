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
 * #1282: features from WMS GetFeatureInfo, for a QGIS Server that offers a
 * layer as WMS only (the trees of the Jena portal). The answer is recorded
 * in the portal's form (__tests__/fixtures), with made-up values.
 */
import { describe, it, expect, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { featureInfoPath, featuresOfFeatureInfo, mergedOf, tilesOf, MAX_TILES, CORNER_TOLERANCE } from '../src/featureInfo'
import { WfsStore } from '../src/classes/WfsStore'

const answer = readFileSync(join(__dirname, 'fixtures', 'baeume.featureinfo.xml'), 'utf-8')

describe('the tiles of a box', () => {
  it('are about square on the ground and cover the box, never too many', () => {
    const tiles = tilesOf('11.60,50.95,11.63,50.97', 0.01)
    // 0.01 degree of latitude, 0.0159 of longitude at 51 N: 2 rows, 2 columns of 0.015.
    expect(tiles).toHaveLength(4)
    expect(tiles[0][0]).toBe(11.6)
    expect(tiles[0][3] - tiles[0][1]).toBeCloseTo(0.01, 9)
    expect(tiles[0][2] - tiles[0][0]).toBeCloseTo(0.015, 9)
    expect(Math.max(...tiles.map((t) => t[2]))).toBeCloseTo(11.63, 9)
    // A box a little wider than one tile is shared out evenly, without a sliver.
    const two = tilesOf('11.610,50.955,11.626,50.963', 0.01)
    expect(two).toHaveLength(2)
    expect(two[0][2] - two[0][0]).toBeCloseTo(0.008, 9)
    expect(tilesOf('', 0.01)).toEqual([])
    expect(tilesOf('0,0,10,10', 0.01)).toHaveLength(MAX_TILES)
  })
})

describe('a GetFeatureInfo request', () => {
  it('asks a 101 px tile at its middle, latitude first, for up to 5000 features in text/xml', () => {
    const path = featureInfoPath({ url: '', typeName: 'Bäume', pointTolerance: 70 }, [11.61, 50.95, 11.62, 50.96])
    const query = Object.fromEntries(new URLSearchParams(path.slice(1)))
    expect(query).toMatchObject({
      SERVICE: 'WMS',
      VERSION: '1.3.0',
      REQUEST: 'GetFeatureInfo',
      LAYERS: 'Bäume',
      QUERY_LAYERS: 'Bäume',
      CRS: 'EPSG:4326',
      BBOX: '50.95,11.61,50.96,11.62',
      WIDTH: '101',
      I: '50',
      INFO_FORMAT: 'text/xml',
      FEATURE_COUNT: '5000',
      FI_POINT_TOLERANCE: '72',
    })
  })

  it('reaches the corners of the tile: a tolerance below 50 * sqrt(2) px is raised to it', () => {
    const tolerance = (pointTolerance?: number) =>
      new URLSearchParams(featureInfoPath({ url: '', typeName: 'Bäume', pointTolerance }, [11.61, 50.95, 11.62, 50.96]).slice(1)).get('FI_POINT_TOLERANCE')
    expect(CORNER_TOLERANCE).toBe(72)
    expect(CORNER_TOLERANCE).toBeGreaterThan(50 * Math.SQRT2)
    expect([tolerance(undefined), tolerance(70), tolerance(0), tolerance(90)]).toEqual(['72', '72', '72', '90'])
  })
})

describe('a GetFeatureInfo answer', () => {
  it('becomes points with the attributes as properties; a feature without a box is left out', () => {
    const features = featuresOfFeatureInfo(answer)
    expect(features).toHaveLength(2)
    expect(features[0]).toEqual({
      type: 'Feature',
      id: 'Bäume.101',
      geometry: { type: 'Point', coordinates: [11.615, 50.958] },
      properties: { Baumnummer: 1, Baumart: 'Tilia cordata, Winterlinde', Baumhöhe: 14, Kronendurchmesser: 9 },
    })
    expect(features[1].properties).toMatchObject({ Baumhöhe: '', Kronendurchmesser: 6 })
  })

  it('of two tiles holds a feature on their edge once', () => {
    const features = featuresOfFeatureInfo(answer)
    expect(mergedOf([features, [features[1]]]).features).toHaveLength(2)
  })
})

describe('the store in the GetFeatureInfo mode', () => {
  it('asks every tile of the box and answers the features of all of them', async () => {
    const store = new WfsStore()
    const fetch = vi.fn(async () => new Response(answer, { headers: { 'content-type': 'text/xml' } }))
    ;(store as any).connectionRepository = { getConnection: () => ({ fetch }) }
    store.init({ connection: 'jena', typeName: 'Bäume', mode: 'getFeatureInfo', bbox: '11.60,50.95,11.62,50.96', tileSize: 0.01 } as any)
    const collection = (await store.getData('geojson')) as any
    expect(fetch).toHaveBeenCalledTimes(2)
    expect((fetch.mock.calls[0] as unknown as [{ url: string }])[0].url).toContain('REQUEST=GetFeatureInfo')
    expect(collection.features).toHaveLength(2)
  })

  it('says it needs a box', async () => {
    const store = new WfsStore()
    ;(store as any).connectionRepository = { getConnection: () => ({ fetch: vi.fn() }) }
    store.init({ connection: 'jena', typeName: 'Bäume', mode: 'getFeatureInfo' } as any)
    expect(await store.getData('geojson')).toEqual({ type: 'FeatureCollection', features: [] })
    await Promise.resolve()
    expect(store.lastFailure?.message).toContain('needs a box')
  })
})
