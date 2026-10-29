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
  alignSlices,
  axisCount,
  axisOptions,
  axisTree,
  changes,
  difference,
  getCell,
  isAdditive,
  measuresOf,
  getSlice,
  isSignificant,
  isTimeAxis,
  parseCellset,
  positionsOf,
  sliceByKeys,
  sliceKeys,
  sliceResponse,
  slicesOf,
  sliceValue,
  type Cellset,
  type LegacyNode,
} from './Cellset'
import { parseMdxRequest } from './MdxRequestHelper'
import sales from './__fixtures__/sales-4-axes.json'
import salesMetadata from './__fixtures__/sales-4-axes.metadata.json'

/*
 * sales-4-axes.json is FoodMart's Sales cube as demo.emondrian.com answered:
 *   0  Unit Sales, Store Sales
 *   1  All Products, Drink, Food, Non-Consumable
 *   2  1997, its quarters, 1998, its quarters  (time; 1998 has no data)
 *   3  Canada, Mexico, USA and their states    (Canada, Mexico: no data)
 */
const cellset = parseCellset(sales) as Cellset
const at = (axis: number, caption: string) =>
  positionsOf(cellset, axis).findIndex(p => p.label === caption)
const USA = at(3, 'USA')
const CANADA = at(3, 'Canada')
const Y1997 = at(2, '1997')
const Y1998 = at(2, '1998')

type MemberSpec = string | { u: string; parent?: string; lnum?: number; h?: string; caption?: string }

/** A small Execute answer in the former shape, for the cases a real one lacks. */
function response(axes: MemberSpec[][][], values: Record<number, number | string>, formatString = 'Standard') {
  const member = (spec: MemberSpec) => {
    const m = typeof spec === 'string' ? { u: spec } : spec
    const hierarchy = m.h ?? m.u.slice(0, m.u.indexOf(']') + 1)
    return {
      UName: m.u,
      Caption: m.caption ?? m.u.slice(m.u.lastIndexOf('[') + 1, -1),
      LName: `${hierarchy}.[L${m.lnum ?? 1}]`,
      LNum: String(m.lnum ?? 1),
      ...(m.parent ? { PARENT_UNIQUE_NAME: m.parent } : {}),
      __attrs: { Hierarchy: hierarchy },
    }
  }
  return {
    Body: {
      ExecuteResponse: {
        return: {
          root: {
            OlapInfo: { AxesInfo: { AxisInfo: axes.map((_, i) => ({ __attrs: { name: `Axis${i}` } })) } },
            Axes: {
              Axis: axes.map((positions, i) => ({
                __attrs: { name: `Axis${i}` },
                Tuples: { Tuple: positions.map(members => ({ Member: members.map(member) })) },
              })),
            },
            CellData: {
              Cell: Object.entries(values).map(([ordinal, value]) => ({
                Value: String(value),
                FmtValue: String(value),
                FormatString: formatString,
                __attrs: { CellOrdinal: ordinal },
              })),
            },
          },
        },
      },
    },
  }
}

describe('parseCellset on a recorded 4-axis answer', () => {
  it('keeps all four axes', () => {
    expect(axisCount(cellset)).toBe(4)
    expect(cellset.axes.map(a => a.positions.length)).toEqual([2, 4, 10, 13])
    expect(positionsOf(cellset, 1).map(p => p.label)).toEqual(['All Products', 'Drink', 'Food', 'Non-Consumable'])
  })

  it('reads a member with its parent, and none at the top', () => {
    const [year, quarter] = positionsOf(cellset, 2)
    expect(year.members[0]).toMatchObject({ uniqueName: '[Time].[1997]', parentUniqueName: null, levelNumber: 0 })
    expect(quarter.members[0]).toMatchObject({ uniqueName: '[Time].[1997].[Q1]', parentUniqueName: '[Time].[1997]' })
  })

  it('finds a cell by its position on each axis', () => {
    expect(getCell(cellset, [0, 0, Y1997, USA])).toMatchObject({ value: 266773, formatted: '266,773' })
  })

  it('answers null for an empty cell, never 0', () => {
    expect(getCell(cellset, [0, 0, Y1997, CANADA])).toBeNull()
    expect(getCell(cellset, [0, 0, Y1998, USA])).toBeNull()
  })

  it('answers null outside the cellset', () => {
    expect(getCell(cellset, [5, 0, 0, 0])).toBeNull()
    expect(getCell(cellset, [0, -1, 0, 0])).toBeNull()
  })
})

