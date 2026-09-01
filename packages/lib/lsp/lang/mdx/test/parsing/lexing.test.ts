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
import { parseMdx, syntaxErrors } from '../test-helper.js'
import type {
  Expression,
  SelectStatement,
} from '../../src/language/generated/ast.js'

async function parseSelect(text: string): Promise<SelectStatement> {
  const document = await parseMdx(text)
  expect(syntaxErrors(document)).toBe('')
  return document.parseResult.value.statements[0] as SelectStatement
}

describe('comments', () => {
  test.each([
    ['double slash', '// a comment\nSELECT FROM [Cube]'],
    ['double hyphen', '-- a comment\nSELECT FROM [Cube]'],
    ['block', '/* a\nmulti-line\ncomment */\nSELECT FROM [Cube]'],
    ['trailing double slash', 'SELECT FROM [Cube] // trailing'],
    ['trailing double hyphen', 'SELECT FROM [Cube] -- trailing'],
    ['inline block', 'SELECT /* inline */ FROM [Cube]'],
  ])('%s comments are ignored', async (_name, text) => {
    const document = await parseMdx(text)
    expect(syntaxErrors(document)).toBe('')
    expect(document.parseResult.value.statements).toHaveLength(1)
  })

  test('subtraction still works when the operands are spaced', async () => {
    const select = await parseSelect('SELECT {1 - 2} ON 0 FROM [Cube]')
    const set = select.axes[0].set as { items: Expression[] }
    expect((set.items[0] as { operator: string }).operator).toBe('-')
  })
})

describe('delimited identifiers', () => {
  test('a bracketed name containing a space parses as one token', async () => {
    const select = await parseSelect(
      'SELECT [Measures].[Sales Volume] ON 0 FROM [Sales Cube]',
    )
    expect((select.from as { cube: string }).cube).toBe('[Sales Cube]')
  })

  test(']] escapes a closing bracket', async () => {
    // The object is named `Total Profit [Domestic]`; the right bracket is
    // doubled, the left one needs no handling.
    const select = await parseSelect(
      'SELECT [Total Profit [Domestic]]] ON 0 FROM [Cube]',
    )
    const reference = select.axes[0].set as { member: { $refText: string } }
    expect(reference.member.$refText).toBe('[Total Profit [Domestic]]]')
  })

  test('a reserved keyword can be used as a delimited identifier', async () => {
    const select = await parseSelect(
      'SELECT [Measures].[Sales] ON 0 FROM [Cube] WHERE [Product].[select]',
    )
    expect(select.slicer).toBeDefined()
  })
})

describe('string literals', () => {
  test.each([
    ['single quotes', "'Percent'"],
    ['double quotes', '"Percent"'],
    ['embedded doubled quote', "'it''s'"],
  ])('%s', async (_name, literal) => {
    const document = await parseMdx(
      `WITH MEMBER [Measures].[M] AS ${literal} SELECT FROM [Cube]`,
    )
    expect(syntaxErrors(document)).toBe('')
  })
})

describe('numbers', () => {
  test.each(['1', '1.5', '.5', '1e3', '1.5E-2'])(
    '%s is a numeric literal',
    async literal => {
      const document = await parseMdx(
        `WITH MEMBER [Measures].[M] AS ${literal} SELECT FROM [Cube]`,
      )
      expect(syntaxErrors(document)).toBe('')
    },
  )
})

describe('case insensitivity', () => {
  test('keyword casing does not change the AST', async () => {
    const upper = await parseSelect(
      'SELECT {[A].[B]} ON COLUMNS FROM [Cube] WHERE [C].[D]',
    )
    const lower = await parseSelect(
      'select {[a].[b]} on columns from [Cube] where [c].[d]',
    )
    const mixed = await parseSelect(
      'SeLeCt {[A].[B]} On CoLuMnS FrOm [Cube] WhErE [C].[D]',
    )
    for (const select of [upper, lower, mixed]) {
      expect(select.axes).toHaveLength(1)
      expect(select.axes[0].target.$type).toBe('NamedAxis')
      expect(select.slicer).toBeDefined()
    }
  })

  test('NON EMPTY and NON VISUAL are distinguished regardless of casing', async () => {
    const select = await parseSelect(
      'select non empty {[A].[B]} on 0 from non visual (select {[A].[B]} on 0 from [Cube])',
    )
    expect(select.axes[0].nonEmpty).toBe(true)
    expect((select.from as { nonVisual: boolean }).nonVisual).toBe(true)
  })
})

describe('axis targets', () => {
  test('named, ordinal and AXIS() forms', async () => {
    const named = await parseSelect('SELECT {[A].[B]} ON COLUMNS FROM [Cube]')
    expect(named.axes[0].target.$type).toBe('NamedAxis')

    const ordinal = await parseSelect('SELECT {[A].[B]} ON 0 FROM [Cube]')
    expect(ordinal.axes[0].target.$type).toBe('OrdinalAxis')

    const axisFn = await parseSelect('SELECT {[A].[B]} ON AXIS(0) FROM [Cube]')
    expect(axisFn.axes[0].target.$type).toBe('AxisFunction')
  })
})

describe('statement separators', () => {
  test('semicolons are optional between statements', async () => {
    const withSemis = await parseMdx('CALCULATE ; CALCULATE ;')
    const withoutSemis = await parseMdx('CALCULATE CALCULATE')
    expect(syntaxErrors(withSemis)).toBe('')
    expect(syntaxErrors(withoutSemis)).toBe('')
    expect(withSemis.parseResult.value.statements).toHaveLength(2)
    expect(withoutSemis.parseResult.value.statements).toHaveLength(2)
  })

  test('an empty document parses', async () => {
    const document = await parseMdx('')
    expect(syntaxErrors(document)).toBe('')
    expect(document.parseResult.value.statements).toHaveLength(0)
  })
})
