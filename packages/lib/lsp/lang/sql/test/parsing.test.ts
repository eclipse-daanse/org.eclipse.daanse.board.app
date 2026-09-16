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
 * The grammar against the pages it was written from. Every case here is a shape
 * the PostgreSQL 18 documentation spells out; what a real server says about
 * them is `test/corpus/`, which records transcripts rather than intentions.
 */

import { describe, expect, test } from 'vitest'
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import { createSqlServices } from '../src/language/sql-module.js'
import type { SqlModel } from '../src/language/generated/ast.js'

const services = createSqlServices(EmptyFileSystem)
const parse = parseHelper<SqlModel>(services.Sql)

async function errorsIn(text: string): Promise<string[]> {
  const document = await parse(text)
  return [
    ...document.parseResult.lexerErrors.map(error => error.message),
    ...document.parseResult.parserErrors.map(error => error.message),
  ]
}

const CASES: [string, string][] = [
  ['simple', `SELECT 1`],
  ['no target list', `SELECT FROM t`],
  ['star from', `SELECT * FROM product`],
  [
    'qualified wildcard',
    `SELECT p.*, c.customer_id FROM product p, customer c`,
  ],
  [
    'join chain',
    `SELECT s.store_sales FROM sales_fact_1997 s INNER JOIN product p ON s.product_id = p.product_id LEFT OUTER JOIN customer c USING (customer_id) AS joined CROSS JOIN store FULL JOIN promotion pr ON pr.promotion_id = s.promotion_id`,
  ],
  [
    'grouping elements',
    `SELECT a, b, sum(c) FROM t GROUP BY GROUPING SETS ((a, b), ROLLUP (a), CUBE (b), ()) HAVING sum(c) > 1`,
  ],
  [
    'aggregate extras',
    `SELECT sum(a) FILTER (WHERE b > 0), percentile_cont(0.5) WITHIN GROUP (ORDER BY a), string_agg(name, ',' ORDER BY name), count(DISTINCT a) FROM t`,
  ],
  [
    'cte recursive with search and cycle',
    `WITH RECURSIVE r (n) AS NOT MATERIALIZED (SELECT 1 UNION ALL SELECT n + 1 FROM r WHERE n < 5) SEARCH BREADTH FIRST BY n SET ord CYCLE n SET looped TO true DEFAULT false USING path SELECT n FROM r`,
  ],
  [
    'data-modifying cte',
    `WITH moved AS (DELETE FROM t WHERE a = 1 RETURNING *) INSERT INTO archive SELECT id FROM moved`,
  ],
  [
    'window frame',
    `SELECT customer_id, sum(store_sales) OVER (PARTITION BY customer_id ORDER BY time_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running FROM sales_fact_1997`,
  ],
  [
    'groups frame with exclusion',
    `SELECT avg(a) OVER (ORDER BY b GROUPS BETWEEN 1 PRECEDING AND 1 FOLLOWING EXCLUDE CURRENT ROW) FROM t`,
  ],
  [
    'named window',
    `SELECT rank() OVER w FROM sales_fact_1997 WINDOW w AS (ORDER BY store_sales DESC)`,
  ],
  ['distinct on', `SELECT DISTINCT ON (a) a, b FROM t ORDER BY a, b`],
  [
    'lateral',
    `SELECT * FROM t, LATERAL (SELECT * FROM u WHERE u.id = t.id) AS d`,
  ],
  [
    'table functions',
    `SELECT * FROM generate_series(1, 10) AS g(n), ROWS FROM (generate_series(1, 3) AS (n int), unnest(ARRAY[1, 2])) WITH ORDINALITY AS r`,
  ],
  ['tablesample', `SELECT * FROM t TABLESAMPLE SYSTEM (10) REPEATABLE (1)`],
  [
    'ordering and limits',
    `SELECT a FROM t ORDER BY a USING < NULLS LAST OFFSET 5 ROWS FETCH FIRST 10 ROWS WITH TIES`,
  ],
  ['limit all', `SELECT a FROM t LIMIT ALL`],
  ['locking', `SELECT * FROM t FOR NO KEY UPDATE OF t SKIP LOCKED`],
  [
    'predicates',
    `SELECT * FROM t WHERE a IN (1, 2) AND b NOT BETWEEN SYMMETRIC 1 AND 9 AND c LIKE 'x%' ESCAPE '!' AND d ILIKE 'y%' AND e SIMILAR TO '(a|b)' AND f IS DISTINCT FROM g AND h ISNULL AND i NOTNULL`,
  ],
  [
    'subqueries and quantifiers',
    `SELECT * FROM t WHERE EXISTS (SELECT 1 FROM u WHERE u.id = t.id) AND x = (SELECT max(y) FROM v) AND z = ANY (SELECT id FROM w) AND q > ALL (ARRAY[1, 2])`,
  ],
  [
    'set operations',
    `SELECT a FROM t UNION ALL SELECT b FROM u INTERSECT SELECT c FROM v EXCEPT (SELECT d FROM w ORDER BY 1 LIMIT 3)`,
  ],
  ['values as a query', `VALUES (1, 'a'), (2, 'b')`],
  ['table as a query', `TABLE ONLY t`],
  [
    'case and casts',
    `SELECT CASE WHEN a > 1 THEN 'hi' ELSE 'lo' END, CAST(b AS numeric(10, 2)), c::text[], d::double precision, TREAT(e AS text) FROM t`,
  ],
  [
    'typed literals',
    `SELECT interval '1 day', timestamp '2026-01-01', time '12:00', interval '1' day to second FROM t`,
  ],
  [
    'special function syntax',
    `SELECT extract(YEAR FROM d), substring(s FROM 1 FOR 3), substring(s, 1, 3), position('a' IN s), overlay(s PLACING 'x' FROM 2 FOR 1), trim(BOTH ' ' FROM s), trim(s), normalize(s, NFC), coalesce(a, b), greatest(a, b), least(a, b), nullif(a, b) FROM t`,
  ],
  [
    'quoting',
    `SELECT "quoted_id", U&"unicode_id", 'plain', E'escaped\\n', U&'\\0441', $$dollar$$, $tag$tagged$tag$, B'1010', X'1f' FROM t`,
  ],
  [
    'operators',
    `SELECT a || b, j @> '{}', j ->> 'k', a OPERATOR(pg_catalog.+) b, |/ 2, a # b FROM t`,
  ],
  [
    'arrays and subscripts',
    `SELECT ARRAY[1, 2, 3], ARRAY(SELECT id FROM t), a[1], a[1:2], a[:2], (ARRAY['x', 'y'])[1] FROM t`,
  ],
  [
    'row and collate and time zone',
    `SELECT ROW(a, b), (a, b), a COLLATE "C", d AT TIME ZONE 'UTC', d AT LOCAL, grouping(a) FROM t GROUP BY a, b, d`,
  ],
  [
    'json constructors',
    `SELECT json_object('k' VALUE a ABSENT ON NULL RETURNING jsonb), json_array(a, b NULL ON NULL), json_arrayagg(a ORDER BY a), json(j), json_scalar(1), json_serialize(j RETURNING text) FROM t`,
  ],
  [
    'json query functions',
    `SELECT json_value(j, '$.a' RETURNING int DEFAULT 0 ON EMPTY), json_query(j, '$.b' WITH CONDITIONAL ARRAY WRAPPER OMIT QUOTES), json_exists(j, '$.c' TRUE ON ERROR), j IS JSON OBJECT WITH UNIQUE KEYS FROM t`,
  ],
  [
    'json_table',
    `SELECT * FROM t, json_table(t.j, '$' AS root COLUMNS (n FOR ORDINALITY, a text PATH '$.a', b boolean EXISTS PATH '$.b', NESTED PATH '$.c[*]' COLUMNS (c text PATH '$.c')) ERROR ON ERROR) AS jt`,
  ],
  [
    'insert on conflict',
    `INSERT INTO product AS p (product_id, brand_name) OVERRIDING USER VALUE VALUES (1, 'a'), (2, DEFAULT) ON CONFLICT (product_id) WHERE product_id > 0 DO UPDATE SET brand_name = EXCLUDED.brand_name WHERE p.product_id > 0 RETURNING product_id`,
  ],
  ['insert do nothing', `INSERT INTO t DEFAULT VALUES ON CONFLICT DO NOTHING`],
  ['insert select', `INSERT INTO archive (id) SELECT id FROM t WHERE t.old = 1`],
  [
    'update from',
    `UPDATE ONLY t SET a = a + 1, (b, c) = (SELECT x, y FROM u), d = DEFAULT FROM u WHERE t.id = u.id RETURNING WITH (OLD AS before, NEW AS after) before.a, after.a`,
  ],
  ['update where current of', `UPDATE t SET a = 1 WHERE CURRENT OF my_cursor`],
  [
    'delete using',
    `DELETE FROM ONLY t AS x USING u WHERE x.id = u.id RETURNING x.id`,
  ],
  [
    'merge',
    `MERGE INTO t AS tgt USING u AS src ON tgt.id = src.id WHEN MATCHED AND src.a IS NULL THEN DELETE WHEN MATCHED THEN UPDATE SET a = src.a WHEN NOT MATCHED BY SOURCE THEN DO NOTHING WHEN NOT MATCHED THEN INSERT (id, a) VALUES (src.id, src.a) RETURNING tgt.id`,
  ],
  ['select into', `SELECT a INTO TEMP TABLE t_copy FROM t`],
  ['parameters', `SELECT a FROM t WHERE b = $1 AND c = $2`],
  ['comments', `-- a line comment\n/* block /* nested */ still */ SELECT 1`],
  ['numbers', `SELECT 0x1f, 0o17, 0b1010, 1_000_000, 1.5e3, .5 FROM t`],
  [
    'parenthesized joins',
    `SELECT * FROM (t JOIN u ON t.id = u.id) JOIN v ON v.id = t.id`,
  ],
  ['multi statement', `SELECT 1; SELECT 2;`],
  ['empty', ``],
]

describe('the PostgreSQL 18 statement grammar', () => {
  test.each(CASES)('parses %s', async (_label, text) => {
    expect(await errorsIn(text)).toEqual([])
  })
})
