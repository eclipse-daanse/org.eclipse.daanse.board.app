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
 * Whether a copied widget waits to be pasted, and the way to paste it.
 *
 * The clipboard is the layouts' (ui.vue.layouts.base); it says on the root
 * element whether it holds something, and pastes when it hears the event
 * below - beside the widget it was copied from, since the pointer is up
 * here and not on the board. Like the snap switch, neither side has to
 * know the other exists (#1225).
 */
import { ref } from 'vue'

const ATTRIBUTE = 'data-board-clipboard'
const PASTE_REQUEST = 'daanse:board-paste'

const read = () =>
  typeof document !== 'undefined' && document.documentElement.hasAttribute(ATTRIBUTE)

const full = ref(read())
let watching: MutationObserver | null = null

function watch() {
  if (watching || typeof MutationObserver === 'undefined') return
  watching = new MutationObserver(() => {
    full.value = read()
  })
  watching.observe(document.documentElement, { attributes: true, attributeFilter: [ATTRIBUTE] })
}

export function useBoardClipboard() {
  watch()
  full.value = read()
  return {
    /** True while there is a copied widget to paste. */
    full,
    paste: () => window.dispatchEvent(new CustomEvent(PASTE_REQUEST)),
  }
}
