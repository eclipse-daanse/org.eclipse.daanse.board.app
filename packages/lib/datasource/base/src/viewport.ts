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

/**
 * The part of the map a reader sees, as an event to a data source (#1297).
 *
 * A map sends it when it has moved; a source that reads by area - a WFS,
 * say - then reads only what is in view instead of one fixed box. A source
 * says that it takes the event through acceptedEvents(), so a map sends it
 * to no other: most sources log a warning for an event they do not know,
 * and some read again on every event.
 *
 * The tiles are of one grid for all: a tile is the same wherever the view
 * stands, so a source can keep the tiles it has read and read a tile once.
 */

export const VIEWPORT_EVENT = 'viewport'

export type Box = [west: number, south: number, east: number, north: number]

export interface Viewport {
  /** West, south, east, north in degrees (WGS 84). Null: the sender sees nothing any more. */
  bbox: Box | null
  zoom: number
  /** Who sends it - a widget id. A source keeps one viewport per sender. */
  sender: string
}

/** Whether a source takes the event: it names it in acceptedEvents(). */
export function acceptsEvent(source: unknown, event: string): boolean {
  const accepted = (source as { acceptedEvents?: () => readonly string[] } | null | undefined)?.acceptedEvents
  return typeof accepted === 'function' && accepted.call(source).includes(event)
}

/** A viewport as the event carries it, or undefined when it is none. */
export function viewportOf(params: unknown): Viewport | undefined {
  const p = params as Partial<Viewport> | null | undefined
  if (!p || typeof p.sender !== 'string' || !p.sender) return undefined
  const zoom = Number(p.zoom)
  if (p.bbox === null) return { bbox: null, zoom: Number.isFinite(zoom) ? zoom : 0, sender: p.sender }
  const box = Array.isArray(p.bbox) ? p.bbox.map(Number) : []
  if (box.length !== 4 || box.some((n) => !Number.isFinite(n)) || box[0]! >= box[2]! || box[1]! >= box[3]!) return undefined
  return { bbox: box as Box, zoom: Number.isFinite(zoom) ? zoom : 0, sender: p.sender }
}

/* A view of a whole continent is not read tile by tile. */
export const MAX_GRID_TILES = 400

/**
 * The tiles of the grid of this size (degrees of latitude; across, the same
 * degrees of longitude) that the box touches, as keys "column/row". Empty
 * where there are more than MAX_GRID_TILES.
 */
export function gridTilesOf(bbox: Box, size: number): string[] {
  const d = size > 0 ? size : 0.01
  const [west, south, east, north] = bbox
  const c0 = Math.floor(west / d)
  const c1 = Math.ceil(east / d - 1e-9) - 1
  const r0 = Math.floor(south / d)
  const r1 = Math.ceil(north / d - 1e-9) - 1
  const count = (c1 - c0 + 1) * (r1 - r0 + 1)
  if (count > MAX_GRID_TILES || count <= 0) return []
  const keys: string[] = []
  for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) keys.push(`${c}/${r}`)
  return keys
}

/** The box of a tile of the grid. */
export function gridTileBox(key: string, size: number): Box {
  const d = size > 0 ? size : 0.01
  const [c, r] = key.split('/').map(Number) as [number, number]
  return [round(c * d), round(r * d), round((c + 1) * d), round((r + 1) * d)]
}

function round(n: number): number {
  return Math.round(n * 1e9) / 1e9
}

/**
 * The viewports of all senders of one source. The tiles to read are those
 * of every sender at or above the smallest zoom; a sender that sends null
 * drops out.
 */
export class Viewports {
  private bySender = new Map<string, Viewport>()

  /** Takes a viewport in; says whether that changed anything. */
  set(viewport: Viewport): boolean {
    const before = this.bySender.get(viewport.sender)
    if (viewport.bbox === null) return this.bySender.delete(viewport.sender)
    this.bySender.set(viewport.sender, viewport)
    return !before || before.zoom !== viewport.zoom || before.bbox?.join() !== viewport.bbox.join()
  }

  get size(): number {
    return this.bySender.size
  }

  /** The keys of all tiles in view of a sender whose zoom is at least minZoom, once each. */
  tiles(size: number, minZoom = 0): string[] {
    const keys = new Set<string>()
    for (const viewport of this.bySender.values()) {
      if (!viewport.bbox || viewport.zoom < minZoom) continue
      for (const key of gridTilesOf(viewport.bbox, size)) keys.add(key)
    }
    return [...keys]
  }
}
