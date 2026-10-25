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
 * The tree panel's model in CST mode: what it makes of the server's
 * concrete syntax tree, how far it opens, and which row the caret is on.
 * The session is real; the CST is handed to it as the server would.
 */
import { describe, expect, test } from 'vitest'
import { nextTick } from 'vue'
import type { CstTreeNode, CstTreeResult } from 'org.eclipse.daanse.board.app.lib.api.lsp'
import type { LanguageDescriptor } from 'org.eclipse.daanse.board.app.lib.lsp.core'
import { createEditorSession } from '../src/state/editor-session.js'
import { createAstTreeModel, type AstTreeRow } from '../src/composables/useAstTree.js'

const LANGUAGE = {
  id: 'test',
  label: 'Test',
  description: '',
  extensions: ['.test'],
  support: () => [] as never,
  createServerWorker: () => undefined as never,
} as unknown as LanguageDescriptor

function range(from: number, to: number) {
  return { start: { line: 0, character: from }, end: { line: 0, character: to } }
}

function leaf(id: string, name: string, text: string, offset: number): CstTreeNode {
  return { id, kind: 'leaf', name, text, offset, length: text.length, range: range(offset, offset + text.length), children: [] }
}

function composite(id: string, name: string, offset: number, length: number, children: CstTreeNode[], astId?: string): CstTreeNode {
  return { id, kind: 'composite', name, offset, length, range: range(offset, offset + length), children, ...(astId ? { astId } : {}) }
}

/*
 * SELECT 5 - the literal sits under three precedence levels, each a rule
 * with exactly one composite child, which is what the panel folds.
 */
const TREE: CstTreeResult = {
  uri: 'file:///q.test',
  parserErrors: 0,
  root: composite('cst', 'Script', 0, 8, [
    leaf('cst.0', 'SELECT', 'SELECT', 0),
    composite('cst.1', 'Expression', 7, 1, [
      composite('cst.1.0', 'Additive', 7, 1, [
        composite('cst.1.0.0', 'Literal', 7, 1, [leaf('cst.1.0.0.0', 'NUMBER', '5', 7)], 'root.expr'),
      ]),
    ]),
  ], 'root'),
}

function setup(depth?: number | 'all') {
  const session = createEditorSession({ language: LANGUAGE, uri: 'file:///q.test', text: 'SELECT 5' })
  // Asked for already, so the model does not go to a server for it.
  session.cstWanted.value = true
  const model = createAstTreeModel(session, { mode: 'cst', depth })
  return { session, model }
}

function find(rows: AstTreeRow[], label: string): AstTreeRow | undefined {
  for (const row of rows) {
    if (row.label === label) return row
    const inner = find(row.children, label)
    if (inner) return inner
  }
  return undefined
}

describe('the CST rows', () => {
  test('a chain of single-child rules is one row, named by the outermost', async () => {
    const { session, model } = setup()
    session.cst.value = TREE
    await nextTick()

    const folded = find(model.rows.value, 'Expression ⟩2')
    expect(folded).toBeDefined()
    expect(folded!.chain).toEqual(['Expression', 'Additive', 'Literal'])
    // The innermost id, whose children the row shows.
    expect(folded!.id).toBe('cst.1.0.0')
    expect(folded!.children.map(child => child.detail)).toEqual(['"5"'])
  })

  test('a folded row stands for the AST node of any rule it folded', async () => {
    const { session, model } = setup()
    session.cst.value = TREE
    await nextTick()

    expect(model.rows.value[0]!.astId).toBe('root')
    expect(find(model.rows.value, 'Expression ⟩2')!.astId).toBe('root.expr')
  })

  test('the tree opens to the chosen depth, and again when it changes', async () => {
    const { session, model } = setup(1)
    session.cst.value = TREE
    await nextTick()

    const root = model.rows.value[0]!
    const folded = find(model.rows.value, 'Expression ⟩2')!
    expect(model.isExpanded(root)).toBe(true)
    expect(model.isExpanded(folded)).toBe(false)

    model.setDepth('all')
    expect(model.isExpanded(folded)).toBe(true)
  })

  test('an empty first answer does not use up the opening', async () => {
    const { session, model } = setup()
    session.cst.value = { uri: TREE.uri, parserErrors: 0 }
    await nextTick()
    session.cst.value = TREE
    await nextTick()

    expect(model.isExpanded(model.rows.value[0]!)).toBe(true)
  })

  test('the row under the caret is the active one', async () => {
    const { session, model } = setup()
    session.cst.value = TREE
    await nextTick()

    session.cursorPosition.value = { line: 0, character: 7 }
    await nextTick()

    expect(model.activeRow.value?.detail).toBe('"5"')
  })

  test('a clicked row stays marked while the caret is inside it', async () => {
    const { session, model } = setup()
    session.cst.value = TREE
    await nextTick()
    const folded = find(model.rows.value, 'Expression ⟩2')!

    model.selectRow(folded)
    // The click selects the row's text; the caret lands at its end, on the leaf.
    session.cursorPosition.value = { line: 0, character: 8 }
    await nextTick()
    expect(model.activeId.value).toBe(folded.id)

    // A caret moved elsewhere is followed again.
    session.cursorPosition.value = { line: 0, character: 1 }
    await nextTick()
    expect(model.activeRow.value?.detail).toBe('"SELECT"')
  })

  test('rows new after an edit open as the depth says, rows the user closed stay closed', async () => {
    const { session, model } = setup('all')
    session.cst.value = TREE
    await nextTick()
    const root = model.rows.value[0]!
    model.selectRow(root) // toggles: the root closes
    expect(model.isExpanded(root)).toBe(false)

    const grown: CstTreeResult = {
      ...TREE,
      root: composite('cst', 'Script', 0, 12, [
        ...TREE.root!.children,
        composite('cst.2', 'Where', 9, 3, [leaf('cst.2.0', 'WHERE', 'WHERE', 9), composite('cst.2.1', 'Tuple', 15, 1, [leaf('cst.2.1.0', 'NUMBER', '1', 15), leaf('cst.2.1.1', 'NUMBER', '2', 16)])]),
      ], 'root'),
    }
    session.cst.value = grown
    await nextTick()

    expect(model.isExpanded(model.rows.value[0]!)).toBe(false)
    expect(model.isExpanded(find(model.rows.value, 'Where')!)).toBe(true)
  })
})
