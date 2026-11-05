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
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { asModel } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DatatablesettingsPackage } from '../gen/DatatablesettingsPackage'
import { DatatablesettingsFactory } from '../gen/DatatablesettingsFactory'
import { DataTableSettingsImpl } from '../gen/DataTableSettingsImpl'
import { DataTableCondition } from '../gen/DataTableCondition'
import { DataTableColorTarget } from '../gen/DataTableColorTarget'
import { DataTableFilterMatch } from '../gen/DataTableFilterMatch'
import { cellColor, filterRows, matches } from '../rules'
import DataTableWidget from '../DataTableWidget.vue'

/*
 * #1265: the table's own filter and colour rules, for any source. The
 * rows are the Reference Areas of the Bodenfeuchte board; the source sends
 * a colour per state, as an OGC STA source does (#1264).
 */
const ROWS = [
  { Fläche: 'ZW-01', Zustand: 'Trockenstress', Sensoren: 3 },
  { Fläche: 'ZW-02', Zustand: 'feucht', Sensoren: 4 },
  { Fläche: 'JeN-02', Zustand: 'Trockenstress', Sensoren: 1 },
  { Fläche: 'ZW-07', Zustand: 'feucht', Sensoren: 5 },
  { Fläche: 'ZW-09', Zustand: 'optimal', Sensoren: 2 },
  { Fläche: 'ZW-03', Zustand: '', Sensoren: 10 },
]
const SOURCE_COLORS = { Zustand: { feucht: '#1E88E5', Trockenstress: '#E53935' } }

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useVariableRepository: () => ({
      // {zone} is a variable holding "Trockenstress".
      wrapParameters: (params: any) =>
        Object.fromEntries(
          Object.entries(params).map(([k, v]: [string, any]) => [
            k,
            { get value() { return String(v.value).replace(/\{zone\}/g, 'Trockenstress') } },
          ]),
        ),
    }),
    useDatasourceRepository: (_id: any, _type: string, data: any) => {
      data.value = { headers: Object.keys(ROWS[0]), items: ROWS, rows: [], colors: SOURCE_COLORS }
      return { data, update: vi.fn(), callEvent: vi.fn() }
    },
  }
})

void EventsPackage.eINSTANCE
void DatatablesettingsPackage.eINSTANCE

const emit = vi.fn()
const provides = {
  [EVENT_ACTIONS_REGISTRY as symbol]: { registerInstance() {}, unregisterInstance() {} },
  [identifiers.TINY_EMITTER as unknown as symbol]: { on() {}, off() {}, once() {}, emit },
}

function show(config: unknown) {
  return mount(DataTableWidget, {
    props: { datasourceId: 'ds-1', id: 'widget-1', config: config as any },
    global: { provide: provides },
  })
}

const body = (wrapper: ReturnType<typeof show>) =>
  wrapper.findAll('tbody tr').map((row) => row.findAll('td').map((cell) => cell.text()))

const styleOf = (wrapper: ReturnType<typeof show>, area: string, column = 1) =>
  wrapper.findAll('tbody tr').find((row) => row.findAll('td')[0].text() === area)!.findAll('td')[column].attributes('style') ?? ''

describe('a rule', () => {
  const row = { n: 5, s: 'Trockenstress', e: '' }
  it('compares numbers as numbers and text as text', () => {
    expect(matches({ column: 'n', condition: 'GREATER_THAN', value: '10' }, { n: 100 })).toBe(true)
    expect(matches({ column: 'n', condition: 'LESS_THAN', value: '10' }, row)).toBe(true)
    expect(matches({ column: 'n', condition: 'BETWEEN', value: '5', valueTo: '7' }, row)).toBe(true)
    expect(matches({ column: 'n', condition: 'BETWEEN', value: '6', valueTo: '7' }, row)).toBe(false)
    expect(matches({ column: 's', condition: 'CONTAINS', value: 'stress' }, row)).toBe(true)
    expect(matches({ column: 's', condition: 'NOT_EQUALS', value: 'feucht' }, row)).toBe(true)
    expect(matches({ column: 'e', condition: 'EMPTY' }, row)).toBe(true)
    expect(matches({ column: 'gone', condition: 'EMPTY' }, row)).toBe(true)
    // The literal of the model is read as well as the name.
    expect(matches({ column: 's', condition: 'equals', value: 'Trockenstress' }, row)).toBe(true)
  })

  it('lets rows through with all or with any of the rules', () => {
    const rules = [
      { column: 'Zustand', condition: 'EQUALS', value: 'feucht' },
      { column: 'Sensoren', condition: 'GREATER_THAN', value: '4' },
    ]
    expect(filterRows(ROWS, rules, DataTableFilterMatch.ALL).map((r) => r['Fläche'])).toEqual(['ZW-07'])
    expect(filterRows(ROWS, rules, 'any').map((r) => r['Fläche'])).toEqual(['ZW-02', 'ZW-07', 'ZW-03'])
    expect(filterRows(ROWS, [{ column: '', value: 'x' }], 'ALL')).toBe(ROWS)
  })

  it('colours by the first match, before the colour of the source', () => {
    const rules = [
      { column: 'Sensoren', condition: 'GREATER_THAN', value: '4', color: '#000000', target: 'ROW' },
      { column: 'Zustand', condition: 'EQUALS', value: 'Trockenstress', color: '#ffff00', target: 'CELL' },
    ]
    expect(cellColor(ROWS[0], 'Zustand', rules, SOURCE_COLORS)).toEqual({ background: '#ffff00', text: '#1a1a1a' })
    // A row rule paints every cell of the row, and comes first.
    expect(cellColor(ROWS[3], 'Fläche', rules, SOURCE_COLORS)).toEqual({ background: '#000000', text: '#ffffff' })
    expect(cellColor(ROWS[3], 'Zustand', rules, SOURCE_COLORS)?.background).toBe('#000000')
    // No rule matches: the source's colour stays.
    expect(cellColor(ROWS[1], 'Zustand', rules, SOURCE_COLORS)).toEqual({ background: '#1E88E5', text: '#ffffff' })
    // A text colour that is set is kept.
    expect(cellColor(ROWS[0], 'Zustand', [{ ...rules[1], textColor: 'navy' }], {})).toEqual({ background: '#ffff00', text: 'navy' })
  })
})

