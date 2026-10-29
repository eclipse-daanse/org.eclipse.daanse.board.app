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
import { parseMdx } from '../test-helper.js'
import { expectedList } from '../../src/language/mdx-parser-messages.js'

async function messages(text: string): Promise<string[]> {
  const document = await parseMdx(text)
  return document.parseResult.parserErrors.map(error => error.message)
}

async function lexerMessages(text: string): Promise<string[]> {
  const document = await parseMdx(text)
  return document.parseResult.lexerErrors.map(error => error.message)
}

describe('parse errors as people read them', () => {
  test('an unfinished name says what may follow, briefly, and that the text ended', async () => {
    const [first] = await messages('SELECT {[Gender].[')
    expect(first).toMatch(/^Expected .+, found (the end of the query|'.*')\.$/)
    expect(first).not.toMatch(/Token sequences|\d\. \[/)
    expect(first.length).toBeLessThan(160)
  })

  test('a missing keyword is named as the keyword', async () => {
    const all = await messages('SELECT {[A]} ON COLUMNS [Sales]')
    expect(all.join(' ')).toContain("'FROM'")
  })

  test('the end of the text is not shown as empty quotes', async () => {
    const all = await messages('SELECT {[A]} ON COLUMNS FROM')
    expect(all.join(' ')).toContain('the end of the query')
    expect(all.join(' ')).not.toContain("''")
  })

  test('a long list of alternatives is cut short', () => {
    const many = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(name => ({ name: `${name}:KW` }))
    expect(expectedList(many)).toBe("'A', 'B', 'C', 'D', 'E', 'F', …")
    expect(expectedList([{ name: 'BRACKET_ID' }, { name: 'ON:KW' }])).toBe("a [name] or 'ON'")
  })

  test('a dot followed by nothing names what may follow it, not the dot that is there', async () => {
    const all = await messages('SELECT {[Gender].')
    expect(all).toHaveLength(1)
    expect(all[0]).toMatch(/^Expected a name, a \[name\].* after '\.', found the end of the query\.$/)
    expect(all[0]).not.toContain("found '.'")
  })

  test('the same error is reported once, not once per recovery attempt', async () => {
    const all = await messages('SELECT {[Gender].[')
    expect(new Set(all).size).toBe(all.length)
    expect(all.join(' ')).not.toMatch(/Expected '\.', found '\.'/)
  })
})

describe('lexer errors as people read them', () => {
  test('an unclosed bracket says so, without offsets and arrows', async () => {
    const [message] = await lexerMessages('SELECT {[Gender].[')
    expect(message).toBe("A [name] is not closed: ']' is missing.")
  })

  test('an unclosed string says so', async () => {
    const [message] = await lexerMessages("WITH MEMBER [Measures].[X] AS 'abc")
    expect(message).toContain('A string is not closed')
  })

  test('any other stray character is quoted', async () => {
    const [message] = await lexerMessages('SELECT {[A]} ON 0 FROM [S] §')
    expect(message).toBe("Unexpected character '§'.")
  })
})
