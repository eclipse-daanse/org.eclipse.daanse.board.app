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
