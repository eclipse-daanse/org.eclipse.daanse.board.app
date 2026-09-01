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
  type TokenStream,
} from 'org.eclipse.daanse.board.app.lib.lsp.core'

/**
 * MDX syntax highlighting for CodeMirror.
 *
 * This is a `StreamLanguage` — a line-oriented tokenizer — rather than a Lezer
 * grammar. The reasoning mirrors why the Monaco build uses a hand-written
 * TextMate grammar instead of the one `langium-cli` generates: highlighting
 * only needs to classify tokens, the real parse already happens in the
 * language server, and a second full grammar would be a second source of truth
 * to keep in step with `src/language/mdx.langium`.
 *
 * Token categories are deliberately the same set the TextMate grammar emits
 * (`syntaxes/mdx.tmLanguage.json`), so the two editors colour MDX the same way:
 *
 * | here            | TextMate scope              |
 * |-----------------|-----------------------------|
 * | `comment`       | comment.line / comment.block|
 * | `string`        | string.quoted               |
 * | `variableName`  | variable.other.member       |
 * | `atom`          | constant.other.key (`&[…]`) |
 * | `number`        | constant.numeric            |
 * | `keyword`       | keyword.control             |
 * | `operator`      | keyword.operator            |
 * | `typeName`      | constant.language (axes)    |
 * | `function`      | entity.name.function        |
 * | `propertyName`  | variable.other.property     |
 *
 * **Keep the keyword lists below in step with `src/language/mdx.langium`.**
 */

const KEYWORDS = new Set(
  [
    'SELECT',
    'FROM',
    'WHERE',
    'WITH',
    'ON',
    'AS',
    'NON',
    'EMPTY',
    'VISUAL',
    'CREATE',
    'DROP',
    'SESSION',
    'GLOBAL',
    'HIDDEN',
    'CALCULATED',
    'MEMBER',
    'SET',
    'SUBCUBE',
    'KPI',
    'MEASURE',
    'CELL',
    'CALCULATION',
    'DIMENSION',
    'PROPERTIES',
    'SCOPE',
    'END',
    'CALCULATE',
    'FREEZE',
    'CASE',
    'WHEN',
    'THEN',
    'ELSE',
    'FOR',
    'CAST',
    'DRILLTHROUGH',
    'MAXROWS',
    'FIRSTROWSET',
    'RETURN',
    'EXPLAIN',
    'PLAN',
    'REFRESH',
    'CUBE',
    'UPDATE',
    'BY',
    'CALL',
  ].map(k => k.toLowerCase()),
)

const WORD_OPERATORS = new Set(['and', 'or', 'not', 'xor', 'is', 'existing'])

const LANGUAGE_CONSTANTS = new Set(
  [
    'COLUMNS',
    'ROWS',
    'PAGES',
    'SECTIONS',
    'CHAPTERS',
    'AXIS',
    'SELF_AND_AFTER',
    'SELF_AND_BEFORE',
    'SELF_BEFORE_AFTER',
    'SELF',
    'AFTER',
    'BEFORE',
    'LEAVES',
    'BASC',
    'BDESC',
    'ASC',
    'DESC',
    'TYPED',
    'NULL',
    'USE_EQUAL_ALLOCATION',
    'USE_EQUAL_INCREMENT',
    'USE_WEIGHTED_ALLOCATION',
    'USE_WEIGHTED_INCREMENT',
  ].map(k => k.toLowerCase()),
)

const CONTEXT_KEYWORDS = new Set(['currentcube', 'this'])

const MEMBER_PROPERTIES = new Set(
  [
    'SOLVE_ORDER',
    'FORMAT_STRING',
    'VISIBLE',
    'NON_EMPTY_BEHAVIOR',
    'CAPTION',
    'DISPLAY_FOLDER',
    'ASSOCIATED_MEASURE_GROUP',
    'SCOPE_ISOLATION',
    'BACK_COLOR',
    'FORE_COLOR',
    'FONT_NAME',
    'FONT_SIZE',
    'FONT_FLAGS',
    'GOAL',
    'STATUS',
    'TREND',
    'WEIGHT',
  ].map(k => k.toLowerCase()),
)

interface MdxState {
  inBlockComment: boolean
  inString: string | null
  afterDot: boolean
}

const IDENTIFIER_START = /[_a-zA-ZÀ-￿]/
const IDENTIFIER_CHAR = /[\wÀ-￿]/

