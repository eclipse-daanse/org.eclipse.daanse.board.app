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
import { parseMdx, syntaxErrors } from '../test-helper.js'
import {
  isAliasedExpression,
  isCallStatement,
  isCastExpression,
  isDrillthroughStatement,
  isExplainStatement,
  isFreezeStatement,
  isFunctionCall,
  isMemberAccess,
  isParameterReference,
  isRefreshStatement,
  isSelectStatement,
  isUpdateStatement,
  isWithMember,
  type Expression,
  type SelectStatement,
} from '../../src/language/generated/ast.js'

async function parseOk(text: string) {
  const document = await parseMdx(text)
  expect(syntaxErrors(document)).toBe('')
  return document.parseResult.value
}

async function parseExpression(text: string): Promise<Expression> {
  const script = await parseOk(
    `WITH MEMBER [Measures].[M] AS ${text} SELECT FROM [Cube]`,
  )
  const select = script.statements[0] as SelectStatement
  const clause = select.with[0]
  expect(isWithMember(clause)).toBe(true)
  return (clause as { value: Expression }).value
}

describe('query parameters', () => {
  test('@name is a parameter reference, not a lexer error', async () => {
    const expression = await parseExpression('@StartDate')
    expect(isParameterReference(expression)).toBe(true)
    expect((expression as { name: string }).name).toBe('@StartDate')
  })

  test('parameters work as ordinary operands', async () => {
    await parseOk(
      'SELECT [Date].[Calendar].Members ON 0 FROM [Cube] WHERE @Region',
    )
    await parseExpression('@a + @b * 2')
  })
})

describe('composite member keys', () => {
  test('a two-part key is one member reference', async () => {
    const expression = await parseExpression('[Date].[Calendar].&[2005]&[7]')
    expect(isMemberAccess(expression)).toBe(true)
    const access = expression as {
      key: boolean
      segment: { $refText: string }
      keys: string[]
    }
    expect(access.key).toBe(true)
    expect(access.segment.$refText).toBe('[2005]')
    expect(access.keys).toEqual(['&[7]'])
  })

  test('keys of three or more parts, bracketed or bare', async () => {
    const expression = await parseExpression('[D].[H].&[1]&[2]&[3]')
    expect((expression as { keys: string[] }).keys).toEqual(['&[2]', '&[3]'])
    await parseExpression('[D].[H].&foo&bar')
  })

  test('a single key is unchanged', async () => {
    const expression = await parseExpression(
      '[Product].[Model Name].&[Mountain-200]',
    )
    const access = expression as { key: boolean; keys: string[] }
    expect(access.key).toBe(true)
    expect(access.keys).toEqual([])
  })

  test('composite keys are accepted in declaration positions too', async () => {
    await parseOk(
      'WITH MEMBER [Date].[Calendar].&[2005]&[7].[X] AS 1 SELECT FROM [Cube]',
    )
  })
})

describe('CAST', () => {
  test('CAST(expr AS type) is its own node, with a typed target', async () => {
    const expression = await parseExpression(
      'CAST([Measures].[Amount] AS STRING)',
    )
    expect(isCastExpression(expression)).toBe(true)
    expect((expression as { type: string }).type).toBe('STRING')
  })

  test('the operand stops at AS rather than swallowing it as an alias', async () => {
    const expression = await parseExpression('CAST(1 + 2 AS NUMERIC)')
    const cast = expression as { value: Expression; type: string }
    expect(isCastExpression(expression)).toBe(true)
    expect((cast.value as { operator: string }).operator).toBe('+')
    expect(cast.type).toBe('NUMERIC')
  })
})

describe('AS aliases', () => {
  test('a set can be named inline on an axis', async () => {
    const script = await parseOk(
      'SELECT [Product].[Category].Members AS Cats ON 0 FROM [Cube]',
    )
    const select = script.statements[0] as SelectStatement
    const axis = select.axes[0].set
    expect(isAliasedExpression(axis)).toBe(true)
    expect((axis as { alias: string }).alias).toBe('Cats')
  })

  test('the alias binds looser than every operator', async () => {
    const expression = await parseExpression('1 + 2 AS Total')
    expect(isAliasedExpression(expression)).toBe(true)
    expect(
      (
        (expression as { expression: Expression }).expression as {
          operator: string
        }
      ).operator,
    ).toBe('+')
  })

  test('WITH MEMBER … AS is still the declaration separator', async () => {
    const script = await parseOk(
      'WITH MEMBER [Measures].[M] AS 1 SET [S] AS {[A]} SELECT FROM [C]',
    )
    const select = script.statements[0] as SelectStatement
    expect(select.with).toHaveLength(2)
  })
})

describe('string concatenation', () => {
  test('|| parses at additive precedence', async () => {
    const expression = await parseExpression("'a' || 'b'")
    expect((expression as { operator: string }).operator).toBe('||')
  })

  test('|| binds looser than *', async () => {
    const expression = await parseExpression("'a' || 'b' * 2")
    const root = expression as { operator: string; right: Expression }
    expect(root.operator).toBe('||')
    expect((root.right as { operator: string }).operator).toBe('*')
  })
})

describe('numeric literals', () => {
  test('an exponent applies to a leading-dot mantissa', async () => {
    const expression = await parseExpression('.5e3')
    expect((expression as { value: number }).value).toBe(500)
  })

  test.each(['0.5e3', '5E-2', '.25', '42'])('%s', async literal => {
    await parseExpression(literal)
  })
})

