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

import { describe, it, expect, vi } from 'vitest'
import { followZoom, type ZoomSource } from '../zoom'

/** A Leaflet map, as far as this needs one. */
function mapAt(zoom: number | undefined) {
  const handlers = new Map<string, () => void>()
  let held = zoom
  return {
    getZoom: () => held,
    on: (event: string, handler: () => void) => handlers.set(event, handler),
    /** What the user does. */
    zoomTo(next: number) {
      held = next
      handlers.get('zoomend')?.()
    },
    knows: (event: string) => handlers.has(event),
  }
}

describe('following the map zoom', () => {
  it('reports where the map is, straight away', () => {
    const report = vi.fn()
    followZoom(mapAt(12), 16, report)

    expect(report).toHaveBeenCalledWith(12)
  })

  /*
   * The path that used to throw: the handler assigned to an undeclared
   * name, so the first zoom of the map raised a ReferenceError inside a
   * Leaflet callback.
   */
  it('reports again when the map is zoomed', () => {
    const report = vi.fn()
    const map = mapAt(12)
    followZoom(map, 16, report)

    expect(map.knows('zoomend')).toBe(true)
    map.zoomTo(17)

    expect(report).toHaveBeenLastCalledWith(17)
    expect(report).toHaveBeenCalledTimes(2)
  })

  /*
   * During startup the Leaflet object exists before it has a view. The
   * configured zoom is the one the map is about to be at, which beats
   * undefined - for which the layer substitutes 99, above every
   * threshold, so every icon shows at every zoom and none of them scale.
   */
  it('falls back to the configured zoom where the map cannot say', () => {
    const report = vi.fn()
    followZoom(mapAt(undefined), 16, report)

    expect(report).toHaveBeenCalledWith(16)
  })

  it('falls back again on a later zoom, rather than reporting nothing', () => {
    const report = vi.fn()
    const map = mapAt(undefined)
    followZoom(map, 16, report)
    map.zoomTo(undefined as unknown as number)

    expect(report).toHaveBeenLastCalledWith(16)
  })

  /* A map that is not there yet still reports what the settings ask for. */
  it('works without a map at all', () => {
    const report = vi.fn()

    expect(() => followZoom(undefined, 16, report)).not.toThrow()
    expect(report).toHaveBeenCalledWith(16)

    report.mockClear()
    expect(() => followZoom(null, undefined, report)).not.toThrow()
    expect(report).toHaveBeenCalledWith(undefined)
  })

  /* An object that is not a map, which is what a half-built one looks like. */
  it('works where the map has no zoom to give and no events to offer', () => {
    const report = vi.fn()

    expect(() => followZoom({} as ZoomSource, 14, report)).not.toThrow()
    expect(report).toHaveBeenCalledWith(14)
  })
})
