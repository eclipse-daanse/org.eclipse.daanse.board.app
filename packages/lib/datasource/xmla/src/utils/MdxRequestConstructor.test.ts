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
import { getMdxRequest, type NavigationItem } from './MdxRequestConstructor'

// As MDSCHEMA_LEVELS reports them for FoodMart's Sales cube.
const levels = [
  { HIERARCHY_UNIQUE_NAME: '[Gender]', LEVEL_UNIQUE_NAME: '[Gender].[(All)]', LEVEL_NUMBER: '0', LEVEL_TYPE: '1' },
  { HIERARCHY_UNIQUE_NAME: '[Gender]', LEVEL_UNIQUE_NAME: '[Gender].[Gender]', LEVEL_NUMBER: '1', LEVEL_TYPE: '0' },
  { HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[(All)]', LEVEL_NUMBER: '0', LEVEL_TYPE: '1' },
  { HIERARCHY_UNIQUE_NAME: '[Store]', LEVEL_UNIQUE_NAME: '[Store].[Store Country]', LEVEL_NUMBER: '1', LEVEL_TYPE: '0' },
  { HIERARCHY_UNIQUE_NAME: '[Time]', LEVEL_UNIQUE_NAME: '[Time].[Year]', LEVEL_NUMBER: '0', LEVEL_TYPE: '20' },
  { HIERARCHY_UNIQUE_NAME: '[Time]', LEVEL_UNIQUE_NAME: '[Time].[Quarter]', LEVEL_NUMBER: '1', LEVEL_TYPE: '68' },
  { HIERARCHY_UNIQUE_NAME: '[Product]', LEVEL_UNIQUE_NAME: '[Product].[(All)]', LEVEL_NUMBER: '0', LEVEL_TYPE: '1' },
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

function request({
  rows = [hierarchy('[Product]')],
  columns = [values],
  pages = [] as NavigationItem[],
  chapters = [] as NavigationItem[],
  settings = {},
} = {}) {
  return getMdxRequest(
    'Sales', [], [], [], [], rows, columns, [unitSales], settings, [], [], levels, pages, chapters,
  )
}

const axes = (mdx: string) => [...mdx.matchAll(/ON (\d)/g)].map(m => Number(m[1]))

describe('getMdxRequest with pages and chapters', () => {
  it('asks for two axes as before when neither is set', async () => {
    expect(axes(await request())).toEqual([1, 0])
  })

  it('puts pages on axis 2 and chapters on axis 3', async () => {
    const mdx = await request({ pages: [hierarchy('[Time]')], chapters: [hierarchy('[Store]')] })

    expect(axes(mdx)).toEqual([1, 0, 2, 3])
    expect(mdx).toMatch(
      /Descendants\(\{\[Time\]\.\[Year\]\.members\}, 1, SELF_AND_BEFORE\).*ON 2/s,
    )
    expect(mdx).toMatch(/\[Store\]\.\[Store Country\]\.members.*ON 3/s)
  })

  it('starts below (All), which alone would leave nothing to navigate', async () => {
    const mdx = await request({ pages: [hierarchy('[Gender]')] })
    expect(mdx).toContain('{[Gender].[Gender].members}')
    expect(mdx).not.toContain('[Gender].[(All)].members}, 1')
  })

  it('crosses several hierarchies on one page axis', async () => {
    const mdx = await request({ pages: [hierarchy('[Time]'), hierarchy('[Gender]')] })
    expect(mdx).toMatch(/CrossJoin\(.*\[Time\]\.\[Year\].*\[Gender\]\.\[Gender\].*\).*ON 2/s)
  })

  it('leaves out chapters without pages - MDX numbers its axes without gaps', async () => {
    expect(axes(await request({ chapters: [hierarchy('[Store]')] }))).toEqual([1, 0])
  })

  it('keeps a single measure on its axis when pages need it there', async () => {
    // The widget hides a lone measure's header by default; without Values the
    // columns would be empty, and pages and rows with them.
    const mdx = await request({ pages: [hierarchy('[Time]')], settings: { showSingleMeasureHeader: false } })

    expect(axes(mdx)).toEqual([1, 0, 2])
    expect(mdx).toContain('[Product]')
  })

  it('still drops a single measure header without pages', async () => {
    const mdx = await request({ settings: { showSingleMeasureHeader: false } })

    expect(axes(mdx)).not.toContain(2)
  })

  it('leaves out pages when rows or columns are missing', async () => {
    const mdx = await request({ columns: [], pages: [hierarchy('[Time]')] })
    expect(mdx).not.toContain('ON 2')
  })

  it('keeps empty slices out unless asked to show them', async () => {
    const pages = [hierarchy('[Time]')]
    expect(await request({ pages })).toMatch(/NON EMPTY\s+Hierarchize\(AddCalculatedMembers\(Descendants/)
    expect(await request({ pages, settings: { showEmpty: true } })).not.toMatch(/NON EMPTY\s+Hierarchize\(AddCalculatedMembers\(Descendants/)
  })

  it('takes a filtered page axis as the filter says', async () => {
    const filtered = {
      ...hierarchy('[Time]'),
      filters: {
        enabled: true,
        multipleChoise: true,
        selectedItems: [{ UName: '[Time].[1997]', LNum: '0' }],
      },
    }
    const mdx = await request({ pages: [filtered] })
    expect(mdx).toMatch(/SET \[FILTER_[^\]]+\] AS .*\[Time\]\.\[1997\]/s)
    expect(mdx).toMatch(/Intersect\(AddCalculatedMembers\(\{\[Time\]\.\[Year\]\.members\}\), \[FILTER_[^\]]+\]\)\) DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME ON 2/)
  })
})

describe('getMdxRequest and writeback', () => {
  it('asks which cells can be written to', async () => {
    expect(await request()).toMatch(/CELL PROPERTIES [^\n]*UPDATEABLE/)
    expect(await request({ rows: [], columns: [values] })).toMatch(/CELL PROPERTIES [^\n]*UPDATEABLE/)
  })

  it('leaves UPDATEABLE out for a server that does not know it', async () => {
    expect(await request({ settings: { updateable: false } })).not.toContain('UPDATEABLE')
    expect(await request({ rows: [], columns: [values], settings: { updateable: false } })).not.toContain('UPDATEABLE')
  })
})
