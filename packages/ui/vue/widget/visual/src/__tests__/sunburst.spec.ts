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
import { belowTheTitleAt, cut, SIZES } from '../kinds/sunburst'
import { inkOn } from '../palettes'

describe('rings', () => {
  const NESTED = {
    headers: ['Caption', 'Sales'],
    rows: [
      ['1997 - Q1 - Drink', 10],
      ['1997 - Q1 - Food', 30],
      ['1997 - Q2 - Food', 20],
      ['1998 - Q1 - Food', 5],
      ['1998 - Q2 - Food', -3],
    ],
  }

  it('split each label into levels and hang rows that share a start off one node', () => {
    const tree = option('sunburst', NESTED).series[0].data
    expect(tree.map((node: { name: string; value: number }) => [node.name, node.value])).toEqual([['1997', 60], ['1998', 5]])
    expect(tree[0].children.map((node: { name: string }) => node.name)).toEqual(['Q1', 'Q2'])
    expect(tree[0].children[0].children).toMatchObject([{ name: 'Drink', value: 10 }, { name: 'Food', value: 30 }])
  })

  it('take the label columns from the left as levels too', () => {
    const table = { headers: ['Region', 'City', 'Sales'], rows: [['East', 'Jena', 4], ['East', 'Gera', 2], ['West', 'Köln', 7]] }
    const tree = option('sunburst', table).series[0].data
    expect(tree[0]).toMatchObject({ name: 'East', value: 6, children: [{ name: 'Jena', value: 4 }, { name: 'Gera', value: 2 }] })
  })

  it('are sized by the column the settings name', () => {
    const tree = option('sunburst', SALES, { valueColumn: '1998' }).series[0].data
    expect(tree.map((node: { name: string; value: number }) => [node.name, node.value])).toEqual([['Drink', 30010], ['Food', 210000]])
  })
})

describe('labels', () => {
  const LONG = {
    headers: ['Caption', 'Units'],
    rows: [
      ['Food - Snack Foods - Snack Foods', 30],
      ['Food - Produce - Vegetables', 20],
      ['Drink - Alcoholic Beverages - Beer and Wine', 5],
      ['Drink - Beverages - Hot Beverages', 4],
      ['Non-Consumable - Health and Hygiene - Medicine', 1],
    ],
  }
  const params = (name: string, value: number, rotate?: string) => ({ name, value, data: { label: rotate ? { rotate } : {} } })

  it('are cut to the thickness of their ring, so that a long name does not run into the next one', () => {
    // 600 pixels, three rings: each about 78 pixels thick, room for about 12 characters.
    const label = cut(600, 3, 60)
    expect(label(params('Snack Foods', 30))).toBe('Snack Foods')
    expect(label(params('Alcoholic Beverages', 5))).toMatch(/^Alcoholic B.*…$/)
    expect(label(params('Alcoholic Beverages', 5)).length).toBeLessThanOrEqual(13)
  })

  it('along the inner arc are cut to the chord their piece spans', () => {
    const label = cut(600, 3, 100)
    // A quarter of the circle has room for the name, an eighth not.
    expect(label(params('Non-Consumable', 25, 'tangential'))).toBe('Non-Consumable')
    expect(label(params('Non-Consumable', 12.5, 'tangential'))).toMatch(/…$/)
  })

  it('say nothing rather than a letter and an ellipsis, and never an empty text that ECharts would fill with the whole name', () => {
    const label = cut(160, 4, 60)
    expect(label(params('Health and Hygiene', 1))).toBe(' ')
    expect(label(params('CA', 1))).toBe('CA')
  })

  it('are cut anew for each size of the chart, by a media query ECharts picks again on a resize', () => {
    const drawn = option('sunburst', LONG)
    expect(drawn.media.map((media: { query: { minWidth: number } }) => media.query.minWidth)).toEqual(SIZES.slice(1))
    const largest = drawn.media[drawn.media.length - 1].option.series[0].label.formatter
    expect(largest(params('Alcoholic Beverages', 5))).toBe('Alcoholic Beverages')
    expect(drawn.series[0].label.formatter(params('Alcoholic Beverages', 5))).not.toBe('Alcoholic Beverages')
  })

  it('are written dark on a pale piece and white on a dark one', () => {
    const tree = option('sunburst', LONG, { palette: 'aurora' }).series[0].data
    type Piece = { children?: Piece[]; itemStyle: { color: string }; label: { color: string } }
    const all = (node: Piece): Piece[] => [node, ...(node.children ?? []).flatMap(all)]
    for (const piece of (tree as Piece[]).flatMap(all)) {
      expect(piece.label.color).toBe(inkOn(piece.itemStyle.color))
    }
    // The yellow of aurora is pale already at the first ring.
    const yellow = option('sunburst', { headers: ['Caption', 'Units'], rows: [['A', 3], ['B', 2], ['C', 1]] }).series[0].data[2]
    expect(yellow.itemStyle.color).toBe('#fac858')
    expect(yellow.label.color).not.toBe('#fff')
  })

  it('write along the arc only in an inner piece wide enough for it', () => {
    const tree = option('sunburst', LONG).series[0].data
    const named = (name: string) => tree.find((node: { name: string }) => node.name === name)
    expect(named('Food').label.rotate).toBe('tangential')
    expect(named('Non-Consumable').label.rotate).toBeUndefined()
    expect(named('Food').children[0].label.rotate).toBeUndefined()
  })
})

