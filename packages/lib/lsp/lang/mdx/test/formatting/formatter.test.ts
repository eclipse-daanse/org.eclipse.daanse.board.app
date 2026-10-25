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
import { formatMdx } from '../../src/language/mdx-formatter.js'
import { MdxCodeActionProvider, suggestFunctions, UNKNOWN_FUNCTION } from '../../src/language/mdx-code-actions.js'
import { parse, parseMdx } from '../test-helper.js'

async function format(text: string): Promise<string | null> {
  return formatMdx(await parseMdx(text))
}

describe('the formatter', () => {
  test('lays a query out clause by clause, an axis per line', async () => {
    const text = 'select {[Measures].[Unit Sales],[Measures].[Store Sales]} on columns, non empty [Product].Children on rows from [Sales] where ([Time].[1997])'
    expect(await format(text)).toBe(
      'select\n  {[Measures].[Unit Sales], [Measures].[Store Sales]} on columns,\n  non empty [Product].Children on rows\nfrom [Sales]\nwhere ([Time].[1997])\n',
    )
  })

  test('puts every WITH entry on its own line and keeps calls tight', async () => {
    const text = "WITH MEMBER [Measures].[X] AS Sum( [Product].Children , [Measures].[Unit Sales] ) SET [S] AS TopCount([Product].Members,5) SELECT {[Measures].[X]} ON 0 FROM [Sales]"
    expect(await format(text)).toBe(
      'WITH\n  MEMBER [Measures].[X] AS Sum([Product].Children, [Measures].[Unit Sales])\n  SET [S] AS TopCount([Product].Members, 5)\nSELECT\n  {[Measures].[X]} ON 0\nFROM [Sales]\n',
    )
  })

  test('keeps comments, and the line a line comment was on', async () => {
    const text = 'SELECT -- the measures\n{[Measures].[Unit Sales]} ON 0 /* inline */ FROM [Sales]'
    const out = (await format(text))!
    expect(out).toContain('SELECT -- the measures\n')
    expect(out).toContain('/* inline */')
    expect((await parseMdx(out)).parseResult.parserErrors).toHaveLength(0)
  })

  test('keeps key qualifiers together and a number apart from a dot', async () => {
    const out = (await format('SELECT {[Time].[1997].&[Q1]} ON 0 FROM [Sales]'))!
    expect(out).toContain('[Time].[1997].&[Q1]')
  })

  test('leaves a document that does not parse alone', async () => {
    expect(await format('SELECT {[Measures] ON FROM')).toBeNull()
  })

  test('is a fixpoint on its own output', async () => {
    const once = (await format('select {[A]} on 0, {[B]} on 1 from [C] where [D]'))!
    expect(await format(once)).toBe(once)
  })
})

describe('quick fixes', () => {
  test('suggest the functions an unknown one is closest to', () => {
    expect(suggestFunctions('Fltr')).toContain('Filter')
    expect(suggestFunctions('CrossJion')[0].toLowerCase()).toBe('crossjoin')
    expect(suggestFunctions('Xyzzyqq')).toEqual([])
  })

  test('replace the misspelt name', async () => {
    const document = await parse('SELECT CrossJion([A].Members, [B].Members) ON 0 FROM [C]', { validation: true })
    const diagnostic = document.diagnostics!.find(d => d.code === UNKNOWN_FUNCTION)!
    expect(diagnostic).toBeDefined()
    const actions = new MdxCodeActionProvider().getCodeActions(document, {
      textDocument: { uri: document.uri.toString() },
      range: diagnostic.range,
      context: { diagnostics: [] },
    })
    expect(actions[0].title.toLowerCase()).toBe("replace with 'crossjoin'")
    expect(Object.values(actions[0].edit!.changes!)[0][0].newText.toLowerCase()).toBe('crossjoin')
  })
})
