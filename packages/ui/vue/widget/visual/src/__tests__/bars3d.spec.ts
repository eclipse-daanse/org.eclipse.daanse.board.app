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
import { SALES, option, problem } from './fixtures'

describe('bars in 3D', () => {
  it('stand on a floor of rows and columns, as high as their value', () => {
    const drawn = option('bars3d')
    expect(drawn.xAxis3D.data).toEqual(['Drink', 'Food', 'Non-Consumable'])
    expect(drawn.yAxis3D.data).toEqual(['1997', '1998'])
    const bars = drawn.series[0].data.map((bar: { value: number[] }) => bar.value)
    expect(bars).toContainEqual([0, 0, 24597])
    expect(bars).toContainEqual([1, 1, 210000])
    // A cell nobody has is no bar, not a bar of nothing.
    expect(bars).toHaveLength(5)
  })

  it('colour by value from the floor to the highest bar, and turn only where asked', () => {
    const drawn = option('bars3d', SALES, { autoRotate: false, showScale: false })
    expect(drawn.visualMap).toMatchObject({ min: 0, max: 210000, show: false })
    expect(drawn.grid3D.viewControl.autoRotate).toBe(false)
  })

  it('say there is nothing to draw where the table has no numbers', () => {
    expect(problem('bars3d', { headers: ['Name'], rows: [['a'], ['b']] })).toBe('needsNumbers')
    expect(problem('bars3d', { headers: ['Name', 'Sales'], rows: [] })).toBe('noData')
  })

  it('say a query found nothing where every cell came back empty, not that numbers are missing', () => {
    // [Store].[Canada].Children by quarter: one store, no sales.
    const canada = { headers: ['Caption', 'Q1', 'Q2'], rows: [['BC', null, null]] }
    expect(problem('bars3d', canada)).toBe('noValues')
  })

  /* The names a category axis writes, the way echarts-gl asks for them: every one, the last included. */
  const written = (axis: { data: string[]; axisLabel: { formatter: (name: string, index: number) => string } }) =>
    axis.data.map((name, index) => axis.axisLabel.formatter(name, index)).filter(Boolean)

  it('write every n-th name along a long axis, and not the last on top of the one before', () => {
    // 23 departments: every third, 0 to 21. echarts hands 22 over as well.
    const rows = Array.from({ length: 23 }, (_, i) => [`Department ${i}`, i + 1])
    const drawn = option('bars3d', { headers: ['Caption', 'Q1'], rows })
    expect(drawn.xAxis3D.axisLabel.interval).toBe(2)
    expect(written(drawn.xAxis3D)).toEqual([0, 3, 6, 9, 12, 15, 18, 21].map((i) => `Department ${i}`))
    expect(written(drawn.yAxis3D)).toEqual(['Q1'])
  })

  it('cut a long crossjoined name in the middle, so its last level still tells neighbours apart', () => {
    const rows = [
      ['Non-Consumable - WA - F', 1],
      ['Non-Consumable - WA - M', 2],
    ]
    const drawn = option('bars3d', { headers: ['Caption', 'Q1'], rows })
    const [female, male] = drawn.xAxis3D.data.map((name: string, index: number) => drawn.xAxis3D.axisLabel.formatter(name, index))
    expect(female.length).toBeLessThanOrEqual(22)
    expect(female).toContain('…')
    expect(female.endsWith('WA - F')).toBe(true)
    expect(male.endsWith('WA - M')).toBe(true)
    // The tooltip names the bar in full.
    expect(drawn.tooltip.formatter({ value: [0, 0, 1] })).toContain('Non-Consumable - WA - F')
  })

  it('keep a square floor inside the tile, as wide corner to corner as the usual one', () => {
    // 4 quarters down, 30 product and state pairs across: the floor would be 200 by 200.
    const rows = ['Q1', 'Q2', 'Q3', 'Q4'].map((q) => [q, ...Array.from({ length: 30 }, (_, i) => i)])
    const headers = ['Caption', ...Array.from({ length: 30 }, (_, i) => `P${i}`)]
    const { grid3D } = option('bars3d', { headers, rows })
    expect(grid3D.boxWidth).toBe(grid3D.boxDepth)
    expect(Math.hypot(grid3D.boxWidth, grid3D.boxDepth)).toBeLessThanOrEqual(Math.hypot(200, 100) + 1)
    // Twice as many rows as columns is the usual floor, and stays as it was.
    const usual = { headers: ['Caption', '1997', '1998'], rows: [['a', 1, 2], ['b', 3, 4], ['c', 5, 6], ['d', 7, 8]] }
    expect(option('bars3d', usual).grid3D).toMatchObject({ boxWidth: 200, boxDepth: 100 })
  })

  it('make bars no wider than their slot, so a thousand rows are needles, not a wall', () => {
    const rows = Array.from({ length: 1000 }, (_, i) => [`Product ${i}`, i, i])
    const drawn = option('bars3d', { headers: ['Caption', 'Q1', 'Q2'], rows })
    expect(drawn.series[0].barSize[0]).toBeLessThan(drawn.grid3D.boxWidth / 1000)
    // A few rows keep the bars they had, and 23 departments by quarter stay square.
    expect(option('bars3d').series[0].barSize).toBe(16)
    const departments = Array.from({ length: 23 }, (_, i) => [`Department ${i}`, 1, 2, 3, 4])
    const square = option('bars3d', { headers: ['Caption', 'Q1', 'Q2', 'Q3', 'Q4'], rows: departments }).series[0].barSize
    expect(square).toBeCloseTo((0.7 * 200) / 23)
  })

  it('keep a thousand rows by one measure deep enough to be seen', () => {
    // [Employees].[Employee Id].Members by Org Salary: 1155 rows, one column.
    const rows = Array.from({ length: 1155 }, (_, i) => [`Employee ${i}`, i])
    const drawn = option('bars3d', { headers: ['Caption', 'Org Salary'], rows })
    const [width, depth] = drawn.series[0].barSize
    expect(width).toBeLessThan(drawn.grid3D.boxWidth / 1155)
    // A tenth of a unit square was nothing on screen; a slab along the one column is.
    expect(depth).toBe(16)
  })

  it('put the middle of a scale pale in the middle on zero, where values run from a loss to a gain', () => {
    const growth = { headers: ['Caption', 'Q1', 'Q2'], rows: [['Drink', -2803, 400], ['Food', 7070, 120]] }
    expect(option('bars3d', growth).visualMap).toMatchObject({ min: -7070, max: 7070 })
    // A scale running one way only keeps the whole of its range for the values there are.
    expect(option('bars3d', growth, { palette: 'ocean' }).visualMap).toMatchObject({ min: -2803, max: 7070 })
    // Without a loss nothing moves.
    expect(option('bars3d').visualMap).toMatchObject({ min: 0, max: 210000 })
  })

  it('run the scale up to the floor where every value is a loss, as it runs down to it where every one is a gain', () => {
    const losses = { headers: ['Caption', 'Loss'], rows: [['Drink', -24597], ['Food', -191940], ['Non-Consumable', -50236]] }
    expect(option('bars3d', losses).visualMap).toMatchObject({ min: -191940, max: 0 })
    expect(option('bars3d', losses, { palette: 'ocean' }).visualMap).toMatchObject({ min: -191940, max: 0 })
    // A single loss still spans a scale, rather than one a unit wide below it.
    expect(option('bars3d', { headers: ['Caption', 'Loss'], rows: [['Drink', -5]] }).visualMap).toMatchObject({ min: -5, max: 0 })
  })

  it('write no names along the floor of a small tile, and its heights only where no scale says them', () => {
    const drawn = option('bars3d', SALES, { small: true })
    expect(drawn.xAxis3D.axisLabel.show).toBe(false)
    expect(drawn.yAxis3D.axisLabel.show).toBe(false)
    expect(drawn.zAxis3D.axisLabel.show).toBe(false)
    expect(option('bars3d', SALES, { small: true, showScale: false }).zAxis3D.axisLabel.show).toBe(true)
    // The tooltip still names the bar.
    expect(drawn.tooltip.formatter({ value: [1, 1, 210000] })).toContain('Food · 1998')
    // A tile of the usual size writes them.
    // Said outright, since the widget merges the next drawing into a small tile's.
    expect(option('bars3d').xAxis3D.axisLabel.show).toBe(true)
    expect(option('bars3d').zAxis3D.axisLabel.show).toBe(true)
  })

  it('write the height the pointer marks the way the board writes numbers', () => {
    const drawn = option('bars3d', SALES, { locale: 'de' })
    expect(drawn.zAxis3D.axisPointer.label.formatter('2727.5', [0, 0, 2727.5])).toBe('2.727,5')
  })
})

