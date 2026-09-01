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
 * The windows fastened to an edge, and how they share it.
 *
 * An edge is one column, not a pile of separate windows: everything docked
 * to the left has the same width and divides the height between them. So
 * the windows have to know about each other, which is what this holds -
 * module scope in a shared bundle, so one register serves every window
 * wherever it was created.
 *
 * Height is shared in proportion to what each window wants rather than in
 * equal parts: an overview map needs a fraction of what a palette does, and
 * splitting a column down the middle would give it far more than it can use
 * and take that from the list beside it.
 */
import { reactive } from 'vue'

export type DockSide = 'left' | 'right'

interface Entry {
  side: DockSide
  /** The height it would take on its own. */
  want: number
  /** The least it can be shown at. */
  min: number
  /** Registration order, which is the order down the column. */
  seq: number
}

const entries = reactive(new Map<string, Entry>())
let counter = 0

/** Column width per side: an edge is one column, so its windows agree on it. */
const widths = reactive<Record<DockSide, number>>({ left: 240, right: 240 })

export function dockWidth(side: DockSide): number {
  return widths[side]
}

export function setDockWidth(side: DockSide, width: number) {
  widths[side] = width
}

export function joinDock(id: string, side: DockSide, want: number, min: number) {
  const existing = entries.get(id)
  entries.set(id, { side, want, min, seq: existing?.seq ?? counter++ })
}

export function leaveDock(id: string) {
  entries.delete(id)
}

/** Everything on one side, in the order it sits down the column. */
function onSide(side: DockSide): Array<[string, Entry]> {
  return [...entries.entries()]
    .filter(([, e]) => e.side === side)
    .sort((a, b) => a[1].seq - b[1].seq)
}

/**
 * Where one window sits in its column, and how tall it is.
 *
 * A plain read of the register, not a computed: the caller decides when to
 * ask. Building a computed per call would create a new one on every
 * evaluation, and each would re-track the reactive register - which is how
 * a redraw turns into a loop.
 *
 * Returns null while the window is not docked, which is the caller's signal
 * to place itself.
 */
export function dockSlot(id: string, available: number): { y: number; h: number } | null {
  const entry = entries.get(id)
  if (!entry) return null

  const column = onSide(entry.side)
  if (!column.length) return null

  /*
   * Every window in the column is measured the same way, from what the
   * register says about each - not from the asking window's own minimum.
   * Otherwise two windows divide the same column differently and leave a
   * gap between them, or overlap.
   */
  const floorSum = column.reduce((sum, [, e]) => sum + e.min, 0)
  const scale = floorSum > available && floorSum > 0 ? available / floorSum : 1
  const flexible = Math.max(0, available - floorSum * scale)
  const wanted = column.reduce((sum, [, e]) => sum + Math.max(1, e.want), 0)

  /*
   * The last one takes what rounding left over, so the column ends exactly
   * at the bottom rather than a few pixels short of it.
   */
  let y = 0
  for (let i = 0; i < column.length; i++) {
    const [key, e] = column[i]
    const last = i === column.length - 1
    const share = last
      ? Math.max(0, available - y)
      : Math.round(e.min * scale + (flexible * Math.max(1, e.want)) / wanted)
    if (key === id) return { y, h: share }
    y += share
  }
  return null
}

/** How many windows share a side - what a window watches to notice company. */
export function dockCount(side: DockSide): number {
  return onSide(side).length
}
