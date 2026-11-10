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

describe('points in 3D', () => {
  const CITIES = {
    headers: ['City', 'Population', 'Area', 'Income', 'Shops'],
    rows: [
      ['Jena', 110000, 114, 31000, 400],
      ['Erfurt', 214000, 269, 30000, 900],
    ],
  }

  it('take the first three columns of numbers as their axes', () => {
    const drawn = option('scatter3d', CITIES)
    expect(drawn.series[0].data[0]).toEqual({ name: 'Jena', value: [110000, 114, 31000] })
    expect([drawn.xAxis3D.name, drawn.yAxis3D.name, drawn.zAxis3D.name]).toEqual(['Population', 'Area', 'Income'])
  })

  it('take the columns the settings name, and a size from one more', () => {
    const drawn = option('scatter3d', CITIES, { xColumn: 'income', yColumn: 'Area', zColumn: 'Population', sizeColumn: 'Shops' })
    expect(drawn.series[0].data[1].value).toEqual([30000, 269, 214000, 900])
    const size = drawn.series[0].symbolSize as (value: number[]) => number
    expect(size([0, 0, 0, 900])).toBeGreaterThan(size([0, 0, 0, 400]))
  })

  it('leave the axes the settings do not name to columns no other axis shows', () => {
    const axes = (look: object) => {
      const drawn = option('scatter3d', CITIES, look)
      return [drawn.xAxis3D.name, drawn.yAxis3D.name, drawn.zAxis3D.name]
    }
    expect(axes({ xColumn: 'Area' })).toEqual(['Area', 'Population', 'Income'])
    expect(axes({ zColumn: 'Population' })).toEqual(['Area', 'Income', 'Population'])
    // The size is a fourth column, not a fallback axis, while there are others.
    expect(axes({ sizeColumn: 'Population' })).toEqual(['Area', 'Income', 'Shops'])
  })

  it('take the size column as an axis only when nothing else is left', () => {
    const three = { headers: ['City', 'A', 'B', 'C'], rows: [['Jena', 1, 2, 3]] }
    const drawn = option('scatter3d', three, { sizeColumn: 'A' })
    expect(drawn.series[0].data[0].value).toEqual([2, 3, 1, 1])
  })

  it('pass over a column nobody has a value in', () => {
    const gaps = {
      headers: ['City', 'Canada', 'Population', 'Area', 'Income'],
      rows: [
        ['Jena', null, 110000, 114, 31000],
        ['Erfurt', '', 214000, 269, 30000],
      ],
    }
    expect(option('scatter3d', gaps).series[0].data[0].value).toEqual([110000, 114, 31000])
  })

  it('write the ticks as the board writes numbers, clear of the axis names', () => {
    const drawn = option('scatter3d', CITIES, { locale: 'de' })
    expect(drawn.xAxis3D.axisLabel.formatter(50000)).toBe('50.000')
    // And so is where a hovered point stands on each axis.
    const point = [21464.5, 114, 31000]
    expect(drawn.xAxis3D.axisPointer.label.formatter('21464.5', point)).toBe('21.464,5')
    expect(drawn.zAxis3D.axisPointer.label.formatter('31000', point)).toBe('31.000')
    expect(drawn.zAxis3D.nameGap).toBeGreaterThan(20)
  })

  it('span the points on their axes rather than reach down to zero', () => {
    const drawn = option('scatter3d', CITIES)
    expect([drawn.xAxis3D.scale, drawn.yAxis3D.scale, drawn.zAxis3D.scale]).toEqual([true, true, true])
  })

  it('name their points by captions that read as numbers, and keep them off the axes', () => {
    // Descendants([Time].[1997], [Time].[Month]): the months come back as 1 to 12.
    const months = {
      headers: ['Caption', 'Unit Sales', 'Store Sales', 'Store Cost'],
      rows: [
        ['1', '21628', '45539.69', '18178.49'],
        ['2', '20957', '44058.79', '17599.67'],
      ],
    }
    const drawn = option('scatter3d', months)
    expect([drawn.xAxis3D.name, drawn.yAxis3D.name, drawn.zAxis3D.name]).toEqual(['Unit Sales', 'Store Sales', 'Store Cost'])
    expect(drawn.series[0].data[1]).toEqual({ name: '2', value: [20957, 44058.79, 17599.67] })
  })

  it('take numeric captions as an axis only when three are not found elsewhere', () => {
    const numbers = { headers: ['A', 'B', 'C'], rows: [[1, 2, 3], [4, 5, 6]] }
    const drawn = option('scatter3d', numbers)
    expect(drawn.series[0].data[0]).toEqual({ name: '#1', value: [2, 3, 1] })
    // Before the size, which is a fourth column of its own.
    const sized = option('scatter3d', { headers: ['A', 'B', 'C', 'S'], rows: [[1, 2, 3, 9]] }, { sizeColumn: 'S' })
    expect(sized.series[0].data[0].value).toEqual([2, 3, 1, 9])
  })

  it('say a query found nothing where its three measures came back empty', () => {
    // A slicer on 1998, a year FoodMart has no sales in.
    const empty = { headers: ['Caption', 'Unit Sales', 'Store Sales', 'Store Cost'], rows: [['Canada', null, null, null], ['USA', '', null, null]] }
    expect(problem('scatter3d', empty)).toBe('noValues')
    const months = { headers: ['Caption', 'Unit Sales', 'Store Sales', 'Store Cost'], rows: [['1', null, null, null]] }
    expect(problem('scatter3d', months)).toBe('noValues')
    expect(problem('scatter3d', { headers: ['Caption', 'Unit Sales', 'Store Sales'], rows: [['USA', null, null]] })).toBe('needsThreeNumbers')
  })

  it('keep their points and ticks apart in a small tile', () => {
    const sized = { sizeColumn: 'Shops' }
    const full = option('scatter3d', CITIES, sized)
    const small = option('scatter3d', CITIES, { ...sized, small: true })
    const largest = [0, 0, 0, 900]
    expect(small.series[0].symbolSize(largest)).toBeLessThan(full.series[0].symbolSize(largest) / 1.5)
    expect(small.xAxis3D.splitNumber).toBeLessThan(5)
    expect(option('scatter3d', CITIES, { small: true }).series[0].symbolSize).toBeLessThan(full.series[0].symbolSize([0, 0, 0, 400]))
  })

  it('give a large tile its usual ticks back, which a redraw merged into a small one would keep', () => {
    const large = option('scatter3d', CITIES)
    expect(large.xAxis3D.splitNumber).toBe(5)
    expect(large.zAxis3D.axisLabel.textStyle.fontSize).toBe(12)
    expect(option('scatter3d', CITIES, { small: true }).zAxis3D.axisLabel.textStyle.fontSize).toBe(9)
  })

  it('keep the name of the upright axis clear of its widest tick', () => {
    // Income runs to 31.000; a cube of sales runs to 800.000, a margin down to -8.000.
    const gap = (income: number) =>
      option('scatter3d', { ...CITIES, rows: [['Jena', 110000, 114, income]] }).zAxis3D.nameGap
    expect(gap(31000)).toBeGreaterThanOrEqual(45)
    expect(gap(800000)).toBeGreaterThan(gap(31000))
    expect(gap(-8000)).toBeGreaterThan(gap(8000))
    expect(gap(5)).toBe(30)
    // The other two have their names below their ticks, not beside them.
    expect(option('scatter3d', CITIES).xAxis3D.nameGap).toBe(30)
  })

  it('need three columns of numbers', () => {
    expect(problem('scatter3d', SALES)).toBe('needsThreeNumbers')
  })
})

