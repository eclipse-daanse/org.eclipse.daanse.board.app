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
 * Which shape the map asks each kind of source for.
 *
 * A source answers several, and which one the map wants depends on what
 * it is: SensorThings keeps its geography inside observations, while a
 * routing answer and a plain document carry it as GeoJSON, which is what
 * the layer renderer draws.
 *
 * Out of the component so it can be read without mounting a map, and so
 * a type that is missing from it is a visible fact rather than a silent
 * fall through to a shape its source never answers (#1187).
 */

/** What a source is asked for, by the type of source it is. */
export const DATA_TYPE_BY_SOURCE: Record<string, string> = {
  rest: 'object',
  ogcsta: 'OGCSTAData',
  'OGC Composer': 'OGCSTAData',
  /*
   * The route itself, not the envelope around it.
   *
   * valhalla answers `geojson`, `object` and `string`; asked for anything
   * else it hands back the whole envelope - summary, legs, waypoints and
   * the geometry among them. This type was missing here, so a valhalla
   * source fell through to OGCSTAData, and the map was handed an object
   * no renderer on it could read.
   */
  valhalla: 'geojson',
}

/**
 * What a source of an unknown type is asked for.
 *
 * SensorThings, because that is what the map was built for and what it
 * falls back to today; a type added later says what it wants above
 * rather than inheriting this.
 */
export const DEFAULT_DATA_TYPE = 'OGCSTAData'

/** The shape to ask a source of this type for. */
export function dataTypeFor(sourceType: string | undefined): string {
  return (sourceType && DATA_TYPE_BY_SOURCE[sourceType]) || DEFAULT_DATA_TYPE
}
