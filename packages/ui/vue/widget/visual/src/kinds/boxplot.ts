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
import { brightness, isLight, withAlpha } from '../palettes'
import { type Context, escape, type Drawing } from '../context'

/** A group's samples, and the row each came from - an outlier is named. */
export interface Group {
  name: string
  samples: { value: number; label: string }[]
}

/**
 * The groups of a boxplot, read in either of two ways. Labels with levels
 * group by their first level, each row one sample of the value column -
 * CA - Los Angeles, CA - San Diego. Otherwise each number column is a
 * group and each row one sample in it: cities down, months across, a box
 * per month.
 */
export function groupsOf(context: Context): Group[] {
  const { table, columns, look } = context
  const paths = withoutConstantLevels(table.rows.map((row) => context.path(row)))
  const named = columnNamed(table, look.valueColumn)
  if (paths.some((path) => path.length > 1) && (named !== undefined || columns.numbers.length === 1)) {
    const value = named ?? columns.numbers[0]
    const groups = new Map<string, Group>()
    table.rows.forEach((row, index) => {
      const amount = toNumber(row[value])
      const path = paths[index]
      if (amount === null || !path.length) return
      const group = groups.get(path[0]) ?? { name: path[0], samples: [] }
      group.samples.push({ value: amount, label: path.slice(1).join(look.separator || ' - ') || path[0] })
      groups.set(path[0], group)
    })
    /*
     * A box of one sample each says nothing, and its name is only part of a
     * caption: the separator also stands inside captions such as $10K - $30K,
     * which are not levels. Then every row is one sample of a single box.
     */
    if (groups.size < 2 || [...groups.values()].some((group) => group.samples.length > 1)) return [...groups.values()]
  }
  const chosen = named !== undefined ? [named] : columns.numbers
  return chosen.map((column) => ({
    name: table.headers[column],
    samples: table.rows.flatMap((row, index) => {
      const amount = toNumber(row[column])
      return amount === null ? [] : [{ value: amount, label: paths[index].join(look.separator || ' - ') || context.label(row) }]
    }),
  }))
}

/**
 * The levels below the first that are the same in every row left out:
 * cities × {1997} would otherwise group by city, a box of one sample
 * each, flat lines that show no spread. The first level is kept, so the
 * cities of one state still make one box named after it.
 */
function withoutConstantLevels(paths: string[][]): string[][] {
  const depth = Math.min(...paths.map((path) => path.length))
  const constant = new Set<number>()
  for (let at = 1; at < depth && paths.length > 1; at++) {
    if (paths.every((path) => path[at] === paths[0][at])) constant.add(at)
  }
  return constant.size ? paths.map((path) => path.filter((_, at) => !constant.has(at))) : paths
}

/**
 * The five numbers of a box and what lies beyond its whiskers, by the usual
 * 1.5 × IQR rule. The whiskers stop short of an outlier, so the lowest and
 * highest values are kept apart from them: a tooltip that called a whisker's
 * end the highest value would contradict the dot drawn above it.
 */
export function summaryOf(values: number[]): {
  box: [number, number, number, number, number]
  beyond: number[]
  range: [number, number]
} {
  const sorted = [...values].sort((a, b) => a - b)
  const at = (share: number) => {
    const position = (sorted.length - 1) * share
    const below = Math.floor(position)
    const above = Math.ceil(position)
    return sorted[below] + (sorted[above] - sorted[below]) * (position - below)
  }
  const q1 = at(0.25)
  const median = at(0.5)
  const q3 = at(0.75)
  const reach = (q3 - q1) * 1.5
  const inside = sorted.filter((v) => v >= q1 - reach && v <= q3 + reach)
  return {
    box: [inside[0] ?? q1, q1, median, q3, inside[inside.length - 1] ?? q3],
    beyond: sorted.filter((v) => v < q1 - reach || v > q3 + reach),
    range: [sorted[0], sorted[sorted.length - 1]],
  }
}

export function boxplot(context: Context): Drawing {
  const groups = groupsOf(context).filter((group) => group.samples.length)
  // A column that holds nothing still counts as one of numbers: the query was right, its cells are empty.
  if (!groups.length) return { problem: context.columns.numbers.length ? 'noValues' : 'needsNumbers' }
  const { look, format, palette } = context
  const accent = palette.set[0]
  /*
   * The dots take a colour of their own. On a dark board one that is itself
   * dark - mono's grey - is barely seen there, and a dot is all an outlier
   * has: it takes the brightest colour of the set instead.
   */
  const fourth = palette.set[3 % palette.set.length]
  const dots = isLight(context.text) && brightness(fourth) < 100
    ? palette.set.reduce((best, colour) => (brightness(colour) > brightness(best) ? colour : best))
    : fourth
  const summaries = groups.map((group) => summaryOf(group.samples.map((sample) => sample.value)))
  const outliers = groups.flatMap((group, index) =>
    group.samples
      .filter((sample) => summaries[index].beyond.includes(sample.value))
      .map((sample) => ({ value: [index, sample.value], name: sample.label })),
  )

  const option = context.base()
  option.tooltip.trigger = 'item'
  option.tooltip.formatter = (p: { seriesType: string; dataIndex: number; name: string; value: number[] }) => {
    if (p.seriesType === 'scatter') return `${escape(groups[p.value[0]]?.name)} · ${escape(p.name)}<br/><b>${format(p.value[1])}</b>`
    const summary = summaries[p.dataIndex]
    if (!summary) return ''
    const { box, range } = summary
    const { words } = look
    const rows: [string, number][] = [
      [words.highest, range[1]],
      [words.upperQuartile, box[3]],
      [words.median, box[2]],
      [words.lowerQuartile, box[1]],
      [words.lowest, range[0]],
    ]
    return [`<b>${escape(groups[p.dataIndex].name)}</b>`, ...rows.map(([word, v]) => `${escape(word)}: ${format(v)}`)].join('<br/>')
  }
  option.grid = { left: 8, right: 16, top: look.title ? 44 : 20, bottom: 8, containLabel: true }
  option.xAxis = {
    type: 'category',
    data: groups.map((group) => group.name),
    // Every name while they fit; past that ECharts leaves out those that would run into each other, and the
    // tooltip still names each box. A small tile gets shorter names, or they take the height the boxes need.
    axisLabel: {
      color: context.text,
      interval: 'auto',
      rotate: groups.length > (look.small ? 4 : 8) ? 40 : 0,
      width: look.small ? 64 : 110,
      overflow: 'truncate',
    },
    axisLine: { lineStyle: { color: withAlpha(context.text, 0.45) } },
    axisTick: { show: false },
  }
  option.yAxis = {
    type: 'value',
    scale: true,
    splitNumber: look.small ? 3 : 5,
    axisLabel: { color: context.text, formatter: (v: number) => format(v) },
    splitLine: { lineStyle: { color: context.faint } },
  }
  option.series = [
    {
      type: 'boxplot',
      data: summaries.map((summary) => summary.box),
      boxWidth: ['30%', '60%'],
      itemStyle: { color: withAlpha(accent, 0.22), borderColor: accent, borderWidth: 1.5 },
      emphasis: { itemStyle: { color: withAlpha(accent, 0.4), borderColor: accent, borderWidth: 2 } },
    },
    {
      type: 'scatter',
      data: outliers,
      // In a small tile the boxes are a few pixels wide, and dots of the full size would cover them.
      symbolSize: look.small ? 4 : 7,
      itemStyle: { color: dots, opacity: 0.85 },
    },
  ]
  return { option }
}
