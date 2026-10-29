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
 * The playgrounds get DMV diagnostics from the language server, not from a
 * separate check — Langium turns lexer and parser errors into
 * `textDocument/publishDiagnostics` through `DocumentValidator`. These tests
 * exercise that path (full validation, not just `parse`), so a regression in
 * the server wiring shows up here rather than as a silently clean editor.
 */
import { describe, expect, test } from 'vitest'
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import { createDmvServices } from '../src/language/dmv-module.js'
import type { DmvModel } from '../src/language/generated/ast.js'

const services = createDmvServices(EmptyFileSystem)
const parse = parseHelper<DmvModel>(services.Dmv)

async function diagnose(text: string): Promise<string[]> {
  const document = await parse(text, { validation: true })
  return (document.diagnostics ?? []).map(d =>
    typeof d.message === 'string' ? d.message : d.message.value,
  )
}

describe('valid DMV produces no diagnostics', () => {
  test.each([
    'SELECT * FROM $System.DISCOVER_SESSIONS',
    "SELECT * FROM SYSTEMRESTRICTSCHEMA($System.DISCOVER_CSDL_METADATA, [CATALOG_NAME] = 'FoodMart')",
    'SELECT DISTINCT TOP 5 A, B FROM $System.X WHERE A = 1 AND NOT B ORDER BY A DESC',
  ])('%s', async text => {
    expect(await diagnose(text)).toEqual([])
  })
})

describe('invalid DMV surfaces a diagnostic', () => {
  test.each([
    [
      'a SQL construct the engine rejects',
      'SELECT A FROM $System.X GROUP BY A',
    ],
    ['a function call', 'SELECT COUNT(A) FROM $System.X'],
    ['an unqualified rowset', 'SELECT * FROM DISCOVER_SESSIONS'],
    ['a missing FROM', 'SELECT *'],
    ['a dangling operator', 'SELECT * FROM $System.X WHERE A ='],
    ['an unterminated bracket', 'SELECT [A FROM $System.X'],
  ])('%s', async (_name, text) => {
    expect((await diagnose(text)).length).toBeGreaterThan(0)
  })
})

describe('validation survives incomplete documents', () => {
  // Every keystroke produces one, so these run far more often than complete
  // statements. A checker that throws shows up as `An error occurred during
  // validation`, which floods the panel and hides the real diagnostics.
  const PREFIXES = [
    'S',
    'SELECT',
    'SELECT ',
    'SELECT *',
    'SELECT * FROM',
    'SELECT * FROM $System',
    'SELECT * FROM $System.',
    'SELECT * FROM $System.X WHERE',
    'SELECT * FROM $System.X WHERE A',
    'SELECT * FROM $System.X WHERE A =',
    'SELECT * FROM $System.X ORDER',
    'SELECT * FROM $System.X ORDER BY',
    'SELECT * FROM SYSTEMRESTRICTSCHEMA(',
    'SELECT * FROM SYSTEMRESTRICTSCHEMA($System.X,',
    '[',
  ]

  test.each(PREFIXES)('validating %j raises no internal error', async text => {
    const internal = (await diagnose(text)).filter(m =>
      m.includes('An error occurred during validation'),
    )
    expect(internal).toEqual([])
  })
})
