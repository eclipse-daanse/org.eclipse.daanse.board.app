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
 * The field names a chart's form suggests (#1285).
 *
 * The names of the data the chart draws, and the fields its own steps add -
 * a fold's key and value, a calculated field - so a field computed in the
 * chart is offered beside those that came from the source. Until board
 * datasources feed the chart (#1286) a widget without a source draws the
 * sample, and its columns are suggested.
 */

import { SAMPLE_VALUES } from './sample'

/** The features that name a field of the data. */
const FIELD_FEATURES = new Set(['field', 'fields', 'row', 'column'])

/** Where the column names of a source come from; a test hands a stand-in. */
export type HeadersOf = (datasourceId: string) => Promise<string[]>

const text = (value: unknown) => String(value ?? '').trim()
const items = (held: unknown): unknown[] => (held && typeof (held as Iterable<unknown>)[Symbol.iterator] === 'function' ? Array.from(held as Iterable<unknown>) : [])

interface Contained {
  eContainer?: () => unknown
}

/** The settings object an edited object sits in, walking up its containers. */
function rootOf(owner: unknown): unknown {
  let at = owner as Contained | undefined
  for (let depth = 0; at && depth < 5; depth++) {
    if ('layers' in (at as object)) return at
    at = at.eContainer?.() as Contained | undefined
  }
  return undefined
}

/** The layer an edited object belongs to, if it belongs to one. */
function layerOf(owner: unknown): unknown {
  let at = owner as Contained | undefined
  for (let depth = 0; at && depth < 3; depth++) {
    if ('encodings' in (at as object) && 'transforms' in (at as object)) return at
    at = at.eContainer?.() as Contained | undefined
  }
  return undefined
}

/** The fields the steps of these layers add to the data. */
function derivedFields(layers: unknown[]): string[] {
  const fields: string[] = []
  for (const layer of layers) {
    for (const step of items((layer as { transforms?: unknown }).transforms)) {
      const t = step as { kind?: string; as?: string; keyAs?: string; valueAs?: string }
      if (t.kind === 'fold') fields.push(text(t.keyAs) || 'key', text(t.valueAs) || 'value')
      if (t.kind === 'calculate' && text(t.as)) fields.push(text(t.as))
    }
  }
  return fields
}

/**
 * The fields to suggest for a feature of an object in a chart's settings;
 * nothing for a feature that names no field.
 */
export async function suggestFields(
  owner: unknown,
  feature: string,
  datasourceId: string | undefined,
  headersOf: HeadersOf,
): Promise<string[]> {
  if (!FIELD_FEATURES.has(feature)) return []
  let source: string[] = []
  if (datasourceId) {
    try {
      source = await headersOf(datasourceId)
    } catch {
      source = []
    }
  } else {
    source = Object.keys(SAMPLE_VALUES[0] ?? {})
  }
  /* A step of a layer adds to that layer; the facet and the selections see all of them. */
  const layer = layerOf(owner)
  const layers = layer ? [layer] : items((rootOf(owner) as { layers?: unknown } | undefined)?.layers)
  return [...new Set([...source, ...derivedFields(layers)].map(text).filter(Boolean))]
}

/** The column names of a DataTable answer: its headers, or the keys of its rows. */
export function headersOfAnswer(answer: unknown): string[] {
  const table = answer as { headers?: unknown; items?: unknown } | null
  if (Array.isArray(table?.headers) && table.headers.length) return table.headers.map(String)
  const first = Array.isArray(table?.items) ? table.items[0] : undefined
  return first && typeof first === 'object' ? Object.keys(first) : []
}
