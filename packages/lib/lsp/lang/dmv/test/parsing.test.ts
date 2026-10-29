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
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import { createDmvServices } from '../src/language/dmv-module.js'
import type {
  ComparisonExpression,
  DmvModel,
  OrExpression,
  StringLiteral,
  SystemRestrictSchemaCall,
  TableReference,
} from '../src/language/generated/ast.js'

const services = createDmvServices(EmptyFileSystem)
const parse = parseHelper<DmvModel>(services.Dmv)

async function parseDmv(text: string) {
  const document = await parse(text)
  const { lexerErrors, parserErrors } = document.parseResult
  const errors = [
    ...lexerErrors.map(e => e.message),
    ...parserErrors.map(e => e.message),
  ]
  return { query: document.parseResult.value.query, errors }
}

async function ok(text: string) {
  const { query, errors } = await parseDmv(text)
  expect(errors).toEqual([])
  return query
}

async function rejected(text: string) {
  const { errors } = await parseDmv(text)
  expect(errors.length).toBeGreaterThan(0)
}

describe('queries from the Microsoft DMV documentation', () => {
  // Every one of these is quoted verbatim from
  // learn.microsoft.com/.../use-dynamic-management-views-dmvs-to-monitor-analysis-services
  test.each([
    'SELECT * FROM $System.DISCOVER_CALC_DEPENDENCY',
    "SELECT * FROM $System.DISCOVER_CALC_DEPENDENCY WHERE OBJECT_TYPE = 'ACTIVE_RELATIONSHIP'",
    "Select * from SYSTEMRESTRICTSCHEMA ($System.Discover_csdl_metadata, [CATALOG_NAME] = 'Adventure Works DW')",
    'Select * from $System.discover_object_activity',
    'Select * from $System.discover_object_memory_usage',
    'Select * from $System.discover_sessions',
    'Select * from $System.discover_locks',
    "SELECT * FROM $System.DBSchema_Tables WHERE TABLE_TYPE = 'SCHEMA' ORDER BY TABLE_NAME ASC",
  ])('%s', async text => {
    await ok(text)
  })
})

describe('statement shape', () => {
  test('the wildcard is recorded distinctly from a column list', async () => {
    expect(
      (await ok('SELECT * FROM $System.DISCOVER_SESSIONS'))?.wildcard,
    ).toBe(true)

    const columns = await ok(
      'SELECT SESSION_ID, SESSION_USER_NAME FROM $System.DISCOVER_SESSIONS',
    )
    expect(columns?.wildcard).toBe(false)
    expect(columns?.selections.map(s => s.name)).toEqual([
      'SESSION_ID',
      'SESSION_USER_NAME',
    ])
  })

  test('DISTINCT and TOP', async () => {
    const query = await ok(
      'SELECT DISTINCT TOP 10 TABLE_NAME FROM $System.DBSCHEMA_TABLES',
    )
    expect(query?.distinct).toBe(true)
    expect(query?.topLimit).toBe(10)
  })

  test('both are optional', async () => {
    const query = await ok('SELECT TABLE_NAME FROM $System.DBSCHEMA_TABLES')
    expect(query?.distinct).toBe(false)
    expect(query?.topLimit).toBeUndefined()
  })

  test('a trailing semicolon is accepted', async () => {
    await ok('SELECT * FROM $System.DISCOVER_SESSIONS;')
  })

  test('keywords are case-insensitive', async () => {
    await ok(
      'select * from $system.discover_sessions where a = 1 order by a desc',
    )
    await ok('SeLeCt * FrOm $SySteM.discover_sessions')
  })

  test('ORDER BY records direction per item, defaulting to none', async () => {
    const query = await ok(
      'SELECT * FROM $System.DBSCHEMA_TABLES ORDER BY TABLE_NAME ASC, TABLE_TYPE DESC, X',
    )
    expect(query?.orderings.map(o => [o.column.name, o.direction])).toEqual([
      ['TABLE_NAME', 'ASC'],
      ['TABLE_TYPE', 'DESC'],
      ['X', undefined],
    ])
  })
})

describe('FROM', () => {
  test('a plain rowset reference', async () => {
    const query = await ok('SELECT * FROM $System.DISCOVER_SESSIONS')
    const source = query?.source as TableReference
    expect(source.$type).toBe('TableReference')
    expect(source.rowset).toBe('DISCOVER_SESSIONS')
  })

  test('SYSTEMRESTRICTSCHEMA with one restriction', async () => {
    const query = await ok(
      "SELECT * FROM SYSTEMRESTRICTSCHEMA($System.DISCOVER_CSDL_METADATA, [CATALOG_NAME] = 'AdvWorks')",
    )
    const source = query?.source as SystemRestrictSchemaCall
    expect(source.$type).toBe('SystemRestrictSchemaCall')
    expect(source.table.rowset).toBe('DISCOVER_CSDL_METADATA')
    expect(source.parameters).toHaveLength(1)
    expect(source.parameters[0].paramName).toBe('CATALOG_NAME')
    expect((source.parameters[0].value as StringLiteral).value).toBe('AdvWorks')
  })

  test('several restrictions, and none at all', async () => {
    const many = await ok(
      "SELECT * FROM SYSTEMRESTRICTSCHEMA($System.MDSCHEMA_MEASURES, CATALOG_NAME = 'FoodMart', CUBE_NAME = 'Sales')",
    )
    expect((many?.source as SystemRestrictSchemaCall).parameters).toHaveLength(
      2,
    )

    // Zero restrictions is what the reference parser accepts; DMV-specs.md
    // would require at least one.
    const none = await ok(
      'SELECT * FROM SYSTEMRESTRICTSCHEMA($System.MDSCHEMA_CUBES)',
    )
    expect((none?.source as SystemRestrictSchemaCall).parameters).toEqual([])
  })

  test('the rowset must be qualified with $System', async () => {
    await rejected('SELECT * FROM DISCOVER_SESSIONS')
  })
})

