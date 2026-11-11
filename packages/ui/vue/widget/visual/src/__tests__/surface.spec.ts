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
import { option, problem } from './fixtures'

describe('the surface', () => {
  it('is a full mesh, x running fastest, with a missing cell laid at the floor', () => {
    const data = option('surface').series[0].data
    expect(data).toEqual([
      [0, 0, 24597], [1, 0, 191940], [2, 0, 50236],
      [0, 1, 30010], [1, 1, 210000], [2, 1, 0],
    ])
  })

  it('labels its axes by the rows and the columns, not by their numbers', () => {
    const drawn = option('surface')
    expect(drawn.xAxis3D.axisLabel.formatter(1)).toBe('Food')
    expect(drawn.yAxis3D.axisLabel.formatter(0)).toBe('1997')
    expect(drawn.xAxis3D.axisLabel.formatter(0.5)).toBe('')
  })

  it('names the crossing under the pointer, not its index, and writes its height as numbers are written', () => {
    const drawn = option('surface', undefined, { locale: 'de' })
    const point = [1, 0, 191940.5]
    expect(drawn.xAxis3D.axisPointer.label.formatter('1', point)).toBe('Food')
    expect(drawn.yAxis3D.axisPointer.label.formatter('0', point)).toBe('1997')
    expect(drawn.zAxis3D.axisPointer.label.formatter('191940.5', point)).toBe('191.940,5')
    // On the box's walls the pointer stands between crossings: it takes the nearest.
    expect(drawn.xAxis3D.axisPointer.label.formatter('1.4', [1.4, 0, 0])).toBe('Food')
  })

  it('says a missing cell has no value rather than showing the floor it is laid at as a zero', () => {
    const formatter = option('surface').tooltip.formatter
    expect(formatter({ value: [2, 1, 0] })).not.toContain('<b>0</b>')
    expect(formatter({ value: [2, 1, 0] })).toContain('–')
    expect(formatter({ value: [1, 0, 191940] })).toContain('191,940')
  })

  it('needs two rows and two columns to span', () => {
    expect(problem('surface', { headers: ['Caption', '1997'], rows: [['a', 1], ['b', 2]] })).toBe('needsGrid')
  })

  it('lays a missing cell at the lowest value, not at a zero above values that are all below it', () => {
    const data = option('surface', { headers: ['Caption', 'Q1', 'Q2'], rows: [['a', -5, -9], ['b', -7, null]] }).series[0].data
    expect(data).toEqual([[0, 0, -5], [1, 0, -7], [0, 1, -9], [1, 1, -9]])
  })

  it('does not name the row before the last where the two would stand on each other', () => {
    const months = { headers: ['Caption', ...Array.from({ length: 12 }, (_, i) => String(i + 1))], rows: [['a', ...Array(12).fill(1)], ['b', ...Array(12).fill(2)]] }
    const formatter = option('surface', months).yAxis3D.axisLabel.formatter
    // Every second month is named, and the twelfth at the end, but not the eleventh beside it.
    expect([0, 2, 8, 10, 11].map(formatter)).toEqual(['1', '3', '9', '', '12'])
  })

  it('names fewer rows along a side in a small tile', () => {
    const rows = Array.from({ length: 23 }, (_, i) => [`d${i}`, i, i])
    const table = { headers: ['Caption', 'Q1', 'Q2'], rows }
    expect(option('surface', table).xAxis3D.interval).toBe(3)
    expect(option('surface', table, { small: true }).xAxis3D.interval).toBe(5)
  })

  it('leaves the wireframe out where its lines would stand closer than the colours they cover', () => {
    const rows = (count: number) => ({ headers: ['Caption', 'Q1', 'Q2'], rows: Array.from({ length: count }, (_, i) => [`p${i}`, i, i]) })
    expect(option('surface', rows(12)).series[0].wireframe.show).toBe(true)
    expect(option('surface', rows(1560)).series[0].wireframe.show).toBe(false)
  })

  it('names few enough heights that they do not stand on each other, and none in a small tile beside its scale', () => {
    const table = { headers: ['Caption', 'Q1', 'Q2'], rows: [['a', -2670, 1910], ['b', 15604, 41]] }
    expect(option('surface', table).zAxis3D.splitNumber).toBe(4)
    expect(option('surface', table).zAxis3D.axisLabel.show).toBe(true)
    expect(option('surface', table, { small: true }).zAxis3D.axisLabel.show).toBe(false)
    // Without the scale the axis is the only place the heights are said.
    expect(option('surface', table, { small: true, showScale: false }).zAxis3D.axisLabel.show).toBe(true)
  })
})
