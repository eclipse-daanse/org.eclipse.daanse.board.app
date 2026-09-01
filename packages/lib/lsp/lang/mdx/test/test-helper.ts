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

import { expandToString } from 'langium/generate'
import { parseHelper } from 'langium/test'
import type { LangiumDocument } from 'langium'
import { createMdxServicesForTesting } from '../src/language/mdx-module.js'
import type { MdxScript } from '../src/language/generated/ast.js'

const services = createMdxServicesForTesting()

export const parse = parseHelper<MdxScript>(services.Mdx)

export interface ParseOptions {
  validation?: boolean
}

export async function parseMdx(
  text: string,
  options: ParseOptions = {},
): Promise<LangiumDocument<MdxScript>> {
  return parse(text, { validation: options.validation ?? false })
}

export function syntaxErrors(document: LangiumDocument<MdxScript>): string {
  const { lexerErrors, parserErrors } = document.parseResult
  if (lexerErrors.length === 0 && parserErrors.length === 0) {
    return ''
  }
  return expandToString`
        Lexer errors:
          ${lexerErrors.map(error => error.message).join('\n  ') || '(none)'}
        Parser errors:
          ${parserErrors.map(error => error.message).join('\n  ') || '(none)'}
    `
}

export function diagnostics(document: LangiumDocument<MdxScript>): string[] {
  return (document.diagnostics ?? []).map(diagnostic =>
    typeof diagnostic.message === 'string'
      ? diagnostic.message
      : diagnostic.message.value,
  )
}

export function diagnosticsOfSeverity(
  document: LangiumDocument<MdxScript>,
  severity: 1 | 2,
): string[] {
  return (document.diagnostics ?? [])
    .filter(diagnostic => diagnostic.severity === severity)
    .map(diagnostic =>
      typeof diagnostic.message === 'string'
        ? diagnostic.message
        : diagnostic.message.value,
    )
}

export { services }
