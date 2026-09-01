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
import {
  consumeBlockComment,
  consumeDelimited,
  type TokenStream,
} from '../src/tokenizer.js'

function stream(
  text: string,
): TokenStream & { rest(): string; consumed(): string } {
  let pos = 0
  return {
    eol: () => pos >= text.length,
    next: () => (pos < text.length ? text[pos++] : undefined),
    peek: () => (pos < text.length ? text[pos] : undefined),
    match(pattern: string) {
      if (text.startsWith(pattern, pos)) {
        pos += pattern.length
        return true
      }
      return false
    },
    rest: () => text.slice(pos),
    consumed: () => text.slice(0, pos),
  }
}

describe('consumeDelimited', () => {
  test('stops after the closing delimiter and leaves the rest', () => {
    const s = stream('Order Quantity].Members')
    expect(consumeDelimited(s, ']')).toBe(true)
    expect(s.consumed()).toBe('Order Quantity]')
    expect(s.rest()).toBe('.Members')
  })

  test('a doubled delimiter is an escaped literal, not the end', () => {
    // `[Order ]] Quantity]` — the `]]` is one literal `]`.
    const s = stream('Order ]] Quantity].Members')
    expect(consumeDelimited(s, ']')).toBe(true)
    expect(s.consumed()).toBe('Order ]] Quantity]')
    expect(s.rest()).toBe('.Members')
  })

  test('doubled quotes work the same way', () => {
    const s = stream("it''s', rest")
    expect(consumeDelimited(s, "'")).toBe(true)
    expect(s.consumed()).toBe("it''s'")
  })

  test('reports false and consumes the line when unterminated', () => {
    const s = stream('Order Quantity')
    expect(consumeDelimited(s, ']')).toBe(false)
    expect(s.eol()).toBe(true)
  })

  test('an immediately closed delimiter is empty, not escaped', () => {
    // `[]` — one `]` at the start closes; only a *second* one escapes.
    const s = stream('] rest')
    expect(consumeDelimited(s, ']')).toBe(true)
    expect(s.rest()).toBe(' rest')
  })
})

describe('consumeBlockComment', () => {
  test('stops after the terminator and leaves the rest', () => {
    const s = stream(' a comment */ SELECT')
    expect(consumeBlockComment(s)).toBe(true)
    expect(s.rest()).toBe(' SELECT')
  })

  test('reports false when the comment runs past end of line', () => {
    // Block comments span lines, so the caller keeps its state set.
    const s = stream(' still going')
    expect(consumeBlockComment(s)).toBe(false)
    expect(s.eol()).toBe(true)
  })

  test('a lone asterisk does not terminate', () => {
    const s = stream(' 3 * 4 */ done')
    expect(consumeBlockComment(s)).toBe(true)
    expect(s.rest()).toBe(' done')
  })
})
