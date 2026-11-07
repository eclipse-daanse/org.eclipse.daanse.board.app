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
 * The field names the form suggests (#1285).
 */
import { describe, expect, it } from 'vitest'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { modelledSettings } from '../settingsModel'
import { headersOfAnswer, suggestFields } from '../suggest'

void VegawidgetPackage.eINSTANCE

const none = async () => {
  throw new Error('no source asked for')
}

describe('suggestFields', () => {
  const settings = modelledSettings({
    layers: [
      { mark: 'bar', encodings: [{ channel: 'x' }], transforms: [{ kind: 'fold', fields: ['north'], keyAs: 'region' }, { kind: 'calculate', as: 'share' }] },
      { mark: 'rule', encodings: [{ channel: 'y' }], transforms: [{ kind: 'calculate', as: 'mean' }] },
    ],
    facet: { row: '' },
  })
  const encoding = settings.layers.get(0).encodings.get(0)

  it('suggests the columns of the source and the fields the layer adds', async () => {
    const headers = async (id: string) => (id === 'sales' ? ['category', 'amount'] : [])
    expect(await suggestFields(encoding, 'field', 'sales', headers)).toEqual(['category', 'amount', 'region', 'value', 'share'])
  })

  it('suggests the fields of every layer where the whole chart is meant', async () => {
    const headers = async () => ['category']
    expect(await suggestFields(settings.facet, 'row', 'sales', headers)).toEqual(['category', 'region', 'value', 'share', 'mean'])
  })

  it('suggests the sample columns while the chart reads no source', async () => {
    expect(await suggestFields(encoding, 'field', undefined, none)).toEqual(['category', 'amount', 'region', 'value', 'share'])
  })

  it('suggests nothing for a feature that names no field', async () => {
    expect(await suggestFields(encoding, 'title', 'sales', none)).toEqual([])
  })

  it('still suggests the computed fields when the source does not answer', async () => {
    expect(await suggestFields(encoding, 'field', 'down', none)).toEqual(['region', 'value', 'share'])
  })
})

describe('headersOfAnswer', () => {
  it('reads the headers of a DataTable, or the keys of its first row', () => {
    expect(headersOfAnswer({ headers: ['a', 'b'], items: [] })).toEqual(['a', 'b'])
    expect(headersOfAnswer({ items: [{ x: 1, y: 2 }] })).toEqual(['x', 'y'])
    expect(headersOfAnswer(null)).toEqual([])
  })
})
