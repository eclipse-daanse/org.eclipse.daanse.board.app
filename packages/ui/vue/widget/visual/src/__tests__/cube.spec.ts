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
import { draw } from '../drawing'
import { asTable } from '../table'
import { LOOK, SALES, problem } from './fixtures'

describe('the cube', () => {
  /* What the cube holds, as members and value, in an order that does not depend on the reading. */
  const holds = (drawn: ReturnType<typeof draw>) => {
    if (!('cube' in drawn)) throw new Error('no cube')
    const [xs, ys, zs] = drawn.cube.axes
    return drawn.cube.cells.map((cell) => `${xs[cell.x]}/${ys[cell.y]}/${zs[cell.z]}=${cell.value}`).sort()
  }

  it('stands on two levels of a label and the columns of numbers', () => {
    const table = {
      headers: ['Caption', 'Q1', 'Q2'],
      rows: [
        ['Drink - Small', 1, 2],
        ['Drink - Large', 3, null],
        ['Food - Small', 5, 6],
      ],
    }
    const drawn = draw(asTable(table), { ...LOOK, kind: 'cube' })
    expect(holds(drawn)).toEqual([
      'Drink/Large/Q1=3',
      'Drink/Small/Q1=1',
      'Drink/Small/Q2=2',
      'Food/Small/Q1=5',
      'Food/Small/Q2=6',
    ])
    if (!('cube' in drawn)) return
    // An empty cell is no cell: the view keeps its place with a faint one.
    expect(drawn.cube.axes).toEqual([['Drink', 'Food'], ['Small', 'Large'], ['Q1', 'Q2']])
  })

  it('stands on three levels of a label where there is one column of values, summed where rows meet', () => {
    const table = {
      headers: ['Caption', 'Units'],
      rows: [
        ['USA - Drink - Q1', 4],
        ['USA - Drink - Q1', 1],
        ['Mexico - Food - Q2', 7],
      ],
    }
    expect(holds(draw(asTable(table), { ...LOOK, kind: 'cube' }))).toEqual(['Mexico/Food/Q2=7', 'USA/Drink/Q1=5'])
  })

  it('colours each cell along the scale, the lowest its first colour and the highest its last', () => {
    const table = { headers: ['Caption', 'a', 'b'], rows: [['x - y', 0, 10]] }
    const drawn = draw(asTable(table), { ...LOOK, kind: 'cube', palette: 'ocean' })
    if (!('cube' in drawn)) throw new Error('no cube')
    const colours = Object.fromEntries(drawn.cube.cells.map((cell) => [cell.value, cell.colour]))
    expect(colours[0]).toBe('#e0f3fb')
    expect(colours[10]).toBe('#0b2f63')
  })

  it('stands on the levels of the column headers where the levels are across, as MDX is most often written', () => {
    // Quarters on rows, gender × marital status crossed on columns: the same cube as the other way round.
    const table = {
      headers: ['Caption', 'F - M', 'F - S', 'M - M'],
      rows: [
        ['Q1', 1, 2, 3],
        ['Q2', 4, null, 6],
      ],
    }
    const drawn = draw(asTable(table), { ...LOOK, kind: 'cube' })
    expect(holds(drawn)).toEqual(['F/M/Q1=1', 'F/M/Q2=4', 'F/S/Q1=2', 'M/M/Q1=3', 'M/M/Q2=6'])
    if (!('cube' in drawn)) return
    expect(drawn.cube.axes).toEqual([['F', 'M'], ['M', 'S'], ['Q1', 'Q2']])
  })

  it('says the title the settings give, which no ECharts title shows for it', () => {
    const table = { headers: ['Caption', 'a', 'b'], rows: [['x - y', 1, 2]] }
    const drawn = draw(asTable(table), { ...LOOK, kind: 'cube', title: 'Units by store' })
    if (!('cube' in drawn)) throw new Error('no cube')
    expect(drawn.cube.title).toBe('Units by store')
  })

  it('says a query found nothing where a cube of the right shape came back with every cell empty, not that an axis is missing', () => {
    // 1998 has no sales in FoodMart: the axes come back, the cells do not.
    const table = { headers: ['Caption', 'Q1', 'Q2'], rows: [['F - Deluxe Supermarket', null, null]] }
    expect(problem('cube', table)).toBe('noValues')
  })

  it('keeps the order of the query where a crossjoin under NonEmpty leaves a member out for the first rows', () => {
    // The first product has no sales in a mid-size grocery: that store type, first seen with the
    // second product, still stands between Gourmet and Small, not after Supermarket.
    const table = {
      headers: ['Caption', 'Q1', 'Q2'],
      rows: [
        ['Puffs - Deluxe', 1, 2],
        ['Puffs - Gourmet', 3, 4],
        ['Puffs - Small', 5, 6],
        ['Jerky - Deluxe', 1, 1],
        ['Jerky - Mid-Size', 2, 2],
        ['Jerky - Small', 3, 3],
        ['Broccoli - Large', 4, 4],
        ['Broccoli - Deluxe', 5, 5],
      ],
    }
    const drawn = draw(asTable(table), { ...LOOK, kind: 'cube' })
    if (!('cube' in drawn)) throw new Error('no cube')
    expect(drawn.cube.axes[1]).toEqual(['Large', 'Deluxe', 'Gourmet', 'Mid-Size', 'Small'])
    // The cells follow their members to the places they took.
    expect(holds(drawn)).toContain('Jerky/Mid-Size/Q2=2')
    expect(holds(drawn)).toContain('Broccoli/Large/Q1=4')
  })

  it('names each member once on its axis, however often and in whatever order it comes back', () => {
    const table = { headers: ['Caption', 'Units'], rows: [['USA - Drink - Q1', 1], ['Mexico - Drink - Q1', 2], ['USA - Food - Q2', 3]] }
    const drawn = draw(asTable(table), { ...LOOK, kind: 'cube' })
    if (!('cube' in drawn)) throw new Error('no cube')
    expect(drawn.cube.axes).toEqual([['USA', 'Mexico'], ['Drink', 'Food'], ['Q1', 'Q2']])
  })

  it('has no third axis in a flat table, and says so', () => {
    expect(problem('cube', SALES)).toBe('needsThreeAxes')
  })
})

