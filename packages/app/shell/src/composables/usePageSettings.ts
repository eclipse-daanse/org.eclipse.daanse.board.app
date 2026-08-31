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
 * Which page's settings are open.
 *
 * The topbar asks for them and the board shows them: the button sits above
 * the board, the window belongs over it, and neither is inside the other.
 * One value in module scope is enough to join them - a page is only ever
 * configured one at a time.
 */
import { ref } from 'vue'

const openFor = ref<string | undefined>(undefined)

export function usePageSettings() {
  return {
    openFor,
    open: (pageId: string) => {
      openFor.value = pageId
    },
    close: () => {
      openFor.value = undefined
    },
  }
}
