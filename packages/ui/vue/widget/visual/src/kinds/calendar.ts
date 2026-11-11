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

import { toNumber } from '../table'
import { withAlpha } from '../palettes'
import { type Context, escape, type Drawing, type Option } from '../context'

/** A label as a day, yyyy-mm-dd, or undefined where it is none. */
export function dayOf(cell: unknown): string | undefined {
  const pad = (n: number) => String(n).padStart(2, '0')
  const valid = (y: number, m: number, d: number) => {
    const date = new Date(Date.UTC(y, m - 1, d))
    return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d ? `${y}-${pad(m)}-${pad(d)}` : undefined
  }
  if (cell instanceof Date) return Number.isNaN(cell.getTime()) ? undefined : valid(cell.getFullYear(), cell.getMonth() + 1, cell.getDate())
  if (typeof cell !== 'string') return undefined
  const text = cell.trim()
  let match = text.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/)
  if (match) return valid(+match[1], +match[2], +match[3])
  match = text.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})/)
  if (match) return valid(+match[3], +match[2], +match[1])
  /*
   * Anything else the browser reads as a date, as long as it names a year,
   * a month in words and the day. The browser reads a year alone, a month
   * ("Mar 1997") or a member with a year in its name ("Drink 2000") as the
   * first of it, and a calendar of years drawn as single days says nothing.
   */
  if (!/\d{4}/.test(text) || !/[a-z]{3}/i.test(text)) return undefined
  const parsed = new Date(text)
  if (Number.isNaN(parsed.getTime())) return undefined
  const named = (text.match(/\b\d{1,2}\b/g) ?? []).map(Number)
  return named.includes(parsed.getDate()) ? valid(parsed.getFullYear(), parsed.getMonth() + 1, parsed.getDate()) : undefined
}

/** The most years drawn at once; a longer series shows its latest. */
export const YEARS = 4

export function names(locale: string, kind: 'month' | 'weekday', width: 'short' | 'narrow' = kind === 'month' ? 'short' : 'narrow'): string[] {
  try {
    if (kind === 'month') {
      const format = new Intl.DateTimeFormat(locale || undefined, { month: width })
      return Array.from({ length: 12 }, (_, m) => format.format(new Date(2020, m, 1)))
    }
    // 5 January 2020 was a Sunday, which is where ECharts starts counting.
    const format = new Intl.DateTimeFormat(locale || undefined, { weekday: width })
    return Array.from({ length: 7 }, (_, d) => format.format(new Date(2020, 0, 5 + d)))
  } catch {
    return []
  }
}

/*
 * What the calendars need around them, in pixels: the title above them all,
 * the month names above each, the scale below them all.
 */
const TITLE = 30
const MONTHS = 20
const SCALE = 50
const EDGE = 4
/* Between two calendars, where the second has no month names above it. */
const GAP = 6

/** The heights a layout is worked out for; a tile between two takes the lower one's. */
export const HEIGHTS = [1000, 800, 640, 500, 400, 320, 260, 200, 150, 100]

/**
 * Where each calendar stands in a tile of a given height, as shares of it,
 * and which of its labels still fit. ECharts lays a calendar out in
 * percentages or in pixels but not both, while the room the labels take is
 * fixed in pixels: so the layout is worked out for a few heights, and a
 * media query hands each tile the one for the next height below its own.
 */
export function layout(height: number, years: number, title: boolean, scale: boolean, weekdays: string[]): Option[] {
  const above = title ? TITLE : EDGE
  const below = scale ? SCALE : EDGE
  const room = height - above - below
  // Where the years are too many for the height, only the first names its months: they fall alike enough in each.
  const named = (room - years * MONTHS) / years >= 28
  const gap = named ? MONTHS : GAP
  const each = Math.max(4, (room - MONTHS - gap * (years - 1)) / years)
  const cell = each / 7
  const share = (px: number) => `${Math.round((px / height) * 1000) / 10}%`
  // A row of days needs a line of text to be named; where it has half a line, every other one is.
  const days = cell >= 14 ? weekdays : weekdays.map((day, d) => (d % 2 ? day : ''))
  return Array.from({ length: years }, (_, i) => ({
    top: share(above + MONTHS + (gap + each) * i),
    height: share(each),
    monthLabel: { show: named || i === 0 },
    dayLabel: { show: cell >= 6, fontSize: cell >= 14 ? 12 : 10, ...(weekdays.length ? { nameMap: days } : {}) },
    yearLabel: { show: each >= 24, fontSize: each >= 40 ? 14 : 10, margin: cell >= 6 ? 36 : 8 },
    // ECharts draws a day inside its border, so a wide border leaves a small day nothing.
    itemStyle: { borderWidth: cell < 8 ? thin(cell) : 2 },
  }))
}

const thin = (cell: number) => (cell >= 4 ? 1 : 0.5)

/*
 * The widths below which a month takes its first letter, and then no name
 * at all. Of a width, 80 pixels go to the labels and 53 weeks share the rest:
 * below NARROW a day is less than 6.5 pixels wide, below THIN less than 4.
 */
