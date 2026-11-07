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
 * Model instances from data (#1282): one per point of a data source, its
 * model and colour by the first rule its properties match, its height from
 * a property in metres. Plain functions; the widget hands them the answer
 * of the source.
 */

import { matchesNamePattern } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'

/** A rule as far as it is read here - the model's names. */
export interface RuleLike {
  property?: string
  value?: string
  url?: string
  color?: string
}

/** What of a layer decides the instances of its points. */
export interface DataLayerLike {
  id?: string
  url?: string
  heightProperty?: string
  defaultHeight?: number
  widthProperty?: string
  rules?: Iterable<RuleLike> | null
}

/** An instance from a point: where, how tall in metres if said, in which colour if any. */
export interface DataInstance {
  id: string
  lon: number
  lat: number
  height?: number
  width?: number
  color?: string
}

const text = (value: unknown) => String(value ?? '').trim()

/** The first rule a point's properties match, or undefined. */
export function ruleFor(rules: Iterable<RuleLike> | null | undefined, properties: Record<string, unknown>): RuleLike | undefined {
  for (const rule of rules ?? []) {
    const property = text(rule.property)
    if (!property) continue
    const value = properties[property]
    if (value === undefined || value === null) continue
    if (matchesNamePattern(String(value), text(rule.value))) return rule
  }
  return undefined
}

/** The height of a point in metres: its property, else the default; undefined for the layer's scale. */
export function heightFor(layer: DataLayerLike, properties: Record<string, unknown>): number | undefined {
  const property = text(layer.heightProperty)
  const raw = property ? properties[property] : undefined
  const value = typeof raw === 'number' ? raw : Number.parseFloat(String(raw ?? ''))
  if (Number.isFinite(value) && value > 0) return value
  const fallback = Number(layer.defaultHeight ?? 0)
  return Number.isFinite(fallback) && fallback > 0 ? fallback : undefined
}

/** The width of a point in metres from its property, or undefined. */
export function widthFor(layer: DataLayerLike, properties: Record<string, unknown>): number | undefined {
  const property = text(layer.widthProperty)
  const raw = property ? properties[property] : undefined
  const value = typeof raw === 'number' ? raw : Number.parseFloat(String(raw ?? ''))
  return Number.isFinite(value) && value > 0 ? value : undefined
}

/** The place of a point feature: a Point, or the first point of a MultiPoint. */
function pointOf(geometry: any): [number, number] | null {
  const coordinates = geometry?.type === 'Point' ? geometry.coordinates : geometry?.type === 'MultiPoint' ? geometry.coordinates?.[0] : null
  if (!Array.isArray(coordinates)) return null
  const [lon, lat] = coordinates.map(Number)
  return Number.isFinite(lon) && Number.isFinite(lat) ? [lon, lat] : null
}

/**
 * The instances of a layer's points, by model file: the file of the rule
 * that matches, else the layer's. A point without a place is left out.
 */
export function instancesByModel(layer: DataLayerLike, collection: unknown): Map<string, DataInstance[]> {
  const out = new Map<string, DataInstance[]>()
  const features = (collection as { features?: any[] } | undefined)?.features ?? []
  features.forEach((feature, index) => {
    const place = pointOf(feature?.geometry)
    if (!place) return
    const properties = (feature.properties ?? {}) as Record<string, unknown>
    const rule = ruleFor(layer.rules, properties)
    const url = text(rule?.url) || text(layer.url)
    if (!url) return
    const instance: DataInstance = { id: String(feature.id ?? `${layer.id}:${index}`), lon: place[0], lat: place[1] }
    const height = heightFor(layer, properties)
    if (height !== undefined) instance.height = height
    const width = widthFor(layer, properties)
    if (width !== undefined) instance.width = width
    if (text(rule?.color)) instance.color = text(rule?.color)
    out.set(url, [...(out.get(url) ?? []), instance])
  })
  return out
}
