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
import { brightness, type Palette, withAlpha } from '../palettes'
import { type Context, escape, type Option, type Drawing } from '../context'

/** One bar of a waterfall: from where it starts to where it ends. */
export interface Step {
  name: string
  from: number
  to: number
  total: boolean
}

/**
 * The bars of a waterfall, read in either of two ways. With two or more
 * number columns and none named, it is a bridge from the first column to
 * the last: their totals stand at either end, and each row is the change
 * between - departments from Q1 to Q4. Otherwise each row adds its value
 * of the value column to the running total, which stands at the end.
 *
 * A row whose cells are all empty is left out: a cube answers empty where
 * nobody sold anything, and a flat bar for it only says nothing at length.
 * Where every row is empty there are no steps at all.
 */
export function stepsOf(context: Context): Step[] | undefined {
  const { table, columns, look } = context
  const named = columnNamed(table, look.valueColumn)
  const steps: Step[] = []
  let level = 0
  const move = (name: string, by: number) => {
    steps.push({ name, from: level, to: level + by, total: false })
    level += by
  }
  if (named === undefined && columns.numbers.length > 1) {
    const first = columns.numbers[0]
    const last = columns.numbers[columns.numbers.length - 1]
    const rows = table.rows.filter((row) => toNumber(row[first]) !== null || toNumber(row[last]) !== null)
    if (!rows.length) return []
    const start = rows.reduce((sum, row) => sum + (toNumber(row[first]) ?? 0), 0)
    steps.push({ name: table.headers[first], from: 0, to: start, total: true })
    level = start
    for (const row of rows) move(context.label(row), (toNumber(row[last]) ?? 0) - (toNumber(row[first]) ?? 0))
    steps.push({ name: table.headers[last], from: 0, to: level, total: true })
    return steps
  }
  const value = named ?? columns.numbers[0]
  if (value === undefined) return undefined
  const rows = table.rows.filter((row) => toNumber(row[value]) !== null)
  if (!rows.length) return []
  for (const row of rows) move(context.label(row), toNumber(row[value])!)
  steps.push({ name: table.headers[value], from: 0, to: level, total: true })
  return steps
}

/**
 * The colour of the totals: the first of the palette's set that cannot be
 * taken for a rise or a fall, nor sinks into the board. The first of the
 * set itself is often one of the two - red in sunset, green in forest - and
 * a total that looks like a fall reads as one; the darkest grey of mono
 * vanishes on a dark board. Where no colour is far enough, the farthest.
 */
export function totalColourOf(palette: Palette, ground?: string): string {
  const rgb = (colour: string) => {
    const hex = colour.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
    if (hex) return hex.slice(1).map((part) => parseInt(part, 16))
    const rgba = colour.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i)
    return rgba ? rgba.slice(1).map(Number) : undefined
  }
  const apart = (a: string, b: string) => {
    const [x, y] = [rgb(a), rgb(b)]
    return x && y ? Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]) : Infinity
  }
  const others = ground ? [palette.rise, palette.fall, ground] : [palette.rise, palette.fall]
  const distance = (colour: string) => (rgb(colour) ? Math.min(...others.map((other) => apart(colour, other))) : 0)
  const far = palette.set.find((colour) => distance(colour) >= 70)
  return far ?? palette.set.reduce((best, colour) => (distance(colour) > distance(best) ? colour : best), palette.set[0])
}

export function floorOf(steps: Step[], small = false): number {
  const levels = steps.flatMap((step) => (step.total ? [step.to] : [step.from, step.to]))
  const low = Math.min(...levels)
  const high = Math.max(...levels)
  if (low <= 0 || high <= low || low < (high - low) * 2) return Math.min(0, low)
  const span = high - low
  const below = low - span * 0.25
  // Rounded in steps of the span the bars cover, not of the floor itself:
  // from 132,666 to 139,628 a floor rounded to 100,000 would leave the
  // changes a sliver at the top, where 130,000 leaves them most of the height.
  // The coarsest step that still leaves them half of it - a third in a small
  // tile, whose few lines lie far apart - so the floor is likely one of the
  // axis' own lines and its number does not crowd the next.
  const unit = 10 ** Math.floor(Math.log10(span))
  const floors = [5, 2, 1].map((times) => Math.floor(below / (unit * times)) * unit * times)
  const floor = floors.find((each) => each >= low - span * (small ? 2 : 1)) ?? floors[floors.length - 1]
  // Steps of a tenth or a hundredth are not exact in binary; 6.1499999 would stand at the axis.
  return Number(floor.toPrecision(12))
}

