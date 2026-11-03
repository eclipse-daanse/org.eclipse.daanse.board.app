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
import { applySelection, selectsEverything, type SelectionSpec } from './selection'

const answer = () => ({
  station: { name: 'Jena', id: 7 },
  readings: [
    { type: 'temperature', value: 9, unit: '°C', tags: ['outdoor'] },
    { type: 'humidity', value: 71, unit: '%', tags: [] },
    { type: 'temperature', value: 10, unit: '°C', tags: ['indoor'] },
    { type: 'pressure', value: 1013, unit: 'hPa' },
  ],
})

const take = (selection: SelectionSpec, from: unknown = answer()) => applySelection(from, selection, 'object')

describe('a selection on an object answer', () => {
  it('leaves the answer untouched without a selection - the same object', () => {
    const original = answer()
    expect(applySelection(original, undefined, 'object')).toBe(original)
    expect(applySelection(original, { pick: 'ALL', filters: [], fields: [] }, 'object')).toBe(original)
  })

  it('takes the value at its path', () => {
    expect(take({ path: 'station.name' })).toBe('Jena')
    expect(take({ path: 'readings.1.unit' })).toBe('%')
  })

  it('answers nothing for a path that matches nothing', () => {
    expect(take({ path: 'station.nowhere' })).toBeUndefined()
  })

  it('cuts an object down to its fields', () => {
    expect(take({ path: 'station', fields: ['name'] })).toEqual({ name: 'Jena' })
  })

  describe('on an array', () => {
    it('keeps the elements every filter holds for', () => {
      const kept = take({
        path: 'readings',
        filters: [
          { field: 'type', operator: 'EQUALS', value: 'temperature' },
          { field: 'value', operator: 'GREATER_THAN', value: '9' },
        ],
      }) as any[]
      expect(kept).toHaveLength(1)
      expect(kept[0].value).toBe(10)
    })

    it('compares as numbers where both sides read as one', () => {
      /* As text, "10" sorts before "9". */
      const below = take({ path: 'readings', filters: [{ field: 'value', operator: 'LESS_THAN', value: '10' }] }) as any[]
      expect(below.map((r) => r.value)).toEqual([9])
    })

    it('knows each operator', () => {
      const types = (operator: string, value: string, field = 'type') =>
        (take({ path: 'readings', filters: [{ field, operator, value }] }) as any[]).map((r) => r.type)

      expect(types('NOT_EQUALS', 'temperature')).toEqual(['humidity', 'pressure'])
      expect(types('CONTAINS', 'TEMP')).toEqual(['temperature', 'temperature'])
      expect(types('CONTAINS', 'indoor', 'tags')).toEqual(['temperature'])
      expect(types('EXISTS', '', 'tags')).toEqual(['temperature', 'humidity', 'temperature'])
      expect(types('EQUALS', '1013', 'value')).toEqual(['pressure'])
    })

    it('takes the first, the last, or the one at an index of what stays', () => {
      const temperatures = { path: 'readings', filters: [{ field: 'type', operator: 'EQUALS', value: 'temperature' }] }
      expect((take({ ...temperatures, pick: 'FIRST' }) as any[]).map((r) => r.value)).toEqual([9])
      expect((take({ ...temperatures, pick: 'LAST' }) as any[]).map((r) => r.value)).toEqual([10])
      expect((take({ ...temperatures, pick: 'INDEX', index: 1 }) as any[]).map((r) => r.value)).toEqual([10])
      expect(take({ ...temperatures, pick: 'INDEX', index: 5 })).toEqual([])
    })

    it('cuts each element down to its fields', () => {
      expect(take({ path: 'readings', pick: 'FIRST', fields: ['type', 'value'] })).toEqual([
        { type: 'temperature', value: 9 },
      ])
    })

    it('compares the element itself where a filter names no field', () => {
      expect(take({ path: 'readings.0.tags', filters: [{ operator: 'EQUALS', value: 'outdoor' }] })).toEqual(['outdoor'])
    })
  })

  it('does not change the answer it was given', () => {
    const original = answer()
    take({ path: 'readings', pick: 'FIRST', fields: ['type'] }, original)
    expect(original).toEqual(answer())
  })
})

describe('a selection on a table', () => {
  const table = () => ({
    items: [
      { index: 0, city: 'Jena', people: 110000 },
      { index: 1, city: 'Weimar', people: 65000 },
      { index: 2, city: 'Erfurt', people: 214000 },
    ],
    headers: ['index', 'city', 'people'],
    rows: [
      [0, 'Jena', 110000],
      [1, 'Weimar', 65000],
      [2, 'Erfurt', 214000],
    ],
  })

  it('keeps the rows its filters hold for, and their rows match their items', () => {
    const kept = applySelection(table(), { filters: [{ field: 'people', operator: 'GREATER_THAN', value: '100000' }] }, 'DataTable') as any
    expect(kept.items.map((i: any) => i.city)).toEqual(['Jena', 'Erfurt'])
    expect(kept.rows).toEqual([
      [0, 'Jena', 110000],
      [2, 'Erfurt', 214000],
    ])
  })

  it('keeps only the columns it names, in the order the table had them', () => {
    const kept = applySelection(table(), { fields: ['people', 'city'] }, 'DataTable') as any
    expect(kept.headers).toEqual(['city', 'people'])
    expect(kept.rows[0]).toEqual(['Jena', 110000])
    expect(kept.items[0]).toEqual({ city: 'Jena', people: 110000 })
  })

  it('ignores a path - a table has none', () => {
    const kept = applySelection(table(), { path: 'items.0', pick: 'LAST' }, 'DataTable') as any
    expect(kept.items.map((i: any) => i.city)).toEqual(['Erfurt'])
  })
})

describe('a selection on features', () => {
  it('keeps a collection a collection', () => {
    const collection = {
      type: 'FeatureCollection',
      features: [
        { type: 'Feature', properties: { kind: 'stop' }, geometry: { type: 'Point', coordinates: [11, 50] } },
        { type: 'Feature', properties: { kind: 'line' }, geometry: { type: 'Point', coordinates: [12, 51] } },
      ],
    }
    const kept = applySelection(collection, { filters: [{ field: 'properties.kind', operator: 'EQUALS', value: 'stop' }] }, 'geojson') as any
    expect(kept.type).toBe('FeatureCollection')
    expect(kept.features).toHaveLength(1)
    expect(kept.features[0].geometry.coordinates).toEqual([11, 50])
  })
})

it('leaves shapes without elements alone', () => {
  const cube = { cells: [[1]] }
  expect(applySelection(cube, { pick: 'FIRST' }, 'PivotTable')).toBe(cube)
})

it('says when a selection selects everything', () => {
  expect(selectsEverything(null)).toBe(true)
  expect(selectsEverything({ pick: 'ALL' })).toBe(true)
  expect(selectsEverything({ path: 'a' })).toBe(false)
  expect(selectsEverything({ pick: 'FIRST' })).toBe(false)
})
