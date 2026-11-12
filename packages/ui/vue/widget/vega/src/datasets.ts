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
 * The rows a dataset of the chart draws, read from what a board data
 * source answers (#1286).
 *
 * Apart from the component and free of Vega: which part of an answer is
 * the rows, and what its values are read as, is decided here and tested
 * without a source.
 */

import './referencedPackages'
import type { DatasetBinding } from './gen/DatasetBinding'
import type { DatasetShape } from './gen/DatasetShape'
import { DEFAULT_DATASET } from './recipe'
import type { Row } from './sample'

const text = (value: unknown) => String(value ?? '').trim()
const items = <T>(held: Iterable<T> | null | undefined): T[] => (held ? Array.from(held) : [])

/** What a widget passes to getData for a shape. */
export function requestOf(shape: DatasetShape | undefined): string {
  if (shape === 'object') return 'object'
  if (shape === 'geojson') return 'geojson'
  return 'DataTable'
}

/** The value at a dotted path, or the answer itself for an empty path. */
function at(answer: unknown, path: string): unknown {
  let held = answer
  for (const step of path.split('.').map((each) => each.trim()).filter(Boolean)) {
    if (!held || typeof held !== 'object') return undefined
    held = (held as Record<string, unknown>)[step]
  }
  return held
}

const rowsIn = (value: unknown): Row[] =>
  Array.isArray(value) ? value.filter((each): each is Row => !!each && typeof each === 'object') : []

/** The rows in an answer of a data source, for the shape it was asked in. */
export function rowsOf(answer: unknown, shape: DatasetShape | undefined, path?: string): Row[] {
  if (shape === 'object') return rowsIn(at(answer, text(path)))
  if (shape === 'geojson') {
    const held = answer as { features?: unknown } | null
    return rowsIn(Array.isArray(answer) ? answer : held?.features)
  }
  /* A DataTable answers its rows as items; a source that answers a plain list is read as it is. */
  if (Array.isArray(answer)) return rowsIn(answer)
  return rowsIn((answer as { items?: unknown } | null)?.items)
}

/** How each named column is read. */
export type ColumnTypes = Record<string, 'string' | 'number' | 'date' | 'boolean'>

export function columnTypesOf(binding: DatasetBinding | undefined): ColumnTypes {
  const types: ColumnTypes = {}
  for (const each of items(binding?.columnTypes)) {
    const column = text(each.column)
    if (column) types[column] = each.type ?? 'number'
  }
  return types
}

function read(value: unknown, type: ColumnTypes[string]): unknown {
  if (value === null || value === undefined || value === '') return null
  switch (type) {
    case 'number': {
      const number = typeof value === 'number' ? value : Number(String(value).trim())
      return Number.isFinite(number) ? number : null
    }
    case 'date': {
      const date = value instanceof Date ? value : new Date(typeof value === 'number' ? value : String(value))
      return Number.isNaN(date.getTime()) ? null : date
    }
    case 'boolean':
      return value === true || ['true', '1', 'yes'].includes(String(value).trim().toLowerCase())
    default:
      return String(value)
  }
}

/** The rows with the named columns read as their types; the others as they came. */
export function typed(rows: Row[], types: ColumnTypes): Row[] {
  const columns = Object.entries(types)
  if (!columns.length) return rows
  return rows.map((row) => {
    const next: Row = { ...row }
    for (const [column, type] of columns) if (column in next) next[column] = read(next[column], type)
    return next
  })
}

/** A dataset the chart reads, as the widget loads it. */
export interface DatasetSource {
  name: string
  /** Empty: the data source of the widget. */
  datasourceId: string
  shape: DatasetShape
  path: string
  types: ColumnTypes
}

/**
 * The datasets of the chart. The widget's own source is always one, named
 * table, unless an entry of that name reads a source of its own; an entry
 * named table without a source says how to read the widget's.
 */
export function datasetSources(bindings: Iterable<DatasetBinding> | null | undefined): DatasetSource[] {
  const byName = new Map<string, DatasetSource>()
  byName.set(DEFAULT_DATASET, { name: DEFAULT_DATASET, datasourceId: '', shape: 'table', path: '', types: {} })
  for (const binding of items(bindings)) {
    const name = text(binding.name) || DEFAULT_DATASET
    byName.set(name, {
      name,
      datasourceId: text(binding.datasourceId),
      shape: binding.shape ?? 'table',
      path: text(binding.path),
      types: columnTypesOf(binding),
    })
  }
  return [...byName.values()]
}
