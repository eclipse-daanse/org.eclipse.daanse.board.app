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

import { toNumber } from './table'
import { Context } from './context'

/** Keeps a name that turns up at two stages apart, so that a flow cannot run in a circle. */
export const STAGE = '␟'
export const shownName = (id: string) => id.slice(id.indexOf(STAGE) + 1)

export interface Flow {
  source: string
  target: string
  value: number
}

/**
 * Flows from one thing to the next.
 *
 * Read in either of the two ways a table holds them. Rows whose labels
 * have several levels - two label columns, or a label like 1997 - Drink -
 * flow from each level to the next, by the value column. Otherwise the
 * table is a matrix: each row flows into each column of numbers, by the
 * number where they cross.
 */
export function flowsOf(context: Context): Flow[] {
  const { table, columns } = context
  const totals = new Map<string, Flow>()
  const add = (source: string, target: string, value: number | null) => {
    if (value === null || value <= 0) return
    const key = `${source}\u0000${target}`
    const flow = totals.get(key)
    if (flow) flow.value += value
    else totals.set(key, { source, target, value })
  }

  const paths = table.rows.map((row) => context.path(row))
  if (paths.some((path) => path.length > 1)) {
    const value = context.column(context.look.valueColumn, columns.numbers[0])
    if (value === undefined) return []
    table.rows.forEach((row, index) => {
      const path = paths[index]
      for (let stage = 0; stage + 1 < path.length; stage++) {
        add(`${stage}${STAGE}${path[stage]}`, `${stage + 1}${STAGE}${path[stage + 1]}`, toNumber(row[value]))
      }
    })
  } else {
    table.rows.forEach((row) => {
      const source = `0${STAGE}${context.label(row)}`
      for (const column of columns.numbers) add(source, `1${STAGE}${table.headers[column]}`, toNumber(row[column]))
    })
  }
  return [...totals.values()]
}
