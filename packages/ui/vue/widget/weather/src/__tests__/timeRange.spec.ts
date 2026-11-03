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

/* An OGC STA answer: a temperature from the first day, a humidity from the third. */
const ANSWER = {
  things: [{ '@iot.id': 7, name: 'Jena' }],
  datastreams: [
    { name: 'temperature', unitOfMeasurement: { symbol: '°C' }, observations: [{ result: 20, phenomenonTime: '2026-01-01T12:00:00Z' }] },
    { name: 'humidity', unitOfMeasurement: { symbol: '%' }, observations: [{ result: 60, phenomenonTime: '2026-01-03T12:00:00Z' }] },
  ],
}

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useFormat: () => ({ date: (value: string) => String(value) }),
    useDatasourceRepository: (_id: unknown, _type: string, data: { value: unknown }) => {
      data.value = ANSWER
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

const showsTemperature = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.find('.temperature').exists()
const showsHumidity = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.text().includes('Widget.humidity')

/*
 * The answer reaches the screen through the composable alone, so the
 * time range set in the settings decides which datastreams are shown -
 * and a range changed in the open dialog changes them (#1211, #1206).
 */
describe('the time range in the settings', () => {
  it('decides which datastreams are shown', async () => {
    const settings = new WeatherSettingsImpl()
    settings.refreshInterval = 0
    settings.useTimeRange = true
    settings.startTime = '2026-01-02T00:00:00Z'
    const wrapper = await show(settings)

    expect(showsHumidity(wrapper)).toBe(true)
    expect(showsTemperature(wrapper)).toBe(false)
    expect(wrapper.find('.weather-header h3').text()).toBe('Jena')
  })

  it('changed in the open dialog, changes them', async () => {
    const settings = new WeatherSettingsImpl()
    settings.refreshInterval = 0
    settings.useTimeRange = true
    settings.startTime = '2026-01-02T00:00:00Z'
    const wrapper = await show(settings)
    expect(showsTemperature(wrapper)).toBe(false)

    settings.startTime = '2025-12-31T00:00:00Z'
    await nextTick()

    expect(showsTemperature(wrapper)).toBe(true)
    expect(showsHumidity(wrapper)).toBe(true)

    settings.startTime = '2026-01-04T00:00:00Z'
    await nextTick()

    expect(wrapper.find('.weather-empty').exists()).toBe(true)
  })
})
