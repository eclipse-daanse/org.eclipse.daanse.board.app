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

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { StringStream } from '@codemirror/language'
import {
  ATOMS,
  KEYWORDS,
  WORD_OPERATORS,
  daxStreamParser,
} from '../src/dax-stream-language.js'

/** Every word keyword the grammar has, lower-cased. */
function grammarKeywords(): Set<string> {
  const words = new Set<string>()
  for (const file of [
    'dax-core.langium',
    'dax-query.langium',
    'dax-formula.langium',
  ]) {
    const source = readFileSync(
      join(__dirname, '..', 'src', 'language', file),
      'utf8',
    )
      // Comments quote DAX; only rules count.
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '')
    for (const match of source.matchAll(/'([A-Za-z]+)'/g))
      words.add(match[1].toLowerCase())
  }
  return words
}

/** `[token, style]` for each non-space token of one line. */
function tokens(line: string): [string, string | null][] {
  const parser = daxStreamParser
  const state = parser.startState!(2)
  const out: [string, string | null][] = []
  const stream = new StringStream(line, 2, 2)
  while (!stream.eol()) {
    stream.start = stream.pos
    const style = parser.token(stream, state)
    const text = stream.current()
    if (text.trim()) out.push([text, style])
  }
  return out
}

describe('the highlighter', () => {
  test('knows exactly the keywords the grammar has', () => {
    const highlighted = new Set([...KEYWORDS, ...WORD_OPERATORS, ...ATOMS])
    expect([...highlighted].sort()).toEqual([...grammarKeywords()].sort())
  })

  test('classifies each kind of token', () => {
    expect(
      tokens(
        `DEFINE MEASURE 'Sales'[Total] = SUMX('Sales', [Qty] * 1.5E2) // x`,
      ),
    ).toEqual([
      ['DEFINE', 'keyword'],
      ['MEASURE', 'keyword'],
      ["'Sales'", 'className'],
      ['[Total]', 'propertyName'],
      ['=', 'operator'],
      ['SUMX', 'function'],
      ['(', null],
      ["'Sales'", 'className'],
      [',', null],
      ['[Qty]', 'propertyName'],
      ['*', 'operator'],
      ['1.5E2', 'number'],
      [')', null],
      ['// x', 'comment'],
    ])
  })

  test('dates, parameters, dotted functions, word operators', () => {
    expect(
      tokens('evaluate { PERCENTILE.INC(@P, dt"2024-01-01") } -- c'),
    ).toEqual([
      ['evaluate', 'keyword'],
      ['{', null],
      ['PERCENTILE.INC', 'function'],
      ['(', null],
      ['@P', 'meta'],
      [',', null],
      ['dt"2024-01-01"', 'string.special'],
      [')', null],
      ['}', null],
      ['-- c', 'comment'],
    ])
    expect(tokens('NOT a IN b && TRUE || FALSE()')).toEqual([
      ['NOT', 'operator'],
      ['a', 'variableName'],
      ['IN', 'operator'],
      ['b', 'variableName'],
      ['&&', 'operator'],
      ['TRUE', 'atom'],
      ['||', 'operator'],
      ['FALSE', 'function'],
      ['(', null],
      [')', null],
    ])
  })

  test('escapes stay inside their token', () => {
    expect(tokens(`"a""b" [x]]y] 'it''s'`)).toEqual([
      ['"a""b"', 'string'],
      ['[x]]y]', 'propertyName'],
      ["'it''s'", 'className'],
    ])
  })
})