describe('getSlice', () => {
  it('is the table of axes 0 and 1 at one page and chapter', () => {
    const slice = getSlice(cellset, { axis2: Y1997, axis3: USA })
    expect(slice.columns.map(c => c.label)).toEqual(['Unit Sales', 'Store Sales'])
    expect(slice.rows).toHaveLength(4)
    expect(slice.cells[0][0]?.value).toBe(266773)
    expect(slice.cells[1][0]?.value).toBe(24597)
  })

  it('keeps an empty slice empty', () => {
    const slice = getSlice(cellset, { axis2: Y1997, axis3: CANADA })
    expect(slice.cells.flat().every(c => c === null)).toBe(true)
  })
})

describe('sliceResponse', () => {
  const parse = (response: LegacyNode) =>
    parseMdxRequest(response, {
      rows: [{}],
      columns: [{}],
      measures: [],
      properties: [],
      showRowsProperties: false,
      showColumnsProperties: false,
    })!

  it('reads in parseMdxRequest as a two-axis answer would', () => {
    const table = parse(sliceResponse(cellset, { axis2: Y1997, axis3: USA }))

    expect(table.columns).toHaveLength(2)
    expect(table.rows.map((r: LegacyNode) => r[0].Caption)).toEqual(['All Products', 'Drink', 'Food', 'Non-Consumable'])
    expect(table.cells[0][0]).toMatchObject({ Value: '266773', FmtValue: '266,773' })
  })

  it('keeps every ordinal, so an empty cell does not shift the ones after it', () => {
    const table = parse(sliceResponse(cellset, { axis2: Y1998, axis3: USA }))
    expect(table.cells).toHaveLength(4)
    expect(table.cells.every((row: LegacyNode[]) => row.length === 2 && row.every(c => c.Value === undefined))).toBe(true)
  })
})

describe('axisTree', () => {
  it('hangs quarters under their year', () => {
    const tree = axisTree(positionsOf(cellset, 2))
    expect(tree.map(n => n.position.label)).toEqual(['1997', '1998'])
    expect(tree[0].children.map(n => n.position.label)).toEqual(['Q1', 'Q2', 'Q3', 'Q4'])
  })

  it('keeps a member whose parent is not on the axis at the top', () => {
    const tree = axisTree(positionsOf(cellset, 3))
    expect(tree.map(n => n.position.label)).toEqual(['Canada', 'Mexico', 'USA'])
    expect(tree[2].children.map(n => n.position.label)).toEqual(['CA', 'OR', 'WA'])
  })

  it('is a flat list for tuples of several hierarchies', () => {
    const crossed = parseCellset(
      response([[['[M].[a]']], [['[A].[x]', '[B].[y]'], [{ u: '[A].[x].[c]', parent: '[A].[x]' }, '[B].[y]']]], {}),
    )!
    expect(axisTree(positionsOf(crossed, 1))).toHaveLength(2)
  })
})

describe('axisOptions', () => {
  it('lists an axis in tree order, each with its depth', () => {
    const options = axisOptions(positionsOf(cellset, 2))
    expect(options.map(o => [o.label, o.depth])).toEqual([
      ['1997', 0], ['Q1', 1], ['Q2', 1], ['Q3', 1], ['Q4', 1],
      ['1998', 0], ['Q1', 1], ['Q2', 1], ['Q3', 1], ['Q4', 1],
    ])
    expect(options.map(o => o.index).sort((a, b) => a - b)).toEqual(positionsOf(cellset, 2).map(p => p.index))
  })
})

describe('isTimeAxis', () => {
  it('tells time by the levels the metadata reports', () => {
    expect(isTimeAxis(positionsOf(cellset, 2), salesMetadata)).toBe(true)
    expect(isTimeAxis(positionsOf(cellset, 3), salesMetadata)).toBe(false)
  })

  it('says no when the metadata does not know the levels', () => {
    expect(isTimeAxis(positionsOf(cellset, 2), {})).toBe(false)
  })
})

