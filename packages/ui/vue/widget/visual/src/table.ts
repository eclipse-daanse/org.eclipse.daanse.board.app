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

/**
 * The table every kind is drawn from, and what its columns are.
 *
 * Sources answer a DataTable as headers with either rows (arrays, in the
 * order of the headers) or items (objects keyed by header) - XMLA gives
 * both, a CSV both, a REST source sometimes only items. Taken here once,
 * so nothing further on has to ask which.
 */

export interface Table {
  headers: string[]
  rows: unknown[][]
  /**
   * A row's levels by its caption, where the source said which members the
   * caption stands for. XMLA joins a tuple's captions with ' - ', and a
   * caption may hold ' - ' itself - $30K - $50K - so only the members say
   * where one level ends and the next begins.
   */
  rowLevels?: Map<string, string[]>
  /** The same for a column, by its header. */
  columnLevels?: Map<string, string[]>
}

export function asTable(data: unknown): Table | null {
  if (!data || typeof data !== 'object') return null
  const held = data as { headers?: unknown; rows?: unknown; items?: unknown; rowProperties?: unknown; columnProperties?: unknown }
  const headers = Array.isArray(held.headers) ? held.headers.map((each) => String(each ?? '')) : []
  if (!headers.length) return null
  let rows: unknown[][]
  if (Array.isArray(held.rows) && held.rows.every(Array.isArray)) {
    rows = held.rows as unknown[][]
  } else if (Array.isArray(held.items)) {
    rows = (held.items as Record<string, unknown>[]).map((item) => headers.map((header) => item?.[header]))
  } else {
    return null
  }
  const table: Table = { headers, rows }
  const rowLevels = levelsOf(held.rowProperties)
  const columnLevels = levelsOf(held.columnProperties)
  if (rowLevels) table.rowLevels = rowLevels
  if (columnLevels) table.columnLevels = columnLevels
  return table
}

interface Member {
  Caption: string
  UName?: string
}

const isMember = (value: unknown): value is Member =>
  !!value && typeof value === 'object' && typeof (value as { Caption?: unknown }).Caption === 'string'

/** A member's place in its hierarchy, from its unique name: [Time].[1997].[Q1] is 1997 › Q1. */
function memberPath(uniqueName: string): string {
  const parts = (uniqueName.match(/\[(?:[^\]]|\]\])*\]/g) ?? [uniqueName]).map((part) => part.replace(/^\[|\]$/g, '').replace(/\]\]/g, ']'))
  return parts.length > 1 ? parts.slice(1).join(' › ') : parts[0]
}

/**
 * The levels of each caption, from the members of its tuple: one level per
 * member. A caption that stands for two members at the same place in the
 * tuple - Drink's Dairy and Food's - is spelt out as its path, as the XMLA
 * source does in the caption itself, or the two would be one.
 */
function levelsOf(properties: unknown): Map<string, string[]> | undefined {
  if (!properties || typeof properties !== 'object') return undefined
  const tuples = new Map<string, Member[]>()
  for (const [caption, held] of Object.entries(properties as Record<string, unknown>)) {
    const members = Array.isArray(held) ? held : [held]
    if (members.length && members.every(isMember)) tuples.set(caption, members)
  }
  if (!tuples.size) return undefined
  const meanings = new Map<string, Set<string>>()
  for (const members of tuples.values()) {
    members.forEach((member, at) => {
      const key = `${at}\u0000${member.Caption}`
      const names = meanings.get(key) ?? meanings.set(key, new Set()).get(key)!
      names.add(member.UName ?? member.Caption)
    })
  }
  const levels = new Map<string, string[]>()
  for (const [caption, members] of tuples) {
    levels.set(
      caption,
      members.map((member, at) =>
        (meanings.get(`${at}\u0000${member.Caption}`)?.size ?? 0) > 1 && member.UName ? memberPath(member.UName) : member.Caption.trim(),
      ),
    )
  }
  return levels
}

/**
 * A cell as a number, or null where it holds none.
 *
 * Number() rather than parseFloat: "1997 - Q1" is a label, not 1997. XMLA
 * hands values over as strings as often as numbers.
 */
export function toNumber(value: unknown): number | null {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null
  if (typeof value !== 'string') return null
  const text = value.trim()
  if (!text) return null
  const parsed = Number(text)
  return Number.isFinite(parsed) ? parsed : null
}

const isEmpty = (value: unknown) => value === null || value === undefined || (typeof value === 'string' && value.trim() === '')

export interface Columns {
  /** The columns a row is named by, from the left. */
  labels: number[]
  /** The columns of numbers that are not labels, from the left. */
  numbers: number[]
  /** Every column of numbers, labels or not - what points are read from. */
  numeric: number[]
}

/**
 * Which columns name a row and which hold its numbers.
 *
 * A column is one of numbers when every cell in it that holds anything
 * holds a number. The first column names the rows even when it is all
 * numbers - years, house numbers - as long as there is a column of numbers
 * after it; only a table of numbers and nothing else, which is what points
 * in space are read from, has no labels.
 */
export function columnsOf(table: Table): Columns {
  // A column with nothing in it counts as numbers: an empty cell of a
  // cube is a value nobody has, not a name.
  const numeric = table.headers.map((_, column) =>
    table.rows.every((row) => isEmpty(row[column]) || toNumber(row[column]) !== null),
  )
  const labels: number[] = []
  const numbers: number[] = []
  numeric.forEach((isNumber, column) => (isNumber ? numbers : labels).push(column))
  const all = [...numbers]
  if (!labels.length && numbers.length > 1) labels.push(numbers.shift()!)
  return { labels, numbers, numeric: all }
}

/** A column by its header, the way the settings name it - trimmed, case aside. */
export function columnNamed(table: Table, name: string | undefined): number | undefined {
  const wanted = (name ?? '').trim().toLowerCase()
  if (!wanted) return undefined
  const found = table.headers.findIndex((header) => header.trim().toLowerCase() === wanted)
  return found >= 0 ? found : undefined
}

/** What a row is called: its label columns, joined. */
export function rowLabel(row: unknown[], labels: number[], separator: string): string {
  return labels
    .map((column) => row[column])
    .filter((cell) => !isEmpty(cell))
    .map((cell) => String(cell).trim())
    .join(separator)
}
