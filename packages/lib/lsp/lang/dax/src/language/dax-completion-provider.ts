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
 * Completion: the functions of the DAX reference, the names the document
 * declares, and the keywords the grammar allows at the cursor.
 *
 * Langium offers keywords and the references the scope provider can see
 * (VARs, DEFINE TABLEs, parameters). What it cannot offer is written here:
 *
 *   - Functions. A call is not a reference - the catalogue is not part of
 *     the document - so every function is offered wherever an identifier
 *     can start, with its syntax and its page in the reference.
 *   - Measures and columns after an unclosed `[`. `[To` is not a token yet,
 *     so the parser never gets as far as the reference; the DEFINE clause is
 *     read directly instead.
 */
import type {
  AstNodeDescription,
  LangiumDocument,
  ReferenceInfo,
} from 'langium'
import {
  DefaultCompletionProvider,
  type CompletionContext,
  type CompletionValueItem,
} from 'langium/lsp'
import {
  CompletionItemKind,
  CompletionList,
  InsertTextFormat,
  MarkupKind,
  Range,
  TextEdit,
  type CancellationToken,
  type CompletionItem,
  type CompletionParams,
} from 'vscode-languageserver'
import {
  isColumnDefinition,
  isMeasureDefinition,
  isQueryDocument,
} from './generated/ast.js'
import {
  allFunctions,
  arityLabel,
  referenceUrl,
  type DaxFunction,
} from './dax-functions.js'

export class DaxCompletionProvider extends DefaultCompletionProvider {
  override async getCompletion(
    document: LangiumDocument,
    params: CompletionParams,
    cancelToken?: CancellationToken,
  ): Promise<CompletionList | undefined> {
    const text = document.textDocument.getText()
    const offset = document.textDocument.offsetAt(params.position)
    const lineBefore = text.slice(offset - params.position.character, offset)

    if (this.isInsideStringOrComment(lineBefore))
      return CompletionList.create([], false)
    const bracket = this.openBracket(lineBefore)
    if (bracket !== undefined) {
      return CompletionList.create(
        this.columnCompletions(document, params, bracket),
        false,
      )
    }

    const list = await super.getCompletion(document, params, cancelToken)
    const partial = /[A-Za-z_][\w.]*$/.exec(lineBefore)?.[0] ?? ''
    const preceding = lineBefore
      .slice(0, lineBefore.length - partial.length)
      .at(-1)
    // After `'Sales'` or `@` a function cannot start.
    if (preceding === "'" || preceding === '@') return list

    const functions = this.functionCompletions(params, partial)
    const taken = new Set(functions.map(item => item.label))
    // TRUE and FALSE are both keywords and functions; the function entry says more.
    const rest = (list?.items ?? []).filter(
      item => !taken.has(item.label.toUpperCase()),
    )
    return CompletionList.create(
      [...rest, ...functions],
      list?.isIncomplete ?? false,
    )
  }

  protected functionCompletions(
    params: CompletionParams,
    partial: string,
  ): CompletionItem[] {
    const range = Range.create(
      params.position.line,
      params.position.character - partial.length,
      params.position.line,
      params.position.character,
    )
    return allFunctions().map(entry => ({
      label: entry.name,
      kind: CompletionItemKind.Function,
      detail: entry.daanse
        ? `${arityLabel(entry)} · Daanse`
        : arityLabel(entry),
      documentation: {
        kind: MarkupKind.Markdown,
        value: functionDocumentation(entry),
      },
      insertTextFormat: InsertTextFormat.Snippet,
      textEdit: TextEdit.replace(range, `${entry.name}($0)`),
    }))
  }

  /** DEFINE MEASURE and DEFINE COLUMN names, completing an open `[`. */
  protected columnCompletions(
    document: LangiumDocument,
    params: CompletionParams,
    partial: string,
  ): CompletionItem[] {
    const root = document.parseResult.value
    if (!isQueryDocument(root)) return []
    const range = Range.create(
      params.position.line,
      params.position.character - partial.length,
      params.position.line,
      params.position.character,
    )
    const seen = new Set<string>()
    const items: CompletionItem[] = []
    for (const definition of root.definitions) {
      if (!isMeasureDefinition(definition) && !isColumnDefinition(definition))
        continue
      const key = definition.name.toUpperCase()
      if (seen.has(key)) continue
      seen.add(key)
      items.push({
        label: definition.name,
        kind: isMeasureDefinition(definition)
          ? CompletionItemKind.Field
          : CompletionItemKind.Property,
        detail: `${isMeasureDefinition(definition) ? 'MEASURE' : 'COLUMN'} '${definition.table}'`,
        textEdit: TextEdit.replace(
          range,
          `${definition.name.replace(/]/g, ']]')}]`,
        ),
      })
    }
    return items
  }

  /**
   * Names are offered as they are written: a parameter with its `@`, a
   * measure or column in brackets. VARs and DEFINE TABLEs are bare words.
   */
  protected override createReferenceCompletionItem(
    description: AstNodeDescription,
    refInfo: ReferenceInfo,
    context: CompletionContext,
  ): CompletionValueItem {
    const item = super.createReferenceCompletionItem(
      description,
      refInfo,
      context,
    )
    if (description.type === 'ParameterDefinition') {
      return {
        ...item,
        label: `@${description.name}`,
        insertText: `@${description.name}`,
      }
    }
    if (
      description.type === 'MeasureDefinition' ||
      description.type === 'ColumnDefinition'
    ) {
      const written = `[${description.name.replace(/]/g, ']]')}]`
      return { ...item, label: written, insertText: written }
    }
    return item
  }

  /** The text typed since an unclosed `[`, or undefined when there is none. */
  protected openBracket(lineBefore: string): string | undefined {
    const withoutEscapes = lineBefore.replace(/\]\]/g, '')
    const open = withoutEscapes.lastIndexOf('[')
    if (open < 0 || withoutEscapes.indexOf(']', open) >= 0) return undefined
    return lineBefore.slice(lineBefore.lastIndexOf('[') + 1)
  }

  /** Inside a "string", a 'table', or after `//` or `--`. */
  protected isInsideStringOrComment(lineBefore: string): boolean {
    const closed = lineBefore
      .replace(/"(?:[^"]|"")*"/g, '')
      .replace(/'(?:[^']|'')*'/g, '')
      .replace(/\[(?:[^\]]|\]\])*\]/g, '')
    return /["']|\/\/|--/.test(closed)
  }
}

function functionDocumentation(entry: DaxFunction): string {
  const syntax = entry.syntax
    .map(line => '```dax\n' + line + '\n```')
    .join('\n')
  return [syntax, entry.summary, `[Reference](${referenceUrl(entry)})`]
    .filter(Boolean)
    .join('\n\n')
}
