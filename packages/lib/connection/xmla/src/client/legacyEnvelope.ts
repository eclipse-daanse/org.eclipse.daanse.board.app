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

import { EventKind, XmlCursor } from '@eclipse-daanse/emf-xml'

/*
 * The object shape the former SOAP client produced from a response, kept
 * because the pivot table, the filters and the drilldown all walk it:
 * `Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple`.
 *
 * - an element becomes a key under its local name
 * - an element seen twice under the same parent becomes an array
 * - attributes go to `__attrs`
 * - an element holding only text becomes that string, attributes dropped
 */

type LegacyNode = Record<string, any>

interface Frame {
  name: string
  value: LegacyNode | string
  attrs: Record<string, string>
}

export function toLegacyEnvelope(xml: string): any {
  const cursor = XmlCursor.parse(xml)
  const root: Frame = { name: '', value: {}, attrs: {} }
  const stack: Frame[] = [root]

  for (let kind = cursor.next(); kind !== null; kind = cursor.next()) {
    if (kind === EventKind.START) {
      const attrs: Record<string, string> = {}
      for (const attribute of cursor.attributes) {
        const name = attribute.prefix
          ? `${attribute.prefix}:${attribute.localName}`
          : attribute.localName
        attrs[name] = attribute.value
      }
      stack.push({ name: cursor.localName, value: {}, attrs })
    } else if (kind === EventKind.END) {
      const frame = stack.pop()!
      const value = frame.value
      if (typeof value === 'object') value.__attrs = frame.attrs

      const parent = stack[stack.length - 1].value
      // Mixed content does not occur in XMLA; text wins, as it did before.
      if (typeof parent === 'string') continue

      if (frame.name in parent) {
        const existing = parent[frame.name]
        if (Array.isArray(existing)) existing.push(value)
        else parent[frame.name] = [existing, value]
      } else {
        parent[frame.name] = value
      }
    } else if (kind === EventKind.TEXT) {
      const text = cursor.text
      if (!text.trim().length) continue
      const top = stack[stack.length - 1]
      top.value = typeof top.value === 'string' ? top.value + text : text
    }
  }

  return (root.value as LegacyNode).Envelope
}

/**
 * A discover row with its values as the text they had on the wire.
 *
 * The model-driven reader types the columns - LEVEL_NUMBER arrives as a
 * number - while the consumers compare against strings (`=== '0'`).
 */
export function toLegacyRecord(value: unknown): any {
  if (value === null || value === undefined) return value
  /*
   * An empty element, which the former client read as an empty object.
   * Kept: the metadata tree builds item ids from such columns
   * (`Measure(..._${MEASURE_DISPLAY_FOLDER})`) and boards store those ids.
   */
  if (value === '') return {}
  if (Array.isArray(value)) return value.map(toLegacyRecord)
  if (value instanceof Date) return value.toISOString()
  if (typeof value === 'object') {
    const record: Record<string, unknown> = {}
    for (const [key, entry] of Object.entries(value)) {
      record[key] = toLegacyRecord(entry)
    }
    return record
  }
  return String(value)
}
