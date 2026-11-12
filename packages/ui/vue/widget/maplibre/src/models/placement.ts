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
 * Where the instances of a model layer stand, in the frame the model is
 * drawn in (#1281). Plain arithmetic, so a test reads it without WebGL.
 *
 * The frame has its origin at the middle of the instances: x east, y up,
 * z south, in metres. Drawn around an origin near the models rather than in
 * web mercator units, the positions keep their precision in float32.
 */

const EARTH_CIRCUMFERENCE = 2 * Math.PI * 6378137

/** A place in web mercator units (0..1 for the world), with the metre there. */
export interface Origin {
  x: number
  y: number
  /** Mercator units per metre at this latitude. */
  meter: number
}

const mercatorX = (lon: number) => (180 + lon) / 360
const mercatorY = (lat: number) => (180 - (180 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))) / 360

/** The origin of the frame: the middle of the places given, or null for none. */
export function originOf(places: { lon?: number; lat?: number }[]): Origin | null {
  const valid = places.filter((p) => Number.isFinite(Number(p.lon)) && Number.isFinite(Number(p.lat)))
  if (!valid.length) return null
  const lon = valid.reduce((sum, p) => sum + Number(p.lon), 0) / valid.length
  const lat = valid.reduce((sum, p) => sum + Number(p.lat), 0) / valid.length
  return { x: mercatorX(lon), y: mercatorY(lat), meter: 1 / (EARTH_CIRCUMFERENCE * Math.cos((lat * Math.PI) / 180)) }
}

/** A place in the frame: metres east and south of the origin. */
export function localOf(lon: number, lat: number, origin: Origin): [number, number] {
  return [(mercatorX(lon) - origin.x) / origin.meter, (mercatorY(lat) - origin.y) / origin.meter]
}

/** What a layer is read for here - the model's names. */
export interface PlacedLayer {
  scale?: number
  rotation?: number
  altitudeOffset?: number
  instances?: Iterable<{ id?: string; lon?: number; lat?: number; scale?: number; rotation?: number; height?: number; width?: number; color?: string; partColors?: (string | undefined)[] }> | null
}

/** One instance in the frame: where, turned by how much (radians about y), how large. */
export interface InstancePlacement {
  id?: string
  position: [number, number, number]
  rotation: number
  scale: number
  /** How tall in metres, where the data says it (#1282): the model is scaled to it instead. */
  height?: number
  /** How wide in metres, where the data says it: the model is scaled across to it. */
  width?: number
  /** A colour for the model, where its encoding gives one. */
  color?: string
  /** A colour for each part of its layer, by index (#1296). */
  partColors?: (string | undefined)[]
}

const number = (value: unknown, fallback: number) => {
  const n = Number(value)
  return value !== null && value !== '' && Number.isFinite(n) ? n : fallback
}

/**
 * The instances of a layer in the frame. Rotation is clockwise from north,
 * seen from above - a turn about y the other way round; scale is the layer's
 * times the instance's. An instance without a place is left out.
 */
export function placementsOf(layer: PlacedLayer, origin: Origin): InstancePlacement[] {
  const layerScale = number(layer.scale, 1)
  const layerRotation = number(layer.rotation, 0)
  const up = number(layer.altitudeOffset, 0)
  const out: InstancePlacement[] = []
  for (const instance of layer.instances ?? []) {
    const lon = Number(instance.lon)
    const lat = Number(instance.lat)
    if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue
    const [east, south] = localOf(lon, lat, origin)
    out.push({
      id: instance.id,
      position: [east, up, south],
      rotation: (-(layerRotation + number(instance.rotation, 0)) * Math.PI) / 180,
      scale: layerScale * number(instance.scale, 1),
      ...(Number(instance.height) > 0 ? { height: Number(instance.height) } : {}),
      ...(Number(instance.width) > 0 ? { width: Number(instance.width) } : {}),
      ...(instance.color ? { color: String(instance.color) } : {}),
      ...(instance.partColors ? { partColors: instance.partColors } : {}),
    })
  }
  return out
}

/** The instance whose screen point is nearest to a point, within a radius in pixels. */
export function nearestWithin<T>(
  point: { x: number; y: number },
  candidates: { item: T; x: number; y: number }[],
  radius: number,
): T | undefined {
  let best: T | undefined
  let bestDistance = radius * radius
  for (const candidate of candidates) {
    const d = (candidate.x - point.x) ** 2 + (candidate.y - point.y) ** 2
    if (d <= bestDistance) {
      bestDistance = d
      best = candidate.item
    }
  }
  return best
}
