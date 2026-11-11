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
import { withAlpha } from '../palettes'
import { type Context, escape, every, type Drawing } from '../context'

/** Layers and the steps they flow through, with a value where they meet. */
export interface Layers {
  steps: string[]
  layers: { name: string; values: number[] }[]
}

/**
 * The layers of a stream, read in either of two ways. A table of several
 * number columns is wide: each row a layer, each column a step - products
 * down, months across. Where every column header has levels, as a
 * crossjoin across the columns gives them - Drink - Q1, Drink - Q2 - its
 * last level is the step and the levels before it join the row's layer.
 * Otherwise a label with levels is long: its last level is the step, the
 * levels before it the layer, the value column the amount - Drink - 1,
 * Drink - 2, Food - 1.
 */
export function layersOf(context: Context): Layers | undefined {
  const { table, columns, look } = context
  const separator = look.separator || ' - '
  const named = columnNamed(table, look.valueColumn)
  const amounts = new Map<string, Map<string, number>>()
  const add = (layer: string, step: string, cell: unknown) => {
    const byStep = amounts.get(layer) ?? new Map<string, number>()
    byStep.set(step, (byStep.get(step) ?? 0) + Math.max(0, toNumber(cell) ?? 0))
    amounts.set(layer, byStep)
  }
  if (named === undefined && columns.numbers.length > 1) {
    const headers = columns.numbers.map((column) => context.headerLevels(column))
    if (headers.every((levels) => levels.length > 1)) {
      // One row is what a measure on the other axis gives; its name, the same for every layer, says nothing.
      const own = table.rows.length > 1
      for (const row of table.rows) {
        const label = context.label(row)
        columns.numbers.forEach((column, index) => {
          const levels = headers[index]
          const layer = [...(own && label ? [label] : []), ...levels.slice(0, -1)].join(separator)
          add(layer, levels[levels.length - 1], row[column])
        })
      }
    } else {
      return {
        steps: columns.numbers.map((column) => table.headers[column]),
        layers: table.rows.map((row) => ({
          name: context.label(row),
          values: columns.numbers.map((column) => Math.max(0, toNumber(row[column]) ?? 0)),
        })),
      }
    }
  } else {
    const value = named ?? columns.numbers[0]
    if (value === undefined) return undefined
    for (const row of table.rows) {
      const path = context.path(row)
      if (path.length < 2) continue
      add(path.slice(0, -1).join(separator), path[path.length - 1], row[value])
    }
  }
  const steps = stepsIn([...amounts.values()].map((byStep) => [...byStep.keys()]))
  return {
    steps,
    layers: [...amounts].map(([name, byStep]) => ({ name, values: steps.map((step) => byStep.get(step) ?? 0) })),
  }
}

/**
 * The steps in the order the layers pass through them. NonEmpty leaves out
 * the steps a layer has nothing in, so the first layer alone may start late
 * or skip one - Q1, Q3, Q4 - and the step it skipped turns up after the
 * others. Each layer's own order is kept, and where no layer says which of
 * two steps comes first, the one seen first does.
 */
function stepsIn(orders: string[][]): string[] {
  const seen: string[] = []
  const before = new Map<string, Set<string>>()
  for (const order of orders) {
    order.forEach((step, index) => {
      if (!before.has(step)) {
        seen.push(step)
        before.set(step, new Set())
      }
      if (index > 0 && order[index - 1] !== step) before.get(step)!.add(order[index - 1])
    })
  }
  const steps: string[] = []
  const placed = new Set<string>()
  while (steps.length < seen.length) {
    const next = seen.find((step) => !placed.has(step) && [...before.get(step)!].every((earlier) => placed.has(earlier)))
    // Layers that disagree on the order leave no step free: the first one not yet placed goes next.
    const step = next ?? seen.find((each) => !placed.has(each))!
    steps.push(step)
    placed.add(step)
  }
  return steps
}

/**
 * How many lines a tooltip has for layers, in a tile and in a small one; past that the last one counts the rest.
 * The widget clips what leaves the tile, and a tile that is not small may be no more than 240 pixels high:
 * eleven lines and the step above them are what fits there.
 */
const LISTED = 11
const LISTED_SMALL = 6

/** Past this many layers the lines between them would cover the thin ones: they are left out. */
const OUTLINED = 40

export function stream(context: Context): Drawing {
  if (!context.columns.numbers.length) return { problem: 'needsNumbers' }
  const found = layersOf(context)
  if (!found || found.steps.length < 2 || !found.layers.length) return { problem: 'needsSteps' }
  const { steps } = found
  // A layer with nothing in it has no width to show, only a label stacked on its neighbours'.
  const layers = found.layers.filter((layer) => layer.values.some((value) => value > 0))
  if (!layers.length) return { problem: 'noValues' }
  const option = context.base()
  option.tooltip.trigger = 'axis'
  option.tooltip.axisPointer = { type: 'line', lineStyle: { color: withAlpha(context.text, 0.5), width: 1 } }
  option.tooltip.formatter = (items: { value: [number, number, string]; color: string }[]) => {
    if (!items.length) return ''
    const step = steps[Math.round(items[0].value[0])] ?? ''
    const present = [...items].filter((item) => item.value[1] > 0).sort((a, b) => b.value[1] - a.value[1])
    // Hundreds of products would run the tooltip off the tile: the largest are named, the rest counted.
    const room = context.look.small ? LISTED_SMALL : LISTED
    const named = present.length > room ? room - 1 : present.length
    const lines = present
      .slice(0, named)
      .map((item) => `<span style="color:${item.color}">●</span> ${escape(item.value[2])} <b>${context.format(item.value[1])}</b>`)
    if (named < present.length) lines.push(`… +${context.format(present.length - named)}`)
    return [`<b>${escape(step)}</b>`, ...lines].join('<br/>')
  }
  option.singleAxis = {
    type: 'value',
    min: 0,
    max: steps.length - 1,
    interval: every(steps.length),
    top: context.look.title ? 44 : 16,
    bottom: 36,
    left: 24,
    right: 24,
    axisLabel: { color: context.text, formatter: (index: number) => steps[index] ?? '' },
    axisLine: { lineStyle: { color: withAlpha(context.text, 0.45) } },
    axisTick: { lineStyle: { color: withAlpha(context.text, 0.45) } },
    splitLine: { show: true, lineStyle: { color: context.faint } },
    // The river keeps one shape per layer under the index of a point, so the step under the
    // pointer would light up whichever layer has that number: the hovered layer lights itself.
    axisPointer: { show: true, label: { show: false }, triggerEmphasis: false },
  }
  option.series = [
    {
      type: 'themeRiver',
      data: layers.flatMap((layer) => layer.values.map((value, step) => [step, value, layer.name])),
      label: { show: context.look.showLabels, color: context.text },
      labelLayout: { hideOverlap: true },
      emphasis: { focus: 'self', itemStyle: { shadowBlur: 12, shadowColor: 'rgba(0, 0, 0, 0.25)' } },
      itemStyle: { borderColor: context.gap, borderWidth: layers.length > OUTLINED ? 0 : 0.5 },
    },
  ]
  return { option }
}
