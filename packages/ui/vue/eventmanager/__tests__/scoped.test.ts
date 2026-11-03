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
 * The events screen standing in one widget's settings (#1188).
 *
 * The same screen and the same rules; what the scope changes is which of
 * them it is about - and that the questions whose answers are already on
 * the screen are not asked again.
 */
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import {
  EVENT_MANAGER,
  EVENT_REGISTRY,
  EVENT_ACTIONS_REGISTRY,
} from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifier as PAGE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.page'
import EventManagerUI from '../src/components/EventManagerUI.vue'
import WidgetEventsTab from '../src/components/WidgetEventsTab.vue'

const RULES = [
  { id: 'r1', context: 'widget', contextId: 'w1', eventType: 'DataTableWidget:col_click', actions: [{ actionName: 'setGlobalVariable' }] },
  { id: 'r2', context: 'widget', contextId: 'w2', eventType: 'DataTableWidget:row_click', actions: [{ actionName: 'openPage' }] },
  { id: 'r3', context: 'page', contextId: 'p1', eventType: 'MapWidget:click', actions: [{ actionName: 'refresh' }] },
]

const EVENTS = [
  { name: 'Column Clicked', type: 'DataTableWidget:col_click', description: '' },
  { name: 'Row Clicked', type: 'DataTableWidget:row_click', description: '' },
  { name: 'Map Clicked', type: 'MapWidget:click', description: '' },
]

const registerMapping = vi.fn()

function provide() {
  return {
    [EVENT_MANAGER as unknown as symbol]: {
      getAllMappings: () => RULES,
      registerMapping,
      unregisterMapping: vi.fn(),
    },
    [EVENT_REGISTRY as unknown as symbol]: {
      getAllEvents: () => EVENTS,
      extractPayloadPropertiesForEvent: () => [],
    },
    [EVENT_ACTIONS_REGISTRY as unknown as symbol]: {
      getWidgetTypes: () => [],
      getRegisteredInstances: () => [],
      getActionsForWidgetType: () => [],
    },
    [PAGE_REGISTRY as unknown as symbol]: { getAllPageIds: () => ['p1'] },
  }
}

function openOn(scope?: Record<string, unknown>) {
  return mount(EventManagerUI, {
    props: scope ? { scope } : {},
    global: { provide: provide() },
  })
}

/** The rules on screen, by the event each one is about. */
function rulesShown(wrapper: ReturnType<typeof mount>): string[] {
  return wrapper.findAll('.rule .clause__subject').map((each) => each.text()).filter((text) => text.includes(':'))
}

describe('the events screen, scoped to a widget', () => {
  beforeEach(() => {
    registerMapping.mockClear()
    document.body.innerHTML = ''
  })

  it('shows the rules of that widget and no others', async () => {
    const wrapper = openOn({ context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' })
    await flushPromises()

    expect(rulesShown(wrapper)).toEqual(['DataTableWidget:col_click'])
  })

  it('shows every rule where there is no scope', async () => {
    const wrapper = openOn()
    await flushPromises()

    expect(rulesShown(wrapper)).toHaveLength(3)
  })

  /*
   * Which widget this is about is on the screen behind the dialog, so the
   * dialog does not ask - and a rule written here belongs to that widget
   * whether or not anyone fills a field in.
   */
  it('does not ask which widget, and writes the answer in anyway', async () => {
    const wrapper = openOn({ context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' })
    await flushPromises()

    expect(wrapper.vm.newMapping).toMatchObject({ context: 'widget', contextId: 'w1' })
  })

  /*
   * What the rule carries when it is written, which is the whole point of
   * not asking: the context is filled in from the scope and reaches the
   * manager, rather than being left for someone to type.
   */
  it('writes the scope into the rule it saves', async () => {
    const wrapper = openOn({ context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' })
    await flushPromises()

    wrapper.vm.newMapping.eventType = 'DataTableWidget:col_click'
    wrapper.vm.newMapping.actions = [{ actionName: 'setGlobalVariable' }]
    wrapper.vm.addMapping()

    expect(registerMapping).toHaveBeenCalledTimes(1)
    expect(registerMapping.mock.calls[0][0]).toMatchObject({
      context: 'widget',
      contextId: 'w1',
      eventType: 'DataTableWidget:col_click',
    })
  })

  /*
   * The question is not asked, not merely answered in advance.
   *
   * Looked for in the 'when' half only: an action further down asks for a
   * target context under the same label, and that one stays - a rule on
   * this widget may well act on another.
   */
  async function whenLabels(scope?: Record<string, unknown>) {
    const wrapper = openOn(scope)
    await flushPromises()
    wrapper.vm.showAddDialog = true
    await flushPromises()

    const when = document.querySelectorAll('.part')[0]
    const labels = [...(when?.querySelectorAll('label') ?? [])].map((each) => each.textContent?.trim())
    wrapper.unmount()
    document.body.innerHTML = ''
    return labels
  }

  it('does not ask for a context where the scope is the answer', async () => {
    expect(await whenLabels({ context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' }))
      .not.toContain('Rule.context')

    expect(await whenLabels()).toContain('Rule.context')
  })

  it('offers only the events that widget raises', async () => {
    const wrapper = openOn({ context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' })
    await flushPromises()

    const offered = (wrapper.vm.eventOptions as Array<{ value: string }>).map((each) => each.value)
    expect(offered).toEqual(['DataTableWidget:col_click', 'DataTableWidget:row_click'])
  })

  it('offers all of them where there is no scope', async () => {
    const wrapper = openOn()
    await flushPromises()

    expect((wrapper.vm.eventOptions as unknown[]).length).toBe(3)
  })
})

describe('the tab in a widget’s settings', () => {
  it('turns what the overlay hands it into a scope on that widget', async () => {
    const wrapper = mount(WidgetEventsTab, {
      props: { widgetId: 'w1', widgetType: 'DataTableWidget' },
      global: { provide: provide() },
    })
    await flushPromises()

    expect(rulesShown(wrapper)).toEqual(['DataTableWidget:col_click'])
  })
})

/*
 * Two fields, two names (#1193).
 *
 * The dialog asks for a context twice: the one the rule belongs to, and
 * the one its action acts on. Both wore the label "Rule.context", one
 * above the other, which reads as the same question asked twice.
 */
describe('the rule dialog', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  async function labelsIn(part: number, scope?: Record<string, unknown>) {
    const wrapper = openOn(scope)
    await flushPromises()
    wrapper.vm.showAddDialog = true
    await flushPromises()

    const section = document.querySelectorAll('.part')[part]
    const labels = [...(section?.querySelectorAll('label') ?? [])].map((each) =>
      each.textContent?.trim(),
    )
    wrapper.unmount()
    document.body.innerHTML = ''
    return labels
  }

  it('calls the rule’s context and the action’s target by different names', async () => {
    const when = await labelsIn(0)
    const then = await labelsIn(2)

    expect(when).toContain('Rule.context')
    expect(then).toContain('Rule.targetContext')
    expect(then).not.toContain('Rule.context')
  })

  /*
   * Scoped, the rule's own context is not asked for - but the action's
   * target still is: a rule on this widget may well act on another.
   */
  it('keeps asking what the action acts on, even when scoped', async () => {
    const scope = { context: 'widget', contextId: 'w1', widgetType: 'DataTableWidget' }

    expect(await labelsIn(0, scope)).not.toContain('Rule.context')
    expect(await labelsIn(2, scope)).toContain('Rule.targetContext')
  })
})
