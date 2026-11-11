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
import { summaryOf } from '../kinds/boxplot'
import { SALES, option, problem } from './fixtures'

describe('the boxplot', () => {
  it('summarises by the usual five numbers, and leaves out of the whiskers what lies beyond 1.5 IQR', () => {
    expect(summaryOf([1, 2, 3, 4, 5])).toEqual({ box: [1, 2, 3, 4, 5], beyond: [], range: [1, 5] })
    expect(summaryOf([1, 2, 3, 4, 100]).beyond).toEqual([100])
    expect(summaryOf([1, 2, 3, 4, 100]).box[4]).toBe(4)
  })

  it('draws a box per column of numbers, its samples the rows', () => {
    const drawn = option('boxplot', SALES)
    expect(drawn.xAxis.data).toEqual(['1997', '1998'])
    expect(drawn.series[0].data[1]).toEqual([30010, 75007.5, 120005, 165002.5, 210000])
  })

  it('groups by the first level of a label, and names an outlier by the rest', () => {
    const rows = [['CA - A', 10], ['CA - B', 11], ['CA - C', 12], ['CA - D', 13], ['CA - E', 99], ['WA - F', 5]]
    const drawn = option('boxplot', { headers: ['Caption', 'Sales'], rows })
    expect(drawn.xAxis.data).toEqual(['CA', 'WA'])
    expect(drawn.series[1].data).toEqual([{ value: [0, 99], name: 'E' }])
  })

  it('says the five numbers in the words of the board', () => {
    const tip = option('boxplot', SALES).tooltip.formatter({ seriesType: 'boxplot', dataIndex: 0 })
    expect(tip).toContain('&lt;median&gt;: 50,236')
  })

  it('calls highest what is highest, not where the whisker stops short of an outlier', () => {
    const rows = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 100]]
    const drawn = option('boxplot', { headers: ['Caption', 'Sales'], rows })
    expect(drawn.series[0].data[0][4]).toBe(4)
    const tip = drawn.tooltip.formatter({ seriesType: 'boxplot', dataIndex: 0 })
    expect(tip).toContain('&lt;highest&gt;: 100')
    expect(tip).toContain('&lt;lowest&gt;: 1')
  })

  it('says the cells are empty when the query answered nothing but empty cells', () => {
    const rows = [['F', null], ['M', null]]
    expect(problem('boxplot', { headers: ['Caption', 'Unit Sales'], rows })).toBe('noValues')
    expect(problem('boxplot', { headers: ['Caption', 'Gender'], rows: [['F', 'x']] })).toBe('needsNumbers')
  })

  it('leaves out names that would collide, and gives a small tile shorter ones and fewer steps', () => {
    const rows = Array.from({ length: 30 }, (_, i) => [`City ${i}`, i, i * 2])
    const large = option('boxplot', { headers: ['Caption', 'Q1', 'Q2'], rows })
    expect(large.xAxis.axisLabel.interval).toBe('auto')
    const across = { headers: ['Caption', ...rows.map((r) => String(r[0]))], rows: [1, 2].map((at) => [`Q${at}`, ...rows.map((r) => r[at])]) }
    const many = option('boxplot', across, { small: true })
    expect(many.xAxis.axisLabel).toMatchObject({ interval: 'auto', rotate: 40, width: 64 })
    expect(many.yAxis.splitNumber).toBe(3)
    expect(large.xAxis.axisLabel).toMatchObject({ rotate: 0, width: 110 })
  })

  it('leaves out a level that is the same in every row, rather than drawing a box of one sample per row', () => {
    const rows = [['Salem - 1997', 10], ['Portland - 1997', 11], ['Seattle - 1997', 12], ['Tacoma - 1997', 13], ['Yakima - 1997', 99]]
    const drawn = option('boxplot', { headers: ['Caption', 'Unit Sales'], rows })
    expect(drawn.xAxis.data).toEqual(['Unit Sales'])
    expect(drawn.series[1].data).toEqual([{ value: [0, 99], name: 'Yakima' }])
    // A first level the same in every row still names the one box: the cities of one state.
    const one = option('boxplot', { headers: ['Caption', 'Unit Sales'], rows: [['CA - A', 1], ['CA - B', 2], ['CA - C', 3]] })
    expect(one.xAxis.data).toEqual(['CA'])
    // Below it, a constant level goes and the one that varies still groups: city × 1997 × gender.
    const three = option('boxplot', { headers: ['Caption', 'Unit Sales'], rows: [['A - 1997 - F', 1], ['A - 1997 - M', 2], ['B - 1997 - F', 3]] })
    expect(three.xAxis.data).toEqual(['A', 'B'])
  })

  it('reads a separator inside a caption as part of it, rather than drawing a box of one sample per row', () => {
    const rows = [['$10K - $30K', 10], ['$30K - $50K', 99], ['$50K - $70K', 11], ['$70K - $90K', 12], ['$150K +', 13], ['$90K - $110K', 14]]
    const drawn = option('boxplot', { headers: ['Caption', 'Unit Sales'], rows })
    expect(drawn.xAxis.data).toEqual(['Unit Sales'])
    expect(drawn.series[0].data).toHaveLength(1)
    expect(drawn.series[1].data).toEqual([{ value: [0, 99], name: '$30K - $50K' }])
  })

  it('gives the dots a colour that stands out on a dark board, where mono\'s grey would sink', () => {
    const dark = option('boxplot', SALES, { palette: 'mono', textColor: '#e6e8eb' })
    expect(dark.series[1].itemStyle.color).toBe('#ced4da')
    expect(option('boxplot', SALES, { palette: 'mono' }).series[1].itemStyle.color).toBe('#495057')
    expect(option('boxplot', SALES, { palette: 'sunset', textColor: '#e6e8eb' }).series[1].itemStyle.color).toBe('#845ef7')
  })

  it('draws smaller dots in a small tile, where full-size ones would cover the boxes', () => {
    expect(option('boxplot', SALES, { small: true }).series[1].symbolSize).toBe(4)
    expect(option('boxplot', SALES).series[1].symbolSize).toBe(7)
  })
})
