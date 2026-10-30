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

const KEY = 'daanse.board.lastOpened'

/** Enough to find a stored state again, and nothing more. */
export interface LastOpened {
  /** The board's id, which its address names. */
  boardId: string
  /** What the state was called where it was stored. */
  name?: string
  /** The content itself, so a reload needs nobody's permission to read it. */
  data: unknown
}

/**
 * The state this browser last opened.
 *
 * A reload finds the board again; a link opened elsewhere does not, and
 * lands on the launcher. That is the honest reach of this: the board's
 * id says which board, but nothing in it says which storage place it
 * came from, and asking a remote place for it on every reload would make
 * startup depend on a server being up.
 *
 * Kept in localStorage, which is per browser and per origin - the same
 * reasoning as the grid snap and the backdrop beside it. Every read and
 * write is guarded: a private window, cleared site data or a quota that
 * is full must leave the app working, only forgetful.
 */
export function useLastOpenedState() {
  function remember(held: LastOpened) {
    try {
      localStorage.setItem(KEY, JSON.stringify(held))
    } catch {
      /* Out of quota, or storage denied. The board is open either way. */
    }
  }

  function recall(): LastOpened | undefined {
    try {
      const stored = localStorage.getItem(KEY)
      if (!stored) return undefined
      const held = JSON.parse(stored) as LastOpened
      return held?.boardId ? held : undefined
    } catch {
      return undefined
    }
  }

  function forget() {
    try {
      localStorage.removeItem(KEY)
    } catch {
      /* Nothing to do about it, and nothing depends on it. */
    }
  }

  return { remember, recall, forget }
}
