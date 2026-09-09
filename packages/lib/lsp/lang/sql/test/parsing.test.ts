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
  ['star from', `SELECT * FROM product`],
  [
    'qualified wildcard',
    `SELECT p.*, c.customer_id FROM product p, customer c`,
  ],
  [
    'join chain',
    `SELECT s.store_sales FROM sales_fact_1997 s INNER JOIN product p ON s.product_id = p.product_id LEFT OUTER JOIN customer c USING (customer_id)`,
  ],
  [
    'group/having/rollup',
    `SELECT p.brand_name, SUM(s.store_sales) AS total FROM sales_fact_1997 s JOIN product p ON s.product_id = p.product_id GROUP BY p.brand_name WITH ROLLUP HAVING SUM(s.store_sales) > 100`,
  ],
  [
    'cte recursive',
    `WITH RECURSIVE t (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT * FROM t`,
  ],
  [
    'window frame',
    `SELECT customer_id, SUM(store_sales) OVER (PARTITION BY customer_id ORDER BY the_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running FROM sales_fact_1997`,
  ],
  [
    'named window',
    `SELECT RANK() OVER w FROM sales_fact_1997 WINDOW w AS (ORDER BY store_sales DESC)`,
  ],
  [
    'keyword functions',
    `SELECT LEFT(brand_name, 3), RIGHT(brand_name, 2), CHAR(65), MOD(7, 2), REPLACE(brand_name, 'a', 'b'), INSERT('abc', 1, 1, 'z') FROM product`,
  ],
  ['non-reserved as ids', `SELECT skip, share, locked, offset, \`end\` FROM t`],
  [
    'predicates',
    `SELECT * FROM t WHERE a IN (1, 2) AND b NOT BETWEEN 1 AND 9 AND c LIKE 'x%' ESCAPE '\\\\' AND d IS NOT NULL AND e REGEXP 'y' AND f MEMBER OF (g)`,
  ],
  [
    'subquery + exists',
    `SELECT * FROM t WHERE EXISTS (SELECT 1 FROM u WHERE u.id = t.id) AND x = (SELECT MAX(y) FROM v)`,
  ],
  [
    'set ops',
    `SELECT a FROM t UNION ALL SELECT b FROM u INTERSECT SELECT c FROM v EXCEPT (SELECT d FROM w ORDER BY 1 LIMIT 3)`,
  ],
  [
    'case + cast',
    `SELECT CASE WHEN a > 1 THEN 'hi' ELSE 'lo' END, CAST(b AS DECIMAL(10,2)), CONVERT(c USING utf8mb4) FROM t`,
  ],
  ['ansi quotes + concat', `SELECT "quoted_id", a || b AS joined FROM t`],
  ['locking', `SELECT * FROM t FOR UPDATE OF t SKIP LOCKED`],
  ['index hints', `SELECT * FROM t USE INDEX FOR JOIN (i1, i2) WHERE a = 1`],
  [
    'lateral',
    `SELECT * FROM t, LATERAL (SELECT * FROM u WHERE u.id = t.id) AS d`,
  ],
  [
    'insert',
    `INSERT INTO product (product_id, brand_name) VALUES (1, 'a'), (2, 'b') AS new ON DUPLICATE KEY UPDATE brand_name = new.brand_name`,
  ],
  [
    'insert select',
    `INSERT INTO archive (id) SELECT id FROM t WHERE t.old = 1`,
  ],
  ['insert set', `INSERT INTO t SET a = 1, b = 2`],
  ['replace', `REPLACE INTO t (a) VALUES (1)`],
  ['update', `UPDATE t SET a = a + 1 WHERE b = 2 ORDER BY c LIMIT 10`],
  ['multi update', `UPDATE t JOIN u ON t.id = u.id SET t.a = u.a`],
  ['delete', `DELETE FROM t WHERE a = 1 ORDER BY b LIMIT 5`],
  [
    'multi delete',
    `DELETE t1, t2 FROM t1 JOIN t2 ON t1.id = t2.id WHERE t1.a = 1`,
  ],
  ['delete using', `DELETE FROM t1 USING t1 JOIN t2 ON t1.id = t2.id`],
  ['comments', `-- a line comment\n# hash comment\n/* block */ SELECT 1`],
  ['limit forms', `SELECT * FROM t LIMIT 5, 10`],
  ['odbc join', `SELECT * FROM { OJ t LEFT JOIN u ON t.id = u.id }`],
  [
    'parenthesized tables',
    `SELECT * FROM (t JOIN u ON t.id = u.id) JOIN v ON v.id = t.id`,
  ],
  ['multi statement', `SELECT 1; SELECT 2;`],
  ['empty', ``],
]
describe('the MySQL 8.4 statement grammar', () => {
  test.each(CASES)('parses %s', async (_label, text) => {
    expect(await errorsIn(text)).toEqual([])
  })
})
