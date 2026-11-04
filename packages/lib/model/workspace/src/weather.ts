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
 * A page's weather as it starts out.
 *
 * The generator leaves a contained reference empty, and a setting without
 * a wrapper is one the form cannot show and a variable cannot drive. So a
 * weather is made with every wrapper in place, each the hand-written wrapper
 * (it is the one that can follow a variable), each holding the value a page
 * without any weather would have.
 */
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import { WeatherImpl } from './gen/WeatherImpl'
import type { Weather } from './gen/Weather'
import { WeatherKind, getWeatherKindByLiteral } from './gen/WeatherKind'
import { WeatherRegion, getWeatherRegionByLiteral } from './gen/WeatherRegion'
import { WorkspacePackage } from './gen/WorkspacePackage'
import { RectangleShapeImpl } from './gen/RectangleShapeImpl'
import { EllipseShapeImpl } from './gen/EllipseShapeImpl'
import { PolygonShapeImpl } from './gen/PolygonShapeImpl'
import { RegionPointImpl } from './gen/RegionPointImpl'
import type { RegionShape } from './gen/RegionShape'
import type { BoxShape } from './gen/BoxShape'
import type { PolygonShape } from './gen/PolygonShape'

export const WEATHER_DEFAULTS = {
  kind: 'none',
  intensity: 50,
  wind: 0,
  color: '',
  region: 'page',
  regionWidget: '',
  affectsWidgets: true,
} as const

export function createWeather(): Weather {
  const weather = new WeatherImpl()
  weather.kind = new VariableWrapper<string>(WEATHER_DEFAULTS.kind)
  weather.intensity = new VariableWrapper<number>(WEATHER_DEFAULTS.intensity)
  weather.wind = new VariableWrapper<number>(WEATHER_DEFAULTS.wind)
  weather.color = new VariableWrapper<string>(WEATHER_DEFAULTS.color)
  weather.region = new VariableWrapper<string>(WEATHER_DEFAULTS.region)
  weather.regionWidget = new VariableWrapper<string>(WEATHER_DEFAULTS.regionWidget)
  weather.affectsWidgets = new VariableWrapper<boolean>(WEATHER_DEFAULTS.affectsWidgets)
  return weather
}

/**
 * Puts a wrapper, holding its default, into every setting a stored weather
 * came back without, and says whether it had to.
 *
 * A weather written before a setting existed - one from 085750e1 has kind,
 * intensity, wind and colour and nothing else - comes back with that
 * reference empty. The layer reads an empty one as its default, so it
 * looks right; but the form has nothing to bind a field to and leaves it
 * out, and nothing can set it. Called when a stored workspace is read,
 * before anyone watches it.
 */
export function completeWeather(weather: Weather): boolean {
  const fresh = createWeather() as unknown as Record<string, unknown>
  const held = weather as unknown as Record<string, unknown>
  let completed = false
  for (const key of Object.keys(WEATHER_DEFAULTS)) {
    if (held[key]) continue
    held[key] = fresh[key]
    completed = true
  }
  return completed
}

/** The kinds, as Weather.kind holds them: the enum's literals. */
export const WEATHER_KINDS = ['none', 'rain', 'snow', 'fog'] as const

/**
 * What a kind setting means, whatever a variable delivered.
 *
 * Case and surrounding space do not matter, and the enum's names are
 * understood as well as its literals, so "Snow" and "SNOW" both snow.
 * Anything else is no weather rather than an error: a variable that says
 * "sunny" should leave the page clear, not break it.
 */
export function weatherKindOf(value: unknown): WeatherKind {
  const text = String(value ?? '').trim().toLowerCase()
  return getWeatherKindByLiteral(text) ?? WeatherKind.NONE
}

/** The regions, as Weather.region holds them: the enum's literals. */
export const WEATHER_REGIONS = ['page', 'area', 'widget'] as const

/** What a region setting means; anything unknown is the whole page. */
export function weatherRegionOf(value: unknown): WeatherRegion {
  const text = String(value ?? '').trim().toLowerCase()
  return getWeatherRegionByLiteral(text) ?? WeatherRegion.PAGE
}

/**
 * Whether the weather acts with the widgets. A variable may deliver the
 * word rather than the boolean, so "false", "off", "no" and "0" are off;
 * anything unset is the default, on.
 */
export function affectsWidgetsOf(value: unknown): boolean {
  if (value === undefined || value === null || value === '') return WEATHER_DEFAULTS.affectsWidgets
  if (typeof value === 'boolean') return value
  return !['false', 'off', 'no', '0'].includes(String(value).trim().toLowerCase())
}

/* ------------------------------------------------------------ shapes */

/**
 * A drawn shape as plain numbers, in grid units: what the layer clips to
 * and what the drawing mode edits. Kept apart from the modelled shapes so
 * a draft can be changed freely and thrown away on Escape without the page
 * ever hearing of it.
 */
export type ShapeSpec =
  | { kind: 'rectangle'; x: number; y: number; width: number; height: number }
  | { kind: 'ellipse'; x: number; y: number; width: number; height: number }
  | { kind: 'polygon'; points: { x: number; y: number }[] }

