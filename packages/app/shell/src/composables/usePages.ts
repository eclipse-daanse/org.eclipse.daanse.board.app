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
 * What the topbar and the board have to agree on about pages.
 *
 * Two things: which page's settings are open, and that something about the
 * pages changed. The button sits above the board, the settings window
 * belongs over it, and neither is inside the other - one value in module
 * scope joins them, and a page is only ever configured one at a time.
 *
 * The revision exists because the page registry is deliberately
 * framework-free: renaming a page writes through updatePage without Vue
 * hearing about it, so the name in the topbar stayed as it was. Whoever
 * changes a page says so; whoever shows one listens.
 */
import { ref } from 'vue'

const settingsFor = ref<string | undefined>(undefined)
const revision = ref(0)

export function usePages() {
  return {
    /** The page whose settings are open, if any. */
    settingsFor,

    /** Bumped whenever a page is added, removed or edited. */
    revision,

    openSettings: (pageId: string) => {
      settingsFor.value = pageId
    },
    closeSettings: () => {
      settingsFor.value = undefined
    },

    /** Say that a page changed, so what shows it can catch up. */
    touch: () => {
      revision.value++
    },
  }
}
