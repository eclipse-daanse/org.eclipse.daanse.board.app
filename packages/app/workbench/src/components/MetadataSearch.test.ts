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
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowRef } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { emptyMetadata } from '../state/metadata'
import { WORKBENCH } from '../state/workbench'
import MetadataSearch from './MetadataSearch.vue'

const i18n = { language: 'en', t: (key: string) => key }

/* An Execute answer as the server sends it: one cell per hierarchy asked. */
function answer(cells: string[]) {
  return {
    Body: {
      ExecuteResponse: {
        return: {
          root: {
            Axes: { Axis: [{ __attrs: { name: 'Axis0' }, Tuples: { Tuple: cells.map((_, i) => ({ Member: { UName: `[Measures].[__search ${i}]` } })) } }] },
            CellData: { Cell: cells.map((value, i) => ({ __attrs: { CellOrdinal: String(i) }, Value: value })) },
          },
        },
      },
    },
  }
}

function mountSearch(execute = vi.fn(async (_statement: string) => answer(['', '']))) {
  const metadata = shallowRef({
    ...emptyMetadata(),
    measures: [
      { MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]', MEASURE_NAME: 'Unit Sales', MEASURE_CAPTION: 'Unit Sales' },
      { MEASURE_UNIQUE_NAME: '[Measures].[Profit]', MEASURE_NAME: 'Profit', MEASURE_CAPTION: 'Profit' },
    ],
    dimensions: [{ DIMENSION_UNIQUE_NAME: '[Store]', DIMENSION_CAPTION: 'Store' }],
    hierarchies: [
      { HIERARCHY_UNIQUE_NAME: '[Measures]', DIMENSION_TYPE: 2 },
      { HIERARCHY_UNIQUE_NAME: '[Product]', HIERARCHY_CAPTION: 'Product', DIMENSION_TYPE: 3 },
      { HIERARCHY_UNIQUE_NAME: '[Time]', HIERARCHY_CAPTION: 'Time', DIMENSION_TYPE: 1 },
    ],
    members: [
      { MEMBER_UNIQUE_NAME: '[Measures].[Unit Sales]', MEMBER_CAPTION: 'Unit Sales' },
      { MEMBER_UNIQUE_NAME: '[Time].[1997]', MEMBER_CAPTION: '1997' },
    ],
  })
  const workbench = { metadata, cube: shallowRef('Sales'), execute }
  const view = mount(MetadataSearch, { global: { provide: { i18n, [WORKBENCH as symbol]: workbench } } })
  return Object.assign(view, { execute })
}

describe('the cube search', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  async function search(view: ReturnType<typeof mountSearch>, text: string) {
    await view.find('input').setValue(text)
    await vi.advanceTimersByTimeAsync(250)
  }

  const captions = (view: ReturnType<typeof mountSearch>) => view.findAll('.search__caption').map(c => c.text())

  it('answers a single letter, without asking the server', async () => {
    const view = mountSearch()
    await search(view, 'u')
    expect(captions(view)).toEqual(['Unit Sales'])
    expect(view.execute).not.toHaveBeenCalled()
  })

  it('finds a measure by a letter inside its name', async () => {
    const view = mountSearch()
    await search(view, 'f')
    expect(captions(view)).toEqual(['Profit'])
  })

  it('asks the server once for members not loaded, says so meanwhile, and lists what it found', async () => {
    let answered!: (value: unknown) => void
    const execute = vi.fn((_statement: string) => new Promise<any>(resolve => (answered = resolve)))
    const view = mountSearch(execute)
    await search(view, 'Foo')
    expect(execute).toHaveBeenCalledTimes(1)
    const statement = execute.mock.calls[0][0]
    expect(statement).toContain('[Product].AllMembers')
    expect(statement).toContain('[Time].AllMembers')
    expect(statement).not.toContain('[Measures].AllMembers')
    expect(statement).toContain('"FOO"')
    expect(view.find('.search__none').text()).toBe('workbench:Explorer.searchingServer')
    answered(answer(['[Product].[Food]\tFood\n[Product].[Food].[Seafood]\tSeafood', '']))
    await flushPromises()
    expect(captions(view)).toEqual(['Food', 'Seafood'])
    expect(view.find('.search__none').exists()).toBe(false)
    expect(execute).toHaveBeenCalledTimes(1)
  })

  it('says only the loaded members were searched when the server cannot be asked', async () => {
    const view = mountSearch(vi.fn(async () => Promise.reject(new Error('offline'))))
    await search(view, 'Foo')
    await flushPromises()
    expect(view.find('.search__none').text()).toBe('workbench:Explorer.serverSearchFailed')
  })

  it('drops an answer for a needle no longer searched', async () => {
    const answers: Array<(value: unknown) => void> = []
    const execute = vi.fn((_statement: string) => new Promise<any>(resolve => answers.push(resolve)))
    const view = mountSearch(execute)
    await search(view, 'Foo')
    await search(view, 'Sea')
    answers[1](answer(['[Product].[Food].[Seafood]\tSeafood', '']))
    await flushPromises()
    answers[0](answer(['[Product].[Food]\tFood', '']))
    await flushPromises()
    expect(captions(view)).toEqual(['Seafood'])
  })

  it('lists a measure once, as a measure', async () => {
    const view = mountSearch()
    await search(view, 'unit')
    const hits = view.findAll('.search__hit')
    expect(hits).toHaveLength(1)
    expect(hits[0].find('.search__badge--measure').exists()).toBe(true)
  })
})
