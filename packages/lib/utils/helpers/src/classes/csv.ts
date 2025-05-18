/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

declare global {
  interface RegExpConstructor {
    escape(string: string): string
  }
}

// Initialize RegExp.escape if it doesn't exist
if (!Object.hasOwn(RegExp, 'escape')) {
  const replacedChars = /[\\^$*+?.()|[\]{}]/gu

  Object.defineProperty(RegExp, 'escape', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: (string: string): string =>
      String(string).replace(replacedChars, '\\$&'),
  })
}

export interface ParseOptions {
  quote?: string
  separators?: string[]
  forceLineFeedAfterCarriageReturn?: boolean
  ignoreLineFeedBeforeEOF?: boolean
  ignoreSpacesAfterQuotedString?: boolean
  taintQuoteSeparatorLines?: boolean
}

interface StringifyOptions {
  quote?: string
  separator?: string
  lineEnd?: string
  trimEmpty?: boolean
  lineEndBeforeEOF?: boolean
}

interface CSVResult {
  header: string[]
  rows: string[][]
  mappedRows: Record<string, string>[]
}

interface CSVInput {
  header?: string[]
  rows?: string[][]
  mappedRows?: Record<string, string>[]
}

interface AggregatorState {
  array: string[][]
  parserState: string
  quote: string
  separators: string[]
  ignoreLineFeedBeforeEOF: boolean
  taintQuoteSeparatorLines: boolean
  lineTaint: string
}

interface CSVLineContext {
  quote: string
  separator: string
  maxCellCount: { length: number }
}

export class CSV {
  private static readonly space = ' '
  private static readonly strictLineBreakGroups = /\r\n|\r/gu
  private static readonly looseLineBreakGroups = /\r\n|\n\r|\r/gu

  private static toCharArray = (object: string | string[]): string[] => {
    const maxSingleChar = (element: any): boolean =>
      typeof element === 'string' && element.length <= 1

    if (typeof object === 'string') {
      return Array.from(object)
    }

    if (Array.isArray(object)) {
      return object.filter(maxSingleChar)
    }

    return []
  }

  private static validQuotesAndSeparators = (character: string): boolean =>
    character !== '' && character !== '\n' && character !== '\r'

  private static reduceClass = (characterClasses: string[]): string => {
    if (characterClasses.length === 1) {
      return characterClasses[0]
    }

    if (characterClasses.includes('space')) {
      if (
        characterClasses.includes('quote') &&
        !characterClasses.includes('separator')
      ) {
        return 'quote'
      }

      if (
        !characterClasses.includes('quote') &&
        characterClasses.includes('separator')
      ) {
        return 'separator'
      }
    }

    if (
      characterClasses.includes('quote') &&
      characterClasses.includes('separator')
    ) {
      return 'quoteSeparator'
    }

    return 'other'
  }

  private static transition = (
    parserState: string,
    reducedClass: string,
  ): string => {
    const states: Record<string, Record<string, string>> = {
      closed: {
        lineFeed: 'finished',
        other: 'open',
        quote: 'closed',
        quoteSeparator: 'finished',
        separator: 'finished',
        space: 'closed',
      },
      open: {
        lineFeed: 'open',
        other: 'open',
        quote: 'waiting',
        quoteSeparator: 'waiting',
        separator: 'open',
        space: 'open',
      },
      unquoted: {
        lineFeed: 'finished',
        other: 'unquoted',
        quote: 'unquoted',
        quoteSeparator: 'finished',
        separator: 'finished',
        space: 'unquoted',
      },
      unsettled: {
        lineFeed: 'finished',
        other: 'unquoted',
        quote: 'open',
        quoteSeparator: 'open',
        separator: 'finished',
        space: 'unsettled',
      },
      waiting: {
        lineFeed: 'finished',
        other: 'open',
        quote: 'open',
        quoteSeparator: 'open',
        separator: 'finished',
        space: 'closed',
      },
    }

    if (parserState === 'empty') {
      if (reducedClass === 'lineFeed') {
        return 'discarded'
      }

      parserState = 'unsettled'
    }

    return states[parserState][reducedClass]
  }

  private static parseString(
    string: string,
    quote: string,
    ignoreSpacesAfterQuotedString: boolean,
  ): string {
    const surroundedQuotes = new RegExp(
      `^ *${RegExp.escape(quote)}(.*)${RegExp.escape(quote)}( *)$`,
      's',
    )
    const spaceQuotes = /^ (.*) $/su
    const escapedQuotes = new RegExp(`(${RegExp.escape(quote)})\\1`, 'g')

    if (quote !== CSV.space && surroundedQuotes.test(string)) {
      const spacesAfterQuotedString = ignoreSpacesAfterQuotedString ? '' : '$2'

      return string
        .replace(surroundedQuotes, `$1${spacesAfterQuotedString}`)
        .replace(escapedQuotes, '$1')
    }

    if (quote === CSV.space && spaceQuotes.test(string)) {
      return string.replace(spaceQuotes, '$1').replace(escapedQuotes, '$1')
    }

    return string
  }

