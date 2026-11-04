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

// @vitest-environment jsdom
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { DatatablesettingsPackage } from '../gen/DatatablesettingsPackage'
import { DataTableSettingsImpl } from '../gen/DataTableSettingsImpl'
import DataTableWidget from '../DataTableWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

/*
 * Nine rows of three columns, and the counts deliberately mixed in width:
 * sorted as text, 100 comes before 99, which is the one thing somebody
 * sorting a column of counts wants to know.
 */
const ROWS = [
  { datum: '2026-01-03', kasse: 'K2', besucher: 99 },
  { datum: '2026-01-01', kasse: 'K1', besucher: 100 },
  { datum: '2026-01-02', kasse: 'K3', besucher: 8 },
  { datum: '2026-01-06', kasse: 'K1', besucher: 42 },
  { datum: '2026-01-04', kasse: 'K2', besucher: 7 },
  { datum: '2026-01-05', kasse: 'K3', besucher: 61 },
]

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useVariableRepository: () => ({ wrapParameters: (params: any) => params }),
    useDatasourceRepository: (_id: any, _type: string, data: any) => {
      data.value = { headers: Object.keys(ROWS[0]), items: ROWS, rows: [] }
      return { data, update: vi.fn(), callEvent: vi.fn() }
    },
  }
})

/* The class literals are built on first access; src/index.ts does this
  when the bundle activates. */
/* The payloads extend the events model's Payload, which has to be
  registered before this package can point at it. */
void EventsPackage.eINSTANCE
void DatatablesettingsPackage.eINSTANCE

const emit = vi.fn()

const provides = {
  [EVENT_ACTIONS_REGISTRY as symbol]: {
    registerInstance() {},
    unregisterInstance() {},
  },
  [identifiers.TINY_EMITTER as unknown as symbol]: {
    on() {},
    off() {},
    once() {},
    emit,
  },
}

function show(settings: Record<string, unknown> = {}) {
  return mount(DataTableWidget, {
    props: {
      datasourceId: 'ds-1',
      id: 'widget-1',
      config: { datasourceId: 'ds-1', ...settings },
    },
    global: { provide: provides },
  })
}

/*
 * The widget with a settings object built through the factory, which is
 * what the board hands it once the settings dialog has opened: the same
 * instance on every change, written from the inside.
 */
function showModelled(settings: DataTableSettingsImpl) {
  return mount(DataTableWidget, {
    props: { datasourceId: 'ds-1', id: 'widget-1', config: settings },
    global: { provide: provides },
  })
}

/** The text of each cell, row by row. */
function body(wrapper: ReturnType<typeof show>) {
  return wrapper.findAll('tbody tr').map((row) => row.findAll('td').map((cell) => cell.text()))
}

function headers(wrapper: ReturnType<typeof show>) {
  return wrapper.findAll('thead th').map((cell) => cell.text().replace(/[·▴▾]\s*$/, '').trim())
}

