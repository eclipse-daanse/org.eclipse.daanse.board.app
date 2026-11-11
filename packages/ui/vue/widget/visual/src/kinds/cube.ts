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

import { columnNamed, toNumber } from '../table'
import { colourAt } from '../palettes'
import { type Context, type Drawing } from '../context'

/** One cell of the cube: where it stands on each axis, its value and its colour. */
export interface Cell {
  x: number
  y: number
  z: number
  value: number
  colour: string
}

/**
 * What the cube view builds its scene from: the members along each axis,
 * the cells that have a value, and how to say a value. Drawn by three.js
 * rather than ECharts, which stacks bars but builds no cube of cells.
 */
export interface Cube {
  axes: [string[], string[], string[]]
  cells: Cell[]
  min: number
  max: number
  /** The scale's colours, low to high, for the legend beside the cube. */
  scale: string[]
  text: string
  /** The title the settings give, said above the cube; empty for none. */
  title: string
  autoRotate: boolean
  showScale: boolean
  showLabels: boolean
  format: (value: number) => string
}

/**
 * The cells of a cube, read in either of two ways. Labels with two levels
 * and several columns of numbers stand on the first level, the rest of the
 * label and the columns - products and stores down, quarters across.
 * Labels with three levels and one value column stand on the three levels.
 * Labels of one level under columns whose headers have two - quarters down,
 * genders and stores across, which is how MDX is most often written - stand
 * on the headers' levels and the label, the same cube seen from the other
 * axis. Anything flatter has no third axis, and says so.
 *
 * A table of that shape whose cells are all empty is a cube with no cells:
 * it has its axes, only nothing in them.
 */
export function cubeOf(context: Context): Cube | undefined {
  const { table, columns, look } = context
  const named = columnNamed(table, look.valueColumn)
  const paths = table.rows.map((row) => context.path(row))
  const deepest = Math.max(0, ...paths.map((path) => path.length))
  const separator = look.separator || ' - '
  // Each cell where it stands as members, and the order the members of each axis came in, run by run.
  const found: { members: [string, string, string]; value: number | null }[] = []
  const runs: [Map<string, Set<string>>, Map<string, Set<string>>, Map<string, Set<string>>] = [new Map(), new Map(), new Map()]
  const add = (members: [string, string, string], value: number | null) => {
    found.push({ members, value })
    // A member comes in the order of its run: the axis's own members within one member of the axes before it.
    members.forEach((member, axis) => {
      const group = members.slice(0, axis).join('\u0000')
      const run = runs[axis].get(group) ?? runs[axis].set(group, new Set()).get(group)!
      run.add(member)
    })
  }

  if (named === undefined && columns.numbers.length > 1 && deepest >= 2) {
    table.rows.forEach((row, index) => {
      const path = paths[index]
      if (path.length < 2) return
      const across = path.slice(1).join(separator)
      for (const column of columns.numbers) add([path[0], across, String(table.headers[column])], toNumber(row[column]))
    })
  } else if (named === undefined && columns.numbers.length > 1 && deepest >= 1 && levelled(context)) {
    const heads = columns.numbers.map((column) => context.headerLevels(column))
    table.rows.forEach((row, index) => {
      const path = paths[index]
      if (!path.length) return
      const up = path.join(separator)
      columns.numbers.forEach((column, i) => add([heads[i][0], heads[i].slice(1).join(separator), up], toNumber(row[column])))
    })
  } else if (deepest >= 3) {
    const value = named ?? columns.numbers[0]
    if (value === undefined) return undefined
    table.rows.forEach((row, index) => {
      const path = paths[index]
      if (path.length < 3) return
      add([path[0], path[1], path.slice(2).join(separator)], toNumber(row[value]))
    })
  } else {
    return undefined
  }

  const axes = runs.map((byGroup) => merged([...byGroup.values()])) as [string[], string[], string[]]
  const indices = axes.map((members) => new Map(members.map((member, index) => [member, index])))
  const sums = new Map<string, { x: number; y: number; z: number; value: number }>()
  for (const { members, value } of found) {
    if (value === null) continue
    const [x, y, z] = members.map((member, axis) => indices[axis].get(member)!)
    const key = `${x}:${y}:${z}`
    const cell = sums.get(key)
    if (cell) cell.value += value
    else sums.set(key, { x, y, z, value })
  }

  const values = [...sums.values()].map((cell) => cell.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max > min ? max - min : 1
  const scale = context.ramp
  return {
    axes,
    cells: [...sums.values()].map((cell) => ({ ...cell, colour: colourAt(scale, (cell.value - min) / span) })),
    min,
    max,
    scale,
    text: context.text,
    title: look.title,
    autoRotate: look.autoRotate,
    showScale: look.showScale,
    showLabels: look.showLabels,
    format: context.format,
  }
}

export function cube(context: Context): Drawing {
  if (!context.columns.numbers.length) return { problem: 'needsNumbers' }
  const found = cubeOf(context)
  if (!found) return { problem: 'needsThreeAxes' }
  // The axes are there but no cell holds a value: the query found nothing, which is no missing axis.
  return found.cells.length ? { cube: found } : { problem: 'noValues' }
}

/**
 * The members of an axis in one order that keeps the order of every run they came in. A crossjoin
 * under NonEmpty leaves out, for its first member, what the second has - Mid-Size Grocery missing
 * for the first product - and that member, first seen later, belongs where its run puts it, not last:
 * just in front of the known member that follows it there, or after the last one where none follows.
 */
function merged(runs: Set<string>[]): string[] {
  const order: string[] = []
  const known = new Set<string>()
  for (const run of runs) {
    let before: string | undefined
    let waiting: string[] = []
    for (const member of run) {
      if (!known.has(member)) {
        waiting.push(member)
        continue
      }
      if (waiting.length) order.splice(order.indexOf(member), 0, ...waiting)
      waiting.forEach((one) => known.add(one))
      waiting = []
      before = member
    }
    order.splice(before === undefined ? order.length : order.indexOf(before) + 1, 0, ...waiting)
    waiting.forEach((one) => known.add(one))
  }
  return order
}

/** Whether every column of numbers has a header of at least two levels. */
function levelled(context: Context): boolean {
  return context.columns.numbers.every((column) => context.headerLevels(column).length >= 2)
}

export { Context }