  private static parseSubArrays(
    subArray: string[],
    quote: string,
    ignoreSpacesAfterQuotedString: boolean,
  ): string[] {
    return subArray.map(s =>
      CSV.parseString(s, quote, ignoreSpacesAfterQuotedString),
    )
  }

  private static classifyCharacter(
    character: string,
    quote: string,
    separators: string[],
  ): string[] {
    const characterClasses: string[] = []

    if (character === '\n') {
      characterClasses.push('lineFeed')
    } else {
      if (character === quote) {
        characterClasses.push('quote')
      }

      if (separators.includes(character)) {
        characterClasses.push('separator')
      }

      if (character === CSV.space) {
        characterClasses.push('space')
      }
    }

    if (characterClasses.length === 0) {
      characterClasses.push('other')
    }

    return characterClasses
  }

  private static consume(aggregator: AggregatorState, character: string): void {
    const lastLine = aggregator.array.at(-1)!
    lastLine[lastLine.length - 1] += character
  }

  private static discardCell(aggregator: AggregatorState): void {
    if (aggregator.array.at(-1)!.length > 1) {
      aggregator.array.at(-1)!.pop()
    }

    aggregator.parserState = 'finished'
    aggregator.lineTaint = 'none'
  }

  private static endCell(
    aggregator: AggregatorState,
    characterClasses: string[],
  ): void {
    if (characterClasses.includes('separator')) {
      aggregator.array.at(-1)!.push('')
    } else if (characterClasses.includes('lineFeed')) {
      aggregator.array.push([''])
      aggregator.lineTaint = 'none'
    }

    aggregator.parserState = 'empty'
  }

  private static lineTaintActivation(
    aggregator: AggregatorState,
    reducedClass: string,
  ): void {
    if (reducedClass === 'quoteSeparator') {
      aggregator.lineTaint = 'active'
    } else if (reducedClass === 'separator') {
      aggregator.lineTaint = 'inactive'
    }
  }

  private static tokenizeCells(
    aggregator: AggregatorState,
    character: string,
    index: number,
    string: string,
  ): AggregatorState {
    const characterClasses = CSV.classifyCharacter(
      character,
      aggregator.quote,
      aggregator.separators,
    )
    const reducedClass = CSV.reduceClass(characterClasses)
    let nextState = CSV.transition(aggregator.parserState, reducedClass)

    if (aggregator.taintQuoteSeparatorLines) {
      if (
        nextState === 'finished' &&
        reducedClass !== 'lineFeed' &&
        (aggregator.parserState === 'closed' ||
          aggregator.parserState === 'waiting')
      ) {
        CSV.lineTaintActivation(aggregator, reducedClass)
      } else if (nextState === 'finished' || nextState === 'discarded') {
        if (reducedClass === 'lineFeed') {
          aggregator.lineTaint = 'none'
        } else if (aggregator.lineTaint !== 'none') {
          CSV.lineTaintActivation(aggregator, reducedClass)
        }
      }

      if (
        reducedClass === 'lineFeed' &&
        nextState === 'open' &&
        aggregator.lineTaint === 'active'
      ) {
        CSV.consume(aggregator, aggregator.quote)
        nextState = 'finished'
        aggregator.lineTaint = 'none'
      }
    }

    aggregator.parserState = nextState

    if (aggregator.parserState === 'discarded') {
      CSV.discardCell(aggregator)
    }

    if (index !== string.length - 1) {
      if (aggregator.parserState === 'finished') {
        CSV.endCell(aggregator, characterClasses)
      } else {
        CSV.consume(aggregator, character)
      }
    } else if (aggregator.parserState === 'open') {
      if (!aggregator.ignoreLineFeedBeforeEOF) {
        CSV.consume(aggregator, character)
      }

      CSV.consume(aggregator, aggregator.quote)
    }

    return aggregator
  }

  private static getLength(arr: { length: number }): number {
    return arr.length
  }

  private static toHashMap(
    row: string[],
    header: string[],
  ): Record<string, string> {
    return row.reduce(
      (hashMap, cell, index) => {
        hashMap[header[index]] = cell
        return hashMap
      },
      {} as Record<string, string>,
    )
  }

  private static mapHeaderKeys(
    key: string,
    map: Record<string, string>,
  ): string {
    return Object.hasOwn(map, key) ? map[key] : ''
  }

  private static toRows(
    map: Record<string, string>,
    header: string[],
  ): string[] {
    return header.map(key => CSV.mapHeaderKeys(key, map))
  }

