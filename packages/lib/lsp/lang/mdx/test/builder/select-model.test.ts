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

import { describe, expect, test } from 'vitest'
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import { buildAstTree } from 'org.eclipse.daanse.board.app.lib.lsp.server'
import { createMdxServices } from '../../src/language/mdx-module.js'
import { MDX_AST_STRATEGY } from '../../src/language/mdx-ast.js'
import type { MdxScript } from '../../src/language/generated/ast.js'
import {
  addAxis,
  addItem,
  addToSlicer,
  addWith,
  crossJoin,
  moveItem,
  readDocument,
  removeAxis,
  removeFromSlicer,
  removeItem,
  removeWith,
  reorder,
  swapAxes,
  toggleNonEmpty,
  unwrapSubcube,
  wrapSubcube,
  type SelectModel,
  type TextEdit,
} from '../../src/mdx-select-model.js'

const services = createMdxServices(EmptyFileSystem)
const parse = parseHelper<MdxScript>(services.Mdx)

async function model(text: string): Promise<SelectModel> {
  const document = await parse(text)
  expect(document.parseResult.parserErrors).toHaveLength(0)
  const select = readDocument(buildAstTree(document, MDX_AST_STRATEGY).root, text)
  expect(select).not.toBeNull()
  return select!
}

/* Applies edits the way CodeMirror does: all against the original text. */
function apply(text: string, edits: TextEdit[]): string {
  return [...edits].sort((a, b) => b.from - a.from).reduce((acc, e) => acc.slice(0, e.from) + e.insert + acc.slice(e.to), text)
}

/* The edit must leave a statement that still parses. */
async function applied(text: string, edits: TextEdit[]): Promise<string> {
  const next = apply(text, edits)
  const document = await parse(next)
  expect(document.parseResult.parserErrors, next).toHaveLength(0)
  return next
}

const BASIC = 'SELECT {[Measures].[Unit Sales], [Measures].[Store Sales]} ON COLUMNS, NON EMPTY [Product].Children ON ROWS FROM [Sales] WHERE ([Time].[1997])'

describe('reading a SELECT', () => {
  test('a DMV over $SYSTEM is not a cube query to build on', async () => {
    const text = 'SELECT CUBE_NAME FROM $SYSTEM.MDSCHEMA_CUBES'
    const document = await parse(text)
    expect(document.parseResult.parserErrors).toHaveLength(0)
    expect(readDocument(buildAstTree(document, MDX_AST_STRATEGY).root, text)).toBeNull()
  })

  test('finds the axes, their items, the slicer and the cube', async () => {
    const select = await model(BASIC)
    expect(select.axes.map(a => [a.name, a.ordinal, a.nonEmpty, a.shape, a.items.length])).toEqual([
      ['COLUMNS', 0, false, 'set', 2],
      ['ROWS', 1, true, 'expression', 1],
    ])
    expect(select.axes[0].items.map(i => i.text)).toEqual(['[Measures].[Unit Sales]', '[Measures].[Store Sales]'])
    expect(select.slicer?.shape).toBe('tuple')
    expect(select.from.text).toBe('[Sales]')
  })

  test('reads WITH entries and a subselect', async () => {
    const select = await model(
      "WITH MEMBER [Measures].[X] AS 1 SET [S] AS {[Product].Children} SELECT {} ON 0 FROM (SELECT {[Time].[1997]} ON COLUMNS FROM [Sales])",
    )
    expect(select.with.map(w => [w.kind, w.name])).toEqual([
      ['member', '[Measures].[X]'],
      ['set', '[S]'],
    ])
    expect(select.inner?.from.text).toBe('[Sales]')
    expect(select.axes[0].ordinal).toBe(0)
  })
})

