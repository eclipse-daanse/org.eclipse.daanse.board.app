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
 * The things of an OGC STA layer as GeoJSON features, coloured and raised
 * by their latest values.
 *
 * A thing is drawn where its first location is: an area, a line or a
 * point, whatever its location holds. Its colour comes from the latest
 * value of the datastream the layer names, mapped to a colour - the rule
 * by which the Leaflet map colours an area by a datastream's latest
 * result. Its height comes from the latest number of another datastream.
 */

import type { Feature, FeatureCollection, Geometry } from 'geojson'
import { matchesNamePattern, type LatestObservation } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'

/** A thing as the source answers it, as far as it is read here. */
export interface ThingLike {
  iotId?: string | number
  '@iot.id'?: string | number
  name?: string
  description?: string
  properties?: Record<string, unknown>
  locations?: { location?: unknown }[]
}

/** What of a layer is read here - the model's names, lists as anything iterable. */
export interface ThingLayerLike {
  thingNames?: Iterable<string> | null
  colorSuffix?: string
  colors?: Iterable<{ code?: string; color?: string }> | null
  heightSuffix?: string
  heightFactor?: number
  baseHeight?: number
}

const listOf = <T>(held: Iterable<T> | null | undefined): T[] => (held ? Array.from(held) : [])
const text = (value: unknown) => String(value ?? '').trim()

/** The id of a thing, whichever way the source spells it. */
export const thingIdOf = (thing: ThingLike) => String(thing.iotId ?? thing['@iot.id'] ?? '')

/** Whether the layer draws this thing: its name matches one of the patterns. */
export function layerShows(layer: ThingLayerLike, thing: ThingLike): boolean {
  const name = String(thing.name ?? '')
  return listOf(layer.thingNames).some((pattern) => matchesNamePattern(name, pattern))
}

/**
 * The geometries of a location: a geometry, a Feature, a FeatureCollection,
 * or any of these as JSON text. Anything else has none.
 */
export function geometriesOf(location: unknown): Geometry[] {
  let held = location
  if (typeof held === 'string') {
    try {
      held = JSON.parse(held)
    } catch {
      return []
    }
  }
  if (!held || typeof held !== 'object') return []
  const geo = held as { type?: string; geometry?: unknown; features?: unknown[]; coordinates?: unknown }
  if (Array.isArray(geo.features)) return geo.features.flatMap((feature) => geometriesOf(feature))
  if (geo.type === 'Feature' || (geo.geometry && !geo.coordinates)) return geometriesOf(geo.geometry)
  if (geo.type === 'GeometryCollection') {
    return listOf((held as { geometries?: unknown[] }).geometries).flatMap((each) => geometriesOf(each))
  }
  return geo.type && geo.coordinates ? [held as Geometry] : []
}

/** The datastream ids whose latest values a layer reads, for the things given. */
export function datastreamIdsOf(layer: ThingLayerLike, things: ThingLike[]): string[] {
  const suffixes = [text(layer.colorSuffix), text(layer.heightSuffix)].filter(Boolean)
  return [...new Set(things.flatMap((thing) => suffixes.map((suffix) => `${thingIdOf(thing)}${suffix}`)))]
}

/** The colour a latest value gives, by the layer's rules; undefined for none. */
export function colorFor(layer: ThingLayerLike, value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined
  const code = String(value)
  const rule = listOf(layer.colors).find((mapping) => text(mapping.code) === code)
  return text(rule?.color) || undefined
}

/** The height of a block: the base height, plus the latest number times the factor. */
export function heightFor(layer: ThingLayerLike, value: unknown): number {
  const base = Number.isFinite(Number(layer.baseHeight)) ? Number(layer.baseHeight) : 20
  const factor = Number.isFinite(Number(layer.heightFactor)) ? Number(layer.heightFactor) : 10
  const n = typeof value === 'number' ? value : Number.parseFloat(String(value ?? ''))
  return Number.isFinite(n) ? base + n * factor : base
}

/**
 * The features of a layer: one per geometry of each thing it shows, with
 * what a click reports and what the paint reads (color, height, selected).
 */
export function thingFeaturesOf(
  layer: ThingLayerLike,
  things: ThingLike[],
  latest: Map<string, LatestObservation>,
  selectedId?: string,
): FeatureCollection {
  const features: Feature[] = []
  for (const thing of things) {
    if (!layerShows(layer, thing)) continue
    const id = thingIdOf(thing)
    const colorValue = text(layer.colorSuffix) ? latest.get(`${id}${text(layer.colorSuffix)}`)?.result : undefined
    const heightValue = text(layer.heightSuffix) ? latest.get(`${id}${text(layer.heightSuffix)}`)?.result : undefined
    const color = colorFor(layer, colorValue)
    const geometries = geometriesOf(thing.locations?.[0]?.location)
    geometries.forEach((geometry, index) => {
      features.push({
        type: 'Feature',
        id: features.length,
        geometry,
        properties: {
          thingId: id,
          name: thing.name ?? id,
          part: index,
          ...(color ? { color } : {}),
          ...(colorValue !== undefined ? { value: String(colorValue) } : {}),
          height: heightFor(layer, heightValue),
          ...(heightValue !== undefined ? { heightValue: Number(heightValue) } : {}),
          selected: !!selectedId && selectedId === id,
        },
      })
    })
  }
  return { type: 'FeatureCollection', features }
}

/** A point to fly to for a thing: the middle of the box around its geometries. */
export function centerOf(geometries: Geometry[]): [number, number] | null {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  const visit = (coords: unknown): void => {
    if (!Array.isArray(coords)) return
    if (typeof coords[0] === 'number' && typeof coords[1] === 'number') {
      minX = Math.min(minX, coords[0])
      maxX = Math.max(maxX, coords[0])
      minY = Math.min(minY, coords[1])
      maxY = Math.max(maxY, coords[1])
      return
    }
    for (const each of coords) visit(each)
  }
  for (const geometry of geometries) visit((geometry as { coordinates?: unknown }).coordinates)
  return Number.isFinite(minX) ? [(minX + maxX) / 2, (minY + maxY) / 2] : null
}