  private static quoteString(cell: string, context: CSVLineContext): string {
    cell = String(cell)

    const { quote, separator } = context
    const quotedContent = cell.replaceAll(quote, quote.repeat(2))

    if (
      cell.includes('\n') ||
      cell.includes(quote) ||
      cell.includes(separator)
    ) {
      return `${quote}${quotedContent}${quote}`
    }

    return cell
  }

  private static toCSVLine(line: string[], context: CSVLineContext): string {
    const { separator, maxCellCount } = context

    return Array.from(
      { length: maxCellCount.length },
      (_value, index) => line[index] ?? '',
    )
      .map(cell => CSV.quoteString(cell, context))
      .join(separator)
  }

  public static parse(csv: string, options: ParseOptions = {}): CSVResult {
    const {
      quote = '"',
      separators = [','],
      forceLineFeedAfterCarriageReturn = true,
      ignoreLineFeedBeforeEOF = true,
      ignoreSpacesAfterQuotedString = true,
      taintQuoteSeparatorLines = false,
    } = options

    let processedCsv = csv.replace(
      forceLineFeedAfterCarriageReturn
        ? CSV.strictLineBreakGroups
        : CSV.looseLineBreakGroups,
      '\n',
    )
    processedCsv +=
      ignoreLineFeedBeforeEOF && processedCsv.endsWith('\n') ? '' : '\n'
    processedCsv = processedCsv.replaceAll('\0', '')

    const sanitizedQuote =
      CSV.toCharArray(quote).filter(CSV.validQuotesAndSeparators)[0] ?? ''
    const sanitizedSeparators = CSV.toCharArray(separators).filter(
      CSV.validQuotesAndSeparators,
    )

    const initialAggregator: AggregatorState = {
      array: [['']],
      parserState: 'empty',
      quote: sanitizedQuote,
      separators: sanitizedSeparators,
      ignoreLineFeedBeforeEOF,
      taintQuoteSeparatorLines:
        taintQuoteSeparatorLines &&
        sanitizedSeparators.includes(sanitizedQuote),
      lineTaint: 'none',
    }

    const resultArray = Array.from(processedCsv)
      .reduce(
        (agg, char, idx) => CSV.tokenizeCells(agg, char, idx, processedCsv),
        initialAggregator,
      )
      .array.map(subArray =>
        CSV.parseSubArrays(
          subArray,
          sanitizedQuote,
          ignoreSpacesAfterQuotedString,
        ),
      )

    const [header, ...rows] = resultArray

    return {
      header,
      rows,
      mappedRows: rows.map(row => CSV.toHashMap(row, header)),
    }
  }

  public static stringify(
    object: CSVInput | string[][],
    options: StringifyOptions = {},
  ): string {
    const {
      quote = '"',
      separator = ',',
      lineEnd = '\n',
      trimEmpty = true,
      lineEndBeforeEOF = false,
    } = options

    let header: string[] = []
    let rows: string[][] = []
    let mappedRows: Record<string, string>[] = []

    const sanitizedQuote =
      CSV.toCharArray(quote).filter(CSV.validQuotesAndSeparators)[0] ?? '"'
    const sanitizedSeparator =
      CSV.toCharArray([separator]).filter(CSV.validQuotesAndSeparators)[0] ??
      ','
    const normalizedLineEnd =
      lineEnd === '\r\n' || lineEnd === '\r' ? lineEnd : '\n'

    if (Array.isArray(object)) {
      ;[header, ...rows] = object
    } else {
      header = object.header || []
      rows = object.rows || []
      mappedRows = object.mappedRows || []

      if (rows.length === 0 && mappedRows.length > 0) {
        rows = mappedRows.map(map => CSV.toRows(map, header))
      }
    }

    const allRows = [header, ...rows]
    const maxCellCount = {
      length: Math.max(...allRows.map(row => CSV.getLength(row))),
    }

    if (trimEmpty) {
      while (
        allRows.length > 0 &&
        allRows.at(-1)!.every(string => string.length === 0)
      ) {
        allRows.pop()
      }

      while (
        maxCellCount.length >= 0 &&
        allRows.every(
          row =>
            !row[maxCellCount.length - 1] ||
            row[maxCellCount.length - 1].length === 0,
        )
      ) {
        allRows.forEach(row => row.splice(maxCellCount.length - 1, 1))
        --maxCellCount.length
      }
    }

    const context: CSVLineContext = {
      quote: sanitizedQuote,
      separator: sanitizedSeparator,
      maxCellCount,
    }

    return (
      allRows
        .map(line => CSV.toCSVLine(line, context))
        .join(normalizedLineEnd) + (lineEndBeforeEOF ? normalizedLineEnd : '')
    )
  }
}

export default CSV
