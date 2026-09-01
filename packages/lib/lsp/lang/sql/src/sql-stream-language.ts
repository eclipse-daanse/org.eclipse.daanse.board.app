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
 * MySQL syntax highlighting for CodeMirror.
 *
 * A `StreamLanguage` for the same reason as the other two languages:
 * highlighting only classifies tokens, the real parse happens in the language
 * server, and a Lezer grammar would be a second full description of MySQL to
 * keep in step with `sql.langium`.
 *
 * ---------------------------------------------------------------------------
 * A stated limitation
 * ---------------------------------------------------------------------------
 *
 * `docs/adding-a-language.md` warns that nothing enforces agreement between a
 * tokenizer's keyword lists and its grammar, because colour is not parsed. For
 * DMV that risk is nominal - seven keywords. Here it is real and permanent:
 * `sql.langium` mentions about 150 keyword literals and
 * `generated-mysql/functions.ts` holds 422 function names, while the lists
 * below are a deliberately shallow subset chosen for readability.
 *
 * That is a decision, not an oversight. The alternative was to import the
 * generated tables, which would make the highlighter exact but move ~700 words
 * into the *main* bundle - this file runs on the UI thread, unlike the grammar
 * and the validator, which live in the worker.
 *
 * So: a word missing from these sets is not coloured as a keyword. It still
 * parses correctly, and the server still reports on it. Only the colour is
 * approximate.
 */

const KEYWORDS = new Set([
  'select',
  'from',
  'where',
  'group',
  'by',
  'having',
  'order',
  'limit',
  'offset',
  'insert',
  'into',
  'values',
  'value',
  'update',
  'set',
  'delete',
  'replace',
  'with',
  'recursive',
  'as',
  'join',
  'inner',
  'left',
  'right',
  'outer',
  'cross',
  'natural',
  'on',
  'using',
  'union',
  'intersect',
  'except',
  'all',
  'distinct',
  'distinctrow',
  'window',
  'over',
  'partition',
  'rows',
  'range',
  'between',
  'preceding',
  'following',
  'unbounded',
  'current',
  'row',
  'case',
  'when',
  'then',
  'else',
  'end',
  'cast',
  'convert',
  'interval',
  'exists',
  'lateral',
  'straight_join',
  'ignore',
  'force',
  'use',
  'index',
  'key',
  'duplicate',
  'rollup',
  'for',
  'lock',
  'share',
  'mode',
  'nowait',
  'skip',
  'locked',
  'outfile',
  'dumpfile',
  'fields',
  'columns',
  'lines',
  'terminated',
  'enclosed',
  'escaped',
  'starting',
  'optionally',
  'character',
  'low_priority',
  'high_priority',
  'quick',
  'delayed',
  'array',
  'of',
])

const WORD_OPERATORS = new Set([
  'and',
  'or',
  'not',
  'xor',
  'is',
  'in',
  'like',
  'regexp',
  'rlike',
  'div',
  'mod',
  'sounds',
  'member',
  'escape',
  'any',
  'some',
])

const ATOMS = new Set([
  'null',
  'true',
  'false',
  'unknown',
  'default',
  'asc',
  'desc',
])

const FUNCTIONS = new Set([
  'any_value',
  'avg',
  'bit_and',
  'bit_or',
  'bit_xor',
  'count',
  'group_concat',
  'grouping',
  'json_arrayagg',
  'json_objectagg',
  'max',
  'min',
  'std',
  'stddev',
  'stddev_pop',
  'stddev_samp',
  'sum',
  'var_pop',
  'var_samp',
  'variance',
  'cume_dist',
  'dense_rank',
  'first_value',
  'lag',
  'last_value',
  'lead',
  'nth_value',
  'ntile',
  'percent_rank',
  'rank',
  'row_number',
  'abs',
  'ceil',
  'ceiling',
  'floor',
  'round',
  'truncate',
  'pow',
  'power',
  'sqrt',
  'exp',
  'ln',
  'log',
  'log2',
  'log10',
  'sign',
  'rand',
  'greatest',
  'least',
  'coalesce',
  'ifnull',
  'nullif',
  'if',
  'isnull',
  'concat',
  'concat_ws',
  'substr',
  'substring',
  'substring_index',
  'trim',
  'ltrim',
  'rtrim',
  'lpad',
  'rpad',
  'upper',
  'lower',
  'ucase',
  'lcase',
  'length',
  'char_length',
  'character_length',
  'locate',
  'instr',
  'reverse',
  'repeat',
  'space',
  'strcmp',
  'format',
  'elt',
  'field',
  'find_in_set',
  'now',
  'curdate',
  'curtime',
  'current_date',
  'current_time',
  'current_timestamp',
  'date',
  'time',
  'timestamp',
  'year',
  'quarter',
  'month',
  'week',
  'day',
  'hour',
  'minute',
  'second',
  'microsecond',
  'dayname',
  'monthname',
  'dayofweek',
  'dayofmonth',
  'dayofyear',
  'weekday',
  'weekofyear',
  'yearweek',
  'last_day',
  'date_add',
  'date_sub',
  'adddate',
  'subdate',
  'addtime',
  'subtime',
  'datediff',
  'timediff',
  'date_format',
  'time_format',
  'str_to_date',
  'unix_timestamp',
  'from_unixtime',
  'makedate',
  'maketime',
  'timestampadd',
  'timestampdiff',
  'sec_to_time',
  'time_to_sec',
  'extract',
  'get_format',
  'convert_tz',
  'json_extract',
  'json_unquote',
  'json_object',
  'json_array',
  'json_contains',
  'json_keys',
  'json_length',
  'json_type',
  'json_valid',
  'json_value',
  'md5',
  'sha1',
  'sha2',
  'uuid',
  'hex',
  'unhex',
  'bin',
  'oct',
  'conv',
  'ascii',
  'char',
  'ord',
  'regexp_like',
  'regexp_replace',
  'regexp_substr',
  'regexp_instr',
  'database',
  'schema',
  'user',
  'version',
  'last_insert_id',
  'row_count',
  'found_rows',
  'connection_id',
])

