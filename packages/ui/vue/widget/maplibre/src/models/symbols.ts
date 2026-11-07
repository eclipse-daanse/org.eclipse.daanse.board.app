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
 * The instances of a symbol layer (#1296): one per point of its data source
 * that passes the layer's transforms, and those placed by hand - each with
 * the model file, height, width, colour and part colours its encodings give
 * for its fields. Nothing here knows about trees.
 */

import { applyTransforms } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { colorOf, lengthOf, modelOf, type ColorEncodingLike, type FieldEncodingLike, type ModelEncodingLike, type PartEncodingLike } from './encodings'

/** What of a layer decides its instances - the model's names, lists as anything iterable. */
export interface SymbolLayerLike {
  id?: string
  url?: string
  transforms?: unknown
  size?: { height?: FieldEncodingLike | null; width?: FieldEncodingLike | null } | null
  color?: ColorEncodingLike | null
  modelBy?: ModelEncodingLike | null
  parts?: Iterable<PartEncodingLike> | null
  instances?: Iterable<{ id?: string; lon?: number; lat?: number; scale?: number; rotation?: number }> | null
}

/** An instance as the custom layer draws it. */
export interface SymbolInstance {
  id: string
  lon: number
  lat: number
  scale?: number
  rotation?: number
  height?: number
  width?: number
  color?: string
  /** The colour of each part of the layer, by its index; undefined: the file's. */
  partColors?: (string | undefined)[]
}

const listOf = <T>(held: Iterable<T> | null | undefined): T[] => (held ? Array.from(held) : [])
const text = (value: unknown) => String(value ?? '').trim()

/** The place of a point feature: a Point, or the first point of a MultiPoint. */
function pointOf(geometry: any): [number, number] | null {
  const coordinates = geometry?.type === 'Point' ? geometry.coordinates : geometry?.type === 'MultiPoint' ? geometry.coordinates?.[0] : null
  if (!Array.isArray(coordinates)) return null
  const [lon, lat] = coordinates.map(Number)
  return Number.isFinite(lon) && Number.isFinite(lat) ? [lon, lat] : null
}

/** What the encodings give for one row. */
function encoded(layer: SymbolLayerLike, row: Record<string, unknown>, units: Record<string, string>): Omit<SymbolInstance, 'id' | 'lon' | 'lat'> {
  const out: Omit<SymbolInstance, 'id' | 'lon' | 'lat'> = {}
  const heightField = text(layer.size?.height?.field)
  const widthField = text(layer.size?.width?.field)
  const height = lengthOf(layer.size?.height, row, units[heightField])
  const width = lengthOf(layer.size?.width, row, units[widthField])
  if (height !== undefined) out.height = height
  if (width !== undefined) out.width = width
  const color = colorOf(layer.color, row)
  if (color) out.color = color
  const parts = listOf(layer.parts)
  if (parts.length) out.partColors = parts.map((part) => colorOf(part.color, row))
  return out
}

/**
 * The instances of a layer by model file: the points of its data (after its
 * transforms) and the instances placed by hand. A point without a place, or
 * a row a filter dropped, has none. units are the column units of the data
 * source, by field.
 */
export function symbolsByModel(layer: SymbolLayerLike, collection: unknown, units: Record<string, string> = {}): Map<string, SymbolInstance[]> {
  const out = new Map<string, SymbolInstance[]>()
  const add = (url: string, instance: SymbolInstance) => {
    if (url) out.set(url, [...(out.get(url) ?? []), instance])
  }
  const fallback = text(layer.url)
  for (const placed of listOf(layer.instances)) {
    const lon = Number(placed.lon)
    const lat = Number(placed.lat)
    if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue
    add(fallback, { id: String(placed.id ?? `${lon},${lat}`), lon, lat, scale: placed.scale, rotation: placed.rotation, ...encoded(layer, {}, units) })
  }
  const features = ((collection as { features?: any[] } | undefined)?.features ?? []) as any[]
  const rows = features.map((feature, index) => ({ ...(feature?.properties ?? {}), [FEATURE]: index }))
  for (const row of applyTransforms(rows, layer.transforms)) {
    const index = row[FEATURE] as number
    const feature = features[index]
    const place = pointOf(feature?.geometry)
    if (!place) continue
    add(modelOf(layer.modelBy, row, fallback), { id: String(feature.id ?? `${layer.id}:${index}`), lon: place[0], lat: place[1], ...encoded(layer, row, units) })
  }
  return out
}

/* The index of a row's feature, kept through the transforms. */
const FEATURE = '__feature__'
