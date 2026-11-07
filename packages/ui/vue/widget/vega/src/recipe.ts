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
 * The chart recipe compiled to a Vega-Lite spec (#1284).
 *
 * Pure and deterministic: the same settings give the same spec, and no
 * Vega is loaded to make it, so a test reads the spec without drawing it.
 * Each modelled feature maps to one place in the spec; a feature at its
 * default is left out, so Vega-Lite's own default applies. The enum
 * literals of the model are the Vega-Lite names and are written as they
 * are.
 *
 * The data is named, never inlined: a layer reads `data: {name}` and the
 * widget hands the values to Vega at run time (#1286).
 */

import './referencedPackages'
import type { TopLevelSpec } from 'vega-lite'
import type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
import type { Layer } from './gen/Layer'
import type { Encoding } from './gen/Encoding'
import type { Transform } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import type { Param } from './gen/Param'

/** The dataset a layer draws when it names none: the widget's own source. */
export const DEFAULT_DATASET = 'table'

/** Why a recipe gives no chart; the widget shows `vega:Recipe.<code>`. */
export type RecipeProblem = 'noLayers' | 'facetNeedsOneDataset'

export class RecipeError extends Error {
  constructor(readonly code: RecipeProblem) {
    super(`the chart recipe gives no chart: ${code}`)
    this.name = 'RecipeError'
  }
}

/* A spec fragment; Vega-Lite's own types are a union too wide to build in steps. */
type Json = Record<string, unknown>

const POSITION = new Set(['x', 'y'])
const WITH_SCALE = new Set(['x', 'y', 'xOffset', 'yOffset', 'color', 'size', 'shape', 'opacity', 'theta', 'radius'])
const WITH_LEGEND = new Set(['color', 'size', 'shape', 'opacity'])
const WITH_SORT = new Set(['x', 'y', 'xOffset', 'yOffset', 'color', 'size', 'shape', 'opacity', 'theta', 'radius', 'order'])
const WITH_STACK = new Set(['x', 'y', 'theta', 'radius'])
const WITH_FORMAT = new Set(['text', 'tooltip'])
const LINES = new Set(['line', 'area', 'trail'])
const COMPOSITE = new Set(['boxplot', 'errorbar'])
const CORNERED = new Set(['bar', 'rect', 'arc'])
const SHAPES = new Set(['point', 'circle', 'square'])

/** The elements of a list the model holds, whatever kind of list it is. */
const items = <T>(held: Iterable<T> | null | undefined): T[] => (held ? Array.from(held) : [])
const text = (value: unknown): string => String(value ?? '').trim()

/** A value typed into a text field: a number or a boolean when it reads as one. */
export function scalar(raw: unknown): string | number | boolean {
  const value = text(raw)
  if (value === 'true') return true
  if (value === 'false') return false
  if (value !== '' && Number.isFinite(Number(value))) return Number(value)
  return value
}

/** JSON when it parses as JSON, else the text as it stands. */
const json = (raw: unknown): unknown => {
  const value = text(raw)
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

const datasetOf = (layer: Layer) => text(layer.dataset) || DEFAULT_DATASET

/** The Vega-Lite spec of a chart with these settings. */
export function compileRecipe(settings: VegaWidgetSettings): TopLevelSpec {
  const layers = items(settings.layers)
  if (!layers.length) throw new RecipeError('noLayers')

  const params = items(settings.params).filter((p) => text(p.name))
  const selections = params.filter((p) => p.kind !== 'value').map(paramSpec)
  const values = params.filter((p) => p.kind === 'value').map(paramSpec)

  const units = layers.map((layer) => layerSpec(layer, settings.tooltip !== false))
  /*
   * A selection belongs to a view: in a layered chart it is declared on the
   * first layer and acts on the whole chart from there.
   */
  if (selections.length) units[0].params = selections

  const top: Json = {
    $schema: 'https://vega.github.io/schema/vega-lite/v6.json',
    background: 'transparent',
  }
  const title = text(settings.title)
  if (title) top.title = title
  if (values.length) top.params = values
  const config = configOf(settings)
  if (config) top.config = config

  const facet = facetOf(settings)
  if (facet) {
    const datasets = new Set(layers.map(datasetOf))
    if (datasets.size > 1) throw new RecipeError('facetNeedsOneDataset')
    const inner = units.length === 1 ? withoutData(units[0]) : { layer: units.map(withoutData) }
    /* Small multiples size themselves: "fit" and "container" are single-view only. */
    return { ...top, data: { name: [...datasets][0] }, ...facet, spec: inner } as unknown as TopLevelSpec
  }

  const body = units.length === 1 ? units[0] : { layer: units }
  return {
    ...top,
    /* The board frame sizes the chart, not the spec. */
    width: 'container',
    height: 'container',
    autosize: { type: 'fit', contains: 'padding' },
    ...body,
  } as TopLevelSpec
}

function withoutData(unit: Json): Json {
  const { data: _data, ...rest } = unit
  return rest
}

function configOf(settings: VegaWidgetSettings): Json | undefined {
  const position = settings.legendPosition ?? 'right'
  if (position === 'none') return { legend: { disable: true } }
  if (position !== 'right') return { legend: { orient: position } }
  return undefined
}

function facetOf(settings: VegaWidgetSettings): Json | undefined {
  const facet = settings.facet
  if (!facet) return undefined
  const row = text(facet.row)
  const column = text(facet.column)
  if (!row && !column) return undefined
  const def = (field: string) => ({ field, type: 'nominal' })
  if (column && !row && (facet.columns ?? 0) > 0) return { facet: def(column), columns: facet.columns }
  const both: Json = {}
  if (row) both.row = def(row)
  if (column) both.column = def(column)
  return { facet: both }
}

function layerSpec(layer: Layer, tooltip: boolean): Json {
  const unit: Json = { data: { name: datasetOf(layer) }, mark: markOf(layer, tooltip) }

  const encoding: Json = {}
  const tooltips: Json[] = []
  for (const each of items(layer.encodings)) {
    const def = channelDef(each)
    if (!def) continue
    if (each.channel === 'tooltip') tooltips.push(def)
    else encoding[each.channel ?? 'x'] = def
  }
  if (tooltips.length) encoding.tooltip = tooltips.length === 1 ? tooltips[0] : tooltips
  if (Object.keys(encoding).length) unit.encoding = encoding

  const transform = items(layer.transforms).map(transformSpec).filter((t): t is Json => !!t)
  if (transform.length) unit.transform = transform
  return unit
}

function markOf(layer: Layer, tooltip: boolean): Json {
  const type = layer.mark ?? 'bar'
  const mark: Json = { type }
  const color = text(layer.color)
  if (color) mark.color = color
  /* Composite marks compute their parts; most mark properties do not apply. */
  if (COMPOSITE.has(type)) return mark
  if (tooltip) mark.tooltip = true
  if (LINES.has(type)) {
    if (layer.interpolate && layer.interpolate !== 'linear') mark.interpolate = layer.interpolate
    if (layer.showPoints) mark.point = true
  }
  if (SHAPES.has(type) && layer.filled === false) mark.filled = false
  const opacity = layer.opacity ?? 1
  if (opacity >= 0 && opacity < 1) mark.opacity = opacity
  if (CORNERED.has(type) && (layer.cornerRadius ?? 0) > 0) mark.cornerRadius = layer.cornerRadius
  if (type === 'arc' && (layer.innerRadius ?? 0) > 0) mark.innerRadius = layer.innerRadius
  if ((layer.strokeWidth ?? 0) > 0) mark.strokeWidth = layer.strokeWidth
  return mark
}

/** The Vega-Lite definition of one channel, or nothing when it says nothing. */
export function channelDef(encoding: Encoding): Json | undefined {
  const channel = encoding.channel ?? 'x'
  const field = text(encoding.field)
  const aggregate = encoding.aggregate && encoding.aggregate !== 'none' ? encoding.aggregate : undefined
  const highlight = text(encoding.highlightParam)
  const otherwise = scalar(encoding.valueIfNotSelected)

  if (!field && aggregate !== 'count') {
    if (!text(encoding.value)) return undefined
    const value = scalar(encoding.value)
    return highlight ? { condition: { param: highlight, value }, value: otherwise } : { value }
  }

  const def: Json = field ? { field, type: encoding.type ?? 'nominal' } : { type: 'quantitative' }
  if (aggregate) def.aggregate = aggregate
  if (encoding.bin) def.bin = (encoding.maxBins ?? 0) > 0 ? { maxbins: encoding.maxBins } : true
  if (encoding.timeUnit && encoding.timeUnit !== 'none') def.timeUnit = encoding.timeUnit
  if (WITH_SORT.has(channel)) {
    const sort = sortOf(channel, encoding.sort)
    if (sort !== undefined) def.sort = sort
  }
  if (WITH_STACK.has(channel) && encoding.stack && encoding.stack !== 'auto') {
    def.stack = encoding.stack === 'none' ? null : encoding.stack
  }
  const title = text(encoding.title)
  if (title) def.title = title

  if (WITH_SCALE.has(channel)) {
    const scale = scaleOf(encoding, channel)
    if (scale) def.scale = scale
  }
  const format = text(encoding.format)
  if (POSITION.has(channel)) {
    if (encoding.showAxis === false) def.axis = null
    else {
      const axis: Json = {}
      if (encoding.showGrid === false) axis.grid = false
      const angle = text(encoding.labelAngle)
      if (angle && Number.isFinite(Number(angle))) axis.labelAngle = Number(angle)
      if (format) axis.format = format
      if (Object.keys(axis).length) def.axis = axis
    }
  } else if (WITH_LEGEND.has(channel)) {
    if (encoding.showLegend === false) def.legend = null
    else if (format) def.legend = { format }
  } else if (WITH_FORMAT.has(channel) && format) {
    def.format = format
  }

  return highlight ? { condition: { param: highlight, ...def }, value: otherwise } : def
}

function sortOf(channel: string, sort: string | undefined): string | null | undefined {
  switch (sort) {
    case 'ascending':
    case 'descending':
      return sort
    case 'otherAscending':
      return channel === 'x' ? 'y' : 'x'
    case 'otherDescending':
      return channel === 'x' ? '-y' : '-x'
    default:
      return undefined
  }
}

function scaleOf(encoding: Encoding, channel: string): Json | undefined {
  const scale: Json = {}
  if (encoding.scaleType && encoding.scaleType !== 'auto') scale.type = encoding.scaleType
  if (encoding.scaleZero === false && encoding.type === 'quantitative') scale.zero = false
  const min = text(encoding.domainMin)
  const max = text(encoding.domainMax)
  if (min) scale.domainMin = scalar(min)
  if (max) scale.domainMax = scalar(max)
  const scheme = text(encoding.scheme)
  if (scheme && channel === 'color') scale.scheme = scheme
  return Object.keys(scale).length ? scale : undefined
}

/** One transform, or nothing while it is not filled in enough to mean anything. */
export function transformSpec(transform: Transform): Json | undefined {
  switch (transform.kind ?? 'filter') {
    case 'fold': {
      const fields = items(transform.fields).map(text).filter(Boolean)
      if (!fields.length) return undefined
      return { fold: fields, as: [text(transform.keyAs) || 'key', text(transform.valueAs) || 'value'] }
    }
    case 'calculate': {
      const as = text(transform.as)
      const expression = text(transform.expression)
      return as && expression ? { calculate: expression, as } : undefined
    }
    case 'extract': {
      /* A part of a field by a regular expression (#1295): what its group matches, as calculate replace. */
      const as = text(transform.as)
      const field = text(transform.field)
      const pattern = String(transform.pattern ?? '')
      if (!as || !field || !pattern) return undefined
      const quoted = (value: string) => JSON.stringify(value)
      const value = `datum[${quoted(field)}]`
      const whole = `regexp(${quoted(`^.*?(?:${pattern}).*$`)})`
      // A value the pattern does not match gives no value, as the shared applyTransforms does.
      return { calculate: `test(${whole}, ${value}) ? replace(${value}, ${whole}, '$1') : null`, as }
    }
    default:
      return filterOf(transform)
  }
}

function filterOf(transform: Transform): Json | undefined {
  const op = transform.op ?? 'eq'
  if (op === 'param') {
    const param = text(transform.param)
    return param ? { filter: { param } } : undefined
  }
  const field = text(transform.field)
  if (!field) return undefined
  if (op === 'valid') return { filter: { field, valid: true } }
  const raw = text(transform.value)
  const list = raw.split(',').map((each) => each.trim()).filter(Boolean).map(scalar)
  switch (op) {
    case 'eq':
      return { filter: { field, equal: scalar(raw) } }
    case 'neq':
      return { filter: { not: { field, equal: scalar(raw) } } }
    case 'oneOf':
      return list.length ? { filter: { field, oneOf: list } } : undefined
    case 'range':
      return list.length === 2 ? { filter: { field, range: list } } : undefined
    default:
      return raw ? { filter: { field, [op]: scalar(raw) } } : undefined
  }
}

function paramSpec(param: Param): Json {
  const name = text(param.name)
  const initial = text(param.value) ? json(param.value) : undefined
  if (param.kind === 'value') return { name, value: initial ?? null }
  const type = param.kind === 'interval' ? 'interval' : 'point'
  const select: Json = { type }
  const fields = items(param.fields).map(text).filter(Boolean)
  const encodings = items(param.encodings).map(String).filter(Boolean)
  if (fields.length) select.fields = fields
  if (encodings.length) select.encodings = encodings
  const spec: Json = { name, select }
  /* Legends bind point selections, scales bind intervals; the rest is not Vega-Lite. */
  if (param.bind === 'legend' && type === 'point') spec.bind = 'legend'
  if (param.bind === 'scales' && type === 'interval') spec.bind = 'scales'
  if (initial !== undefined) spec.value = initial
  return spec
}

/**
 * The spec at the size of the frame it is drawn in (#1287).
 *
 * A spec sized "container" asks Vega to measure the element it draws into
 * - the wrapper vega-embed puts inside the widget, which is only as large
 * as what was drawn in it. The chart then kept its first size, and its
 * labels and legend were cut at the widget's edge. Given in pixels, the
 * size is the total one: with autosize fit and contains padding, axes,
 * labels and legend are fitted inside it. Small multiples size themselves
 * and are left as they are.
 */
export function withSize(spec: TopLevelSpec, width: number, height: number): TopLevelSpec {
  const held = spec as unknown as Json
  if (held.width !== 'container' && held.height !== 'container') return spec
  const next: Json = { ...held }
  if (held.width === 'container') next.width = width > 0 ? Math.floor(width) : 300
  if (held.height === 'container') next.height = height > 0 ? Math.floor(height) : 200
  return next as unknown as TopLevelSpec
}
