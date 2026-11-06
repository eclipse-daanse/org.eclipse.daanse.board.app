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

/*
 * #1267: what the weather widget makes of a temperature without a unit,
 * and whether the sun is up at the time and place of a value.
 */

export interface WeatherValue {
  value: number
  unit: string
  timestamp?: string
}

/**
 * A temperature in the unit the settings name for values without one,
 * as °C. Kelvin and Fahrenheit are converted, Celsius is labelled. A value
 * that names its unit, and every value while the setting is empty, comes
 * back as it was - so a board without the setting shows what it showed.
 */
export function withTemperatureUnit<T extends Partial<WeatherValue> | undefined | null>(item: T, unit: string | undefined): T {
  if (!item || item.unit || !unit || typeof item.value !== 'number') return item
  if (unit === 'K') return { ...item, value: item.value - 273.15, unit: '°C' }
  if (unit === '°F') return { ...item, value: ((item.value - 32) * 5) / 9, unit: '°C' }
  if (unit === '°C') return { ...item, unit: '°C' }
  return item
}

/**
 * The current weather with its temperatures, current and forecast, in the
 * configured unit. A new object where something changed; the answer
 * itself is not written to.
 */
export function applyTemperatureUnit(weather: any, unit: string | undefined): any {
  if (!weather || !unit) return weather
  const next = { ...weather }
  if (weather.temperature) next.temperature = withTemperatureUnit(weather.temperature, unit)
  const forecast = weather.temperatureForecast
  if (forecast && typeof forecast === 'object') {
    next.temperatureForecast = Object.fromEntries(
      Object.entries(forecast).map(([period, item]) => [period, withTemperatureUnit(item as WeatherValue, unit)]),
    )
  }
  return next
}

/**
 * The elevation of the sun in degrees at a time and place (low-precision
 * solar position, good to a fraction of a degree).
 */
export function sunElevation(when: Date, latitude: number, longitude: number): number {
  const r = Math.PI / 180
  const n = when.getTime() / 864e5 - 10957.5
  const meanLongitude = (280.46 + 0.9856474 * n) % 360
  const anomaly = (357.528 + 0.9856003 * n) * r
  const eclipticLongitude = (meanLongitude + 1.915 * Math.sin(anomaly) + 0.02 * Math.sin(2 * anomaly)) * r
  const obliquity = (23.439 - 4e-7 * n) * r
  const declination = Math.asin(Math.sin(obliquity) * Math.sin(eclipticLongitude))
  const rightAscension = Math.atan2(Math.cos(obliquity) * Math.sin(eclipticLongitude), Math.cos(eclipticLongitude))
  const siderealHours = (18.697374558 + 24.06570982441908 * n) % 24
  const hourAngle = (siderealHours * 15 + longitude) * r - rightAscension
  const phi = latitude * r
  return (
    Math.asin(
      Math.sin(phi) * Math.sin(declination) + Math.cos(phi) * Math.cos(declination) * Math.cos(hourAngle),
    ) / r
  )
}

/**
 * Whether it is night - the sun below the horizon - at the time of a value
 * and the place of the station. Without a place nothing can be said, and
 * the answer is no, which keeps the day icons a widget showed before.
 */
export function isNight(
  timestamp: string | undefined,
  coordinates: { latitude?: number; longitude?: number } | undefined | null,
  now: () => Date = () => new Date(),
): boolean {
  const latitude = Number(coordinates?.latitude)
  const longitude = Number(coordinates?.longitude)
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return false
  const parsed = timestamp ? new Date(timestamp) : now()
  const when = Number.isNaN(parsed.getTime()) ? now() : parsed
  return sunElevation(when, latitude, longitude) <= 0
}

/* The icons that show the sun, and what the night shows instead. */
const NIGHT_ICONS: Record<string, string> = {
  '☀️': '🌙',
  '🌤️': '🌙',
  '⛅': '☁️',
  '🌥️': '☁️',
  '🌦️': '🌧️',
}

/** A day icon as it is at night: a moon for a clear sky, no sun elsewhere. */
export const nightIcon = (icon: string): string => NIGHT_ICONS[icon] ?? icon
