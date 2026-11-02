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

import { describe, expect, it } from 'vitest'
import { boardTarget, BOARD_OVERVIEW } from './boardTarget'

/*
 * A page's address is inside its board, so every answer here is too -
 * and in edit, because picking a page means working on it.
 */
describe('boardTarget', () => {
  const pageIds = ['p1', 'p2', 'p3']

  it('stays on the page that is open', () => {
    expect(boardTarget({ boardId: 'b1', currentPageId: 'p2', pageIds, defaultPageId: 'p3' })).toBe('/board/b1/pages/p2/edit')
  })

  it('returns to the page opened last when none is open', () => {
    const at: Record<string, number> = { p1: 100, p3: 300 }
    expect(boardTarget({ boardId: 'b1', pageIds, defaultPageId: 'p2', lastOpened: (id) => at[id] })).toBe('/board/b1/pages/p3/edit')
  })

  it('ignores usage of a page that no longer exists', () => {
    const at: Record<string, number> = { gone: 999 }
    expect(boardTarget({ boardId: 'b1', pageIds, defaultPageId: 'p2', lastOpened: (id) => at[id] })).toBe('/board/b1/pages/p2/edit')
  })

  it('falls back to the default page, then the first one', () => {
    expect(boardTarget({ boardId: 'b1', pageIds, defaultPageId: 'p3' })).toBe('/board/b1/pages/p3/edit')
    expect(boardTarget({ boardId: 'b1', pageIds, defaultPageId: 'gone' })).toBe('/board/b1/pages/p1/edit')
    expect(boardTarget({ boardId: 'b1', pageIds })).toBe('/board/b1/pages/p1/edit')
  })

  it('does not point at a page id that does not exist', () => {
    expect(boardTarget({ boardId: 'b1', currentPageId: 'abc', pageIds })).toBe('/board/b1/pages/p1/edit')
  })

  it('leads to the overview when the board has no pages', () => {
    expect(boardTarget({ boardId: 'b1', currentPageId: 'abc', pageIds: [] })).toBe(BOARD_OVERVIEW)
  })
})