describe('WHERE', () => {
  test('OR binds looser than AND', async () => {
    // a = 1 OR (b = 2 AND c = 3)
    const query = await ok(
      'SELECT * FROM $System.X WHERE A = 1 OR B = 2 AND C = 3',
    )
    const or = query?.whereFilter as OrExpression
    expect(or.$type).toBe('OrExpression')
    expect(or.right.$type).toBe('AndExpression')
  })

  test('parentheses override precedence', async () => {
    const query = await ok(
      'SELECT * FROM $System.X WHERE (A = 1 OR B = 2) AND C = 3',
    )
    expect(query?.whereFilter?.$type).toBe('AndExpression')
  })

  test('NOT binds tighter than AND', async () => {
    const query = await ok('SELECT * FROM $System.X WHERE NOT A = 1 AND B = 2')
    expect(query?.whereFilter?.$type).toBe('AndExpression')
  })

  test.each(['=', '<>', '>', '<', '>=', '<='])('the %s operator', async op => {
    const query = await ok(`SELECT * FROM $System.X WHERE A ${op} 1`)
    expect((query?.whereFilter as ComparisonExpression).operator).toBe(op)
  })

  test('a bare column is a valid predicate', async () => {
    // The reference parser models this as BareColumn — how boolean rowset
    // columns get filtered.
    const query = await ok('SELECT * FROM $System.X WHERE IS_VISIBLE')
    expect(query?.whereFilter?.$type).toBe('ColumnReference')
  })

  test('a parameter reference as the compared value', async () => {
    const query = await ok(
      'SELECT * FROM $System.X WHERE CATALOG_NAME = @catalog',
    )
    const cmp = query?.whereFilter as ComparisonExpression
    expect(cmp.right.$type).toBe('ParameterReference')
  })
})

describe('literals and identifiers', () => {
  test('bracketed identifiers are unwrapped in the AST', async () => {
    const query = await ok('SELECT [TABLE_NAME] FROM $System.DBSCHEMA_TABLES')
    expect(query?.selections[0].name).toBe('TABLE_NAME')
  })

  test('a bracketed identifier may contain spaces and keywords', async () => {
    const query = await ok('SELECT [Order Count], [SELECT] FROM $System.X')
    expect(query?.selections.map(s => s.name)).toEqual([
      'Order Count',
      'SELECT',
    ])
  })

  test(']] is an escaped ] inside brackets', async () => {
    const query = await ok('SELECT [a]]b] FROM $System.X')
    expect(query?.selections[0].name).toBe('a]b')
  })

  test('string quotes are stripped and doubled quotes unescaped', async () => {
    const single = await ok("SELECT * FROM $System.X WHERE A = 'it''s'")
    expect(
      ((single?.whereFilter as ComparisonExpression).right as StringLiteral)
        .value,
    ).toBe("it's")

    // Double-quoted strings are accepted by the reference parser, though
    // DMV-specs.md says single only.
    const double = await ok('SELECT * FROM $System.X WHERE A = "say ""hi"""')
    expect(
      ((double?.whereFilter as ComparisonExpression).right as StringLiteral)
        .value,
    ).toBe('say "hi"')
  })

  test('the @ is stripped from a parameter reference', async () => {
    const query = await ok('SELECT * FROM $System.X WHERE A = @catalogName')
    const cmp = query?.whereFilter as ComparisonExpression
    expect((cmp.right as { value: string }).value).toBe('catalogName')
  })

  test.each(['1', '42', '1.5', '.5', '-3', '-2.75'])(
    'the numeric literal %s',
    async n => {
      await ok(`SELECT * FROM $System.X WHERE A = ${n}`)
    },
  )

  test('a negative literal is flagged rather than folded', async () => {
    const query = await ok('SELECT * FROM $System.X WHERE A = -3')
    const value = (query?.whereFilter as ComparisonExpression).right as {
      negative: boolean
      value: number
    }
    expect(value).toMatchObject({ negative: true, value: 3 })
  })
})

describe('comments', () => {
  test.each([
    '-- leading\nSELECT * FROM $System.X',
    '// leading\nSELECT * FROM $System.X',
    '/* leading */ SELECT * FROM $System.X',
    'SELECT * FROM $System.X -- trailing',
    'SELECT /* inline */ * FROM $System.X',
  ])('%j', async text => {
    await ok(text)
  })
})

describe('SQL the DMV engine does not support', () => {
  // The engine is the Data Mining parser, not a SQL engine. Accepting these
  // would let the editor bless queries the server rejects.
  test.each([
    ['JOIN', 'SELECT * FROM $System.A JOIN $System.B ON A.x = B.x'],
    ['GROUP BY', 'SELECT A FROM $System.X GROUP BY A'],
    ['HAVING', 'SELECT A FROM $System.X HAVING A > 1'],
    ['LIKE', "SELECT * FROM $System.X WHERE A LIKE 'foo%'"],
    ['IN', 'SELECT * FROM $System.X WHERE A IN (1, 2)'],
    ['CAST', 'SELECT CAST(A AS INT) FROM $System.X'],
    ['INSERT', 'INSERT INTO $System.X VALUES (1)'],
    ['UPDATE', 'UPDATE $System.X SET A = 1'],
    ['function calls in the select list', 'SELECT COUNT(A) FROM $System.X'],
  ])('%s is rejected', async (_name, text) => {
    await rejected(text)
  })

  test('a wildcard cannot be mixed into a column list', async () => {
    await rejected('SELECT *, TABLE_NAME FROM $System.DBSCHEMA_TABLES')
  })
})
