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

/**
 * A page's weather as it starts out.
 *
 * The generator leaves a contained reference empty, and a setting without
 * a wrapper is one the form cannot show and a variable cannot drive. So a
 * weather is made with all four in place, each the hand-written wrapper
 * (it is the one that can follow a variable), each holding the value a page
 * without any weather would have.
 */
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import { WeatherImpl } from './gen/WeatherImpl'
import type { Weather } from './gen/Weather'
import { WeatherKind, getWeatherKindByLiteral } from './gen/WeatherKind'
import { WeatherRegion, getWeatherRegionByLiteral } from './gen/WeatherRegion'

export const WEATHER_DEFAULTS = {
  kind: 'none',
  intensity: 50,
  wind: 0,
  color: '',
  region: 'page',
  regionX: 0,
  regionY: 0,
  regionWidth: 12,
  regionHeight: 8,
  regionWidget: '',
  affectsWidgets: true,
} as const

export function createWeather(): Weather {
  const weather = new WeatherImpl()
  weather.kind = new VariableWrapper<string>(WEATHER_DEFAULTS.kind)
  weather.intensity = new VariableWrapper<number>(WEATHER_DEFAULTS.intensity)
  weather.wind = new VariableWrapper<number>(WEATHER_DEFAULTS.wind)
  weather.color = new VariableWrapper<string>(WEATHER_DEFAULTS.color)
  weather.region = new VariableWrapper<string>(WEATHER_DEFAULTS.region)
  weather.regionX = new VariableWrapper<number>(WEATHER_DEFAULTS.regionX)
  weather.regionY = new VariableWrapper<number>(WEATHER_DEFAULTS.regionY)
  weather.regionWidth = new VariableWrapper<number>(WEATHER_DEFAULTS.regionWidth)
  weather.regionHeight = new VariableWrapper<number>(WEATHER_DEFAULTS.regionHeight)
  weather.regionWidget = new VariableWrapper<string>(WEATHER_DEFAULTS.regionWidget)
  weather.affectsWidgets = new VariableWrapper<boolean>(WEATHER_DEFAULTS.affectsWidgets)
  return weather
}

/** The kinds, as Weather.kind holds them: the enum's literals. */
export const WEATHER_KINDS = ['none', 'rain', 'snow', 'fog'] as const

/**
 * What a kind setting means, whatever a variable delivered.
 *
 * Case and surrounding space do not matter, and the enum's names are
 * understood as well as its literals, so "Snow" and "SNOW" both snow.
 * Anything else is no weather rather than an error: a variable that says
 * "sunny" should leave the page clear, not break it.
 */
export function weatherKindOf(value: unknown): WeatherKind {
  const text = String(value ?? '').trim().toLowerCase()
  return getWeatherKindByLiteral(text) ?? WeatherKind.NONE
}

/** The regions, as Weather.region holds them: the enum's literals. */
export const WEATHER_REGIONS = ['page', 'area', 'widget'] as const

/** What a region setting means; anything unknown is the whole page. */
export function weatherRegionOf(value: unknown): WeatherRegion {
  const text = String(value ?? '').trim().toLowerCase()
  return getWeatherRegionByLiteral(text) ?? WeatherRegion.PAGE
}

/**
 * Whether the weather acts with the widgets. A variable may deliver the
 * word rather than the boolean, so "false", "off", "no" and "0" are off;
 * anything unset is the default, on.
 */
export function affectsWidgetsOf(value: unknown): boolean {
  if (value === undefined || value === null || value === '') return WEATHER_DEFAULTS.affectsWidgets
  if (typeof value === 'boolean') return value
  return !['false', 'off', 'no', '0'].includes(String(value).trim().toLowerCase())
}
