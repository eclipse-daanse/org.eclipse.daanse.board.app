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
 * The stored settings adopted into the model (#1284): what the board keeps
 * as JSON comes back as the model's objects, once per stored object.
 */
import { describe, expect, it } from 'vitest'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { emptySettings, modelledSettings } from '../settingsModel'

void VegawidgetPackage.eINSTANCE

describe('modelledSettings', () => {
  it('starts a new chart with the starter layer', () => {
    const settings = modelledSettings(undefined)
    expect(settings.layers.size()).toBe(1)
    expect(settings.layers.get(0).mark).toBe('bar')
    expect(modelledSettings({ title: 'x' }).layers.size()).toBe(1)
  })

  it('leaves a chart whose layers were removed empty', () => {
    expect(modelledSettings({ layers: [] }).layers.size()).toBe(0)
  })

  it('brings layers, encodings and transforms back as the model saved them', () => {
    const stored = JSON.parse(JSON.stringify(modelledSettings({
      title: 'Sales',
      layers: [{ mark: 'line', encodings: [{ channel: 'y', field: 'amount', type: 'quantitative' }], transforms: [{ kind: 'fold', fields: ['a', 'b'] }] }],
      facet: { row: 'series' },
      params: [{ name: 'pick', kind: 'interval', encodings: ['x'] }],
    })))
    const back = modelledSettings(stored)
    expect(back.title).toBe('Sales')
    const layer = back.layers.get(0)
    expect(layer.mark).toBe('line')
    expect(layer.encodings.get(0).field).toBe('amount')
    expect(layer.transforms.get(0).fields.toArray()).toEqual(['a', 'b'])
    expect(back.facet?.row).toBe('series')
    expect(back.params.get(0).encodings.toArray()).toEqual(['x'])
  })

  it('adopts a stored object once, and hands modelled settings back as they are', () => {
    const stored = { layers: [] }
    expect(modelledSettings(stored)).toBe(modelledSettings(stored))
    const modelled = emptySettings()
    expect(modelledSettings(modelled)).toBe(modelled)
  })
})
