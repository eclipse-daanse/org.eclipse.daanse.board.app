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

export class DmvValueConverter extends DefaultValueConverter {
  protected override runConverter(
    rule: GrammarAST.AbstractRule,
    input: string,
    cstNode: CstNode,
  ): ValueType {
    switch (rule.name) {
      case 'QUOTED_ID':
        return unwrap(input, ']')
      case 'STRING':
        // The opening character says which quote style was used.
        return unwrap(input, input.charAt(0))
      case 'PARAM':
        return input.slice(1)
      default:
        return super.runConverter(rule, input, cstNode)
    }
  }
}

function unwrap(input: string, escaped: string): string {
  return input
    .slice(1, -1)
    .split(escaped + escaped)
    .join(escaped)
}
