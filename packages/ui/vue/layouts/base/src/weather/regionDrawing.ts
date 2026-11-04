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
 * Drawing a weather region on the page: what each tool does with a press,
 * a move and a release.
 *
 * No DOM in here. The overlay turns pointer events into points in grid
 * units of the page's layout and hands them over; this keeps the draft.
 * The draft is plain numbers, a copy of the page's shapes made when the
 * drawing starts, so Escape can throw it away without the page ever
 * having heard of it, and Done writes it back in one go.
 */
import type { ShapeSpec } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { contains } from './engine'

export type DrawingTool = 'rectangle' | 'ellipse' | 'polygon' | 'select'

export const DRAWING_TOOLS: readonly DrawingTool[] = ['rectangle', 'ellipse', 'polygon', 'select']

/** A point on the board, in grid units. */
export interface GridPoint {
  x: number
  y: number
}

/** A box narrower or lower than this, in grid units, was a click and not a drag. */
const MIN_SIZE = 0.25

export class RegionDrawing {
  /** The draft: what Done writes to the page. */
  shapes: ShapeSpec[]
  tool: DrawingTool = 'rectangle'
  /** The selected shape, -1 for none. */
  selected = -1
  /** The rectangle or ellipse being dragged out, or the polygon being clicked in. */
  pending: ShapeSpec | undefined
  /** Where the pointer is, for the polygon's next edge. */
  cursor: GridPoint | undefined
  /**
   * How near, in grid units, a click has to be to a point to hit it - the
   * first point of a polygon closing it. Set by the overlay from a size
   * in pixels, since that is what a hand can hit.
   */
  tolerance = 0.3

  private anchor: GridPoint | undefined

  constructor(shapes: readonly ShapeSpec[] = []) {
    this.shapes = shapes.map(copyShape)
  }

  /** Picks a tool; a shape half drawn with the last one is dropped. */
  setTool(tool: DrawingTool): void {
    this.pending = undefined
    this.anchor = undefined
    this.tool = tool
    if (tool !== 'select') this.selected = -1
  }

  /** Whether a polygon is being clicked in. */
  get drawingPolygon(): boolean {
    return this.pending?.kind === 'polygon'
  }

  down(point: GridPoint): void {
    if (this.tool === 'rectangle' || this.tool === 'ellipse') {
      this.anchor = point
      this.pending = { kind: this.tool, x: point.x, y: point.y, width: 0, height: 0 }
      return
    }
    if (this.tool === 'polygon') {
      this.cursor = point
      const pending = this.pending?.kind === 'polygon' ? this.pending : undefined
      if (!pending) {
        this.pending = { kind: 'polygon', points: [point] }
        return
      }
      /* Back on the first point: closed */
      if (pending.points.length >= 3 && near(pending.points[0], point, this.tolerance)) {
        this.closePolygon()
        return
      }
      pending.points.push(point)
      return
    }
    this.selected = this.shapeAt(point)
  }

  move(point: GridPoint): void {
    this.cursor = point
    const pending = this.pending
    if (this.anchor && pending && pending.kind !== 'polygon') {
      Object.assign(pending, boxBetween(this.anchor, point))
    }
  }

  up(point: GridPoint): void {
    const pending = this.pending
    if (!this.anchor || !pending || pending.kind === 'polygon') return
    Object.assign(pending, boxBetween(this.anchor, point))
    this.anchor = undefined
    this.pending = undefined
    if (pending.width < MIN_SIZE || pending.height < MIN_SIZE) return
    this.shapes.push(pending)
    this.selected = this.shapes.length - 1
  }

  /** A double click ends the polygon being drawn. */
  doubleClick(): void {
    if (this.drawingPolygon) this.closePolygon()
  }

  /**
   * Ends the polygon being drawn. A double click has pressed twice on the
   * last point, so a point on top of the one before it is dropped first;
   * fewer than three points left enclose nothing and are dropped as well.
   */
  closePolygon(): void {
    const pending = this.pending
    if (pending?.kind !== 'polygon') return
    this.pending = undefined
    const points: GridPoint[] = []
    for (const point of pending.points) {
      if (points.length && near(points[points.length - 1], point, this.tolerance / 3)) continue
      points.push(point)
    }
    if (points.length > 1 && near(points[0], points[points.length - 1], this.tolerance / 3)) points.pop()
    if (points.length < 3) return
    this.shapes.push({ kind: 'polygon', points })
    this.selected = this.shapes.length - 1
  }

  /** Removes the selected shape. */
  remove(): void {
    if (this.selected < 0) return
    this.shapes.splice(this.selected, 1)
    this.selected = -1
  }

  /** The topmost shape under a point, -1 for none. */
  shapeAt(point: GridPoint): number {
    for (let i = this.shapes.length - 1; i >= 0; i--) {
      if (contains(this.shapes[i], point.x, point.y)) return i
    }
    return -1
  }

  /**
   * What Done writes: the draft, with a polygon still being drawn closed
   * if it can be, as copies the page may keep.
   */
  result(): ShapeSpec[] {
    if (this.drawingPolygon) this.closePolygon()
    return this.shapes.map(copyShape)
  }
}

export function copyShape(shape: ShapeSpec): ShapeSpec {
  return shape.kind === 'polygon'
    ? { kind: 'polygon', points: shape.points.map((point) => ({ x: point.x, y: point.y })) }
    : { ...shape }
}

function boxBetween(a: GridPoint, b: GridPoint) {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width: Math.abs(b.x - a.x),
    height: Math.abs(b.y - a.y),
  }
}

function near(a: GridPoint, b: GridPoint, tolerance: number): boolean {
  return Math.hypot(a.x - b.x, a.y - b.y) <= tolerance
}
