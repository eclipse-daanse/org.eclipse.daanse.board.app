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
import { URI } from 'langium'
import { parseHelper } from 'langium/test'
import {
  buildAstTree,
  type AstTreeNode,
} from 'org.eclipse.daanse.board.app.lib.lsp.server'
import { DAX_AST_STRATEGY } from '../src/language/dax-ast.js'
import { createDaxServicesForTesting } from '../src/language/dax-module.js'

const services = createDaxServicesForTesting()
const parseQuery = parseHelper(services.DaxQuery)
const parseFormula = parseHelper(services.DaxFormula)

const EXAMPLES_DIR = join(__dirname, '..', 'examples')
const CORPUS_DIR = join(__dirname, 'corpus')
const examples = readdirSync(EXAMPLES_DIR).filter(file => /\.daxe?$/.test(file))
const corpus = readdirSync(CORPUS_DIR)
  .filter(file => /\.daxe?$/.test(file))
  .filter(file =>
    /^\/\/ Expect: parse$/m.test(readFileSync(join(CORPUS_DIR, file), 'utf8')),
  )

async function tree(text: string, file = 'query.dax') {
  const document = await (file.endsWith('.daxe') ? parseFormula : parseQuery)(
    text,
  )
  return buildAstTree(document, DAX_AST_STRATEGY)
}

function flatten(node: AstTreeNode | undefined): AstTreeNode[] {
  if (!node) return []
  return [node, ...node.children.flatMap(flatten)]
}

describe('the shape of a DAX tree', () => {
  test('a query is its definitions, then its statements', async () => {
    const result = await tree('DEFINE VAR x = 1 EVALUATE { x } ORDER BY x')
    expect(result.root?.label).toBe('QueryDocument')
    expect(result.root?.children.map(row => [row.property, row.label])).toEqual(
      [
        ['definitions', 'VariableDefinition'],
        ['statements', 'EvaluateStatement'],
      ],
    )
  })

  test('a formula is its expression', async () => {
    const result = await tree('1 + 2', 'formula.daxe')
    expect(result.root?.label).toBe('FormulaDocument')
    expect(result.root?.children.map(row => row.label)).toEqual([
      'BinaryExpression',
    ])
  })

  test('a resolved name is a reference row', async () => {
    const rows = flatten((await tree('DEFINE VAR x = 1 EVALUATE { x }')).root)
    expect(rows.filter(row => row.kind === 'reference').length).toBeGreaterThan(
      0,
    )
  })

  test('a partial parse still produces a tree', async () => {
    const result = await tree('EVALUATE ROW(')
    expect(result.parserErrors).toBeGreaterThan(0)
    expect(result.root).toBeDefined()
  })
})

describe('everything that parses serializes', () => {
  test.each([
    ...examples.map(f => join(EXAMPLES_DIR, f)),
    ...corpus.map(f => join(CORPUS_DIR, f)),
  ])('%s', async path => {
    const result = await tree(readFileSync(path, 'utf8'), path)
    expect(result.parserErrors).toBe(0)
    const rows = flatten(result.root)
    const ids = rows.map(row => row.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const row of rows) {
      expect(Object.keys(row).filter(key => key.startsWith('$'))).toEqual([])
    }
    expect(() => structuredClone(result)).not.toThrow()
  })
})

describe('routing documents to a language', () => {
  test('by extension', () => {
    const registry = services.shared.ServiceRegistry
    expect(
      registry.getServices(URI.parse('file:///a.dax')).LanguageMetaData
        .languageId,
    ).toBe('dax-query')
    expect(
      registry.getServices(URI.parse('file:///a.daxe')).LanguageMetaData
        .languageId,
    ).toBe('dax-formula')
  })

  test('a document without a DAX extension is a query', () => {
    const registry = services.shared.ServiceRegistry
    expect(
      registry.getServices(URI.parse('inmemory://editor/1')).LanguageMetaData
        .languageId,
    ).toBe('dax-query')
  })
})