describe('rings, drawn', () => {
  it('take their colours largest first, the way they are sorted round the circle', () => {
    const tree = option('sunburst', { headers: ['Caption', 'Units'], rows: [['Small', 1], ['Large', 9], ['Middle', 4]] }).series[0].data
    expect(tree.map((node: { name: string; itemStyle: { color: string } }) => [node.name, node.itemStyle.color])).toEqual([
      ['Small', '#fac858'],
      ['Large', '#5470c6'],
      ['Middle', '#91cc75'],
    ])
  })

  it('grow paler ring by ring, in the colour of the piece they belong to', () => {
    const tree = option('sunburst', { headers: ['Caption', 'Units'], rows: [['A - x - 1', 1]] }).series[0].data
    expect(tree[0].itemStyle.color).toBe('#5470c6')
    expect(tree[0].children[0].children[0].itemStyle.color).toBe('#aab8e3')
  })

  it('of hundreds of slivers are cut by a thinner gap than a ring of three', () => {
    const rows = Array.from({ length: 300 }, (_, i) => [`Family ${i % 3} - Item ${i}`, 1 + i])
    const levels = option('sunburst', { headers: ['Caption', 'Units'], rows }).series[0].levels
    expect(levels[1]).toEqual({})
    expect(levels[2].itemStyle.borderWidth).toBeLessThan(1)
  })

  it('read a single row of several numbers as one piece per column', () => {
    const table = { headers: ['Caption', 'Drink', 'Food', 'Non-Consumable'], rows: [['Unit Sales', '24597', '191940', '50236']] }
    const tree = option('sunburst', table).series[0].data
    expect(tree.map((node: { name: string; value: number }) => [node.name, node.value])).toEqual([
      ['Drink', 24597],
      ['Food', 191940],
      ['Non-Consumable', 50236],
    ])
    // A column the settings name is still the one the rings are sized by.
    expect(option('sunburst', table, { valueColumn: 'Food' }).series[0].data).toHaveLength(1)
  })

  it('shrink below a title in a low tile, so that the title is not written over them', () => {
    expect(option('sunburst', SALES).media.some((media: { query: object }) => 'maxHeight' in media.query)).toBe(false)
    const titled = option('sunburst', SALES, { title: 'Units' }).media.filter((media: { query: object }) => 'maxHeight' in media.query)
    const lowest = titled[titled.length - 1]
    expect(lowest.query.maxHeight).toBeLessThan(160)
    // The outer ring then stays below the 30 pixels of the title at the lowest height the band covers.
    const outer = parseFloat(lowest.option.series[0].radius[1]) / 100
    expect(0.54 * 100 - (outer * 100) / 2).toBeGreaterThanOrEqual(30)
  })

  it('below a title have their labels cut to the smaller rings, not to the rings they would have without it', () => {
    // A tile 500 by 250: its rings end at 78% below a title, at 92% without one.
    expect(belowTheTitleAt(250)).toBe(0.78)
    expect(belowTheTitleAt(400)).toBe(0.92)
    const table = { headers: ['Caption', 'Units'], rows: [['Food - Baked Goods - Bread', 3], ['Drink - Beverages - Hot Beverages', 2]] }
    type Media = { query: { minWidth?: number }; option: { series: { label: { formatter: ReturnType<typeof cut> } }[] } }
    const at = (media: Media[]) => media.find((each) => each.query.minWidth === 240)!.option.series[0].label.formatter
    const piece = { name: 'Baked Goods', value: 3, data: { label: {} } }
    const plain = at(option('sunburst', table).media)(piece)
    const titled = at(option('sunburst', table, { title: 'Units' }).media)(piece)
    expect(titled).toBe(cut(240, 3, 5, 0.78)(piece))
    expect(titled.length).toBeLessThan(plain.length)
  })
})

describe('rings, not drawn', () => {
  it('say the slice of the cube is empty when no cell holds a number, and that nothing is above zero when some do', () => {
    // A WHERE on 1998, which FoodMart sold nothing in.
    expect(problem('sunburst', { headers: ['Caption', 'Unit Sales'], rows: [['Drink', null], ['Food', null]] })).toBe('noValues')
    expect(problem('sunburst', { headers: ['Caption', 'Q1', 'Q2'], rows: [['Unit Sales', null, null]] })).toBe('noValues')
    expect(problem('sunburst', { headers: ['Caption', 'Loss'], rows: [['Drink', -3], ['Food', null]] })).toBe('needsValues')
    expect(problem('sunburst', { headers: ['Caption'], rows: [['Drink'], ['Food']] })).toBe('needsNumbers')
  })
})

describe('slivers', () => {
  it('are drawn without a gap, so that a run of them does not show as a wedge of the ground', () => {
    // Customer cities: a few large ones and many with a fraction of a degree each.
    const rows = [['CA - Los Angeles', 2000], ['CA - Oakland', 1], ['CA - Concord', 1], ['WA - Tacoma', 2000]]
    const tree = option('sunburst', { headers: ['Caption', 'Units'], rows }).series[0].data
    const ca = tree.find((node: { name: string }) => node.name === 'CA')
    const city = (name: string) => ca.children.find((node: { name: string }) => node.name === name)
    expect(city('Oakland').itemStyle.borderWidth).toBe(0)
    expect(city('Los Angeles').itemStyle.borderWidth).toBeUndefined()
    expect(ca.itemStyle.borderWidth).toBeUndefined()
  })
})