export function waterfall(context: Context): Drawing {
  const steps = stepsOf(context)
  if (!steps) return { problem: 'needsNumbers' }
  if (!steps.length) return { problem: 'noValues' }
  const { palette, look, format } = context
  const floor = floorOf(steps, look.small)
  const signed = (value: number) => (value > 0 ? `+${format(value)}` : format(value))
  const total = totalColourOf(palette, context.gap)
  const colourOf = (step: Step) => (step.total ? total : step.to >= step.from ? palette.rise : palette.fall)
  // A bar hardly brighter or darker than the board - mono's dark grey rise
  // on a dark board - is drawn with an edge, or the rises are all but lost.
  const ground = brightness(context.gap)
  const edgeOf = (fill: string) =>
    Math.abs(brightness(fill) - ground) < 60 ? { stroke: withAlpha(context.text, 0.55), lineWidth: 1 } : {}
  const labels = steps.map((step) => (step.total ? format(step.to) : signed(step.to - step.from)))
  // Roughly how wide the longest label is at 11px; where the bars are
  // narrower than that, the labels would run into each other and none is drawn.
  const labelWidth = Math.max(...labels.map((label) => label.length)) * 6.5
  // Names along the axis: every one where they fit, else every n-th, but
  // always the totals at either end, and never one crowding the last.
  const last = steps.length - 1
  const nth = Math.max(1, Math.ceil(steps.length / (look.small ? 8 : 30)))
  const named = (index: number) => index === 0 || index === last || (index % nth === 0 && last - index >= nth)
  const rotated = steps.length > (look.small ? 3 : 8)

  const option = context.base()
  option.tooltip.trigger = 'item'
  option.tooltip.formatter = (p: { dataIndex: number }) => {
    const step = steps[p.dataIndex]
    if (!step) return ''
    if (step.total) return `${escape(step.name)}<br/><b>${format(step.to)}</b>`
    return `${escape(step.name)}<br/>${escape(look.words.change)}: <b>${signed(step.to - step.from)}</b><br/>${escape(look.words.runningTotal)}: ${format(step.to)}`
  }
  option.grid = { left: 8, right: 16, top: look.title ? 44 : 20, bottom: 8, containLabel: true }
  option.xAxis = {
    type: 'category',
    data: steps.map((step) => step.name),
    axisLabel: {
      color: context.text,
      interval: (index: number) => named(index),
      // Left to itself ECharts drops an end label that touches its turned neighbour - and the ends are the totals.
      showMinLabel: true,
      showMaxLabel: true,
      rotate: rotated ? 40 : 0,
      width: rotated ? (look.small ? 70 : 150) : 140,
      // Standing upright a long name has room for a second line; turned, it is cut.
      overflow: rotated ? 'truncate' : 'break',
    },
    axisLine: { lineStyle: { color: withAlpha(context.text, 0.45) } },
    axisTick: { show: false },
  }
  option.yAxis = {
    type: 'value',
    // Below zero the lowest level is no round number; there the axis finds its own, which takes in zero anyway.
    min: floor < 0 ? undefined : floor,
    // A small tile has room for few lines across; five would stack their numbers on top of each other.
    splitNumber: look.small ? 3 : 5,
    axisLabel: { color: context.text, formatter: (v: number) => format(v) },
    splitLine: { lineStyle: { color: context.faint } },
  }
  option.series = [
    {
      type: 'custom',
      data: steps.map((step, index) => [index, step.from, step.to]),
      encode: { x: 0, y: [1, 2] },
      renderItem: (
        _params: unknown,
        api: { value(dimension: number): number; coord(point: number[]): number[]; size(point: number[]): number[] },
      ) => {
        const index = api.value(0)
        const step = steps[index]
        const band = api.size([1, 0])[0]
        // Hundreds of rows leave less than a pixel to a bar, and a bar that
        // thin is not drawn at all - the totals at the ends vanish with the rest.
        const width = Math.max(1, band * 0.62)
        const [x, top] = api.coord([index, Math.max(step.from, step.to, floor)])
        const [, bottom] = api.coord([index, Math.max(Math.min(step.from, step.to), floor)])
        const children: Option[] = [
          {
            type: 'rect',
            shape: { x: x - width / 2, y: top, width, height: Math.max(1, bottom - top), r: 3 },
            style: { fill: colourOf(step), ...edgeOf(colourOf(step)) },
          },
        ]
        if (look.showLabels && labelWidth <= band * 1.15) {
          children.push({
            type: 'text',
            style: {
              text: labels[index],
              x,
              y: top - 4,
              align: 'center',
              verticalAlign: 'bottom',
              fill: context.text,
              font: '11px sans-serif',
            },
          })
        }
        // A thin line on to the next bar, at the level this one leaves - where
        // there is a gap to draw it in; without one the lines only blur the bars.
        if (index + 1 < steps.length && band - width >= 2) {
          const [, level] = api.coord([index, Math.max(step.to, floor)])
          children.push({
            type: 'line',
            shape: { x1: x + width / 2, y1: level, x2: x + band - width / 2, y2: level },
            style: { stroke: withAlpha(context.text, 0.35), lineWidth: 1, lineDash: [3, 3] },
          })
        }
        return { type: 'group', children }
      },
    },
  ]
  return { option }
}
