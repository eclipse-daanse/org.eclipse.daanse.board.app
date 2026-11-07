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
import {
  beforeIdOf,
  buildingLayerOf,
  buildingSourceOf,
  dataLayerOf,
  featureLayersOf,
  geoJsonLookOf,
  rasterLayerOf,
  rasterSourceOf,
  rasterTilesOf,
  sourceIdOf,
  styleExtrusionsOf,
  styleUrlOf,
  terrainSourceOf,
  thingLookOf,
} from '../mapStyle'

describe('the base of the 3D map', () => {
  it('asks a WMS server for 256 px tiles in EPSG:3857', () => {
    const [tile] = rasterTilesOf({ rasterUrl: 'https://kartenportal.jena.de/mapproxy/service', rasterLayers: 'stadtplan_sw' })!
    expect(tile.startsWith('https://kartenportal.jena.de/mapproxy/service?SERVICE=WMS&')).toBe(true)
    expect(tile).toContain('LAYERS=stadtplan_sw')
    expect(tile).toContain('SRS=EPSG:3857')
    expect(tile).toContain('BBOX={bbox-epsg-3857}')
  })

  it('takes an XYZ template as it is, and draws no raster without an address', () => {
    expect(rasterTilesOf({ rasterUrl: 'https://tile.example/{z}/{x}/{y}.png' })).toEqual(['https://tile.example/{z}/{x}/{y}.png'])
    expect(rasterSourceOf({ rasterUrl: '' })).toBeNull()
    expect(rasterSourceOf({ rasterUrl: 'https://wms.example/?map=x', rasterLayers: 'a' })!.tiles![0]).toMatch(/\?map=x&SERVICE=WMS/)
  })

  it('turns the raster base dark in the dark theme, unless told not to', () => {
    expect(rasterLayerOf({}, true).paint).toMatchObject({ 'raster-brightness-min': 1 })
    expect(rasterLayerOf({ rasterInvertDark: false }, true).paint).not.toHaveProperty('raster-brightness-min')
    expect(rasterLayerOf({}, false).paint).not.toHaveProperty('raster-brightness-min')
  })

  it('uses the dark style in the dark theme, and the light one where none is set', () => {
    expect(styleUrlOf({ styleUrl: 'a', darkStyleUrl: 'b' }, true)).toBe('b')
    expect(styleUrlOf({ styleUrl: 'a', darkStyleUrl: '' }, true)).toBe('a')
    expect(styleUrlOf({ styleUrl: 'a', darkStyleUrl: 'b' }, false)).toBe('a')
  })

  it('reads terrain from elevation tiles or a TileJSON', () => {
    expect(terrainSourceOf({ terrainUrl: '' })).toBeNull()
    expect(terrainSourceOf({ terrainUrl: 'https://dem/{z}/{x}/{y}.png' })).toMatchObject({ type: 'raster-dem', tiles: ['https://dem/{z}/{x}/{y}.png'], encoding: 'terrarium' })
    expect(terrainSourceOf({ terrainUrl: 'https://dem/tiles.json', terrainEncoding: 'mapbox' })).toMatchObject({ url: 'https://dem/tiles.json', encoding: 'mapbox' })
  })

  it('raises the buildings of the style by their height, from the source that holds them', () => {
    const style = {
      sources: { openmaptiles: { type: 'vector' as const, url: 'x' } },
      layers: [
        { id: 'building', type: 'fill' as const, source: 'openmaptiles', 'source-layer': 'building' },
        { id: 'building-3d', type: 'fill-extrusion' as const, source: 'openmaptiles', 'source-layer': 'building' },
      ],
    }
    expect(buildingSourceOf(style, 'building')).toBe('openmaptiles')
    expect(styleExtrusionsOf(style)).toEqual(['building-3d'])
    const layer = buildingLayerOf({ buildingColor: '#abc', buildingOpacity: 0.5 }, 'openmaptiles') as any
    expect(layer.type).toBe('fill-extrusion')
    expect(layer['source-layer']).toBe('building')
    expect(layer.paint['fill-extrusion-color']).toBe('#abc')
    expect(layer.paint['fill-extrusion-height'][1]).toEqual(['get', 'render_height'])
  })
})

