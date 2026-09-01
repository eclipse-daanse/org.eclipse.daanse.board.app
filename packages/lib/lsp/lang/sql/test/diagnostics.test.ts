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
 * The editor gets SQL diagnostics from the language server, not from a
 * separate check - Langium turns lexer errors, parser errors and validator
 * output into `textDocument/publishDiagnostics`. These tests run full
 * validation, so a regression in the server wiring shows up here rather than
 * as a silently clean editor.
 *
 * Every case cites the MySQL 8.4 behaviour it mirrors. What is *not* here is
 * anything needing a schema: this package has no connection and no catalogue
 * of tables, so `SELECT nosuchcolumn FROM t` is correctly silent.
 */
import { describe, expect, test } from 'vitest'
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import { createSqlServices } from '../src/language/sql-module.js'
import type { SqlModel } from '../src/language/generated/ast.js'

const services = createSqlServices(EmptyFileSystem)
const parse = parseHelper<SqlModel>(services.Sql)

async function diagnose(text: string): Promise<string[]> {
  const document = await parse(text, { validation: true })
  return (document.diagnostics ?? []).map(d =>
    typeof d.message === 'string' ? d.message : d.message.value,
  )
}

describe('valid MySQL produces no diagnostics', () => {
  test.each([
    [
      'a plain query',
      'SELECT product_id, store_sales FROM sales_fact_1997 WHERE unit_sales > 1',
    ],
    [
      'aggregation',
      'SELECT product_id, SUM(store_sales) FROM sales_fact_1997 GROUP BY product_id',
    ],
    [
      'a window function',
      'SELECT RANK() OVER (ORDER BY store_sales) FROM sales_fact_1997',
    ],
    [
      'a recursive CTE',
      'WITH RECURSIVE t (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t',
    ],
    ['a non-recursive CTE', 'WITH t AS (SELECT 1 AS n) SELECT n FROM t'],
    ['an ordinal in range', 'SELECT a, b FROM t ORDER BY 2'],
    ['distinct aliases', 'SELECT a FROM t AS x JOIN u AS y ON x.id = y.id'],
    ['a qualified stored routine', 'SELECT mydb.my_routine(1) FROM t'],
    [
      'non-reserved words as identifiers',
      'SELECT skip, share, locked, offset FROM t',
    ],
    ['a reserved word, quoted', 'SELECT `interval`, `fulltext` FROM t'],
    ['a select-list wildcard', 'SELECT t.* FROM t'],
    ['single-table UPDATE with LIMIT', 'UPDATE t SET a = 1 ORDER BY b LIMIT 1'],
    [
      'an aggregate in HAVING',
      'SELECT a FROM t GROUP BY a HAVING COUNT(*) > 1',
    ],
  ])('%s', async (_label, text) => {
    expect(await diagnose(text)).toEqual([])
  })
})

describe('what the validator reports', () => {
  test.each([
    [
      'an unknown function',
      "SELECT DATE_FROMAT(d, '%Y') FROM t",
      /Unknown MySQL function 'DATE_FROMAT'/,
    ],
    [
      'too few arguments',
      "SELECT CONCAT_WS('-') FROM t",
      /Incorrect parameter count/,
    ],
    [
      'too many arguments',
      'SELECT ABS(1, 2) FROM t',
      /Incorrect parameter count/,
    ],
    [
      'an aggregate in WHERE',
      'SELECT a FROM t WHERE SUM(b) > 1',
      /Invalid use of group function/,
    ],
    [
      'a window function in WHERE',
      'SELECT a FROM t WHERE ROW_NUMBER() OVER () > 1',
      /cannot use the window function/,
    ],
    [
      'a duplicate alias',
      'SELECT a FROM t AS x JOIN u AS x ON 1 = 1',
      /Not unique table\/alias: 'x'/,
    ],
    [
      'an ORDER BY ordinal past the end',
      'SELECT a, b FROM t ORDER BY 5',
      /Unknown column '5' in 'order clause'/,
    ],
    [
      'a GROUP BY ordinal past the end',
      'SELECT a FROM t GROUP BY 3',
      /Unknown column '3' in 'group statement'/,
    ],
    [
      'a recursive CTE without RECURSIVE',
      'WITH t AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM t) SELECT n FROM t',
      /should contain RECURSIVE after WITH/,
    ],
    [
      'an unquoted reserved word',
      'SELECT fulltext FROM t',
      /reserved word in MySQL 8\.4/,
    ],
    [
      'a wildcard outside a select list',
      'SELECT a FROM t WHERE t.* = 1',
      /qualified wildcard is only allowed/,
    ],
    [
      'a duplicated modifier',
      'SELECT DISTINCT DISTINCT a FROM t',
      /Duplicate 'DISTINCT'/,
    ],
    [
      'ALL with DISTINCT',
      'SELECT ALL DISTINCT a FROM t',
      /ALL and DISTINCT cannot both be given/,
    ],
    [
      'a deprecated modifier',
      'SELECT SQL_CALC_FOUND_ROWS a FROM t',
      /SQL_CALC_FOUND_ROWS is deprecated/,
    ],
    [
      'ORDER BY on a multi-table UPDATE',
      'UPDATE t JOIN u ON t.id = u.id SET t.a = 1 ORDER BY t.b',
      /multi-table UPDATE cannot be ordered/,
    ],
    [
      'LIMIT on a multi-table DELETE',
      'DELETE t, u FROM t JOIN u ON t.id = u.id LIMIT 1',
      /multi-table DELETE cannot be limited/,
    ],
    [
      'two INTO clauses',
      'SELECT a INTO @x FROM t INTO @y',
      /only one INTO clause/,
    ],
    [
      'a non-aggregated select column',
      'SELECT a, b FROM t GROUP BY a',
      /ONLY_FULL_GROUP_BY/,
    ],
  ])('%s', async (_label, text, pattern) => {
    const messages = await diagnose(text)
    expect(messages.join('\n')).toMatch(pattern as RegExp)
  })
})

describe('the `--` comment rule', () => {
  // MySQL requires whitespace after `--` (9.7), so `1 --x` is `1 - (-x)`,
  // an ordinary expression, not a comment. Getting this wrong would silently
  // swallow the rest of the line.
  test('`--` without whitespace is two minus signs, not a comment', async () => {
    expect(await diagnose('SELECT 1 --x FROM t')).toEqual([])
  })

  test('`-- ` with whitespace comments to end of line', async () => {
    expect(await diagnose('SELECT 1 -- a comment\nFROM t')).toEqual([])
  })

  test('`#` needs no whitespace', async () => {
    expect(await diagnose('SELECT 1 #comment\nFROM t')).toEqual([])
  })
})

describe('syntax errors still surface', () => {
  test.each([
    ['a dangling operator', 'SELECT * FROM t WHERE a ='],
    ['a missing FROM target', 'SELECT * FROM'],
    ['an unclosed paren', 'SELECT (1 FROM t'],
    ['DDL, which this grammar does not cover', 'CREATE TABLE t (a INT)'],
    ['a stray keyword', 'SELECT a FROM t WHERE ORDER'],
    ['an unterminated string', "SELECT 'abc FROM t"],
  ])('%s', async (_label, text) => {
    expect(await diagnose(text)).not.toEqual([])
  })
})
