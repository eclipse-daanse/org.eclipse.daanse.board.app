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
import {
  PageImpl,
  createWeather,
  weatherKindOf,
  weatherRegionOf,
  affectsWidgetsOf,
  WeatherKind,
  WeatherRegion,
  readShapes,
  writeShapes,
  liftTypedWeatherRegions,
  type Page,
} from './index'

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

  it('covers the whole page and acts with the widgets unless told otherwise', () => {
    const weather = createWeather()
    expect(weather.region!.value).toBe('page')
    expect(weather.affectsWidgets!.value).toBe(true)
    expect(weather.regionWidget!.eContainer()).toBe(weather)
    expect(weather.shapes.size()).toBe(0)
    expect(weatherRegionOf(' Widget ')).toBe(WeatherRegion.WIDGET)
    expect(weatherRegionOf('somewhere')).toBe(WeatherRegion.PAGE)
    expect(affectsWidgetsOf(undefined)).toBe(true)
    expect(affectsWidgetsOf('off')).toBe(false)
    expect(affectsWidgetsOf(false)).toBe(false)
  })
})

describe('a drawn region', () => {
  it('keeps its shapes, of every kind, through a save and a load', () => {
    const page = new PageImpl()
    page.id = 'p'
    page.weather = createWeather()
    writeShapes(page.weather, [
      { kind: 'rectangle', x: 1, y: 2, width: 3, height: 4 },
      { kind: 'ellipse', x: 5.5, y: 0, width: 2, height: 1 },
      { kind: 'polygon', points: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 3 }] },
    ])
    expect(page.weather.shapes.get(2).eContainer()).toBe(page.weather)

    const back = roundTrip(page)
    expect(readShapes(back.weather)).toEqual([
      { kind: 'rectangle', x: 1, y: 2, width: 3, height: 4 },
      { kind: 'ellipse', x: 5.5, y: 0, width: 2, height: 1 },
      { kind: 'polygon', points: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 3 }] },
    ])
  })

  /* As c8ed1ade wrote a page whose weather kept to a typed rectangle */
  function typedPage(region: Record<string, unknown>) {
    return {
      eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Page',
      id: 'p',
      weather: {
        kind: { value: 'snow' },
        region,
        regionX: { value: 2 },
        regionY: { value: 1 },
        regionWidth: { value: 4 },
        regionHeight: { value: 3 },
      },
    }
  }

  function load(stored: unknown): Page {
    const resource = new JSONResource(URI.createURI('page.json'))
    resource.loadFromString(JSON.stringify(stored))
    return resource.getContents().get(0) as Page
  }

  it('reads an old typed rectangle region as one rectangle shape', () => {
    const page = load(liftTypedWeatherRegions({ board: { pages: [typedPage({ value: 'area' })] } }).board.pages[0])
    expect(page.weather?.region?.value).toBe('area')
    expect(readShapes(page.weather)).toEqual([{ kind: 'rectangle', x: 2, y: 1, width: 4, height: 3 }])
  })

  it('drops the typed rectangle of a region that was not an area', () => {
    const stored = typedPage({ value: 'page' })
    liftTypedWeatherRegions(stored)
    expect(stored.weather).not.toHaveProperty('regionX')
    expect(readShapes(load(stored).weather)).toEqual([])
  })
})

