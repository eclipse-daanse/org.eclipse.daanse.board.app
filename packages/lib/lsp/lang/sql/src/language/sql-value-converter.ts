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

export class SqlValueConverter extends DefaultValueConverter {
  protected override runConverter(
    rule: GrammarAST.AbstractRule,
    input: string,
    cstNode: CstNode,
  ): ValueType {
    switch (rule.name) {
      case 'BACKTICK_ID':
        return undouble(input, '`')
      case 'DQUOTE_ID':
        return unescapeString(undouble(input, '"'))
      case 'STRING':
        return unescapeString(undouble(input, "'"))
      default:
        return super.runConverter(rule, input, cstNode)
    }
  }
}

function undouble(input: string, quote: string): string {
  return input
    .slice(1, -1)
    .split(quote + quote)
    .join(quote)
}

const ESCAPES: Record<string, string> = {
  '0': '\u0000',
  "'": "'",
  '"': '"',
  b: '\b',
  n: '\n',
  r: '\r',
  t: '\t',
  Z: '\u001a',
  '\\': '\\',
}

function unescapeString(input: string): string {
  return input.replace(/\\(.)/g, (match: string, char: string) =>
    char === '%' || char === '_' ? match : (ESCAPES[char] ?? char),
  )
}