describe('sliceValue', () => {
  it("takes the cellset's own total where it has one", () => {
    expect(sliceValue(cellset, { axis2: Y1997, axis3: USA }, '[Measures].[Unit Sales]')).toEqual({
      value: 266773,
      kind: 'total',
    })
    expect(sliceValue(cellset, { axis2: Y1997, axis3: USA }, '[Measures].[Store Sales]').value).toBeCloseTo(565238.13, 1)
  })

  it('adds up the leaves where there is no total, and marks it so', () => {
    const noTotal = parseCellset(
      response(
        [[['[Measures].[Sales]']], [['[P].[a]'], ['[P].[b]'], ['[P].[c]']], [['[T].[1]'], ['[T].[2]']]],
        { 0: 1, 1: 2, 3: 10 },
      ),
    )!
    expect(sliceValue(noTotal, { axis2: 0, axis3: -1 })).toEqual({ value: 3, kind: 'sum' })
    expect(sliceValue(noTotal, { axis2: 1, axis3: -1 })).toEqual({ value: 10, kind: 'sum' })
  })

  it('does not add a parent to its own children', () => {
    const nested = parseCellset(
      response(
        [[['[Measures].[Sales]']], [[{ u: '[P].[a]', lnum: 1 }], [{ u: '[P].[a].[x]', parent: '[P].[a]', lnum: 2 }], [{ u: '[P].[b]', lnum: 1 }]]],
        { 0: 5, 1: 5, 2: 7 },
      ),
    )!
    expect(sliceValue(nested, { axis2: -1, axis3: -1 })).toEqual({ value: 12, kind: 'sum' })
  })

  it('adds nothing up for a measure that does not add up', () => {
    const average = parseCellset(
      response([[['[Measures].[Avg Price]']], [['[P].[a]'], ['[P].[b]']]], { 0: 1, 1: 2 }),
    )!
    expect(sliceValue(average, { axis2: -1, axis3: -1 })).toEqual({ value: null, kind: 'none' })
  })

  it('has nothing for an empty slice', () => {
    expect(sliceValue(cellset, { axis2: Y1997, axis3: CANADA }, '[Measures].[Unit Sales]')).toEqual({
      value: null,
      kind: 'none',
    })
  })
})

describe('the measure in the WHERE clause', () => {
  /* One measure, not on an axis: in the slicer, as the pivot puts a lone measure whose header is hidden. */
  const withSlicer = (formatString = '#,###') => {
    const raw = response([[['[Time].[All]']], [['[Day].[All]']], [['[Distance].[A]'], ['[Distance].[B]']]], { 0: 3, 1: 4 }, formatString)
    raw.Body.ExecuteResponse.return.root.Axes.Axis.push({
      __attrs: { name: 'SlicerAxis' },
      Tuples: { Tuple: [{ Member: [{ UName: '[Measures].[Flights]', Caption: 'Flights', LName: '[Measures].[MeasuresLevel]', LNum: '0', __attrs: { Hierarchy: '[Measures]' } }] }] },
    } as never)
    return parseCellset(raw)!
  }

  it('is the measure of the cellset', () => {
    expect(measuresOf(withSlicer()).map(m => m.uniqueName)).toEqual(['[Measures].[Flights]'])
  })

  it('adds up by its name and its format, as one on an axis does', () => {
    expect(isAdditive(withSlicer())).toBe(true)
    expect(isAdditive(withSlicer('0.00%'))).toBe(false)
  })
})

describe('degenerate cellsets', () => {
  it('reads two axes as one slice', () => {
    const two = parseCellset(response([[['[M].[a]'], ['[M].[b]']], [['[P].[x]']]], { 0: 1, 1: 2 }))!
    expect(slicesOf(two)).toEqual([{ axis2: -1, axis3: -1 }])
    expect(getSlice(two, { axis2: -1, axis3: -1 }).cells).toEqual([
      [expect.objectContaining({ value: 1 }), expect.objectContaining({ value: 2 })],
    ])
  })

  it('reads three axes as one slice per page', () => {
    const three = parseCellset(
      response([[['[M].[a]']], [['[P].[x]']], [['[T].[1]'], ['[T].[2]'], ['[T].[3]']]], { 2: 9 }),
    )!
    expect(slicesOf(three)).toHaveLength(3)
    expect(getSlice(three, { axis2: 2, axis3: -1 }).cells[0][0]?.value).toBe(9)
    expect(getSlice(three, { axis2: 0, axis3: -1 }).cells[0][0]).toBeNull()
  })

  it('takes an axis of one member', () => {
    const one = parseCellset(response([[['[M].[a]']], [['[P].[x]']], [['[T].[1]']], [['[S].[1]']]], { 0: 4 }))!
    expect(slicesOf(one)).toEqual([{ axis2: 0, axis3: 0 }])
    expect(getCell(one, [0, 0, 0, 0])?.value).toBe(4)
  })

  it('formats a number itself when the server sends no FmtValue', () => {
    const bare = parseCellset(response([[['[M].[a]']], [['[P].[x]']]], { 0: 752693 }))!
    // Value alone, as the OnTime cube on the demo server answers.
    delete (bare.cells[0] as Record<string, unknown>).FmtValue
    expect(getCell(bare, [0, 0])?.formatted).toBe((752693).toLocaleString())
  })

  it('takes an axis of no members: no slices, no cells', () => {
    const none = parseCellset(response([[['[M].[a]']], [['[P].[x]']], []], {}))!
    expect(slicesOf(none)).toEqual([])
    expect(getCell(none, [0, 0, 0])).toBeNull()
  })

  it('answers null for something that is not a cellset', () => {
    expect(parseCellset({})).toBeNull()
  })
})

