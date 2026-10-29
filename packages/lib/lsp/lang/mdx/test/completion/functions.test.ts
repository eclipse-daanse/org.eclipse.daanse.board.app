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
import type { CompletionItem } from 'vscode-languageserver'
import { parseMdx, services } from '../test-helper.js'
import {
  functionDisplayName,
  functionNames,
  lookupFunction,
} from '../../src/language/mdx-functions.js'

const provider = services.Mdx.lsp.CompletionProvider!

async function completeAt(textWithCursor: string): Promise<CompletionItem[]> {
  const offset = textWithCursor.indexOf('|')
  const document = await parseMdx(textWithCursor.replace('|', ''))
  const list = await provider.getCompletion(document, {
    textDocument: { uri: document.uri.toString() },
    position: document.textDocument.positionAt(offset),
  })
  return list?.items ?? []
}

const labels = (items: CompletionItem[]) => items.map(item => item.label)
const insertOf = (items: CompletionItem[], label: string) =>
  items.find(item => item.label === label)?.textEdit?.newText

describe('display names', () => {
  test('every signature has a canonical spelling, and none is left upper case', () => {
    // The two tables are separate because lookup must be case-insensitive
    // while display must not be. This is what keeps them in step.
    for (const name of functionNames()) {
      const display = functionDisplayName(name)
      expect(display, `${name} has no display name`).not.toBe(name)
      expect(display.toUpperCase()).toBe(name)
    }
  })
})

describe('expression position', () => {
  test('offers functions by their canonical spelling', async () => {
    const items = await completeAt('SELECT Su|')
    expect(labels(items)).toContain('Sum')
    expect(labels(items)).not.toContain('SUM')
  })

  test('a call gets parentheses with the caret inside', async () => {
    expect(insertOf(await completeAt('SELECT Su|'), 'Sum')).toBe('Sum($0)')
  })

  test('a property-style function gets none', async () => {
    // `.Parent()` is not MDX, and the table already records the arity.
    expect(insertOf(await completeAt('SELECT Par|'), 'Parent')).toBe('Parent')
  })

  test('arity is shown as the detail', async () => {
    const items = await completeAt('SELECT x|')
    const detailOf = (label: string) =>
      items.find(i => i.label === label)?.detail
    expect(detailOf('Abs')).toBe('1 arg')
    expect(detailOf('Sum')).toBe('1–2 args')
    expect(detailOf('Parent')).toBe('no arguments')
    expect(detailOf('Crossjoin')).toContain('+ args')
  })

  test('a discouraged function is marked as such', async () => {
    // The validator already warns on use; the list says so up front.
    expect(lookupFunction('LOOKUPCUBE')?.discouraged).toBeTruthy()
    const items = await completeAt('SELECT Look|')
    expect(items.find(i => i.label === 'LookupCube')?.detail).toContain(
      'discouraged',
    )
  })
})

describe('after a dot', () => {
  test('offers the continuations of a member', async () => {
    const items = await completeAt('SELECT [Measures].[Unit Sales].|')
    expect(labels(items)).toEqual(
      expect.arrayContaining([
        'Parent',
        'CurrentMember',
        'Members',
        'UniqueName',
        'Lag',
      ]),
    )
  })

  test('does not offer calls that cannot follow a member', async () => {
    const items = await completeAt('SELECT [Measures].[Unit Sales].|')
    for (const name of ['Sum', 'Filter', 'Ytd', 'UserName', 'Root']) {
      expect(
        labels(items),
        `${name} is not a postfix continuation`,
      ).not.toContain(name)
    }
  })
})

describe('positions where nothing is offered', () => {
  test('inside an unclosed delimited name', async () => {
    // `[Su` is naming a cube object; that position belongs to metadata.
    expect(labels(await completeAt('SELECT [Su|'))).not.toContain('Sum')
  })

  test('immediately after an opening bracket', async () => {
    expect(labels(await completeAt('SELECT [|'))).not.toContain('Sum')
  })

  test('inside a string literal', async () => {
    expect(labels(await completeAt("WHERE 'Su|"))).not.toContain('Sum')
  })

  test('inside a line comment', async () => {
    expect(labels(await completeAt('SELECT // Su|'))).not.toContain('Sum')
  })
})
