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
 * The corpus is DAX as Microsoft publishes it, each entry with two verdicts
 * in its header: `Expect` - what this grammar does - and `Reference` - what
 * the Eclipse Daanse parser does, recorded by scripts/record-corpus.mjs.
 * Where they differ, the entry names the `Divergence`, and the README lists
 * every one.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import type { LangiumDocument } from 'langium'
import { parseHelper } from 'langium/test'
import { createDaxServicesForTesting } from '../src/language/dax-module.js'
import type {
  BinaryExpression,
  FormulaDocument,
  QueryDocument,
  SignExpression,
  TableDefinition,
} from '../src/language/generated/ast.js'

const services = createDaxServicesForTesting()
const parseQuery = parseHelper<QueryDocument>(services.DaxQuery)
const parseFormula = parseHelper<FormulaDocument>(services.DaxFormula)

const CORPUS_DIR = join(__dirname, 'corpus')
const files = readdirSync(CORPUS_DIR)
  .filter(file => /\.daxe?$/.test(file))
  .sort()

function read(file: string): string {
  return readFileSync(join(CORPUS_DIR, file), 'utf8')
}

function header(text: string, name: string): string | undefined {
  return new RegExp(`^// ${name}: (.*)$`, 'm').exec(text)?.[1]
}

async function parse(
  file: string,
): Promise<{ document: LangiumDocument; errors: string[] }> {
  const text = read(file)
  const document = file.endsWith('.daxe')
    ? await parseFormula(text)
    : await parseQuery(text)
  const { lexerErrors, parserErrors } = document.parseResult
  return {
    document,
    errors: [
      ...lexerErrors.map(e => e.message),
      ...parserErrors.map(e => e.message),
    ],
  }
}

async function query(file: string): Promise<QueryDocument> {
  const { document, errors } = await parse(file)
  expect(errors).toEqual([])
  return document.parseResult.value as QueryDocument
}

async function formula(file: string): Promise<FormulaDocument> {
  const { document, errors } = await parse(file)
  expect(errors).toEqual([])
  return document.parseResult.value as FormulaDocument
}

describe('the corpus', () => {
  test('there is one', () => {
    expect(files.length).toBeGreaterThan(40)
  })

  test.each(files)('%s matches its `// Expect:` header', async file => {
    const expected = header(read(file), 'Expect')
    const { errors } = await parse(file)
    if (expected === 'parse') expect(errors).toEqual([])
    else if (expected === 'reject') expect(errors.length).toBeGreaterThan(0)
    else throw new Error('corpus entry has no `// Expect:` header')
  })

  test.each(files)(
    '%s names a divergence exactly where it differs from the reference',
    file => {
      const text = read(file)
      const expected = header(text, 'Expect')
      const reference = header(text, 'Reference')
      expect(reference, 'run scripts/record-corpus.mjs').toBeDefined()
      const agrees = (expected === 'parse') === (reference === 'accepts')
      expect(header(text, 'Divergence') !== undefined).toBe(!agrees)
    },
  )

  test.each(files)('%s says where it comes from', file => {
    const text = read(file)
    expect(header(text, 'Source')).toMatch(/^https:\/\//)
    expect(header(text, 'Construct')).toBeTruthy()
    expect(header(text, 'Normalized')).toBeTruthy()
  })
})

// ---------------------------------------------------------------------------
// Targeted assertions: entries whose shape matters, not only that they parse.
// ---------------------------------------------------------------------------

describe('what the corpus parses to', () => {
  test('`-2^2` is the sign of a power, -4 as Microsoft says', async () => {
    const sign = (await formula('37-unary-minus-power.daxe'))
      .expression as SignExpression
    expect(sign.$type).toBe('SignExpression')
    expect(sign.operator).toBe('-')
    expect((sign.operand as BinaryExpression).operator).toBe('^')
  })

  test('`5+2*3` multiplies first', async () => {
    const sum = (await formula('09-precedence.daxe'))
      .expression as BinaryExpression
    expect(sum.operator).toBe('+')
    expect((sum.right as BinaryExpression).operator).toBe('*')
  })

  test('DEFINE keeps every kind of definition, in order', async () => {
    const document = await query('05-define-every-kind.dax')
    expect(document.definitions.map(d => d.$type)).toEqual([
      'VariableDefinition',
      'VariableDefinition',
      'TableDefinition',
      'ColumnDefinition',
      'MeasureDefinition',
    ])
    // The quoted name arrives without its quotes.
    expect((document.definitions[2] as TableDefinition).name).toBe(
      'Unbought products',
    )
    expect(document.statements).toHaveLength(2)
  })

  test('ORDER BY keeps a direction per column, START AT its value', async () => {
    const [statement] = (await query('04-start-at-one-value.dax')).statements
    expect(statement.orderBy.map(o => o.direction)).toEqual(['ASC'])
    expect(statement.startAt).toHaveLength(1)
  })

  test('mixed-case keywords are keywords', async () => {
    const document = await query('35-keyword-mixed-case.dax')
    expect(document.definitions.map(d => d.$type)).toEqual([
      'MeasureDefinition',
    ])
  })

  test('a dotted name is one function', async () => {
    const [statement] = (await query('33-dotted-function-info.dax')).statements
    expect(statement.expression).toMatchObject({
      $type: 'FunctionCall',
      name: 'INFO.COLUMNS',
    })
  })

  test('a row IN a table of rows', async () => {
    const [statement] = (await query('46-tuple-in.dax')).statements
    const filter = statement.expression as unknown as {
      arguments: BinaryExpression[]
    }
    const comparison = filter.arguments[1]
    expect(comparison.operator).toBe('IN')
    expect(comparison.left.$type).toBe('RowExpression')
    expect(comparison.right.$type).toBe('TableConstructor')
  })

  test('`]]` in a column name is one `]`', async () => {
    const call = (await formula('47-bracket-escape.daxe'))
      .expression as unknown as {
      arguments: { column: { $refText: string } }[]
    }
    expect(call.arguments[0].column.$refText).toBe('Amount ]USD')
  })
})

describe('precedence the corpus does not pin down', () => {
  test('&& and || share a level, left to right, as in the reference parser', async () => {
    const document = await parseFormula('a || b && c')
    const top = document.parseResult.value.expression as BinaryExpression
    expect(top.operator).toBe('&&')
    expect((top.left as BinaryExpression).operator).toBe('||')
  })

  test('NOT binds looser than comparison', async () => {
    const document = await parseFormula('NOT a = 1')
    expect(document.parseResult.value.expression).toMatchObject({
      $type: 'NotExpression',
      operand: { $type: 'ComparisonExpression', operator: '=' },
    })
  })
})
