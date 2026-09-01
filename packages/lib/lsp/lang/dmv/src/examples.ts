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
import type { LanguageExample } from 'org.eclipse.daanse.board.app.lib.lsp.core'

import dmvBasic from '../examples/dmv-basic.dmv?raw'
import dmvFiltered from '../examples/dmv-filtered.dmv?raw'
import dmvProjection from '../examples/dmv-projection.dmv?raw'
import dmvRestrictSchema from '../examples/dmv-restrict-schema.dmv?raw'
import dmvPredicates from '../examples/dmv-predicates.dmv?raw'
import dmvPrecedence from '../examples/dmv-precedence.dmv?raw'
import dmvFormatting from '../examples/dmv-formatting.dmv?raw'

export const DMV_EXAMPLES: LanguageExample[] = [
  {
    id: 'dmv-basic',
    label: 'Basic rowset',
    description: 'The simplest DMV query: every row of a schema rowset.',
    fileName: 'dmv-basic.dmv',
    text: dmvBasic,
  },
  {
    id: 'dmv-filtered',
    label: 'WHERE restriction',
    description: 'WHERE supplies a restriction to the rowset.',
    fileName: 'dmv-filtered.dmv',
    text: dmvFiltered,
  },
  {
    id: 'dmv-projection',
    label: 'DISTINCT / TOP / ORDER BY',
    description: 'An explicit column list with DISTINCT, TOP and sorting.',
    fileName: 'dmv-projection.dmv',
    text: dmvProjection,
  },
  {
    id: 'dmv-restrict-schema',
    label: 'SYSTEMRESTRICTSCHEMA',
    description: 'Rowsets that take restrictions must be wrapped in this call.',
    fileName: 'dmv-restrict-schema.dmv',
    text: dmvRestrictSchema,
  },
  {
    id: 'dmv-predicates',
    label: 'Predicates',
    description:
      'AND/OR precedence, NOT, every comparison operator, and an @parameter.',
    fileName: 'dmv-predicates.dmv',
    text: dmvPredicates,
  },
  {
    id: 'dmv-precedence',
    label: 'AND/OR precedence',
    description:
      'AND and OR mixed without parentheses, as written in the field.',
    fileName: 'dmv-precedence.dmv',
    text: dmvPrecedence,
  },
  {
    id: 'dmv-formatting',
    label: 'Real-world formatting',
    description:
      'A long AND chain and a partly-directed multi-column ORDER BY.',
    fileName: 'dmv-formatting.dmv',
    text: dmvFormatting,
  },
]
