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
import {
  diagnostics,
  diagnosticsOfSeverity,
  parseMdx,
  syntaxErrors,
} from '../test-helper.js'

const ERROR = 1
const WARNING = 2

async function validate(text: string) {
  const document = await parseMdx(text, { validation: true })
  expect(syntaxErrors(document)).toBe('')
  return document
}

describe('axis ordinals', () => {
  test('an ordinal above 127 is rejected', async () => {
    const document = await validate(
      'SELECT {[A].[B]} ON 0, {[C].[D]} ON 128 FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining('Axis ordinal must be between 0 and 127'),
    )
  })

  test('a duplicated axis is rejected', async () => {
    const document = await validate(
      'SELECT {[A].[B]} ON 0, {[C].[D]} ON COLUMNS FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining('Axis 0 is specified more than once'),
    )
  })

  test('a gap in the axis sequence is rejected', async () => {
    const document = await validate(
      'SELECT {[A].[B]} ON 0, {[C].[D]} ON 2 FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining('Axis 1 is missing'),
    )
  })

  test('a non-integer ordinal is rejected', async () => {
    const document = await validate('SELECT {[A].[B]} ON 1.5 FROM [Cube]')
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining('Axis ordinal must be an integer'),
    )
  })

  test('COLUMNS then ROWS is accepted', async () => {
    const document = await validate(
      'SELECT {[A].[B]} ON COLUMNS, {[C].[D]} ON ROWS FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toHaveLength(0)
  })

  test('AXIS(0) and AXIS(1) are accepted', async () => {
    const document = await validate(
      'SELECT {[A].[B]} ON AXIS(0), {[C].[D]} ON AXIS(1) FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toHaveLength(0)
  })
})

describe('SOLVE_ORDER', () => {
  test('a value above the permitted range is rejected', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS 1, SOLVE_ORDER = 99999 SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining('SOLVE_ORDER must be between -8181 and 65535'),
    )
  })

  test('a negative value warns because the engine reserves them', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS 1, SOLVE_ORDER = -5119 SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining('Negative solve orders are reserved'),
    )
  })

  test('a positive integer is accepted silently', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS 1, SOLVE_ORDER = 10 SELECT FROM [Cube]',
    )
    expect(diagnostics(document)).toHaveLength(0)
  })
})

describe('calculated member properties', () => {
  test('an unknown property warns', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS 1, NOT_A_PROPERTY = 1 SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining(
        "Unknown calculated member property 'NOT_A_PROPERTY'",
      ),
    )
  })

  test('NON_EMPTY_BEHAVIOR is flagged as deprecated', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS 1, NON_EMPTY_BEHAVIOR = [Measures].[A] SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining('deprecated'),
    )
  })

  test('SCOPE_ISOLATION accepts only CUBE', async () => {
    const bad = await validate(
      'WITH MEMBER [Measures].[X] AS 1, SCOPE_ISOLATION = QUERY SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(bad, ERROR)).toContainEqual(
      expect.stringContaining('SCOPE_ISOLATION accepts only the value CUBE'),
    )

    const good = await validate(
      'WITH MEMBER [Measures].[X] AS 1, SCOPE_ISOLATION = CUBE SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(good, ERROR)).toHaveLength(0)
  })
})

describe('function calls', () => {
  test('an unknown function warns', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS NotAFunction(1) SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining("Unknown MDX function 'NotAFunction'"),
    )
  })

  test('too few arguments is an error', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS IIF(1) SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining(
        "'IIF' expects at least 3 argument(s), but got 1",
      ),
    )
  })

  /**
   * A skipped argument produces no element in `arguments`, so counting the
   * array would silently under-report arity and turn these into false
   * positives. Arity comes from the separators in the CST instead.
   */
  describe('skipped argument slots still count', () => {
    test('an omitted slot fills its position', async () => {
      const document = await validate(
        'WITH MEMBER [Measures].[X] AS IIF(1, , 3) SELECT FROM [Cube]',
      )
      expect(diagnosticsOfSeverity(document, ERROR)).toEqual([])
    })

    test('a genuinely short call is still an error', async () => {
      const document = await validate(
        'WITH MEMBER [Measures].[X] AS IIF(1, 2) SELECT FROM [Cube]',
      )
      expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
        expect.stringContaining(
          "'IIF' expects at least 3 argument(s), but got 2",
        ),
      )
    })

    test('an empty list is zero slots, not one', async () => {
      const document = await validate(
        'WITH MEMBER [Measures].[X] AS IIF() SELECT FROM [Cube]',
      )
      expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
        expect.stringContaining(
          "'IIF' expects at least 3 argument(s), but got 0",
        ),
      )
    })

    test('too many slots is still an error', async () => {
      const document = await validate(
        'WITH MEMBER [Measures].[X] AS IIF(1, 2, 3, , 5) SELECT FROM [Cube]',
      )
      expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
        expect.stringContaining(
          "'IIF' expects at most 3 argument(s), but got 5",
        ),
      )
    })
  })

  test('too many arguments is an error', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS KPIValue("A", "B") SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining(
        "'KPIValue' expects at most 1 argument(s), but got 2",
      ),
    )
  })

  test('function names are matched case-insensitively', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS aggregate({[A].[B]}) SELECT FROM [Cube]',
    )
    expect(diagnostics(document)).toHaveLength(0)
  })

  test('LookupCube carries a performance warning', async () => {
    const document = await validate(
      'WITH MEMBER [Measures].[X] AS LookupCube("Budget", "[Measures].[A]") SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining('bypasses the Storage Engine cache'),
    )
  })
})

