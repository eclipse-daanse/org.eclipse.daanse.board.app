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
 * #1264: a source can say which colour a shown value has - an OGC STA
 * source shows the state of an area as a word and gives its colour.
 */
const ROWS = [
  { Fläche: 'ZW-01', Zustand: 'optimal', Sensoren: 3 },
  { Fläche: 'ZW-02', Zustand: 'Trockenstress', Sensoren: 2 },
  { Fläche: 'ZW-03', Zustand: 'PURPLE', Sensoren: 1 },
]

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useVariableRepository: () => ({ wrapParameters: (params: any) => params }),
    useDatasourceRepository: (_id: any, _type: string, data: any) => {
      data.value = {
        headers: Object.keys(ROWS[0]),
        items: ROWS,
        rows: [],
        colors: { Zustand: { optimal: '#43a047', Trockenstress: '#fdd835', feucht: 'steelblue' } },
      }
      return { data, update: vi.fn(), callEvent: vi.fn() }
    },
  }
})

void EventsPackage.eINSTANCE
void DatatablesettingsPackage.eINSTANCE

const provides = {
  [EVENT_ACTIONS_REGISTRY as symbol]: { registerInstance() {}, unregisterInstance() {} },
  [identifiers.TINY_EMITTER as unknown as symbol]: { on() {}, off() {}, once() {}, emit: vi.fn() },
}

function show(settings: Record<string, unknown> = {}) {
  return mount(DataTableWidget, {
    props: { datasourceId: 'ds-1', id: 'widget-1', config: { datasourceId: 'ds-1', ...settings } },
    global: { provide: provides },
  })
}

const stateCells = (wrapper: ReturnType<typeof show>) =>
  wrapper.findAll('tbody tr').map((row) => row.findAll('td')[1])

describe('a value with a colour from the source', () => {
  beforeEach(() => vi.clearAllMocks())

  it('colours its cell, with text that can be read on it', async () => {
    const wrapper = show()
    await flushPromises()

    const [optimal, dry, unknown] = stateCells(wrapper)
    expect(optimal.classes()).toContain('coloured')
    expect(optimal.attributes('style')).toContain('--cell-color: #43a047')
    expect(optimal.attributes('style')).toContain('--cell-text: #ffffff')
    expect(dry.attributes('style')).toContain('--cell-text: #1a1a1a')
    // A value the source gave no colour, and the other columns, stay plain.
    expect(unknown.classes()).not.toContain('coloured')
    expect(wrapper.findAll('tbody tr')[0].findAll('td')[0].classes()).not.toContain('coloured')
  })

  it('keeps its colour when the rows are sorted', async () => {
    const wrapper = show({ sortable: true })
    await flushPromises()

    await wrapper.findAll('thead th')[1].trigger('click')

    const coloured = wrapper.findAll('tbody td.coloured').map((cell) => cell.text())
    expect(coloured.sort()).toEqual(['Trockenstress', 'optimal'])
  })
})
