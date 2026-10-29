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
import { DrilldownHandler } from './DrilldownHandler'
import { getMdxRequest } from '../utils/MdxRequestConstructor'

const allMonths = { UName: '[Time.Month].[All Time.Months]', HIERARCHY_UNIQUE_NAME: '[Time.Month]', LNum: '0' }
const allDays = { UName: '[Day of Week].[All Days]', HIERARCHY_UNIQUE_NAME: '[Day of Week]', LNum: '0' }

describe('DrilldownHandler expanding and collapsing', () => {
  it('expands a member once, however often it is asked', () => {
    const handler = new DrilldownHandler(null)
    handler.expandOnColumns(allMonths)
    handler.expandOnColumns(allMonths)
    handler.expandOnRows(allDays)
    handler.expandOnRows(allDays)

    expect(handler.columnsExpandedMembers).toEqual([allMonths])
    expect(handler.rowsExpandedMembers).toEqual([allDays])
  })

  it('leaves the others open when collapsing one that is not open', () => {
    const handler = new DrilldownHandler(null)
    handler.expandOnColumns(allMonths)
    handler.expandOnRows(allDays)

    handler.collapseOnColumns({ ...allMonths, UName: '[Time.Month].[1]' })
    handler.collapseOnRows({ ...allDays, UName: '[Day of Week].[Monday]' })

    expect(handler.columnsExpandedMembers).toEqual([allMonths])
    expect(handler.rowsExpandedMembers).toEqual([allDays])
  })
})

describe('DrilldownHandler drilling down and up', () => {
  const levels = [
    { HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[(All)]', LEVEL_NUMBER: '0' },
    { HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[Country]', LEVEL_NUMBER: '1' },
    { HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[State]', LEVEL_NUMBER: '2' },
  ]
  const usa = { UName: '[Store].[USA]', LName: '[Store].[Country]', LNum: '1', HIERARCHY_UNIQUE_NAME: '[Store]', PARENT_UNIQUE_NAME: '[Store].[All Stores]' }
  const ca = { UName: '[Store].[USA].[CA]', LName: '[Store].[State]', LNum: '2', HIERARCHY_UNIQUE_NAME: '[Store]', PARENT_UNIQUE_NAME: '[Store].[USA]' }

  const allStores = { UName: '[Store].[All Stores]', LName: '[Store].[(All)]', LNum: '0', HIERARCHY_UNIQUE_NAME: '[Store]', PARENT_UNIQUE_NAME: '' }

  it('drills into a column member and out again, one level at a time', () => {
    const handler = new DrilldownHandler(null)
    handler.handleDrilldown({ value: ca as any, area: 'columns' })
    expect(handler.columnsDrilldownMembers).toEqual([ca])

    handler.handleDrillup({ value: ca as any, area: 'columns' }, levels)
    expect(handler.columnsDrilldownMembers).toEqual([
      { UName: '[Store].[USA]', LName: '[Store].[Country]', HIERARCHY_UNIQUE_NAME: '[Store]', LNum: '1' },
    ])

    // From a country up to its top member, drilled into: the countries again.
    handler.handleDrillup({ value: usa as any, area: 'columns' }, levels)
    expect(handler.columnsDrilldownMembers).toEqual([
      { UName: '[Store].[All Stores]', LName: '[Store].[(All)]', HIERARCHY_UNIQUE_NAME: '[Store]', LNum: '0' },
    ])

    handler.handleDrillup({ value: allStores as any, area: 'columns' }, levels)
    expect(handler.columnsDrilldownMembers).toEqual([])
  })

  it('drills into the top member, the only one a hierarchy shows at first', () => {
    const handler = new DrilldownHandler(null)
    handler.handleDrilldown({ value: allStores as any, area: 'rows' })
    expect(handler.rowsDrilldownMembers).toEqual([allStores])

    handler.handleDrillup({ value: allStores as any, area: 'rows' }, levels)
    expect(handler.rowsDrilldownMembers).toEqual([])
  })

  it('replaces the drilldown of the same hierarchy and keeps another one', () => {
    const handler = new DrilldownHandler(null)
    handler.drilldownOnRows(usa)
    handler.drilldownOnRows({ ...allDays })
    handler.drilldownOnRows(allStores)
    expect(handler.rowsDrilldownMembers).toEqual([allStores, allDays])
  })

  it('asks for the children of the top member it drilled into', async () => {
    const handler = new DrilldownHandler(null)
    const store = { id: '[Store]', type: 'Hierarchy', originalItem: { HIERARCHY_UNIQUE_NAME: '[Store]' }, filters: { enabled: false } }
    const values = { id: 'Values', type: 'Values', originalItem: { HIERARCHY_UNIQUE_NAME: 'Values' } }
    const unitSales = { originalItem: { MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]' } }
    const mdx = () => getMdxRequest(
      'Sales',
      handler.rowsDrilldownMembers, handler.columnsDrilldownMembers,
      handler.rowsExpandedMembers, handler.columnsExpandedMembers,
      [store], [values], [unitSales], {}, [], [], levels,
    ).then(text => text.replace(/\s+/g, ' '))

    // Before: the top level's members alone, the same query as before the menu was used.
    expect(await mdx()).toContain('Hierarchize(AddCalculatedMembers({[Store].[(All)].members}))')

    handler.handleDrilldown({ value: allStores as any, area: 'rows' })
    const drilled = await mdx()
    expect(drilled).toContain('Descendants([Store].[All Stores])')
    expect(drilled).toContain('DrilldownLevel({ [Store].[(All)] })')
    expect(drilled).not.toContain('{[Store].[(All)].members}')
  })
})
