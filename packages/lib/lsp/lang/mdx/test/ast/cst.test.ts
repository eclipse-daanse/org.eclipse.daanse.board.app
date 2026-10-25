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
import {
  buildAstTree,
  buildCstTree,
  type AstTreeNode,
} from 'org.eclipse.daanse.board.app.lib.lsp.server'
import type { CstTreeNode } from 'org.eclipse.daanse.board.app.lib.api.lsp'
import { createMdxServices } from '../../src/language/mdx-module.js'
import { MDX_AST_STRATEGY } from '../../src/language/mdx-ast.js'
import type { MdxScript } from '../../src/language/generated/ast.js'

const services = createMdxServices(EmptyFileSystem)
const parse = parseHelper<MdxScript>(services.Mdx)

const SIMPLE = 'SELECT {[Measures].[Unit Sales]} ON COLUMNS FROM [Sales]'

function flatten<T extends { children: T[] }>(node: T | undefined): T[] {
  if (!node) return []
  return [node, ...node.children.flatMap(child => flatten(child))]
}

describe('the concrete syntax tree', () => {
  test('its leaves are the tokens of the text, in order and in place', async () => {
    const result = buildCstTree(await parse(SIMPLE), MDX_AST_STRATEGY)
    const leaves = flatten<CstTreeNode>(result.root).filter(node => node.kind === 'leaf')
    expect(leaves.length).toBeGreaterThan(5)
    for (const leaf of leaves) {
      expect(SIMPLE.slice(leaf.offset, leaf.offset + leaf.length)).toBe(leaf.text)
    }
    const offsets = leaves.map(leaf => leaf.offset)
    expect(offsets).toEqual([...offsets].sort((a, b) => a - b))
    expect(leaves.map(leaf => leaf.text)).toContain('SELECT')
  })

  test('a composite that is an AST node carries that node\'s id in the AST tree', async () => {
    const document = await parse(SIMPLE)
    const cst = flatten<CstTreeNode>(buildCstTree(document, MDX_AST_STRATEGY).root)
    const astIds = new Set(flatten<AstTreeNode>(buildAstTree(document, MDX_AST_STRATEGY).root).map(row => row.id))

    expect(cst[0].astId).toBe('root')
    const linked = cst.filter(node => node.astId !== undefined)
    expect(linked.length).toBeGreaterThan(1)
    for (const node of linked) expect(astIds.has(node.astId!)).toBe(true)
  })

  test('ids are unique and path-shaped', async () => {
    const nodes = flatten<CstTreeNode>(buildCstTree(await parse(SIMPLE)).root)
    const ids = nodes.map(node => node.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every(id => id === 'cst' || id.startsWith('cst.'))).toBe(true)
  })

  test('a broken parse still has a tree, and says so', async () => {
    const result = buildCstTree(await parse('SELECT FROM'))
    expect(result.parserErrors).toBeGreaterThan(0)
    expect(result.root).toBeDefined()
  })

  test('the whole tree survives a structured clone', async () => {
    const result = buildCstTree(await parse(SIMPLE), MDX_AST_STRATEGY)
    expect(() => structuredClone(result)).not.toThrow()
  })
})
