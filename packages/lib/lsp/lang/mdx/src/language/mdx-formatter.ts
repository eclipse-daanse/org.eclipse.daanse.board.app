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
 * The formatter: the document's own tokens - comments and the casing they
 * were written in included - laid out again; only the whitespace between
 * tokens changes, so nothing can be lost by formatting. Ported from the MDX
 * workbench's CST formatter onto this grammar's tokens.
 *
 * Layout, at nesting depth 0 (depth counts open `(` and `{`):
 *  - WITH, SELECT, FROM and WHERE start a line of their own;
 *  - every WITH entry, and every axis of a SELECT, gets its own indented
 *    line, the separating comma staying at the end of the previous one;
 *  - CELL PROPERTIES after FROM starts a line;
 *  - one space between tokens, none before `, ) } . ;` or after `( { .`,
 *    none between a name and the parenthesis of its call, none around `&`;
 *  - a line comment ends its line, staying where it was - after code or on
 *    a line of its own; a block comment is a token like any other.
 *
 * A document with syntax errors is left alone: laying out a token stream
 * the parser did not understand would move text to where it means
 * something else.
 */

import { CstUtils, type LangiumDocument, type LeafCstNode } from 'langium'
import type { Formatter } from 'langium/lsp'
import type {
  DocumentFormattingParams,
  DocumentOnTypeFormattingOptions,
  TextEdit,
} from 'vscode-languageserver'

const INDENT = '  '

const NO_SPACE_BEFORE = new Set([',', ')', '}', '.', ';'])
const NO_SPACE_AFTER = new Set(['(', '{', '.'])
/* Tokens a call parenthesis follows directly. */
const NAMES = new Set(['ID', 'BRACKET_ID', 'AXIS', 'PROPERTIES', 'DIMENSION'])
const LINE_COMMENTS = new Set(['SL_COMMENT', 'SQL_COMMENT'])

function needsSpace(previous: string, current: string): boolean {
  // `1 .Members` must not become `1.Members`: the lexer would read `1.` as a number.
  if (current === '.' && previous === 'NUMBER') return true
  if (NO_SPACE_BEFORE.has(current) || NO_SPACE_AFTER.has(previous)) return false
  if (current === '(' && NAMES.has(previous)) return false
  if (current === '&' || previous === '&') return false
  return true
}

function sameLineAsCode(text: string, offset: number): boolean {
  for (let i = offset - 1; i >= 0; i--) {
    const ch = text[i]
    if (ch === '\n' || ch === '\r') return false
    if (!/\s/.test(ch)) return true
  }
  return false
}

/** The document laid out again, or null when it has syntax errors. */
export function formatMdx(document: LangiumDocument): string | null {
  const { lexerErrors, parserErrors } = document.parseResult
  if (lexerErrors.length || parserErrors.length) return null
  const root = document.parseResult.value.$cstNode
  const original = document.textDocument.getText()
  if (!root) return original
  const leaves: LeafCstNode[] = CstUtils.flattenCst(root).toArray()
  // Hidden tokens hang off the nodes they precede; position is the order.
  leaves.sort((a, b) => a.offset - b.offset)

  const lines: string[] = []
  let line = ''
  const startLine = (indent: number) => {
    if (line.trim()) lines.push(line.replace(/[ \t]+$/, ''))
    line = ' '.repeat(indent)
  }
  const atLineStart = () => line.trim().length === 0

  let depth = 0
  let inWith = false
  let inSelect = false
  let afterFrom = false
  let pendingAxis = false
  let spacing: string | undefined
  let previous: string | undefined
  const indentHere = () => (inWith || inSelect ? INDENT.length : 0)

  const append = (text: string, name: string) => {
    if (atLineStart()) line += text
    else line += (spacing !== undefined && needsSpace(spacing, name) ? ' ' : '') + text
    spacing = name
  }

  for (let i = 0; i < leaves.length; i++) {
    const leaf = leaves[i]
    const name = leaf.tokenType.name.toUpperCase()
    const text = leaf.text

    if (leaf.hidden) {
      if (name === 'WS') continue
      if (LINE_COMMENTS.has(leaf.tokenType.name)) {
        if (sameLineAsCode(original, leaf.offset) && !atLineStart()) line += ' ' + text
        else {
          startLine(indentHere())
          line += text
        }
        startLine(indentHere())
        spacing = undefined
      } else {
        append(text, leaf.tokenType.name)
      }
      continue
    }

    if (name === ')' || name === '}') depth = Math.max(0, depth - 1)

    let newline: number | undefined
    if (depth === 0) {
      switch (name) {
        case 'WITH':
        case 'SELECT':
        case 'FROM':
        case 'WHERE':
          newline = 0
          break
        case 'CALCULATED':
          if (inWith) newline = INDENT.length
          break
        case 'MEMBER':
        case 'SET':
        case 'MEASURE':
          if (inWith && previous !== 'CALCULATED') newline = INDENT.length
          break
        case 'CELL':
          if (inWith && previous !== ',') newline = INDENT.length
          else if (afterFrom) newline = 0
          break
        case 'PROPERTIES':
          if (afterFrom && previous !== 'CELL' && previous !== 'DIMENSION' && previous !== '.') newline = 0
          break
      }
      if (newline === undefined && pendingAxis && inSelect) {
        newline = INDENT.length
        pendingAxis = false
      }
    }

    if (newline !== undefined) {
      startLine(newline)
      spacing = undefined
    }
    append(text, leaf.tokenType.name)
    previous = name

    if (name === '(' || name === '{') {
      depth++
    } else if (depth === 0) {
      switch (name) {
        case 'WITH':
          inWith = true
          break
        case 'SELECT':
          inWith = false
          inSelect = true
          afterFrom = false
          pendingAxis = true
          break
        case 'FROM':
          inSelect = false
          afterFrom = true
          pendingAxis = false
          break
        case 'WHERE':
          pendingAxis = false
          break
        case ',':
          if (inSelect) pendingAxis = true
          break
        case ';': {
          inWith = inSelect = afterFrom = pendingAxis = false
          startLine(0)
          const next = leaves.slice(i + 1).find(l => !l.hidden || l.tokenType.name !== 'WS')
          if (next && (original.slice(leaf.end, next.offset).match(/\n/g) ?? []).length >= 2) lines.push('')
          spacing = undefined
          break
        }
      }
    }
  }
  startLine(0)
  while (lines.length && lines[lines.length - 1] === '') lines.pop()
  return `${lines.join('\n')}\n`
}

/** Whole-document formatting; ranges and typing are left as they are. */
export class MdxFormatter implements Formatter {
  formatDocument(document: LangiumDocument, _params: DocumentFormattingParams): TextEdit[] {
    const formatted = formatMdx(document)
    const original = document.textDocument.getText()
    if (formatted === null || formatted === original) return []
    return [
      {
        range: { start: document.textDocument.positionAt(0), end: document.textDocument.positionAt(original.length) },
        newText: formatted,
      },
    ]
  }

  formatDocumentRange(): TextEdit[] {
    return []
  }

  formatDocumentOnType(): TextEdit[] {
    return []
  }

  get formatOnTypeOptions(): DocumentOnTypeFormattingOptions | undefined {
    return undefined
  }
}