describe('editing a SELECT', () => {
  test('removes an item with its comma, first and last alike', async () => {
    const select = await model(BASIC)
    expect(await applied(BASIC, removeItem(select.axes[0], 0))).toContain('{[Measures].[Store Sales]} ON COLUMNS')
    expect(await applied(BASIC, removeItem(select.axes[0], 1))).toContain('{[Measures].[Unit Sales]} ON COLUMNS')
  })

  test('adds to a set, before an item, and turns an expression into a set', async () => {
    const select = await model(BASIC)
    expect(await applied(BASIC, addItem(select.axes[0], '[Measures].[Sales Count]'))).toContain(
      '{[Measures].[Unit Sales], [Measures].[Store Sales], [Measures].[Sales Count]}',
    )
    expect(await applied(BASIC, addItem(select.axes[0], '[Measures].[A]', 0))).toContain('{[Measures].[A], [Measures].[Unit Sales]')
    expect(await applied(BASIC, addItem(select.axes[1], '[Product].[Drink]'))).toContain('{[Product].Children, [Product].[Drink]} ON ROWS')
  })

  test('crossjoins, toggles NON EMPTY and swaps the axes', async () => {
    const select = await model(BASIC)
    expect(await applied(BASIC, crossJoin(select.axes[1], '[Gender].Children'))).toContain('CrossJoin([Product].Children, [Gender].Children) ON ROWS')
    expect(await applied(BASIC, toggleNonEmpty(select.axes[1], BASIC))).toContain(', [Product].Children ON ROWS')
    expect(await applied(BASIC, toggleNonEmpty(select.axes[0], BASIC))).toContain('SELECT NON EMPTY {[Measures]')
    const swapped = await applied(BASIC, swapAxes(select.axes[0], select.axes[1]))
    expect(swapped).toContain('Store Sales]} ON ROWS')
    expect(swapped).toContain('Children ON COLUMNS')
  })

  test('moves an item to another axis and reorders within one', async () => {
    const select = await model(BASIC)
    const moved = await applied(BASIC, moveItem(select.axes[0], 1, select.axes[1]))
    expect(moved).toContain('{[Measures].[Unit Sales]} ON COLUMNS')
    expect(moved).toContain('{[Product].Children, [Measures].[Store Sales]} ON ROWS')
    expect(await applied(BASIC, reorder(select.axes[0], 1, 0))).toContain('{[Measures].[Store Sales], [Measures].[Unit Sales]}')
  })

  test('adds the next free axis and removes one', async () => {
    const select = await model(BASIC)
    expect(await applied(BASIC, addAxis(select))).toContain('{} ON PAGES')
    const empty = 'SELECT FROM [Sales]'
    expect(await applied(empty, addAxis(await model(empty)))).toContain('{} ON COLUMNS')
    expect(await applied(BASIC, removeAxis(select, 1))).not.toContain('ON ROWS')
  })

  test('grows the slicer and takes its last member out with the WHERE', async () => {
    const select = await model(BASIC)
    expect(await applied(BASIC, addToSlicer(select, '[Store].[USA]'))).toContain('WHERE ([Time].[1997], [Store].[USA])')
    const none = 'SELECT {} ON 0 FROM [Sales]'
    expect(await applied(none, addToSlicer(await model(none), '[Time].[1997]'))).toContain('WHERE ([Time].[1997])')
    expect(await applied(BASIC, removeFromSlicer(select, BASIC, 0))).not.toContain('WHERE')
  })

  test('adds and removes calculations', async () => {
    const select = await model(BASIC)
    const added = await applied(BASIC, addWith(select, 'MEMBER [Measures].[Profit] AS [Measures].[Store Sales] * 0.3'))
    expect(added.startsWith('WITH\n  MEMBER [Measures].[Profit]')).toBe(true)
    const withTwo = 'WITH MEMBER [Measures].[A] AS 1 MEMBER [Measures].[B] AS 2 SELECT {} ON 0 FROM [Sales]'
    const two = await model(withTwo)
    expect(await applied(withTwo, removeWith(two, 0, withTwo))).not.toContain('[A]')
    const one = await model('WITH MEMBER [Measures].[A] AS 1 SELECT {} ON 0 FROM [Sales]')
    expect(await applied('WITH MEMBER [Measures].[A] AS 1 SELECT {} ON 0 FROM [Sales]', removeWith(one, 0, 'WITH MEMBER [Measures].[A] AS 1 SELECT {} ON 0 FROM [Sales]'))).toBe('SELECT {} ON 0 FROM [Sales]')
  })

  test('wraps the cube in a subselect and unwraps it again', async () => {
    const select = await model(BASIC)
    const wrapped = await applied(BASIC, wrapSubcube(select, '{[Time].[1997]}'))
    expect(wrapped).toContain('FROM (SELECT {[Time].[1997]} ON COLUMNS FROM [Sales])')
    expect(await applied(wrapped, unwrapSubcube(await model(wrapped)))).toBe(BASIC)
  })
})