describe('DataTableWidget', () => {
  beforeEach(() => vi.clearAllMocks())

  describe('columns', () => {
    it('shows every column the answer carries', async () => {
      const wrapper = show()
      await flushPromises()

      expect(headers(wrapper)).toEqual(['datum', 'kasse', 'besucher'])
    })

    /* Named by what is left out, so a column the answer grows later shows
      up rather than being hidden by a setting nobody made. */
    it('leaves out the ones named as hidden', async () => {
      const wrapper = show({ hiddenColumns: ['kasse'] })
      await flushPromises()

      expect(headers(wrapper)).toEqual(['datum', 'besucher'])
      expect(body(wrapper)[0]).toHaveLength(2)
    })

    it('reads the hidden list from a stored board as well as a live one', async () => {
      /* An EList, which is what a settings object built through the
        factory carries - the array above is what a stored board holds. */
      const asEList = { [Symbol.iterator]: () => ['besucher'][Symbol.iterator]() }
      const wrapper = show({ hiddenColumns: asEList })
      await flushPromises()

      expect(headers(wrapper)).toEqual(['datum', 'kasse'])
    })
  })

  describe('the header', () => {
    it('is drawn unless the setting says otherwise', async () => {
      const wrapper = show()
      await flushPromises()
      expect(wrapper.find('thead').exists()).toBe(true)
    })

    it('is left off where it is switched off', async () => {
      const wrapper = show({ showHeader: false })
      await flushPromises()

      expect(wrapper.find('thead').exists()).toBe(false)
      /* And the rows are all still there. */
      expect(body(wrapper)).toHaveLength(ROWS.length)
    })
  })

  describe('sorting', () => {
    it('does nothing on a click where it is off, but still announces it', async () => {
      const wrapper = show()
      await flushPromises()

      await wrapper.findAll('thead th')[0].trigger('click')
      expect(body(wrapper).map((row) => row[0])).toEqual(ROWS.map((row) => row.datum))
      expect(emit).toHaveBeenCalledWith('widget:DataTableWidget:col_click', expect.anything())
    })

    it('orders by the column clicked, and announces it as before', async () => {
      const wrapper = show({ sortable: true })
      await flushPromises()

      await wrapper.findAll('thead th')[0].trigger('click')
      expect(body(wrapper).map((row) => row[0])).toEqual([
        '2026-01-01',
        '2026-01-02',
        '2026-01-03',
        '2026-01-04',
        '2026-01-05',
        '2026-01-06',
      ])
      expect(emit).toHaveBeenCalledWith('widget:DataTableWidget:col_click', expect.anything())
    })

    it('turns round on the second click and lets go on the third', async () => {
      const wrapper = show({ sortable: true })
      await flushPromises()
      const column = () => wrapper.findAll('thead th')[0]

      await column().trigger('click')
      expect(body(wrapper)[0][0]).toBe('2026-01-01')

      await column().trigger('click')
      expect(body(wrapper)[0][0]).toBe('2026-01-06')

      await column().trigger('click')
      expect(body(wrapper).map((row) => row[0])).toEqual(ROWS.map((row) => row.datum))
    })

    /* Sorted as text, 100 comes before 99 and 8 comes last. */
    it('orders counts by size, not as text', async () => {
      const wrapper = show({ sortable: true })
      await flushPromises()

      await wrapper.findAll('thead th')[2].trigger('click')
      expect(body(wrapper).map((row) => row[2])).toEqual(['7', '8', '42', '61', '99', '100'])
    })

    it('leaves the answer itself in the order it came', async () => {
      const wrapper = show({ sortable: true })
      await flushPromises()

      await wrapper.findAll('thead th')[0].trigger('click')
      expect(ROWS.map((row) => row.datum)).toEqual([
        '2026-01-03',
        '2026-01-01',
        '2026-01-02',
        '2026-01-06',
        '2026-01-04',
        '2026-01-05',
      ])
    })
  })

  describe('paging', () => {
    it('shows the whole answer where no page size is set', async () => {
      const wrapper = show()
      await flushPromises()

      expect(body(wrapper)).toHaveLength(ROWS.length)
      expect(wrapper.find('.pagination').exists()).toBe(false)
    })

    it('shows one page at a time, and says which', async () => {
      const wrapper = show({ pageSize: 2 })
      await flushPromises()

      expect(body(wrapper)).toHaveLength(2)
      expect(wrapper.find('.pagination').exists()).toBe(true)
      expect(wrapper.find('.pagination').text()).toContain('Pager.showing')
    })

    it('steps to the next page and back', async () => {
      const wrapper = show({ pageSize: 2 })
      await flushPromises()
      const [back, forward] = wrapper.findAll('.pagination button')

      expect(back.attributes('disabled')).toBeDefined()
      expect(body(wrapper)[0][0]).toBe('2026-01-03')

      await forward.trigger('click')
      expect(body(wrapper)[0][0]).toBe('2026-01-02')

      await wrapper.findAll('.pagination button')[0].trigger('click')
      expect(body(wrapper)[0][0]).toBe('2026-01-03')
    })

    it('stops at the last page', async () => {
      const wrapper = show({ pageSize: 4 })
      await flushPromises()

      await wrapper.findAll('.pagination button')[1].trigger('click')
      expect(body(wrapper)).toHaveLength(2)
      expect(wrapper.findAll('.pagination button')[1].attributes('disabled')).toBeDefined()
    })

    /*
     * A row says where it is in the whole answer, not where it is on the
     * page - a board acting on row 4 of page 2 means the fourth row of
     * that page, which is the eighth row of the answer.
     */
    it('names a row by its place in the answer, not on the page', async () => {
      const wrapper = show({ pageSize: 2 })
      await flushPromises()

      await wrapper.findAll('.pagination button')[1].trigger('click')
      await wrapper.findAll('tbody tr')[0].trigger('click')

      const call = emit.mock.calls.find(([name]) => name === 'widget:DataTableWidget:row_click')
      expect(call?.[1].payload.rowIndex).toBe(2)
    })

    it('sorts the whole answer, not the page in view', async () => {
      const wrapper = show({ pageSize: 2, sortable: true })
      await flushPromises()

      await wrapper.findAll('thead th')[2].trigger('click')
      /* The two smallest counts of all six rows, not of the first two. */
      expect(body(wrapper).map((row) => row[2])).toEqual(['7', '8'])
    })
  })

  /*
   * What a click hands on (#1221): the record and where it sits, as the
   * modelled payloads declare it - not an id a rule would have to look up.
   */
  describe('what a click hands on', () => {
    const sent = (event: string) =>
      emit.mock.calls.find(([name]) => name === `widget:DataTableWidget:${event}`)?.[1].payload

    it('a row click carries the record it was on', async () => {
      const wrapper = show()
      await flushPromises()

      await wrapper.findAll('tbody tr')[1].trigger('click')

      const payload = sent('row_click')
      expect(payload.eClass().getName()).toBe('DataTableRowPayload')
      expect(payload.row).toEqual(ROWS[1])
      expect(payload.rowIndex).toBe(1)
      expect(payload.widgetId).toBe('widget-1')
    })

    it('a cell click carries the row, the column twice, and the value', async () => {
      const wrapper = show()
      await flushPromises()

      await wrapper.findAll('tbody tr')[0].findAll('td')[2].trigger('click')

      expect(sent('cell_click')).toMatchObject({
        row: ROWS[0],
        rowIndex: 0,
        column: 'besucher',
        columnIndex: 2,
        value: 99,
      })
    })

    it('a header click carries the column, by name and by place', async () => {
      const wrapper = show()
      await flushPromises()

      await wrapper.findAll('thead th')[1].trigger('click')

      expect(sent('col_click')).toMatchObject({ column: 'kasse', columnIndex: 1 })
    })

    /* The index counts the source's columns: a rule written against the
      third column still means it after someone hides the first. */
    it('a hidden column does not shift the index of the columns after it', async () => {
      const wrapper = show({ hiddenColumns: ['datum'] })
      await flushPromises()

      await wrapper.findAll('thead th')[1].trigger('click')
      await wrapper.findAll('tbody tr')[0].findAll('td')[1].trigger('click')

      expect(sent('col_click')).toMatchObject({ column: 'besucher', columnIndex: 2 })
      expect(sent('cell_click')).toMatchObject({ column: 'besucher', columnIndex: 2 })
    })

    it('a sort does not change which row an index names', async () => {
      const wrapper = show({ sortable: true })
      await flushPromises()

      await wrapper.findAll('thead th')[2].trigger('click')
      await wrapper.findAll('tbody tr')[0].trigger('click')

      /* The smallest count is shown first; it is the fifth row of the answer. */
      expect(sent('row_click')).toMatchObject({ row: ROWS[4], rowIndex: 4 })
    })
  })

  /*
   * Widget.config is an attribute, not a containment, so the adapter on
   * the widget never hears a write inside the settings object - and the
   * widget is handed the same instance on every change. A setting ticked
   * in the dialog reached the table only once the dialog was reopened
   * (#1203).
   */
  describe('a setting changed in the open dialog', () => {
    it('reaches the table: the sort marks appear when sorting is switched on', async () => {
      const settings = new DataTableSettingsImpl()
      const wrapper = showModelled(settings)
      await flushPromises()
      expect(wrapper.findAll('thead th .mark')).toHaveLength(0)

      settings.sortable = true
      await nextTick()

      expect(wrapper.findAll('thead th .mark')).toHaveLength(3)
      expect(wrapper.findAll('thead th')[0].attributes('aria-sort')).toBe('none')
    })

    it('reaches the table: the pager appears when a page size is set', async () => {
      const settings = new DataTableSettingsImpl()
      const wrapper = showModelled(settings)
      await flushPromises()
      expect(wrapper.find('.pagination').exists()).toBe(false)

      settings.pageSize = 2
      await nextTick()

      expect(wrapper.find('.pagination').exists()).toBe(true)
      expect(body(wrapper)).toHaveLength(2)
    })

    it('reaches the table: the header goes when it is switched off', async () => {
      const settings = new DataTableSettingsImpl()
      const wrapper = showModelled(settings)
      await flushPromises()
      expect(wrapper.find('thead').exists()).toBe(true)

      settings.showHeader = false
      await nextTick()

      expect(wrapper.find('thead').exists()).toBe(false)
    })

    /* An EList add is a notification of the owner, like a set. */
    it('reaches the table: a column added to the hidden list goes', async () => {
      const settings = new DataTableSettingsImpl()
      const wrapper = showModelled(settings)
      await flushPromises()
      expect(headers(wrapper)).toEqual(['datum', 'kasse', 'besucher'])

      settings.hiddenColumns.add('kasse')
      await nextTick()

      expect(headers(wrapper)).toEqual(['datum', 'besucher'])
    })
  })
})
