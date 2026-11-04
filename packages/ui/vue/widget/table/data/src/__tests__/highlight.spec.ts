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

/*
 * The marks a rule sets on a data table (#1222): each action marks what it
 * names, a mark stays on its row whatever the order on screen, and a rule
 * on the table's own row click reaches it through the real event wiring.
 */
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { TinyEmitter } from 'tiny-emitter'
import { EVENT_ACTIONS_REGISTRY, EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers, TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'
import { EventActionsRegistry, EventBusBridge, EventManager, EventRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import { DatatablesettingsPackage } from '../gen/DatatablesettingsPackage'
import { DataTableSettingsImpl } from '../gen/DataTableSettingsImpl'
import type { DataTableWidgetInterface } from '../api/DataTableWidgetInterface'
import DataTableWidget from '../DataTableWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

/* The rows in the order the source sends them; every index below counts this order. */
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

void EventsPackage.eINSTANCE
void DatatablesettingsPackage.eINSTANCE

/** The table, and the action interface it registers - which is what a rule calls. */
function show(config: Record<string, unknown> | DataTableSettingsImpl = {}) {
  let api: DataTableWidgetInterface | undefined
  const wrapper = mount(DataTableWidget, {
    props: { datasourceId: 'ds-1', id: 'widget-1', config },
    global: {
      provide: {
        [EVENT_ACTIONS_REGISTRY as symbol]: {
          registerInstance(_id: string, instance: DataTableWidgetInterface) {
            api = instance
          },
          unregisterInstance() {},
        },
        [identifiers.TINY_EMITTER as unknown as symbol]: new TinyEmitter(),
      },
    },
  })
  return { wrapper, api: () => api! }
}

/** The besucher value of each marked row, top to bottom on screen. */
const markedRows = (wrapper: ReturnType<typeof show>['wrapper']) =>
  wrapper.findAll('tbody tr.marked_row').map((row) => row.findAll('td')[2].text())

/** Each marked cell as "besucher of its row/its column". */
const markedCells = (wrapper: ReturnType<typeof show>['wrapper']) => {
  const names = wrapper.findAll('thead th').map((th) => th.text().replace(/[·▴▾]\s*$/, '').trim())
  return wrapper.findAll('tbody tr').flatMap((row) => {
    const cells = row.findAll('td')
    return cells.flatMap((cell, index) =>
      cell.classes('marked_cell') ? [`${cells[2].text()}/${names[index]}`] : [],
    )
  })
}

/** The names of the columns whose body cells are marked. */
const markedColumns = (wrapper: ReturnType<typeof show>['wrapper']) => {
  const names = wrapper.findAll('thead th').map((th) => th.text().replace(/[·▴▾]\s*$/, '').trim())
  const first = wrapper.findAll('tbody tr')[0].findAll('td')
  return names.filter((_, index) => first[index].classes('marked_column'))
}

describe('marks on a data table', () => {
  it('highlightRow by index marks the row at that place in the source', async () => {
    const { wrapper, api } = show()
    await flushPromises()

    api().highlightRow(1)
    await nextTick()

    expect(markedRows(wrapper)).toEqual(['100'])
  })

  it('an index typed into a rule arrives as text and means the same row', async () => {
    const { wrapper, api } = show()
    await flushPromises()

    api().highlightRow('4')
    await nextTick()

    expect(markedRows(wrapper)).toEqual(['7'])
  })

  it('highlightRow by key marks the row whose cell equals the value', async () => {
    const { wrapper, api } = show()
    await flushPromises()

    /* Typed in as text, held as a number in the cell. */
    api().highlightRow({ column: 'besucher', value: '42' })
    await nextTick()
    expect(markedRows(wrapper)).toEqual(['42'])

    /* The same key as two flat arguments, the way a rule's payload mapping hands it over. */
    api().highlightRow('kasse', 'K3')
    await nextTick()
    expect(markedRows(wrapper)).toEqual(['8', '61'])
  })

  it('highlightColumn marks a column by name and by index', async () => {
    const { wrapper, api } = show()
    await flushPromises()

    api().highlightColumn('kasse')
    await nextTick()
    expect(markedColumns(wrapper)).toEqual(['kasse'])

    /* Counted among the source's columns, hidden ones included. */
    api().highlightColumn(0)
    await nextTick()
    expect(markedColumns(wrapper)).toEqual(['datum'])
  })

  it('an index counts hidden columns, so hiding one does not move the mark', async () => {
    const { wrapper, api } = show({ hiddenColumns: ['datum'] })
    await flushPromises()

    api().highlightColumn(2)
    await nextTick()

    expect(markedColumns(wrapper)).toEqual(['besucher'])
  })

  it('highlightCell marks the one cell where its row and column cross', async () => {
    const { wrapper, api } = show()
    await flushPromises()

    api().highlightCell(2, 'kasse')
    await nextTick()
    expect(markedCells(wrapper)).toEqual(['8/kasse'])
    expect(markedRows(wrapper)).toEqual([])
    expect(markedColumns(wrapper)).toEqual([])

    /* The row by key: key column, the cell's column, then the key's value. */
    api().highlightCell('datum', 'besucher', '2026-01-06')
    await nextTick()
    expect(markedCells(wrapper)).toEqual(['42/besucher'])
  })

  it('a marked row and a marked column mark their cross', async () => {
    const { wrapper, api } = show()
    await flushPromises()

    api().highlightRow(5)
    api().highlightColumn('kasse')
    await nextTick()

    expect(markedRows(wrapper)).toEqual(['61'])
    expect(markedColumns(wrapper)).toEqual(['kasse'])
    expect(markedCells(wrapper)).toEqual(['61/kasse'])
  })

  it('sorting keeps the mark on its row', async () => {
    const { wrapper, api } = show({ sortable: true })
    await flushPromises()

    api().highlightRow(1)
    await nextTick()
    expect(wrapper.findAll('tbody tr')[1].classes('marked_row')).toBe(true)

    const besucher = wrapper.findAll('thead th').find((th) => th.text().startsWith('besucher'))!
    await besucher.trigger('click')
    await besucher.trigger('click')

    /* Descending by count, 100 is now on top - and still the marked one. */
    expect(wrapper.findAll('tbody tr')[0].classes('marked_row')).toBe(true)
    expect(markedRows(wrapper)).toEqual(['100'])
  })

  it('a marked row on another page is brought into view', async () => {
    const { wrapper, api } = show({ pageSize: 2 })
    await flushPromises()
    expect(markedRows(wrapper)).toEqual([])

    api().highlightRow(5)
    await flushPromises()

    expect(markedRows(wrapper)).toEqual(['61'])
  })

  it('clearHighlight removes every mark', async () => {
    const { wrapper, api } = show()
    await flushPromises()

    api().highlightRow(0)
    api().highlightColumn('datum')
    api().highlightCell(3, 'kasse')
    await nextTick()
    expect(wrapper.findAll('.marked_row, .marked_column, .marked_cell').length).toBeGreaterThan(0)

    api().clearHighlight()
    await nextTick()

    expect(wrapper.findAll('.marked_row, .marked_column, .marked_cell')).toHaveLength(0)
  })

  it('the colours are the modelled settings, and a changed one shows at once', async () => {
    const settings = new DataTableSettingsImpl()
    const { wrapper } = show(settings)
    await flushPromises()

    const style = () => wrapper.find('table').attributes('style') ?? ''
    expect(style()).toContain(`--marked-row: ${settings.markedRowColor}`)
    expect(settings.markedRowColor).not.toBe('')

    settings.markedCellColor = 'rgb(255, 0, 0)'
    await nextTick()

    expect(style()).toContain('--marked-cell: rgb(255, 0, 0)')
  })

  it('a board stored before the colours existed still shows the model’s defaults', async () => {
    const { wrapper } = show({})
    await flushPromises()

    expect(wrapper.find('table').attributes('style')).toContain(
      `--marked-column: ${new DataTableSettingsImpl().markedColumnColor}`,
    )
  })
})

describe('a rule "row click -> highlightRow" on the same table', () => {
  it('marks the clicked row', async () => {
    const bus = new TinyEmitter()
    const actions = new EventActionsRegistry()
    const manager = new EventManager(actions)
    const bridge = new EventBusBridge(manager, new EventRegistry(), actions)
    bridge.setup({
      getRequired<T>(id: string): T {
        if (id === TINY_EMITTER) return bus as T
        throw new Error(`no ${id}`)
      },
    })

    manager.registerMapping({
      id: 'rule-1',
      context: 'widget',
      contextId: 'widget-1',
      eventType: 'DataTableWidget:row_click',
      conditions: [],
      actions: [
        {
          targetContext: 'widget',
          targetContextId: 'widget-1',
          actionName: 'highlightRow',
          actionArgs: [],
          payloadMapping: [{ payloadPath: 'rowIndex', argIndex: 0 }],
        },
      ],
    } as any)

    const wrapper = mount(DataTableWidget, {
      props: { datasourceId: 'ds-1', id: 'widget-1', config: { sortable: true } },
      global: {
        provide: {
          [EVENT_ACTIONS_REGISTRY as symbol]: actions,
          [identifiers.TINY_EMITTER as unknown as symbol]: bus,
        },
      },
    })
    await flushPromises()

    /* Sorted first, so the place on screen and the index in the source differ. */
    await wrapper.findAll('thead th').find((th) => th.text().startsWith('besucher'))!.trigger('click')
    const clicked = wrapper.findAll('tbody tr')[0]
    expect(clicked.findAll('td')[2].text()).toBe('7')

    await clicked.trigger('click')
    await flushPromises()

    expect(markedRows(wrapper)).toEqual(['7'])
  })
})
