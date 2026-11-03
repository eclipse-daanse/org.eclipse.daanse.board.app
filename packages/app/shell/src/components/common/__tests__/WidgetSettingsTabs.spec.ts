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
 **********************************************************************/

// @vitest-environment jsdom

/**
 * A tab another bundle contributes to a widget's settings (#1188).
 *
 * The overlay's own tabs are the ones every widget has. Until this there
 * was no way for a bundle to add one, so anything a bundle had to say
 * about a widget had to be said on a screen that does not know which
 * widget is open.
 */
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  WidgetImpl,
  WorkspaceImpl,
  identifier as WORKSPACE,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  identifier as WIDGET_REPOSITORY,
  settingsTabsIdentifier,
  type WidgetSettingsTab,
} from 'org.eclipse.daanse.board.app.lib.api.widget'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import WidgetSettingsOverlay from '../WidgetSettingsOverlay.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: {} }),
  useRouter: () => ({ push() {} }),
}))

const VARIABLE_REPOSITORY = Symbol.for('VariableRepository')
const DATASOURCE_REPOSITORY = Symbol.for('DatasourceRepository')

/* What a contributed tab is handed: which widget, and what kind. */
const Told = defineComponent({
  props: { widgetId: String, widgetType: String },
  setup: (props) => () =>
    h('p', { class: 'told' }, `${props.widgetType}/${props.widgetId}`),
})

function setUp(tabs: WidgetSettingsTab[], onType = 'datatable') {
  const workspace = new WorkspaceImpl()

  const widget = new WidgetImpl()
  widget.uid = 'w1'
  widget.type = onType
  widget.config = {}
  widget.wrapperConfig = {}

  const registry = {
    getTabs: (type: string) => tabs.filter((tab) => (tab.appliesTo ? tab.appliesTo(type) : true)),
    onChange: () => () => {},
  }

  document.body.innerHTML = ''
  const wrapper = mount(WidgetSettingsOverlay, {
    props: { modelValue: widget },
    global: {
      provide: {
        [WORKSPACE as symbol]: workspace,
        [WIDGET_REPOSITORY as symbol]: {
          getWidget: () => ({ name: 'DataTable' }),
          getAllWidgets: () => ({ [onType]: { name: 'DataTable' } }),
          onChange: () => () => {},
        },
        [settingsTabsIdentifier]: registry,
        [DATASOURCE_REPOSITORY as symbol]: { getDatasource: () => undefined },
        [VARIABLE_REPOSITORY as symbol]: { getVariable: () => undefined },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: {
          registerInstance() {},
          unregisterInstance() {},
        },
        [identifiers.TINY_EMITTER as unknown as symbol]: { on() {}, off() {}, emit() {} },
      },
    },
  })
  return { wrapper, widget }
}

/*
 * The overlay teleports to the body, so its tab strip is read from the
 * document rather than from the wrapper.
 */
function tabStrip(): HTMLElement[] {
  return [...document.querySelectorAll('[role="tab"]')] as HTMLElement[]
}

function tabNames(): string[] {
  return tabStrip().map((tab) => tab.textContent?.trim() ?? '')
}

function shown(selector: string): HTMLElement | null {
  return document.querySelector(selector)
}

describe('a contributed settings tab', () => {
  it('appears in the strip beside the overlay’s own', async () => {
    setUp([{ id: 'events', label: 'eventmanager:Tab.events', component: Told }])
    await flushPromises()

    /* Untranslated in a test, so the key itself is what stands there. */
    expect(tabNames()).toContain('eventmanager:Tab.events')
  })

  it('is told which widget it is about, and what kind', async () => {
    setUp([{ id: 'events', label: 'eventmanager:Tab.events', component: Told }])
    await flushPromises()

    tabStrip().find((each) => each.textContent?.includes('Tab.events'))!.click()
    await flushPromises()

    expect(shown('.told')?.textContent).toBe('datatable/w1')
  })

  /* Asked of the registry, which asks the tab - the overlay has no
    business knowing what any particular tab is for. */
  it('is left out where it says it has nothing to say', async () => {
    setUp(
      [
        {
          id: 'events',
          label: 'eventmanager:Tab.events',
          component: Told,
          appliesTo: (type) => type === 'datatable',
        },
      ],
      'markdown',
    )
    await flushPromises()

    expect(tabNames().length).toBeGreaterThan(0)
    expect(tabNames()).not.toContain('eventmanager:Tab.events')
  })

  it('leaves the overlay alone when no bundle contributes one', async () => {
    setUp([])
    await flushPromises()

    expect(tabNames().length).toBeGreaterThan(0)
    expect(shown('.told')).toBeNull()
  })
})
