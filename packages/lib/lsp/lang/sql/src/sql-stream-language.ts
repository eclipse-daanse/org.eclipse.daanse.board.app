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
import { consumeDelimited } from 'org.eclipse.daanse.board.app.lib.lsp.core'
import {
  FUNCTION_WORDS,
  KEYWORD_WORDS,
} from './language/generated-postgres/highlight-words.js'

/**
 * PostgreSQL syntax highlighting for CodeMirror.
 *
 * A `StreamLanguage` for the same reason as the other two languages:
 * highlighting only classifies tokens, the real parse happens in the language
 * server, and a Lezer grammar would be a second full description of PostgreSQL
 * to keep in step with `sql.langium`.
 *
 * ---------------------------------------------------------------------------
 * The word lists are generated
 * ---------------------------------------------------------------------------
 *
 * The MySQL version of this file carried hand-written lists and a stated
 * limitation: a word missing from them still parsed and still validated, but
 * was not coloured. That was a size decision - 734 keywords and 422 functions
 * were too much to put in the *main* bundle, since this file runs on the UI
 * thread while the grammar and validator live in the worker.
 *
 * PostgreSQL is smaller where it counts: 494 keywords, and the function names
 * alone - without the arity data the validator needs - are a few tens of
 * kilobytes. So both lists come from `pg_get_keywords()` and `pg_proc` through
 * `generated-postgres/highlight-words.ts`, and the class of bug where the
 * highlighter and the grammar disagree about a word is gone.
 *
 * What is still hand-written is which *kind* a word is: the sets below reclaim
 * the words that read better as operators or atoms than as keywords.
 */

/** Words that are keywords to the server but read as operators. */
const WORD_OPERATORS = new Set([
  'and',
  'or',
  'not',
  'is',
  'isnull',
  'notnull',
  'in',
  'like',
  'ilike',
  'similar',
  'between',
  'symmetric',
  'asymmetric',
  'escape',
  'any',
  'some',
  'all',
  'exists',
  'collate',
  'operator',
  'overlaps',
])

/** Words that stand for a value rather than a clause. */
const ATOMS = new Set([
  'null',
  'true',
  'false',
  'unknown',
  'default',
  'asc',
  'desc',
  'current_date',
  'current_time',
  'current_timestamp',
  'current_user',
  'current_role',
  'current_catalog',
  'current_schema',
  'session_user',
  'system_user',
  'localtime',
  'localtimestamp',
])

const KEYWORDS = new Set(
  KEYWORD_WORDS.filter(word => !WORD_OPERATORS.has(word) && !ATOMS.has(word)),
)

const FUNCTIONS = new Set(FUNCTION_WORDS)

interface SqlState {
  /** Block comments nest (4.1.5), so this is a depth rather than a flag. */
  commentDepth: number
  /** The open dollar-quote tag, `$$` or `$tag$`, while one is unterminated. */
  dollarTag: string | null
}

// Matches `terminal ID` in sql.langium: a letter, `_`, or anything above ASCII,
// then letters, digits, `_` or `$`. Written as a negated ASCII range so the
// source stays ASCII-only.
const IDENTIFIER_START = /[_a-zA-Z]|[^\x00-\x7f]/
const IDENTIFIER_CHAR = /[\w$]|[^\x00-\x7f]/

