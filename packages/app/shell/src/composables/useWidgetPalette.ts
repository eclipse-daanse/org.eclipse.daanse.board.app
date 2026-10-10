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
 * Whether the widget palette shows.
 *
 * Only that: where it sits, how large it is and which edge it holds are the
 * floating window's business, and it remembers them itself. What is left is
 * a single question asked in one place and answered in another - the button
 * is in the topbar, the palette is over the board.
 */
import { ref } from 'vue'

/* Placing widgets is what the edit mode is for, so it starts open */
const visible = ref(true)

export function useWidgetPalette() {
  return {
    visible,
    toggle: () => {
      visible.value = !visible.value
    },
    hide: () => {
      visible.value = false
    },
  }
}
