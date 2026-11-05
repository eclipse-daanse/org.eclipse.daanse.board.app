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

// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { FilterOperator, WorkspaceFactory, type Widget } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import DataSelectionEditor from './DataSelectionEditor.vue'

/*
 * The data tab's part of #1216: it shows what the widget's source answers
 * and writes the widget's selection - the modelled one, so what is chosen
 * here is what the widget receives and what the board saves.
 */

const answer = {
  station: 'Jena',
  readings: [
    { type: 'temperature', value: 9 },
    { type: 'humidity', value: 71 },
    { type: 'temperature', value: 10 },
  ],
}

function repository() {
  const getData = vi.fn(async () => structuredClone(answer))
  return {
    getData,
    repository: {
      getDatasource: () => ({ getData }),
      getDatasourceType: () => 'rest',
      getDatasourceIdentifiers: () => ({ answers: ['object', 'string', 'DataTable'] }),
    },
  }
}

function widget(): Widget {
  const made = WorkspaceFactory.eINSTANCE.createWidget()
  made.uid = 'w1'
  made.type = 'TextWidget'
  made.config = { datasourceId: 'ds' } as never
  return made
}

async function editor(on: Widget, reads: string[] = ['object']) {
  const { repository: repo, getData } = repository()
  const wrapper = mount(DataSelectionEditor, {
    props: { widget: on, reads },
    global: { provide: { [DATASOURCE_REPOSITORY as unknown as symbol]: repo } },
  })
  await flushPromises()
  return { wrapper, getData }
}

/** A node of the tree by the key it sits under. */
const node = (wrapper: Awaited<ReturnType<typeof editor>>['wrapper'], key: string) =>
  wrapper.findAll('.node__pick').find((button) => button.find('.node__key').text() === key)!

describe('the data tab', () => {
  it('asks the source for the shape the widget reads, and shows the answer', async () => {
    const { wrapper, getData } = await editor(widget())

    expect(getData).toHaveBeenCalledWith('object')
    expect(node(wrapper, 'readings').exists()).toBe(true)
    expect(node(wrapper, 'station').exists()).toBe(true)
  })

  it('makes the widget take the part a person clicks on', async () => {
    const on = widget()
    const { wrapper } = await editor(on)

    await node(wrapper, 'readings').trigger('click')
    await flushPromises()

    expect(on.selection?.path).toBe('readings')
    expect(wrapper.find('[data-result-count]').attributes('data-result-count')).toBe('3')
  })

  it('narrows what the widget receives with a filter', async () => {
    const on = widget()
    const { wrapper } = await editor(on)
    await node(wrapper, 'readings').trigger('click')
    await flushPromises()

    await wrapper.find('[data-add-filter]').trigger('click')
    await flushPromises()
    const filter = on.selection!.filters.get(0)
    expect(filter.field).toBe('type')
    expect(filter.operator).toBe(FilterOperator.EQUALS)

    filter.value = 'temperature'
    await flushPromises()
    expect(wrapper.find('[data-result-count]').attributes('data-result-count')).toBe('2')
  })

  it('forgets the filters of the old path when another one is chosen', async () => {
    const on = widget()
    const { wrapper } = await editor(on)
    await node(wrapper, 'readings').trigger('click')
    await wrapper.find('[data-add-filter]').trigger('click')
    await flushPromises()

    await node(wrapper, 'station').trigger('click')
    await flushPromises()

    expect(on.selection!.path).toBe('station')
    expect(on.selection!.filters.size()).toBe(0)
  })

  it('offers nothing to select for a shape a selection cannot act on', async () => {
    const { wrapper, getData } = await editor(widget(), ['PivotTable'])

    expect(getData).not.toHaveBeenCalled()
    expect(wrapper.find('.node__pick').exists()).toBe(false)
  })
})

/*
 * #1264: a data table on an OGC STA source. The type answers its map
 * shape first and a table as well; the tab used to drop the table and
 * stayed empty.
 */
describe('the data tab of a table on an OGC STA source', () => {
  const table = {
    headers: ['Fläche', 'Zustand', 'Sensoren', 'Stand'],
    items: [
      { Fläche: 'JeN-02', Zustand: 'Trockenstress', Sensoren: 1, Stand: '2026-11-05 19:59' },
      { Fläche: 'Löb/ZW-01', Zustand: 'feucht', Sensoren: 4, Stand: '2026-11-05 20:33' },
      { Fläche: 'ZW-01', Zustand: 'Trockenstress', Sensoren: 3, Stand: '2026-11-05 21:11' },
    ],
    rows: [],
    colors: { Zustand: { feucht: '#1E88E5', Trockenstress: '#E53935' } },
  }

  async function onSta(on: Widget) {
    const getData = vi.fn(async () => structuredClone(table))
    const repo = {
      getDatasource: () => ({ getData }),
      getDatasourceType: () => 'ogcsta',
      getDatasourceIdentifiers: () => ({ answers: ['OGCSTAData', 'DataTable'] }),
    }
    const wrapper = mount(DataSelectionEditor, {
      props: { widget: on, reads: ['DataTable'] },
      global: { provide: { [DATASOURCE_REPOSITORY as unknown as symbol]: repo } },
    })
    await flushPromises()
    return { wrapper, getData }
  }

  it('shows the rows of the latest values view', async () => {
    const { wrapper, getData } = await onSta(widget())

    expect(getData).toHaveBeenCalledWith('DataTable')
    expect(wrapper.find('[data-result-count]').attributes('data-result-count')).toBe('3')
  })

  it('narrows them with a filter on the state', async () => {
    const on = widget()
    const { wrapper } = await onSta(on)

    await wrapper.find('[data-add-filter]').trigger('click')
    await flushPromises()
    const filter = on.selection!.filters.get(0)
    filter.field = 'Zustand'
    filter.value = 'Trockenstress'
    await flushPromises()

    expect(wrapper.find('[data-result-count]').attributes('data-result-count')).toBe('2')
  })
})
