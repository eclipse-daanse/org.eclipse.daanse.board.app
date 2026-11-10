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
 * ********************************************************************/


import { describe, expect, it } from 'vitest'
import { dayOf, HEIGHTS, layout, names, YEARS } from '../kinds/calendar'
import { shapeOf, type Option } from '../drawing'
import { SALES, option, problem } from './fixtures'

describe('the calendar', () => {
  it('reads the days written as ISO, as German dates and as the browser reads them', () => {
    expect(dayOf('2024-03-05')).toBe('2024-03-05')
    expect(dayOf('5.3.2024')).toBe('2024-03-05')
    expect(dayOf('2024/3/5 10:00')).toBe('2024-03-05')
    expect(dayOf('Drink')).toBeUndefined()
    expect(dayOf('2024-02-30')).toBeUndefined()
  })

  it('reads a day written in words, but not a year, a month or a member named after a year as the first of it', () => {
    expect(dayOf('5 March 2024')).toBe('2024-03-05')
    expect(dayOf('Tue, 05 Mar 2024 10:00:00')).toBe('2024-03-05')
    for (const caption of ['1997', 'Mar 1997', 'Drink 2000', '1997-03', '1997 - Q1']) expect(dayOf(caption)).toBeUndefined()
  })

  it('says so where the rows are years, not days', () => {
    expect(problem('calendar', { headers: ['Caption', 'Unit Sales'], rows: [['1997', '266773'], ['1998', null]] })).toBe('needsDates')
  })

  it('draws one calendar per year, each day as its value, summed where a day comes twice', () => {
    const table = {
      headers: ['Day', 'Visits'],
      rows: [['2023-12-31', 4], ['2024-01-01', 3], ['2024-01-01', 2]],
    }
    const drawn = option('calendar', table)
    expect(drawn.calendar.map((each: { range: string }) => each.range)).toEqual(['2023', '2024'])
    expect(drawn.series[1].data).toEqual([['2024-01-01', 5]])
    expect(drawn.calendar[0].dayLabel.firstDay).toBe(1)
  })

  it('names months in the language of the board', () => {
    const table = { headers: ['Day', 'Visits'], rows: [['2024-03-01', 1]] }
    expect(option('calendar', table, { locale: 'de' }).calendar[0].monthLabel.nameMap[2]).toMatch(/^Mär/)
  })

  it('says so where no label is a day', () => {
    expect(problem('calendar', SALES)).toBe('needsDates')
  })

  it('asks for numbers, not days, where the value column it is set to has no number', () => {
    const table = { headers: ['Caption', 'Day', 'Unit Sales'], rows: [['1 - 1', '1997-01-01', '348']] }
    expect(problem('calendar', table, { valueColumn: 'Day' })).toBe('needsNumbers')
  })

  it('spans its scale over the days it draws, not over those of the years it leaves out', () => {
    const rows = [['2018-06-01', 9000], ...['2019', '2020', '2021', '2022'].map((year) => [`${year}-06-01`, 10])]
    rows.push(['2022-06-02', 40])
    const drawn = option('calendar', { headers: ['Day', 'Visits'], rows })
    expect(drawn.calendar).toHaveLength(YEARS)
    expect([drawn.visualMap.min, drawn.visualMap.max]).toEqual([10, 40])
  })

  /* Where a layout puts its calendars and their names, in pixels of the height it is for. */
  const pixels = (height: number, years: number, title = true, scale = true) =>
    layout(height, years, title, scale, names('en', 'weekday')).map((each) => ({
      ...each,
      top: (parseFloat(each.top) / 100) * height,
      bottom: ((parseFloat(each.top) + parseFloat(each.height)) / 100) * height,
    }) as Option)

  it('keeps four years, their month names, the title and the scale apart in a small tile', () => {
    for (const height of [150, 180, 260, 400]) {
      const placed = pixels(height, 4)
      expect(placed[0].top).toBeGreaterThanOrEqual(30 + 20 - 1)
      placed.slice(1).forEach((each, i) => {
        const room = each.top - placed[i].bottom
        expect(room).toBeGreaterThanOrEqual(each.monthLabel.show ? 19 : 5)
      })
      expect(placed[3].bottom).toBeLessThanOrEqual(height - 50 + 1)
    }
    // Too low for each year to name its months, the first names them for all.
    expect(pixels(180, 4).map((each) => each.monthLabel.show)).toEqual([true, false, false, false])
    expect(pixels(800, 4).every((each) => each.monthLabel.show)).toBe(true)
  })

  it('names every weekday where a row has room for it, every other one where it has half, and none below', () => {
    const shown = (height: number, years: number) => {
      const { dayLabel } = layout(height, years, false, true, names('en', 'weekday'))[0]
      return dayLabel.show ? dayLabel.nameMap.filter(Boolean).length : 0
    }
    expect(shown(400, 1)).toBe(7)
    expect(shown(400, 4)).toBe(3)
    expect(shown(150, 4)).toBe(0)
  })

  it('thins the border a small day is drawn inside, so that it is not all border', () => {
    expect(layout(1000, 1, false, true, [])[0].itemStyle.borderWidth).toBe(2)
    expect(layout(150, 4, true, true, [])[0].itemStyle.borderWidth).toBeLessThan(2)
  })

  it('hands a tile the layout for the next height below its own, and short month names to a narrow one', () => {
    const drawn = option('calendar', { headers: ['Day', 'Visits'], rows: [['2023-05-01', 1], ['2024-05-01', 2]] })
    const heights = drawn.media.filter((each: { query: object }) => 'maxHeight' in each.query)
    expect(heights.map((each: { query: { maxHeight: number } }) => each.query.maxHeight + 1)).toEqual(HEIGHTS.slice(0, -1))
    expect(heights.at(-1).option.calendar).toEqual(layout(HEIGHTS.at(-1)!, 2, false, true, names('en', 'weekday')))
    const narrow = drawn.media.find((each: { query: { maxWidth?: number } }) => each.query.maxWidth === 424)
    expect(narrow.option.calendar[0].monthLabel.nameMap.slice(0, 3)).toEqual(['J', 'F', 'M'])
  })

  it('takes back the full layout when a tile grows past the queries a smaller one met', () => {
    const drawn = option('calendar', { headers: ['Day', 'Visits'], rows: [['2023-05-01', 1], ['2024-05-01', 2]] })
    // As ECharts does: the queries a tile meets, merged in order over what the last ones left.
    const meets = (query: Option, width: number, height: number) =>
      (query.minWidth ?? 0) <= width && width <= (query.maxWidth ?? Infinity) &&
      (query.minHeight ?? 0) <= height && height <= (query.maxHeight ?? Infinity)
    const merge = (into: Option, from: Option): Option => {
      for (const [key, value] of Object.entries(from)) {
        into[key] = value && typeof value === 'object' && !Array.isArray(value) ? merge({ ...(into[key] ?? {}) }, value) : value
      }
      return into
    }
    const shown = (width: number, height: number, from: Option[]) =>
      drawn.media
        .filter((each: { query: Option }) => meets(each.query, width, height))
        .reduce((calendars: Option[], each: { option: { calendar: Option[] } }) => calendars.map((one, i) => merge({ ...one }, each.option.calendar[i])), from)
    const small = shown(200, 150, drawn.calendar)
    expect(small[0].monthLabel.show).toBe(false)
    const grown = shown(1400, 1100, small)
    for (const [i, each] of grown.entries()) {
      expect(each.top).toBe(drawn.calendar[i].top)
      expect(each.height).toBe(drawn.calendar[i].height)
      expect(each.monthLabel).toMatchObject({ show: true, fontSize: 12, nameMap: drawn.calendar[i].monthLabel.nameMap })
      expect(each.itemStyle.borderWidth).toBe(2)
      expect(each.yearLabel).toMatchObject(drawn.calendar[i].yearLabel)
    }
  })

  it('leaves nothing of a longer answer behind: one with fewer years is of another shape, drawn afresh', () => {
    const rows = (years: string[]) => years.map((year) => [`${year}-06-01`, 1])
    const four = option('calendar', { headers: ['Day', 'Visits'], rows: rows(['2021', '2022', '2023', '2024']) })
    const one = option('calendar', { headers: ['Day', 'Visits'], rows: rows(['2024']) })
    expect([one.calendar.length, one.series.length]).toEqual([1, 1])
    expect([four.calendar.length, four.series.length]).toEqual([YEARS, YEARS])
    expect(shapeOf(one)).not.toBe(shapeOf(four))
    // Each year's media layout names as many calendars as the drawing has.
    expect(one.media.every((each: { option: { calendar: unknown[] } }) => each.option.calendar.length === 1)).toBe(true)
    expect(one.calendar[0].range).toBe('2024')
  })

  it('names the measure a day shows in its tooltip', () => {
    const drawn = option('calendar', { headers: ['Day', 'Unit Sales'], rows: [['1997-01-01', 348]] })
    expect(drawn.tooltip.formatter({ value: ['1997-01-01', 348] })).toContain('Unit Sales: <b>348</b>')
  })
})
