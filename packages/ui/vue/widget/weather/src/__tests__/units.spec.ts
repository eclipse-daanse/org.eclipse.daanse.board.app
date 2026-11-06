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

import { describe, it, expect, vi } from 'vitest'
import { effectScope, nextTick } from 'vue'
import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WeathersettingsPackage } from '../gen/WeathersettingsPackage'
import { WeatherSettingsImpl } from '../gen/WeatherSettingsImpl'
import { useWeatherData } from '../composables/useWeatherData'
import { isNight, nightIcon, sunElevation, withTemperatureUnit } from '../composables/weatherUnits'

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useFormat: () => ({ date: (value: string) => value }),
  }
})

void WeathersettingsPackage.eINSTANCE

/*
 * #1267: the DWD forecast on the udp-broker sends temperatures in Kelvin
 * without a unit, and a clear sky at night showed the sun.
 */

/* A weather composer answer for one station, as the Bodenfeuchte board gets it. */
const STATION = [
  {
    thingId: '10567',
    location: { coordinates: { latitude: 50.95, longitude: 11.61 } },
    temperature: { value: 272.95, unit: 'K', timestamp: '2026-11-05T21:00:00Z' },
    temperatureForecast: {
      forecast12h: { value: 275.15, unit: '', timestamp: '2026-11-06T09:00:00Z' },
      forecast24h: { value: 273.15, unit: '', timestamp: '2026-11-06T21:00:00Z' },
    },
  },
]

function hold(settings: WeatherSettingsImpl) {
  const scope = effectScope()
  const held = scope.run(() => {
    const watched = useEObject(() => settings)
    return useWeatherData(() => watched.value as any, 'ds-1')
  })!
  held.weatherData.value = STATION
  return held
}

describe('a temperature without a unit', () => {
  it('is converted from the unit the settings name, and follows a change of it', async () => {
    const settings = new WeatherSettingsImpl()
    settings.temperatureUnit = 'K'
    const held = hold(settings)

    const forecast = held.currentWeather.value.temperatureForecast
    expect(forecast.forecast12h.value).toBeCloseTo(2)
    expect(forecast.forecast12h.unit).toBe('°C')
    expect(forecast.forecast24h.value).toBeCloseTo(0)
    // A value that names its unit is left to the widget, as before.
    expect(held.currentWeather.value.temperature).toEqual(STATION[0].temperature)

    settings.temperatureUnit = '°F'
    await nextTick()
    expect(held.currentWeather.value.temperatureForecast.forecast12h.value).toBeCloseTo((275.15 - 32) * 5 / 9)
  })

  it('stays as it was on a board without the setting', () => {
    const held = hold(new WeatherSettingsImpl())

    expect(held.currentWeather.value).toEqual(STATION[0])
  })

  it('of an OGC STA source takes the configured unit before the Celsius it was given', () => {
    const settings = new WeatherSettingsImpl()
    const scope = effectScope()
    const held = scope.run(() => useWeatherData(() => settings as any, 'ds-1'))!
    held.weatherData.value = { datastreams: [{ name: 'temperature', observations: [{ result: 280.15, phenomenonTime: '2026-11-06T09:00:00Z' }] }] }
    expect(held.currentWeather.value.temperature).toMatchObject({ value: 280.15, unit: '°C' })

    settings.temperatureUnit = 'K'
    const again = effectScope().run(() => useWeatherData(() => settings as any, 'ds-1'))!
    again.weatherData.value = held.weatherData.value
    expect(again.currentWeather.value.temperature.value).toBeCloseTo(7)
    expect(again.currentWeather.value.temperature.unit).toBe('°C')
  })

  it('is left alone where the setting names no unit it knows', () => {
    const item = { value: 1, unit: '' }
    expect(withTemperatureUnit(item, 'Rankine')).toBe(item)
  })
})

describe('the icon at night', () => {
  const jena = { latitude: 50.95, longitude: 11.61 }

  it('knows day from night in Jena', () => {
    expect(sunElevation(new Date('2026-11-05T11:00:00Z'), jena.latitude, jena.longitude)).toBeGreaterThan(15)
    expect(isNight('2026-11-05T11:00:00Z', jena)).toBe(false)
    expect(isNight('2026-11-05T21:00:00Z', jena)).toBe(true)
  })

  it('says nothing without a place, so the day icon stays', () => {
    expect(isNight('2026-11-05T21:00:00Z', undefined)).toBe(false)
  })

  it('shows a moon for a clear sky and no sun at all', () => {
    expect(nightIcon('☀️')).toBe('🌙')
    expect(nightIcon('🌤️')).toBe('🌙')
    expect(nightIcon('⛅')).toBe('☁️')
    expect(nightIcon('🌦️')).toBe('🌧️')
    expect(nightIcon('❄️')).toBe('❄️')
  })
})
