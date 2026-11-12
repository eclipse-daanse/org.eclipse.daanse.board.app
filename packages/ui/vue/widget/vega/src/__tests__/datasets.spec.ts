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
 * The rows a dataset draws, read from what a source answers (#1286).
 */
import { describe, expect, it } from 'vitest'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { datasetSources, requestOf, rowsOf, typed } from '../datasets'
import { modelledSettings } from '../settingsModel'

void VegawidgetPackage.eINSTANCE

describe('rowsOf', () => {
  it('reads the items of a DataTable, or a plain list as it is', () => {
    const table = { headers: ['a'], items: [{ a: 1 }, { a: 2 }], rows: [[1], [2]] }
    expect(rowsOf(table, 'table')).toEqual([{ a: 1 }, { a: 2 }])
    expect(rowsOf([{ a: 1 }, 'not a row', null], 'table')).toEqual([{ a: 1 }])
    expect(rowsOf(null, 'table')).toEqual([])
  })

  it('finds the rows of an object answer at its path', () => {
    const answer = { data: { results: [{ id: 1 }] } }
    expect(rowsOf(answer, 'object', 'data.results')).toEqual([{ id: 1 }])
    expect(rowsOf([{ id: 2 }], 'object', '')).toEqual([{ id: 2 }])
    expect(rowsOf(answer, 'object', 'data.missing')).toEqual([])
  })

  it('reads the features of GeoJSON', () => {
    const feature = { type: 'Feature', properties: { name: 'x' }, geometry: null }
    expect(rowsOf({ type: 'FeatureCollection', features: [feature] }, 'geojson')).toEqual([feature])
  })

  it('asks a source in the shape the dataset reads', () => {
    expect([requestOf('table'), requestOf('object'), requestOf('geojson'), requestOf(undefined)]).toEqual(['DataTable', 'object', 'geojson', 'DataTable'])
  })
})

describe('typed', () => {
  it('reads named columns as numbers, dates and booleans, and leaves the rest', () => {
    const rows = [{ amount: '12.5', at: '2026-01-02T00:00:00Z', ok: 'true', name: 'A' }, { amount: '', at: 'never', ok: '0', name: 'B' }]
    const read = typed(rows, { amount: 'number', at: 'date', ok: 'boolean' })
    expect(read[0]).toEqual({ amount: 12.5, at: new Date('2026-01-02T00:00:00Z'), ok: true, name: 'A' })
    expect(read[1]).toEqual({ amount: null, at: null, ok: false, name: 'B' })
    /* The rows that came are not written into. */
    expect(rows[0].amount).toBe('12.5')
  })
})

describe('datasetSources', () => {
  it('always has table, read from the widget unless an entry names another source', () => {
    expect(datasetSources([])).toEqual([{ name: 'table', datasourceId: '', shape: 'table', path: '', types: {} }])
    const settings = modelledSettings({
      layers: [],
      datasets: [
        { name: 'table', columnTypes: [{ column: 'amount', type: 'number' }] },
        { name: 'targets', datasourceId: 'rest-1', shape: 'object', path: 'data' },
      ],
    })
    expect(datasetSources(settings.datasets)).toEqual([
      { name: 'table', datasourceId: '', shape: 'table', path: '', types: { amount: 'number' } },
      { name: 'targets', datasourceId: 'rest-1', shape: 'object', path: 'data', types: {} },
    ])
  })
})