interface SqlState {
  inBlockComment: boolean
}

// Matches `terminal ID` in sql.langium: a letter, `_`, `$`, or anything above
// ASCII. Written as a negated ASCII range so the source stays ASCII-only.
const IDENTIFIER_START = /[_a-zA-Z$]|[^\x00-\x7f]/
const IDENTIFIER_CHAR = /[\w$]|[^\x00-\x7f]/

const sqlStreamParser: StreamParser<SqlState> = {
  name: 'sql',

  startState(): SqlState {
    return { inBlockComment: false }
  },

  token(stream, state) {
    if (state.inBlockComment) {
      state.inBlockComment = !consumeBlockComment(stream)
      return 'comment'
    }

    if (stream.eatSpace()) {
      return null
    }

    const ch = stream.peek()!

    // --- comments ---------------------------------------------------------
    // `--` needs whitespace after it in MySQL, so `a--b` is two minus signs.
    // Checked before the operator branch so a comment never lexes as one.
    if (stream.match(/^--(?=[ \t\f]|$)/)) {
      stream.skipToEnd()
      return 'comment'
    }
    if (ch === '#') {
      stream.skipToEnd()
      return 'comment'
    }
    if (stream.match('/*')) {
      state.inBlockComment = true
      return 'comment'
    }

    // --- delimited identifiers --------------------------------------------
    // Matched before keywords so a quoted `select` stays a name. A literal
    // delimiter in the body is doubled.
    //
    // A double-quoted run is an identifier, not a string: ANSI_QUOTES is
    // on. See the sql_mode note at the top of `sql.langium`.
    if (ch === '`' || ch === '"') {
      stream.next()
      consumeDelimited(stream, ch)
      return 'variableName'
    }

    // --- strings ------------------------------------------------------------
    if (ch === "'") {
      stream.next()
      consumeDelimited(stream, ch)
      return 'string'
    }

    // --- variables and placeholders -------------------------------------------
    if (ch === '@') {
      stream.next()
      stream.eat('@')
      while (
        !stream.eol() &&
        (IDENTIFIER_CHAR.test(stream.peek()!) || stream.peek() === '.')
      ) {
        stream.next()
      }
      return 'meta'
    }
    if (ch === '?') {
      stream.next()
      return 'meta'
    }

    // --- numbers, including hex and bit literals -------------------------------
    if (stream.match(/^0[xX][0-9a-fA-F]+/) || stream.match(/^0[bB][01]+/)) {
      return 'number'
    }
    if (
      /[0-9]/.test(ch) ||
      (ch === '.' && /[0-9]/.test(stream.string.charAt(stream.pos + 1)))
    ) {
      stream.match(/^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/) || stream.next()
      return 'number'
    }

    // --- words --------------------------------------------------------------------
    if (IDENTIFIER_START.test(ch)) {
      stream.next()
      while (!stream.eol() && IDENTIFIER_CHAR.test(stream.peek()!)) {
        stream.next()
      }
      const word = stream.current().toLowerCase()
      // A word immediately followed by `(` is a call, whatever else it is:
      // MySQL's own lexer treats `LEFT(` that way, and so does the grammar.
      if (stream.peek() === '(') {
        if (FUNCTIONS.has(word)) return 'function'
        if (!KEYWORDS.has(word) && !WORD_OPERATORS.has(word))
          return 'variableName'
      }
      if (WORD_OPERATORS.has(word)) return 'operator'
      if (ATOMS.has(word)) return 'atom'
      if (KEYWORDS.has(word)) return 'keyword'
      if (FUNCTIONS.has(word)) return 'function'
      return 'variableName'
    }

    // --- operators and punctuation ------------------------------------------------------
    if (stream.match(/^(<=>|<<|>>|<>|!=|>=|<=|\|\||&&|[-+*/%^&|~!=<>])/)) {
      return 'operator'
    }
    if (/[(),;{}]/.test(ch)) {
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
    closeBrackets: { brackets: ['(', '`', "'", '"'] },
  },
}

export const sqlStreamLanguage = StreamLanguage.define(sqlStreamParser)

export const SQL_LANGUAGE_ID = 'sql'

export const SQL_FILE_EXTENSIONS = ['.sql']

export function sql(): LanguageSupport {
  return new LanguageSupport(sqlStreamLanguage)
}
