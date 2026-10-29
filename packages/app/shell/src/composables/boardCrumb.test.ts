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
import { boardCrumb } from './boardCrumb'
import en from '../i18n/en.json'

/* The real texts, so a crumb is checked against what a person reads. */
const t = (key: string) =>
  key.replace(/^shell:/, '').split('.').reduce<any>((held, step) => held?.[step], en) ?? key

const labels = (crumb: ReturnType<typeof boardCrumb>) => crumb.map((part) => part.label)

describe('the path through a board', () => {
  it('roots every screen in the open board, by name', () => {
    for (const route of ['data', 'save', 'config', 'pages', 'events', 'appearance']) {
      const crumb = boardCrumb({ route, boardId: 'b1', boardName: 'Sparky', t })
      expect(crumb[0].label).toBe('Sparky')
      expect(crumb).toHaveLength(2)
    }
  })

  it('names no plural anywhere, because there is one board', () => {
    for (const route of ['home', 'data', 'page', 'pages', 'save', 'config']) {
      const crumb = boardCrumb({ route, boardName: 'Sparky', pageName: 'Overview', t })
      expect(labels(crumb)).not.toContain('Boards')
    }
  })

  it("leads back to the board's own address from everywhere else", () => {
    const from = boardCrumb({ route: 'data', boardId: 'b1', boardName: 'Sparky', t })
    expect(from[0].to).toBe('/board/b1')
  })

  it('names no board on the launcher, because none is open there', () => {
    const crumb = boardCrumb({ route: 'home', boardId: 'b1', boardName: 'Sparky', t })
    expect(crumb[0].label).toBe(en.Header.crumb.noBoard)
  })

  it('is a label on the board itself, not a link to where you are', () => {
    const crumb = boardCrumb({ route: 'board', boardId: 'b1', boardName: 'Sparky', t })
    expect(crumb).toHaveLength(1)
    expect(crumb[0].label).toBe('Sparky')
    expect(crumb[0].to).toBeUndefined()
  })

  it('roots a board that has no pages exactly like one that has', () => {
    const withPages = boardCrumb({ route: 'data', boardName: 'Sparky', t })
    const explorationOnly = boardCrumb({ route: 'data', boardName: 'Sparky', t })

    expect(labels(withPages)).toEqual(labels(explorationOnly))
  })

  it('says no board is open rather than naming one that is not there', () => {
    const crumb = boardCrumb({ route: 'data', t })

    expect(crumb[0].label).toBe(en.Header.crumb.noBoard)
    expect(crumb[0].to).toBeUndefined()
  })

  it('falls back to a generic name for a board nobody named', () => {
    const crumb = boardCrumb({ route: 'data', boardName: '   ', t })

    expect(crumb[0].label).toBe(en.Header.crumb.noBoard)
  })

  it('names the open page after the board', () => {
    const crumb = boardCrumb({ route: 'page', boardName: 'Sparky', pageName: 'Overview', t })

    expect(labels(crumb)).toEqual(['Sparky', 'Overview'])
  })

  it('falls back to a page label where the page has no name', () => {
    const crumb = boardCrumb({ route: 'page', boardName: 'Sparky', t })

    expect(crumb[1].label).toBe(en.Header.page.fallbackName)
  })
})
