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
 * The editor gets SQL diagnostics from the language server, not from a separate
 * check - Langium turns lexer errors, parser errors and validator output into
 * `textDocument/publishDiagnostics`. These tests run full validation, so a
 * regression in the server wiring shows up here rather than as a silently clean
 * editor.
 *
 * Every case mirrors PostgreSQL 18 behaviour. What is *not* here is anything
 * needing a schema: this package has no connection and no catalogue, so
 * `SELECT nosuchcolumn FROM t` is correctly silent.
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

describe('valid PostgreSQL produces no diagnostics', () => {
  test.each([
    [
      'a plain query',
      'SELECT product_id, store_sales FROM sales_fact_1997 WHERE unit_sales > 1',
    ],
    [
      'aggregation',
      'SELECT product_id, sum(store_sales) FROM sales_fact_1997 GROUP BY product_id',
    ],
    [
      'a window function',
      'SELECT rank() OVER (ORDER BY store_sales) FROM sales_fact_1997',
    ],
    [
      'a recursive CTE',
      'WITH RECURSIVE r (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM r WHERE n < 5) SELECT n FROM r',
    ],
    ['a non-recursive CTE', 'WITH c AS (SELECT 1 AS n) SELECT n FROM c'],
    ['an ordinal in range', 'SELECT a, b FROM t ORDER BY 2'],
    ['distinct aliases', 'SELECT a FROM t AS x JOIN u AS y ON x.id = y.id'],
    [
      'a schema-qualified function',
      'SELECT myschema.my_function(1) FROM t',
    ],
    [
      'unreserved words as names',
      'SELECT nowait, locked, skip, ordinality FROM t',
    ],
    ['a reserved word, quoted', 'SELECT "select", "table" FROM t'],
    ['a select-list wildcard', 'SELECT t.* FROM t'],
    ['a wildcard in a function argument', 'SELECT count(t.*) FROM t'],
    ['an aggregate in HAVING', 'SELECT a FROM t GROUP BY a HAVING count(*) > 1'],
    ['FILTER on an aggregate', 'SELECT sum(a) FILTER (WHERE b > 0) FROM t'],
    [
      'DISTINCT ON matching ORDER BY',
      'SELECT DISTINCT ON (a) a, b FROM t ORDER BY a, b',
    ],
    ['a valid interval qualifier', "SELECT interval '1' day to second FROM t"],
    ['adjacent strings across a newline', "SELECT 'a'\n'b' FROM t"],
    ['a user-defined operator', 'SELECT a @> b FROM t'],
  ])('%s', async (_label, text) => {
    expect(await diagnose(text)).toEqual([])
  })
})

