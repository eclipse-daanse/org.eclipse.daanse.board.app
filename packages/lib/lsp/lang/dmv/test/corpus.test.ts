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
import { createDmvServices } from '../src/language/dmv-module.js'
import type {
  ComparisonExpression,
  DmvModel,
  NotExpression,
  OrExpression,
  SelectStatement,
  StringLiteral,
  SystemRestrictSchemaCall,
  TableReference,
} from '../src/language/generated/ast.js'

const services = createDmvServices(EmptyFileSystem)
const parse = parseHelper<DmvModel>(services.Dmv)

const CORPUS_DIR = join(__dirname, 'corpus')
const files = readdirSync(CORPUS_DIR)
  .filter(file => file.endsWith('.dmv'))
  .sort()

function read(file: string): string {
  return readFileSync(join(CORPUS_DIR, file), 'utf8')
}

function expectation(text: string): 'parse' | 'reject' {
  const match = /^-- Expect: (parse|reject)$/m.exec(text)
  if (!match) throw new Error('corpus entry has no `-- Expect:` header')
  return match[1] as 'parse' | 'reject'
}

async function parseFile(
  file: string,
): Promise<{ query?: SelectStatement; errors: string[] }> {
  const document = await parse(read(file))
  const { lexerErrors, parserErrors } = document.parseResult
  return {
    query: document.parseResult.value?.query,
    errors: [
      ...lexerErrors.map(e => e.message),
      ...parserErrors.map(e => e.message),
    ],
  }
}

async function ok(file: string): Promise<SelectStatement> {
  const { query, errors } = await parseFile(file)
  expect(errors).toEqual([])
  expect(query).toBeDefined()
  return query!
}

describe('the harvested corpus', () => {
  test('there is one', () => {
    expect(files.length).toBeGreaterThan(20)
  })

  test.each(files)('%s matches its `-- Expect:` header', async file => {
    const text = read(file)
    const { errors } = await parseFile(file)
    if (expectation(text) === 'parse') {
      expect(errors).toEqual([])
    } else {
      expect(errors.length).toBeGreaterThan(0)
    }
  })
})

// ---------------------------------------------------------------------------
// Targeted assertions.
//
// A corpus entry earns one when it exercises a construct the other suites do
// not, when it failed to parse on first contact, or when it reaches
// `DmvValueConverter`. Entries that merely restate covered syntax are checked
// by the header test above and no further.
// ---------------------------------------------------------------------------

describe('constructs the other suites do not cover', () => {
  test('a leading-comma column list mixing bare and bracketed names', async () => {
    const query = await ok('12-leading-comma-list.dmv')
    expect(query.selections.map(s => s.name)).toEqual([
      'GROUPING_ORDINAL',
      'GROUPING_NAME',
      'GROUPING_CARDINALITY',
      'DEFAULT_LEVELSET',
    ])
    expect(query.orderings.map(o => o.column.name)).toEqual([
      'GROUPING_NAME',
      'GROUPING_ORDINAL',
    ])
  })

  test('four AND-ed comparisons nest left-associatively', async () => {
    const query = await ok('13-four-way-and-chain.dmv')
    // AND(AND(AND(a, b), c), d)
    let node = query.whereFilter as { $type: string; left?: unknown }
    let depth = 0
    while (node?.$type === 'AndExpression') {
      depth += 1
      node = node.left as typeof node
    }
    expect(depth).toBe(3)
  })

  test('ORDER BY carries a direction only where one is written', async () => {
    const query = await ok('13-four-way-and-chain.dmv')
    expect(query.orderings.map(o => [o.column.name, o.direction])).toEqual([
      ['GROUPING_NAME', undefined],
      ['ATTRIBUTE_COUNT_MAX', 'desc'],
    ])
  })

  test('AND binds tighter than OR when they are mixed without parentheses', async () => {
    const query = await ok('20-mixed-and-or-precedence.dmv')
    const or = query.whereFilter as OrExpression
    expect(or.$type).toBe('OrExpression')
    expect(or.left.$type).toBe('AndExpression')
    expect(or.right.$type).toBe('AndExpression')
  })

  test('a bare identifier that reads as a SQL keyword is still an identifier', async () => {
    // `ORDER BY TABLE ASC` — TABLE is not a DMV keyword, so it lexes as ID.
    const query = await ok('11-blank-lines-between-clauses.dmv')
    expect(query.orderings.map(o => o.column.name)).toEqual(['TABLE'])
  })

  test('a commented-out clause does not become part of the statement', async () => {
    const query = await ok('16-trailing-comment-clause.dmv')
    expect(query.whereFilter).toBeUndefined()
  })

  test('a CamelCase bare identifier survives unchanged', async () => {
    const query = await ok('15-mixedcase-bare-column.dmv')
    expect(query.orderings.map(o => o.column.name)).toEqual(['ResourceUsed'])
  })

  test('SYSTEMRESTRICTSCHEMA tolerates a space before its parenthesis', async () => {
    const query = await ok('06-restrict-schema-space-paren.dmv')
    const source = query.source as SystemRestrictSchemaCall
    expect(source.$type).toBe('SystemRestrictSchemaCall')
    expect(source.table.rowset).toBe('Discover_object_metadata')
  })

  test('SYSTEMRESTRICTSCHEMA tolerates spaces around its comma', async () => {
    const query = await ok('07-restrict-schema-spaced-comma.dmv')
    const source = query.source as SystemRestrictSchemaCall
    expect(source.parameters.map(p => p.paramName)).toEqual(['INSTANCE_NAME'])
  })

  test('the rowset segment keeps the casing it was written with', async () => {
    const query = await ok('02-lowercase-keywords.dmv')
    expect((query.source as TableReference).rowset).toBe(
      'discover_object_summary',
    )
  })
})

