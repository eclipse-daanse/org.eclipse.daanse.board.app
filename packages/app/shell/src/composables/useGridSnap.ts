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
 * Whether a dragged widget snaps to the grid.
 *
 * On by default: a board where everything lines up looks deliberate, and
 * that is what the grid is drawn for. Off when a widget has to sit
 * somewhere the grid does not offer - against a feature of a background
 * image, or hard against another widget.
 *
 * Written onto the root element, like the backdrop switch: the button is in
 * the topbar, the dragging is done by a layout bundle, and neither has to
 * know the other exists.
 */
import { ref } from 'vue'

const ATTRIBUTE = 'data-board-snap'
const KEY = 'daanse.board.snap'

function read(): boolean {
  try {
    const stored = localStorage.getItem(KEY)
    return stored === null ? true : stored === 'on'
  } catch {
    // Private windows and cleared site data are normal, not an error
    return true
  }
}

const snapping = ref(read())

function paint() {
  document.documentElement.setAttribute(ATTRIBUTE, snapping.value ? 'on' : 'off')
}

function persist() {
  try {
    localStorage.setItem(KEY, snapping.value ? 'on' : 'off')
  } catch {
    // Remembering is a convenience; failing to must not break the app
  }
}

export function useGridSnap() {
  return {
    snapping,
    toggle: () => {
      snapping.value = !snapping.value
      persist()
      paint()
    },
  }
}

/** Called once at startup, so the attribute matches what was remembered. */
export function initGridSnap() {
  paint()
}