/** The characters an operator name is built from (4.1.3). */
const OPERATOR_CHAR = /[+\-*/<>=~!@#%^&|`?]/

const sqlStreamParser: StreamParser<SqlState> = {
  name: 'sql',

  startState(): SqlState {
    return { commentDepth: 0, dollarTag: null }
  },

  token(stream, state) {
    // --- continuations from an earlier line ---------------------------------
    if (state.commentDepth > 0) {
      consumeNestedComment(stream, state)
      return 'comment'
    }
    if (state.dollarTag) {
      consumeDollarBody(stream, state)
      return 'string'
    }

    if (stream.eatSpace()) {
      return null
    }

    const ch = stream.peek()!

    // --- comments ---------------------------------------------------------
    // Unlike MySQL, `--` needs no whitespace after it, and there is no `#`
    // comment. Checked before the operator branch so a comment never lexes as
    // an operator.
    if (stream.match('--')) {
      stream.skipToEnd()
      return 'comment'
    }
    if (stream.match('/*')) {
      state.commentDepth = 1
      consumeNestedComment(stream, state)
      return 'comment'
    }

    // --- dollar quoting ---------------------------------------------------
    // `$$...$$` or `$tag$...$tag$`, which may run over several lines. Tried
    // before the parameter branch so `$1` is only a parameter when no tag
    // closes it.
    const tag = stream.match(/^\$(?:[_a-zA-Z][\w]*)?\$/, false) as
      | RegExpMatchArray
      | null
    if (tag) {
      stream.match(tag[0])
      state.dollarTag = tag[0]
      consumeDollarBody(stream, state)
      return 'string'
    }
    if (stream.match(/^\$\d+/)) {
      return 'meta'
    }

    // --- delimited identifiers --------------------------------------------
    // Matched before keywords so a quoted `select` stays a name. A literal
    // delimiter in the body is doubled. `U&"..."` is the same thing with
    // unicode escapes inside.
    if (stream.match(/^[uU]&"/)) {
      consumeDelimited(stream, '"')
      return 'variableName'
    }
    if (ch === '"') {
      stream.next()
      consumeDelimited(stream, '"')
      return 'variableName'
    }

    // --- strings ------------------------------------------------------------
    // `E'...'` takes backslash escapes, `U&'...'` unicode ones; neither changes
    // how the run is delimited, so all three colour alike.
    if (stream.match(/^([eE]|[uU]&)'/)) {
      consumeDelimited(stream, "'")
      return 'string'
    }
    if (ch === "'") {
      stream.next()
      consumeDelimited(stream, "'")
      return 'string'
    }

    // --- numbers ------------------------------------------------------------
    // Bit and hex strings are numeric literals in PostgreSQL, not strings.
    if (stream.match(/^[bBxX]'[0-9a-fA-F]*'/)) {
      return 'number'
    }
    // The radix prefixes and `_` separators arrived in PostgreSQL 16.
    if (stream.match(/^0[xX][0-9a-fA-F_]+|^0[oO][0-7_]+|^0[bB][01_]+/)) {
      return 'number'
    }
    if (
      /[0-9]/.test(ch) ||
      (ch === '.' && /[0-9]/.test(stream.string.charAt(stream.pos + 1)))
    ) {
      stream.match(/^(?:\d[\d_]*\.?[\d_]*|\.\d[\d_]*)(?:[eE][+-]?\d+)?/) ||
        stream.next()
      return 'number'
    }

    // --- words --------------------------------------------------------------------
    if (IDENTIFIER_START.test(ch)) {
      stream.next()
      while (!stream.eol() && IDENTIFIER_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      const word = stream.current().toLowerCase()
      // A word immediately followed by `(` is a call, whatever else it is -
      // which is how `LEFT(a, 1)` stays a function while `LEFT JOIN` stays a
      // keyword.
      if (stream.peek() === '(') {
        if (FUNCTIONS.has(word)) return 'function'
        if (!KEYWORDS.has(word) && !WORD_OPERATORS.has(word)) {
          return 'variableName'
        }
      }
      if (WORD_OPERATORS.has(word)) return 'operator'
      if (ATOMS.has(word)) return 'atom'
      if (KEYWORDS.has(word)) return 'keyword'
      if (FUNCTIONS.has(word)) return 'function'
      return 'variableName'
    }

    // --- operators and punctuation ------------------------------------------------------
    // `::` and `:` are not operator characters in PostgreSQL, so the cast and
    // the slice colon are their own tokens.
    if (stream.match('::') || stream.match(':')) {
      return 'operator'
    }
    // Any run of operator characters is one operator - `@>`, `->>`, `||` and
    // whatever an extension defines. The trailing `+`/`-` rule that
    // `sql-token-builder.ts` applies is a parser concern; for colour, the run
    // is enough.
    if (OPERATOR_CHAR.test(ch)) {
      while (!stream.eol() && OPERATOR_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      return 'operator'
    }
    if (/[(),;[\]{}]/.test(ch)) {
      stream.next()
      return null
    }
    if (ch === '.') {
      stream.next()
      return 'operator'
    }

    stream.next()
    return null
  },

  // `function` is not a default StreamLanguage token name - returning it
  // unmapped yields no tag at all and the token renders unstyled, silently.
  // Same trap as in the other two languages.
  tokenTable: {
    function: tags.function(tags.variableName),
  },

  languageData: {
    commentTokens: { line: '--', block: { open: '/*', close: '*/' } },
    closeBrackets: { brackets: ['(', '[', "'", '"'] },
  },
}

/**
 * Consumes as much of a nested block comment as this line holds, leaving the
 * depth in `state` for the next one.
 */
function consumeNestedComment(
  stream: { eol(): boolean; next(): string | void; match(pattern: string): unknown },
  state: SqlState,
): void {
  while (!stream.eol()) {
    if (stream.match('/*')) {
      state.commentDepth++
    } else if (stream.match('*/')) {
      state.commentDepth--
      if (state.commentDepth === 0) return
    } else {
      stream.next()
    }
  }
}

/** The same, for the body of a dollar-quoted string. */
function consumeDollarBody(
  stream: { eol(): boolean; next(): string | void; match(pattern: string): unknown },
  state: SqlState,
): void {
  const tag = state.dollarTag!
  while (!stream.eol()) {
    if (stream.match(tag)) {
      state.dollarTag = null
      return
    }
    stream.next()
  }
}

export const sqlStreamLanguage = StreamLanguage.define(sqlStreamParser)

export const SQL_LANGUAGE_ID = 'sql'

/**
 * `.pgsql` as well as `.sql`: the tracked repository matches the longest
 * extension first, so a future dialect can claim `.sql` without this one
 * losing its own.
 */
export const SQL_FILE_EXTENSIONS = ['.sql', '.pgsql']

export function sql(): LanguageSupport {
  return new LanguageSupport(sqlStreamLanguage)
}
