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
 * DAX syntax highlighting for CodeMirror.
 *
 * A `StreamLanguage` for the same reason as the MDX and DMV ones: it only
 * classifies tokens, the real parse happens in the language server, and a
 * Lezer grammar would be a second source of truth to keep in step with the
 * Langium one.
 *
 * A word is a function when a `(` follows it - the catalogue is not needed
 * for that, and a function the catalogue does not know still looks like a
 * call.
 *
 * **Keep the keyword lists in step with `language/dax-*.langium`**;
 * test/stream-language.test.ts checks that they are.
 */

export const KEYWORDS = new Set([
  'define',
  'evaluate',
  'order',
  'by',
  'start',
  'at',
  'var',
  'return',
  'measure',
  'column',
  'table',
])
export const WORD_OPERATORS = new Set(['not', 'in'])
export const ATOMS = new Set(['asc', 'desc', 'true', 'false'])

interface DaxState {
  inBlockComment: boolean
}

const IDENTIFIER_START = /[_a-zA-Z]/

export const daxStreamParser: StreamParser<DaxState> = {
  name: 'dax',

  startState(): DaxState {
    return { inBlockComment: false }
  },

  token(stream, state) {
    if (state.inBlockComment) {
      state.inBlockComment = !consumeBlockComment(stream)
      return 'comment'
    }
    if (stream.eatSpace()) return null

    const ch = stream.peek()!

    // `--` before the operators, so a comment never lexes as two minuses.
    if (stream.match('//') || stream.match('--')) {
      stream.skipToEnd()
      return 'comment'
    }
    if (stream.match('/*')) {
      state.inBlockComment = true
      return 'comment'
    }

    // `dt"2024-01-01"` before words, or `dt` would lex as a name.
    if (stream.match(/^dt"/i)) {
      consumeDelimited(stream, '"')
      return 'string.special'
    }

    // Column and measure names: `[Sales Amount]`, `]]` for a literal `]`.
    if (ch === '[') {
      stream.next()
      consumeDelimited(stream, ']')
      return 'propertyName'
    }
    // Table names: `'Internet Sales'`, `''` for a literal `'`.
    if (ch === "'") {
      stream.next()
      consumeDelimited(stream, "'")
      return 'className'
    }
    // Strings do not carry to the next line here; an unterminated one ends
    // at the end of its line, which is where the parser reports it too.
    if (ch === '"') {
      stream.next()
      consumeDelimited(stream, '"')
      return 'string'
    }

    if (ch === '@') {
      stream.next()
      stream.match(/^\w*/)
      return 'meta'
    }

    if (stream.match(/^(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?/))
      return 'number'

    if (IDENTIFIER_START.test(ch)) {
      // Dotted names are one word: `PERCENTILE.INC`, `VAR.P`.
      stream.match(/^[_a-zA-Z]\w*(?:\.\w+)*/)
      const word = stream.current().toLowerCase()
      if (/^\s*\(/.test(stream.string.slice(stream.pos))) return 'function'
      if (WORD_OPERATORS.has(word)) return 'operator'
      if (KEYWORDS.has(word)) return 'keyword'
      if (ATOMS.has(word)) return 'atom'
      return 'variableName'
    }

    if (stream.match(/^(\|\||&&|==|<>|<=|>=|[=<>+\-*/^&])/)) return 'operator'

    stream.next()
    return null
  },

  // `function` and `className` are not default StreamLanguage token names;
  // unmapped, they yield no tag and the token renders unstyled, silently.
  tokenTable: {
    function: tags.function(tags.variableName),
    className: tags.className,
  },

  languageData: {
    commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
    closeBrackets: { brackets: ['[', '(', '{', "'", '"'] },
  },
}

export const daxStreamLanguage = StreamLanguage.define(daxStreamParser)

export const DAX_LANGUAGE_ID = 'dax'

/** `.dax` holds a query (DEFINE, EVALUATE); `.daxe` a single formula. */
export const DAX_FILE_EXTENSIONS = ['.dax', '.daxe']

export function dax(): LanguageSupport {
  return new LanguageSupport(daxStreamLanguage)
}
