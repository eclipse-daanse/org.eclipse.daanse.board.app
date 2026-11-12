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
 * Starter charts (#1292): recipes to begin from, written into the model -
 * layers, encodings, selections - so the form shows them like any chart
 * built by hand. Each is filled with columns of the data the chart reads:
 * the first text, number and date columns found in its rows. A reader
 * changes the fields afterwards like any other.
 */

import { VegawidgetFactory } from './gen/VegawidgetFactory'
import type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
import type { StarterChart } from './gen/StarterChart'
import type { Encoding } from './gen/Encoding'
import type { Layer } from './gen/Layer'
import type { Row } from './sample'

const factory = () => VegawidgetFactory.eINSTANCE

export type ColumnKind = 'text' | 'number' | 'date'

/** The columns of the rows and what their values look like, in the order they come. */
export function columnsOf(rows: Row[]): Array<{ name: string; kind: ColumnKind }> {
  const names: string[] = []
  for (const row of rows.slice(0, 50)) for (const key of Object.keys(row)) if (!names.includes(key)) names.push(key)
  const looks = (name: string): ColumnKind => {
    const values = rows.slice(0, 50).map((row) => row[name]).filter((value) => value !== null && value !== undefined && value !== '')
    if (!values.length) return 'text'
    if (values.every((value) => typeof value === 'number' || (typeof value === 'string' && Number.isFinite(Number(value))))) return 'number'
    if (values.every((value) => value instanceof Date || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value) && !Number.isNaN(Date.parse(value))))) return 'date'
    return 'text'
  }
  return names.map((name) => ({ name, kind: looks(name) }))
}

/** The columns a starter fills its encodings with; a missing kind falls back to another. */
function picks(rows: Row[]) {
  const columns = columnsOf(rows)
  const of = (kind: ColumnKind) => columns.filter((column) => column.kind === kind).map((column) => column.name)
  const texts = of('text')
  const numbers = of('number')
  const dates = of('date')
  const any = columns.map((column) => column.name)
  return {
    category: texts[0] ?? any[0] ?? 'category',
    second: texts[1] ?? texts[0] ?? any[1] ?? 'series',
    amount: numbers[0] ?? any[1] ?? 'amount',
    other: numbers[1] ?? numbers[0] ?? 'value',
    time: dates[0],
  }
}

type EncodingSpec = Partial<Pick<Encoding, 'channel' | 'field' | 'type' | 'aggregate' | 'bin' | 'stack' | 'value' | 'highlightParam' | 'valueIfNotSelected' | 'labelAngle' | 'scaleZero'>>

function layerOf(mark: Layer['mark'], encodings: EncodingSpec[], extra: Partial<Layer> = {}): Layer {
  const layer = factory().createLayer()
  layer.mark = mark
  Object.assign(layer, extra)
  for (const each of encodings) {
    const encoding = factory().createEncoding()
    Object.assign(encoding, each)
    layer.encodings.add(encoding)
  }
  return layer
}

/**
 * Replaces the layers, selections and small multiples with the starter
 * chart, filled from the rows; the choice is then empty again. Nothing
 * happens for none.
 */