/** What a modelled shape says, or undefined for one this does not know. */
export function shapeSpecOf(shape: RegionShape): ShapeSpec | undefined {
  const name = shape.eClass().getName()
  if (name === 'RectangleShape' || name === 'EllipseShape') {
    const box = shape as BoxShape
    return {
      kind: name === 'RectangleShape' ? 'rectangle' : 'ellipse',
      x: box.x ?? 0,
      y: box.y ?? 0,
      width: box.width ?? 0,
      height: box.height ?? 0,
    }
  }
  if (name === 'PolygonShape') {
    return {
      kind: 'polygon',
      points: (shape as PolygonShape).points.toArray().map((point) => ({ x: point.x ?? 0, y: point.y ?? 0 })),
    }
  }
  return undefined
}

/** The modelled shape for a spec. */
export function shapeFromSpec(spec: ShapeSpec): RegionShape {
  if (spec.kind === 'polygon') {
    const polygon = new PolygonShapeImpl()
    for (const each of spec.points) {
      const point = new RegionPointImpl()
      point.x = each.x
      point.y = each.y
      polygon.points.push(point)
    }
    return polygon
  }
  const box = spec.kind === 'rectangle' ? new RectangleShapeImpl() : new EllipseShapeImpl()
  box.x = spec.x
  box.y = spec.y
  box.width = spec.width
  box.height = spec.height
  return box
}

/** The weather's shapes as specs, in their order. */
export function readShapes(weather: Weather | undefined): ShapeSpec[] {
  const found: ShapeSpec[] = []
  for (const shape of weather?.shapes?.toArray?.() ?? []) {
    const spec = shapeSpecOf(shape)
    if (spec) found.push(spec)
  }
  return found
}

/**
 * Puts these shapes in place of the weather's, as one change of the list
 * rather than one per shape: whoever watches the page sees the region
 * change once.
 */
export function writeShapes(weather: Weather, specs: ShapeSpec[]): void {
  weather.shapes.clear()
  weather.shapes.addAll(specs.map(shapeFromSpec))
}

/* ------------------------------------------------------------ migration */

/** The rectangle #1228 had typed in, before regions were drawn (c8ed1ade). */
const TYPED_RECTANGLE = { regionX: 0, regionY: 0, regionWidth: 12, regionHeight: 8 } as const

/**
 * A stored weather from before drawn regions, made one of now.
 *
 * Works on the stored JSON, before the resource reads it: the four typed
 * features are no longer in the model, and the resource passes over a
 * feature it does not know without a word - the region would simply be
 * gone. Where the region was an area (or a variable decides it, and may
 * say area), the typed rectangle becomes one rectangle shape; the typed
 * values go either way. A variable bound to one of the four is not
 * carried over: a shape is drawn, not driven.
 *
 * Walks the whole document, so it does not matter whether the pages sit
 * on a board or, as in older states, on the workspace itself. Changes the
 * object it is given and hands it back.
 */
export function liftTypedWeatherRegions<T>(stored: T): T {
  const visited = new WeakSet<object>()
  const walk = (node: unknown): void => {
    if (!node || typeof node !== 'object' || visited.has(node)) return
    visited.add(node)
    if (Array.isArray(node)) {
      for (const each of node) walk(each)
      return
    }
    const record = node as Record<string, unknown>
    const weather = record.weather
    if (weather && typeof weather === 'object' && !Array.isArray(weather)) liftOne(weather as Record<string, unknown>)
    for (const key of Object.keys(record)) walk(record[key])
  }
  walk(stored)
  return stored
}

function liftOne(weather: Record<string, unknown>): void {
  const keys = Object.keys(TYPED_RECTANGLE) as (keyof typeof TYPED_RECTANGLE)[]
  if (!keys.some((key) => key in weather)) return
  const typed = Object.fromEntries(
    keys.map((key) => [key, storedNumber(weather[key], TYPED_RECTANGLE[key])]),
  ) as Record<keyof typeof TYPED_RECTANGLE, number>
  for (const key of keys) delete weather[key]

  const region = weather.region as { value?: unknown; variable?: unknown; isSet?: unknown } | undefined
  const bound = Boolean(region?.isSet || region?.variable)
  const isArea = weatherRegionOf(region?.value) === WeatherRegion.AREA
  const shapes = Array.isArray(weather.shapes) ? weather.shapes : []
  if ((!isArea && !bound) || shapes.length > 0) return

  weather.shapes = [
    {
      eClass: shapeClassUri('RectangleShape'),
      x: typed.regionX,
      y: typed.regionY,
      width: typed.regionWidth,
      height: typed.regionHeight,
    },
  ]
}

function storedNumber(wrapper: unknown, fallback: number): number {
  const value = (wrapper as { value?: unknown } | undefined)?.value
  if (value === '' || value === null || value === undefined) return fallback
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

function shapeClassUri(name: string): string {
  return `${WorkspacePackage.eNS_URI}#//${name}`
}

/* ------------------------------------------------------------ drawing */

/**
 * The event that puts a page into the drawing mode of its weather region,
 * on the application's event bus, with `{ pageId }`.
 *
 * Asked for in the page settings, done by the layer around the page's
 * board - two bundles that do not know each other, and both know this
 * package. Nothing about the page changes by asking; the drawing mode
 * writes the shapes when the person is done.
 */
/* Not of the shape ns:Key, which the text checks would take for a text */
export const DRAW_WEATHER_REGION = 'drawWeatherRegion'

export interface DrawWeatherRegionEvent {
  pageId: string
}
