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
import { LAUNCHER, boardPath, pagesPath, pagePath, pageIdIn } from './paths'

describe('the addresses of a board', () => {
  it('puts a page inside the board that holds it', () => {
    expect(boardPath('b1')).toBe('/board/b1')
    expect(pagesPath('b1')).toBe('/board/b1/pages')
    expect(pagePath('b1', 'p1')).toBe('/board/b1/pages/p1')
    expect(pagePath('b1', 'p1', true)).toBe('/board/b1/pages/p1/edit')
  })

  /*
   * Without a board there is nowhere for a page to be, so the answer is
   * the launcher rather than an address nothing can open. `/page/p1` was
   * exactly such an address, which is why opening one depended on this
   * browser happening to remember a board.
   */
  it('answers the launcher where there is no board', () => {
    expect(boardPath(undefined)).toBe(LAUNCHER)
    expect(pagesPath(undefined)).toBe(LAUNCHER)
    expect(pagePath(undefined, 'p1')).toBe(LAUNCHER)
  })
})

/*
 * A page widget keeps one of these as a setting, so a board stored
 * before the move holds the old shape and has to go on working.
 */
describe('the page an address names', () => {
  it('reads the new shape', () => {
    expect(pageIdIn('/board/b1/pages/p1')).toBe('p1')
    expect(pageIdIn('/board/b1/pages/p1/edit')).toBe('p1')
  })

  it('reads the shape stored before the board was in it', () => {
    expect(pageIdIn('/page/p1')).toBe('p1')
    expect(pageIdIn('/page/p1/edit')).toBe('p1')
  })

  it('ignores what comes after a question mark', () => {
    expect(pageIdIn('/board/b1/pages/p1?select=x')).toBe('p1')
  })

  it('has no answer for nothing', () => {
    expect(pageIdIn(undefined)).toBeUndefined()
    expect(pageIdIn('')).toBeUndefined()
  })
})