export function applyStarter(settings: VegaWidgetSettings, starter: StarterChart | undefined, rows: Row[]): boolean {
  if (!starter || starter === 'none') return false
  const p = picks(rows)
  const x = p.time
    ? { channel: 'x' as const, field: p.time, type: 'temporal' as const }
    : { channel: 'x' as const, field: p.category, type: 'nominal' as const }
  const layers: Layer[] = []
  const params: Array<{ name: string; kind: 'point' | 'interval'; fields?: string[]; encodings?: Array<'x' | 'y'> }> = []

  switch (starter) {
    case 'bar':
      layers.push(layerOf('bar', [
        { channel: 'x', field: p.category, type: 'nominal', labelAngle: '0' },
        { channel: 'y', field: p.amount, type: 'quantitative', aggregate: 'sum' },
      ]))
      break
    case 'stackedBar':
      layers.push(layerOf('bar', [
        { channel: 'x', field: p.category, type: 'nominal' },
        { channel: 'y', field: p.amount, type: 'quantitative', aggregate: 'sum' },
        { channel: 'color', field: p.second, type: 'nominal' },
      ]))
      break
    case 'groupedBar':
      layers.push(layerOf('bar', [
        { channel: 'x', field: p.category, type: 'nominal' },
        { channel: 'xOffset', field: p.second, type: 'nominal' },
        { channel: 'y', field: p.amount, type: 'quantitative', aggregate: 'sum' },
        { channel: 'color', field: p.second, type: 'nominal' },
      ]))
      break
    case 'line':
      layers.push(layerOf('line', [x, { channel: 'y', field: p.amount, type: 'quantitative' }], { showPoints: true }))
      break
    case 'area':
      layers.push(layerOf('area', [
        x,
        { channel: 'y', field: p.amount, type: 'quantitative', aggregate: 'sum' },
        { channel: 'color', field: p.second, type: 'nominal' },
      ], { opacity: 0.8 }))
      break
    case 'scatter':
      layers.push(layerOf('circle', [
        { channel: 'x', field: p.amount, type: 'quantitative', scaleZero: false },
        { channel: 'y', field: p.other, type: 'quantitative', scaleZero: false },
        { channel: 'color', field: p.category, type: 'nominal' },
        { channel: 'tooltip', field: p.category, type: 'nominal' },
      ]))
      break
    case 'heatmap':
      layers.push(layerOf('rect', [
        { channel: 'x', field: p.category, type: 'nominal' },
        { channel: 'y', field: p.second, type: 'nominal' },
        { channel: 'color', field: p.amount, type: 'quantitative', aggregate: 'mean' },
      ]))
      break
    case 'histogram':
      layers.push(layerOf('bar', [
        { channel: 'x', field: p.amount, type: 'quantitative', bin: true },
        { channel: 'y', type: 'quantitative', aggregate: 'count' },
      ]))
      break
    case 'boxplot':
      layers.push(layerOf('boxplot', [
        { channel: 'x', field: p.category, type: 'nominal' },
        { channel: 'y', field: p.amount, type: 'quantitative', scaleZero: false },
      ]))
      break
    case 'donut':
      layers.push(layerOf('arc', [
        { channel: 'theta', field: p.amount, type: 'quantitative', aggregate: 'sum' },
        { channel: 'color', field: p.category, type: 'nominal' },
      ], { innerRadius: 50 }))
      break
    case 'brush':
      /* Brush and link: an interval over the points highlights them, a rule shows their mean. */
      params.push({ name: 'brush', kind: 'interval', encodings: ['x', 'y'] })
      layers.push(layerOf('circle', [
        { channel: 'x', field: p.amount, type: 'quantitative', scaleZero: false },
        { channel: 'y', field: p.other, type: 'quantitative', scaleZero: false },
        { channel: 'color', field: p.category, type: 'nominal', highlightParam: 'brush', valueIfNotSelected: 'lightgray' },
      ]))
      break
    default:
      return false
  }

  settings.layers.clear()
  settings.params.clear()
  settings.facet = undefined as never
  for (const layer of layers) settings.layers.add(layer)
  for (const each of params) {
    const param = factory().createParam()
    param.name = each.name
    param.kind = each.kind
    for (const field of each.fields ?? []) param.fields.add(field)
    for (const channel of each.encodings ?? []) param.encodings.add(channel)
    settings.params.add(param)
  }
  settings.starter = 'none'
  return true
}

/** Every starter chart, for the tests and the palette of choices. */
export const STARTERS: StarterChart[] = ['bar', 'stackedBar', 'groupedBar', 'line', 'area', 'scatter', 'heatmap', 'histogram', 'boxplot', 'donut', 'brush']