const NARROW = 425
const THIN = 292
const BARE = 213

export function calendar(context: Context): Drawing {
  const { table, columns, look } = context
  const value = context.column(look.valueColumn, columns.numbers[0])
  if (value === undefined) return { problem: 'needsNumbers' }
  const days = new Map<string, number>()
  let dated = false
  for (const row of table.rows) {
    const day = columns.labels.map((column) => dayOf(row[column])).find(Boolean)
    const amount = toNumber(row[value])
    dated ||= Boolean(day)
    if (!day || amount === null) continue
    days.set(day, (days.get(day) ?? 0) + amount)
  }
  // Days but no number beside any: the settings name a column that has none, such as the days themselves.
  if (!days.size) return { problem: dated ? 'needsNumbers' : 'needsDates' }

  const years = [...new Set([...days.keys()].map((day) => day.slice(0, 4)))].sort().slice(-YEARS)
  const drawn = [...days].filter(([day]) => years.includes(day.slice(0, 4)))
  // The scale spans the days drawn, not those of years left out.
  const values = drawn.map(([, amount]) => amount)
  const months = names(look.locale, 'month')
  const letters = names(look.locale, 'month', 'narrow')
  const weekdays = names(look.locale, 'weekday')
  const at = (height: number) => layout(height, years.length, Boolean(look.title), look.showScale, weekdays)

  const option = context.base()
  option.tooltip.formatter = (p: { value: [string, number] }) => {
    let shown = p.value[0]
    try {
      shown = new Intl.DateTimeFormat(look.locale || undefined, { dateStyle: 'medium' }).format(new Date(`${p.value[0]}T00:00:00`))
    } catch {
      /* the day as it is written */
    }
    // Named, since the value column may be any of several measures.
    return `${escape(shown)}<br/>${escape(table.headers[value])}: <b>${context.format(p.value[1])}</b>`
  }
  option.visualMap = context.scale(Math.min(...values), Math.max(...values), {
    orient: 'horizontal',
    top: undefined,
    right: undefined,
    left: 'center',
    bottom: 4,
    itemWidth: 12,
    itemHeight: look.small ? 100 : 160,
  })
  /*
   * One calendar and one series per year drawn. An answer with another
   * number of years is of another shape and drawn afresh (see shapeOf), so
   * none of a longer answer's calendars stays behind.
   */
  option.calendar = at(HEIGHTS[0]).map((place, i) => ({
    range: years[i],
    ...place,
    left: 56,
    right: 24,
    cellSize: ['auto', 'auto'],
    splitLine: { show: true, lineStyle: { color: withAlpha(context.text, 0.35), width: 1 } },
    itemStyle: { color: withAlpha(context.text, 0.04), borderWidth: 2, borderColor: context.gap, ...place.itemStyle },
    yearLabel: { ...place.yearLabel, color: context.text },
    monthLabel: { ...place.monthLabel, color: context.text, ...(months.length ? { nameMap: months } : {}) },
    dayLabel: { ...place.dayLabel, color: withAlpha(context.text, 0.7), firstDay: 1 },
  }))
  /*
   * ECharts merges the queries a tile meets into what it shows and never
   * goes back to the option itself: a tile that grows past the last query
   * it met would keep that one's layout. So every tile meets one query for
   * its height and one for its width, each naming all it changes.
   * The smallest height last, so that of all the queries a tile meets, it wins.
   */
  const heights: Option[] = [
    { query: { minHeight: HEIGHTS[0] }, option: { calendar: at(HEIGHTS[0]) } },
    ...HEIGHTS.slice(1).map((height, i) => ({
      query: { maxHeight: HEIGHTS[i] - 1 },
      option: { calendar: at(height) },
    })),
  ]
  const widths: Option[] = [
    // The border and whether months are named at all come back with the height's layout.
    { query: { minWidth: NARROW }, option: { calendar: years.map(() => ({ monthLabel: { fontSize: 12, nameMap: months.length ? months : 'EN' } })) } },
    {
      query: { maxWidth: NARROW - 1 },
      option: { calendar: years.map(() => ({ monthLabel: { fontSize: 10, ...(letters.length ? { nameMap: letters } : {}) }, itemStyle: { borderWidth: thin(6) } })) },
    },
    { query: { maxWidth: THIN - 1 }, option: { calendar: years.map(() => ({ itemStyle: { borderWidth: thin(3) } })) } },
    { query: { maxWidth: BARE - 1 }, option: { calendar: years.map(() => ({ monthLabel: { show: false } })) } },
  ]
  option.media = [...heights, ...widths]
  option.series = years.map((year, i) => ({
    type: 'heatmap',
    coordinateSystem: 'calendar',
    calendarIndex: i,
    data: drawn.filter(([day]) => day.startsWith(year)).map(([day, amount]) => [day, amount]),
    itemStyle: { borderRadius: 3 },
    emphasis: { itemStyle: { borderColor: context.text, borderWidth: 1 } },
  }))
  return { option }
}
