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
 * The map tells the sources of its symbol layers what it shows (#1297).
 *
 * A source that reads by area - a WFS with the extent viewport - then reads
 * only the tiles in view. The event goes only to a source that names it in
 * acceptedEvents(); most sources take no such event. Moving the map sends
 * it once it has stood still for a moment, and a source the map no longer
 * uses, or a map that goes away, sends the empty view so the source drops
 * the map.
 */
import { VIEWPORT_EVENT, acceptsEvent, type Box } from 'org.eclipse.daanse.board.app.lib.datasource.base'

interface EventTarget {
  callEvent(event: string, params: unknown, shouldUpdate?: boolean): unknown
}

export interface ViewportSenderOptions {
  /** Who sends - the widget id. */
  sender: () => string
  /** The ids of the data sources to tell. */
  sources: () => string[]
  resolve: (id: string) => unknown
  /** How long the map stands still before it tells (ms). */
  delay?: number
}

export function createViewportSender(options: ViewportSenderOptions) {
  const delay = options.delay ?? 300
  let timer: ReturnType<typeof setTimeout> | undefined
  let last: { bbox: Box; zoom: number } | undefined
  const told = new Set<string>()

  function tell(id: string, bbox: Box | null, zoom: number) {
    const source = options.resolve(id)
    if (!acceptsEvent(source, VIEWPORT_EVENT)) return false
    try {
      void (source as EventTarget).callEvent(VIEWPORT_EVENT, { bbox, zoom, sender: options.sender() })
    } catch (e) {
      console.warn(e)
    }
    return true
  }

  /* Tells every source of now, and the empty view to those it told before and uses no more. */
  function flush() {
    timer = undefined
    if (!last || !options.sender()) return
    const now = new Set(options.sources().filter(Boolean))
    for (const id of [...told]) if (!now.has(id)) {
      tell(id, null, last.zoom)
      told.delete(id)
    }
    for (const id of now) if (tell(id, last.bbox, last.zoom)) told.add(id)
  }

  return {
    /** The map has moved to this view; it is told once the map stands still. */
    moved(bbox: Box, zoom: number) {
      last = { bbox, zoom }
      if (timer) clearTimeout(timer)
      timer = setTimeout(flush, delay)
    },
    /** The sources may have changed: the last view again, at once. */
    resend() {
      if (timer) clearTimeout(timer)
      flush()
    },
    /** The map goes away: every source it told drops it. */
    stop() {
      if (timer) clearTimeout(timer)
      timer = undefined
      for (const id of told) tell(id, null, last?.zoom ?? 0)
      told.clear()
    },
  }
}

/*
 * MapLibre tiles are 512 px: a pixel is this many degrees of longitude at
 * this zoom.
 */
const degreesPerPixel = (zoom: number) => 360 / (512 * 2 ** zoom)

/**
 * The view of a map as a box to read. A tilted map sees to the horizon, and
 * its bounds then hold more than anyone looks at; the box is the bounds,
 * but at most twice as far from the middle as the view of the untilted map.
 */
export function viewOfMap(bounds: Box, center: [number, number], zoom: number, width: number, height: number): Box {
  const [lon, lat] = center
  const perPixel = degreesPerPixel(zoom)
  const halfWidth = width * perPixel
  const halfHeight = height * perPixel * Math.cos((lat * Math.PI) / 180)
  return [
    Math.max(bounds[0], lon - halfWidth),
    Math.max(bounds[1], lat - halfHeight),
    Math.min(bounds[2], lon + halfWidth),
    Math.min(bounds[3], lat + halfHeight),
  ]
}
