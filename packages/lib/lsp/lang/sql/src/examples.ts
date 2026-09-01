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

// The playground samples are the same files the parser tests run against, so
// what you see in the editor is exactly what the test suites cover.
//
// They live in the language package rather than in an application because the
// language descriptor carries them: anything that mounts the editor gets the
// examples for free, and a new language brings its own.
//
// The schema is FoodMart - the relational star behind the demo cube this app
// connects to - so the same definition serves these files and the corpus
// harness in `test/`. Nothing here is executable: see `hasOutline` and the
// note on the Run button in the application.
import type { LanguageExample } from 'org.eclipse.daanse.board.app.lib.lsp.core'

import sqlBasic from '../examples/sql-basic.sql?raw'
import sqlJoins from '../examples/sql-joins.sql?raw'
import sqlAggregate from '../examples/sql-aggregate.sql?raw'
import sqlCte from '../examples/sql-cte.sql?raw'
import sqlWindow from '../examples/sql-window.sql?raw'
import sqlSetOperations from '../examples/sql-set-operations.sql?raw'
import sqlExpressions from '../examples/sql-expressions.sql?raw'
import sqlDml from '../examples/sql-dml.sql?raw'

export const SQL_EXAMPLES: LanguageExample[] = [
  {
    id: 'sql-basic',
    label: 'Basic query',
    description: 'SELECT, WHERE, ORDER BY and LIMIT against the fact table.',
    fileName: 'sql-basic.sql',
    text: sqlBasic,
  },
  {
    id: 'sql-joins',
    label: 'Star schema joins',
    description:
      'Every join kind, ON and USING - roughly what Mondrian emits for an MDX query.',
    fileName: 'sql-joins.sql',
    text: sqlJoins,
  },
  {
    id: 'sql-aggregate',
    label: 'GROUP BY and ROLLUP',
    description: 'Aggregates, DISTINCT counts, HAVING and a subtotal row.',
    fileName: 'sql-aggregate.sql',
    text: sqlAggregate,
  },
  {
    id: 'sql-cte',
    label: 'Common table expressions',
    description: 'A named intermediate result and a RECURSIVE CTE.',
    fileName: 'sql-cte.sql',
    text: sqlCte,
  },
  {
    id: 'sql-window',
    label: 'Window functions',
    description:
      'Running total, rank within partition and LAG, over a named WINDOW.',
    fileName: 'sql-window.sql',
    text: sqlWindow,
  },
  {
    id: 'sql-set-operations',
    label: 'Set operations & subqueries',
    description: 'UNION ALL, IN, EXISTS and a scalar subquery.',
    fileName: 'sql-set-operations.sql',
    text: sqlSetOperations,
  },
  {
    id: 'sql-expressions',
    label: 'Expressions & quoting',
    description:
      'CASE, CAST, operator precedence, and what ANSI_QUOTES does to double quotes.',
    fileName: 'sql-expressions.sql',
    text: sqlExpressions,
  },
  {
    id: 'sql-dml',
    label: 'INSERT / UPDATE / DELETE',
    description: 'The data-manipulation statements the grammar covers.',
    fileName: 'sql-dml.sql',
    text: sqlDml,
  },
]
