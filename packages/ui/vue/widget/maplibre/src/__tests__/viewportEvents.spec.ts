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

/* The map tells the sources of its symbol layers what it shows (#1297). */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { VIEWPORT_EVENT } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { createViewportSender, viewOfMap } from '../viewportEvents'

function source(accepts: boolean) {
  return { acceptedEvents: () => (accepts ? [VIEWPORT_EVENT] : []), callEvent: vi.fn() }
}

describe('the viewport sender of the map', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('tells only the sources that take the event, once the map stands still', () => {
    const wfs = source(true)
    const csv = source(false)
    const sender = createViewportSender({ sender: () => 'map-1', sources: () => ['wfs', 'csv', ''], resolve: (id) => ({ wfs, csv })[id] })
    sender.moved([1, 2, 3, 4], 15)
    sender.moved([1.1, 2, 3, 4], 16)
    expect(wfs.callEvent).not.toHaveBeenCalled()
    vi.advanceTimersByTime(300)
    expect(wfs.callEvent).toHaveBeenCalledTimes(1)
    expect(wfs.callEvent).toHaveBeenCalledWith(VIEWPORT_EVENT, { bbox: [1.1, 2, 3, 4], zoom: 16, sender: 'map-1' })
    expect(csv.callEvent).not.toHaveBeenCalled()
  })

  it('sends the empty view to a source it no longer uses, and to all when the map goes away', () => {
    const a = source(true)
    const b = source(true)
    let ids = ['a', 'b']
    const sender = createViewportSender({ sender: () => 'map-1', sources: () => ids, resolve: (id) => ({ a, b })[id] })
    sender.moved([1, 2, 3, 4], 15)
    vi.advanceTimersByTime(300)
    ids = ['a']
    sender.resend()
    expect(b.callEvent).toHaveBeenLastCalledWith(VIEWPORT_EVENT, { bbox: null, zoom: 15, sender: 'map-1' })
    expect(a.callEvent).toHaveBeenCalledTimes(2)
    sender.stop()
    expect(a.callEvent).toHaveBeenLastCalledWith(VIEWPORT_EVENT, { bbox: null, zoom: 15, sender: 'map-1' })
    expect(b.callEvent).toHaveBeenCalledTimes(2)
  })
})

describe('the view of a map as a box', () => {
  it('is the bounds of an untilted map', () => {
    // 800 x 600 px at zoom 16 are about 0.0086 x 0.0041 degrees; these bounds are inside twice that.
    expect(viewOfMap([11.5832, 50.9218, 11.5968, 50.9282], [11.59, 50.925], 16, 800, 600)).toEqual([11.5832, 50.9218, 11.5968, 50.9282])
  })

  it('stops a tilted map short of the horizon', () => {
    const box = viewOfMap([11.0, 50.9, 12.2, 51.6], [11.59, 50.925], 16, 800, 600)
    // At zoom 16 (512 px tiles), 800 px are about 0.0086 degrees: the box goes that far from the middle, twice the untilted half.
    expect(box[0]).toBeCloseTo(11.59 - 0.00858, 4)
    expect(box[2]).toBeCloseTo(11.59 + 0.00858, 4)
    expect(box[1]).toBeGreaterThan(50.9)
    expect(box[3]).toBeLessThan(50.94)
  })
})
