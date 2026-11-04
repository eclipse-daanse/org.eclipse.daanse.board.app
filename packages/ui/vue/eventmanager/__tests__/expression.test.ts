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
 * The expression beside the field a parameter takes from the event, and
 * the line under it that shows what it yields (#1224) - evaluated by the
 * real event manager, for the last event the rule saw or a sample payload.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import {
  EVENT_MANAGER,
  EVENT_REGISTRY,
  EVENT_ACTIONS_REGISTRY,
} from 'org.eclipse.daanse.board.app.lib.api.events'
import { EventManager } from 'org.eclipse.daanse.board.app.lib.events'
import { identifier as PAGE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.page'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import EventManagerUI from '../src/components/EventManagerUI.vue'

const ROWS = [{ kasse: 'K1', valueNum: 3 }]

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  const { watch } = await import('vue')
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string, params?: Record<string, string>) =>
        params ? `${key} ${Object.values(params).join(' ')}` : key,
    }),
    useDatasourceRepository: (id: any, _shape: string, data: any) => {
      watch(id, (now: string) => { data.value = now === 'ds-1' ? { items: ROWS } : null }, { immediate: true })
      return { data, update: vi.fn() }
    },
  }
})

const ROW_PAYLOAD = [
  { name: 'row', type: 'Record', optional: true },
  { name: 'rowIndex', type: 'number', optional: true },
]

function openWith(manager: EventManager) {
  const table = { uid: 'w1', type: 'DataTableWidget', datasource: { uid: 'ds-1' } }
  return mount(EventManagerUI, {
    props: { scope: { context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' } },
    global: {
      provide: {
        [EVENT_MANAGER as unknown as symbol]: manager,
        [EVENT_REGISTRY as unknown as symbol]: {
          getAllEvents: () => [{ name: 'Row Clicked', type: 'DataTableWidget:row_click', description: '' }],
          extractPayloadPropertiesForEvent: () => ROW_PAYLOAD,
        },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: {
          getWidgetTypes: () => [{
            widgetType: 'SystemActions',
            context: 'system',
            actions: [{ methodName: 'setGlobalVariable', parameters: [
              { name: 'name', type: 'string' },
              { name: 'value', type: 'any' },
            ] }],
          }],
          getRegisteredInstances: () => [],
        },
        [PAGE_REGISTRY as unknown as symbol]: {
          getAllPageIds: () => ['p1'],
          getPages: () => [{ id: 'p1', widgets: [table] }],
        },
        [WIDGET_REPOSITORY as unknown as symbol]: {
          getAllWidgets: () => ({ DataTableWidget: { reads: ['DataTable'] } }),
        },
      },
    },
  })
}

async function dialogOn(manager: EventManager) {
  const wrapper = openWith(manager)
  mounted.push(wrapper)
  await flushPromises()
  const vm = wrapper.vm as any
  vm.newMapping.eventType = 'DataTableWidget:row_click'
  vm.newMapping.actions[0].targetContext = 'system'
  vm.newMapping.actions[0].actionName = 'setGlobalVariable'
  vm.showAddDialog = true
  await flushPromises()
  return { wrapper, vm }
}

const registry = { executeInstanceAction: vi.fn(async () => {}), executeActionOnAll: vi.fn(async () => {}) }

const mounted: Array<{ unmount(): void }> = []
afterEach(() => {
  mounted.splice(0).forEach((each) => each.unmount())
  document.body.innerHTML = ''
})

const resultLine = () => document.querySelector('.param__result')

describe('the expression of a parameter taken from the event', () => {
  it('is stored on the mapping, and a field chosen afterwards keeps it', async () => {
    const { vm } = await dialogOn(new EventManager(registry as any))

    vm.updateParameterMapping(1, 'row.valueNum')
    expect(vm.newMapping.actions[0].payloadMapping).toEqual([{ payloadPath: 'row.valueNum', argIndex: 1 }])

    vm.updateParameterExpression(1, 'value * 100')
    vm.updateParameterMapping(1, 'rowIndex')
    expect(vm.newMapping.actions[0].payloadMapping).toEqual([
      { payloadPath: 'rowIndex', argIndex: 1, expression: 'value * 100' },
    ])

    vm.updateParameterExpression(1, '')
    expect(vm.newMapping.actions[0].payloadMapping).toEqual([{ payloadPath: 'rowIndex', argIndex: 1 }])
  })

  it('shows its result for a sample payload built from the source’s first row', async () => {
    const { vm } = await dialogOn(new EventManager(registry as any))

    vm.updateParameterMapping(1, 'row.valueNum')
    vm.updateParameterExpression(1, 'value * 100')
    await flushPromises()

    expect(document.querySelector('input[placeholder="value * 100"]')).not.toBeNull()
    expect(resultLine()?.textContent?.trim()).toBe('Rule.resultSample 300')
  })

  it('shows its result for the last event the rule saw', async () => {
    const manager = new EventManager(registry as any)
    manager.registerMapping({
      id: 'rule-1',
      context: 'widget',
      contextId: 'w1',
      eventType: 'DataTableWidget:row_click',
      actions: [{
        targetContext: 'system',
        actionName: 'setGlobalVariable',
        actionArgs: ['target'],
        payloadMapping: [{ payloadPath: 'row.valueNum', argIndex: 1, expression: 'value * 100' }],
      }],
    })
    await manager.handleEvent('widget', 'DataTableWidget:row_click', { row: { valueNum: 7 }, rowIndex: 0 }, 'w1')

    const wrapper = openWith(manager)
    mounted.push(wrapper)
    await flushPromises()
    ;(wrapper.vm as any).editMapping(manager.getAllMappings()[0])
    await flushPromises()

    expect(resultLine()?.textContent?.trim()).toBe('Rule.resultLast 700')
  })

  it('says so when it fails', async () => {
    const { vm } = await dialogOn(new EventManager(registry as any))

    vm.updateParameterMapping(1, 'row.valueNum')
    vm.updateParameterExpression(1, 'value.missing.deeper')
    await flushPromises()

    expect(resultLine()?.classList.contains('param__result--failed')).toBe(true)
    expect(resultLine()?.textContent).toContain('Rule.resultFailed')
  })
})
