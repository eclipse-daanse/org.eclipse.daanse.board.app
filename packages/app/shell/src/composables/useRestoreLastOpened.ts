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

import { useLastOpenedState } from './useLastOpenedState'
import { useWorkspaceFile, useWorkspaceOrigin } from './useWorkspaceFile'

/**
 * Coming up with what this browser had open.
 *
 * The workspace lives in memory, so every reload starts with nothing,
 * and what was open is kept beside it. Restoring that used to sit inside
 * the board screen, which is why a reload was restored at `/board/:id`
 * and nowhere else: the launcher offered "no board yet" for a board
 * lying complete in storage, and a page blamed itself for not existing
 * (#1175).
 *
 * Its own file rather than a few lines in `App.vue`, so the shell and
 * the board screen restore the same way, and so the thing can be tested
 * without mounting the application.
 *
 * Call it from a setup: `load` reaches its repositories through inject.
 */
export function useRestoreLastOpened() {
  const { recall } = useLastOpenedState()
  const { load } = useWorkspaceFile()
  const origin = useWorkspaceOrigin()

  /**
   * Puts the remembered state back, if there is one.
   *
   * @param wanted the board the address names, when it names one. A
   *   remembered state that is not it is left alone - following a link
   *   to someone else's board must not quietly open one's own.
   * @returns whether anything was restored.
   */
  function restoreLastOpened(wanted?: string): boolean {
    const last = recall()
    if (!last) return false
    if (wanted && last.boardId !== wanted) return false

    try {
      load(last.data, last.name)
      /* And where it was written to, so saving stays a write rather
        than a question about where. */
      origin.value = last.origin
      return true
    } catch {
      /*
       * Stored by an older shape, or no longer readable. Nothing is
       * open, which is a state the launcher is made for.
       */
      return false
    }
  }

  return { restoreLastOpened }
}
