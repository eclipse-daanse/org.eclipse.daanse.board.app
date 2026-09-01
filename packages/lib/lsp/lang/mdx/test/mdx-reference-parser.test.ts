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
import { parseMdxCompletionContext } from '../src/mdx-reference-parser.js'

function at(text: string) {
  return parseMdxCompletionContext(text, text.length + 1)
}

function replaced(text: string) {
  const ctx = at(text)
  if (ctx.kind === 'none')
    throw new Error('no word range for a suppressed context')
  return text.slice(ctx.wordRange.start - 1, ctx.wordRange.end - 1)
}

describe('bracket chains', () => {
  test('a fresh open bracket is a chain, and its range includes the bracket', () => {
    // If the range excluded the `[`, accepting `[Department]` would splice
    // it after the one already typed and produce `[[Department]`.
    const ctx = at('SELECT [Dep')
    expect(ctx.kind).toBe('bracket-chain')
    expect(replaced('SELECT [Dep')).toBe('[Dep')
  })

  test('a bare word with no bracket is not a chain', () => {
    expect(at('SEL').kind).toBe('fresh-word')
  })

  test('one closed segment offers hierarchies of that segment', () => {
    const ctx = at('[Employees].[')
    expect(ctx.kind).toBe('bracket-chain')
    if (ctx.kind !== 'bracket-chain') return
    expect(ctx.chain).toEqual(['[Employees]'])
  })

  test('two closed segments offer levels', () => {
    const ctx = at('[Store].[Store].[')
    if (ctx.kind !== 'bracket-chain')
      throw new Error('expected a bracket chain')
    expect(ctx.chain).toEqual(['[Store]', '[Store]'])
  })

  test('the cursor just past a closing bracket, before any dot, still sees the chain', () => {
    const ctx = at('[Employees]')
    expect(ctx.kind).toBe('bracket-chain')
    if (ctx.kind !== 'bracket-chain') return
    expect(ctx.chain).toEqual(['[Employees]'])
  })

  test('chain segments stay bracket-quoted, matching the XMLA unique names', () => {
    const ctx = at('[Product].[Product Categories].[')
    if (ctx.kind !== 'bracket-chain')
      throw new Error('expected a bracket chain')
    // These feed straight into discoverHierarchies/discoverLevels, which
    // expect the exact form the server reports.
    expect(ctx.chain).toEqual(['[Product]', '[Product Categories]'])
  })

  test('a Measures chain is flagged and its chain emptied', () => {
    const ctx = at('[Measures].[')
    if (ctx.kind !== 'bracket-chain')
      throw new Error('expected a bracket chain')
    expect(ctx.isMeasuresChain).toBe(true)
    expect(ctx.chain).toEqual([])
  })

  test('the Measures check is case-insensitive', () => {
    const ctx = at('[MEASURES].[Uni')
    if (ctx.kind !== 'bracket-chain')
      throw new Error('expected a bracket chain')
    expect(ctx.isMeasuresChain).toBe(true)
  })

  test('a bareword after a dot is a chain continuation, not a fresh word', () => {
    const ctx = at('[Date].[Calendar].Curr')
    expect(ctx.kind).toBe('bracket-chain')
    expect(replaced('[Date].[Calendar].Curr')).toBe('Curr')
  })

  test('a fourth segment reports its full depth so the caller can cap it', () => {
    // Depth is not truncated by the parser: the consumer needs to tell
    // "typing a level" from "typing a member" to honour the level cap.
    const ctx = at('[A].[B].[C].[')
    if (ctx.kind !== 'bracket-chain')
      throw new Error('expected a bracket chain')
    expect(ctx.chain).toHaveLength(3)
  })
})

describe('keyword contexts', () => {
  test('FROM wins over the bracket-chain rule', () => {
    // `FROM [Sa` has zero closed segments, so the chain rule would
    // otherwise claim it and offer dimensions instead of the cube.
    const ctx = at('FROM [Sa')
    expect(ctx.kind).toBe('after-from')
    expect(replaced('FROM [Sa')).toBe('[Sa')
  })

  test('FROM with nothing typed yet', () => {
    expect(at('FROM ').kind).toBe('after-from')
  })

  test('ON offers axis keywords', () => {
    expect(at('} ON ').kind).toBe('after-on')
    expect(at('} ON CO').kind).toBe('after-on')
  })

  test('keyword matching is case-insensitive', () => {
    expect(at('from ').kind).toBe('after-from')
    expect(at('} on ').kind).toBe('after-on')
  })
})

describe('suppressed positions', () => {
  test('inside an unterminated string', () => {
    expect(at("WHERE 'abc").kind).toBe('none')
  })

  test('a closed string does not suppress', () => {
    expect(at("WHERE 'abc' ").kind).not.toBe('none')
  })

  test("a doubled '' counts as one escaped quote, not two boundaries", () => {
    expect(at("WHERE 'it''s").kind).toBe('none')
  })

  test('after a line comment', () => {
    expect(at('SELECT // pick a measure').kind).toBe('none')
  })

  test('a // inside a closed string is not a comment', () => {
    expect(at("WHERE 'http://x' ").kind).not.toBe('none')
  })
})

describe('chainRange', () => {
  test('spans from the first bracket of the chain to the caret', () => {
    const ctx = parseMdxCompletionContext('SELECT [Product].[B', 20)
    expect(ctx).toMatchObject({
      kind: 'bracket-chain',
      wordRange: { start: 18, end: 20 },
      chainRange: { start: 8, end: 20 },
    })
  })

  test('equals wordRange when the chain is a single fresh bracket', () => {
    const ctx = parseMdxCompletionContext('SELECT [Pro', 12)
    expect(ctx).toMatchObject({
      kind: 'bracket-chain',
      wordRange: { start: 8, end: 12 },
      chainRange: { start: 8, end: 12 },
    })
  })

  test('covers a two-segment chain', () => {
    const ctx = parseMdxCompletionContext('SELECT [Product].[Product].[P', 30)
    expect(ctx).toMatchObject({
      kind: 'bracket-chain',
      chainRange: { start: 8, end: 30 },
    })
  })

  test('covers a chain whose caret sits right after a closed segment', () => {
    const ctx = parseMdxCompletionContext('SELECT [Product]', 17)
    expect(ctx).toMatchObject({
      kind: 'bracket-chain',
      chainRange: { start: 8, end: 17 },
    })
  })

  test('a bracketed segment containing an escaped `]]` is measured correctly', () => {
    const ctx = parseMdxCompletionContext('SELECT [A]]B].[C', 17)
    expect(ctx).toMatchObject({
      kind: 'bracket-chain',
      chainRange: { start: 8, end: 17 },
    })
  })
})
