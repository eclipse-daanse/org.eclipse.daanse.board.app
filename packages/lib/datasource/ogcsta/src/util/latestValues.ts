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
 * The latest values view (#1264): one row per thing, a column per datastream
 * of it. The view is described by OGCSTALatestValues in the model; a board
 * stores it as plain JSON, so it is read here by its feature names, and a
 * list may be an array or an EList - both are iterable.
 */

import type { OGCSTALatestValues } from '../gen/OGCSTALatestValues'
import type { OGCSTALatestValueColumn } from '../gen/OGCSTALatestValueColumn'
import type { OGCSTAValueMapping } from '../gen/OGCSTAValueMapping'

/** A modelled object as a stored board holds it: its features, lists as anything iterable. */
type Stored<T> = {
  [K in keyof T]?: T[K] extends string | number | boolean | undefined ? T[K] : Iterable<any> | T[K]
}

export type LatestValuesView = Stored<Pick<OGCSTALatestValues, 'thingNames' | 'nameColumn' | 'idColumn' | 'columns'>>
export type LatestValueColumn = Stored<Pick<OGCSTALatestValueColumn, 'suffix' | 'label' | 'part' | 'mappings'>>
export type ValueMapping = Stored<Pick<OGCSTAValueMapping, 'code' | 'label' | 'color'>>

/** The latest observation of one datastream, as far as the view reads it. */
export interface LatestObservation {
  result?: unknown
  phenomenonTime?: string
}

/** The answer of a source for a table, with the colour of each shown value. */
export interface LatestValuesTable {
  items: Record<string, unknown>[]
  headers: string[]
  rows: unknown[][]
  /** Column header -> shown value -> CSS colour. */
  colors: Record<string, Record<string, string>>
}

const listOf = <T>(held: unknown): T[] =>
  held && typeof (held as any)[Symbol.iterator] === 'function' && typeof held !== 'string'
    ? Array.from(held as Iterable<T>)
    : []

const literal = (s: string) => `'${s.replace(/'/g, "''")}'`

/**
 * One name pattern as an OData filter on `/Things`, read as the map reads a
 * thing rule on the name: `x*` starts with, `*x` ends with, `*x*` contains,
 * no star is equality. Null for a pattern the server cannot express.
 */
function namePatternFilter(pattern: string): string | null {
  const lead = pattern.startsWith('*')
  const trail = pattern.length > 1 && pattern.endsWith('*')
  const core = pattern.slice(lead ? 1 : 0, trail ? -1 : undefined)
  if (!core || core.includes('*')) return null
  if (lead && trail) return `substringof(${literal(core)},name)`
  if (lead) return `endswith(name,${literal(core)})`
  if (trail) return `startswith(name,${literal(core)})`
  return `name eq ${literal(core)}`
}

/**
 * The things of the view as a filter on `/Things`, the patterns joined with
 * `or`. Null when there is no pattern the server can express: the view then
 * has no rows, rather than one per thing of the server.
 */
export function thingFilterOfNames(names: unknown): string | null {
  const parts = [...new Set(listOf<string>(names).map((n) => String(n ?? '').trim()).filter(Boolean))]
    .map(namePatternFilter)
    .filter((p): p is string => p !== null)
  return parts.length ? parts.join(' or ') : null
}

/** The columns of the view that name a datastream. */
export function columnsOf(view: LatestValuesView | undefined): LatestValueColumn[] {
  return listOf<LatestValueColumn>(view?.columns).filter((c) => !!String(c?.suffix ?? '').trim())
}

/** The id of a thing's datastream for a column: the thing id followed by the suffix. */
export const datastreamIdOf = (thingId: string, column: LatestValueColumn) =>
  `${thingId}${String(column.suffix).trim()}`

/** A time as `YYYY-MM-DD HH:mm` in local time; the end of an interval. */
export function formatTime(time: string | undefined): string | undefined {
  if (!time) return undefined
  const end = time.includes('/') ? time.slice(time.indexOf('/') + 1) : time
  const date = new Date(end)
  if (Number.isNaN(date.getTime())) return time
  const two = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${two(date.getMonth() + 1)}-${two(date.getDate())} ${two(date.getHours())}:${two(date.getMinutes())}`
}

/*
 * A modelled column holds the name of the part (PHENOMENON_TIME), a
 * stored board may hold the literal (phenomenonTime).
 */
const showsTime = (column: LatestValueColumn) => ['phenomenonTime', 'PHENOMENON_TIME'].includes(String(column.part ?? ''))

const headerOf = (column: LatestValueColumn) => String(column.label ?? '').trim() || String(column.suffix).trim()

/**
 * The table of the view: a row per thing, ordered by name, and the colour
 * of every shown value that has one. A thing without an observation for a
 * column has no value there.
 */
export function buildLatestValuesTable(
  view: LatestValuesView,
  things: { id: string; name: string }[],
  latest: Map<string, LatestObservation>,
): LatestValuesTable {
  const nameColumn = view.nameColumn === undefined ? 'name' : String(view.nameColumn ?? '').trim()
  const idColumn = String(view.idColumn ?? '').trim()
  const columns = columnsOf(view)

  const headers: string[] = []
  if (nameColumn) headers.push(nameColumn)
  if (idColumn) headers.push(idColumn)
  for (const column of columns) headers.push(headerOf(column))

  const colors: Record<string, Record<string, string>> = {}
  const mappingsOf = new Map<LatestValueColumn, Map<string, ValueMapping>>()
  for (const column of columns) {
    const byCode = new Map<string, ValueMapping>()
    for (const mapping of listOf<ValueMapping>(column.mappings)) {
      if (mapping?.code === undefined || mapping.code === null) continue
      byCode.set(String(mapping.code), mapping)
      const shown = String(mapping.label ?? '').trim() || String(mapping.code)
      const color = String(mapping.color ?? '').trim()
      if (color) (colors[headerOf(column)] ??= {})[shown] = color
    }
    mappingsOf.set(column, byCode)
  }

  const items = [...things]
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((thing) => {
      const item: Record<string, unknown> = {}
      if (nameColumn) item[nameColumn] = thing.name
      if (idColumn) item[idColumn] = thing.id
      for (const column of columns) {
        const observation = latest.get(datastreamIdOf(thing.id, column))
        let value: unknown
        if (showsTime(column)) {
          value = formatTime(observation?.phenomenonTime)
        } else if (observation && observation.result !== undefined) {
          const mapping = mappingsOf.get(column)!.get(String(observation.result))
          value = mapping ? String(mapping.label ?? '').trim() || String(mapping.code) : observation.result
        }
        item[headerOf(column)] = value
      }
      return item
    })

  return {
    items,
    headers,
    rows: items.map((item) => headers.map((header) => item[header])),
    colors,
  }
}
