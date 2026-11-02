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
 * The addresses of a board and what it holds.
 *
 * A page lives in a board, and the address says so:
 *
 *     /board/:boardid
 *     /board/:boardid/pages
 *     /board/:boardid/pages/:pageid
 *     /board/:boardid/pages/:pageid/edit
 *
 * Written out in a dozen components before, which is how the board came
 * to be dropped from them: `/page/abc` named a page that only exists
 * inside a board and said nothing about which, so opening it depended on
 * this browser happening to remember (#1176).
 *
 * Pure functions over an id, not a composable, so the router and a test
 * can use them as readily as a component can.
 *
 * Part of the page contract rather than of the shell: a page widget
 * keeps one of these addresses as a setting and has to read it back, and
 * it is a package of its own.
 */

/** The launcher - where one is when no board is open. */
export const LAUNCHER = '/'

export function boardPath(boardId?: string): string {
  return boardId ? `/board/${boardId}` : LAUNCHER
}

export function pagesPath(boardId?: string): string {
  return boardId ? `/board/${boardId}/pages` : LAUNCHER
}

/**
 * One page of a board, in view or in edit.
 *
 * Without a board there is nowhere for the page to be, so this answers
 * the launcher rather than an address that cannot be opened.
 */
export function pagePath(boardId: string | undefined, pageId: string, editing = false): string {
  if (!boardId) return LAUNCHER
  return `/board/${boardId}/pages/${pageId}${editing ? '/edit' : ''}`
}

/** The page id in an address, whichever shape it is written in. */
export function pageIdIn(path?: string): string | undefined {
  if (!path) return undefined
  const parts = path.split('?')[0].split('/').filter(Boolean)
  const last = parts[parts.length - 1]
  if (last === 'edit') return parts[parts.length - 2]
  return last
}
