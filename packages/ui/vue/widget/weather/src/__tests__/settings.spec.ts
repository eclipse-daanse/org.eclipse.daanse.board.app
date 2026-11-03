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
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { WeathersettingsPackage } from '../gen/WeathersettingsPackage'
import { WeatherSettingsImpl } from '../gen/WeatherSettingsImpl'
import WeatherWidget from '../WeatherWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* One station, in the shape the weather composer answers. */
const STATION = { thingId: 1, name: 'Jena', temperature: { value: 20, unit: '°C' } }

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useDatasourceRepository: (_id: unknown, _type: string, data: { value: unknown }) => {
      data.value = [STATION]
      return { update: vi.fn(), callEvent: vi.fn(), getDataWithOptions: vi.fn().mockResolvedValue(undefined) }
    },
  }
})

void WeathersettingsPackage.eINSTANCE

async function show(settings: WeatherSettingsImpl) {
  const wrapper = mount(WeatherWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', configv: settings },
    global: {
      stubs: { ForecastChart: { template: '<div class="forecast-chart" />' } },
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
 * dialog has to reach the weather all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the footer: the refresh note follows the interval', async () => {
    const settings = new WeatherSettingsImpl()
    settings.refreshInterval = 0
    const wrapper = await show(settings)
    expect(wrapper.find('.refresh-info').exists()).toBe(false)

    settings.refreshInterval = 120000
    await nextTick()

    expect(wrapper.find('.refresh-info').exists()).toBe(true)
    expect(wrapper.find('.refresh-info').text()).toContain('Widget.autoRefresh')
  })
})
