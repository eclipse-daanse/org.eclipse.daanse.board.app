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
 * Parse errors as a person reads them. Chevrotain lists every token
 * sequence that could have come next - for `[Gender].[` that is a dozen
 * lines of "1. [., PROPERTIES] 2. ..." - and says `but found: ''` at the end
 * of the text. Here: the tokens that could have come first, a few of them,
 * by what they are, and "the end of the query" for the end.
 */

import {
  createLangiumParser,
  DefaultLexerErrorMessageProvider,
  LangiumParserErrorMessageProvider,
  type LangiumCoreServices,
  type LangiumParser,
} from 'langium'

interface TokenTypeLike {
  name: string
  LABEL?: string
}

interface TokenLike {
  image: string
  tokenType?: { name: string; CATEGORIES?: { name: string }[] }
}

/** At most this many alternatives are named; the rest are "…". */
const SHOWN = 6

const TOKEN_NAMES: Record<string, string> = {
  BRACKET_ID: 'a [name]',
  ID: 'a name',
  NUMBER: 'a number',
  STRING: 'a string',
  PARAM: 'a @parameter',
}

/* A terminal by what it is; anything else is a keyword or a symbol, quoted. */
export function describeToken(type: TokenTypeLike): string {
  if (TOKEN_NAMES[type.name]) return TOKEN_NAMES[type.name]!
  const text = type.name.endsWith(':KW') ? type.name.slice(0, -3) : (type.LABEL ?? type.name)
  return `'${text}'`
}

export function describeFound(token: TokenLike | undefined): string {
  if (!token || token.image === '' || token.tokenType?.name === 'EOF') return 'the end of the query'
  return `'${token.image}'`
}

/** The tokens that could have come first, each once, the first few of them. */
export function expectedList(firstTokens: TokenTypeLike[]): string {
  // What kind of thing first - a name, a number - then the keywords.
  const names = [...new Set(firstTokens.map(describeToken))].sort(
    (a, b) => Number(a.startsWith("'")) - Number(b.startsWith("'")),
  )
  if (names.length > SHOWN) return `${names.slice(0, SHOWN).join(', ')}, …`
  if (names.length <= 1) return names.join('')
  return `${names.slice(0, -1).join(', ')} or ${names.at(-1)}`
}

const matches = (token: TokenLike | undefined, type: TokenTypeLike) =>
  !!token?.tokenType &&
  (token.tokenType.name === type.name || !!token.tokenType.CATEGORIES?.some(category => category.name === type.name))

/*
 * Chevrotain looks several tokens ahead and lists whole paths: for
 * `[Gender].` that is `. PROPERTIES`, `. [name]`, … while the text has
 * `.` and then nothing. Saying "expected '.', found '.'" names the token
 * that is fine; what is wrong is where the paths and the text part, so
 * that is what is said - after what was read.
 */
function divergence(paths: TokenTypeLike[][], actual: TokenLike[]): string {
  let depth = 0
  for (const path of paths) {
    let n = 0
    while (n < path.length - 1 && matches(actual[n], path[n]!)) n++
    depth = Math.max(depth, n)
  }
  const expected = paths
    .filter(path => path.length > depth && path.slice(0, depth).every((type, n) => matches(actual[n], type)))
    .map(path => path[depth]!)
  const after = depth > 0 ? ` after ${describeFound(actual[depth - 1])}` : ''
  return `Expected ${expectedList(expected)}${after}, found ${describeFound(actual[depth])}.`
}

export class MdxParserErrorMessageProvider extends LangiumParserErrorMessageProvider {
  override buildMismatchTokenMessage(options: { expected: TokenTypeLike; actual: TokenLike }): string {
    return `Expected ${describeToken(options.expected)}, found ${describeFound(options.actual)}.`
  }

  override buildNoViableAltMessage(options: { expectedPathsPerAlt: TokenTypeLike[][][]; actual: TokenLike[] }): string {
    return divergence(options.expectedPathsPerAlt.flat(), options.actual)
  }

  override buildEarlyExitMessage(options: { expectedIterationPaths: TokenTypeLike[][]; actual: TokenLike[] }): string {
    return divergence(options.expectedIterationPaths, options.actual)
  }

  override buildNotAllInputParsedMessage(options: { firstRedundant: TokenLike }): string {
    return `Expected the end of the statement, found ${describeFound(options.firstRedundant)}.`
  }
}

/* What a bracket or a quote opens and was not closed, by name. */
const UNCLOSED: Record<string, string> = {
  '[': "A [name] is not closed: ']' is missing.",
  "'": "A string is not closed: the closing ' is missing.",
  '"': 'A string is not closed: the closing " is missing.',
}

/*
 * Lexer errors as a person reads them. Chevrotain says "unexpected
 * character: ->[<- at offset: 17, skipped 1 characters."; the position is
 * the diagnostic's already, and a lone `[` or quote is nearly always one
 * that was never closed.
 */
export class MdxLexerErrorMessageProvider extends DefaultLexerErrorMessageProvider {
  override buildUnexpectedCharactersMessage(fullText: string, startOffset: number, length: number): string {
    const text = fullText.substr(startOffset, length)
    const unclosed = UNCLOSED[text.charAt(0)]
    if (unclosed) return unclosed
    return length > 1 ? `Unexpected characters '${text}'.` : `Unexpected character '${text}'.`
  }
}

/*
 * Chevrotain's recovery can report one error twice - the same message at
 * the same token, for `{[Gender].` both times the rule is re-entered. The
 * duplicate is dropped where the parse result is made, so the Problems
 * list and everything counting the errors see each once.
 */
export function createMdxParser(services: LangiumCoreServices): LangiumParser {
  const parser = createLangiumParser(services)
  const parse = parser.parse.bind(parser)
  parser.parse = ((input: string, options?: unknown) => {
    const result = parse(input, options as never)
    const seen = new Set<string>()
    result.parserErrors = result.parserErrors.filter(error => {
      const id = `${error.token.startOffset}:${error.message}`
      if (seen.has(id)) return false
      seen.add(id)
      return true
    })
    return result
  }) as typeof parser.parse
  return parser
}
