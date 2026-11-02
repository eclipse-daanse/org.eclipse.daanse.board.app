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

import { inject, watch } from 'vue'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { useLastOpenedState } from './useLastOpenedState'
import { useWorkspaceFile, useWorkspaceOrigin } from './useWorkspaceFile'

/** Long enough that a burst of changes is written once. */
const SETTLE = 800

/**
 * Keeping what a reload comes back to in step with what is open.
 *
 * It was written once, when the board was made or opened, and never
 * again - so a reload replayed the board as it had been at that moment.
 * A connection made since, a source, a widget: gone, and silently, which
 * is the worst way for work to go.
 *
 * Watched on the workspace with a deep adapter, the same way everything
 * else here hears about the model. Serializing is the only cost and it
 * is paid after the changes stop, not during them.
 *
 * Call it from a setup; it stops with the component that set it up.
 */
export function useKeepLastOpened() {
  const workspace = inject<Workspace>(WORKSPACE)!
  const { save } = useWorkspaceFile()
  const { remember } = useLastOpenedState()
  const origin = useWorkspaceOrigin()

  /*
   * Three lists, because the adapter follows containment and these are
   * the three the workspace contains. Reading them is what makes this
   * re-run; a change inside any of them reaches here through the board.
   */
  const connections = useEList(workspace, (w) => w.connections)
  const datasources = useEList(workspace, (w) => w.datasources)
  const pages = useEList(workspace, (w) => w.board?.pages)

  let pending: ReturnType<typeof setTimeout> | undefined

  function keep() {
    const boardId = workspace.board?.id as string | undefined
    if (!boardId) return
    try {
      remember({
        boardId,
        name: (workspace.board?.name as string | undefined) ?? origin.value?.name,
        data: save(),
        origin: origin.value,
      })
    } catch {
      /* Serializing a half-built board can throw; the next change tries
        again, and the one before it is still what a reload finds. */
    }
  }

  watch(
    [connections, datasources, pages, origin],
    () => {
      if (pending) clearTimeout(pending)
      pending = setTimeout(keep, SETTLE)
    },
    { deep: true },
  )

  return { keep }
}
