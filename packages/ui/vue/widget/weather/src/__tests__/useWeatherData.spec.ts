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

import { describe, it, expect, vi } from 'vitest'
import { effectScope, nextTick } from 'vue'
import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WeathersettingsPackage } from '../gen/WeathersettingsPackage'
import { WeatherSettingsImpl } from '../gen/WeatherSettingsImpl'
import { useWeatherData } from '../composables/useWeatherData'

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useFormat: () => ({ date: (value: string) => value }),
  }
})

void WeathersettingsPackage.eINSTANCE

/* Three readings, a day apart, each its own datastream. */
function reading(name: string, at: string) {
  return { name, observations: [{ result: 1, phenomenonTime: at }] }
}
const ANSWER = {
  datastreams: [
    reading('temperature 1', '2026-01-01T12:00:00Z'),
    reading('temperature 2', '2026-01-02T12:00:00Z'),
    reading('temperature 3', '2026-01-03T12:00:00Z'),
  ],
}

/** The composable the way the widget holds it: over the watched instance. */
function hold(settings: WeatherSettingsImpl) {
  const scope = effectScope()
  const held = scope.run(() => {
    const watched = useEObject(() => settings)
    return useWeatherData(() => watched.value as any, 'ds-1')
  })!
  held.weatherData.value = ANSWER
  return { ...held, stop: () => scope.stop() }
}

/*
 * The settings are a generated instance the dialog writes into from the
 * inside, and the widget hands the composable the ref useEObject gives it.
 * Read once at setup, the range was fixed for good (#1206).
 */
describe('useWeatherData', () => {
  it('follows a start time changed in the open dialog', async () => {
    const settings = new WeatherSettingsImpl()
    settings.useTimeRange = true
    settings.startTime = '2026-01-02T00:00:00Z'
    const held = hold(settings)
    expect(held.filteredDatastreams.value.map((ds: any) => ds.name)).toEqual(['temperature 2', 'temperature 3'])

    settings.startTime = '2026-01-03T00:00:00Z'
    await nextTick()

    expect(held.filteredDatastreams.value.map((ds: any) => ds.name)).toEqual(['temperature 3'])
    held.stop()
  })

  it('follows the range being switched off', async () => {
    const settings = new WeatherSettingsImpl()
    settings.useTimeRange = true
    settings.endTime = '2026-01-01T23:59:59Z'
    const held = hold(settings)
    expect(held.filteredDatastreams.value).toHaveLength(1)

    settings.useTimeRange = false
    await nextTick()

    expect(held.filteredDatastreams.value).toHaveLength(3)
    expect(held.formatTimeRange()).toBe('')
    held.stop()
  })
})