describe('cell properties', () => {
  test('an unknown cell property warns', async () => {
    const document = await validate(
      'SELECT FROM [Cube] CELL PROPERTIES NOT_A_PROPERTY',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining("Unknown cell property 'NOT_A_PROPERTY'"),
    )
  })

  test('the standard cell properties are accepted', async () => {
    const document = await validate(
      'SELECT FROM [Cube] CELL PROPERTIES VALUE, FORMATTED_VALUE, BACK_COLOR, FORE_COLOR, FONT_FLAGS, ACTION_TYPE',
    )
    expect(diagnostics(document)).toHaveLength(0)
  })
})

describe('identifiers', () => {
  test('a reserved keyword used undelimited warns', async () => {
    // ABSOLUTE is reserved by MDX but is not a keyword in this grammar, so
    // it lexes as an identifier and reaches the validator.
    const document = await validate(
      'WITH SET Absolute AS {[A].[B]} SELECT FROM [Cube]',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining("'Absolute' is a reserved keyword"),
    )
  })

  test('a keyword that the grammar itself claims cannot be used undelimited', async () => {
    // `Order` is a hard keyword (it introduces the Order(...) call form),
    // so it is a parse error rather than a validation warning. Bracketing
    // it is the documented workaround.
    const document = await parseMdx(
      'WITH SET Order AS {[A].[B]} SELECT FROM [Cube]',
    )
    expect(document.parseResult.parserErrors.length).toBeGreaterThan(0)

    const bracketed = await validate(
      'WITH SET [Order] AS {[A].[B]} SELECT FROM [Cube]',
    )
    expect(diagnostics(bracketed)).toHaveLength(0)
  })

  test('an identifier over 100 characters is rejected', async () => {
    const long = 'A'.repeat(101)
    const document = await validate(
      `WITH SET [${long}] AS {[A].[B]} SELECT FROM [Cube]`,
    )
    expect(diagnosticsOfSeverity(document, ERROR)).toContainEqual(
      expect.stringContaining('must contain from 1 through 100 characters'),
    )
  })

  test('a delimited reserved keyword is accepted', async () => {
    const document = await validate(
      'WITH SET [Order] AS {[A].[B]} SELECT FROM [Cube]',
    )
    expect(diagnostics(document)).toHaveLength(0)
  })
})

describe('CREATE MEMBER cube target', () => {
  test('naming a cube other than CURRENTCUBE warns', async () => {
    const document = await validate(
      'CREATE MEMBER [Other Cube].[Measures].[X] AS 1',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining('Use CURRENTCUBE instead'),
    )
  })

  test('CURRENTCUBE is accepted', async () => {
    const document = await validate(
      'CREATE MEMBER CURRENTCUBE.[Measures].[X] AS 1',
    )
    expect(diagnostics(document)).toHaveLength(0)
  })

  test('an unqualified member name is accepted', async () => {
    const document = await validate('CREATE MEMBER [Measures].[X] AS 1')
    expect(diagnostics(document)).toHaveLength(0)
  })
})

describe('slicer axis', () => {
  test('a multi-member set in WHERE warns', async () => {
    const document = await validate(
      'SELECT {[A].[B]} ON 0 FROM [Cube] WHERE {[C].[D], [C].[E]}',
    )
    expect(diagnosticsOfSeverity(document, WARNING)).toContainEqual(
      expect.stringContaining('The WHERE slicer fixes a coordinate'),
    )
  })

  test('a tuple in WHERE is accepted', async () => {
    const document = await validate(
      'SELECT {[A].[B]} ON 0 FROM [Cube] WHERE ([C].[D], [E].[F])',
    )
    expect(diagnostics(document)).toHaveLength(0)
  })
})

describe('the bundled examples validate cleanly', () => {
  test.each([
    'basic.mdxq',
    'non-visual.mdxq',
    'autoexists.mdxq',
    'properties.mdxq',
    'script.mdxs',
    'operators.mdxq',
  ])('%s produces no errors', async file => {
    const { readFileSync } = await import('node:fs')
    const { join } = await import('node:path')
    const text = readFileSync(
      join(__dirname, '..', '..', 'examples', file),
      'utf8',
    )
    const document = await parseMdx(text, { validation: true })
    expect(syntaxErrors(document)).toBe('')
    expect(diagnosticsOfSeverity(document, ERROR)).toHaveLength(0)
  })
})
