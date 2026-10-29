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
 * The three places PostgreSQL's lexer (4.1) is not a regular language, and the
 * one place Langium's default wiring would get the token boundaries wrong.
 *
 * A `.langium` file can only spell a terminal as a regular expression, so each
 * of these is declared there as the closest regular approximation and replaced
 * here with a matcher that implements the real rule.
 */

import { DefaultTokenBuilder, type GrammarAST } from 'langium'
import type { TokenType, TokenVocabulary } from 'chevrotain'

/** The characters an operator name may be built from (4.1.3). */
const OPERATOR_CHARS = new Set('+-*/<>=~!@#%^&|`?')

/**
 * The subset whose presence lets an operator keep a trailing `+` or `-`. Without
 * one of these, `a<-1` has to lex as `a < -1` rather than as an operator `<-`,
 * which is the rule this file exists for.
 */
const OPERATOR_TAIL_EXEMPT = new Set('~!@#%^&|`?')

const IDENTIFIER_START = /[A-Za-z_-￿]/
const IDENTIFIER_PART = /[\w-￿]/

export class SqlTokenBuilder extends DefaultTokenBuilder {
  protected override buildTerminalToken(
    terminal: GrammarAST.TerminalRule,
  ): TokenType {
    const token = super.buildTerminalToken(terminal)
    switch (terminal.name) {
      case 'BLOCK_COMMENT':
        token.PATTERN = matchBlockComment
        token.LINE_BREAKS = true
        break
      case 'DOLLAR_STRING':
        token.PATTERN = matchDollarString
        token.LINE_BREAKS = true
        break
      case 'OP':
        token.PATTERN = matchOperator
        token.LINE_BREAKS = false
        break
    }
    return token
  }

  override buildTokens(
    grammar: GrammarAST.Grammar,
    options?: { caseInsensitive?: boolean },
  ): TokenVocabulary {
    const tokens = super.buildTokens(grammar, options) as TokenType[]

    // `findLongerAlt` matches a keyword against each terminal's `PATTERN.source`,
    // and a matcher function has no `source`, so replacing a pattern above
    // silently drops every LONGER_ALT that pointed at it. Keyword tokens are
    // tried before terminals, so without those links the lexer stops at the
    // keyword: `<@` would be `<` then `@` rather than one operator, and
    // `/* ... */` would be `/` then `*` rather than a comment.
    //
    // Both links are restored here, for every keyword the terminal could
    // extend.
    linkLongerAlt(tokens, 'OP', keyword => isOperatorName(keyword))
    linkLongerAlt(tokens, 'BLOCK_COMMENT', keyword => keyword === '/')
    return tokens
  }
}

/**
 * Points every keyword the named terminal could extend back at that terminal,
 * so Chevrotain reaches for the longer match instead of stopping at the
 * keyword. `matches` says which keywords those are.
 */
function linkLongerAlt(
  tokens: TokenType[],
  terminalName: string,
  matches: (keyword: string) => boolean,
): void {
  const terminal = tokens.find(token => token.name === terminalName)
  if (!terminal) return
  for (const token of tokens) {
    if (token === terminal || !matches(token.name)) continue
    // Annotated because `LONGER_ALT` refers to TokenType, so inferring its type
    // from itself is circular.
    const existing: TokenType | TokenType[] | undefined = token.LONGER_ALT
    const alternatives: TokenType[] = Array.isArray(existing)
      ? existing
      : existing
        ? [existing]
        : []
    if (alternatives.includes(terminal)) continue
    token.LONGER_ALT = [...alternatives, terminal]
  }
}

function isOperatorName(name: string): boolean {
  return name.length > 0 && [...name].every(char => OPERATOR_CHARS.has(char))
}

/**
 * `/* ... *\/`, counting nested pairs (4.1.5). A comment that opens and never
 * closes consumes the rest of the document, which is what the server does and
 * what keeps a half-typed comment from lexing as operators.
 */
function matchBlockComment(text: string, offset: number): [string] | null {
  if (text.charCodeAt(offset) !== 0x2f || text.charCodeAt(offset + 1) !== 0x2a) {
    return null
  }
  let depth = 0
  let index = offset
  while (index < text.length) {
    if (text.startsWith('/*', index)) {
      depth++
      index += 2
    } else if (text.startsWith('*/', index)) {
      depth--
      index += 2
      if (depth === 0) return [text.slice(offset, index)]
    } else {
      index++
    }
  }
  return [text.slice(offset)]
}

/**
 * `$$...$$` or `$tag$...$tag$`, where the closing tag repeats the opening one
 * exactly (4.1.2.4). A tag is an identifier, so `$1` is a parameter rather than
 * an unterminated tag - PARAM is declared after this terminal and picks it up
 * when this matcher declines.
 */
function matchDollarString(text: string, offset: number): [string] | null {
  if (text.charCodeAt(offset) !== 0x24) return null
  let index = offset + 1
  if (index < text.length && IDENTIFIER_START.test(text[index])) {
    index++
    while (index < text.length && IDENTIFIER_PART.test(text[index])) index++
  }
  if (text.charCodeAt(index) !== 0x24) return null
  const tag = text.slice(offset, index + 1)
  const close = text.indexOf(tag, index + 1)
  if (close < 0) return null
  return [text.slice(offset, close + tag.length)]
}

/**
 * A run of operator characters, cut short by the two rules that make an
 * operator name stop early (4.1.3):
 *
 *   - it may not contain `--` or `/*`, because those start comments;
 *   - it may not end in `+` or `-` unless it also contains one of
 *     `~ ! @ # % ^ & | ` ?`.
 */
function matchOperator(text: string, offset: number): [string] | null {
  let end = offset
  while (end < text.length && OPERATOR_CHARS.has(text[end])) {
    if (text.startsWith('--', end) || text.startsWith('/*', end)) break
    end++
  }
  if (end === offset) return null

  let value = text.slice(offset, end)
  if (![...value].some(char => OPERATOR_TAIL_EXEMPT.has(char))) {
    while (value.length > 1 && (value.endsWith('+') || value.endsWith('-'))) {
      value = value.slice(0, -1)
    }
  }
  return [value]
}
