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
import type { Option } from '../drawing'
import { option, problem } from './fixtures'
import { PALETTES } from '../palettes'
import { totalColourOf } from '../kinds/waterfall'

describe('the waterfall', () => {
  /* The bars as from, to and whether each is a total. */
  const bars = (drawn: Option) => drawn.series[0].data.map(([, from, to]: number[]) => [from, to])

  it('bridges the first column to the last: totals at the ends, the change of each row between', () => {
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', 100, 130], ['Food', 900, 860]] }
    const drawn = option('waterfall', table)
    expect(drawn.xAxis.data).toEqual(['Q1', 'Drink', 'Food', 'Q4'])
    expect(bars(drawn)).toEqual([[0, 1000], [1000, 1030], [1030, 990], [0, 990]])
  })

  it('adds up one column from zero where the settings name it, the total at the end', () => {
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', 100, 130], ['Food', -40, 860]] }
    const drawn = option('waterfall', table, { valueColumn: 'q1' })
    expect(bars(drawn)).toEqual([[0, 100], [100, 60], [0, 60]])
    expect(drawn.yAxis.min).toBe(0)
  })

  it('starts its axis below the lowest level where every bar stands far above zero', () => {
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', 60000, 61000], ['Food', 4000, 3500]] }
    const floor = option('waterfall', table).yAxis.min
    expect(floor).toBeGreaterThan(0)
    expect(floor).toBeLessThanOrEqual(63500)
  })

  it('rounds its start to the span of the bars, so small changes on large totals keep most of the height', () => {
    const table = {
      headers: ['Caption', 'Q1', 'Q2'],
      rows: [['Drink', 12000, 12327], ['Food', 100000, 94175], ['Non-Consumable', 27628, 26164]],
    }
    // The totals stand at 139,628 and 132,666; a start at 100,000 would leave the changes a fifth of the height.
    expect(option('waterfall', table).yAxis.min).toBe(130000)
  })

  it('starts on a step coarse enough to be a line of the axis, and exact where the numbers are small', () => {
    // Prices from 6.198 to 6.292: in hundredths the start would be 6.17, a line apart from 6.18.
    const prices = { headers: ['Caption', 'Q1', 'Q2'], rows: [['Drink', 2, 2.08], ['Food', 2.1, 2.11], ['Other', 2.098, 2.089]] }
    expect(option('waterfall', prices).yAxis.min).toBe(6.15)
    // From 66,291 to 72,024 a start at 60,000 would take a third of the height from the bars; 64,000 does not.
    const units = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', 20000, 21000], ['Food', 46291, 51024]] }
    expect(option('waterfall', units).yAxis.min).toBe(64000)
    // A small tile draws three lines, 3,000 apart from 64,000; 60,000 lies on one of its lines.
    expect(option('waterfall', units, { small: true }).yAxis.min).toBe(60000)
  })

  it('says the change and the running total in the words of the board', () => {
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', 100, 130]] }
    const tip = option('waterfall', table).tooltip.formatter({ dataIndex: 1 })
    expect(tip).toContain('&lt;change&gt;: <b>+30</b>')
    expect(tip).toContain('&lt;runningTotal&gt;: 130')
  })

  /* What renderItem draws for one bar, in a band of the given width. */
  const drawnBar = (drawn: Option, index: number, band: number) =>
    drawn.series[0].renderItem(
      {},
      { value: () => index, coord: ([x, y]: number[]) => [x * band, 400 - y / 10], size: () => [band, 0] },
    ).children as { type: string; shape?: { width?: number }; style?: { text?: string; fill?: string; stroke?: string } }[]

  it('leaves out rows the cube answered empty, and says so where every row is', () => {
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Canada', null, null], ['USA', 100, 130]] }
    expect(option('waterfall', table).xAxis.data).toEqual(['Q1', 'USA', 'Q4'])
    expect(problem('waterfall', { headers: ['Caption', 'Q1'], rows: [['Drink', null]] })).toBe('noValues')
    expect(problem('waterfall', { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', null, null]] })).toBe('noValues')
  })

  it('lets the axis find a round start of its own where the levels go below zero', () => {
    const table = { headers: ['Caption', 'Change'], rows: [['BC', -3000], ['DF', -19342], ['CA', 384]] }
    expect(option('waterfall', table).yAxis.min).toBeUndefined()
  })

  it('names along the axis every n-th of many rows, always both totals, and leaves out labels that cannot fit', () => {
    const rows = Array.from({ length: 78 }, (_, i) => [`City ${i}`, 1000 + i])
    const drawn = option('waterfall', { headers: ['Caption', 'Unit Sales'], rows })
    const shown = drawn.xAxis.data.map((_: string, i: number) => drawn.xAxis.axisLabel.interval(i))
    expect(shown[0]).toBe(true)
    expect(shown[78]).toBe(true)
    // ...and ECharts is told not to drop them for touching their neighbours.
    expect([drawn.xAxis.axisLabel.showMinLabel, drawn.xAxis.axisLabel.showMaxLabel]).toEqual([true, true])
    expect(shown.filter(Boolean).length).toBeLessThanOrEqual(32)
    expect(drawnBar(drawn, 5, 11).some((child) => child.type === 'text')).toBe(false)
    expect(drawnBar(drawn, 5, 80).some((child) => child.type === 'text')).toBe(true)
  })

  it('names every row where there are few, and turns them, thins the scale and shortens the names, in a small tile', () => {
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['A', 1, 2], ['B', 2, 3], ['C', 3, 4], ['D', 4, 5]] }
    const drawn = option('waterfall', table)
    expect(drawn.xAxis.data.every((_: string, i: number) => drawn.xAxis.axisLabel.interval(i))).toBe(true)
    expect(drawn.xAxis.axisLabel.rotate).toBe(0)
    expect(option('waterfall', table, { small: true }).xAxis.axisLabel.rotate).toBe(40)
    expect(option('waterfall', table, { small: true }).yAxis.splitNumber).toBeLessThan(drawn.yAxis.splitNumber)
    const many = { headers: ['Caption', 'Q1', 'Q4'], rows: Array.from({ length: 12 }, (_, i) => [`Row ${i}`, i, i + 1]) }
    expect(option('waterfall', many, { small: true }).xAxis.axisLabel.width).toBeLessThan(option('waterfall', many).xAxis.axisLabel.width)
  })

  it('draws the totals in a colour no one takes for a rise or a fall, in every palette', () => {
    expect(totalColourOf(PALETTES.aurora)).toBe(PALETTES.aurora.set[0])
    for (const palette of Object.values(PALETTES)) {
      const total = totalColourOf(palette)
      expect(total).not.toBe(palette.rise)
      expect(total).not.toBe(palette.fall)
    }
    expect(totalColourOf(PALETTES.sunset)).not.toBe('#ff6b6b')
    // The darkest grey of mono would vanish on a dark board.
    expect(totalColourOf(PALETTES.mono, 'rgba(18, 22, 30, 0.9)')).not.toBe('#212529')
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', 100, 130]] }
    const fill = drawnBar(option('waterfall', table, { palette: 'sunset' }), 0, 80)[0].style?.fill
    expect(fill).toBe(totalColourOf(PALETTES.sunset))
  })

  it('keeps a bar and both totals in sight where hundreds of rows leave less than a pixel to each', () => {
    const rows = Array.from({ length: 1500 }, (_, i) => [`Product ${i}`, 50 + (i % 7)])
    const drawn = option('waterfall', { headers: ['Caption', 'Profit'], rows })
    const children = drawnBar(drawn, 1500, 0.6)
    expect(children[0].shape?.width).toBeGreaterThanOrEqual(1)
    // No room between the bars for a line on to the next.
    expect(drawnBar(drawn, 3, 0.6).some((child) => child.type === 'line')).toBe(false)
    expect(drawnBar(drawn, 3, 40).some((child) => child.type === 'line')).toBe(true)
  })

  it('gives an edge to the bars that would sink into the board, and to no other', () => {
    const table = { headers: ['Caption', 'Q1', 'Q4'], rows: [['Drink', 100, 130], ['Food', 900, 860]] }
    const dark = { palette: 'mono', textColor: 'rgb(230, 230, 230)' }
    // Mono's dark grey rise on a dark board.
    expect(drawnBar(option('waterfall', table, dark), 1, 80)[0].style?.stroke).toBeDefined()
    expect(drawnBar(option('waterfall', table, dark), 2, 80)[0].style?.stroke).toBeUndefined()
    for (const palette of ['aurora', 'ocean', 'sunset', 'forest', 'mono']) {
      for (const index of [0, 1, 2, 3]) expect(drawnBar(option('waterfall', table, { palette }), index, 80)[0].style?.stroke).toBeUndefined()
    }
  })

  it('leaves a turned name of a crossjoin room enough to tell its last level', () => {
    const rows = ['CA', 'OR', 'WA'].map((state, i) => [`Non-Consumable - ${state}`, 100 + i, 120 + i])
    const many = { headers: ['Caption', 'Q1', 'Q4'], rows: [...rows, ...rows.map(([name, a, b]) => [`${name} 2`, a, b]), ...rows.map(([name, a, b]) => [`${name} 3`, a, b])] }
    const axis = option('waterfall', many).xAxis.axisLabel
    expect(axis.rotate).toBe(40)
    // About 6.5 pixels a letter at 12px.
    expect(axis.width).toBeGreaterThanOrEqual('Non-Consumable - WA'.length * 6.5)
  })
})
