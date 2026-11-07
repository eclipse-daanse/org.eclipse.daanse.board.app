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
 * The extent viewport (#1297): the store reads the tiles a map shows, each
 * tile once, nothing further out than minZoom, and tells its subscribers.
 */
import { describe, it, expect, vi } from 'vitest'
import { VIEWPORT_EVENT, acceptsEvent } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { WfsStore, TILE_CACHE_SIZE } from '../src/classes/WfsStore'

/* One point feature in the middle of the box the request asks for, its id from the box. */
function answerOfBox(url: string): Response {
  const bbox = new URLSearchParams(url.split('?')[1]).get('bbox')!.split(',').slice(0, 4).map(Number)
  const [w, s, e, n] = bbox as [number, number, number, number]
  return new Response(JSON.stringify({
    type: 'FeatureCollection',
    features: [
      { type: 'Feature', id: `tree.${w}.${s}`, geometry: { type: 'Point', coordinates: [(w + e) / 2, (s + n) / 2] }, properties: { h: '12' } },
      // On the edge, in every tile: it is counted once.
      { type: 'Feature', id: 'edge', geometry: { type: 'Point', coordinates: [w, s] }, properties: { h: '3' } },
    ],
  }), { headers: { 'content-type': 'application/json' } })
}

function viewportStore(config: Record<string, unknown> = {}) {
  const store = new WfsStore()
  const fetch = vi.fn(async ({ url }: { url: string }) => answerOfBox(url))
  ;(store as any).connectionRepository = { getConnection: () => ({ fetch }) }
  store.init({ connection: 'jena', typeName: 'baeume', extent: 'viewport', tileSize: 0.01, minZoom: 15, bbox: '11.5,50.9,11.51,50.91', ...config } as any)
  const heard = vi.fn()
  store.subscribe(heard)
  return { store, fetch, heard }
}

const view = (bbox: number[] | null, zoom = 16, sender = 'map-1') => ({ bbox, zoom, sender })

describe('the WFS store with the extent viewport', () => {
  it('takes the viewport event only with that extent', () => {
    expect(acceptsEvent(viewportStore().store, VIEWPORT_EVENT)).toBe(true)
    expect(acceptsEvent(viewportStore({ extent: 'fixed' }).store, VIEWPORT_EVENT)).toBe(false)
  })

  it('reads the tiles in view, each once, and tells its subscribers', async () => {
    const { store, fetch, heard } = viewportStore()
    await store.callEvent(VIEWPORT_EVENT, view([11.581, 50.921, 11.598, 50.928]))
    expect(fetch).toHaveBeenCalledTimes(2)
    const boxes = fetch.mock.calls.map(([{ url }]) => new URLSearchParams(url.split('?')[1]).get('bbox'))
    expect(boxes.sort()).toEqual(['11.58,50.92,11.59,50.93,EPSG:4326', '11.59,50.92,11.6,50.93,EPSG:4326'])
    expect(heard).toHaveBeenCalledTimes(1)
    const data = (await store.getData('geojson')) as { features: { id: string; properties: { h: unknown } }[] }
    expect(data.features.map((f) => f.id).sort()).toEqual(['edge', 'tree.11.58.50.92', 'tree.11.59.50.92'])
    // A move inside the same tiles reads nothing again.
    await store.callEvent(VIEWPORT_EVENT, view([11.582, 50.922, 11.597, 50.927]))
    await store.getData('geojson')
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it('reads nothing further out than minZoom, and has then no features', async () => {
    const { store, fetch } = viewportStore()
    await store.callEvent(VIEWPORT_EVENT, view([11.581, 50.921, 11.598, 50.928], 14))
    expect(fetch).not.toHaveBeenCalled()
    expect(((await store.getData('geojson')) as { features: unknown[] }).features).toEqual([])
  })

  it('reads the tiles of all maps on it; a map that sends null drops out', async () => {
    const { store, fetch } = viewportStore()
    await store.callEvent(VIEWPORT_EVENT, view([11.581, 50.921, 11.589, 50.929], 16, 'a'))
    await store.callEvent(VIEWPORT_EVENT, view([11.611, 50.921, 11.619, 50.929], 16, 'b'))
    expect(((await store.getData('geojson')) as { features: unknown[] }).features).toHaveLength(3)
    await store.callEvent(VIEWPORT_EVENT, view(null, 16, 'b'))
    expect(((await store.getData('geojson')) as { features: unknown[] }).features).toHaveLength(2)
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it('reads nothing and has no features until a map sends its view; the fixed box is never read (#1300)', async () => {
    const { store, fetch, heard } = viewportStore()
    expect(((await store.getData('geojson')) as { features: unknown[] }).features).toEqual([])
    expect(fetch).not.toHaveBeenCalled()
    await store.callEvent(VIEWPORT_EVENT, view([11.581, 50.921, 11.589, 50.929]))
    expect(heard).toHaveBeenCalledTimes(1)
    expect(((await store.getData('geojson')) as { features: unknown[] }).features).toHaveLength(2)
    const boxes = fetch.mock.calls.map(([{ url }]) => new URLSearchParams(url.split('?')[1]).get('bbox'))
    expect(boxes).toEqual(['11.58,50.92,11.59,50.93,EPSG:4326'])
    // A map that goes away leaves no area again.
    await store.callEvent(VIEWPORT_EVENT, view(null))
    expect(((await store.getData('geojson')) as { features: unknown[] }).features).toEqual([])
  })

  it('answers at most maxViewportFeatures, those of the tiles nearest the middle first', async () => {
    const { store } = viewportStore({ maxViewportFeatures: 2 })
    // Three tiles across; the middle one is nearest the middle of the view.
    await store.callEvent(VIEWPORT_EVENT, view([11.581, 50.921, 11.609, 50.929]))
    const data = (await store.getData('geojson')) as { features: { id: string }[] }
    expect(data.features.map((f) => f.id)).toEqual(['tree.11.59.50.92', 'edge'])
  })

  it('takes no viewport event with the extent fixed', async () => {
    const { store, fetch, heard } = viewportStore({ extent: 'fixed' })
    await store.callEvent(VIEWPORT_EVENT, view([11.581, 50.921, 11.598, 50.928]))
    expect(fetch).not.toHaveBeenCalled()
    expect(heard).not.toHaveBeenCalled()
  })

  it('keeps at most TILE_CACHE_SIZE tiles, and reads a dropped one again', async () => {
    const { store, fetch } = viewportStore()
    // 17 x 17 tiles: more than the cache keeps.
    await store.callEvent(VIEWPORT_EVENT, view([11.5, 50.9, 11.67, 51.07]))
    expect(fetch).toHaveBeenCalledTimes(289)
    expect(289).toBeGreaterThan(TILE_CACHE_SIZE)
    // The middle tile was read first, so it was dropped first.
    await store.callEvent(VIEWPORT_EVENT, view([11.581, 50.981, 11.589, 50.989]))
    expect(fetch).toHaveBeenCalledTimes(290)
  })
})
