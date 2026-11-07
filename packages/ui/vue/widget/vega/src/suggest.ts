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
 * chart is offered beside those that came from the source. The source is
 * the one of the dataset the edited part draws (#1286): a layer's dataset,
 * a dataset entry's own source, else the widget's. A widget without any
 * draws the sample, and its columns are suggested.
 *
 * Besides fields: the names of the datasets for a layer, and the data
 * sources of the board for a dataset entry.
 */

import './referencedPackages'
import { DEFAULT_DATASET } from './recipe'
import { SAMPLE_VALUES } from './sample'

/** The features that name a field of the data. */
const FIELD_FEATURES = new Set(['field', 'fields', 'row', 'column'])

/** What the board knows; a test hands a stand-in. */
export interface BoardSources {
  /** The column names of a source. */
  headersOf: (datasourceId: string) => Promise<string[]>
  /** The ids of the board's data sources. */
  datasourceIds?: () => string[]
}

const text = (value: unknown) => String(value ?? '').trim()
const items = (held: unknown): unknown[] => (held && typeof (held as Iterable<unknown>)[Symbol.iterator] === 'function' ? Array.from(held as Iterable<unknown>) : [])

interface Contained {
  eContainer?: () => unknown
}

/** The nearest of an edited object and its containers that holds this feature. */
function holding(owner: unknown, feature: string, levels = 5): Record<string, unknown> | undefined {
  let at = owner as Contained | undefined
  for (let depth = 0; at && depth < levels; depth++) {
    if (typeof at === 'object' && feature in (at as object)) return at as Record<string, unknown>
    at = at.eContainer?.() as Contained | undefined
  }
  return undefined
}

const rootOf = (owner: unknown) => holding(owner, 'layers')

/** The source whose columns an edited object names, or none for the sample. */
function sourceOf(owner: unknown, widgetSource: string | undefined): string | undefined {
  const own = holding(owner, 'columnTypes', 2)
  const bindings = items(rootOf(owner)?.datasets) as Array<{ name?: string; datasourceId?: string }>
  if (own) return text(own.datasourceId) || widgetSource
  const layer = layerOf(owner) as { dataset?: string } | undefined
  const name = text(layer?.dataset) || DEFAULT_DATASET
  const binding = bindings.find((each) => (text(each.name) || DEFAULT_DATASET) === name)
  return text(binding?.datasourceId) || widgetSource
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
  widgetSource: string | undefined,
  board: BoardSources,
): Promise<string[]> {
  if (feature === 'datasourceId') return board.datasourceIds?.() ?? []
  if (feature === 'dataset') {
    const names = items(rootOf(owner)?.datasets).map((each) => text((each as { name?: string }).name) || DEFAULT_DATASET)
    return [...new Set([DEFAULT_DATASET, ...names])]
  }
  if (!FIELD_FEATURES.has(feature)) return []
  const datasourceId = sourceOf(owner, widgetSource)
  let source: string[] = []
  if (datasourceId) {
    try {
      source = await board.headersOf(datasourceId)
    } catch {
      source = []
    }
  } else {
    source = Object.keys(SAMPLE_VALUES[0] ?? {})
  }
  /* A step of a layer adds to that layer; the facet and the selections see all of them. */
  const layer = layerOf(owner)
  const layers = layer ? [layer] : items(rootOf(owner)?.layers)
  return [...new Set([...source, ...derivedFields(layers)].map(text).filter(Boolean))]
}

/** The column names of a DataTable answer: its headers, or the keys of its rows. */
export function headersOfAnswer(answer: unknown): string[] {
  const table = answer as { headers?: unknown; items?: unknown } | null
  if (Array.isArray(table?.headers) && table.headers.length) return table.headers.map(String)
  const first = Array.isArray(table?.items) ? table.items[0] : undefined
  return first && typeof first === 'object' ? Object.keys(first) : []
}
