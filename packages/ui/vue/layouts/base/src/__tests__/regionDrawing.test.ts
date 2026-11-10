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
import type { ShapeSpec } from 'org.eclipse.daanse.board.app.lib.model.workspace'
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

  it('adds to the selection with Shift, clears it on empty space, and deletes what is selected', () => {
    const d = new RegionDrawing([
      { kind: 'rectangle', x: 0, y: 0, width: 2, height: 2 },
      { kind: 'rectangle', x: 4, y: 0, width: 2, height: 2 },
      { kind: 'rectangle', x: 8, y: 0, width: 2, height: 2 },
    ])
    d.setTool('select')
    click(d, 1, 1)
    d.down({ x: 9, y: 1 }, true)
    d.up({ x: 9, y: 1 })
    expect(d.selection).toEqual([0, 2])
    /* Several selected: no handles */
    expect(d.handles).toEqual([])
    /* Shift on a selected one takes it out again */
    d.down({ x: 1, y: 1 }, true)
    expect(d.selection).toEqual([2])
    d.down({ x: 1, y: 1 }, true)
    click(d, 20, 20)
    expect(d.selection).toEqual([])
    d.remove()
    expect(d.shapes).toHaveLength(3)

    click(d, 1, 1)
    d.down({ x: 5, y: 1 }, true)
    d.remove()
    expect(d.shapes).toEqual([{ kind: 'rectangle', x: 8, y: 0, width: 2, height: 2 }])
    expect(d.selection).toEqual([])
  })

  it('moves every selected shape together', () => {
    const d = new RegionDrawing([
      { kind: 'rectangle', x: 0, y: 0, width: 2, height: 2 },
      { kind: 'ellipse', x: 4, y: 0, width: 2, height: 2 },
    ])
    d.setTool('select')
    click(d, 1, 1)
    d.down({ x: 5, y: 1 }, true)
    d.up({ x: 5, y: 1 })
    drag(d, [1, 1], [2, 3])
    expect(d.shapes).toEqual([
      { kind: 'rectangle', x: 1, y: 2, width: 2, height: 2 },
      { kind: 'ellipse', x: 5, y: 2, width: 2, height: 2 },
    ])
  })

  it('clears the selection on a first Escape and says so; on a second there is nothing left to clear', () => {
    const d = new RegionDrawing([{ kind: 'rectangle', x: 0, y: 0, width: 2, height: 2 }])
    d.setTool('select')
    click(d, 1, 1)
    expect(d.escape()).toBe(true)
    expect(d.selection).toEqual([])
    expect(d.escape()).toBe(false)
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

describe('the handles of a drawn shape', () => {
  function selecting(shapes: ShapeSpec[]) {
    const d = new RegionDrawing(shapes)
    d.setTool('select')
    return d
  }

  it('resizes a box by a corner, keeping the opposite corner', () => {
    const d = selecting([{ kind: 'rectangle', x: 2, y: 2, width: 4, height: 3 }])
    click(d, 3, 3)
    drag(d, [6, 5], [8, 9])
    expect(d.shapes[0]).toEqual({ kind: 'rectangle', x: 2, y: 2, width: 6, height: 7 })
  })

  it('resizes a box by an edge only in its direction, and past the other edge', () => {
    const d = selecting([{ kind: 'ellipse', x: 2, y: 2, width: 4, height: 2 }])
    click(d, 4, 3)
    drag(d, [2, 3], [9, 7])
    expect(d.shapes[0]).toEqual({ kind: 'ellipse', x: 6, y: 2, width: 3, height: 2 })
  })

  it('moves a shape dragged by its body', () => {
    const d = selecting([{ kind: 'polygon', points: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 4 }] }])
    drag(d, [2, 1], [5, 3])
    expect(d.shapes[0]).toEqual({ kind: 'polygon', points: [{ x: 3, y: 2 }, { x: 7, y: 2 }, { x: 5, y: 6 }] })
  })

  it('moves, adds and removes the points of a polygon', () => {
    const d = selecting([{ kind: 'polygon', points: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 4 }] }])
    click(d, 2, 1)
    /* A point moved */
    drag(d, [4, 0], [6, 1])
    /* A point added between the first two, and pulled out */
    drag(d, [3, 0.5], [3, -2])
    expect(d.shapes[0]).toEqual({
      kind: 'polygon',
      points: [{ x: 0, y: 0 }, { x: 3, y: -2 }, { x: 6, y: 1 }, { x: 2, y: 4 }],
    })
    /* And removed again by a double click - down to three, the least a polygon has */
    d.doubleClick({ x: 3, y: -2 })
    expect((d.shapes[0] as { points: unknown[] }).points).toHaveLength(3)
    d.doubleClick({ x: 6, y: 1 })
    expect((d.shapes[0] as { points: unknown[] }).points).toHaveLength(3)
  })

  it('puts what is drawn on whole grid units while snapping, and not otherwise', () => {
    const d = new RegionDrawing()
    drag(d, [1.2, 0.9], [4.6, 3.4])
    expect(d.shapes[0]).toEqual({ kind: 'rectangle', x: 1, y: 1, width: 4, height: 2 })

    d.snap = false
    drag(d, [1.2, 0.9], [4.6, 3.4])
    expect(d.shapes[1]).toMatchObject({ x: 1.2, y: 0.9 })
    expect((d.shapes[1] as { width: number }).width).toBeCloseTo(3.4)
  })

  it('moves a shape by whole units while snapping', () => {
    const d = selecting([{ kind: 'rectangle', x: 1, y: 1, width: 2, height: 2 }])
    drag(d, [2, 2], [3.4, 2.7])
    expect(d.shapes[0]).toMatchObject({ x: 2, y: 2 })
  })

  it('shows handles only with the select tool, on the selected shape', () => {
    const d = new RegionDrawing([{ kind: 'rectangle', x: 0, y: 0, width: 2, height: 2 }])
    expect(d.handles).toEqual([])
    d.setTool('select')
    click(d, 1, 1)
    expect(d.handles).toHaveLength(8)
  })
})

