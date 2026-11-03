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
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { inject, nextTick } from 'vue'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { KpitablesettingsPackage } from '../gen/KpitablesettingsPackage'
import { KpiTableSettingsImpl } from '../gen/KpiTableSettingsImpl'
import KpiTableWidget from '../KpiTableWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* A folder holding one measure, and a measure beside it. */
const ANSWER = [
  { type: 'Folder', name: 'Sales', children: [{ type: 'Kpi', name: 'Revenue' }] },
  { type: 'Kpi', name: 'Margin' },
]

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useVariableRepository: () => ({ wrapParameters: (params: unknown) => params }),
    useDatasourceRepository: (_id: unknown, _type: string, data: { value: unknown }) => {
      data.value = ANSWER
      return { update: vi.fn() }
    },
  }
})

/*
 * The table itself is not under test; what it is handed is. It lists the
 * names it gets and the visual type provided to it.
 */
const Table = {
  props: ['tableData'],
  setup() {
    return { status: inject('statusVisualType') }
  },
  template: `<div class="kpi" :data-status="status"><span v-for="row in tableData" :key="row.name" class="row">{{ row.name }}</span></div>`,
}

void KpitablesettingsPackage.eINSTANCE

async function show(settings: KpiTableSettingsImpl) {
  const wrapper = mount(KpiTableWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', config: settings },
    global: {
      stubs: { KpiTable: Table },
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  return wrapper
}

const rows = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.findAll('.row').map((row) => row.text())

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the table all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the rows: folders are kept once asked for', async () => {
    const settings = new KpiTableSettingsImpl()
    const wrapper = await show(settings)
    /* Flattened: the folder is gone, its measure stands on its own. */
    expect(rows(wrapper)).toEqual(['Revenue', 'Margin'])

    settings.showFolders = true
    await nextTick()

    expect(rows(wrapper)).toEqual(['Sales', 'Margin'])
  })

  it('reaches the cells: a new status visual is handed down', async () => {
    const settings = new KpiTableSettingsImpl()
    const wrapper = await show(settings)
    expect(wrapper.find('.kpi').attributes('data-status')).toBe('Badge')

    settings.statusVisualType = 'Icon'
    await nextTick()

    expect(wrapper.find('.kpi').attributes('data-status')).toBe('Icon')
  })
})
