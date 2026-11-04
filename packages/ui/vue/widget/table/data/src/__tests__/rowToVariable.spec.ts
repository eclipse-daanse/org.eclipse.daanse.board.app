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
 * The rule #1221 was about, end to end: "on a row click, set a variable
 * from row.<column>". The table emits on the bus, the bridge hands the
 * event to the manager, the manager resolves the path in the payload and
 * calls the variable repository - all of them the real ones. Nothing in
 * between is stubbed, because the gap was in between: each half worked,
 * and the row's values never reached the action.
 */
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { TinyEmitter } from 'tiny-emitter'
import { EVENT_ACTIONS_REGISTRY, EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers, TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'
import { EventActionsRegistry, EventBusBridge, EventManager, EventRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import { CONSTANT_VARIABLE, ConstantVariable, ConstantVariableSymbol } from 'org.eclipse.daanse.board.app.lib.variables'
import { WORKSPACE, WorkspaceImpl } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { DatatablesettingsPackage } from '../gen/DatatablesettingsPackage'
import DataTableWidget from '../DataTableWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

const ROWS = [
  { datum: '2026-01-03', kasse: 'K2', besucher: 99 },
  { datum: '2026-01-01', kasse: 'K1', besucher: 100 },
]

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useVariableRepository: () => ({ wrapParameters: (params: any) => params }),
    useDatasourceRepository: (_id: any, _type: string, data: any) => {
      data.value = { items: ROWS }
      return { data, update: vi.fn() }
    },
  }
})

void EventsPackage.eINSTANCE
void DatatablesettingsPackage.eINSTANCE

/** Everything between the click and the variable, wired as the bundles wire it. */
function board() {
  const bus = new TinyEmitter()
  const actions = new EventActionsRegistry()
  const manager = new EventManager(actions)
  const bridge = new EventBusBridge(manager, new EventRegistry(), actions)

  const services = new Map<string, unknown>([
    [TINY_EMITTER, bus],
    [WORKSPACE, new WorkspaceImpl()],
    [
      CONSTANT_VARIABLE,
      (name: string, config: any) => {
        const variable = new ConstantVariable()
        variable.init(name, config)
        return variable
      },
    ],
  ])
  const registry = {
    getRequired<T>(id: string): T {
      if (!services.has(id)) throw new Error(`no ${id}`)
      return services.get(id) as T
    },
  }
  bridge.setup(registry)

  const variables = new VariableRepository(registry)
  variables.registerVariableType(CONSTANT_VARIABLE, { Variable: ConstantVariableSymbol, Settings: undefined })
  variables.registerVariable('kasse', CONSTANT_VARIABLE, { value: '' })
  actions.registerInstance('VariableRepository', variables)

  return { bus, actions, manager, variables }
}

describe('a rule "row click -> set variable from row.<column>"', () => {
  it('writes the clicked row’s value in that column into the variable', async () => {
    const { bus, actions, manager, variables } = board()

    manager.registerMapping({
      id: 'rule-1',
      context: 'widget',
      contextId: 'widget-1',
      eventType: 'DataTableWidget:row_click',
      conditions: [],
      actions: [
        {
          targetContext: 'system',
          targetContextId: 'VariableRepository',
          actionName: 'setGlobalVariable',
          actionArgs: ['kasse'],
          payloadMapping: [{ payloadPath: 'row.kasse', argIndex: 1 }],
        },
      ],
    } as any)

    const wrapper = mount(DataTableWidget, {
      props: { datasourceId: 'ds-1', id: 'widget-1', config: { datasourceId: 'ds-1' } },
      global: {
        provide: {
          [EVENT_ACTIONS_REGISTRY as symbol]: actions,
          [identifiers.TINY_EMITTER as unknown as symbol]: bus,
        },
      },
    })
    await flushPromises()

    await wrapper.findAll('tbody tr')[1].trigger('click')
    await flushPromises()

    expect(variables.getVariable('kasse').value).toBe('K1')
  })
})