describe('alignSlices', () => {
  const left = parseCellset(
    response([[['[M].[a]'], ['[M].[b]']], [['[P].[x]'], ['[P].[y]']]], { 0: 1, 1: 2, 2: 3, 3: 4 }),
  )!
  // The same members, others besides, and in another order.
  const right = parseCellset(
    response([[['[M].[b]'], ['[M].[c]']], [['[P].[z]'], ['[P].[x]']]], { 0: 7, 1: 8, 2: 5, 3: 6 }),
  )!

  it('matches rows and columns by unique name, over the union of both', () => {
    const aligned = alignSlices(
      getSlice(left, { axis2: -1, axis3: -1 }),
      getSlice(right, { axis2: -1, axis3: -1 }),
    )
    expect(aligned.columns.map(c => c.label)).toEqual(['a', 'b', 'c'])
    expect(aligned.rows.map(r => r.label)).toEqual(['x', 'y', 'z'])

    const values = (side: typeof aligned.a) => side.map(row => row.map(c => c?.value ?? null))
    expect(values(aligned.a)).toEqual([[1, 2, null], [3, 4, null], [null, null, null]])
    expect(values(aligned.b)).toEqual([[null, 5, 6], [null, null, null], [null, 7, 8]])
  })

  it('tells rows that change from rows that do not', () => {
    const same = getSlice(left, { axis2: -1, axis3: -1 })
    const aligned = alignSlices(same, same)
    expect(changes(aligned, 0, null)).toBe(false)
    expect(changes(alignSlices(same, getSlice(right, { axis2: -1, axis3: -1 })), 0, null)).toBe(true)
  })
})

describe('difference', () => {
  it('is B - A, and its share of |A|', () => {
    expect(difference(100, 150)).toEqual({ absolute: 50, percent: 50 })
    expect(difference(-200, -100)).toEqual({ absolute: 100, percent: 50 })
    expect(difference(50, -50)).toEqual({ absolute: -100, percent: -200 })
  })

  it('has no percentage against zero, rather than Infinity', () => {
    expect(difference(0, 10)).toEqual({ absolute: 10, percent: null })
    expect(difference(0, 0)).toEqual({ absolute: 0, percent: null })
  })

  it('is nothing where either side is empty, rather than NaN', () => {
    expect(difference(null, 10)).toEqual({ absolute: null, percent: null })
    expect(difference(10, null)).toEqual({ absolute: null, percent: null })
    expect(difference(Number.NaN, 1)).toEqual({ absolute: null, percent: null })
  })

  it('is significant from the threshold on', () => {
    expect(isSignificant(difference(100, 104), 5)).toBe(false)
    expect(isSignificant(difference(100, 95), 5)).toBe(true)
    expect(isSignificant(difference(0, 3), 5)).toBe(false)
    expect(isSignificant(difference(0, 7), 5)).toBe(true)
    expect(isSignificant(difference(null, 7), 5)).toBe(false)
  })
})

describe('slices by unique name', () => {
  it('goes from a slice to its keys and back', () => {
    const slice = { axis2: Y1997, axis3: USA }
    const keys = sliceKeys(cellset, slice)
    expect(keys).toEqual({ axis2: '[Time].[1997]', axis3: '[Store].[USA]' })
    expect(sliceByKeys(cellset, { axis2: keys.axis2!, axis3: keys.axis3! })).toEqual(slice)
  })

  it('finds nothing for a member not on the axis', () => {
    expect(sliceByKeys(cellset, { axis2: '[Time].[2042]' })).toBeNull()
  })
})
