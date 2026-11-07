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

/* The viewport event (#1297): one grid of tiles for all, and the viewports of several maps on one source. */
import { describe, expect, it } from 'vitest'
import { Viewports, acceptsEvent, gridTileBox, gridTilesOf, viewportOf, VIEWPORT_EVENT, MAX_GRID_TILES } from '../src/viewport'

describe('the grid of tiles', () => {
  it('gives the same tile wherever the view stands', () => {
    const a = gridTilesOf([11.581, 50.921, 11.589, 50.929], 0.01)
    const b = gridTilesOf([11.585, 50.925, 11.598, 50.928], 0.01)
    expect(a).toEqual(['1158/5092'])
    expect(b).toEqual(['1158/5092', '1159/5092'])
    expect(gridTileBox('1158/5092', 0.01)).toEqual([11.58, 50.92, 11.59, 50.93])
  })

  it('does not take the tile beside an edge that lies on the grid', () => {
    expect(gridTilesOf([11.58, 50.92, 11.6, 50.93], 0.01)).toEqual(['1158/5092', '1159/5092'])
  })

  it('reads no tiles of a view too large to read tile by tile', () => {
    expect(gridTilesOf([10, 50, 12, 52], 0.01)).toEqual([])
    expect(gridTilesOf([10, 50, 10.19, 50.2], 0.01).length).toBeLessThanOrEqual(MAX_GRID_TILES)
  })
})

describe('the viewport event', () => {
  it('is taken by a source that names it, and by no other', () => {
    expect(acceptsEvent({ acceptedEvents: () => [VIEWPORT_EVENT] }, VIEWPORT_EVENT)).toBe(true)
    expect(acceptsEvent({ acceptedEvents: () => [] }, VIEWPORT_EVENT)).toBe(false)
    expect(acceptsEvent({ callEvent() {} }, VIEWPORT_EVENT)).toBe(false)
    expect(acceptsEvent(undefined, VIEWPORT_EVENT)).toBe(false)
  })

  it('is read from its params, and a broken one is none', () => {
    expect(viewportOf({ bbox: [1, 2, 3, 4], zoom: 15, sender: 'map' })).toEqual({ bbox: [1, 2, 3, 4], zoom: 15, sender: 'map' })
    expect(viewportOf({ bbox: null, zoom: 15, sender: 'map' })).toEqual({ bbox: null, zoom: 15, sender: 'map' })
    expect(viewportOf({ bbox: [3, 2, 1, 4], zoom: 15, sender: 'map' })).toBeUndefined()
    expect(viewportOf({ bbox: [1, 2, 3, 4], zoom: 15 })).toBeUndefined()
  })
})

describe('the viewports of one source', () => {
  it('are the tiles of all senders at or above the zoom, once each; a sender that sends null drops out', () => {
    const viewports = new Viewports()
    expect(viewports.set({ bbox: [11.581, 50.921, 11.589, 50.929], zoom: 16, sender: 'a' })).toBe(true)
    expect(viewports.set({ bbox: [11.585, 50.925, 11.598, 50.928], zoom: 15, sender: 'b' })).toBe(true)
    expect(viewports.set({ bbox: [11.585, 50.925, 11.598, 50.928], zoom: 15, sender: 'b' })).toBe(false)
    expect(viewports.tiles(0.01, 14).sort()).toEqual(['1158/5092', '1159/5092'])
    expect(viewports.tiles(0.01, 16)).toEqual(['1158/5092'])
    expect(viewports.set({ bbox: null, zoom: 0, sender: 'a' })).toBe(true)
    expect(viewports.size).toBe(1)
    expect(viewports.tiles(0.01, 16)).toEqual([])
  })
})
