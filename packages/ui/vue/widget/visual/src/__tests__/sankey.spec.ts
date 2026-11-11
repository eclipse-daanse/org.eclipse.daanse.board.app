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

describe('flows', () => {
  it('run from each row into each column of a matrix, by the number where they cross', () => {
    const drawn = option('sankey')
    const links = drawn.series[0].links
    expect(links).toHaveLength(5)
    const label = drawn.series[0].label.formatter
    expect(links.map((link: { source: string; target: string; value: number }) => [label({ name: link.source }), label({ name: link.target }), link.value]))
      .toContainEqual(['Food', '1998', 210000])
  })

  it('run from level to level where the labels have levels, summed where rows meet', () => {
    const table = { headers: ['From', 'To', 'Amount'], rows: [['Coal', 'Power', 10], ['Gas', 'Power', 5], ['Coal', 'Power', 2]] }
    const links = option('sankey', table).series[0].links
    expect(links.map((link: { value: number }) => link.value)).toEqual([12, 5])
  })

  it('cannot run in a circle when a name turns up at both ends', () => {
    const table = { headers: ['Caption', 'A', 'B'], rows: [['A', 1, 2]] }
    const { data, links } = option('sankey', table).series[0]
    expect(new Set(data.map((node: { name: string }) => node.name)).size).toBe(3)
    for (const link of links) expect(link.source).not.toBe(link.target)
  })

  it('run from level to level of the headers when the rows have no levels, as with the measure on the other axis', () => {
    const table = {
      headers: ['Caption', 'Supermarket - Food', 'Supermarket - Drink', 'Small Grocery - Food'],
      rows: [['Unit Sales', '108188', '14092', '4764']],
    }
    const { data, links } = option('sankey', table).series[0]
    const label = option('sankey', table).series[0].label.formatter
    expect(data.map((node: { name: string }) => label({ name: node.name }))).toEqual(['Supermarket', 'Food', 'Drink', 'Small Grocery'])
    expect(links.map((link: { value: number }) => link.value)).toEqual([108188, 14092, 4764])
  })

  it('keep each row as the first stage when several rows flow into headers with levels', () => {
    const table = { headers: ['Caption', '1997 - Q1', '1997 - Q2'], rows: [['Drink', 5, 6], ['Food', 50, 60]] }
    const { data, links } = option('sankey', table).series[0]
    expect(data.map((node: { depth: number }) => node.depth)).toEqual([0, 1, 2, 2, 0])
    expect(links.find((link: { source: string; target: string }) => link.target.endsWith('Q2')).value).toBe(66)
    expect(links.reduce((sum: number, link: { value: number }) => sum + link.value, 0)).toBe(121 + 121)
  })

  it('names the missing values, not the missing levels, when every cell is empty or below zero', () => {
    expect(problem('sankey', { headers: ['From', 'To', 'Amount'], rows: [['Coal', 'Power', -3]] })).toBe('needsValues')
    expect(problem('sankey', { headers: ['Caption', 'Q1', 'Q2'], rows: [['Drink', null, -1]] })).toBe('needsValues')
  })

  it('says the query answered with empty cells when not one cell holds a value, as for a year with no sales', () => {
    expect(problem('sankey', { headers: ['Caption', '1998'], rows: [['Unit Sales', null]] })).toBe('noValues')
    expect(problem('sankey', { headers: ['Caption', 'Unit Sales'], rows: [['USA - Drink', null], ['USA - Food', '']] })).toBe('noValues')
  })

  it('lifts the darkest colours of a set on a dark board, so that their nodes and flows stay in sight', () => {
    const table = { headers: ['Caption', 'Unit Sales'], rows: Array.from({ length: 7 }, (_, i) => [`All - Part ${i}`, i + 1]) }
    const colours = (look: object) => option('sankey', table, { palette: 'mono', ...look }).series[0].data.map((node: { itemStyle: { color: string } }) => node.itemStyle.color)
    const light = colours({})
    const dark = colours({ textColor: 'rgb(230, 233, 239)' })
    expect(light[0]).toBe('#343a40')
    expect(dark[0]).not.toBe('#343a40')
    expect(dark).not.toContain('#212529')
    // The colours that already stand out are left as the palette has them.
    expect(dark[2]).toBe(light[2])
  })

  it('narrows the gaps of a crowded stage, so that the nodes keep a height above zero', () => {
    const rows = Array.from({ length: 45 }, (_, i) => ['All', `Category ${i}`, i + 1])
    const table = { headers: ['From', 'To', 'Amount'], rows }
    expect(option('sankey', table).series[0].nodeGap * 44).toBeLessThanOrEqual(100)
    expect(option('sankey', table, { small: true }).series[0].nodeGap * 44).toBeLessThanOrEqual(40)
    expect(option('sankey', { headers: ['From', 'To', 'Amount'], rows: rows.slice(0, 3) }).series[0].nodeGap).toBe(10)
  })

  it('puts the names of the last stage on the left, and leaves out those that would overlap', () => {
    const series = option('sankey', { headers: ['From', 'To', 'Amount'], rows: [['Coal', 'Power', 10]] }).series[0]
    expect(series.levels).toEqual([{ depth: 1, label: { position: 'left' } }])
    expect(series.right).toBe(16)
    expect(series.labelLayout.hideOverlap).toBe(true)
  })

  it('take their values from the column the settings name, also where the table is a matrix', () => {
    const table = { headers: ['Caption', 'Unit Sales', 'Store Sales'], rows: [['Drink', 24597, 48836.21], ['Food', 191940, 409035.59]] }
    const label = option('sankey', table).series[0].label.formatter
    const links = option('sankey', table, { valueColumn: 'Store Sales' }).series[0].links
    expect(links.map((link: { target: string; value: number }) => [label({ name: link.target }), link.value]))
      .toEqual([['Store Sales', 48836.21], ['Store Sales', 409035.59]])
    // A name that is not a column of numbers leaves every column in.
    expect(option('sankey', table, { valueColumn: 'Caption' }).series[0].links).toHaveLength(4)
    expect(option('sankey', table, { valueColumn: 'Nope' }).series[0].links).toHaveLength(4)
    expect(problem('sankey', { headers: ['Caption', 'Unit Sales', 'Store Sales'], rows: [['Drink', 5, null]] }, { valueColumn: 'Store Sales' })).toBe('noValues')
  })
})
