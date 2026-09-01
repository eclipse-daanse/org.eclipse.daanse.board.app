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
 * The widget palette: whether it shows, where it sits, and whether it is
 * docked to a side.
 *
 * It floats rather than being docked into the layout, so it has a position
 * of its own - and the button that opens it lives in the topbar, which is
 * nowhere near the board it opens over. Module scope joins the two.
 *
 * Docked, it takes the full height of the board: an edge is a side of the
 * room, not a place to hang a small window. The size it had while floating
 * is kept, so pulling it off an edge gives back the window that was there
 * rather than a full-height one that now floats.
 *
 * Where it was left is remembered per browser: it says how this person
 * likes to work, not what the board contains, so it does not travel with a
 * stored state.
 */
import { ref } from 'vue'

const KEY = 'daanse.board.palette'

export type Dock = 'left' | 'right' | null

interface Placement {
  x: number
  y: number
  w: number
  h: number
  /** Which side it is fastened to, if any. */
  dock: Dock
  /** Where and how tall it was before it was docked. */
  freeY: number
  freeH: number
}

const DEFAULT: Placement = { x: 16, y: 16, w: 240, h: 460, dock: null, freeY: 16, freeH: 460 }

export const MIN_W = 180
export const MAX_W = 420
export const MIN_H = 200

function read(): Placement {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULT }
    const d = JSON.parse(raw)
    const num = (v: unknown, fallback: number) => (Number.isFinite(v) ? (v as number) : fallback)
    return {
      x: num(d?.x, DEFAULT.x),
      y: num(d?.y, DEFAULT.y),
      w: num(d?.w, DEFAULT.w),
      h: num(d?.h, DEFAULT.h),
      dock: d?.dock === 'left' || d?.dock === 'right' ? d.dock : null,
      freeY: num(d?.freeY, DEFAULT.freeY),
      freeH: num(d?.freeH, DEFAULT.freeH),
    }
  } catch {
    // Private windows and cleared site data are normal, not an error
    return { ...DEFAULT }
  }
}

/* Placing widgets is what the edit mode is for, so it starts open */
const visible = ref(true)
const placement = ref<Placement>(read())

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(placement.value))
  } catch {
    // Remembering is a convenience; failing to must not break the app
  }
}

function clampWidth(w: number) {
  return Math.min(MAX_W, Math.max(MIN_W, w))
}

export function useWidgetPalette() {
  return {
    visible,
    placement,

    toggle: () => {
      visible.value = !visible.value
    },
    hide: () => {
      visible.value = false
    },

    /**
     * Fastens it to a side, over the full height of the board.
     *
     * What it looked like while floating is put aside first, so leaving the
     * edge restores it rather than leaving a full-height window in mid-air.
     */
    dockTo: (side: Exclude<Dock, null>, bounds: { width: number; height: number }) => {
      const p = placement.value
      const w = clampWidth(p.w)
      placement.value = {
        ...p,
        w,
        x: side === 'left' ? 0 : Math.max(0, bounds.width - w),
        y: 0,
        h: bounds.height,
        dock: side,
        // Only remember the floating shape on the way in, not on every move
        freeY: p.dock ? p.freeY : p.y,
        freeH: p.dock ? p.freeH : p.h,
      }
    },

    /** Back to the window it was before it was fastened to a side. */
    undock: () => {
      const p = placement.value
      if (!p.dock) return
      placement.value = { ...p, y: p.freeY, h: p.freeH, dock: null }
    },

    moveTo: (x: number, y: number) => {
      placement.value = { ...placement.value, x, y }
    },

    /**
     * Docked, only the width can be set - the height belongs to the board.
     * The right edge stays flush, so widening grows inwards.
     */
    resizeTo: (w: number, h: number, bounds?: { width: number; height: number }) => {
      const p = placement.value
      const width = clampWidth(w)
      if (p.dock) {
        placement.value = {
          ...p,
          w: width,
          x: p.dock === 'left' ? 0 : Math.max(0, (bounds?.width ?? p.x + p.w) - width),
        }
        return
      }
      placement.value = { ...p, w: width, h: Math.max(MIN_H, h) }
    },

    /** Called when a drag or resize ends, not on every pixel. */
    settle: persist,

    /**
     * Pulls the window back into view.
     *
     * A window remembered at the edge of a wide screen is off-screen on a
     * narrow one, and a window nobody can reach cannot even be closed. A
     * docked one follows the board's height instead.
     */
    keepInView: (bounds: { width: number; height: number }) => {
      const p = placement.value
      const w = Math.min(clampWidth(p.w), bounds.width)

      if (p.dock) {
        placement.value = {
          ...p,
          w,
          x: p.dock === 'left' ? 0 : Math.max(0, bounds.width - w),
          y: 0,
          h: bounds.height,
        }
        return
      }

      const h = Math.min(p.h, bounds.height)
      placement.value = {
        ...p,
        w,
        h,
        x: Math.min(Math.max(0, p.x), Math.max(0, bounds.width - w)),
        y: Math.min(Math.max(0, p.y), Math.max(0, bounds.height - h)),
      }
    },
  }
}
