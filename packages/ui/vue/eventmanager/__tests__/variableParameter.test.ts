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
 * A parameter the action declares as naming a variable - setGlobalVariable's
 * variableName - offers the global variables there are, by name and type,
 * and a field for one that does not exist yet (#1237). Declared in the
 * action's Ecore, read by the real registry: the dialog knows the
 * parameter's kind, not the action's name.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { EVENT_MANAGER, EVENT_REGISTRY, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EcoreMetadataService, EventActionsRegistry, EventManager } from 'org.eclipse.daanse.board.app.lib.events'
import { identifier as PAGE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.page'
import { identifier as VARIABLE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.variable'
import variableActionsEcore from '../../../../lib/repository/variable/model/VariableActions.ecore?raw'
import EventManagerUI from '../src/components/EventManagerUI.vue'

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return { ...actual, useTranslation: () => ({ t: (key: string) => key }) }
})

const GLOBALS = [
  ['Wind', { type: 'ConstantVariable' }],
  ['Temperatur', { type: 'ComputedVariable' }],
]

async function dialog() {
  const actions = new EventActionsRegistry()
  actions.setEcoreMetadataService(new EcoreMetadataService())
  await actions.registerActionsFromEcoreString('SystemVariableActions', variableActionsEcore, 'system', 'VariableActions.ecore')
  const manager = new EventManager(actions)

  const wrapper = mount(EventManagerUI, {
    props: { scope: { context: 'widget', contextId: 'w1', widgetType: 'SliderWidget' } },
    attachTo: document.body,
    global: {
      provide: {
        [EVENT_MANAGER as unknown as symbol]: manager,
        [EVENT_REGISTRY as unknown as symbol]: {
          getAllEvents: () => [{ name: 'Slider Changed', type: 'SliderWidget:change', description: '' }],
          extractPayloadPropertiesForEvent: () => [{ name: 'value', type: 'any', optional: true }],
        },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: actions,
        [PAGE_REGISTRY as unknown as symbol]: { getAllPageIds: () => ['p1'], getPages: () => [] },
        [VARIABLE_REPOSITORY as unknown as symbol]: {
          getVariablesByScope: (scope: string) => (scope === 'global' ? GLOBALS : []),
        },
      },
    },
  })
  mounted.push(wrapper)
  await flushPromises()
  const vm = wrapper.vm as any
  vm.newMapping.eventType = 'SliderWidget:change'
  vm.newMapping.actions[0].targetContext = 'system'
  vm.newMapping.actions[0].actionName = 'setGlobalVariable'
  vm.showAddDialog = true
  await flushPromises()
  return { wrapper, vm, manager }
}

const mounted: Array<{ unmount(): void }> = []
afterEach(() => {
  mounted.splice(0).forEach((each) => each.unmount())
  document.body.innerHTML = ''
})

describe('a parameter declared as naming a variable', () => {
  it('is declared so by the action, not recognised by its name', async () => {
    const { vm } = await dialog()
    expect(vm.selectedActionParameters.map((p: any) => [p.name, p.kind])).toEqual([
      ['variableName', 'variable'],
      ['value', undefined],
    ])
  })

  it('lists the global variables, by name with their type', async () => {
    const { vm } = await dialog()
    expect(vm.getParameterValueSource(0)).toBe('manual')
    expect(vm.variableOptions).toEqual([
      { text: 'Temperatur (ComputedVariable)', value: 'Temperatur' },
      { text: 'Wind (ConstantVariable)', value: 'Wind' },
    ])
    expect(document.querySelector('.param__variable')).not.toBeNull()
    /* The other parameter is taken from the event, as before. */
    expect(vm.getParameterValueSource(1)).toBe('payload')
  })

  it('writes the chosen variable’s name into the mapping', async () => {
    const { wrapper, vm, manager } = await dialog()
    wrapper.findComponent('.param__variable' as any).vm.$emit('update:modelValue', 'Wind')
    vm.updateParameterMapping(1, 'value')
    vm.addMapping()

    const [rule] = manager.getAllMappings()
    expect(rule.actions![0].actionArgs![0]).toBe('Wind')
    expect(rule.actions![0].payloadMapping).toEqual([{ payloadPath: 'value', argIndex: 1 }])
  })

  it('still takes the name of a variable that does not exist yet', async () => {
    const { vm, manager } = await dialog()
    vm.updateManualParameterValue(0, 'Böen')
    vm.addMapping()
    expect(manager.getAllMappings()[0].actions![0].actionArgs![0]).toBe('Böen')
  })
})
