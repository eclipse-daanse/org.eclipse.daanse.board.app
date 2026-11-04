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

import { describe, expect, it } from 'vitest'
import { RegionDrawing } from '../weather/regionDrawing'

/** A press, a drag and a release, as the overlay passes them on. */
function drag(d: RegionDrawing, from: [number, number], to: [number, number]) {
  d.down({ x: from[0], y: from[1] })
  d.move({ x: (from[0] + to[0]) / 2, y: (from[1] + to[1]) / 2 })
  d.move({ x: to[0], y: to[1] })
  d.up({ x: to[0], y: to[1] })
}

/** A click: a press and a release on the same spot. */
function click(d: RegionDrawing, x: number, y: number) {
  d.down({ x, y })
  d.up({ x, y })
}

describe('drawing a weather region', () => {
  it('draws a rectangle with the rectangle tool, dragged either way', () => {
    const d = new RegionDrawing()
    d.setTool('rectangle')
    drag(d, [6, 5], [2, 1])
    expect(d.shapes).toEqual([{ kind: 'rectangle', x: 2, y: 1, width: 4, height: 4 }])
    expect(d.selected).toBe(0)
  })

  it('draws an ellipse with the ellipse tool', () => {
    const d = new RegionDrawing()
    d.setTool('ellipse')
    drag(d, [1, 1], [5, 3])
    expect(d.shapes).toEqual([{ kind: 'ellipse', x: 1, y: 1, width: 4, height: 2 }])
  })

  it('makes nothing of a click with a box tool', () => {
    const d = new RegionDrawing()
    click(d, 3, 3)
    expect(d.shapes).toEqual([])
  })

  it('closes a polygon on a double click', () => {
    const d = new RegionDrawing()
    d.setTool('polygon')
    click(d, 0, 0)
    click(d, 4, 0)
    expect(d.shapes).toEqual([])
    /* A double click presses twice on its spot before it is a double click */
    click(d, 2, 3)
    click(d, 2, 3)
    d.doubleClick()
    expect(d.shapes).toEqual([{ kind: 'polygon', points: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 3 }] }])
    expect(d.drawingPolygon).toBe(false)
  })

  it('closes a polygon on a click on its first point', () => {
    const d = new RegionDrawing()
    d.setTool('polygon')
    for (const [x, y] of [[1, 1], [5, 1], [5, 4], [1, 4]]) click(d, x, y)
    click(d, 1.1, 0.95)
    expect(d.shapes).toEqual([
      { kind: 'polygon', points: [{ x: 1, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 4 }, { x: 1, y: 4 }] },
    ])
  })

  it('keeps no polygon of fewer than three points', () => {
    const d = new RegionDrawing()
    d.setTool('polygon')
    click(d, 1, 1)
    click(d, 3, 1)
    click(d, 3, 1)
    d.doubleClick()
    expect(d.shapes).toEqual([])
  })

  it('selects the topmost shape under a click, and deletes it', () => {
    const d = new RegionDrawing([
      { kind: 'rectangle', x: 0, y: 0, width: 4, height: 4 },
      { kind: 'ellipse', x: 2, y: 2, width: 4, height: 4 },
    ])
    d.setTool('select')
    click(d, 3.5, 3.5)
    expect(d.selected).toBe(1)
    click(d, 0.5, 0.5)
    expect(d.selected).toBe(0)
    d.remove()
    expect(d.shapes).toEqual([{ kind: 'ellipse', x: 2, y: 2, width: 4, height: 4 }])
    click(d, 9, 9)
    expect(d.selected).toBe(-1)
  })

  it('edits a copy: the shapes it started from stay as they were', () => {
    const start = [{ kind: 'rectangle' as const, x: 0, y: 0, width: 4, height: 4 }]
    const d = new RegionDrawing(start)
    d.setTool('select')
    click(d, 1, 1)
    d.remove()
    expect(start).toHaveLength(1)
  })
})
