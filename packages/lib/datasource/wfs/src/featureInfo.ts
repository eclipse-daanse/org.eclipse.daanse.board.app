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
 * Features from a WMS GetFeatureInfo (#1282), for a QGIS Server that offers
 * a layer as WMS only - the trees of the Jena portal. The box is cut into
 * tiles; each tile is one request on a 101 px image, asked at its middle
 * with a tolerance that reaches nearly to its corners, so a tile answers
 * the features in it. The XML answer becomes GeoJSON points.
 */

import type { Feature, FeatureCollection } from 'geojson'
import { boxOf } from './wfs'
import { parseXml } from './xml'

/** What of the configuration this mode reads - the model's names. */
export interface FeatureInfoRequest {
  url?: string
  typeName?: string
  bbox?: string
  tileSize?: number
  pointTolerance?: number
  maxFeatures?: number
}

/** The image a tile is asked on: 101 px, its middle pixel 50. */
const SIZE = 101
const MIDDLE = 50
/*
 * The tolerance that reaches the corners of the tile from its middle:
 * 50 px * sqrt(2) = 70.7 px, and one more for rounding. Less loses the
 * features in the corners - between the circles of neighbouring tiles - so
 * a smaller tolerance given is raised to it.
 */
export const CORNER_TOLERANCE = Math.ceil(MIDDLE * Math.SQRT2) + 1
/** Never more requests than this for one read. */
export const MAX_TILES = 36

/**
 * The tiles of a box: [west, south, east, north] each, about square on the
 * ground and at most tileSize high; the box is shared out evenly, so no
 * tile is a sliver.
 */
export function tilesOf(bbox: unknown, tileSize = 0.01): [number, number, number, number][] {
  const box = boxOf(bbox)
  if (!box) return []
  const [west, south, east, north] = box
  const dLat = tileSize > 0 ? tileSize : 0.01
  const dLon = dLat / Math.max(0.2, Math.cos((((south + north) / 2) * Math.PI) / 180))
  const rows = Math.max(1, Math.ceil((north - south) / dLat - 1e-9))
  const columns = Math.max(1, Math.ceil((east - west) / dLon - 1e-9))
  const height = (north - south) / rows
  const width = (east - west) / columns
  const tiles: [number, number, number, number][] = []
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      tiles.push([west + column * width, south + row * height, west + (column + 1) * width, south + (row + 1) * height])
      if (tiles.length >= MAX_TILES) return tiles
    }
  }
  return tiles
}

/** The GetFeatureInfo path of one tile: WMS 1.3.0, EPSG:4326 latitude first, text/xml. */
export function featureInfoPath(request: FeatureInfoRequest, tile: [number, number, number, number]): string {
  const [west, south, east, north] = tile
  const layer = String(request.typeName ?? '').trim()
  const params = new URLSearchParams({
    SERVICE: 'WMS',
    VERSION: '1.3.0',
    REQUEST: 'GetFeatureInfo',
    LAYERS: layer,
    QUERY_LAYERS: layer,
    STYLES: '',
    CRS: 'EPSG:4326',
    BBOX: [south, west, north, east].join(','),
    WIDTH: String(SIZE),
    HEIGHT: String(SIZE),
    I: String(MIDDLE),
    J: String(MIDDLE),
    INFO_FORMAT: 'text/xml',
    FEATURE_COUNT: String(request.maxFeatures && request.maxFeatures > 0 ? Math.min(request.maxFeatures, 5000) : 5000),
    FI_POINT_TOLERANCE: String(Math.max(CORNER_TOLERANCE, Math.round(Number(request.pointTolerance) || 0))),
  })
  const path = String(request.url ?? '').trim()
  return `${path}${path.includes('?') ? '&' : '?'}${params.toString()}`
}

const valueOf = (raw: string): string | number => {
  const value = raw.trim()
  return value !== '' && Number.isFinite(Number(value)) ? Number(value) : value
}

/**
 * The features of a QGIS Server GetFeatureInfo answer in text/xml: the
 * attributes their properties, the middle of their BoundingBox their point.
 * A feature without a box is left out - it cannot stand on the map.
 */
export function featuresOfFeatureInfo(answer: string): Feature[] {
  const doc = parseXml(answer)
  const features: Feature[] = []
  for (const node of Array.from(doc.getElementsByTagName('Feature'))) {
    const properties: Record<string, unknown> = {}
    for (const attribute of Array.from(node.getElementsByTagName('Attribute'))) {
      const name = attribute.getAttribute('name')
      if (name) properties[name] = valueOf(attribute.getAttribute('value') ?? '')
    }
    const box = node.getElementsByTagName('BoundingBox')[0]
    const coordinates = box
      ? [
          (Number(box.getAttribute('minx')) + Number(box.getAttribute('maxx'))) / 2,
          (Number(box.getAttribute('miny')) + Number(box.getAttribute('maxy'))) / 2,
        ]
      : null
    if (!coordinates || !coordinates.every(Number.isFinite)) continue
    const layer = node.parentElement?.getAttribute('name') ?? ''
    features.push({
      type: 'Feature',
      id: `${layer}.${node.getAttribute('id') ?? features.length}`,
      geometry: { type: 'Point', coordinates },
      properties,
    })
  }
  return features
}

/** The features of all tiles, each once (a feature on the edge of two tiles is in both answers). */
export function mergedOf(answers: Feature[][]): FeatureCollection {
  const seen = new Set<string>()
  const features: Feature[] = []
  for (const answer of answers) {
    for (const feature of answer) {
      const key = String(feature.id)
      if (seen.has(key)) continue
      seen.add(key)
      features.push(feature)
    }
  }
  return { type: 'FeatureCollection', features }
}
