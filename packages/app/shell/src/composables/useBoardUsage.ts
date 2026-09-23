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
 * How often each board was opened, and when it was opened last.
 *
 * The launcher orders boards by this rather than by the order the page
 * repository happens to hand them over: after a while the boards someone
 * actually works with rise to the top on their own. It is kept per browser
 * in local storage - it describes how this person uses the app, not what
 * the workspace contains, so it has no business travelling with a stored
 * state.
 */
import { ref } from 'vue'
import { useFormat } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const KEY = 'daanse.board.usage'

export interface BoardUsage {
  count: number
  lastOpened: number
}

function read(): Record<string, BoardUsage> {
  try {
    const raw = localStorage.getItem(KEY)
    const data = raw ? JSON.parse(raw) : {}
    return data && typeof data === 'object' ? data : {}
  } catch {
    // Private windows and cleared site data are normal, not an error
    return {}
  }
}

/* Module scope: one record for the whole app, shared by every view. */
const usage = ref<Record<string, BoardUsage>>(read())

export function useBoardUsage() {
  const format = useFormat()
  function recordOpened(id: string) {
    if (!id) return
    const previous = usage.value[id]
    usage.value = {
      ...usage.value,
      [id]: { count: (previous?.count ?? 0) + 1, lastOpened: Date.now() },
    }
    try {
      localStorage.setItem(KEY, JSON.stringify(usage.value))
    } catch {
      // Counting is a convenience; failing to persist it must not break opening a board
    }
  }

  function usageOf(id: string): BoardUsage | undefined {
    return usage.value[id]
  }

  /** Most used first, ties broken by what was open most recently. */
  function byUsage(a: string, b: string): number {
    const left = usage.value[a]
    const right = usage.value[b]
    if ((right?.count ?? 0) !== (left?.count ?? 0)) return (right?.count ?? 0) - (left?.count ?? 0)
    return (right?.lastOpened ?? 0) - (left?.lastOpened ?? 0)
  }

  /** "today", "yesterday", "3 days ago" - the resolution the number is worth. */
  function lastOpenedLabel(id: string): string {
    const at = usage.value[id]?.lastOpened
    if (!at) return ''
    return format.relativeDays(at)
  }

  return { usage, recordOpened, usageOf, byUsage, lastOpenedLabel }
}