describe('values reaching DmvValueConverter', () => {
  test('a bracketed restriction name loses its brackets', async () => {
    const query = await ok('08-restrict-schema-multiline.dmv')
    const source = query.source as SystemRestrictSchemaCall
    expect(source.parameters.map(p => p.paramName)).toEqual(['DATABASE_NAME'])
    expect((source.parameters[0].value as StringLiteral).value).toBe(
      'Retail Dataset',
    )
  })

  test('a $ inside a string literal is data, not a rowset token', async () => {
    const query = await ok('10-dollar-inside-string.dmv')
    const cmp = query.whereFilter as ComparisonExpression
    expect((cmp.right as StringLiteral).value).toBe('$Dimcalendar')
  })

  test('a string with no whitespace around = is unquoted correctly', async () => {
    const query = await ok('19-no-space-around-eq.dmv')
    const cmp = query.whereFilter as ComparisonExpression
    expect((cmp.right as StringLiteral).value).toBe('Order Amount TST')
  })

  test('bracketed column names lose their brackets in the select list', async () => {
    const query = await ok('20-mixed-and-or-precedence.dmv')
    expect(query.selections[0].name).toBe('TABLE')
    expect(query.orderings[0].column.name).toBe('TABLE')
  })
})

describe('published queries the reference parser also rejects', () => {
  // These parse nowhere: `dmv.ccc` has no such production and Microsoft
  // documents LIKE as unsupported. They are kept as evidence that real
  // published examples exceed the language, and to pin the grammar's refusal.
  test.each([
    ['LIKE', '25-reject-like-operator.dmv'],
    ['a function call in WHERE', '26-reject-function-in-where.dmv'],
    ['function calls in the select list', '27-reject-function-in-select.dmv'],
    ['AS column aliases', '28-reject-as-alias.dmv'],
  ])('%s is rejected', async (_name, file) => {
    const { errors } = await parseFile(file)
    expect(errors.length).toBeGreaterThan(0)
  })
})

// ---------------------------------------------------------------------------
// Divergences this corpus exposed, and the fix.
// ---------------------------------------------------------------------------

describe('NOT binds looser than comparison', () => {
  // `dmv.ccc`'s parseUnaryPredicate recurses on itself and then falls through
  // to parsePrimaryPredicate, which reads a whole comparison — so NOT sits
  // between AND and comparison. The grammar previously placed NOT inside
  // PrimaryExpression, making `NOT A = 1` parse as `(NOT A) = 1`, which is a
  // clean parse with the wrong meaning. No harvested query uses NOT, so the
  // corpus did not catch this; comparing against the contract did.
  test('NOT A = 1 is NOT (A = 1)', async () => {
    const document = await parse('SELECT * FROM $System.X WHERE NOT A = 1')
    const not = document.parseResult.value.query.whereFilter as NotExpression
    expect(not.$type).toBe('NotExpression')
    expect(not.operand.$type).toBe('ComparisonExpression')
  })

  test('NOT still binds tighter than AND', async () => {
    const document = await parse(
      'SELECT * FROM $System.X WHERE NOT A = 1 AND B = 2',
    )
    const and = document.parseResult.value.query.whereFilter as {
      $type: string
      left: NotExpression
    }
    expect(and.$type).toBe('AndExpression')
    expect(and.left.$type).toBe('NotExpression')
  })

  test('NOT still applies to a bare column', async () => {
    const document = await parse('SELECT * FROM $System.X WHERE NOT IS_VISIBLE')
    const not = document.parseResult.value.query.whereFilter as NotExpression
    expect(not.operand.$type).toBe('ColumnReference')
  })

  test('NOT nests', async () => {
    const document = await parse('SELECT * FROM $System.X WHERE NOT NOT A')
    const not = document.parseResult.value.query.whereFilter as NotExpression
    expect(not.operand.$type).toBe('NotExpression')
  })
})
