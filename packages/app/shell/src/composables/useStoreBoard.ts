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
import { useWorkspaceFile } from './useWorkspaceFile'
import { useStorageDialog } from './useStorageDialog'

/**
 * Keeping the board, from wherever one happens to be.
 *
 * It writes over the state the board came from. A board that was never
 * stored has no entry to write over and no name to write it under, so
 * storage opens over whatever is on screen and asks for both - over it,
 * so closing it leaves one where one was.
 *
 * The board's own screen and the topbar both offer this, which is why it
 * is here rather than on either of them: the same press has to mean the
 * same thing while building a page as while looking at the board.
 *
 * Call it from a setup; `saveInPlace` reaches its repositories through
 * inject.
 */
export function useStoreBoard() {
  const { saveInPlace } = useWorkspaceFile()
  const { show: showStorage } = useStorageDialog()

  const storing = ref(false)
  const stored = ref(false)
  const failed = ref('')

  async function store(): Promise<void> {
    if (storing.value) return
    storing.value = true
    stored.value = false
    failed.value = ''
    try {
      if (await saveInPlace()) {
        stored.value = true
        /* Long enough to be read, short enough not to linger. */
        setTimeout(() => (stored.value = false), 2500)
        return
      }
      showStorage()
    } catch (error: unknown) {
      failed.value = String((error as Error)?.message ?? error)
    } finally {
      storing.value = false
    }
  }

  return { store, storing, stored, failed }
}
