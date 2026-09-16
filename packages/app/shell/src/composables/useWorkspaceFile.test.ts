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
import { liftPagesIntoBoard } from './useWorkspaceFile'

/**
 * States written before a board held the pages.
 *
 * Every one of these is a file somebody may still open, so the shapes here
 * are the ones that were actually written, references and all.
 */
describe('liftPagesIntoBoard', () => {
  const stored = () => ({
    eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Workspace',
    connections: [{ uid: 'c1', name: 'REST' }],
    pages: [
      { id: 'p1', name: 'Übersicht' },
      { id: 'p2', name: 'Störungen' },
    ],
    defaultPage: { $ref: '//@pages.1' },
    variables: [{ uid: 'v1', page: { $ref: '//@pages.0' } }],
  })

  it('moves the pages into a board', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.pages).toBeUndefined()
    expect(after.board.pages).toHaveLength(2)
    /* Order is what the page switcher shows; it has to survive. */
    expect(after.board.pages[1].name).toBe('Störungen')
  })

  it('carries the default page across, as a path into the board', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.defaultPage).toBeUndefined()
    expect(after.board.defaultPage.$ref).toBe('//@board/@pages.1')
  })

  it('repoints anything else that referenced a page', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.variables[0].page.$ref).toBe('//@board/@pages.0')
  })

  it('leaves the rest of the workspace alone', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.connections[0].name).toBe('REST')
    expect(after.eClass).toBe(stored().eClass)
  })

  it('names the board, since the old shape never did', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.board.name).toBe('Board')
    expect(after.board.id).toEqual(expect.any(String))
  })

  it('does not touch a state that already has a board', () => {
    const already = { board: { pages: [{ id: 'x' }] } }
    expect(liftPagesIntoBoard(already)).toBe(already)
  })

  it('does not invent a board for a state with no pages', () => {
    const after = liftPagesIntoBoard({ connections: [] }) as any
    expect(after.board).toBeUndefined()
  })

  it('passes anything that is not an object straight through', () => {
    expect(liftPagesIntoBoard(undefined)).toBeUndefined()
    expect(liftPagesIntoBoard('nonsense')).toBe('nonsense')
  })
})
