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
import { modifyHSL } from 'zrender/lib/tool/color.js'
import { atLightness, fitted } from '../kinds/treemap'
import { PALETTES, withAlpha } from '../palettes'

/* WCAG 2 contrast, worked out here rather than taken from the code under test. */
function contrast(a: string, b: string): number {
  const luminance = (color: string) => {
    const [r, g, b] = withAlpha(color, 1).match(/\d+/g)!.slice(0, 3).map((channel) => {
      const share = Number(channel) / 255
      return share <= 0.03928 ? share / 12.92 : ((share + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (lighter + 0.05) / (darker + 0.05)
}

describe('tiles', () => {
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

  it('leave out what has no size - a negative value has no ring', () => {
    const tree = option('treemap', NESTED).series[0].data
    expect(tree[1].children.map((node: { name: string }) => node.name)).toEqual(['Q1'])
  })

  it('name a query that answered every cell empty apart from one whose values are all below zero', () => {
    // The states in 1998, which the cube holds nothing for.
    const empty = { headers: ['Caption', 'Unit Sales'], rows: [['CA', null], ['OR', null], ['WA', null]] }
    expect(problem('treemap', empty)).toBe('noValues')
    expect(problem('treemap', { headers: ['Caption', 'Diff'], rows: [['CA', -5], ['OR', null]] })).toBe('needsValues')
    expect(problem('treemap', { headers: ['Caption', 'Q1', 'Q2'], rows: [['Unit Sales', null, null]] })).toBe('noValues')
  })

  it('show a breakdown never larger than the total above it', () => {
    const table = { headers: ['Caption', 'Sales'], rows: [['All', 100], ['All - A', 30], ['All - B', 20]] }
    expect(option('treemap', table).series[0].data[0].value).toBe(100)
  })
})

describe('tiles, drawn', () => {
  type Tile = { name: string; value: number; children?: Tile[]; itemStyle: { color: string }; label: { color: string }; upperLabel: { color: string } }
  const all = (tile: Tile): Tile[] => [tile, ...(tile.children ?? []).flatMap(all)]
  const STORES = {
    headers: ['Caption', 'Store Sales'],
    rows: [
      ['CA - Los Angeles', 54545],
      ['CA - San Diego', 54431],
      ['OR - Salem', 87218],
      ['WA - Tacoma', 74843],
      ['WA - Seattle', 52644],
    ],
  }

  it('are written dark on a pale tile and white on a dark one', () => {
    const tree = option('treemap', STORES, { palette: 'aurora' }).series[0].data as Tile[]
    for (const tile of tree.flatMap(all)) {
      const other = tile.label.color === '#fff' ? '#1b1f27' : '#fff'
      expect(contrast(tile.itemStyle.color, tile.label.color)).toBeGreaterThanOrEqual(contrast(tile.itemStyle.color, other))
    }
    // The largest takes the first colour, as ECharts lays it out first; the third is aurora's pale yellow.
    const named = (name: string) => tree.find((tile) => tile.name === name)!
    expect(named('WA').itemStyle.color).toBe('#5470c6')
    expect(named('WA').label.color).toBe('#fff')
    expect(named('CA').itemStyle.color).toBe('#91cc75')
    expect(named('OR').itemStyle.color).toBe('#fac858')
    expect(named('OR').label.color).not.toBe('#fff')
  })

  it('are written in whichever of dark and white reads better, in every palette and on a dark board too', () => {
    for (const palette of Object.keys(PALETTES))
      for (const textColor of ['rgb(20, 20, 20)', 'rgb(230, 230, 230)']) {
        const tree = option('treemap', STORES, { palette, textColor }).series[0].data as Tile[]
        for (const tile of tree.flatMap(all)) expect(contrast(tile.itemStyle.color, tile.label.color)).toBeGreaterThan(4)
      }
    // Forest's middle green is bright by the board's measure of brightness, yet reads white at barely 2.4 to 1.
    const green = (option('treemap', STORES, { palette: 'forest' }).series[0].data as Tile[]).find((tile) => tile.itemStyle.color === '#80b918')!
    expect(green.label.color).not.toBe('#fff')
  })

  it('name a tile with tiles inside in a colour that reads on its title bar, which ECharts draws lighter than the tile', () => {
    const tree = option('treemap', STORES, { palette: 'forest' }).series[0].data as Tile[]
    const levels = option('treemap', STORES, { palette: 'forest' }).series[0].levels
    for (const tile of tree) {
      const bar = modifyHSL(tile.itemStyle.color, undefined, undefined, levels[1].itemStyle.borderColorSaturation)!
      expect(atLightness(tile.itemStyle.color, levels[1].itemStyle.borderColorSaturation)).toBe(withAlpha(bar, 1))
      expect(contrast(bar, tile.upperLabel.color)).toBeGreaterThan(4)
    }
    // Forest's deep teal is drawn as a pale mint bar, which white on it was barely seen.
    const teal = tree.find((tile) => tile.itemStyle.color === '#007f5f')!
    expect(teal.label.color).toBe('#fff')
    expect(teal.upperLabel.color).not.toBe('#fff')
  })

  it('read a single row of several numbers as one tile per column', () => {
    // What an XMLA source answers for the measure on columns and the members on rows: the members turn into columns.
    const table = { headers: ['Caption', 'Q1 - Drink', 'Q1 - Food', 'Q2 - Food'], rows: [['Unit Sales', '5976', '47809', '44825']] }
    const drawn = option('treemap', table).series[0]
    expect(drawn.name).toBe('Unit Sales')
    expect(drawn.data.map((tile: Tile) => [tile.name, tile.value])).toEqual([
      ['Q1', 53785],
      ['Q2', 44825],
    ])
    // A column the settings name is still the one the tiles are sized by.
    expect(option('treemap', table, { valueColumn: 'Q1 - Food' }).series[0].data).toHaveLength(1)
  })

  it('go deeper on a click only where tiles are hidden beneath, and never slide off the chart', () => {
    const deep = option('treemap', { headers: ['Caption', 'Sales'], rows: [['WA - Tacoma - Store 17', 74843], ['CA - San Diego - Store 24', 54431]] }).series[0]
    expect(deep.leafDepth).toBe(2)
    // ECharts' zoomToNode moves a large tile to the middle of a chart that cannot be dragged back.
    expect(deep.nodeClick).not.toBe('zoomToNode')
    expect(deep.nodeClick).toBeTruthy()
    expect(deep.roam).toBe(false)
    expect([...deep.data, ...deep.data.flatMap((tile: Tile) => tile.children ?? [])].some((tile: { link?: string }) => tile.link)).toBe(false)
  })

  it('of hundreds are cut by thinner gaps and rounder corners than a level of three', () => {
    const rows = Array.from({ length: 300 }, (_, i) => [`Family ${i % 3} - Item ${i}`, 1 + i])
    const levels = option('treemap', { headers: ['Caption', 'Units'], rows }).series[0].levels
    // The root parts the three families as widely as before; each family its hundred items barely.
    expect(levels[0].itemStyle.gapWidth).toBe(4)
    expect(levels[1].itemStyle.gapWidth).toBeLessThan(1)
    expect(levels[2].itemStyle.borderRadius).toBeLessThan(levels[1].itemStyle.borderRadius)
    const few = option('treemap', STORES).series[0].levels
    expect(few[1].itemStyle).toMatchObject({ gapWidth: 2, borderRadius: 4 })
  })
})

describe('tile labels', () => {
  const label = (width: number, height: number, text = '▶ Walla Walla\n4,705.97') => fitted({ text, rect: { width, height } }).fontSize

  it('are written at full size where the tile holds them', () => {
    expect(label(200, 80)).toBe(12)
  })

  it('are written smaller before a value is cut to a different number', () => {
    const size = label(65, 60)
    expect(size).toBeLessThan(12)
    expect(size).toBeGreaterThanOrEqual(9)
  })

  it('are left to the tooltip in a tile too narrow or too low for them', () => {
    expect(label(20, 70)).toBeLessThan(1)
    expect(label(200, 18)).toBeLessThan(1)
  })
})
