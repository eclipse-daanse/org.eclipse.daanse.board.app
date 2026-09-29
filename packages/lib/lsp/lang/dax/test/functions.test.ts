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
 * The catalogue is generated (scripts/refresh-functions.mjs), so these tests
 * check the parsing of the reference pages through a few functions whose
 * pages are known to be awkward, not the list itself.
 */
import { describe, expect, test } from 'vitest'
import {
  allFunctions,
  arityLabel,
  lookupFunction,
  referenceUrl,
} from '../src/language/dax-functions.js'

describe('the function catalogue', () => {
  test('holds the reference', () => {
    expect(allFunctions().length).toBeGreaterThan(400)
  })

  test('is looked up case-insensitively, dotted names included', () => {
    expect(lookupFunction('sumx')?.name).toBe('SUMX')
    expect(lookupFunction('Percentile.Inc')?.name).toBe('PERCENTILE.INC')
    expect(lookupFunction('NOSUCHFUNCTION')).toBeUndefined()
  })

  test.each([
    // name, min, max (undefined = unbounded)
    ['PI', 0, 0],
    ['SUMX', 2, 2],
    ['IF', 2, 3],
    ['DIVIDE', 2, 3],
    ['CALCULATE', 1, undefined],
    ['SWITCH', 3, undefined],
    // `<dates> or <calendar>` is one argument, and two optional ones follow.
    ['DATEADD', 3, 5],
    // Written as required in the syntax, marked "(Optional)" in the table.
    ['TOPN', 2, undefined],
  ] as const)('%s takes %i to %s arguments', (name, min, max) => {
    const entry = lookupFunction(name)!
    expect(entry.minArgs).toBe(min)
    expect(entry.maxArgs).toBe(max)
  })

  test('summaries are what the function does, not page furniture', () => {
    for (const entry of allFunctions()) {
      expect(entry.summary).not.toMatch(
        /^(Applies to|Note|Important|Tip|This function is discouraged)/i,
      )
    }
    expect(lookupFunction('SUMX')?.summary).toBe(
      'Returns the sum of an expression evaluated for each row in a table.',
    )
  })

  test('flags exactly what the Daanse binder dispatches on', () => {
    const daanse = allFunctions()
      .filter(entry => entry.daanse)
      .map(entry => entry.name)
      .sort()
    expect(daanse).toEqual([
      'BLANK',
      'FALSE',
      'ROW',
      'SUMMARIZECOLUMNS',
      'TRUE',
    ])
  })

  test('labels and links', () => {
    expect(arityLabel(lookupFunction('PI')!)).toBe('no arguments')
    expect(arityLabel(lookupFunction('ABS')!)).toBe('1 arg')
    expect(arityLabel(lookupFunction('IF')!)).toBe('2–3 args')
    expect(arityLabel(lookupFunction('CALCULATE')!)).toBe('1+ args')
    expect(referenceUrl(lookupFunction('SUMX')!)).toBe(
      'https://learn.microsoft.com/en-us/dax/sumx-function-dax',
    )
  })
})
