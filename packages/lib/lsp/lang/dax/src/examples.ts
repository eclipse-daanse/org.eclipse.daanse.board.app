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
// The playground samples are the same files the tests run against, so what
// you see in the editor is exactly what the test suites cover. Every one of
// them is also accepted by the reference parser (test/examples.test.ts).
//
// They live in the language package rather than in an application because the
// language descriptor carries them: anything that mounts the editor gets the
// examples for free, and a new language brings its own.
import type { LanguageExample } from 'org.eclipse.daanse.board.app.lib.lsp.core'

import evaluateTable from '../examples/dax-evaluate-table.dax?raw'
import summarizeColumns from '../examples/dax-summarizecolumns.dax?raw'
import variables from '../examples/dax-variables.dax?raw'
import startAt from '../examples/dax-start-at.dax?raw'
import parameters from '../examples/dax-parameters.dax?raw'
import literals from '../examples/dax-literals.dax?raw'
import ratio from '../examples/dax-ratio.daxe?raw'
import varReturn from '../examples/dax-var-return.daxe?raw'

export const DAX_EXAMPLES: LanguageExample[] = [
  {
    id: 'dax-evaluate-table',
    label: 'EVALUATE a table',
    description: 'The smallest query: every row of one table.',
    fileName: 'dax-evaluate-table.dax',
    text: evaluateTable,
  },
  {
    id: 'dax-summarizecolumns',
    label: 'SUMMARIZECOLUMNS',
    description: 'A query-scoped measure, grouped by two columns and sorted.',
    fileName: 'dax-summarizecolumns.dax',
    text: summarizeColumns,
  },
  {
    id: 'dax-variables',
    label: 'Variables',
    description: 'A DEFINE VAR, and VAR ... RETURN inside a measure.',
    fileName: 'dax-variables.dax',
    text: variables,
  },
  {
    id: 'dax-start-at',
    label: 'ORDER BY / START AT',
    description: 'Paging with START AT, and two EVALUATEs in one query.',
    fileName: 'dax-start-at.dax',
    text: startAt,
  },
  {
    id: 'dax-parameters',
    label: 'Parameters',
    description: 'A query parameter with a default, used by a DEFINE TABLE.',
    fileName: 'dax-parameters.dax',
    text: parameters,
  },
  {
    id: 'dax-literals',
    label: 'Literals',
    description: 'Numbers, strings, booleans, a date and a table constructor.',
    fileName: 'dax-literals.dax',
    text: literals,
  },
  {
    id: 'dax-ratio',
    label: 'Formula: ratio',
    description: 'A measure expression (.daxe): share of all sales.',
    fileName: 'dax-ratio.daxe',
    text: ratio,
  },
  {
    id: 'dax-var-return',
    label: 'Formula: VAR / RETURN',
    description: 'A measure expression with variables: year-over-year growth.',
    fileName: 'dax-var-return.daxe',
    text: varReturn,
  },
]