describe('the table with its rules', () => {
  it('shows only the rows the filter lets through, sorted and paged', async () => {
    const wrapper = show({
      sortable: true,
      pageSize: 1,
      filterRules: [{ column: 'Zustand', condition: 'EQUALS', value: '{zone}' }],
    })
    await flushPromises()

    expect(wrapper.text()).toContain('Pager.showing')
    await wrapper.findAll('thead th')[0].trigger('click')
    expect(body(wrapper)).toEqual([['JeN-02', 'Trockenstress', '1']])
    await wrapper.find('button[aria-label="Pager.next"]').trigger('click')
    expect(body(wrapper)).toEqual([['ZW-01', 'Trockenstress', '3']])
    expect(wrapper.find('button[aria-label="Pager.next"]').attributes('disabled')).toBeDefined()
  })

  it('hands on the row with its index in the answer, not on screen', async () => {
    const wrapper = show({ filterRules: [{ column: 'Zustand', condition: 'EQUALS', value: 'feucht' }] })
    await flushPromises()
    emit.mockClear()

    await wrapper.findAll('tbody tr')[1].trigger('click')

    const sent = emit.mock.calls.find(([type]) => type === 'widget:DataTableWidget:row_click')![1]
    expect(sent.payload.row['Fläche']).toBe('ZW-07')
    expect(sent.payload.rowIndex).toBe(3)
  })

  it('paints by its colour rules first and by the source after', async () => {
    const wrapper = show({
      colorRules: [{ column: 'Zustand', condition: 'EQUALS', value: 'Trockenstress', color: '#fdd835', target: 'CELL' }],
    })
    await flushPromises()

    expect(styleOf(wrapper, 'ZW-01')).toContain('--cell-color: #fdd835')
    expect(styleOf(wrapper, 'ZW-02')).toContain('--cell-color: #1E88E5')
    expect(styleOf(wrapper, 'ZW-09')).toBe('')
  })

  it('follows a rule changed in the open settings at once', async () => {
    const settings = new DataTableSettingsImpl()
    const rule = DatatablesettingsFactory.eINSTANCE.createDataTableFilterRule()
    rule.column = 'Zustand'
    rule.value = 'feucht'
    settings.filterRules.push(rule)
    const wrapper = show(settings)
    await flushPromises()
    expect(body(wrapper)).toHaveLength(2)

    rule.value = 'optimal'
    await nextTick()
    expect(body(wrapper).map((r) => r[0])).toEqual(['ZW-09'])

    const color = DatatablesettingsFactory.eINSTANCE.createDataTableColorRule()
    color.column = 'Zustand'
    color.value = 'optimal'
    color.color = '#43a047'
    color.target = DataTableColorTarget.ROW
    settings.colorRules.push(color)
    await nextTick()
    expect(styleOf(wrapper, 'ZW-09', 0)).toContain('--cell-color: #43a047')
  })
})

describe('the rules of a stored board', () => {
  it('come back as they were saved', () => {
    const settings = new DataTableSettingsImpl()
    const factory = DatatablesettingsFactory.eINSTANCE
    const color = factory.createDataTableColorRule()
    Object.assign(color, { column: 'Zustand', condition: DataTableCondition.CONTAINS, value: 'stress', color: '#e53935', target: DataTableColorTarget.ROW })
    const filter = factory.createDataTableFilterRule()
    Object.assign(filter, { column: 'Sensoren', condition: DataTableCondition.BETWEEN, value: '2', valueTo: '4' })
    settings.colorRules.push(color)
    settings.filterRules.push(filter)
    settings.filterMatch = DataTableFilterMatch.ANY

    const stored = JSON.parse(JSON.stringify(settings))
    expect(stored.colorRules).toEqual([
      { column: 'Zustand', condition: 'CONTAINS', value: 'stress', color: '#e53935', target: 'ROW' },
    ])
    expect(stored.filterRules).toEqual([{ column: 'Sensoren', condition: 'BETWEEN', value: '2', valueTo: '4' }])
    expect(stored.filterMatch).toBe('ANY')

    const back = asModel(stored, () => new DataTableSettingsImpl())
    expect(back.colorRules.size()).toBe(1)
    expect(back.colorRules.get(0).target).toBe('ROW')
    expect(back.filterRules.get(0).valueTo).toBe('4')
    expect(back.filterMatch).toBe('ANY')
    expect(JSON.parse(JSON.stringify(back))).toEqual(stored)
  })
})
