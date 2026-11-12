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
 * #1295: data read by its column types, and transforms run on its rows -
 * shared by the WFS data source, the Vega chart and the 3D map.
 */
import { describe, it, expect } from 'vitest'
import { applyTransforms, columnTypesOf, extracted, fieldsAddedBy, typed } from '../src/data'

const trees = [
  { Baumart: 'Tilia cordata, Winterlinde', 'Baumhöhe': '14', Kronendurchmesser: '9', gepflanzt: '1976-01-01' },
  { Baumart: 'Acer platanoides, Spitzahorn', 'Baumhöhe': '', Kronendurchmesser: '6', gepflanzt: 'unbekannt' },
  { Baumart: 'Quercus robur', 'Baumhöhe': '22.5', Kronendurchmesser: 'x', gepflanzt: '' },
]

describe('column types', () => {
  it('read numbers, dates and flags; a value that says nothing is null', () => {
    const types = [
      { column: 'Baumhöhe', type: 'number', unit: 'm' },
      { column: 'Kronendurchmesser' },
      { column: 'gepflanzt', type: 'date' },
    ]
    expect(columnTypesOf(types)).toEqual({ 'Baumhöhe': 'number', Kronendurchmesser: 'number', gepflanzt: 'date' })
    const rows = typed(trees, types)
    expect(rows.map((r) => r['Baumhöhe'])).toEqual([14, null, 22.5])
    expect(rows.map((r) => r.Kronendurchmesser)).toEqual([9, 6, null])
    expect((rows[0].gepflanzt as Date).getFullYear()).toBe(1976)
    expect(rows[1].gepflanzt).toBeNull()
    expect(rows[0].Baumart).toBe('Tilia cordata, Winterlinde')
    expect(typed(trees, [])).toBe(trees)
  })
})

describe('transforms', () => {
  it('extract a part of a field by a pattern - the genus as the first word', () => {
    const rows = applyTransforms(trees, [{ kind: 'extract', field: 'Baumart', pattern: '^(\\S+)', as: 'Gattung' }])
    expect(rows.map((r) => r.Gattung)).toEqual(['Tilia', 'Acer', 'Quercus'])
    expect(extracted('no match', '^(\\d+)')).toBeUndefined()
    expect(extracted('x', '([')).toBeUndefined()
  })

  it('filter rows in their order, after an extract', () => {
    const rows = applyTransforms(typed(trees, [{ column: 'Baumhöhe' }]), [
      { kind: 'extract', field: 'Baumart', pattern: '^(\\S+)', as: 'Gattung' },
      { kind: 'filter', field: 'Gattung', op: 'oneOf', value: 'Tilia, Quercus' },
      { kind: 'filter', field: 'Baumhöhe', op: 'gte', value: '15' },
    ])
    expect(rows.map((r) => r.Gattung)).toEqual(['Quercus'])
    expect(applyTransforms(trees, [{ kind: 'filter', field: 'Baumhöhe', op: 'valid' }])).toHaveLength(3)
    expect(applyTransforms(trees, [{ kind: 'fold', fields: ['a'] } as any])).toBe(trees)
  })

  it('name the fields they add', () => {
    expect(fieldsAddedBy([{ kind: 'extract', as: 'Gattung' }, { kind: 'calculate', as: 'x' }, { kind: 'filter', as: 'y' }])).toEqual(['Gattung', 'x'])
  })
})
