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

import { toCsv, type LegacyNode } from './Cellset'

/*
 * An Execute in Format=Tabular - DRILLTHROUGH, a DMV over $SYSTEM - answers
 * with rows, not a cellset: <root><row><COLUMN>value</COLUMN>...</row>.
 */

/** XML names carry what XML does not allow encoded: a space is _x0020_. */
export function decodeXmlName(name: string): string {
  return name.replace(/_x([0-9a-fA-F]{4})_/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
}

/** A column's text as people read it: decoded, underscores as spaces. */
export function columnLabel(name: string): string {
  return decodeXmlName(name).replace(/_/g, ' ')
}

function valueOf(value: LegacyNode): unknown {
  if (value === null || value === undefined) return ''
  if (typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map(valueOf).join(', ')
  // An element holding only attributes: the former client read that as an object.
  const own = Object.keys(value).filter(key => key !== '__attrs')
  if (own.length === 0) return ''
  return value.Value ?? value.text ?? JSON.stringify(value)
}

/** The rows of a tabular answer, each a record keyed by column name. */
export function tabularRows(response: LegacyNode): Record<string, unknown>[] {
  // eMondrian answers a DMV Execute in a DiscoverResponse, as if it had been one.
  const body = response?.Body
  const result = (body?.ExecuteResponse ?? body?.DiscoverResponse)?.return
  const root = Array.isArray(result) ? result[0]?.root : result?.root
  const raw = root?.row
  const rows = raw ? (Array.isArray(raw) ? raw : [raw]) : []
  return rows.map((row: LegacyNode) => {
    const record: Record<string, unknown> = {}
    for (const key of Object.keys(row)) {
      if (key === '__attrs') continue
      record[key] = valueOf(row[key])
    }
    return record
  })
}

/** Every column any row has, in the order they first appear. */
export function columnsOf(rows: Record<string, unknown>[]): string[] {
  const seen = new Set<string>()
  for (const row of rows) for (const key of Object.keys(row)) seen.add(key)
  return [...seen]
}

/** Rows as CSV, objects inside written as JSON - an empty one, an empty element, as nothing. */
export function rowsToCsv(rows: Record<string, unknown>[], columns = columnsOf(rows)): string {
  const cell = (value: unknown) => {
    if (value === null || typeof value !== 'object') return value
    return Object.keys(value).length ? JSON.stringify(value) : ''
  }
  return toCsv([columns.map(columnLabel), ...rows.map(row => columns.map(column => cell(row[column])))])
}

/*
 * Comments out, so a statement is read by what it says rather than by what
 * is written around it. Scanned rather than matched: a pattern for block
 * comments has to allow anything between the delimiters, and on a statement
 * that opens one and never closes it that costs a pass per opening - text a
 * user can type into the editor. An opening with no closing is not a
 * comment and stays, as it did under the pattern.
 */
function withoutComments(mdx: string): string {
  let out = ''
  let at = 0
  /*
   * Once a `/*` has no `*\/` after it, no later one has either, and asking
   * again for each of them is the pass per opening this is here to avoid.
   */
  let blockMayClose = true
  while (at < mdx.length) {
    const opening = mdx.slice(at, at + 2)
    if (opening === '/*' && blockMayClose) {
      const closing = mdx.indexOf('*/', at + 2)
      if (closing === -1) {
        blockMayClose = false
        out += mdx[at]
        at += 1
        continue
      }
      out += ' '
      at = closing + 2
    } else if (opening === '--' || opening === '//') {
      const end = mdx.indexOf('\n', at)
      out += ' '
      at = end === -1 ? mdx.length : end
    } else {
      out += mdx[at]
      at += 1
    }
  }
  return out
}

/** Statements the server answers with rows rather than a cellset. */
export function isTabularStatement(mdx: string): boolean {
  const text = withoutComments(mdx).trim()
  return /^DRILLTHROUGH\b/i.test(text) || /\bFROM\s+\$SYSTEM\b/i.test(text)
}