describe('what the validator reports', () => {
  test.each([
    [
      'an unknown function',
      "SELECT date_fromat(d, 'YYYY') FROM t",
      /No built-in function named 'date_fromat'/,
    ],
    ['the wrong argument count', 'SELECT abs(1, 2) FROM t', /takes .* not 2/],
    [
      'an aggregate in WHERE',
      'SELECT a FROM t WHERE sum(b) > 1',
      /aggregate functions are not allowed in WHERE/,
    ],
    [
      'a window function in WHERE',
      'SELECT a FROM t WHERE row_number() OVER () > 1',
      /window functions are not allowed in WHERE/,
    ],
    [
      'an aggregate in a join condition',
      'SELECT a FROM t JOIN u ON sum(t.b) = u.b',
      /aggregate functions are not allowed in JOIN conditions/,
    ],
    [
      'a duplicate alias',
      'SELECT a FROM t AS x JOIN u AS x ON 1 = 1',
      /table name "x" specified more than once/,
    ],
    [
      'an ORDER BY ordinal past the end',
      'SELECT a, b FROM t ORDER BY 5',
      /ORDER BY position 5 is not in select list/,
    ],
    [
      'a GROUP BY ordinal past the end',
      'SELECT a FROM t GROUP BY 3',
      /GROUP BY position 3 is not in select list/,
    ],
    [
      'a CTE that refers to itself without RECURSIVE',
      'WITH c AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM c) SELECT n FROM c',
      /refers to itself/,
    ],
    [
      // A word the server reserves that no rule here spells, so the lexer
      // cannot reserve it and the validator is what catches it.
      'an unquoted reserved word',
      'SELECT deferrable FROM t',
      /reserved word in PostgreSQL 18/,
    ],
    [
      'a wildcard outside a select list',
      'SELECT a FROM t WHERE t.* = 1',
      /qualified wildcard is only allowed/,
    ],
    [
      'DISTINCT ON that does not match ORDER BY',
      'SELECT DISTINCT ON (a) a, b FROM t ORDER BY b',
      /DISTINCT ON expressions must match initial ORDER BY/,
    ],
    [
      'a frame starting at UNBOUNDED FOLLOWING',
      'SELECT sum(a) OVER (ORDER BY b ROWS BETWEEN UNBOUNDED FOLLOWING AND UNBOUNDED FOLLOWING) FROM t',
      /frame start cannot be UNBOUNDED FOLLOWING/,
    ],
    [
      'FILTER on something that is not an aggregate',
      'SELECT lower(a) FILTER (WHERE b > 0) FROM t',
      /FILTER is only allowed on an aggregate/,
    ],
    [
      'MATCHED BY SOURCE in MERGE',
      'MERGE INTO t USING u ON t.id = u.id WHEN MATCHED BY SOURCE THEN DELETE',
      /only NOT MATCHED takes BY SOURCE/,
    ],
    [
      'an operator that does not exist',
      'SELECT a &|~ b FROM t',
      /operator does not exist/,
    ],
    [
      'an interval qualifier in the wrong order',
      "SELECT interval '1' second to day FROM t",
      /invalid INTERVAL qualifier/,
    ],
    [
      'adjacent strings on one line',
      "SELECT 'a' 'b' FROM t",
      /adjacent string literals/,
    ],
    [
      'trailing junk after a number',
      'SELECT 1a FROM t',
      /trailing junk after numeric literal/,
    ],
    [
      'two LIMIT clauses',
      'SELECT a FROM t LIMIT 1 LIMIT 2',
      /multiple LIMIT clauses/,
    ],
    [
      'FOR UPDATE with GROUP BY',
      'SELECT a FROM t GROUP BY a FOR UPDATE',
      /FOR UPDATE is not allowed with GROUP BY/,
    ],
    [
      'a column that is neither grouped nor aggregated',
      'SELECT a, b FROM t GROUP BY a',
      /must appear in the GROUP BY clause/,
    ],
  ])('%s', async (_label, text, pattern) => {
    const messages = await diagnose(text)
    expect(messages.join('\n')).toMatch(pattern as RegExp)
  })
})

describe('the comment rules', () => {
  // Unlike MySQL, `--` needs no whitespace after it, and there is no `#`
  // comment at all. Block comments nest, so an inner `*/` does not end the
  // outer one - getting that wrong would swallow the rest of the statement.
  test('`--` needs no whitespace', async () => {
    expect(await diagnose('SELECT 1 --a comment\nFROM t')).toEqual([])
  })

  test('block comments nest', async () => {
    expect(await diagnose('SELECT /* outer /* inner */ still */ 1 FROM t')).toEqual(
      [],
    )
  })

  test('an unterminated nested comment swallows the rest', async () => {
    // The whole tail is a comment, so the statement is `SELECT 1` - no error.
    expect(await diagnose('SELECT 1 /* /* unterminated')).toEqual([])
  })
})

describe('syntax errors still surface', () => {
  test.each([
    ['a dangling operator', 'SELECT * FROM t WHERE a ='],
    ['a missing FROM target', 'SELECT * FROM'],
    ['an unclosed paren', 'SELECT (1 FROM t'],
    ['DDL, which this grammar does not cover', 'CREATE TABLE t (a int)'],
    ['a stray keyword', 'SELECT a FROM t WHERE ORDER'],
    ['an unterminated string', "SELECT 'abc FROM t"],
  ])('%s', async (_label, text) => {
    expect(await diagnose(text)).not.toEqual([])
  })
})
