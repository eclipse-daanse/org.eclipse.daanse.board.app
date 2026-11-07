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
 * Reading data by its column types and applying transforms to its rows,
 * shared by the readers of the board's data sources (#1295): a data source
 * that knows its columns (a WFS), the Vega chart, the 3D map. The column
 * types and transforms are the model's classes (ColumnType, Transform);
 * these functions take them as a stored board holds them as well - plain
 * objects, lists as arrays or ELists.
 *
 * The Vega chart compiles its transforms to Vega-Lite; the functions here
 * are for readers that run them themselves. They run filter and extract;
 * fold and calculate (a Vega expression) are left to Vega.
 */

/** A row of data: field name to value. */
export type DataRow = Record<string, unknown>

/** What a column type is read as. */
export type ValueType = 'string' | 'number' | 'date' | 'boolean'

/** A column type as far as it is read here - the model's names. */
export interface ColumnTypeLike {
  column?: string
  type?: string
  unit?: string
  label?: string
}

/** A transform as far as it is read here - the model's names. */
export interface TransformLike {
  kind?: string
  field?: string
  op?: string
  value?: string
  as?: string
  pattern?: string
}

const listOf = <T>(held: unknown): T[] =>
  held && typeof (held as Iterable<T>)[Symbol.iterator] === 'function' && typeof held !== 'string' ? Array.from(held as Iterable<T>) : []
const text = (value: unknown) => String(value ?? '').trim()

/** The column types by column name; a type left empty is number, as in the model. */
export function columnTypesOf(types: unknown): Record<string, ValueType> {
  const out: Record<string, ValueType> = {}
  for (const each of listOf<ColumnTypeLike>(types)) {
    const column = text(each.column)
    const type = text(each.type) as ValueType
    if (column) out[column] = ['string', 'number', 'date', 'boolean'].includes(type) ? type : 'number'
  }
  return out
}

/** One value read as a type: a number, a date, a flag or text; null where it says nothing. */
export function readAs(value: unknown, type: ValueType): unknown {
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

/** The rows with the typed columns read as their types; the others as they came. */
export function typed(rows: DataRow[], types: unknown): DataRow[] {
  const columns = Object.entries(columnTypesOf(types))
  if (!columns.length) return rows
  return rows.map((row) => {
    const next: DataRow = { ...row }
    for (const [column, type] of columns) if (column in next) next[column] = readAs(next[column], type)
    return next
  })
}

/** A value as the filter compares it: a number where it is one, else text. */
const scalar = (raw: string): string | number => (raw !== '' && Number.isFinite(Number(raw)) ? Number(raw) : raw)

/** Whether a row passes a filter transform. A filter on a selection (param) passes all: there is none here. */
function passes(row: DataRow, transform: TransformLike): boolean {
  const op = text(transform.op) || 'eq'
  const field = text(transform.field)
  if (op === 'param' || !field) return true
  const value = row[field]
  if (op === 'valid') return value !== null && value !== undefined && !(typeof value === 'number' && Number.isNaN(value))
  const raw = text(transform.value)
  const list = raw.split(',').map((each) => scalar(each.trim())).filter((each) => each !== '')
  const compared = typeof value === 'number' ? value : scalar(String(value ?? ''))
  switch (op) {
    case 'eq':
      return compared === scalar(raw)
    case 'neq':
      return compared !== scalar(raw)
    case 'oneOf':
      return list.includes(compared)
    case 'range':
      return list.length === 2 && Number(compared) >= Number(list[0]) && Number(compared) <= Number(list[1])
    case 'lt':
      return Number(compared) < Number(raw)
    case 'lte':
      return Number(compared) <= Number(raw)
    case 'gt':
      return Number(compared) > Number(raw)
    case 'gte':
      return Number(compared) >= Number(raw)
    default:
      return true
  }
}

/** The match of an extract: the first group of the pattern in the field, or undefined. */
export function extracted(value: unknown, pattern: string): string | undefined {
  if (value === null || value === undefined || !pattern) return undefined
  let expression: RegExp
  try {
    expression = new RegExp(pattern)
  } catch {
    return undefined
  }
  const match = expression.exec(String(value))
  return match ? (match[1] ?? match[0]) : undefined
}

/**
 * The rows after the transforms, in their order: a filter keeps the rows
 * that pass, an extract adds its field where the pattern matches. Fold and
 * calculate are not run here.
 */
export function applyTransforms(rows: DataRow[], transforms: unknown): DataRow[] {
  let out = rows
  for (const transform of listOf<TransformLike>(transforms)) {
    const kind = text(transform.kind) || 'filter'
    if (kind === 'filter') out = out.filter((row) => passes(row, transform))
    else if (kind === 'extract') {
      const field = text(transform.field)
      const as = text(transform.as)
      const pattern = String(transform.pattern ?? '')
      if (!field || !as || !pattern) continue
      out = out.map((row) => {
        const part = extracted(row[field], pattern)
        return part === undefined ? row : { ...row, [as]: part }
      })
    }
  }
  return out
}

/** The fields the transforms add, for the suggestions of a form. */
export function fieldsAddedBy(transforms: unknown): string[] {
  return listOf<TransformLike>(transforms)
    .filter((t) => ['extract', 'calculate'].includes(text(t.kind)) && text(t.as))
    .map((t) => text(t.as))
}
