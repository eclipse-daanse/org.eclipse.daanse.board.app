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
 * What the rule dialog offers to take from an event (#1221).
 *
 * The features the event's payload declares - and, for one that holds a
 * record, a field per column of the source the widget reads from, which is
 * what a rule on a row click is there to use.
 */
import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import {
  EVENT_MANAGER,
  EVENT_REGISTRY,
  EVENT_ACTIONS_REGISTRY,
} from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifier as PAGE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.page'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import EventManagerUI from '../src/components/EventManagerUI.vue'

const ROWS = [
  { datum: '2026-01-03', kasse: 'K2', besucher: 99 },
  { datum: '2026-01-01', kasse: 'K1', besucher: 100 },
]

/* The source answers in the shape it is asked for, and only ds-1 has rows. */
const asked: Array<{ id: string; shape: string }> = []
vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  const { watch } = await import('vue')
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useDatasourceRepository: (id: any, shape: string, data: any) => {
      watch(
        id,
        (now: string) => {
          asked.push({ id: now, shape })
          data.value = now === 'ds-1' && shape === 'DataTable' ? { items: ROWS } : null
        },
        { immediate: true },
      )
      return { data, update: vi.fn() }
    },
  }
})

const ROW_PAYLOAD = [
  { name: 'eventType', type: 'string', optional: true },
  { name: 'row', type: 'Record', optional: true },
  { name: 'rowIndex', type: 'number', optional: true },
]

function openOn(scope?: Record<string, unknown>) {
  const table = { uid: 'w1', type: 'DataTableWidget', datasource: { uid: 'ds-1' } }
  return mount(EventManagerUI, {
    props: scope ? { scope } : {},
    global: {
      provide: {
        [EVENT_MANAGER as unknown as symbol]: { getAllMappings: () => [], registerMapping: vi.fn(), unregisterMapping: vi.fn() },
        [EVENT_REGISTRY as unknown as symbol]: {
          getAllEvents: () => [{ name: 'Row Clicked', type: 'DataTableWidget:row_click', description: '' }],
          extractPayloadPropertiesForEvent: () => ROW_PAYLOAD,
        },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { getWidgetTypes: () => [], getRegisteredInstances: () => [] },
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

async function offeredFor(scope?: Record<string, unknown>) {
  const wrapper = openOn(scope)
  await flushPromises()
  wrapper.vm.newMapping.eventType = 'DataTableWidget:row_click'
  await flushPromises()
  return {
    values: (wrapper.vm.availablePayloadProperties as Array<{ value: string }>).map((each) => each.value),
    freePath: wrapper.vm.offersFreePath as boolean,
  }
}

describe('the fields a rule can take from a row click', () => {
  it('are the declared ones, and row.<column> for each column of the widget’s source', async () => {
    const { values, freePath } = await offeredFor({ context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' })

    expect(values).toEqual(['eventType', 'row', 'row.datum', 'row.kasse', 'row.besucher', 'rowIndex'])
    expect(freePath).toBe(false)
    expect(asked).toContainEqual({ id: 'ds-1', shape: 'DataTable' })
  })

  it('outside a widget are the declared ones, and a path typed in', async () => {
    const { values, freePath } = await offeredFor()

    expect(values).toEqual(['eventType', 'row', 'rowIndex'])
    expect(freePath).toBe(true)
  })
})
