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

import { describe, expect, it } from 'vitest'
import { JSONResource, URI } from '@emfts/core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import { PageImpl, createWeather, weatherKindOf, WeatherKind, type Page } from './index'

function roundTrip(page: Page): Page {
  const out = new JSONResource(URI.createURI('page.json'))
  out.getContents().add(page)
  const text = out.saveToString()
  const back = new JSONResource(URI.createURI('page.json'))
  back.loadFromString(text)
  return back.getContents().get(0) as Page
}

describe('a page with weather', () => {
  it('starts with every setting in a wrapper', () => {
    const weather = createWeather()
    expect(weather.kind!).toBeInstanceOf(VariableWrapper)
    expect(weather.intensity!.value).toBe(50)
    expect(weather.wind!.value).toBe(0)
    expect(weather.kind!.eContainer()).toBe(weather)
  })

  it('writes its weather out and reads it back, binding included', () => {
    const page = new PageImpl()
    page.id = 'p'
    page.weather = createWeather()
    page.weather.kind!.value = 'snow'
    page.weather.intensity!.variable = 'storm'
    page.weather.intensity!.isSet = true

    const back = roundTrip(page)
    expect(back.weather?.kind?.value).toBe('snow')
    expect(back.weather?.intensity?.variable).toBe('storm')
    expect(back.weather?.intensity?.isSet).toBe(true)
    expect(back.weather?.wind?.value).toBe(0)
  })

  it('understands a kind however a variable spells it', () => {
    expect(weatherKindOf(' Snow ')).toBe(WeatherKind.SNOW)
    expect(weatherKindOf('rain')).toBe(WeatherKind.RAIN)
    expect(weatherKindOf('sunny')).toBe(WeatherKind.NONE)
    expect(weatherKindOf(undefined)).toBe(WeatherKind.NONE)
  })
})
