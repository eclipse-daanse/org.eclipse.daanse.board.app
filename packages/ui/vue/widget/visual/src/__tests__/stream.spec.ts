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

describe('the stream', () => {
  it('is a layer per row through a step per column, nothing below zero', () => {
    const drawn = option('stream', SALES)
    expect(drawn.series[0].type).toBe('themeRiver')
    expect(drawn.series[0].data).toEqual([
      [0, 24597, 'Drink'],
      [1, 30010, 'Drink'],
      [0, 191940, 'Food'],
      [1, 210000, 'Food'],
      [0, 50236, 'Non-Consumable'],
      [1, 0, 'Non-Consumable'],
    ])
    expect(drawn.singleAxis.axisLabel.formatter(1)).toBe('1998')
  })

  it('reads the last level of a label as the step where there is one column of numbers', () => {
    const table = { headers: ['Caption', 'Units'], rows: [['Drink - Jan', 1], ['Drink - Feb', 2], ['Food - Feb', 5]] }
    const drawn = option('stream', table)
    expect(drawn.series[0].data).toEqual([
      [0, 1, 'Drink'],
      [1, 2, 'Drink'],
      [0, 0, 'Food'],
      [1, 5, 'Food'],
    ])
  })

  it('keeps the steps in order where NonEmpty left some out of the first layer', () => {
    // Promotions run in some quarters only: the first one skips Q2, which a later one has.
    const table = {
      headers: ['Caption', 'Unit Sales'],
      rows: [['Bag Stuffers - Q1', 1], ['Bag Stuffers - Q3', 3], ['Bag Stuffers - Q4', 4], ['Best Savings - Q2', 2], ['Best Savings - Q3', 3]],
    }
    const drawn = option('stream', table)
    expect([0, 1, 2, 3].map((index) => drawn.singleAxis.axisLabel.formatter(index))).toEqual(['Q1', 'Q2', 'Q3', 'Q4'])
    expect(drawn.series[0].data.filter((point: unknown[]) => point[2] === 'Best Savings')).toEqual([
      [0, 0, 'Best Savings'],
      [1, 2, 'Best Savings'],
      [2, 3, 'Best Savings'],
      [3, 0, 'Best Savings'],
    ])
    // A first layer that starts late, as NON EMPTY across the columns leaves it.
    const late = { headers: ['Caption', 'Drink - Q3', 'Drink - Q4', 'Food - Q1', 'Food - Q2', 'Food - Q3'], rows: [['Unit Sales', 3, 4, 1, 2, 3]] }
    const across = option('stream', late)
    expect([0, 1, 2, 3].map((index) => across.singleAxis.axisLabel.formatter(index))).toEqual(['Q1', 'Q2', 'Q3', 'Q4'])
  })

  it('needs two steps to flow through', () => {
    expect(problem('stream', { headers: ['Caption', 'Units'], rows: [['Drink', 1]] })).toBe('needsSteps')
  })

  it('reads a crossjoin across the columns as layers through its last level', () => {
    // A measure on the rows, families by quarters across: one row, which names nothing.
    const one = { headers: ['Caption', 'Drink - Q1', 'Drink - Q2', 'Food - Q1', 'Food - Q2'], rows: [['Unit Sales', 1, 2, 5, 6]] }
    expect(option('stream', one).series[0].data).toEqual([
      [0, 1, 'Drink'],
      [1, 2, 'Drink'],
      [0, 5, 'Food'],
      [1, 6, 'Food'],
    ])
    const two = { headers: ['Caption', 'Drink - Q1', 'Drink - Q2'], rows: [['USA', 1, 2], ['Mexico', 3, 4]] }
    expect(option('stream', two).series[0].data.map((point: unknown[]) => point[2])).toEqual(['USA - Drink', 'USA - Drink', 'Mexico - Drink', 'Mexico - Drink'])
  })

  it('leaves out layers with nothing in them, and says so when that is every one', () => {
    const table = { headers: ['Caption', 'Q1', 'Q2'], rows: [['Canada', null, null], ['USA', 3, 4], ['Mexico', -2, 0]] }
    expect(option('stream', table).series[0].data.map((point: unknown[]) => point[2])).toEqual(['USA', 'USA'])
    expect(problem('stream', { headers: ['Caption', 'Q1', 'Q2'], rows: [['Canada', null, null], ['Mexico', -1, 0]] })).toBe('noValues')
  })

  it('names the largest layers in a tooltip and counts the rest, fewer in a small tile', () => {
    const rows = Array.from({ length: 40 }, (_, index) => [`Product ${index}`, index + 1, index + 2])
    const table = { headers: ['Caption', 'Q1', 'Q2'], rows }
    const items = (drawn: ReturnType<typeof option>) =>
      drawn.series[0].data.filter((point: [number, number, string]) => point[0] === 0).map((value: unknown) => ({ value, color: '#000' }))
    const large = option('stream', table)
    const shown = large.tooltip.formatter(items(large)) as string
    expect(shown.split('<br/>')).toHaveLength(1 + 11)
    expect(shown).toContain('Product 39')
    expect(shown).toContain('… +30')
    const small = option('stream', table, { small: true })
    expect((small.tooltip.formatter(items(small)) as string).split('<br/>')).toHaveLength(1 + 6)
    // Eleven layers fit without a count that names one.
    const eleven = option('stream', { headers: ['Caption', 'Q1', 'Q2'], rows: rows.slice(0, 11) })
    expect(eleven.tooltip.formatter(items(eleven))).not.toContain('…')
  })

  it('hides labels that would cover each other and drops the outlines between hundreds of layers', () => {
    expect(option('stream').series[0].labelLayout).toEqual({ hideOverlap: true })
    expect(option('stream').series[0].itemStyle.borderWidth).toBeGreaterThan(0)
    const rows = Array.from({ length: 200 }, (_, index) => [`Product ${index}`, 1, 2])
    expect(option('stream', { headers: ['Caption', 'Q1', 'Q2'], rows }).series[0].itemStyle.borderWidth).toBe(0)
  })

  it('lights only the layer under the mouse, not the one numbered like the step under the pointer', () => {
    expect(option('stream').singleAxis.axisPointer.triggerEmphasis).toBe(false)
  })
})
