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
import { filterMembers } from './filterMembers'
import { getMdxRequest } from './MdxRequestConstructor'

const F = { UName: '[Gender].[F]', LNum: '1' }
const M = { UName: '[Gender].[M]', LNum: '1' }

describe('filterMembers', () => {
  it('takes what was picked, with its ancestors and descendants', () => {
    expect(filterMembers({ multipleChoise: true, selectedItems: [F] }, '[Gender]')).toBe(
      'Intersect({Ascendants([Gender].[F]), Descendants([Gender].[F])}, {Ascendants([Gender].[F]), Descendants([Gender].[F])})',
    )
  })

  it('takes a single choice the same way', () => {
    expect(filterMembers({ selectedItem: M }, '[Gender]')).toContain('Ascendants([Gender].[M]), Descendants([Gender].[M])')
  })

  it('starts "all but" from the whole hierarchy, not from the exceptions', () => {
    expect(filterMembers({ multipleChoise: true, selectAll: true, selectedItems: [], deselectedItems: [F] }, '[Gender]')).toBe(
      'Except({AddCalculatedMembers({[Gender].Members})}, {Descendants([Gender].[F])})',
    )
  })

  it('is the whole hierarchy for "all" without exceptions', () => {
    expect(filterMembers({ multipleChoise: true, selectAll: true, selectedItems: [] }, '[Gender]')).toBe(
      'AddCalculatedMembers({[Gender].Members})',
    )
  })

  it('takes out level by level, so a member picked again under one taken out comes back', () => {
    const members = filterMembers(
      {
        multipleChoise: true,
        selectAll: true,
        deselectedItems: [{ UName: '[Time].[1997]', LNum: '0' }],
        selectedItems: [{ UName: '[Time].[1997].[Q2]', LNum: '1' }],
      },
      '[Time]',
    )
    expect(members).toBe(
      'Union({Ascendants([Time].[1997].[Q2]), Descendants([Time].[1997].[Q2])}, {Except({AddCalculatedMembers({[Time].Members})}, {Descendants([Time].[1997])})})',
    )
  })
})

describe('an axis filter in the query', () => {
  const levels = [
    { HIERARCHY_UNIQUE_NAME: '[Gender]', LEVEL_UNIQUE_NAME: '[Gender].[(All)]', LEVEL_NUMBER: '0' },
    { HIERARCHY_UNIQUE_NAME: '[Gender]', LEVEL_UNIQUE_NAME: '[Gender].[Gender]', LEVEL_NUMBER: '1' },
  ]
  const values = { id: 'Values', type: 'Values', originalItem: { HIERARCHY_UNIQUE_NAME: 'Values' } }
  const unitSales = { originalItem: { MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]' } }
  const gender = (filters: object) => ({
    id: '[Gender]',
    caption: 'Gender',
    type: 'Hierarchy',
    originalItem: { HIERARCHY_UNIQUE_NAME: '[Gender]' },
    filters: { enabled: true, multipleChoise: true, selectedItems: [], ...filters },
  })
  const allButF = gender({ selectAll: true, deselectedItems: [F] })

  it('lets "all but F" through as all but F', async () => {
    const mdx = await getMdxRequest('Sales', [], [], [], [], [allButF], [values], [unitSales], {}, [], [], levels)
    expect(mdx).toMatch(/SET \[FILTER_[^\]]+\] AS 'VisualTotals\(Distinct\(Hierarchize\(Except\(\{AddCalculatedMembers\(\{\[Gender\]\.Members\}\)\}, \{Descendants\(\[Gender\]\.\[F\]\)\}\)\)\)\)'/)
  })

  it('does the same on rows with a member expanded', async () => {
    const expanded = [{ UName: '[Gender].[All Gender]', LNum: '0', HIERARCHY_UNIQUE_NAME: '[Gender]' }]
    const mdx = await getMdxRequest('Sales', [], [], expanded, [], [allButF], [values], [unitSales], {}, [], [], levels)
    expect(mdx).toContain("Except({AddCalculatedMembers({[Gender].Members})}, {Descendants([Gender].[F])})")
  })

  it('has a set to filter by on rows with a member expanded and everything selected', async () => {
    const expanded = [{ UName: '[Gender].[All Gender]', LNum: '0', HIERARCHY_UNIQUE_NAME: '[Gender]' }]
    const all = gender({ selectAll: true })
    const mdx = await getMdxRequest('Sales', [], [], expanded, [], [all], [values], [unitSales], {}, [], [], levels)
    // Was Hierarchize() with nothing in it: a syntax error from the server.
    expect(mdx).not.toContain('Hierarchize()')
    expect(mdx).toContain('Hierarchize(AddCalculatedMembers({[Gender].Members}))')
  })

  it('does the same on columns', async () => {
    const expanded = [{ UName: '[Gender].[All Gender]', LNum: '0', HIERARCHY_UNIQUE_NAME: '[Gender]' }]
    const mdx = await getMdxRequest('Sales', [], [], [], expanded, [values], [allButF], [unitSales], {}, [], [], levels)
    expect(mdx).toContain("Except({AddCalculatedMembers({[Gender].Members})}, {Descendants([Gender].[F])})")
  })
})