describe('the data layers of the 3D map', () => {
  const source = sourceIdOf('things', 'areas')

  it('draw areas flat, or as blocks as tall as each feature says', () => {
    const flat = featureLayersOf(source, thingLookOf({ extrude: false }, '#ff0'))
    expect(flat.map((l) => l.type)).toEqual(['fill', 'line', 'circle'])
    const raised = featureLayersOf(source, thingLookOf({ extrude: true, fillOpacity: 0.8 }, '#ff0')) as any[]
    expect(raised.map((l) => l.type)).toEqual(['fill-extrusion', 'line', 'circle'])
    expect(raised[0].paint['fill-extrusion-height']).toEqual(['coalesce', ['get', 'height'], 0])
    expect(raised[0].paint['fill-extrusion-opacity']).toBe(0.8)
  })

  it('colour a feature by its own colour, the selection colour while selected', () => {
    const [fill] = featureLayersOf(source, thingLookOf({ fillColor: '#123' }, '#ff0')) as any[]
    expect(fill.paint['fill-color']).toEqual(['case', ['boolean', ['get', 'selected'], false], '#ff0', ['coalesce', ['get', 'color'], '#123']])
  })

  it('raise GeoJSON by a property of each feature', () => {
    const look = geoJsonLookOf({ extrude: true, heightProperty: 'levels', heightFactor: 3, baseHeight: 5 }, '#ff0')
    expect(look.height).toEqual(['case', ['has', 'levels'], ['*', ['to-number', ['get', 'levels'], 0], 3], 5])
  })

  it('lie below the 3D buildings while flat, and above them as blocks (#1270)', () => {
    expect(beforeIdOf({ type: 'fill' }, true)).toBe('daanse:buildings')
    expect(beforeIdOf({ type: 'line' }, true)).toBe('daanse:buildings')
    expect(beforeIdOf({ type: 'circle' }, true)).toBe('daanse:buildings')
    expect(beforeIdOf({ type: 'fill-extrusion' }, true)).toBeUndefined()
    expect(beforeIdOf({ type: 'fill' }, false)).toBeUndefined()
  })

  it('draw points as pins in the colour of their value, with an icon, a selected one larger with a ring (#1273)', () => {
    const layers = featureLayersOf(source, thingLookOf({ pointStyle: 'pin', markerSize: 2, fillColor: '#123' }, '#ff0')) as any[]
    expect(layers.map((l) => l.id)).toEqual([
      'daanse:things:areas:fill',
      'daanse:things:areas:line',
      'daanse:things:areas:halo',
      'daanse:things:areas:pin',
    ])
    const pin = layers[3]
    expect(pin.type).toBe('symbol')
    // Selected or not, a pin keeps the colour of its value: the size and the ring say it is selected.
    expect(pin.layout['icon-image']).toEqual(['concat', 'daanse-pin:', ['coalesce', ['get', 'color'], '#123']])
    const withIcon = featureLayersOf(source, thingLookOf({ pointStyle: 'pin', markerIcon: 'sensors' }, '#ff0')) as any[]
    expect(withIcon[3].layout['icon-image']).toEqual(['concat', 'daanse-pin:sensors|', ['coalesce', ['get', 'color'], '#3388ff']])
    expect(pin.layout['icon-anchor']).toBe('bottom')
    expect(pin.layout['icon-size']).toEqual(['case', ['boolean', ['get', 'selected'], false], 2.7, 2])
    expect(layers[2].filter[2]).toEqual(['boolean', ['get', 'selected'], false])
    // A pin stands in front of the buildings, its ring lies below them.
    expect(beforeIdOf(pin, true)).toBeUndefined()
    expect(beforeIdOf(layers[2], true)).toBe('daanse:buildings')
    expect(dataLayerOf('daanse:things:areas:pin')).toEqual({ kind: 'things', id: 'areas' })
    // Old boards keep their circles.
    expect(featureLayersOf(source, thingLookOf({}, '#ff0')).map((l) => l.type)).toEqual(['fill', 'line', 'circle'])
  })

  it('name the layer a click hit', () => {
    expect(dataLayerOf('daanse:things:areas:extrusion')).toEqual({ kind: 'things', id: 'areas' })
    expect(dataLayerOf('daanse:geojson:a:b:fill')).toEqual({ kind: 'geojson', id: 'a:b' })
    expect(dataLayerOf('building-3d')).toBeNull()
  })
})
