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
  LanguageSupport,
  StreamLanguage,
  type StreamParser,
} from '@codemirror/language'
import { tags } from '@lezer/highlight'
import {
  consumeBlockComment,
  consumeDelimited,
} from 'org.eclipse.daanse.board.app.lib.lsp.core'

/**
 * DMV syntax highlighting for CodeMirror.
 *
 * A `StreamLanguage` for the same reason as `mdx-language.ts`: highlighting
 * only classifies tokens, the real parse happens in the language server, and a
 * Lezer grammar would be a second source of truth to keep in step with
 * `dmv/dmv.langium`.
 *
 * Token categories match `syntaxes/dmv.tmLanguage.json` one-for-one, so both
 * editors colour DMV the same way.
 *
 * **Keep the keyword lists in step with `dmv/dmv.langium`.**
 */

const KEYWORDS = new Set([
  'select',
  'distinct',
  'top',
  'from',
  'where',
  'order',
  'by',
])
const WORD_OPERATORS = new Set(['and', 'or', 'not'])
const SORT_DIRECTIONS = new Set(['asc', 'desc'])

const FUNCTIONS = new Set(['systemrestrictschema'])

interface DmvState {
  inBlockComment: boolean
  afterSystemDot: boolean
  afterSystem: boolean
}

const IDENTIFIER_START = /[_a-zA-Z]/
const IDENTIFIER_CHAR = /[\w]/

const dmvStreamParser: StreamParser<DmvState> = {
  name: 'dmv',

  startState(): DmvState {
    return { inBlockComment: false, afterSystemDot: false, afterSystem: false }
  },

  token(stream, state) {
    if (state.inBlockComment) {
      // Block comments do span lines, so the flag stays set until `*/`.
      state.inBlockComment = !consumeBlockComment(stream)
      return 'comment'
    }

    if (stream.eatSpace()) {
      return null
    }

    const afterSystem = state.afterSystem
    const afterSystemDot = state.afterSystemDot
    state.afterSystem = false
    state.afterSystemDot = false

    const ch = stream.peek()!

    // --- comments ------------------------------------------------------
    // `--` is checked before the operator branch so a comment never lexes
    // as punctuation.
    if (stream.match('//') || stream.match('--')) {
      stream.skipToEnd()
      return 'comment'
    }
    if (stream.match('/*')) {
      state.inBlockComment = true
      return 'comment'
    }

    // --- the $System schema ---------------------------------------------
    if (ch === '$') {
      stream.next()
      while (!stream.eol() && IDENTIFIER_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      state.afterSystem = true
      return 'className'
    }

    // --- delimited identifiers -------------------------------------------
    // Matched before keywords so `[SELECT]` stays a column name. A literal
    // `]` in the body is written `]]`.
    if (ch === '[') {
      stream.next()
      consumeDelimited(stream, ']')
      return afterSystemDot ? 'typeName' : 'variableName'
    }

    // --- strings -----------------------------------------------------------
    if (ch === "'" || ch === '"') {
      // Unterminated strings do not carry to the next line: DMV strings
      // do not span lines, so `consumeDelimited` running to end-of-line
      // is the correct close.
      stream.next()
      consumeDelimited(stream, ch)
      return 'string'
    }

    // --- parameters ---------------------------------------------------------
    if (ch === '@') {
      stream.next()
      while (!stream.eol() && IDENTIFIER_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      return 'meta'
    }

    // --- numbers -------------------------------------------------------------
    if (
      /[0-9]/.test(ch) ||
      (ch === '.' && /[0-9]/.test(stream.string.charAt(stream.pos + 1)))
    ) {
      stream.match(/^\d*\.?\d+/) || stream.next()
      return 'number'
    }

    // --- the schema accessor -----------------------------------------------
    if (ch === '.') {
      stream.next()
      // Carry the `$SYSTEM` context across the dot so the rowset name
      // that follows is highlighted as a type rather than a bare word.
      state.afterSystemDot = afterSystem
      return 'operator'
    }

    // --- words ------------------------------------------------------------------
    if (IDENTIFIER_START.test(ch)) {
      stream.next()
      while (!stream.eol() && IDENTIFIER_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      const word = stream.current().toLowerCase()
      if (afterSystemDot) return 'typeName'
      if (FUNCTIONS.has(word)) return 'function'
      if (WORD_OPERATORS.has(word)) return 'operator'
      if (KEYWORDS.has(word)) return 'keyword'
      if (SORT_DIRECTIONS.has(word)) return 'atom'
      return 'variableName'
    }

    // --- operators and punctuation --------------------------------------------------
    if (stream.match(/^(<>|>=|<=|[=<>*])/)) {
      return 'operator'
    }
    if (/[(),;]/.test(ch)) {
      stream.next()
      return null
    }

    stream.next()
    return null
  },

  // `function` and `className` are not default StreamLanguage token names —
  // returning them unmapped yields no tag at all and the token renders
  // unstyled, silently. Same trap as in `mdx-language.ts`.
  tokenTable: {
    function: tags.function(tags.variableName),
    className: tags.className,
  },

  languageData: {
    commentTokens: { line: '--', block: { open: '/*', close: '*/' } },
    closeBrackets: { brackets: ['[', '(', "'", '"'] },
  },
}

export const dmvStreamLanguage = StreamLanguage.define(dmvStreamParser)

export const DMV_LANGUAGE_ID = 'dmv'

export const DMV_FILE_EXTENSIONS = ['.dmv']

export function dmv(): LanguageSupport {
  return new LanguageSupport(dmvStreamLanguage)
}
