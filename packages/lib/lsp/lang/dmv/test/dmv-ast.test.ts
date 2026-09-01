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
import { DMV_AST_STRATEGY } from '../src/language/dmv-ast.js'
import { createDmvServices } from '../src/language/dmv-module.js'
import type { DmvModel } from '../src/language/generated/ast.js'

const services = createDmvServices(EmptyFileSystem)
const parse = parseHelper<DmvModel>(services.Dmv)

const EXAMPLES_DIR = join(__dirname, '..', 'examples')
const CORPUS_DIR = join(__dirname, 'corpus')
const examples = readdirSync(EXAMPLES_DIR).filter(file => file.endsWith('.dmv'))
const corpus = readdirSync(CORPUS_DIR)
  .filter(file => file.endsWith('.dmv'))
  .filter(file =>
    /^-- Expect: parse$/m.test(readFileSync(join(CORPUS_DIR, file), 'utf8')),
  )

async function tree(text: string) {
  return buildAstTree(await parse(text), DMV_AST_STRATEGY)
}

function flatten(node: AstTreeNode | undefined): AstTreeNode[] {
  if (!node) return []
  return [node, ...node.children.flatMap(flatten)]
}

const QUERY =
  "SELECT DISTINCT TOP 5 [A], B FROM $System.X WHERE C = 'v' ORDER BY A DESC"

describe('the shape of a DMV tree', () => {
  test('the root is the model, with the statement beneath it', async () => {
    const result = await tree(QUERY)
    expect(result.root?.label).toBe('DmvModel')
    expect(result.root?.children.map(row => [row.property, row.label])).toEqual(
      [['query', 'SelectStatement']],
    )
  })

  test('multi-valued slots are indexed', async () => {
    const rows = flatten((await tree(QUERY)).root)
    const selections = rows.filter(row => row.property === 'selections')
    expect(selections.map(row => row.index)).toEqual([0, 1])
  })

  test('scalars carry the value the converter produced, not the source spelling', async () => {
    // `[A]` reaches the AST as `A`; the brackets are visible in the editor
    // and the panel's job is to show what the parser produced.
    const rows = flatten((await tree(QUERY)).root)
    const names = rows.filter(
      row => row.kind === 'scalar' && row.property === 'name',
    )
    expect(names.map(row => row.value)).toEqual(['"A"', '"B"', '"C"', '"A"'])
  })

  test('a string literal is unquoted once, then re-quoted for display', async () => {
    const rows = flatten((await tree(QUERY)).root)
    const value = rows.find(
      row => row.kind === 'scalar' && row.property === 'value',
    )
    expect(value?.value).toBe('"v"')
  })

  test('no row is ever a reference, because DMV has none', async () => {
    const rows = flatten((await tree(QUERY)).root)
    expect(rows.filter(row => row.kind === 'reference')).toEqual([])
  })

  test('no row is ever an empty slot, because DMV has no calls', async () => {
    const rows = flatten((await tree(QUERY)).root)
    expect(rows.filter(row => row.kind === 'empty')).toEqual([])
  })

  test('a partial parse still produces a tree', async () => {
    const result = await tree('SELECT * FROM')
    expect(result.parserErrors).toBeGreaterThan(0)
    expect(result.root).toBeDefined()
  })

  test('a nested predicate nests in the tree', async () => {
    const result = await tree(
      'SELECT * FROM $System.X WHERE NOT A = 1 AND B = 2',
    )
    const rows = flatten(result.root)
    const not = rows.find(row => row.label === 'NotExpression')
    expect(not?.property).toBe('left')
    expect(not?.children.map(row => row.label)).toEqual([
      'ComparisonExpression',
    ])
  })
})

describe('the DMV documents the playground loads', () => {
  test.each(examples)('examples/%s serializes cleanly', async file => {
    const result = await tree(readFileSync(join(EXAMPLES_DIR, file), 'utf8'))
    expect(result.parserErrors).toBe(0)
    expect(result.root).toBeDefined()
  })
})

describe('the harvested corpus serializes', () => {
  test('there is one', () => {
    expect(corpus.length).toBeGreaterThan(20)
  })

  test.each(corpus)('corpus/%s', async file => {
    const result = await tree(readFileSync(join(CORPUS_DIR, file), 'utf8'))
    expect(result.parserErrors).toBe(0)

    const rows = flatten(result.root)
    const ids = rows.map(row => row.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(rows.slice(1).filter(row => row.property === undefined)).toEqual([])
    for (const row of rows) {
      expect(Object.keys(row).filter(key => key.startsWith('$'))).toEqual([])
      if (row.offset !== undefined) {
        expect(row.offset).toBeGreaterThanOrEqual(0)
      }
    }
    expect(() => structuredClone(result)).not.toThrow()
  })
})
