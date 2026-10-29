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
import { getMdxRequest } from './MdxRequestConstructor'
import { getRowsDrilldownRequestString } from './Drilldown'
import { parseMdxRequest, parseRequestToTable } from './MdxRequestHelper'

const levels = [
  { HIERARCHY_UNIQUE_NAME: '[Gender]', LEVEL_UNIQUE_NAME: '[Gender].[(All)]', LEVEL_NUMBER: '0' },
  { HIERARCHY_UNIQUE_NAME: '[Gender]', LEVEL_UNIQUE_NAME: '[Gender].[Gender]', LEVEL_NUMBER: '1' },
  { HIERARCHY_UNIQUE_NAME: '[Marital Status]', LEVEL_UNIQUE_NAME: '[Marital Status].[(All)]', LEVEL_NUMBER: '0' },
  { HIERARCHY_UNIQUE_NAME: '[Marital Status]', LEVEL_UNIQUE_NAME: '[Marital Status].[Marital Status]', LEVEL_NUMBER: '1' },
  { HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[(All)]', LEVEL_NUMBER: '0' },
  { HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[Store Name]', LEVEL_NUMBER: '1' },
]
const hierarchy = (name: string) => ({
  id: name,
  caption: name,
  type: 'Hierarchy',
  originalItem: { HIERARCHY_UNIQUE_NAME: name },
  filters: { enabled: false },
})
const values = { id: 'Values', type: 'Values', originalItem: { HIERARCHY_UNIQUE_NAME: 'Values' } }
const unitSales = { originalItem: { MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]' } }
const allOf = (name: string) => ({ UName: `[${name}].[All ${name}]`, LNum: '0', HIERARCHY_UNIQUE_NAME: `[${name}]` })

/** The hierarchies each operand of the column CrossJoin speaks of. */
const operandHierarchies = (mdx: string) =>
  mdx
    .replace(/\s+/g, ' ')
    .split('Hierarchize(')
    .slice(1)
    .map(part => [...new Set([...part.matchAll(/\[(Gender|Marital Status)\]/g)].map(m => m[1]))])

describe('expanding on columns', () => {
  it('opens each hierarchy with its own members, as rows do', async () => {
    const expanded = [allOf('Marital Status'), allOf('Gender')]
    const mdx = await getMdxRequest(
      'Sales', [], [], [], expanded, [values], [hierarchy('[Gender]'), hierarchy('[Marital Status]')], [unitSales], {}, [], [], levels,
    )
    // Was: both operands built from Marital Status, Gender's member opened in it - refused by the server.
    expect(operandHierarchies(mdx)).toEqual([['Gender'], ['Marital Status']])
  })
})

describe('member properties', () => {
  const properties = [{ HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[Store Name]', PROPERTY_NAME: 'Store Type' }]
  const request = (settings: object) =>
    getMdxRequest('Sales', [], [], [], [], [hierarchy('[Store]')], [values], [unitSales], settings, properties, [], levels)

  it('are left out when the pivot table does not show them', async () => {
    expect(await request({ showRowsProperties: false, showColumnsProperties: false })).not.toContain('[Store Type]')
  })

  it('are asked for when it does', async () => {
    expect(await request({ showRowsProperties: true })).toContain('[Store].[Store Name].[Store Type]')
  })

  it('are asked for when nobody says - the table and the OGC composer read them', async () => {
    expect(await request({})).toContain('[Store].[Store Name].[Store Type]')
  })
})

describe('drilldown members', () => {
  it('reach the axis they were made on', async () => {
    const { XmlaStore } = await import('../classes/index')
    const store = Object.create(XmlaStore.prototype)
    const rowsMember = { UName: '[Gender].[F]', LName: '[Gender].[Gender]', HIERARCHY_UNIQUE_NAME: '[Gender]' }
    Object.assign(store, {
      cube: 'Sales',
      requestParams: { rows: [hierarchy('[Gender]')], columns: [values], measures: [unitSales], filters: [] },
      drilldownHandler: {
        rowsDrilldownMembers: [rowsMember],
        columnsDrilldownMembers: [],
        rowsExpandedMembers: [],
        columnsExpandedMembers: [],
        // The store flushes what no longer sits on an axis before it asks; nothing to flush here.
        flushExpands: () => {},
        flushDrilldowns: () => {},
      },
      // Read from the field or from what loading returns - versions of the store differ.
      metadata: { getProperties: () => [], getLevels: () => levels },
      loadMetadata: async () => ({ getProperties: () => [], getLevels: () => levels }),
      // The store that loads only the query's own hierarchies asks through this.
      queryMetadata: async () => ({ getProperties: () => [], getLevels: () => levels }),
    })
    const mdx = await store.getMdxRequest({})
    expect(mdx).toContain('Descendants([Gender].[F])')
  })
})

describe('levels compared by number', () => {
  it('takes level 10 as deeper than level 9', async () => {
    const deep = Array.from({ length: 12 }, (_, i) => ({
      HIERARCHY_UNIQUE_NAME: '[Org]',
      LEVEL_UNIQUE_NAME: `[Org].[L${i}]`,
      LEVEL_NUMBER: String(i),
    }))
    const member = { UName: '[Org].[x]', LName: '[Org].[L9]', HIERARCHY_UNIQUE_NAME: '[Org]' }
    const { select } = await getRowsDrilldownRequestString(hierarchy('[Org]'), member, [], deep)
    expect(select).toContain('[Org].[L9]')
    expect(select).not.toContain('[Org].[L10]')
    expect(select).not.toContain('[Org].[L11]')
  })
})

/* ---------------------------------------------------------------- parsing */

type MemberSpec = { u: string; c: string }
/** An Execute answer in the shape the client hands over; cells by ordinal, any of them left out. */
function answer(axes: MemberSpec[][], cells: Record<number, string>) {
  return {
    Body: {
      ExecuteResponse: {
        return: {
          root: {
            Axes: {
              Axis: axes.map((positions, i) => ({
                __attrs: { name: `Axis${i}` },
                Tuples: { Tuple: positions.map(m => ({ Member: { UName: m.u, Caption: m.c } })) },
              })),
            },
            CellData: {
              Cell: Object.entries(cells).map(([ordinal, value]) => ({ Value: value, __attrs: { CellOrdinal: ordinal } })),
            },
          },
        },
      },
    },
  }
}

const quarters: MemberSpec[] = [
  { u: '[Time].[1997]', c: '1997' },
  { u: '[Time].[1997].[Q1]', c: 'Q1' },
  { u: '[Time].[1998]', c: '1998' },
  { u: '[Time].[1998].[Q1]', c: 'Q1' },
]

describe('the table', () => {
  it('keeps members of the same caption apart', () => {
    const table = parseRequestToTable(answer([[{ u: '[Measures].[Unit Sales]', c: 'Unit Sales' }], quarters], { 0: '10', 1: '3', 2: '20', 3: '5' }), 0)
    expect(new Set(table.headers).size).toBe(table.headers.length)
    expect(Object.keys(table.items[0])).toHaveLength(5)
    // By header: an object puts number-like keys (1997) first, whatever the order they came in.
    expect(table.headers.map((h: string) => table.items[0][h])).toEqual(['Unit Sales', '10', '3', '20', '5'])
  })

  it('keeps rows of the same caption apart, and their properties with them', () => {
    const table = parseRequestToTable(answer([quarters, [{ u: '[Measures].[Unit Sales]', c: 'Unit Sales' }]], { 0: '10', 1: '3', 2: '20', 3: '5' }), 0)
    const captions = table.items.map((row: Record<string, string>) => row.Caption)
    expect(new Set(captions).size).toBe(4)
    for (const caption of captions) expect(table.rowProperties[caption]).toBeDefined()
    expect(table.rowProperties[captions[3]].UName).toBe('[Time].[1998].[Q1]')
  })

  it('puts a cell where its ordinal says, with others left out', () => {
    const table = parseRequestToTable(answer([[{ u: '[M].[a]', c: 'a' }], quarters], { 3: '5' }), 0)
    expect(table.headers.map((h: string) => table.items[0][h])).toEqual(['a', undefined, undefined, undefined, '5'])
  })
})

describe('the pivot table', () => {
  const params = { rows: [{}], columns: [{}], measures: [], properties: [], showRowsProperties: false, showColumnsProperties: false }

  it('puts a cell where its ordinal says, with others left out', () => {
    const parsed = parseMdxRequest(
      answer([[{ u: '[M].[a]', c: 'a' }, { u: '[M].[b]', c: 'b' }], [{ u: '[P].[x]', c: 'x' }, { u: '[P].[y]', c: 'y' }]], { 1: '7', 2: '9' }),
      params,
    )!
    expect(parsed.cells.map((row: { Value?: string }[]) => row.map(c => c.Value))).toEqual([[undefined, '7'], ['9', undefined]])
  })
})

describe('a lone measure with its header hidden', () => {
  const female = { u: '[Gender].[F]', c: 'F' }
  const male = { u: '[Gender].[M]', c: 'M' }
  // The board's pivot widget hides a single measure's header; the preview says nothing.
  const settings = { showSingleMeasureHeader: false }

  async function storeWith(rows: any[], columns: any[]) {
    const { XmlaStore } = await import('../classes/index')
    const store = Object.create(XmlaStore.prototype)
    const metadata = { getProperties: () => [], getLevels: () => levels, getDimensions: () => [] }
    Object.assign(store, {
      cube: 'Sales',
      askUpdateable: false,
      requestParams: { rows, columns, measures: [unitSales], filters: [], pages: [], chapters: [] },
      drilldownHandler: {
        rowsDrilldownMembers: [], columnsDrilldownMembers: [], rowsExpandedMembers: [], columnsExpandedMembers: [],
        flushExpands: () => {}, flushDrilldowns: () => {},
      },
      metadata,
      queryMetadata: async () => metadata,
    })
    return store
  }

  it('keeps Gender on the rows, where the designer put it', async () => {
    const store = await storeWith([hierarchy('[Gender]')], [values])
    const mdx = await store.getMdxRequest(settings)
    // Values left the columns, so the request has one axis.
    expect(mdx).toMatch(/ON 0/)
    expect(mdx).not.toMatch(/ON 1/)

    // Was: read against Values still on the columns, and Gender came back across them.
    const table = store.parseToPivotTable(answer([[female, male]], { 0: '10', 1: '20' }), settings)
    expect(table.rows.map((tuple: any[]) => tuple[0].UName)).toEqual(['[Gender].[F]', '[Gender].[M]'])
    expect(table.columns.flat().map((member: any) => member.UName)).not.toContain('[Gender].[F]')
  })

  it('keeps Gender on the columns, where the designer put it there', async () => {
    const store = await storeWith([values], [hierarchy('[Gender]')])
    const table = store.parseToPivotTable(answer([[female, male]], { 0: '10', 1: '20' }), settings)
    expect(table.columns.map((tuple: any[]) => tuple[0].UName)).toEqual(['[Gender].[F]', '[Gender].[M]'])
  })
})
