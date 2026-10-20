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
 * Delimiters and escapes are stripped here, so the AST carries names and
 * values rather than their spelling:
 *
 * | source            | AST value      |
 * |-------------------|----------------|
 * | `"say ""hi"""`    | `say "hi"`     |
 * | `'It''s Sales'`   | `It's Sales`   |
 * | `[Order ]]Count]` | `Order ]Count` |
 * | `@MinAmount`      | `MinAmount`    |
 * | `dt"2024-01-31"`  | `2024-01-31`   |
 *
 * Doing it in a converter keeps each delimited form a single token, which is
 * what lets `[Order Count]` and `'Sales Table'` lex as one name instead of
 * colliding with whitespace and keywords. It is also what makes `[Total]`
 * and the `[Total]` of `MEASURE 'Sales'[Total]` the same name, so the one
 * resolves to the other.
 */
import {
  DefaultValueConverter,
  type CstNode,
  type GrammarAST,
  type ValueType,
} from 'langium'

export class DaxValueConverter extends DefaultValueConverter {
  protected override runConverter(
    rule: GrammarAST.AbstractRule,
    input: string,
    cstNode: CstNode,
  ): ValueType {
    switch (rule.name) {
      case 'STRING':
        return unwrap(input, '"')
      case 'QUOTED_TABLE':
        return unwrap(input, "'")
      case 'BRACKET_ID':
        return unwrap(input, ']')
      case 'PARAM':
        return input.slice(1)
      case 'DATETIME':
        return input.slice(3, -1)
      default:
        return super.runConverter(rule, input, cstNode)
    }
  }
}

/** Drops the first and last character and un-doubles the escaped one. */
function unwrap(input: string, escaped: string): string {
  return input
    .slice(1, -1)
    .split(escaped + escaped)
    .join(escaped)
}
