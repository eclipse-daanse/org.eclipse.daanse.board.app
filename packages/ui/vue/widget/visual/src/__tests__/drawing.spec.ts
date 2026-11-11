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
import { kindOf } from '../drawing'
import { asTable, columnsOf } from '../table'
import { SALES, option } from './fixtures'

describe('the table', () => {
  it('is read from rows, or from items keyed by header where there are none', () => {
    expect(asTable({ headers: ['a', 'b'], items: [{ a: 'x', b: 1 }] })).toEqual({ headers: ['a', 'b'], rows: [['x', 1]] })
    expect(asTable(null)).toBeNull()
    expect(asTable({ headers: [] })).toBeNull()
  })

  it('tells the label column from the columns of numbers, numbers written as text included', () => {
    expect(columnsOf(asTable(SALES)!)).toEqual({ labels: [0], numbers: [1, 2], numeric: [1, 2] })
  })

  it('names the rows by the first column even when it holds years', () => {
    const years = { headers: ['Year', 'Sales'], rows: [[1997, 10], [1998, 12]] }
    expect(columnsOf(asTable(years)!)).toEqual({ labels: [0], numbers: [1], numeric: [0, 1] })
  })
})

describe('the kind', () => {
  it('is read from the name the model stores and from the literal alike', () => {
    expect(kindOf('BARS3D')).toBe('bars3d')
    expect(kindOf('bars3d')).toBe('bars3d')
    expect(kindOf('BARS_3D')).toBe('bars3d')
    expect(kindOf(undefined)).toBe('bars3d')
    expect(kindOf('pie')).toBe('bars3d')
  })
})

describe('every kind', () => {
  it('carries the title, and the board text colour on its labels', () => {
    const drawn = option('bars3d', SALES, { title: 'Sales', textColor: '#ffffff' })
    expect(drawn.title.text).toBe('Sales')
    expect(drawn.grid3D.axisLabel.textStyle.color).toBe('#ffffff')
  })

  it('escapes the names it puts in a tooltip', () => {
    const table = { headers: ['Caption', 'v', 'w'], rows: [['<img src=x>', 1, 2], ['b', 3, 4]] }
    const tip = option('bars3d', table).tooltip.formatter({ value: [0, 0, 1] })
    expect(tip).toContain('&lt;img src=x&gt;')
  })
})
