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
import { nextTick } from 'vue'
import { EVENT_ACTIONS_REGISTRY, EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { RoutingSettingsPackage } from '../gen/RoutingSettingsPackage'
import { RoutingWidgetSettingsImpl } from '../gen/RoutingWidgetSettingsImpl'
import RoutingWidget from '../RoutingWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useDatasourceRepository: (_id: unknown, _type: string, data: { value: unknown }) => {
      data.value = null
      return { update: vi.fn(), callEvent: vi.fn(), getDatasourceInstance: () => null }
    },
  }
})

void EventsPackage.eINSTANCE
void RoutingSettingsPackage.eINSTANCE

async function show(settings: RoutingWidgetSettingsImpl) {
  const wrapper = mount(RoutingWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', config: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  return wrapper
}

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the route all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the mode: a new default is the mode in use', async () => {
    const settings = new RoutingWidgetSettingsImpl()
    const wrapper = await show(settings)
    expect((wrapper.find('select.costing-select').element as HTMLSelectElement).value).toBe('auto')

    settings.defaultCosting = 'bicycle'
    await nextTick()

    expect((wrapper.find('select.costing-select').element as HTMLSelectElement).value).toBe('bicycle')
  })
})
