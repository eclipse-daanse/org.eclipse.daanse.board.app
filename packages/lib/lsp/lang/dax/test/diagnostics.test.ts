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
 * The playgrounds get DAX diagnostics from the language server, not from a
 * separate check. These tests run full validation, so a regression in the
 * server wiring shows up here rather than as a silently clean editor.
 */
import { describe, expect, test } from 'vitest'
import { parseHelper } from 'langium/test'
import { DiagnosticSeverity } from 'vscode-languageserver-types'
import { createDaxServicesForTesting } from '../src/language/dax-module.js'

const services = createDaxServicesForTesting()
const parseQuery = parseHelper(services.DaxQuery)
const parseFormula = parseHelper(services.DaxFormula)

type Found = [severity: 'error' | 'warning', message: string]

async function diagnose(
  text: string,
  kind: 'query' | 'formula' = 'query',
): Promise<Found[]> {
  const document = await (kind === 'query' ? parseQuery : parseFormula)(text, {
    validation: true,
  })
  return (document.diagnostics ?? []).map(d => [
    d.severity === DiagnosticSeverity.Error ? 'error' : 'warning',
    typeof d.message === 'string' ? d.message : String(d.message),
  ])
}

describe('valid DAX produces no diagnostics', () => {
  test.each([
    "EVALUATE 'Sales'",
    'EVALUATE ROW("a", 1)',
    "DEFINE MEASURE 'Sales'[Total] = SUM('Sales'[Amount]) EVALUATE ROW(\"Total\", [Total])",
    'DEFINE VAR x = 1 VAR y = x + 1 EVALUATE { x, y }',
    "EVALUATE 'Sales' ORDER BY 'Sales'[A], 'Sales'[B] START AT 1",
    "EVALUATE CALCULATETABLE('Sales', 'Sales'[A] = 1, 'Sales'[B] = 2, 'Sales'[C] = 3)",
    // A name the document does not declare belongs to the model.
    'EVALUATE ROW("a", [Unknown Measure] + Sales)',
  ])('%s', async text => {
    expect(await diagnose(text)).toEqual([])
  })

  test('a formula', async () => {
    expect(await diagnose('VAR a = 1 RETURN DIVIDE(a, 2)', 'formula')).toEqual(
      [],
    )
  })
})

