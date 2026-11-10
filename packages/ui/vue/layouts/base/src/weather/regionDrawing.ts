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
 *
 * Deleting goes by the selection. With the select tool a click on a shape
 * selects it, Shift+click adds it to the selection (or takes it out), a
 * click on empty space clears it; Delete removes what is selected, and
 * Escape clears the selection before it leaves the mode.
 *
 * A shape selected on its own has handles: a box one on each corner and
 * edge, which resize it, a polygon one on each point, which moves it, and
 * one between each two points, which adds a point there. A double click
 * on a point removes it - down to three. Dragging a selected shape moves
 * everything selected.
 * Snapping, on by default, puts every point drawn or moved on a whole
 * grid unit, and moves a shape by whole units.
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

/** The handles of a box: its corners and the middles of its edges. */
export type BoxHandle = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'
const BOX_HANDLES: readonly BoxHandle[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']

/**
 * One handle of the selected shape, where it is. `point` is a polygon's
 * point by its index; `insert` sits between point `index` and the next.
 */
export type Handle =
  | { kind: 'box'; id: BoxHandle; x: number; y: number }
  | { kind: 'point'; index: number; x: number; y: number }
  | { kind: 'insert'; index: number; x: number; y: number }

/** What a press with the select tool has taken hold of, until it is let go. */
type Grip =
  | { kind: 'move'; from: GridPoint; originals: Map<number, ShapeSpec> }
  | { kind: 'box'; id: BoxHandle; edges: { left: number; top: number; right: number; bottom: number } }
  | { kind: 'point'; index: number }

export class RegionDrawing {
  /** The draft: what Done writes to the page. */
  shapes: ShapeSpec[]
  tool: DrawingTool = 'rectangle'
  /** The selected shapes, by index, in the order they were picked. */
  selection: number[] = []
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
  /** Whether points land on whole grid units. */
  snap = true

  private anchor: GridPoint | undefined
  private grip: Grip | undefined

  constructor(shapes: readonly ShapeSpec[] = []) {
    this.shapes = shapes.map(copyShape)
  }

  /** Picks a tool; a shape half drawn with the last one is dropped. */
  setTool(tool: DrawingTool): void {
    this.pending = undefined
    this.anchor = undefined
    this.grip = undefined
    this.tool = tool
  }

  /** The shape selected on its own, the one with handles; -1 for none or several. */
  get selected(): number {
    return this.selection.length === 1 ? this.selection[0] : -1
  }

  isSelected(index: number): boolean {
    return this.selection.includes(index)
  }

  clearSelection(): void {
    this.selection = []
  }

  /** A point as it lands: on the nearest whole grid unit while snapping. */
  place(point: GridPoint): GridPoint {
    return this.snap ? { x: Math.round(point.x), y: Math.round(point.y) } : { x: point.x, y: point.y }
  }

  /** The handles of the selected shape; none unless the select tool is in hand. */
  get handles(): Handle[] {
    const shape = this.tool === 'select' ? this.shapes[this.selected] : undefined
    if (!shape) return []
    if (shape.kind === 'polygon') {
      const found: Handle[] = shape.points.map((p, index) => ({ kind: 'point', index, x: p.x, y: p.y }))
      shape.points.forEach((p, index) => {
        const next = shape.points[(index + 1) % shape.points.length]
        found.push({ kind: 'insert', index, x: (p.x + next.x) / 2, y: (p.y + next.y) / 2 })
      })
      return found
    }
    const { x, y, width, height } = shape
    const at: Record<BoxHandle, GridPoint> = {
      nw: { x, y },
      n: { x: x + width / 2, y },
      ne: { x: x + width, y },
      e: { x: x + width, y: y + height / 2 },
      se: { x: x + width, y: y + height },
      s: { x: x + width / 2, y: y + height },
      sw: { x, y: y + height },
      w: { x, y: y + height / 2 },
    }
    return BOX_HANDLES.map((id) => ({ kind: 'box', id, ...at[id] }))
  }

  /** The handle of the selected shape under a point; a point before what lies between. */
  handleAt(point: GridPoint): Handle | undefined {
    let best: Handle | undefined
    let distance = Infinity
    for (const handle of this.handles) {
      const d = Math.hypot(handle.x - point.x, handle.y - point.y) + (handle.kind === 'insert' ? 1e-6 : 0)
      if (d <= this.tolerance && d < distance) {
        best = handle
        distance = d
      }
    }
    return best
  }

  /** Whether a polygon is being clicked in. */
  get drawingPolygon(): boolean {
    return this.pending?.kind === 'polygon'
  }

  /** A press; `additive` is Shift held, which adds to the selection. */
  down(raw: GridPoint, additive = false): void {
    if (this.tool === 'select') return this.grab(raw, additive)
    const point = this.place(raw)
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
    }
  }

  /** A press with the select tool: a handle of the selected shape, a shape, or nothing. */
  private grab(raw: GridPoint, additive: boolean): void {
    const handle = additive ? undefined : this.handleAt(raw)
    const shape = this.shapes[this.selected]
    if (handle && shape) {
      if (handle.kind === 'box' && shape.kind !== 'polygon') {
        this.grip = {
          kind: 'box',
          id: handle.id,
          edges: { left: shape.x, top: shape.y, right: shape.x + shape.width, bottom: shape.y + shape.height },
        }
      } else if (handle.kind === 'point') {
        this.grip = { kind: 'point', index: handle.index }
      } else if (handle.kind === 'insert' && shape.kind === 'polygon') {
        /* A new point where the handle was, held at once */
        shape.points.splice(handle.index + 1, 0, this.place(raw))
        this.grip = { kind: 'point', index: handle.index + 1 }
      }
      return
    }
    const hit = this.shapeAt(raw)
    this.grip = undefined
    if (hit < 0) {
      if (!additive) this.clearSelection()
      return
    }
    if (additive) {
      this.selection = this.isSelected(hit)
        ? this.selection.filter((index) => index !== hit)
        : [...this.selection, hit]
      return
    }
    /* Pressed on one already selected: the selection stays, to be dragged together */
    if (!this.isSelected(hit)) this.selection = [hit]
    this.grip = {
      kind: 'move',
      from: raw,
      originals: new Map(this.selection.map((index) => [index, copyShape(this.shapes[index])])),
    }
  }

  /** The grabbed handle or shape follows the pointer. */
  private drag(raw: GridPoint): void {
    const grip = this.grip
    if (grip?.kind === 'move') {
      let dx = raw.x - grip.from.x
      let dy = raw.y - grip.from.y
      if (this.snap) {
        dx = Math.round(dx)
        dy = Math.round(dy)
      }
      for (const [index, original] of grip.originals) this.shapes[index] = moved(original, dx, dy)
      return
    }
    const shape = this.shapes[this.selected]
    if (!grip || !shape) return
    const point = this.place(raw)
    if (grip.kind === 'point' && shape.kind === 'polygon') {
      shape.points[grip.index] = point
      return
    }
    if (grip.kind === 'box' && shape.kind !== 'polygon') {
      const edges = { ...grip.edges }
      if (grip.id.includes('w')) edges.left = point.x
      if (grip.id.includes('e')) edges.right = point.x
      if (grip.id.includes('n')) edges.top = point.y
      if (grip.id.includes('s')) edges.bottom = point.y
      Object.assign(shape, boxBetween({ x: edges.left, y: edges.top }, { x: edges.right, y: edges.bottom }))
    }
  }

  move(raw: GridPoint): void {
    if (this.tool === 'select') return this.drag(raw)
    const point = this.place(raw)
    this.cursor = point
    const pending = this.pending
    if (this.anchor && pending && pending.kind !== 'polygon') {
      Object.assign(pending, boxBetween(this.anchor, point))
    }
  }

  up(raw: GridPoint): void {
    if (this.tool === 'select') {
      this.drag(raw)
      this.grip = undefined
      return
    }
    const point = this.place(raw)
    const pending = this.pending
    if (!this.anchor || !pending || pending.kind === 'polygon') return
    Object.assign(pending, boxBetween(this.anchor, point))
    this.anchor = undefined
    this.pending = undefined
    if (pending.width < MIN_SIZE || pending.height < MIN_SIZE) return
    this.shapes.push(pending)
    this.selection = [this.shapes.length - 1]
  }

  /**
   * A double click ends the polygon being drawn; with the select tool, on
   * a point of the selected polygon, it removes that point.
   */
  doubleClick(raw?: GridPoint): void {
    if (this.drawingPolygon) return this.closePolygon()
    if (this.tool !== 'select' || !raw) return
    const handle = this.handleAt(raw)
    if (handle?.kind === 'point') this.removePoint(handle.index)
  }

  /** Removes a point of the selected polygon, as long as three are left. */
  removePoint(index: number): void {
    const shape = this.shapes[this.selected]
    if (shape?.kind !== 'polygon' || shape.points.length <= 3) return
    shape.points.splice(index, 1)
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
    this.selection = [this.shapes.length - 1]
  }

  /** Removes the selected shapes; nothing without a selection. */
  remove(): void {
    if (this.selection.length === 0) return
    const gone = new Set(this.selection)
    this.shapes = this.shapes.filter((_, index) => !gone.has(index))
    this.selection = []
  }

  /**
   * What Escape does: drops a shape half drawn, or else clears the
   * selection. False when there was neither - the mode is left then.
   */
  escape(): boolean {
    if (this.pending) {
      this.pending = undefined
      this.anchor = undefined
      return true
    }
    if (this.selection.length) {
      this.clearSelection()
      return true
    }
    return false
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

function moved(shape: ShapeSpec, dx: number, dy: number): ShapeSpec {
  if (shape.kind === 'polygon') {
    return { kind: 'polygon', points: shape.points.map((p) => ({ x: p.x + dx, y: p.y + dy })) }
  }
  return { ...shape, x: shape.x + dx, y: shape.y + dy }
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
