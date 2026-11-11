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

export interface Grid {
  xs: string[]
  ys: string[]
  /** [row, column, value] for every cell that holds a number. */
  cells: [number, number, number][]
  min: number
  max: number
}

/** The rows along one side, the columns of numbers along the other. */
export function gridOf(context: Context): Grid | undefined {
  const { table, columns } = context
  if (!columns.numbers.length) return undefined
  const xs = table.rows.map((row) => context.label(row))
  const ys = columns.numbers.map((column) => table.headers[column])
  const cells: [number, number, number][] = []
  table.rows.forEach((row, x) =>
    columns.numbers.forEach((column, y) => {
      const value = toNumber(row[column])
      if (value !== null) cells.push([x, y, value])
    }),
  )
  if (!cells.length) return undefined
  const values = cells.map((cell) => cell[2])
  // Both ends reach zero, the floor the values stand on or hang from.
  return { xs, ys, cells, min: Math.min(0, ...values), max: Math.max(0, ...values) }
}
