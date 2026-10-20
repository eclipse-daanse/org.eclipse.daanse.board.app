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
 * The generated data has to stay coherent with the grammar, and this is the
 * failure that actually happens: a rule grows a keyword and nothing re-runs
 * `npm run refresh-postgres-data`.
 *
 * Nothing here checks that the data matches PostgreSQL - it came from
 * PostgreSQL. What it checks is the join between the two: every word the
 * grammar spells is a real keyword, and each category rule re-admits exactly
 * the words of its own category.
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import {
  KEPT_RESERVED,
  KEYWORDS_IN_GRAMMAR,
  KEYWORD_CATEGORIES,
  RESERVED_NOT_IN_GRAMMAR,
  RESERVED_WORDS,
} from '../src/language/generated-postgres/keywords.js'
import {
  FUNCTION_NAMES,
  lookupFunction,
} from '../src/language/generated-postgres/functions.js'
import { OPERATORS } from '../src/language/generated-postgres/operators.js'
import {
  FUNCTION_WORDS,
  KEYWORD_WORDS,
} from '../src/language/generated-postgres/highlight-words.js'

const LANGUAGE_DIR = join(__dirname, '..', 'src', 'language')
const GENERATED = join('generated-postgres', 'postgres-keywords.langium')

/** Every `'WORD'` literal a grammar file spells, lower-cased as the server has it. */
function keywordLiterals(file: string): Set<string> {
  const source = readFileSync(join(LANGUAGE_DIR, file), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
  const words = source.match(/'([A-Za-z_][A-Za-z_0-9]*)'/g) ?? []
  return new Set(words.map(word => word.slice(1, -1).toLowerCase()))
}

/** The words one rule of the generated file re-admits. */
function ruleWords(rule: string): Set<string> {
  const source = readFileSync(join(LANGUAGE_DIR, GENERATED), 'utf8')
  const start = source.indexOf(`${rule} returns string:`)
  expect(start, `${rule} is missing from the generated file`).toBeGreaterThan(-1)
  const body = source.slice(start, source.indexOf(';', start))
  const words = body.match(/'([A-Za-z_][A-Za-z_0-9]*)'/g) ?? []
  return new Set(words.map(word => word.slice(1, -1).toLowerCase()))
}

const grammarWords = keywordLiterals('sql.langium')
const unreserved = ruleWords('UnreservedKeyword')
const colName = ruleWords('ColNameKeyword')
const typeFuncName = ruleWords('TypeFuncNameKeyword')
const reserved = ruleWords('ReservedKeyword')
const bareLabel = ruleWords('BareLabelKeyword')

describe('the keyword data agrees with the grammar', () => {
  test('every literal the grammar spells is a PostgreSQL keyword', () => {
    // A literal that is no keyword at all is a typo: the lexer would reserve a
    // word the server has never heard of.
    const unknown = [...grammarWords].filter(
      word => KEYWORD_CATEGORIES[word] === undefined,
    )
    expect(unknown).toEqual([])
  })

  test('every keyword the grammar spells is re-admitted or kept reserved', () => {
    const classified = new Set([
      ...unreserved,
      ...colName,
      ...typeFuncName,
      ...reserved,
    ])
    const missing = [...grammarWords].filter(
      word => !classified.has(word) && !KEPT_RESERVED.has(word),
    )
    expect(missing).toEqual([])
  })

  test('the words kept reserved on purpose are exactly the documented set', () => {
    // Each of these costs a pair of quotes, so the list is worth pinning: a
    // word added to KEEP_RESERVED without a reason fails here.
    const kept = [...grammarWords].filter(
      word =>
        !unreserved.has(word) &&
        !colName.has(word) &&
        !typeFuncName.has(word) &&
        !reserved.has(word),
    )
    expect(new Set(kept)).toEqual(new Set(KEPT_RESERVED))
  })

  test('each category rule holds only words of that category', () => {
    const wrong = (words: Set<string>, category: string) =>
      [...words]
        // A category with nothing left to re-admit carries a placeholder,
        // which is no keyword at all; the generated file says why.
        .filter(word => KEYWORD_CATEGORIES[word] !== undefined)
        .filter(word => KEYWORD_CATEGORIES[word] !== category)
    expect(wrong(unreserved, 'U')).toEqual([])
    expect(wrong(colName, 'C')).toEqual([])
    expect(wrong(typeFuncName, 'T')).toEqual([])
    expect(wrong(reserved, 'R')).toEqual([])
  })

  test('the categories do not overlap', () => {
    const rules = [unreserved, colName, typeFuncName, reserved]
    for (let i = 0; i < rules.length; i++) {
      for (let j = i + 1; j < rules.length; j++) {
        expect([...rules[i]].filter(word => rules[j].has(word))).toEqual([])
      }
    }
  })

  test('no rule re-admits a word the grammar never spells', () => {
    for (const words of [unreserved, colName, typeFuncName, reserved, bareLabel]) {
      expect(
        [...words]
          // A category with nothing left to re-admit carries a placeholder,
          // which is deliberately no keyword at all.
          .filter(word => KEYWORD_CATEGORIES[word] !== undefined)
          .filter(word => !grammarWords.has(word)),
      ).toEqual([])
    }
  })

  test('every bare-label word is flagged as one by the server', () => {
    // BareColLabel is the alias-without-AS position, so its members are the
    // words the server marks `barelabel` - a set that cuts across categories
    // and includes reserved words like `select`.
    expect([...bareLabel].filter(word => !KEYWORDS_IN_GRAMMAR.has(word))).toEqual(
      [],
    )
  })

  test('the reserved words the grammar never spells are the validator half', () => {
    expect(
      [...RESERVED_NOT_IN_GRAMMAR].filter(word => grammarWords.has(word)),
    ).toEqual([])
    const reservedEverywhere = [...RESERVED_WORDS]
    expect(
      reservedEverywhere.filter(
        word => !grammarWords.has(word) && !RESERVED_NOT_IN_GRAMMAR.has(word),
      ),
    ).toEqual([])
  })
})

describe('the function catalogue', () => {
  test('holds the callable half of pg_catalog', () => {
    expect(FUNCTION_NAMES.length).toBeGreaterThan(1000)
  })

  test('is looked up case-insensitively', () => {
    expect(lookupFunction('sum')).toBeDefined()
    expect(lookupFunction('SUM')).toBeDefined()
  })

  test('has no duplicate names', () => {
    expect(new Set(FUNCTION_NAMES).size).toBe(FUNCTION_NAMES.length)
  })

  test('classifies aggregates, window functions and plain ones', () => {
    expect(lookupFunction('sum')?.kind).toBe('a')
    expect(lookupFunction('count')?.kind).toBe('a')
    expect(lookupFunction('row_number')?.kind).toBe('w')
    expect(lookupFunction('lower')?.kind).toBe('f')
  })

  test('never states more defaults than arguments', () => {
    const broken = FUNCTION_NAMES.flatMap(name =>
      (lookupFunction(name)?.overloads ?? [])
        .filter(overload => overload.defaults > overload.args)
        .map(() => name),
    )
    expect(broken).toEqual([])
  })

  test('leaves out the functions a query cannot call', () => {
    // The I/O and handler functions: real rows in pg_proc, but nothing a user
    // can write, so listing them would only produce noise in completion.
    expect(lookupFunction('int4in')).toBeUndefined()
    expect(lookupFunction('array_agg_transfn')).toBeUndefined()
  })
})

describe('the operator list', () => {
  test('holds the operators the grammar leaves to the lexer', () => {
    for (const operator of ['+', '-', '||', '@>', '->>', '~']) {
      expect(OPERATORS.has(operator), operator).toBe(true)
    }
  })
})

describe('the highlighter word lists', () => {
  test('carry every keyword, not only the ones the grammar spells', () => {
    // The tokenizer colours what the user types, which includes keywords no
    // rule mentions - the point of generating the list rather than writing it.
    expect(KEYWORD_WORDS.length).toBeGreaterThan(grammarWords.size)
    expect(KEYWORD_WORDS).toContain('select')
  })

  test('name the same functions the catalogue does', () => {
    expect(new Set(FUNCTION_WORDS)).toEqual(new Set(FUNCTION_NAMES))
  })
})
