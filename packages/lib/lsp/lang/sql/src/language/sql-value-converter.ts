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

import {
  DefaultValueConverter,
  type CstNode,
  type GrammarAST,
  type ValueType,
} from 'langium'

/**
 * Turns a token's text into the value the AST carries.
 *
 * The one that matters beyond tidiness is `ID`: PostgreSQL folds an unquoted
 * identifier to lower case (4.1.1), so `T1` and `t1` are the same name and
 * `"T1"` is a third one. Folding here is what lets `sql-validator.ts` compare
 * aliases without repeating the rule at every call site.
 */
export class SqlValueConverter extends DefaultValueConverter {
  protected override runConverter(
    rule: GrammarAST.AbstractRule,
    input: string,
    cstNode: CstNode,
  ): ValueType {
    switch (rule.name) {
      case 'ID':
        return input.toLowerCase()
      case 'QUOTED_ID':
        return undouble(input.slice(1, -1), '"')
      case 'UNICODE_ID':
        // `U&"..."`, with the optional `UESCAPE 'x'` that belongs to the token.
        // The \xxxx escapes inside are left as written: decoding them would
        // mean interpreting the escape character too, and nothing downstream
        // reads the decoded name.
        return undouble(body(input, UNICODE_ID_BODY, '"'), '"')
      case 'SCONST':
        return undouble(input.slice(1, -1), "'")
      case 'ESTRING':
        return unescapeString(undouble(input.slice(2, -1), "'"))
      case 'USTRING':
        return undouble(body(input, USTRING_BODY, "'"), "'")
      case 'DOLLAR_STRING':
        return undollar(input)
      case 'NUMBER':
        return toNumber(input)
      default:
        return super.runConverter(rule, input, cstNode)
    }
  }
}

/**
 * A `U&` literal may carry `UESCAPE 'x'` after it, which is part of the token
 * rather than of the grammar around it. These match the literal itself, so the
 * escape clause falls off with nothing else to do.
 */
const UNICODE_ID_BODY = /^[uU]&"(?:[^"]|"")*"/
const USTRING_BODY = /^[uU]&'(?:[^']|'')*'/

function body(input: string, pattern: RegExp, quote: string): string {
  const matched = pattern.exec(input)?.[0] ?? input
  const start = matched.indexOf(quote) + 1
  return matched.slice(start, matched.lastIndexOf(quote))
}

function undouble(input: string, quote: string): string {
  return input.split(quote + quote).join(quote)
}

/** `$tag$body$tag$` - the tag is whatever stands between the first two `$`. */
function undollar(input: string): string {
  const end = input.indexOf('$', 1)
  const tag = input.slice(0, end + 1)
  return input.slice(tag.length, input.length - tag.length)
}

/**
 * The backslash escapes `E'...'` recognises (4.1.2.2). The numeric forms are
 * left alone: nothing downstream reads a string's value, and mis-decoding one
 * would be worse than not decoding it.
 */
const ESCAPES: Record<string, string> = {
  b: '\b',
  f: '\f',
  n: '\n',
  r: '\r',
  t: '\t',
  '\\': '\\',
  "'": "'",
  '"': '"',
}

function unescapeString(input: string): string {
  return input.replace(
    /\\(.)/g,
    (match: string, char: string) => ESCAPES[char] ?? match,
  )
}

/**
 * Decimal, hexadecimal, octal and binary, with the `_` separators PostgreSQL 16
 * added (4.1.2.1). `Number()` handles `0x` but not `0o`/`0b` with underscores
 * already stripped, so the radix forms are split out.
 */
function toNumber(input: string): number {
  const text = input.replace(/_/g, '')
  const radix = { x: 16, o: 8, b: 2 }[text[1]?.toLowerCase() ?? '']
  if (text[0] === '0' && radix) {
    return Number.parseInt(text.slice(2), radix)
  }
  return Number.parseFloat(text)
}
