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
  renderScalar,
  type AstTreeNode,
} from 'org.eclipse.daanse.board.app.lib.lsp.server'
import { createMdxServices } from '../../src/language/mdx-module.js'
import { MDX_AST_STRATEGY } from '../../src/language/mdx-ast.js'
import type { MdxScript } from '../../src/language/generated/ast.js'

const services = createMdxServices(EmptyFileSystem)
const parse = parseHelper<MdxScript>(services.Mdx)

async function tree(text: string) {
  const document = await parse(text)
  return buildAstTree(document, MDX_AST_STRATEGY)
}

function flatten(node: AstTreeNode | undefined): AstTreeNode[] {
  if (!node) return []
  return [node, ...node.children.flatMap(flatten)]
}

const SIMPLE = 'SELECT {[Measures].[Unit Sales]} ON COLUMNS FROM [Sales]'

describe('the result envelope', () => {
  test('carries the document uri and the parser error count', async () => {
    const result = await tree(SIMPLE)
    expect(result.uri).toMatch(/\.mdxq?$|document/)
    expect(result.parserErrors).toBe(0)
    expect(result.root).toBeDefined()
  })

  test('still returns a tree when the parse fails', async () => {
    // A broken parse is usually the thing being debugged, so the panel is
    // given the partial tree rather than nothing.
    const result = await tree('SELECT FROM')
    expect(result.parserErrors).toBeGreaterThan(0)
    expect(result.root).toBeDefined()
  })
})

describe('row shape', () => {
  test('the root has no property slot', async () => {
    const result = await tree(SIMPLE)
    expect(result.root?.id).toBe('root')
    expect(result.root?.property).toBeUndefined()
    expect(result.root?.kind).toBe('node')
  })

  test('every non-root row carries the property slot it occupies', async () => {
    const rows = flatten((await tree(SIMPLE)).root).slice(1)
    expect(rows.length).toBeGreaterThan(0)
    expect(rows.filter(row => row.property === undefined)).toEqual([])
  })

  test('ids are unique and path-shaped', async () => {
    const rows = flatten((await tree(SIMPLE)).root)
    const ids = rows.map(row => row.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every(id => id === 'root' || id.startsWith('root.'))).toBe(true)
  })

  test('an id is its parent id plus its own slot', async () => {
    const root = (await tree(SIMPLE)).root!
    const check = (node: AstTreeNode) => {
      for (const child of node.children) {
        expect(child.id.startsWith(`${node.id}.`)).toBe(true)
        check(child)
      }
    }
    check(root)
  })

  test('members of a multi-valued slot are indexed', async () => {
    const result = await tree(
      'SELECT {[Measures].[A]} ON COLUMNS, {[Measures].[B]} ON ROWS FROM [Sales]',
    )
    const axes = flatten(result.root).filter(row => row.property === 'axes')
    expect(axes.map(row => row.index)).toEqual([0, 1])
  })

  test('a single-valued slot has no index', async () => {
    const rows = flatten((await tree(SIMPLE)).root)
    const from = rows.find(row => row.property === 'from')
    expect(from).toBeDefined()
    expect(from?.index).toBeUndefined()
  })
})

describe('what never reaches the client', () => {
  test('no $-prefixed key leaks into a row', async () => {
    // `$container`, `$document` and `$cstNode` are all cyclic; a leak turns
    // the postMessage into a structured-clone failure.
    const rows = flatten((await tree(SIMPLE)).root)
    for (const row of rows) {
      expect(Object.keys(row).filter(key => key.startsWith('$'))).toEqual([])
    }
  })

  test('the whole tree survives a structured clone', async () => {
    const result = await tree(SIMPLE)
    expect(() => structuredClone(result)).not.toThrow()
  })

  test('a reference carries its text, not its target', async () => {
    const result = await tree(
      'WITH MEMBER [Measures].[X] AS 1 SELECT {[Measures].[X]} ON COLUMNS FROM [Sales]',
    )
    const references = flatten(result.root).filter(
      row => row.kind === 'reference',
    )
    expect(references.length).toBeGreaterThan(0)
    for (const reference of references) {
      expect(typeof reference.value).toBe('string')
      expect(reference.children).toEqual([])
    }
  })
})

describe('source locations', () => {
  test('a node row locates itself in the document', async () => {
    const root = (await tree(SIMPLE)).root!
    expect(root.offset).toBe(0)
    expect(root.length).toBeGreaterThan(0)
    expect(root.range?.start).toEqual({ line: 0, character: 0 })
  })

  test('every located row falls inside the document', async () => {
    const rows = flatten((await tree(SIMPLE)).root).filter(
      row => row.offset !== undefined,
    )
    for (const row of rows) {
      expect(row.offset).toBeGreaterThanOrEqual(0)
      expect(row.offset! + row.length!).toBeLessThanOrEqual(SIMPLE.length)
    }
  })

  test('a datatype-rule scalar is still locatable', async () => {
    // `MemberPath` and `Identifier` are plain strings with no AST node of
    // their own, but they have a CST node, so a name row stays clickable.
    const rows = flatten((await tree(SIMPLE)).root)
    const located = rows.filter(
      row => row.kind === 'scalar' && row.offset !== undefined,
    )
    expect(located.length).toBeGreaterThan(0)
  })
})

describe('scalar rendering', () => {
  test('strings are quoted and everything else is not', () => {
    // The quoting is load-bearing: `ui/src/state/cube-scope.ts` JSON.parses
    // these back to tell a string scalar from a numeric one.
    expect(renderScalar('Sales')).toBe('"Sales"')
    expect(renderScalar(12)).toBe('12')
    expect(renderScalar(true)).toBe('true')
  })

  test('a strategy can override it', async () => {
    const document = await parse(SIMPLE)
    const result = buildAstTree(document, { renderScalar: () => 'REDACTED' })
    const scalars = flatten(result.root).filter(row => row.kind === 'scalar')
    expect(scalars.length).toBeGreaterThan(0)
    expect(scalars.every(row => row.value === 'REDACTED')).toBe(true)
  })

  test('a strategy can override node labels', async () => {
    const document = await parse(SIMPLE)
    const result = buildAstTree(document, {
      labelNode: node => `<${node.$type}>`,
    })
    expect(result.root?.label.startsWith('<')).toBe(true)
  })

  test('with no strategy at all the defaults apply', async () => {
    const document = await parse(SIMPLE)
    const result = buildAstTree(document)
    expect(result.root?.label).toBe('MdxScript')
  })
})
