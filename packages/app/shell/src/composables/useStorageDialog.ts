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

import { ref } from 'vue'

/**
 * Whether storage is open over the board.
 *
 * Storing and opening used to be reached by going to the launcher with
 * `?view=storage`. That is a one-way trip: the launcher is the screen one
 * picks a board from, so arriving there means the board one was keeping
 * is no longer open, and nothing leads back to it.
 *
 * It is a dialog over whatever is on screen instead - the same storage
 * view, in a box one can close. Module scope, because every screen opens
 * the same one: the topbar, and the board asking where to keep itself.
 *
 * The launcher keeps its storage tab. There is no board to come back to
 * there, so nothing is lost by it being a screen.
 */
const open = ref(false)

/**
 * Where the dialog opens, when the caller knows.
 *
 * A board that has a place it came from should not be asked where it
 * belongs - it should be shown standing there, with its name filled in
 * (#1200). Left undefined, the dialog opens on the first place, as it
 * always did.
 */
const openOn = ref<{ placeUri?: string; name?: string } | undefined>(undefined)

export function useStorageDialog() {
  return {
    open,
    openOn,
    show: (on?: { placeUri?: string; name?: string }) => {
      openOn.value = on
      open.value = true
    },
    hide: () => {
      open.value = false
      openOn.value = undefined
    },
  }
}
