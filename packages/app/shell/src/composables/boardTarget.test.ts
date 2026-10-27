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

describe('boardTarget', () => {
  const pageIds = ['p1', 'p2', 'p3']

  it('stays on the page that is open', () => {
    expect(boardTarget({ currentPageId: 'p2', pageIds, defaultPageId: 'p3' })).toBe('/page/p2')
  })

  it('returns to the page opened last when none is open', () => {
    const at: Record<string, number> = { p1: 100, p3: 300 }
    expect(boardTarget({ pageIds, defaultPageId: 'p2', lastOpened: (id) => at[id] })).toBe('/page/p3')
  })

  it('ignores usage of a page that no longer exists', () => {
    const at: Record<string, number> = { gone: 999 }
    expect(boardTarget({ pageIds, defaultPageId: 'p2', lastOpened: (id) => at[id] })).toBe('/page/p2')
  })

  it('falls back to the default page, then the first one', () => {
    expect(boardTarget({ pageIds, defaultPageId: 'p3' })).toBe('/page/p3')
    expect(boardTarget({ pageIds, defaultPageId: 'gone' })).toBe('/page/p1')
    expect(boardTarget({ pageIds })).toBe('/page/p1')
  })

  it('does not point at a page id that does not exist', () => {
    expect(boardTarget({ currentPageId: 'abc', pageIds })).toBe('/page/p1')
  })

  it('leads to the overview when the board has no pages', () => {
    expect(boardTarget({ currentPageId: 'abc', pageIds: [] })).toBe(BOARD_OVERVIEW)
  })
})
