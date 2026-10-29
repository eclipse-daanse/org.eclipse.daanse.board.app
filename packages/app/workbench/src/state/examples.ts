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
/*
 * Examples that run: built from the cube that is open, so they answer on
 * any server - two axes, a calculated member, pages and chapters, a
 * drillthrough, a schema rowset. The language package's own examples show
 * the grammar; these show the data.
 */

import type { CubeMetadata } from './metadata'

// i18n-keys: workbench:Examples.*
export interface RunnableExample {
  id: string
  /** A translation key in the workbench namespace. */
  label: string
  text: string
}

const quote = (name: string) => `[${name.replace(/]/g, ']]')}]`

/*
 * Hierarchies people can put on an axis: not the measures, not hidden, and
 * one per dimension - two hierarchies of one dimension on two axes answer
 * with little but the combinations they share.
 */
function axisHierarchies(metadata: CubeMetadata) {
  const seen = new Set<string>()
  return metadata.hierarchies.filter(h => {
    const dimension = String(h.DIMENSION_UNIQUE_NAME)
    if (dimension === '[Measures]' || String(h.HIERARCHY_IS_VISIBLE ?? 'true') === 'false' || seen.has(dimension)) return false
    seen.add(dimension)
    return true
  })
}

export function runnableExamples(metadata: CubeMetadata): RunnableExample[] {
  const cube = quote(metadata.cube)
  const measures = metadata.measures.filter(m => String(m.MEASURE_IS_VISIBLE ?? 'true') !== 'false')
  const hierarchies = axisHierarchies(metadata)
  if (!metadata.cube || measures.length === 0) return []

  const m0 = measures[0].MEASURE_UNIQUE_NAME
  const m1 = measures[1]?.MEASURE_UNIQUE_NAME ?? m0
  const h = (i: number) => hierarchies[i]?.HIERARCHY_UNIQUE_NAME
  const children = (i: number) => (h(i) ? `${h(i)}.Children` : '{}')

  const examples: RunnableExample[] = [
    {
      id: 'two-axes',
      label: 'Examples.twoAxes',
      text: `SELECT\n  {${m0}, ${m1}} ON COLUMNS,\n  NON EMPTY ${children(0)} ON ROWS\nFROM ${cube}\n`,
    },
    {
      id: 'calculated',
      label: 'Examples.calculated',
      text:
        `WITH MEMBER [Measures].[Share] AS\n  ${m0} / (${m0}, ${h(0) ?? m0}.CurrentMember.Parent),\n  FORMAT_STRING = 'Percent'\n` +
        `SELECT\n  {${m0}, [Measures].[Share]} ON COLUMNS,\n  NON EMPTY ${children(0)} ON ROWS\nFROM ${cube}\n`,
    },
    {
      id: 'top',
      label: 'Examples.top',
      text: `SELECT\n  {${m0}} ON COLUMNS,\n  TopCount(${h(0) ? `${h(0)}.Members` : '{}'}, 10, ${m0}) ON ROWS\nFROM ${cube}\n`,
    },
  ]
  if (h(2)) {
    examples.push({
      id: 'pages',
      label: 'Examples.pages',
      text: `SELECT\n  {${m0}} ON COLUMNS,\n  ${children(0)} ON ROWS,\n  ${children(1)} ON PAGES,\n  ${children(2)} ON AXIS(3)\nFROM ${cube}\n`,
    })
  }
  examples.push(
    {
      id: 'drillthrough',
      label: 'Examples.drillthrough',
      text: `DRILLTHROUGH MAXROWS 50\nSELECT {${m0}} ON COLUMNS\nFROM ${cube}\n`,
    },
    {
      id: 'dmv',
      label: 'Examples.dmv',
      // Columns named: eMondrian refuses SELECT * over $SYSTEM.
      text: `SELECT CUBE_NAME, CUBE_CAPTION, LAST_SCHEMA_UPDATE\nFROM $SYSTEM.MDSCHEMA_CUBES\n`,
    },
  )
  return examples
}
