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
 * One thing: which page's settings are open. The button sits above the
 * board, the settings window belongs over it, and neither is inside the
 * other - one value in module scope joins them, and a page is only ever
 * configured one at a time.
 *
 * There used to be a revision here as well, bumped by whoever changed a
 * page, because the registry was framework-free and a rename reached Vue
 * through nothing. The pages are modelled now and announce themselves.
 */
import { ref } from 'vue'

const settingsFor = ref<string | undefined>(undefined)

export function usePages() {
  return {
    /** The page whose settings are open, if any. */
    settingsFor,

    openSettings: (pageId: string) => {
      settingsFor.value = pageId
    },
    closeSettings: () => {
      settingsFor.value = undefined
    },
  }
}
