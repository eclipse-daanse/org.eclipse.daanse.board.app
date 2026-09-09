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
import {
  RESERVED_IN_GRAMMAR,
  RESERVED_NOT_IN_GRAMMAR,
  RESERVED_WORDS,
} from '../src/language/generated-mysql/keywords.js'
import {
  MYSQL_FUNCTIONS,
  lookupFunction,
} from '../src/language/generated-mysql/functions.js'

const LANGUAGE_DIR = join(__dirname, '..', 'src', 'language')

function keywordLiterals(file: string): Set<string> {
  const source = readFileSync(join(LANGUAGE_DIR, file), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
  const words = source.match(/'([A-Za-z_][A-Za-z_0-9]*)'/g) ?? []
  return new Set(words.map(word => word.slice(1, -1).toUpperCase()))
}

const grammarWords = keywordLiterals('sql.langium')
const readmittedWords = keywordLiterals(
  join('generated-mysql', 'mysql-keywords.langium'),
)

const DELIBERATELY_RESERVED = new Set(['CAST', 'CURRENT', 'UNBOUNDED'])

describe('the keyword lists agree with the grammar', () => {
  test('every keyword the grammar uses is classified', () => {
    const unclassified = [...grammarWords].filter(
      word =>
        !RESERVED_WORDS.has(word) &&
        !readmittedWords.has(word) &&
        !DELIBERATELY_RESERVED.has(word),
    )
    expect(unclassified).toEqual([])
  })

  test('every re-admitted word is one MySQL does not reserve', () => {
    expect(
      [...readmittedWords].filter(word => RESERVED_WORDS.has(word)),
    ).toEqual([])
  })

  test('every re-admitted word is one the grammar actually mentions', () => {
    expect(
      [...readmittedWords].filter(word => !grammarWords.has(word)),
    ).toEqual([])
  })

  test('the words kept reserved on purpose are exactly the documented three', () => {
    const kept = [...grammarWords].filter(
      word => !RESERVED_WORDS.has(word) && !readmittedWords.has(word),
    )
    expect(new Set(kept)).toEqual(DELIBERATELY_RESERVED)
  })

  test('the two reserved halves partition the reserved set', () => {
    expect(RESERVED_IN_GRAMMAR.size + RESERVED_NOT_IN_GRAMMAR.size).toBe(
      RESERVED_WORDS.size,
    )
    expect(
      [...RESERVED_IN_GRAMMAR].filter(word =>
        RESERVED_NOT_IN_GRAMMAR.has(word),
      ),
    ).toEqual([])
  })

  test('the half the grammar reserves is exactly what it mentions', () => {
    expect(
      [...RESERVED_IN_GRAMMAR].filter(word => !grammarWords.has(word)),
    ).toEqual([])
    expect(
      [...RESERVED_NOT_IN_GRAMMAR].filter(word => grammarWords.has(word)),
    ).toEqual([])
  })
})

describe('the function catalogue', () => {
  test('holds the whole 8.4 built-in list', () => {
    expect(MYSQL_FUNCTIONS.length).toBeGreaterThan(400)
  })

  test('is looked up case-insensitively', () => {
    expect(lookupFunction('date_format')?.name).toBe('DATE_FORMAT')
    expect(lookupFunction('DATE_FORMAT')?.name).toBe('DATE_FORMAT')
  })

  test('has no duplicate names', () => {
    const names = MYSQL_FUNCTIONS.map(fn => fn.name.toLowerCase())
    expect(new Set(names).size).toBe(names.length)
  })

  test('never states a maximum below its minimum', () => {
    const broken = MYSQL_FUNCTIONS.filter(
      fn =>
        fn.minArgs !== null && fn.maxArgs !== null && fn.maxArgs < fn.minArgs,
    )
    expect(broken).toEqual([])
  })

  test('classifies the aggregates and window functions', () => {
    expect(lookupFunction('SUM')?.kind).toBe('aggregate')
    expect(lookupFunction('COUNT')?.kind).toBe('aggregate')
    expect(lookupFunction('ROW_NUMBER')?.kind).toBe('window')
    expect(lookupFunction('CONCAT')?.kind).toBe('scalar')
  })

  test('covers the keyword-named functions the grammar special-cases', () => {
    for (const name of [
      'CHAR',
      'INSERT',
      'LEFT',
      'MOD',
      'REPLACE',
      'RIGHT',
      'VALUES',
    ]) {
      expect(lookupFunction(name), name).toBeDefined()
    }
  })
})
