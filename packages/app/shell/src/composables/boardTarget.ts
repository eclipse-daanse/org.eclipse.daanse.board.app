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
 * Where the rail's board entry leads.
 *
 * The page that is open, if one is; otherwise the page that was open last,
 * so returning from the pages or data area lands where one left; otherwise
 * the board's default page, then its first page. A board without pages has
 * nothing to show, so the entry leads to the overview instead.
 *
 * Every candidate is checked against the pages that exist: an id from the
 * route or from usage may name a page that was deleted since.
 */
export interface BoardTargetInput {
  /** The page id in the current route, if any. */
  currentPageId?: string | null
  /** The pages the workspace holds, in order. */
  pageIds: string[]
  defaultPageId?: string | null
  /** When each page was opened last, by id. */
  lastOpened?: (id: string) => number | undefined
}

export const BOARD_OVERVIEW = '/'

export function boardTarget({
  currentPageId,
  pageIds,
  defaultPageId,
  lastOpened,
}: BoardTargetInput): string {
  const exists = (id?: string | null): id is string => !!id && pageIds.includes(id)

  if (exists(currentPageId)) return `/page/${currentPageId}`

  if (lastOpened) {
    let recent: string | undefined
    let recentAt = 0
    for (const id of pageIds) {
      const at = lastOpened(id) ?? 0
      if (at > recentAt) {
        recent = id
        recentAt = at
      }
    }
    if (recent) return `/page/${recent}`
  }

  if (exists(defaultPageId)) return `/page/${defaultPageId}`
  if (pageIds.length > 0) return `/page/${pageIds[0]}`
  return BOARD_OVERVIEW
}
