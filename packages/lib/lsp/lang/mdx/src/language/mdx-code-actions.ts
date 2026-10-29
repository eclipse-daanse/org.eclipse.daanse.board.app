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
/*
 * Quick fixes. An unknown function is very often a known one misspelt -
 * `Fltr`, `CrossJion` - so the functions closest to it by edit distance are
 * offered as replacements, the nearest first.
 *
 * The fixes are worked out from the document's own diagnostics in the
 * requested range, not from what the client sends along: a client that
 * passes no codes, or none at all, still gets them.
 */

import type { LangiumDocument } from 'langium'
import type { CodeActionProvider } from 'langium/lsp'
import { CodeActionKind, type CodeAction, type CodeActionParams, type Diagnostic, type Range } from 'vscode-languageserver'
import { functionDisplayName, functionNames } from './mdx-functions.js'

export const UNKNOWN_FUNCTION = 'mdx.unknownFunction'

/** Levenshtein distance, case-insensitive. */
export function distance(a: string, b: string): number {
  const x = a.toLowerCase()
  const y = b.toLowerCase()
  const row = Array.from({ length: y.length + 1 }, (_, i) => i)
  for (let i = 1; i <= x.length; i++) {
    let diagonal = row[0]
    row[0] = i
    for (let j = 1; j <= y.length; j++) {
      const above = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (x[i - 1] === y[j - 1] ? 0 : 1))
      diagonal = above
    }
  }
  return row[y.length]
}

/** Known functions close enough to be what was meant, the nearest first. */
export function suggestFunctions(name: string, limit = 3): string[] {
  // Two edits for a short name - `Fltr` is two letters short of `Filter` - a third of a long one.
  const budget = Math.max(2, Math.ceil(name.length / 3))
  return functionNames()
    .map(known => ({ known, d: distance(name, known) }))
    .filter(({ d }) => d > 0 && d <= budget)
    .sort((a, b) => a.d - b.d || a.known.localeCompare(b.known))
    .slice(0, limit)
    .map(({ known }) => functionDisplayName(known))
}

function overlaps(a: Range, b: Range): boolean {
  const before = (p: Range['start'], q: Range['start']) => p.line < q.line || (p.line === q.line && p.character <= q.character)
  return before(a.start, b.end) && before(b.start, a.end)
}

export class MdxCodeActionProvider implements CodeActionProvider {
  getCodeActions(document: LangiumDocument, params: CodeActionParams): CodeAction[] {
    const uri = document.uri.toString()
    const actions: CodeAction[] = []
    for (const diagnostic of document.diagnostics ?? []) {
      if (diagnostic.code !== UNKNOWN_FUNCTION || !overlaps(diagnostic.range, params.range)) continue
      const name = (diagnostic.data as { name?: string } | undefined)?.name ?? document.textDocument.getText(diagnostic.range)
      for (const suggestion of suggestFunctions(name)) {
        actions.push({
          title: `Replace with '${suggestion}'`,
          kind: CodeActionKind.QuickFix,
          diagnostics: [diagnostic as Diagnostic],
          isPreferred: actions.length === 0,
          edit: { changes: { [uri]: [{ range: diagnostic.range, newText: suggestion }] } },
        })
      }
    }
    return actions
  }
}
