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
 * Asking a WFS for features and reading what it answers (#1282). Plain
 * functions, apart from the store, so a test reads them with recorded
 * answers.
 */

import type { Feature, FeatureCollection, Geometry } from 'geojson'
import { parseXml, type XmlNode } from './xml'

/** What of the configuration a request is made from - the model's names. */
export interface WfsRequest {
  url?: string
  typeName?: string
  version?: string
  outputFormat?: string
  srsName?: string
  maxFeatures?: number
  bbox?: string
  filter?: string
}

const text = (value: unknown) => String(value ?? '').trim()

/** The GeoJSON output format most services name; GeoServer and QGIS Server both take it. */
export const GEOJSON = 'application/json'

/** A box as west,south,east,north - four numbers - or null. */
export function boxOf(bbox: unknown): [number, number, number, number] | null {
  const parts = text(bbox).split(',').map((part) => Number(part.trim()))
  return parts.length === 4 && parts.every(Number.isFinite) ? (parts as [number, number, number, number]) : null
}

/**
 * The GetFeature request: the path of the configuration with the query.
 * The names follow the version - typeNames and count in 2.0.0, typeName and
 * maxFeatures in 1.1.0. A box is sent in the coordinate system asked for,
 * named after it, as both versions read it.
 */
export function getFeaturePath(request: WfsRequest): string {
  const version = text(request.version) === '1.1.0' ? '1.1.0' : '2.0.0'
  const two = version === '2.0.0'
  const srs = text(request.srsName) || 'EPSG:4326'
  const params = new URLSearchParams({
    service: 'WFS',
    version,
    request: 'GetFeature',
    [two ? 'typeNames' : 'typeName']: text(request.typeName),
    outputFormat: text(request.outputFormat) || GEOJSON,
    srsName: srs,
  })
  const max = Number(request.maxFeatures ?? 0)
  if (Number.isFinite(max) && max > 0) params.set(two ? 'count' : 'maxFeatures', String(Math.floor(max)))
  const box = boxOf(request.bbox)
  if (box) {
    // EPSG:4326 in WFS 2.0 is latitude first, unless named the short way; the short name is what is sent.
    params.set('bbox', [...box, srs].join(','))
  }
  if (text(request.filter)) params.set('cql_filter', text(request.filter))
  const path = text(request.url)
  return `${path}${path.includes('?') ? '&' : '?'}${params.toString()}`
}

/** The GetCapabilities request on the same path. */
export function getCapabilitiesPath(request: WfsRequest): string {
  const path = text(request.url)
  const params = new URLSearchParams({ service: 'WFS', request: 'GetCapabilities' })
  return `${path}${path.includes('?') ? '&' : '?'}${params.toString()}`
}

/**
 * The message of an exception the service sent, or null for none: an OWS
 * ExceptionReport or a ServiceExceptionReport, as XML. The Jena portal says
 * "Service unknown or not permitted" where it offers no WFS.
 */
export function exceptionOf(answer: string): string | null {
  if (!/Exception(Report)?/.test(answer.slice(0, 2000))) return null
  const doc = parseXml(answer)
  const node = doc.getElementsByTagNameNS('*', 'ExceptionText')[0] ?? doc.getElementsByTagNameNS('*', 'ServiceException')[0]
  return node?.textContent?.trim() || (doc.documentElement?.localName?.includes('Exception') ? 'WFS exception' : null)
}

/** Whether a coordinate system is named the way that puts latitude first (EPSG:4326 as a URN or URI). */
const latitudeFirst = (srs: string) => /urn:ogc:def:crs:EPSG:[^:]*:4326$|opengis\.net\/def\/crs\/EPSG\/0\/4326$/i.test(srs.trim())

/** Numbers of a gml:pos, gml:posList or gml:coordinates, as positions [x, y]. */
function positionsOf(node: XmlNode, swap: boolean): number[][] {
  const pos = node.getElementsByTagNameNS('*', 'posList')[0] ?? node.getElementsByTagNameNS('*', 'pos')[0]
  let numbers: number[]
  if (pos) {
    numbers = (pos.textContent ?? '').trim().split(/\s+/).map(Number)
  } else {
    const coordinates = node.getElementsByTagNameNS('*', 'coordinates')[0]
    numbers = (coordinates?.textContent ?? '').trim().split(/[\s,]+/).map(Number)
  }
  const out: number[][] = []
  for (let i = 0; i + 1 < numbers.length; i += 2) out.push(swap ? [numbers[i + 1], numbers[i]] : [numbers[i], numbers[i + 1]])
  return out.filter((p) => p.every(Number.isFinite))
}

/** A GML geometry as GeoJSON: Point, LineString or Polygon (its outer ring), or null. */
function geometryOf(node: XmlNode, swap: boolean): Geometry | null {
  const kind = node.localName
  if (kind === 'Point') {
    const [position] = positionsOf(node, swap)
    return position ? { type: 'Point', coordinates: position } : null
  }
  if (kind === 'LineString') return { type: 'LineString', coordinates: positionsOf(node, swap) }
  if (kind === 'Polygon') {
    const outer = node.getElementsByTagNameNS('*', 'exterior')[0] ?? node.getElementsByTagNameNS('*', 'outerBoundaryIs')[0] ?? node
    return { type: 'Polygon', coordinates: [positionsOf(outer, swap)] }
  }
  for (const child of Array.from(node.children)) {
    const found = geometryOf(child, swap)
    if (found) return found
  }
  return null
}

const GEOMETRY_KINDS = new Set(['Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiCurve', 'MultiSurface', 'MultiPolygon'])

/**
 * A GML GetFeature answer as GeoJSON: each member a feature, its simple
 * child elements its properties, its first geometry its geometry.
 */
export function featuresOfGml(answer: string, srsName = 'EPSG:4326'): FeatureCollection {
  const doc = parseXml(answer)
  const members = [
    ...Array.from(doc.getElementsByTagNameNS('*', 'member')),
    ...Array.from(doc.getElementsByTagNameNS('*', 'featureMember')),
  ]
  const features: Feature[] = []
  for (const member of members) {
    const node = member.firstElementChild
    if (!node) continue
    const properties: Record<string, unknown> = {}
    let geometry: Geometry | null = null
    for (const child of Array.from(node.children)) {
      const inner = child.firstElementChild
      if (inner && GEOMETRY_KINDS.has(inner.localName)) {
        const srs = inner.getAttribute('srsName') ?? srsName
        geometry = geometry ?? geometryOf(inner, latitudeFirst(srs))
      } else if (!inner) {
        const value = child.textContent ?? ''
        properties[child.localName] = value !== '' && Number.isFinite(Number(value)) ? Number(value) : value
      }
    }
    const id = node.getAttributeNS('http://www.opengis.net/gml/3.2', 'id') || node.getAttribute('gml:id') || node.getAttribute('fid') || undefined
    features.push({ type: 'Feature', ...(id ? { id } : {}), geometry: geometry as Geometry, properties })
  }
  return { type: 'FeatureCollection', features }
}

/**
 * What the service answered, as a FeatureCollection: GeoJSON as it is,
 * GML read, an exception thrown with its message.
 */
export function featuresOf(answer: string, contentType = '', srsName = 'EPSG:4326'): FeatureCollection {
  const body = answer.trim()
  if (body.startsWith('{') || /json/i.test(contentType)) {
    const parsed = JSON.parse(body) as FeatureCollection
    if (parsed?.type !== 'FeatureCollection' || !Array.isArray(parsed.features)) throw new Error('No FeatureCollection')
    return parsed
  }
  const exception = exceptionOf(body)
  if (exception) throw new Error(exception)
  return featuresOfGml(body, srsName)
}

/** The features as a table: a row per feature, a column per property. */
export function tableOf(collection: FeatureCollection) {
  const headers = [...new Set(collection.features.flatMap((feature) => Object.keys(feature.properties ?? {})))]
  const items = collection.features.map((feature) => ({ ...(feature.properties ?? {}) }))
  return { items, headers, rows: items.map((item) => headers.map((header) => (item as Record<string, unknown>)[header])) }
}

/** The DescribeFeatureType request of the feature type, on the same path (#1295). */
export function describeFeatureTypePath(request: WfsRequest): string {
  const version = text(request.version) === '1.1.0' ? '1.1.0' : '2.0.0'
  const params = new URLSearchParams({
    service: 'WFS',
    version,
    request: 'DescribeFeatureType',
    [version === '2.0.0' ? 'typeNames' : 'typeName']: text(request.typeName),
  })
  const path = text(request.url)
  return `${path}${path.includes('?') ? '&' : '?'}${params.toString()}`
}

const XSD_TYPES: Record<string, 'number' | 'date' | 'boolean' | 'string'> = {
  double: 'number', float: 'number', decimal: 'number', int: 'number', integer: 'number', long: 'number', short: 'number', byte: 'number',
  nonNegativeInteger: 'number', positiveInteger: 'number', unsignedInt: 'number', unsignedLong: 'number',
  date: 'date', dateTime: 'date',
  boolean: 'boolean',
  string: 'string',
}

/**
 * The column types of a feature type from its DescribeFeatureType schema:
 * each xsd:element of a simple type, numbers, dates and flags as such;
 * the geometry (a gml type) is left out.
 */
export function columnTypesOfSchema(schema: string): { column: string; type: 'number' | 'date' | 'boolean' | 'string' }[] {
  const doc = new DOMParser().parseFromString(schema, 'text/xml')
  const out: { column: string; type: 'number' | 'date' | 'boolean' | 'string' }[] = []
  for (const element of Array.from(doc.getElementsByTagNameNS('*', 'element'))) {
    const name = element.getAttribute('name')
    let type = element.getAttribute('type') ?? ''
    if (!type) type = element.getElementsByTagNameNS('*', 'restriction')[0]?.getAttribute('base') ?? ''
    const local = type.split(':').pop() ?? ''
    if (!name || type.startsWith('gml:') || !(local in XSD_TYPES)) continue
    // The feature type itself is an element too; it has a complex type of its own.
    if (element.parentElement?.localName === 'schema') continue
    out.push({ column: name, type: XSD_TYPES[local] })
  }
  return out
}
