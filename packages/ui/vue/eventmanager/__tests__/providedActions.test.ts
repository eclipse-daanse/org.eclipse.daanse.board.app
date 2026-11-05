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

/**
 * A datasource as the target of a rule.
 *
 * Its actions come from the provider registered for it, not from a widget
 * type, and the list can change while the dialog is open. Built on the real
 * registry and manager, so what the dialog writes is what the manager runs.
 */
import 'reflect-metadata'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { EVENT_MANAGER, EVENT_REGISTRY, EVENT_ACTIONS_REGISTRY, type ActionProvider, type ProvidedAction } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EventActionsRegistry, EventManager, WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'
import { identifier as PAGE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.page'
import EventManagerUI from '../src/components/EventManagerUI.vue'

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return { ...actual, useTranslation: () => ({ t: (key: string) => key }) }
})

const REFRESH: ProvidedAction = { name: 'refresh', parameters: [] }
const FILTER: ProvidedAction = {
  name: 'filterBy',
  label: 'Filter by',
  parameters: [
    { name: 'column', type: 'string' },
    { name: 'value', type: 'any', optional: true },
  ],
}

/** A widget type as bundles register it at start, with one declared action. */
class MapActions {
  @WidgetAction({ eventType: 'map.zoomTo', parameters: [{ name: 'zoom', type: 'number' }] })
  zoomTo(_zoom: number) {}
}

function source(actions: ProvidedAction[]) {
  let current = actions
  const listeners = new Set<() => void>()
  const execute = vi.fn()
  const provider: ActionProvider = {
    targets: () => [{ id: 'ds-1', label: 'Sales' }],
    actions: () => current,
    execute,
    onChange(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
  return {
    provider,
    execute,
    change(next: ProvidedAction[]) {
      current = next
      listeners.forEach((listener) => listener())
    },
  }
}

const mounted: Array<{ unmount(): void }> = []
afterEach(() => {
  mounted.splice(0).forEach((each) => each.unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

async function dialog() {
  vi.spyOn(console, 'log').mockImplementation(() => {})
  const actions = new EventActionsRegistry()
  actions.registerWidgetType('MapWidget', MapActions)
  const ds = source([REFRESH])
  actions.registerActionProvider('datasource', ds.provider)
  const manager = new EventManager(actions)

  const wrapper = mount(EventManagerUI, {
    attachTo: document.body,
    global: {
      provide: {
        [EVENT_MANAGER as unknown as symbol]: manager,
        [EVENT_REGISTRY as unknown as symbol]: {
          getAllEvents: () => [{ name: 'Row Clicked', type: 'DataTableWidget:row_click', description: '' }],
          extractPayloadPropertiesForEvent: () => [{ name: 'row', type: 'any', optional: false }],
        },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: actions,
        [PAGE_REGISTRY as unknown as symbol]: { getAllPageIds: () => ['p1'], getPages: () => [] },
      },
    },
  })
  mounted.push(wrapper)
  await flushPromises()
  const vm = wrapper.vm as any
  vm.newMapping.eventType = 'DataTableWidget:row_click'
  vm.showAddDialog = true
  await flushPromises()
  return { vm, manager, actions, ds }
}

describe('a datasource as the target of a rule', () => {
  it('is offered as a target context', async () => {
    const { vm } = await dialog()
    expect(vm.targetContextOptions.map((o: any) => o.value)).toEqual(['system', 'page', 'widget', 'datasource'])
  })

  it('lists the datasources a provider names, and the actions it offers for the chosen one', async () => {
    const { vm } = await dialog()
    vm.newMapping.actions[0].targetContext = 'datasource'
    await flushPromises()

    expect(vm.providedTargetOptions('datasource')).toEqual([{ text: 'Sales', value: 'ds-1' }])
    expect(document.querySelector('.action__source')).not.toBeNull()

    vm.newMapping.actions[0].targetContextId = 'ds-1'
    await flushPromises()
    expect(vm.availableActions.map((a: any) => [a.group, a.value])).toEqual([['Sales', 'refresh']])
  })

  it('shows a changed list in the open dialog', async () => {
    const { vm, ds } = await dialog()
    vm.newMapping.actions[0].targetContext = 'datasource'
    vm.newMapping.actions[0].targetContextId = 'ds-1'
    await flushPromises()
    expect(vm.availableActions.map((a: any) => a.value)).toEqual(['refresh'])

    ds.change([REFRESH, FILTER])
    await flushPromises()

    expect(vm.availableActions.map((a: any) => [a.text, a.value])).toEqual([['refresh', 'refresh'], ['Filter by', 'filterBy']])
    vm.newMapping.actions[0].actionName = 'filterBy'
    await flushPromises()
    expect(vm.selectedActionParameters.map((p: any) => [p.index, p.name, p.optional])).toEqual([[0, 'column', false], [1, 'value', true]])
  })

  it('writes a rule that calls the provider with the mapped values', async () => {
    const { vm, manager, ds } = await dialog()
    ds.change([FILTER])
    const action = vm.newMapping.actions[0]
    action.targetContext = 'datasource'
    action.targetContextId = 'ds-1'
    action.actionName = 'filterBy'
    await flushPromises()
    vm.setParameterValueSource(0, 'manual')
    vm.updateManualParameterValue(0, 'region')
    vm.updateParameterMapping(1, 'row.region')
    vm.addMapping()

    await manager.handleEvent('widget', 'DataTableWidget:row_click', { row: { region: 'north' } })

    expect(ds.execute).toHaveBeenCalledWith('ds-1', 'filterBy', ['region', 'north'])
  })

  it('leaves the actions of a widget type as they were', async () => {
    const { vm } = await dialog()
    vm.newMapping.actions[0].targetContext = 'widget'
    vm.newMapping.actions[0].actionName = 'zoomTo'
    await flushPromises()

    expect(vm.availableActions.map((a: any) => [a.group, a.value])).toEqual([['MapWidget', 'zoomTo']])
    expect(vm.selectedActionParameters.map((p: any) => p.name)).toEqual(['zoom'])
  })
})
