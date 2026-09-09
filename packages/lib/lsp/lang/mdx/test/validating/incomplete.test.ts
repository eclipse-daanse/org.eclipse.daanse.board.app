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
import { parseMdx } from '../test-helper.js'

const PREFIXES = [
  'S',
  'SELECT',
  'SELECT ',
  'SELECT [',
  'SELECT [Pro',
  'SELECT [Product]',
  'SELECT [Product].',
  'SELECT [Product].[Category]',
  'SELECT [Product].[Category] ON',
  'SELECT [Product].[Category] ON ',
  'SELECT [Product].[Category] ON 0',
  'SELECT [Product].[Category] ON 0 FROM',
  'SELECT [Product].[Category] ON 0 FROM [',
  'SELECT [Product].[Category] ON 0 FROM [Sales]',
  'WITH',
  'WITH MEMBER',
  'WITH MEMBER [Measures].[X]',
  'WITH MEMBER [Measures].[X] AS',
  'WITH MEMBER [Measures].[X] AS 1,',
  'WITH MEMBER [Measures].[X] AS 1, SOLVE_ORDER',
  'WITH MEMBER [Measures].[X] AS 1, SOLVE_ORDER =',
  'SELECT {[A].[B]} ON 0 FROM [C] CELL PROPERTIES',
  'SELECT Sum(',
  'SELECT Sum([A].[B],',
  'CREATE',
  'CREATE MEMBER',
  'SCOPE(',
  'SCOPE([A].[B]) ; This =',
  'FROM',
  '[',
  '].[',
  'SELECT * FROM',
  // Constructs borrowed from mdx.langium.alt, typed one fragment at a time.
  '@',
  'SELECT @',
  'SELECT @p',
  'SELECT CAST(',
  'SELECT CAST(1',
  'SELECT CAST(1 AS',
  'SELECT [A].Members AS',
  'DRILLTHROUGH',
  'DRILLTHROUGH MAXROWS',
  'DRILLTHROUGH MAXROWS 10',
  'DRILLTHROUGH SELECT [A] ON 0 FROM [C] RETURN',
  'EXPLAIN',
  'EXPLAIN PLAN',
  'EXPLAIN PLAN FOR',
  'REFRESH',
  'REFRESH CUBE',
  'UPDATE',
  'UPDATE CUBE',
  'UPDATE CUBE [C]',
  'UPDATE CUBE [C] SET',
  'UPDATE CUBE [C] SET ([M].[A]) =',
  'UPDATE CUBE [C] SET ([M].[A]) = 1 USE_EQUAL_ALLOCATION BY',
  'CALL',
  'FREEZE',
  'FREEZE(',
  'SELECT Sum(,',
  'SELECT [D].[H].&[1]&',
  "SELECT 'a' ||",
]

describe('validation survives incomplete documents', () => {
  test.each(PREFIXES)('validating %j raises no internal error', async text => {
    const document = await parseMdx(text, { validation: true })
    const internal = (document.diagnostics ?? [])
      .map(d => (typeof d.message === 'string' ? d.message : d.message.value))
      .filter(m => m.includes('An error occurred during validation'))
    expect(internal).toEqual([])
  })
})
