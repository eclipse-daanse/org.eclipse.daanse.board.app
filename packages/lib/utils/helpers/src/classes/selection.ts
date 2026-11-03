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

import { getValueByPath } from './helpers'

/**
 * The part of a source's answer one widget takes (#1216).
 *
 * The same fields as the modelled DataSelection in lib.model.workspace, as
 * plain values: this package sits below the model and must not depend on
 * it, and a snapshot is what the caller hands over anyway - lists as
 * arrays, enum literals by name.
 */
export interface SelectionSpec {
  path?: string | null
  filters?: readonly FilterSpec[] | null
  /** ALL, FIRST, LAST or INDEX - the names of the modelled SelectionPick. */
  pick?: string | null
  index?: number | null
  fields?: readonly string[] | null
}

export interface FilterSpec {
  field?: string | null
  /** EQUALS, NOT_EQUALS, CONTAINS, GREATER_THAN, LESS_THAN or EXISTS. */
  operator?: string | null
  value?: string | null
}

/** Whether a selection would leave every answer as it is. */
export function selectsEverything(selection: SelectionSpec | null | undefined): boolean {
  if (!selection) return true
  return (
    !selection.path &&
    !(selection.filters?.length) &&
    (!selection.pick || selection.pick === 'ALL') &&
    !(selection.fields?.length)
  )
}

/**
 * The part of an answer a selection takes.
 *
 * - `object`: the value at `path`; on an array, the elements every filter
 *   holds for, then the ones `pick` names, each cut down to `fields`; on an
 *   object, that object cut down to `fields`.
 * - `DataTable`: filters and pick act on the rows, fields on the columns;
 *   a table has no path into it.
 * - `geojson`: filters and pick act on the features of a collection, which
 *   stays a collection - a map cannot draw a bare list. Field paths start at
 *   the feature (`properties.type`); fields are not cut, a feature without
 *   its geometry draws nothing.
 * - Any other shape is returned as it came: a cube or a series has no
 *   elements a filter could say anything about.
 *
 * Without a selection, or with one that selects everything, the answer
 * itself comes back - the same object, so nothing downstream sees a change.
 */
export function applySelection(answer: unknown, selection: SelectionSpec | null | undefined, shape: string): unknown {
  if (selectsEverything(selection) || answer === null || answer === undefined) return answer
  const spec = selection as SelectionSpec

  switch (shape) {
    case 'object':
      return selectFromValue(getValueByPath(answer, spec.path || null), spec)
    case 'DataTable':
      return selectFromTable(answer, spec)
    case 'geojson':
      return selectFromFeatures(answer, spec)
    default:
      return answer
  }
}

/* ------------------------------------------------------------ object */

function selectFromValue(value: unknown, spec: SelectionSpec): unknown {
  if (Array.isArray(value)) {
    return picked(value.filter((element) => holds(element, spec.filters)), spec).map((element) =>
      cut(element, spec.fields),
    )
  }
  return cut(value, spec.fields)
}

/* --------------------------------------------------------- DataTable */

interface Table {
  items?: Record<string, unknown>[]
  headers?: string[]
  rows?: unknown[][]
}

function selectFromTable(answer: unknown, spec: SelectionSpec): unknown {
  const table = answer as Table
  if (!table || !Array.isArray(table.items)) return answer

  const items = picked(table.items.filter((item) => holds(item, spec.filters)), spec)
  const fields = spec.fields?.length ? spec.fields : null
  const headers = (table.headers ?? []).filter((header) => !fields || fields.includes(header))
  return {
    ...table,
    items: fields ? items.map((item) => cut(item, fields)) : items,
    headers,
    rows: items.map((item) => headers.map((header) => item[header])),
  }
}

/* ----------------------------------------------------------- geojson */

function selectFromFeatures(answer: unknown, spec: SelectionSpec): unknown {
  const collection = answer as { features?: unknown[] }
  if (!collection || !Array.isArray(collection.features)) return answer
  return {
    ...collection,
    features: picked(collection.features.filter((feature) => holds(feature, spec.filters)), spec),
  }
}

/* ----------------------------------------------------------- the parts */

function picked<T>(elements: T[], spec: SelectionSpec): T[] {
  switch (spec.pick) {
    case 'FIRST':
      return elements.slice(0, 1)
    case 'LAST':
      return elements.slice(-1)
    case 'INDEX': {
      const at = spec.index ?? 0
      return at >= 0 && at < elements.length ? [elements[at]] : []
    }
    default:
      return elements
  }
}

/** Every filter has to hold; one without a field compares the element itself. */
function holds(element: unknown, filters: readonly FilterSpec[] | null | undefined): boolean {
  if (!filters?.length) return true
  return filters.every((filter) => compares(getValueByPath(element, filter.field || null), filter))
}

function compares(actual: unknown, filter: FilterSpec): boolean {
  const expected = filter.value ?? ''
  switch (filter.operator) {
    case 'EXISTS':
      return actual !== undefined && actual !== null
    case 'NOT_EQUALS':
      return !equal(actual, expected)
    case 'CONTAINS':
      if (Array.isArray(actual)) return actual.some((entry) => equal(entry, expected))
      return text(actual).toLowerCase().includes(expected.toLowerCase())
    case 'GREATER_THAN':
      return ordered(actual, expected) > 0
    case 'LESS_THAN':
      return ordered(actual, expected) < 0
    case 'EQUALS':
    default:
      return equal(actual, expected)
  }
}

/*
 * The value of a filter is text, as a person typed it; the value in the
 * answer may be a number. Compared as numbers where both read as one, so
 * "9" is less than "10", and as text everywhere else.
 */
function asNumber(value: unknown): number | null {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null
  if (typeof value !== 'string' || value.trim() === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function text(value: unknown): string {
  if (value === undefined || value === null) return ''
  return typeof value === 'object' ? JSON.stringify(value) : String(value)
}

function equal(actual: unknown, expected: string): boolean {
  const a = asNumber(actual)
  const b = asNumber(expected)
  if (a !== null && b !== null) return a === b
  return text(actual) === expected
}

/** Below zero, zero, above zero - and NaN where there is nothing to compare. */
function ordered(actual: unknown, expected: string): number {
  if (actual === undefined || actual === null) return NaN
  const a = asNumber(actual)
  const b = asNumber(expected)
  if (a !== null && b !== null) return a - b
  return text(actual).localeCompare(expected)
}

/** An object cut down to the fields listed; anything else as it is. */
function cut<T>(element: T, fields: readonly string[] | null | undefined): T {
  if (!fields?.length || !element || typeof element !== 'object' || Array.isArray(element)) return element
  const kept: Record<string, unknown> = {}
  for (const field of fields) {
    const value = getValueByPath(element, field)
    if (value !== undefined) kept[field] = value
  }
  return kept as T
}