describe('skippable arguments', () => {
  test('an omitted slot parses', async () => {
    const expression = await parseExpression(
      'ParallelPeriod(, , [Date].[Calendar].[Month])',
    )
    expect(isFunctionCall(expression)).toBe(true)
    // The omitted slots contribute no elements — which is exactly why arity
    // is counted from the CST in the validator.
    expect((expression as { arguments: Expression[] }).arguments).toHaveLength(
      1,
    )
  })

  test('a trailing and a leading gap', async () => {
    await parseExpression('Fn(1, , 2)')
    await parseExpression('Fn(, 1)')
    await parseExpression('Fn(1, )')
  })

  test('an empty argument list is still empty', async () => {
    const expression = await parseExpression('CalculationCurrentPass()')
    expect((expression as { arguments: Expression[] }).arguments).toHaveLength(
      0,
    )
  })
})

describe('statements built around a SELECT', () => {
  test('DRILLTHROUGH with every optional clause', async () => {
    const script = await parseOk(
      'DRILLTHROUGH MAXROWS 100 FIRSTROWSET 2 SELECT [Measures].[Amount] ON 0 FROM [Cube] RETURN [Date].[Year], [Product].[Name]',
    )
    const statement = script.statements[0]
    expect(isDrillthroughStatement(statement)).toBe(true)
    const drill = statement as {
      maxRows: number
      firstRowSet: number
      returns: string[]
    }
    expect(drill.maxRows).toBe(100)
    expect(drill.firstRowSet).toBe(2)
    expect(drill.returns).toEqual(['[Date].[Year]', '[Product].[Name]'])
  })

  test('DRILLTHROUGH with none of them', async () => {
    await parseOk('DRILLTHROUGH SELECT [Measures].[Amount] ON 0 FROM [Cube]')
  })

  test('EXPLAIN PLAN FOR takes either statement', async () => {
    const select = await parseOk('EXPLAIN PLAN FOR SELECT [M] ON 0 FROM [Cube]')
    expect(isExplainStatement(select.statements[0])).toBe(true)
    expect(
      isSelectStatement(
        (select.statements[0] as { statement: unknown }).statement as never,
      ),
    ).toBe(true)

    const drill = await parseOk(
      'EXPLAIN PLAN FOR DRILLTHROUGH SELECT [M] ON 0 FROM [Cube]',
    )
    expect(
      isDrillthroughStatement(
        (drill.statements[0] as { statement: unknown }).statement as never,
      ),
    ).toBe(true)
  })

  test('REFRESH CUBE', async () => {
    const script = await parseOk('REFRESH CUBE [Adventure Works]')
    expect(isRefreshStatement(script.statements[0])).toBe(true)
    expect((script.statements[0] as { cube: string }).cube).toBe(
      '[Adventure Works]',
    )
  })
})

describe('UPDATE CUBE', () => {
  test('a single writeback with an allocation mode', async () => {
    const script = await parseOk(
      'UPDATE CUBE [Cube] SET ([Measures].[Amount], [Date].[2005]) = 100 USE_EQUAL_ALLOCATION',
    )
    const statement = script.statements[0]
    expect(isUpdateStatement(statement)).toBe(true)
    const update = statement as {
      cube: string
      clauses: Array<{ allocation?: string }>
    }
    expect(update.cube).toBe('[Cube]')
    expect(update.clauses[0].allocation).toBe('USE_EQUAL_ALLOCATION')
  })

  test('several clauses, and BY weight', async () => {
    const script = await parseOk(
      'UPDATE CUBE [C] SET ([M].[A]) = 1, ([M].[B]) = 2 USE_WEIGHTED_INCREMENT BY [M].[W]',
    )
    const update = script.statements[0] as { clauses: unknown[] }
    expect(update.clauses).toHaveLength(2)
  })

  test('allocation mode is optional', async () => {
    await parseOk('UPDATE CUBE [C] SET ([M].[A]) = 1')
  })
})

describe('CALL', () => {
  test('a bare procedure call', async () => {
    const script = await parseOk('CALL SystemRestoreBackup(1)')
    expect(isCallStatement(script.statements[0])).toBe(true)
  })

  test('a namespace-qualified procedure reuses the postfix chain', async () => {
    await parseOk('CALL ASSP.EnableDrillthrough(1, 2)')
  })
})

describe('FREEZE', () => {
  test('a bare FREEZE freezes the enclosing scope', async () => {
    const script = await parseOk('SCOPE([Measures].[X]); FREEZE; END SCOPE')
    const scope = script.statements[0] as { body: unknown[] }
    expect(isFreezeStatement(scope.body[0] as never)).toBe(true)
    expect((scope.body[0] as { subcube: unknown[] }).subcube).toEqual([])
  })

  test('the parenthesised form still works', async () => {
    const script = await parseOk('FREEZE([Measures].[X], [Date].[2005])')
    expect(
      (script.statements[0] as { subcube: unknown[] }).subcube,
    ).toHaveLength(2)
  })
})

describe('soft keywords', () => {
  test('.Dimension is a member property, not the DIMENSION clause', async () => {
    const expression = await parseExpression('[Measures].[Amount].Dimension')
    expect(isMemberAccess(expression)).toBe(true)
    expect(
      (expression as { segment: { $refText: string } }).segment.$refText,
    ).toBe('Dimension')
  })

  test('DIMENSION PROPERTIES still parses on an axis', async () => {
    await parseOk(
      'SELECT [Product].Members DIMENSION PROPERTIES [Product].[Name] ON 0 FROM [Cube]',
    )
  })

  test('CUBE stays usable as a bare name', async () => {
    await parseOk(
      'WITH MEMBER [Measures].[X] AS 1, SCOPE_ISOLATION = CUBE SELECT FROM [Cube]',
    )
  })
})