describe('the validator', () => {
  test('an unknown function is a warning', async () => {
    expect(await diagnose('EVALUATE ROW("a", NOSUCHFUNCTION(1))')).toEqual([
      ['warning', "'NOSUCHFUNCTION' is not a function in the DAX reference."],
    ])
  })

  test('function names are case-insensitive', async () => {
    expect(await diagnose('EVALUATE ROW("a", sum(\'T\'[C]))')).toEqual([])
  })

  test('too few arguments is an error', async () => {
    expect(await diagnose("SUMX('Sales')", 'formula')).toEqual([
      [
        'error',
        'Too few arguments were passed to the SUMX function. The minimum argument count for the function is 2.',
      ],
    ])
  })

  test('too many arguments is an error', async () => {
    expect(await diagnose('PI(1)', 'formula')).toEqual([
      [
        'error',
        'Too many arguments were passed to the PI function. The maximum argument count for the function is 0.',
      ],
    ])
  })

  test('an optional argument may be given or not', async () => {
    expect(await diagnose('DIVIDE(1, 2)', 'formula')).toEqual([])
    expect(await diagnose('DIVIDE(1, 2, 0)', 'formula')).toEqual([])
  })

  test('a repeated argument has no maximum', async () => {
    const filters = Array.from(
      { length: 12 },
      (_, i) => `'T'[C${i}] = ${i}`,
    ).join(', ')
    expect(await diagnose(`CALCULATE(1, ${filters})`, 'formula')).toEqual([])
  })

  test('a variable declared twice in one block', async () => {
    expect(await diagnose('VAR a = 1 VAR A = 2 RETURN a', 'formula')).toEqual([
      ['error', "The variable 'A' is already declared in this block."],
    ])
  })

  test('the same name in nested blocks shadows, it does not clash', async () => {
    expect(
      await diagnose('VAR a = 1 RETURN VAR a = 2 RETURN a', 'formula'),
    ).toEqual([])
  })

  test('a measure defined twice', async () => {
    expect(
      await diagnose(
        "DEFINE MEASURE 'T'[m] = 1 MEASURE 'T'[M] = 2 EVALUATE {1}",
      ),
    ).toEqual([['error', "'T'[M] is already defined in this query."]])
  })

  test('the same measure name on two tables is two measures', async () => {
    expect(
      await diagnose(
        "DEFINE MEASURE 'A'[m] = 1 MEASURE 'B'[m] = 2 EVALUATE {1}",
      ),
    ).toEqual([])
  })

  test('a query variable, table and parameter defined twice', async () => {
    const found = await diagnose(
      'DEFINE VAR x = 1 VAR x = 2 TABLE t = {1} TABLE T = {2} @p = 1 @P = 2 EVALUATE {1}',
    )
    expect(found).toEqual([
      ['error', 'x is already defined in this query.'],
      ['error', 'T is already defined in this query.'],
      ['error', '@P is already defined in this query.'],
    ])
  })

  test('more START AT values than ORDER BY columns', async () => {
    expect(
      await diagnose("EVALUATE 'T' ORDER BY 'T'[A] START AT 1, 2"),
    ).toEqual([
      [
        'error',
        'START AT has 2 values but ORDER BY has 1 column; it may have fewer, not more.',
      ],
    ])
  })

  test("the reference parser's parenthesized START AT counts its values", async () => {
    expect(
      await diagnose("EVALUATE 'T' ORDER BY 'T'[A], 'T'[B] START AT (1, 2)"),
    ).toEqual([])
    expect(
      (await diagnose("EVALUATE 'T' ORDER BY 'T'[A] START AT (1, 2)")).length,
    ).toBe(1)
  })
})

describe('invalid DAX surfaces a diagnostic', () => {
  test.each([
    ['VAR without RETURN', 'VAR a = 1', 'formula'],
    ['DEFINE without EVALUATE', "DEFINE MEASURE 'T'[m] = 1", 'query'],
    ['an empty query', '', 'query'],
    ['a dangling operator', 'EVALUATE ROW("a", 1 +)', 'query'],
    ['an unterminated string', 'EVALUATE ROW("a)', 'query'],
    ['an unterminated column name', 'EVALUATE ROW("a", \'T\'[x)', 'query'],
    ['a query in a formula document', "EVALUATE 'T'", 'formula'],
  ] as const)('%s', async (_name, text, kind) => {
    expect(
      (await diagnose(text, kind)).filter(([severity]) => severity === 'error')
        .length,
    ).toBeGreaterThan(0)
  })
})

describe('validation survives incomplete documents', () => {
  // Every keystroke produces one. A check that throws shows up as `An error
  // occurred during validation`, which floods the panel.
  const PREFIXES = [
    'E',
    'EVALUATE',
    'EVALUATE ',
    'EVALUATE ROW(',
    'EVALUATE ROW("a",',
    'EVALUATE ROW("a", [',
    'EVALUATE ROW("a", \'T\'[',
    'EVALUATE ROW("a", SUM(',
    "EVALUATE 'T' ORDER",
    "EVALUATE 'T' ORDER BY",
    "EVALUATE 'T' ORDER BY 'T'[A] START",
    "EVALUATE 'T' ORDER BY 'T'[A] START AT",
    'DEFINE',
    'DEFINE MEASURE',
    "DEFINE MEASURE 'T'[m] =",
    'DEFINE VAR',
    'DEFINE VAR x = 1 VAR x',
    'EVALUATE VAR',
    'EVALUATE VAR a = 1',
    'EVALUATE VAR a = 1 RETURN',
    'EVALUATE {',
    'EVALUATE { (1,',
    '@',
    'dt"',
  ]

  test.each(PREFIXES)('validating %j raises no internal error', async text => {
    const internal = (await diagnose(text)).filter(([, m]) =>
      m.includes('An error occurred'),
    )
    expect(internal).toEqual([])
  })
})
