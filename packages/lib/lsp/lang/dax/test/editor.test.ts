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

import { describe, expect, test } from 'vitest'
import { parseHelper } from 'langium/test'
import type { CompletionItem } from 'vscode-languageserver'
import { SymbolKind } from 'vscode-languageserver'
import { createDaxServicesForTesting } from '../src/language/dax-module.js'

const services = createDaxServicesForTesting()
const parseQuery = parseHelper(services.DaxQuery)
const parseFormula = parseHelper(services.DaxFormula)

/** Completion at the `|` in the text. */
async function complete(
  marked: string,
  kind: 'query' | 'formula' = 'query',
): Promise<CompletionItem[]> {
  const offset = marked.indexOf('|')
  const text = marked.slice(0, offset) + marked.slice(offset + 1)
  const document = await (kind === 'query' ? parseQuery : parseFormula)(text)
  const language = kind === 'query' ? services.DaxQuery : services.DaxFormula
  const list = await language.lsp.CompletionProvider!.getCompletion(document, {
    textDocument: { uri: document.uri.toString() },
    position: document.textDocument.positionAt(offset),
  })
  return list?.items ?? []
}

const labels = (items: CompletionItem[]) => items.map(item => item.label)

describe('completion', () => {
  test('offers every function of the reference, with its arity and page', async () => {
    const items = await complete('EVALUATE ROW("a", |')
    const sumx = items.find(item => item.label === 'SUMX')
    expect(sumx).toMatchObject({ detail: '2 args' })
    expect((sumx?.documentation as { value: string }).value).toContain(
      'SUMX(<table>, <expression>)',
    )
    expect((sumx?.documentation as { value: string }).value).toContain(
      'https://learn.microsoft.com/en-us/dax/sumx-function-dax',
    )
    expect(sumx?.textEdit).toMatchObject({ newText: 'SUMX($0)' })
    expect(items.filter(item => item.kind === 3).length).toBeGreaterThan(400)
  })

  test('replaces the word being typed, dots included', async () => {
    const items = await complete('PERCENTILE.I|', 'formula')
    const entry = items.find(item => item.label === 'PERCENTILE.INC')
    expect(entry?.textEdit).toMatchObject({
      range: { start: { character: 0 }, end: { character: 12 } },
    })
  })

  test('marks what the Daanse engine can execute', async () => {
    const items = await complete('EVALUATE |')
    expect(
      items.find(item => item.label === 'SUMMARIZECOLUMNS')?.detail,
    ).toContain('Daanse')
    expect(items.find(item => item.label === 'SUMX')?.detail).not.toContain(
      'Daanse',
    )
  })

  test('TRUE and FALSE appear once, as functions', async () => {
    const items = await complete('EVALUATE { |')
    expect(labels(items).filter(label => label === 'TRUE')).toHaveLength(1)
  })

  test('offers the variables in scope and what DEFINE declares', async () => {
    const found = labels(
      await complete(
        "DEFINE VAR x = 1 MEASURE 'T'[Total] = 1 @P = 1 EVALUATE { |",
      ),
    )
    expect(found).toEqual(expect.arrayContaining(['x', '[Total]', '@P']))
  })

  test('does not offer a variable to its own value', async () => {
    const found = labels(
      await complete('VAR a = 1 VAR b = | RETURN b', 'formula'),
    )
    expect(found).toContain('a')
    expect(found).not.toContain('b')
  })

  test('after an open [, offers the measures and columns DEFINE declares', async () => {
    const items = await complete(
      "DEFINE MEASURE 'T'[Total Sales] = 1 COLUMN 'T'[Net] = 2 EVALUATE ROW(\"a\", [To|",
    )
    expect(items.map(item => [item.label, item.detail])).toEqual([
      ['Total Sales', "MEASURE 'T'"],
      ['Net', "COLUMN 'T'"],
    ])
    expect(items[0].textEdit).toMatchObject({ newText: 'Total Sales]' })
  })

  test('offers nothing inside a string or a comment', async () => {
    expect(await complete('EVALUATE ROW("a|')).toEqual([])
    expect(await complete('EVALUATE // a|')).toEqual([])
    expect(await complete("EVALUATE 'Sal|")).toEqual([])
  })
})

describe('outline', () => {
  test('lists what DEFINE declares, then each EVALUATE', async () => {
    const document = await parseQuery(
      "DEFINE MEASURE 'T'[m] = 1 COLUMN 'T'[c] = 1 TABLE t = {1} VAR v = 1 @p = 1 EVALUATE t ORDER BY [m] EVALUATE { v }",
    )
    const symbols =
      await services.DaxQuery.lsp.DocumentSymbolProvider!.getSymbols(document, {
        textDocument: { uri: document.uri.toString() },
      })
    expect(
      symbols.map(symbol => [symbol.name, symbol.detail, symbol.kind]),
    ).toEqual([
      ['[m]', "MEASURE 'T'", SymbolKind.Field],
      ['[c]', "COLUMN 'T'", SymbolKind.Property],
      ['t', 'TABLE', SymbolKind.Struct],
      ['v', 'VAR', SymbolKind.Variable],
      ['@p', 'parameter', SymbolKind.TypeParameter],
      ['EVALUATE', 'ORDER BY 1 column', SymbolKind.Function],
      ['EVALUATE', undefined, SymbolKind.Function],
    ])
  })

  test('VARs inside expressions stay out of it', async () => {
    const document = await parseQuery('EVALUATE VAR a = 1 RETURN { a }')
    const symbols =
      await services.DaxQuery.lsp.DocumentSymbolProvider!.getSymbols(document, {
        textDocument: { uri: document.uri.toString() },
      })
    expect(symbols.map(symbol => symbol.name)).toEqual(['EVALUATE'])
  })

  test('a formula has none', async () => {
    const document = await parseFormula('VAR a = 1 RETURN a')
    const symbols =
      await services.DaxFormula.lsp.DocumentSymbolProvider!.getSymbols(
        document,
        {
          textDocument: { uri: document.uri.toString() },
        },
      )
    expect(symbols).toEqual([])
  })
})
