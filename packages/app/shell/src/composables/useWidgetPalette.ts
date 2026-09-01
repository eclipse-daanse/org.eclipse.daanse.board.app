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
 * The widget palette: whether it shows, and where it sits.
 *
 * It floats now rather than being docked, so it has a position of its own -
 * and the button that opens it lives in the topbar, which is nowhere near
 * the board it opens over. Module scope joins the two.
 *
 * Where it was left is remembered per browser: it says how this person
 * likes to work, not what the board contains, so it does not travel with a
 * stored state.
 */
import { ref } from 'vue'

const KEY = 'daanse.board.palette'

interface Placement {
  x: number
  y: number
  w: number
  h: number
}

const DEFAULT: Placement = { x: 16, y: 16, w: 240, h: 460 }

export const MIN_W = 180
export const MAX_W = 420
export const MIN_H = 200

function read(): Placement {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULT }
    const data = JSON.parse(raw)
    return {
      x: Number.isFinite(data?.x) ? data.x : DEFAULT.x,
      y: Number.isFinite(data?.y) ? data.y : DEFAULT.y,
      w: Number.isFinite(data?.w) ? data.w : DEFAULT.w,
      h: Number.isFinite(data?.h) ? data.h : DEFAULT.h,
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

    moveTo: (x: number, y: number) => {
      placement.value = { ...placement.value, x, y }
    },
    resizeTo: (w: number, h: number) => {
      placement.value = {
        ...placement.value,
        w: Math.min(MAX_W, Math.max(MIN_W, w)),
        h: Math.max(MIN_H, h),
      }
    },

    /** Called when a drag or resize ends, not on every pixel. */
    settle: persist,

    /**
     * Pulls the window back into view.
     *
     * A window remembered at the edge of a wide screen is off-screen on a
     * narrow one, and a window nobody can reach cannot even be closed.
     */
    keepInView: (bounds: { width: number; height: number }) => {
      const p = placement.value
      const w = Math.min(p.w, bounds.width)
      const h = Math.min(p.h, bounds.height)
      placement.value = {
        w,
        h,
        x: Math.min(Math.max(0, p.x), Math.max(0, bounds.width - w)),
        y: Math.min(Math.max(0, p.y), Math.max(0, bounds.height - h)),
      }
    },
  }
}
