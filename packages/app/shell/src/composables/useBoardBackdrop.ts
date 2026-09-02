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
 * Whether the page's own background shows while the board is being edited.
 *
 * Editing happens on a plain surface with a dot grid, because a photograph
 * behind the widgets makes it hard to see what you are moving. But a widget
 * placed without seeing that photograph lands in the wrong place, so this
 * lets it be shown when it matters and hidden again when it is in the way.
 *
 * The answer is written onto the root element rather than passed down: the
 * button is in the topbar and the surface is drawn by a layout bundle, and
 * neither needs to know the other exists for a CSS rule to read it. Same
 * way the theme reaches every component.
 */
import { ref } from 'vue'

const ATTRIBUTE = 'data-board-backdrop'
const KEY = 'daanse.board.backdrop'

function read(): boolean {
  try {
    return localStorage.getItem(KEY) === 'on'
  } catch {
    // Private windows and cleared site data are normal, not an error
    return false
  }
}

/* Off by default: the grid is what the edit mode is for. */
const shown = ref(read())

function paint() {
  document.documentElement.setAttribute(ATTRIBUTE, shown.value ? 'on' : 'off')
}

function persist() {
  try {
    localStorage.setItem(KEY, shown.value ? 'on' : 'off')
  } catch {
    // Remembering is a convenience; failing to must not break the app
  }
}

export function useBoardBackdrop() {
  return {
    shown,
    toggle: () => {
      shown.value = !shown.value
      persist()
      paint()
    },
  }
}

/** Called once at startup, so the attribute matches what was remembered. */
export function initBoardBackdrop() {
  paint()
}
