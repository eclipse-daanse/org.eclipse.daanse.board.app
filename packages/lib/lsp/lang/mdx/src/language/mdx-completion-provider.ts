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

import type { LangiumDocument } from 'langium'
import { DefaultCompletionProvider } from 'langium/lsp'
import {
  CompletionItemKind,
  CompletionList,
  InsertTextFormat,
  Range,
  TextEdit,
  type CancellationToken,
  type CompletionItem,
  type CompletionParams,
} from 'vscode-languageserver'
import {
  functionDisplayName,
  functionNames,
  lookupFunction,
  type MdxFunctionCategory,
  type MdxFunctionSignature,
} from './mdx-functions.js'

const POSTFIX_CATEGORIES = new Set<MdxFunctionCategory>([
  'navigation',
  'member',
  'metadata',
])
const POSTFIX_EXTRAS = new Set(['MEMBERS'])

function allowedInPostfix(
  name: string,
  signature: MdxFunctionSignature,
): boolean {
  return POSTFIX_CATEGORIES.has(signature.category) || POSTFIX_EXTRAS.has(name)
}

function arityLabel(signature: MdxFunctionSignature): string {
  const { minArgs, maxArgs } = signature
  if (maxArgs === 0) {
    return 'no arguments'
  }
  if (maxArgs === undefined) {
    return `${minArgs}+ args`
  }
  if (minArgs === maxArgs) {
    return minArgs === 1 ? '1 arg' : `${minArgs} args`
  }
  return `${minArgs}–${maxArgs} args`
}

export class MdxCompletionProvider extends DefaultCompletionProvider {
  override async getCompletion(
    document: LangiumDocument,
    params: CompletionParams,
    cancelToken?: CancellationToken,
  ): Promise<CompletionList | undefined> {
    const list = await super.getCompletion(document, params, cancelToken)
    const functions = this.functionCompletions(document, params)
    if (functions.length === 0) {
      return list
    }
    return CompletionList.create(
      [...(list?.items ?? []), ...functions],
      list?.isIncomplete ?? false,
    )
  }

  protected functionCompletions(
    document: LangiumDocument,
    params: CompletionParams,
  ): CompletionItem[] {
    const text = document.textDocument.getText()
    const offset = document.textDocument.offsetAt(params.position)
    const lineBefore = text.slice(offset - params.position.character, offset)

    if (
      this.isInsideDelimitedName(lineBefore) ||
      this.isInsideStringOrComment(lineBefore)
    ) {
      return []
    }

    const partial = /[A-Za-z_]\w*$/.exec(lineBefore)?.[0] ?? ''
    const preceding = lineBefore
      .slice(0, lineBefore.length - partial.length)
      .at(-1)

    // Immediately after `[` the user is naming a cube object, not calling
    // anything — that position belongs to the metadata completion in the
    // playground, and to nothing at all in the extension.
    if (preceding === '[') {
      return []
    }
    const postfix = preceding === '.'

    const range = Range.create(
      params.position.line,
      params.position.character - partial.length,
      params.position.line,
      params.position.character,
    )

    const items: CompletionItem[] = []
    for (const name of functionNames()) {
      const signature = lookupFunction(name)
      if (!signature || (postfix && !allowedInPostfix(name, signature))) {
        continue
      }
      const label = functionDisplayName(name)
      const detail = signature.discouraged
        ? `${arityLabel(signature)} · discouraged`
        : arityLabel(signature)
      items.push({
        label,
        kind: CompletionItemKind.Function,
        detail,
        insertTextFormat: InsertTextFormat.Snippet,
        // A property-style function takes no parentheses: `.Parent`,
        // never `.Parent()`. The table already says which those are.
        textEdit: TextEdit.replace(
          range,
          signature.maxArgs === 0 ? label : `${label}($0)`,
        ),
      })
    }
    return items
  }

  protected isInsideDelimitedName(lineBefore: string): boolean {
    const withoutEscapes = lineBefore.replace(/\]\]/g, '')
    let depth = 0
    for (const character of withoutEscapes) {
      if (character === '[') depth++
      else if (character === ']' && depth > 0) depth--
    }
    return depth > 0
  }

  protected isInsideStringOrComment(lineBefore: string): boolean {
    const closedStrings = lineBefore.replace(/'(?:[^']|'')*'/g, '')
    return closedStrings.includes("'") || closedStrings.includes('//')
  }
}
