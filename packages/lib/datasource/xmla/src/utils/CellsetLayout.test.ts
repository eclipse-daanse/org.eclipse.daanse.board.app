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
 **********************************************************************/

import { describe, expect, it } from 'vitest'
import {
  cellsetToCsv,
  combinationsOf,
  getCell,
  parseCellset,
  permuteAxes,
  positionsOf,
  type Cellset,
} from './Cellset'
import { columnLabel, isTabularStatement, rowsToCsv, tabularRows } from './Tabular'
import sales from './__fixtures__/sales-4-axes.json'

/* FoodMart Sales, four axes: measures · products · time · stores (see Cellset.test.ts). */
const cellset = parseCellset(sales) as Cellset
const sizes = cellset.axes.map(axis => axis.positions.length)

describe('permuteAxes', () => {
  it('moves every cell to where its coordinates point under the new order', () => {
    const turned = permuteAxes(cellset, [2, 1, 0, 3])
    expect(turned.axes.map(axis => axis.positions.length)).toEqual([sizes[2], sizes[1], sizes[0], sizes[3]])
    for (let m = 0; m < sizes[0]; m++)
      for (let p = 0; p < sizes[1]; p++)
        for (let t = 0; t < sizes[2]; t++)
          for (let s = 0; s < sizes[3]; s++) {
            expect(getCell(turned, [t, p, m, s])).toEqual(getCell(cellset, [m, p, t, s]))
          }
  })

  it('keeps the positions with their axis', () => {
    const turned = permuteAxes(cellset, [3, 2, 1, 0])
    expect(positionsOf(turned, 0).map(p => p.key)).toEqual(positionsOf(cellset, 3).map(p => p.key))
    expect(turned.axesInfo[0].__attrs.name).toBe('Axis0')
  })

  it('refuses something that is not an order of the axes', () => {
    expect(() => permuteAxes(cellset, [0, 0, 1, 2])).toThrow()
    expect(() => permuteAxes(cellset, [0, 1])).toThrow()
  })
})

describe('combinationsOf', () => {
  it('names every page and chapter once', () => {
    expect(combinationsOf(cellset)).toHaveLength(sizes[2] * sizes[3])
    // The page is the outer loop, the chapter the inner one.
    expect(combinationsOf(cellset)[1]).toEqual([0, 1])
  })
})

describe('cellsetToCsv', () => {
  it('writes one line per cell when there are more than two axes', () => {
    const lines = cellsetToCsv(cellset).split('\r\n')
    expect(lines[0]).toBe(`${cellset.axes.map(axis => axis.positions[0].members.map(m => m.hierarchy.replace(/^\[|\]$/g, '')).join(' × ')).join(',')},Value,Formatted`)
    expect(lines[0]).not.toMatch(/Axis\d/)
    expect(lines).toHaveLength(1 + sizes.reduce((a, b) => a * b, 1))
  })

  it('writes the table itself for two axes', () => {
    const flat = permuteAxes(cellset, [0, 1, 2, 3])
    const two: Cellset = { ...flat, axes: flat.axes.slice(0, 2) }
    const lines = cellsetToCsv(two).split('\r\n')
    expect(lines[0].split(',')).toHaveLength(sizes[0] + 1)
    expect(lines).toHaveLength(sizes[1] + 1)
  })
})

describe('tabular answers', () => {
  const answer = {
    Body: {
      ExecuteResponse: {
        return: {
          root: {
            row: [
              { _x005B_Store_x005D_: 'Store 1', Sales: '12.5', __attrs: {} },
              { _x005B_Store_x005D_: 'Store, 2', Sales: { __attrs: {} } },
            ],
          },
        },
      },
    },
  }

  it('reads rows as records, an empty element as no value', () => {
    expect(tabularRows(answer)).toEqual([
      { _x005B_Store_x005D_: 'Store 1', Sales: '12.5' },
      { _x005B_Store_x005D_: 'Store, 2', Sales: '' },
    ])
  })

  it('decodes column names and quotes what needs quoting', () => {
    expect(columnLabel('_x005B_Store_x005D_')).toBe('[Store]')
    expect(rowsToCsv(tabularRows(answer)).split('\r\n')).toEqual(['[Store],Sales', 'Store 1,12.5', '"Store, 2",'])
  })

  it('reads the rows of a DMV that eMondrian answers as a Discover', () => {
    const answer = { Body: { DiscoverResponse: { return: { root: { row: [{ CUBE_NAME: 'Sales' }, { CUBE_NAME: 'HR' }] } } } } }
    expect(tabularRows(answer).map(row => row.CUBE_NAME)).toEqual(['Sales', 'HR'])
  })

  it('writes an empty element as an empty cell, a nested one as JSON', () => {
    const csv = rowsToCsv([{ A: {}, B: { x: '1' }, C: 'c' }])
    expect(csv.split('\r\n')[1]).toBe(',"{""x"":""1""}",c')
  })

  it('knows which statements answer with rows', () => {
    expect(isTabularStatement('DRILLTHROUGH SELECT FROM [Sales]')).toBe(true)
    expect(isTabularStatement('-- schema\nSELECT * FROM $SYSTEM.MDSCHEMA_CUBES')).toBe(true)
    expect(isTabularStatement('SELECT {} ON 0 FROM [Sales]')).toBe(false)
  })
})
