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
import type { Polygon } from 'geojson'
import { centerOf, datastreamIdsOf, geometriesOf, layerShows, thingFeaturesOf } from '../things'

/* A Reference Area as the Jena broker answers it: a FeatureCollection without a type at the top. */
const polygon: Polygon = { type: 'Polygon', coordinates: [[[11.60, 50.94], [11.61, 50.94], [11.61, 50.95], [11.60, 50.94]]] }
const area = (id: string) => ({
  iotId: id,
  name: `Reference Area ${id}`,
  locations: [{ location: { features: [{ type: 'Feature', id: `feature-${id}-0`, geometry: polygon, properties: {} }] } }],
})

const layer = {
  thingNames: ['Reference Area*'],
  colorSuffix: '~referenceArea~color',
  colors: [{ code: 'RED', color: '#d32f2f' }, { code: 'BLUE', color: '#1976d2' }],
  heightSuffix: '~referenceArea~sensorCount',
  heightFactor: 10,
  baseHeight: 20,
}

describe('the things of an OGC STA layer', () => {
  it('are those whose name matches a pattern', () => {
    expect(layerShows(layer, { name: 'Reference Area JeN-06' })).toBe(true)
    expect(layerShows(layer, { name: 'Sensor JeN-06' })).toBe(false)
    expect(layerShows({ thingNames: [] }, { name: 'Reference Area JeN-06' })).toBe(false)
  })

  it('are drawn where their location is, whatever form it has', () => {
    expect(geometriesOf(area('a').locations[0].location)).toEqual([polygon])
    expect(geometriesOf({ type: 'Feature', geometry: polygon })).toEqual([polygon])
    expect(geometriesOf(JSON.stringify(polygon))).toEqual([polygon])
    expect(geometriesOf('not json')).toEqual([])
    expect(centerOf([polygon])).toEqual([11.605, 50.945])
  })

  it('ask for the colour and the height datastream of each thing', () => {
    expect(datastreamIdsOf(layer, [area('JeN-06')])).toEqual(['JeN-06~referenceArea~color', 'JeN-06~referenceArea~sensorCount'])
  })

  it('take their colour from the latest value and their height from the latest number', () => {
    const latest = new Map<string, { result?: unknown }>([
      ['JeN-06~referenceArea~color', { result: 'RED' }],
      ['JeN-06~referenceArea~sensorCount', { result: 3 }],
      ['ZW-07~referenceArea~color', { result: 'GREEN' }],
    ])
    const { features } = thingFeaturesOf(layer, [area('JeN-06'), area('ZW-07'), { iotId: 'x', name: 'Other' }], latest, 'ZW-07')
    expect(features).toHaveLength(2)
    expect(features[0].properties).toMatchObject({ thingId: 'JeN-06', color: '#d32f2f', value: 'RED', height: 50, selected: false })
    // A value without a rule leaves the fill colour of the layer; no number, the base height.
    expect(features[1].properties).not.toHaveProperty('color')
    expect(features[1].properties).toMatchObject({ value: 'GREEN', height: 20, selected: true })
  })
})
