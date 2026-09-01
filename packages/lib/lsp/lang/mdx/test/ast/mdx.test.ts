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

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import {
  buildAstTree,
  type AstTreeNode,
} from 'org.eclipse.daanse.board.app.lib.lsp.server'
import { MDX_AST_STRATEGY } from '../../src/language/mdx-ast.js'
import { createMdxServices } from '../../src/language/mdx-module.js'
import type { MdxScript } from '../../src/language/generated/ast.js'

const services = createMdxServices(EmptyFileSystem)
const parse = parseHelper<MdxScript>(services.Mdx)

const EXAMPLES_DIR = join(__dirname, '..', '..', 'examples')
const files = readdirSync(EXAMPLES_DIR).filter(
  file => file.endsWith('.mdxq') || file.endsWith('.mdxs'),
)

async function tree(text: string) {
  return buildAstTree(await parse(text), MDX_AST_STRATEGY)
}

function flatten(node: AstTreeNode | undefined): AstTreeNode[] {
  if (!node) return []
  return [node, ...node.children.flatMap(flatten)]
}

describe('argument slots', () => {
  test('a skipped slot becomes an explicit empty row', async () => {
    // `Fn(, , x)` parses to a one-element `arguments` array, so a faithful
    // walk would put `x` at index 0 — a lie in exactly the place the panel
    // exists to inspect.
    const result = await tree(
      'SELECT ParallelPeriod(, , [Date].[Month]) ON 0 FROM [Sales]',
    )
    const slots = flatten(result.root).filter(
      row => row.property === 'arguments',
    )
    expect(slots.map(row => [row.index, row.kind])).toEqual([
      [0, 'empty'],
      [1, 'empty'],
      [2, 'node'],
    ])
  })

  test('an empty slot is labelled and childless', async () => {
    const result = await tree('SELECT Fn(, x) ON 0 FROM [Sales]')
    const empty = flatten(result.root).find(row => row.kind === 'empty')
    expect(empty?.label).toBe('(skipped)')
    expect(empty?.children).toEqual([])
  })

  test('an ordinary argument list is indexed straight through', async () => {
    const result = await tree('SELECT Fn(1, 2, 3) ON 0 FROM [Sales]')
    const slots = flatten(result.root).filter(
      row => row.property === 'arguments',
    )
    expect(slots.map(row => row.index)).toEqual([0, 1, 2])
    expect(slots.every(row => row.kind === 'node')).toBe(true)
  })

  test('a call with no arguments contributes no slots', async () => {
    const result = await tree('SELECT [Date].[Month].Members ON 0 FROM [Sales]')
    const slots = flatten(result.root).filter(row => row.kind === 'empty')
    expect(slots).toEqual([])
  })
})

describe('the bundled MDX examples', () => {
  test('there are some', () => {
    expect(files.length).toBeGreaterThan(0)
  })

  test.each(files)('%s serializes cleanly', async file => {
    const result = await tree(readFileSync(join(EXAMPLES_DIR, file), 'utf8'))
    expect(result.parserErrors).toBe(0)
    expect(result.root).toBeDefined()

    const rows = flatten(result.root)
    const ids = rows.map(row => row.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(rows.slice(1).filter(row => row.property === undefined)).toEqual([])
    for (const row of rows) {
      expect(Object.keys(row).filter(key => key.startsWith('$'))).toEqual([])
    }
    expect(() => structuredClone(result)).not.toThrow()
  })
})
