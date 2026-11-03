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
 * Finding the geography in whatever an endpoint answered.
 *
 * The two map previews that existed before this one each knew the shape of
 * their own source's answer: the SensorThings preview looked for a point at
 * five fixed places inside a *Thing* and drew a marker, and the routing
 * preview read `data.geojson.features` and kept the LineStrings. Neither
 * could show a plain FeatureCollection, which is what a catalogue serves
 * when it says a distribution is GeoJSON (#1187).
 *
 * So this asks a different question: not "where does this kind of source
 * keep its geometry", but "is there any geometry in here". Separate from
 * the component that draws it, because that is the part worth testing.
 */

/** The GeoJSON geometry types, as the specification names them. */
const GEOMETRY_TYPES = new Set([
  'Point',
  'MultiPoint',
  'LineString',
  'MultiLineString',
  'Polygon',
  'MultiPolygon',
  'GeometryCollection',
])

export interface Feature {
  type: 'Feature'
  geometry: { type: string; coordinates?: unknown; geometries?: unknown[] } | null
  properties: Record<string, unknown> | null
}

function isGeometry(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false
  const { type } = value as { type?: unknown }
  return typeof type === 'string' && GEOMETRY_TYPES.has(type)
}

/*
 * A feature, and one Leaflet will accept.
 *
 * Saying "it calls itself a Feature" is not enough: what comes back from
 * an endpoint is not always what it claims, and a geometry of an unknown
 * type reaches L.geoJSON, which throws "Invalid GeoJSON object" and takes
 * the whole view down - one malformed entry among a thousand good ones is
 * enough. A geometry of null is a different matter: the specification
 * allows it for a feature that has none yet, and Leaflet skips it.
 */
function isFeature(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false
  const each = value as { type?: unknown; geometry?: unknown }
  if (each.type !== 'Feature' || !('geometry' in each)) return false
  return each.geometry === null || isGeometry(each.geometry)
}

/** A geometry on its own, wrapped so everything downstream sees features. */
function asFeature(geometry: unknown, properties: Record<string, unknown> | null = null): Feature {
  return { type: 'Feature', geometry: geometry as Feature['geometry'], properties }
}

/*
 * How deep to look for geometry inside an answer.
 *
 * An endpoint rarely hands over a bare FeatureCollection: it arrives under
 * a key, inside a result, inside a list of them. Deep enough to find those,
 * shallow enough that a large answer of no geography is not walked in full.
 */
const DEPTH = 6

/**
 * Every feature in `data`, wherever it is kept.
 *
 * Handles a FeatureCollection, a lone Feature, a bare geometry, an array of
 * any of those, and all of them nested under keys - `data.geojson`,
 * `data.results[0].shape` - without being told which. An object that is
 * none of those contributes nothing rather than breaking the search.
 */
export function featuresIn(data: unknown, depth = DEPTH): Feature[] {
  if (!data || depth < 0) return []

  if (Array.isArray(data)) {
    return data.flatMap((each) => featuresIn(each, depth - 1))
  }

  if (typeof data !== 'object') return []

  const value = data as Record<string, unknown>

  if (value.type === 'FeatureCollection' && Array.isArray(value.features)) {
    return value.features.filter(isFeature) as Feature[]
  }

  if (isFeature(value)) return [value as unknown as Feature]

  if (isGeometry(value)) return [asFeature(value)]

  /*
   * A record carrying its geometry beside its other fields - which is what
   * a row with a `geometry` or `location` column looks like once parsed.
   * The rest of the record becomes the feature's properties, so a popup
   * has something to say.
   */
  for (const key of ['geometry', 'location', 'geom', 'shape', 'the_geom']) {
    const held = value[key]
    if (isGeometry(held)) {
      const { [key]: _geometry, ...rest } = value
      return [asFeature(held, rest)]
    }
  }

  /* Nothing here itself, so look at what it holds. */
  return Object.values(value).flatMap((each) =>
    each && typeof each === 'object' ? featuresIn(each, depth - 1) : [],
  )
}

/** Where a feature's coordinates begin and end, as [south, west, north, east]. */
export type Bounds = [number, number, number, number]

function stretch(bounds: Bounds, lon: number, lat: number): void {
  if (!Number.isFinite(lon) || !Number.isFinite(lat)) return
  bounds[0] = Math.min(bounds[0], lat)
  bounds[1] = Math.min(bounds[1], lon)
  bounds[2] = Math.max(bounds[2], lat)
  bounds[3] = Math.max(bounds[3], lon)
}

/*
 * GeoJSON positions are [longitude, latitude] at any depth of nesting -
 * a point is one, a polygon is an array of rings of them. Walked rather
 * than switched on the type, because every type is positions in the end.
 */
function walk(coordinates: unknown, bounds: Bounds): void {
  if (!Array.isArray(coordinates)) return
  if (typeof coordinates[0] === 'number' && typeof coordinates[1] === 'number') {
    stretch(bounds, coordinates[0], coordinates[1])
    return
  }
  for (const each of coordinates) walk(each, bounds)
}

function walkGeometry(geometry: Feature['geometry'], bounds: Bounds): void {
  if (!geometry) return
  if (geometry.type === 'GeometryCollection') {
    for (const each of geometry.geometries ?? []) walkGeometry(each as Feature['geometry'], bounds)
    return
  }
  walk(geometry.coordinates, bounds)
}

/**
 * What the map has to show to show all of them, or nothing where there are
 * no usable coordinates.
 */
export function boundsOf(features: readonly Feature[]): Bounds | undefined {
  const bounds: Bounds = [Infinity, Infinity, -Infinity, -Infinity]
  for (const feature of features) walkGeometry(feature.geometry, bounds)
  return bounds.every(Number.isFinite) ? bounds : undefined
}

/** How many of each kind there are - what the preview says above the map. */
export function countByType(features: readonly Feature[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const feature of features) {
    const type = feature.geometry?.type
    if (!type) continue
    counts[type] = (counts[type] ?? 0) + 1
  }
  return counts
}