const mdxStreamParser: StreamParser<MdxState> = {
  name: 'mdx',

  startState(): MdxState {
    return { inBlockComment: false, inString: null, afterDot: false }
  },

  token(stream, state) {
    // --- continuations of multi-line tokens ---------------------------
    if (state.inBlockComment) {
      // Block comments do span lines, so the flag stays set until `*/`.
      state.inBlockComment = !consumeBlockComment(stream)
      return 'comment'
    }
    if (state.inString) {
      state.inString = closeString(stream, state.inString)
      return 'string'
    }

    if (stream.eatSpace()) {
      return null
    }

    const afterDot = state.afterDot
    state.afterDot = false

    const ch = stream.peek()!

    // --- comments ------------------------------------------------------
    // Both `//` and `--` start a line comment in MDX. `--` is checked
    // before the operator branch so that `-- note` never lexes as two
    // minus signs.
    if (stream.match('//') || stream.match('--')) {
      stream.skipToEnd()
      return 'comment'
    }
    if (stream.match('/*')) {
      state.inBlockComment = !consumeBlockComment(stream)
      return 'comment'
    }

    // --- delimited identifiers -----------------------------------------
    // `[Order Quantity]` is one token, which is the whole reason this is
    // matched before keywords: otherwise `Order` inside it would colour as
    // a keyword. A literal `]` in the body is written `]]`.
    if (ch === '[') {
      stream.next()
      consumeDelimited(stream, ']')
      return 'variableName'
    }
    // Key qualifier, e.g. `[Product].[Model].&[Mountain-200]`.
    if (ch === '&') {
      stream.next()
      stream.eatSpace()
      if (stream.peek() === '[') {
        stream.next()
        consumeDelimited(stream, ']')
      }
      return 'atom'
    }

    // --- query parameters -------------------------------------------------
    // `@StartDate`. One token, so the sigil never colours as an operator.
    if (ch === '@') {
      stream.next()
      while (!stream.eol() && IDENTIFIER_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      return 'variableName'
    }

    // --- strings --------------------------------------------------------
    if (ch === "'" || ch === '"') {
      stream.next()
      state.inString = closeString(stream, ch)
      return 'string'
    }

    // --- numbers ---------------------------------------------------------
    if (
      /[0-9]/.test(ch) ||
      (ch === '.' && /[0-9]/.test(stream.string.charAt(stream.pos + 1)))
    ) {
      stream.match(/^\d*\.?\d+([eE][+-]?\d+)?/) || stream.next()
      return 'number'
    }

    // --- the member accessor ---------------------------------------------
    if (ch === '.') {
      stream.next()
      state.afterDot = true
      return 'operator'
    }

    // --- words -------------------------------------------------------------
    if (IDENTIFIER_START.test(ch)) {
      stream.next()
      while (!stream.eol() && IDENTIFIER_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      const word = stream.current().toLowerCase()

      // `Name(` is a call, whoever Name is — this is what colours
      // Aggregate, IIF, LookupCube and the rest without enumerating them.
      //
      // Except when the name is a keyword in its own right: the
      // parenthesis in `CAST(…)`, `AS (…)` or `NOT (…)` belongs to the
      // syntax, not to a call. After a dot the heuristic still wins,
      // because `.Properties(…)` really is one.
      const rest = stream.string.slice(stream.pos)
      const isReservedWord = KEYWORDS.has(word) || WORD_OPERATORS.has(word)
      if (/^\s*\(/.test(rest) && (afterDot || !isReservedWord)) {
        return 'function'
      }
      // `.CurrentMember`, `.Members`, `.UniqueName`, …
      if (afterDot) {
        return 'propertyName'
      }
      if (WORD_OPERATORS.has(word)) return 'operator'
      if (KEYWORDS.has(word)) return 'keyword'
      if (LANGUAGE_CONSTANTS.has(word)) return 'typeName'
      if (CONTEXT_KEYWORDS.has(word)) return 'atom'
      // Only a property when it is actually being assigned.
      if (MEMBER_PROPERTIES.has(word) && /^\s*=/.test(rest))
        return 'propertyName'
      return null
    }

    // --- operators and punctuation -------------------------------------------
    // `||` first, so string concatenation is one token rather than two.
    if (stream.match(/^(\|\||<>|>=|<=|[-+*/^:=<>])/)) {
      return 'operator'
    }
    if (/[{}()\],]/.test(ch)) {
      stream.next()
      return null
    }

    stream.next()
    return null
  },

  // `StreamLanguage` resolves token names through a default table of legacy
  // mode names. `function` is not one of them — returning it silently yields
  // no tag at all, so every call would render unstyled. Map it explicitly.
  // The other names used above (`comment`, `string`, `number`, `keyword`,
  // `operator`, `variableName`, `atom`, `typeName`, `propertyName`) are all
  // in the default table.
  tokenTable: {
    function: tags.function(tags.variableName),
  },

  languageData: {
    commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
    closeBrackets: { brackets: ['[', '(', '{', "'", '"'] },
    // MDX is case-insensitive, so completion should be too.
    wordChars: '_',
  },
}

function closeString(stream: TokenStream, quote: string): null {
  consumeDelimited(stream, quote)
  return null
}

export const mdxStreamLanguage = StreamLanguage.define(mdxStreamParser)

export const MDX_LANGUAGE_ID = 'mdx-query'

export const MDX_FILE_EXTENSIONS = ['.mdxq', '.mdxs', '.mdx']

export function mdx(): LanguageSupport {
  return new LanguageSupport(mdxStreamLanguage)
}
