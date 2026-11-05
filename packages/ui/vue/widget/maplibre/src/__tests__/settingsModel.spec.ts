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

import { describe, it, expect } from 'vitest'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { MaplibrePackage } from '../gen/MaplibrePackage'
import { modelledSettings, newColorMapping, newThingLayer } from '../settingsModel'

void EventsPackage.eINSTANCE
void MaplibrePackage.eINSTANCE

describe('the settings of the 3D map', () => {
  it('start with a free vector style, tilted over Jena, with buildings in 3D', () => {
    const settings = modelledSettings(undefined)
    expect(settings.styleUrl).toBe('https://tiles.openfreemap.org/styles/liberty')
    expect(settings.pitch).toBe(50)
    expect(settings.buildings).toBe(true)
    expect(settings.terrainUrl).toBe('')
    expect(settings.thingLayers.size()).toBe(0)
  })

  it('adopt a stored board into contained layers, once per stored object', () => {
    const stored = {
      rasterUrl: 'https://kartenportal.jena.de/mapproxy/service',
      rasterLayers: 'stadtplan_sw',
      pitch: 60,
      thingLayers: [
        {
          id: 'areas',
          thingNames: ['Reference Area*'],
          colorSuffix: '~referenceArea~color',
          colors: [{ code: 'RED', color: '#d00' }],
          extrude: true,
        },
      ],
    }
    const settings = modelledSettings(stored)
    expect(modelledSettings(stored)).toBe(settings)
    expect(settings.pitch).toBe(60)
    const layer = settings.thingLayers.get(0)
    expect(layer.eContainer()).toBe(settings)
    expect(layer.thingNames.toArray()).toEqual(['Reference Area*'])
    expect(layer.colors.get(0).color).toBe('#d00')
    expect(layer.extrude).toBe(true)
    // What is not stored keeps the model's default.
    expect(layer.fillColor).toBe('#3388ff')
  })

  it('are stored by their plain names and come back the same', () => {
    const settings = modelledSettings({})
    const layer = newThingLayer('Areas')
    layer.thingNames.add('Reference Area*')
    layer.colors.add(newColorMapping('BLUE', '#00f'))
    settings.thingLayers.add(layer)
    settings.bearing = 30

    const json = JSON.parse(JSON.stringify(settings))
    expect(json.bearing).toBe(30)
    expect(json.thingLayers[0].colors).toEqual([{ code: 'BLUE', color: '#00f' }])
    expect(Object.keys(json).some((key) => key.startsWith('_'))).toBe(false)

    const again = modelledSettings(json)
    expect(again.thingLayers.get(0).name).toBe('Areas')
    expect(again.thingLayers.get(0).colors.get(0).code).toBe('BLUE')
  })
})
