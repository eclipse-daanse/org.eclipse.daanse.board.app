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
 * The chart recipe compiled to Vega-Lite (#1284): a fixture per mark, each
 * checked by Vega-Lite itself - a spec it warns about is a spec the recipe
 * should not have written.
 */
import { describe, expect, it } from 'vitest'
import { compile } from 'vega-lite'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { compileRecipe, RecipeError, withSize } from '../recipe'
import { modelledSettings } from '../settingsModel'
import { sampleDatasets, withDatasets } from '../sample'
import type { MarkType } from '../gen/MarkType'

void VegawidgetPackage.eINSTANCE

/** A recipe as a board stores it, adopted the way the widget adopts it. */
const recipe = (stored: Record<string, unknown>) => modelledSettings(stored)

/** What Vega-Lite says while compiling, warnings and errors alike. */
function complaintsOf(spec: object): string[] {
  const said: string[] = []
  const logger = {
    level(): number { return 0 },
    error: (...m: unknown[]) => { said.push(m.join(' ')); return logger },
    warn: (...m: unknown[]) => { said.push(m.join(' ')); return logger },
    info: () => logger,
    debug: () => logger,
  }
  compile(spec as never, { logger: logger as never })
  return said
}

const bars = (extra: Record<string, unknown> = {}) => ({
  mark: 'bar',
  encodings: [
    { channel: 'x', field: 'category', type: 'nominal' },
    { channel: 'y', field: 'amount', type: 'quantitative' },
  ],
  ...extra,
})

/* One fixture per mark: the encodings that mark is commonly drawn with. */
const FIXTURES: Record<MarkType, Record<string, unknown>> = {
  bar: bars(),
  line: { mark: 'line', interpolate: 'monotone', showPoints: true, encodings: [
    { channel: 'x', field: 'date', type: 'temporal', timeUnit: 'yearmonth' },
    { channel: 'y', field: 'amount', type: 'quantitative', aggregate: 'sum' },
    { channel: 'color', field: 'series', type: 'nominal', scheme: 'tableau10' },
  ] },
  area: { mark: 'area', opacity: 0.6, encodings: [
    { channel: 'x', field: 'date', type: 'temporal' },
    { channel: 'y', field: 'amount', type: 'quantitative', stack: 'normalize' },
    { channel: 'color', field: 'series', type: 'nominal' },
  ] },
  point: { mark: 'point', filled: false, encodings: [
    { channel: 'x', field: 'width', type: 'quantitative', scaleZero: false },
    { channel: 'y', field: 'height', type: 'quantitative', scaleType: 'log' },
    { channel: 'size', field: 'amount', type: 'quantitative' },
    { channel: 'shape', field: 'series', type: 'nominal' },
  ] },
  circle: { mark: 'circle', encodings: [
    { channel: 'x', field: 'width', type: 'quantitative' },
    { channel: 'y', field: 'height', type: 'quantitative' },
    { channel: 'opacity', value: '0.5' },
  ] },
  square: { mark: 'square', encodings: [
    { channel: 'x', field: 'width', type: 'quantitative' },
    { channel: 'y', field: 'height', type: 'quantitative' },
  ] },
  tick: { mark: 'tick', encodings: [
    { channel: 'x', field: 'amount', type: 'quantitative' },
    { channel: 'y', field: 'category', type: 'nominal' },
  ] },
  rule: { mark: 'rule', color: 'red', strokeWidth: 2, encodings: [
    { channel: 'y', field: 'amount', type: 'quantitative', aggregate: 'mean' },
  ] },
  rect: { mark: 'rect', encodings: [
    { channel: 'x', field: 'category', type: 'ordinal' },
    { channel: 'y', field: 'series', type: 'ordinal' },
    { channel: 'color', field: 'amount', type: 'quantitative', aggregate: 'mean', scheme: 'viridis' },
  ] },
  arc: { mark: 'arc', innerRadius: 50, encodings: [
    { channel: 'theta', field: 'amount', type: 'quantitative', stack: 'zero' },
    { channel: 'color', field: 'category', type: 'nominal' },
  ] },
  text: { mark: 'text', encodings: [
    { channel: 'x', field: 'category', type: 'nominal' },
    { channel: 'y', field: 'amount', type: 'quantitative' },
    { channel: 'text', field: 'amount', type: 'quantitative', format: ',.1f' },
  ] },
  trail: { mark: 'trail', encodings: [
    { channel: 'x', field: 'date', type: 'temporal' },
    { channel: 'y', field: 'amount', type: 'quantitative' },
    { channel: 'size', field: 'amount', type: 'quantitative' },
  ] },
  boxplot: { mark: 'boxplot', encodings: [
    { channel: 'x', field: 'category', type: 'nominal' },
    { channel: 'y', field: 'amount', type: 'quantitative', scaleZero: false },
  ] },
  errorbar: { mark: 'errorbar', encodings: [
    { channel: 'x', field: 'category', type: 'nominal' },
    { channel: 'y', field: 'amount', type: 'quantitative' },
  ] },
}

describe('compileRecipe', () => {
  for (const [mark, layer] of Object.entries(FIXTURES)) {
    it(`writes a ${mark} chart Vega-Lite compiles without a word`, () => {
      const spec = compileRecipe(recipe({ layers: [layer] }))
      expect((spec as { mark: { type: string } }).mark.type).toBe(mark)
      expect(complaintsOf(withDatasets(spec, sampleDatasets()))).toEqual([])
    })
  }

  it('writes the bar chart as Vega-Lite would have it written by hand', () => {
    expect(compileRecipe(recipe({ title: 'Sales', layers: [bars({ cornerRadius: 3 })] }))).toEqual({
      $schema: 'https://vega.github.io/schema/vega-lite/v6.json',
      background: 'transparent',
      title: 'Sales',
      width: 'container',
      height: 'container',
      autosize: { type: 'fit', contains: 'padding' },
      data: { name: 'table' },
      mark: { type: 'bar', tooltip: true, cornerRadius: 3 },
      encoding: {
        x: { field: 'category', type: 'nominal' },
        y: { field: 'amount', type: 'quantitative' },
      },
    })
  })

  it('leaves out what stays at its default', () => {
    const spec = compileRecipe(recipe({ tooltip: false, layers: [{ mark: 'line', encodings: [
      { channel: 'x', field: 'date', type: 'temporal', sort: 'none', stack: 'auto', aggregate: 'none', timeUnit: 'none' },
    ] }] })) as Record<string, any>
    expect(spec.mark).toEqual({ type: 'line' })
    expect(spec.encoding.x).toEqual({ field: 'date', type: 'temporal' })
    expect(spec.config).toBeUndefined()
  })

  it('draws a histogram from a binned field and a count without one', () => {
    const spec = compileRecipe(recipe({ layers: [{ mark: 'bar', encodings: [
      { channel: 'x', field: 'amount', type: 'quantitative', bin: true, maxBins: 20 },
      { channel: 'y', aggregate: 'count', type: 'quantitative' },
    ] }] })) as Record<string, any>
    expect(spec.encoding).toEqual({
      x: { field: 'amount', type: 'quantitative', bin: { maxbins: 20 } },
      y: { type: 'quantitative', aggregate: 'count' },
    })
    expect(complaintsOf(withDatasets(spec as never, sampleDatasets()))).toEqual([])
  })

  it('writes sort, stack, axis, legend and scale settings where Vega-Lite reads them', () => {
    const spec = compileRecipe(recipe({ legendPosition: 'bottom', layers: [{ mark: 'bar', encodings: [
      { channel: 'x', field: 'category', type: 'nominal', sort: 'otherDescending', labelAngle: '-45', showGrid: false, title: 'Category' },
      { channel: 'y', field: 'amount', type: 'quantitative', stack: 'none', domainMin: '0', domainMax: '100', format: ',.0f' },
      { channel: 'color', field: 'series', type: 'nominal', showLegend: false },
    ] }] })) as Record<string, any>
    expect(spec.encoding.x).toEqual({ field: 'category', type: 'nominal', sort: '-y', title: 'Category', axis: { grid: false, labelAngle: -45 } })
    expect(spec.encoding.y).toEqual({ field: 'amount', type: 'quantitative', stack: null, scale: { domainMin: 0, domainMax: 100 }, axis: { format: ',.0f' } })
    expect(spec.encoding.color).toEqual({ field: 'series', type: 'nominal', legend: null })
    expect(spec.config).toEqual({ legend: { orient: 'bottom' } })
    expect(complaintsOf(withDatasets(spec as never, sampleDatasets()))).toEqual([])
  })

  it('collects several tooltip encodings into one list', () => {
    const spec = compileRecipe(recipe({ layers: [bars({ encodings: [
      { channel: 'x', field: 'category', type: 'nominal' },
      { channel: 'tooltip', field: 'category', type: 'nominal' },
      { channel: 'tooltip', field: 'amount', type: 'quantitative', format: '.2f' },
    ] })] })) as Record<string, any>
    expect(spec.encoding.tooltip).toEqual([
      { field: 'category', type: 'nominal' },
      { field: 'amount', type: 'quantitative', format: '.2f' },
    ])
  })

  it('layers marks over each other, each on its dataset', () => {
    const spec = compileRecipe(recipe({ layers: [
      bars(),
      { mark: 'rule', dataset: 'targets', color: 'red', encodings: [{ channel: 'y', field: 'target', type: 'quantitative' }] },
    ] })) as Record<string, any>
    expect(spec.layer.map((l: any) => [l.mark.type, l.data.name])).toEqual([['bar', 'table'], ['rule', 'targets']])
    expect(spec.width).toBe('container')
    const datasets = { ...sampleDatasets(), targets: [{ target: 60 }] }
    expect(complaintsOf(withDatasets(spec as never, datasets))).toEqual([])
  })

  it('splits the chart into small multiples, sized by Vega-Lite', () => {
    const spec = compileRecipe(recipe({ facet: { column: 'series', columns: 3 }, layers: [bars()] })) as Record<string, any>
    expect(spec.facet).toEqual({ field: 'series', type: 'nominal' })
    expect(spec.columns).toBe(3)
    expect(spec.data).toEqual({ name: 'table' })
    expect(spec.spec.data).toBeUndefined()
    expect(spec.width).toBeUndefined()
    expect(complaintsOf(withDatasets(spec as never, sampleDatasets()))).toEqual([])
  })

  it('refuses small multiples over layers that draw different datasets', () => {
    const settings = recipe({ facet: { row: 'series' }, layers: [bars(), { ...bars(), dataset: 'other' }] })
    expect(() => compileRecipe(settings)).toThrow(RecipeError)
  })

  it('highlights what a selection holds and leaves the rest pale', () => {
    const spec = compileRecipe(recipe({
      params: [{ name: 'pick', kind: 'point', fields: ['category'] }],
      layers: [bars({ encodings: [
        { channel: 'x', field: 'category', type: 'nominal' },
        { channel: 'y', field: 'amount', type: 'quantitative' },
        { channel: 'color', field: 'category', type: 'nominal', highlightParam: 'pick', valueIfNotSelected: 'lightgray' },
        { channel: 'opacity', value: '1', highlightParam: 'pick', valueIfNotSelected: '0.3' },
      ] })],
    })) as Record<string, any>
    expect(spec.params).toEqual([{ name: 'pick', select: { type: 'point', fields: ['category'] } }])
    expect(spec.encoding.color).toEqual({ condition: { param: 'pick', field: 'category', type: 'nominal' }, value: 'lightgray' })
    expect(spec.encoding.opacity).toEqual({ condition: { param: 'pick', value: 1 }, value: 0.3 })
    expect(complaintsOf(withDatasets(spec as never, sampleDatasets()))).toEqual([])
  })

  it('zooms and pans a continuous chart through an interval bound to the scales', () => {
    const spec = compileRecipe(recipe({
      params: [{ name: 'zoom', kind: 'interval', encodings: ['x', 'y'], bind: 'scales' }, { name: 'legend', kind: 'point', fields: ['series'], bind: 'legend' }],
      layers: [{ mark: 'point', encodings: [
        { channel: 'x', field: 'width', type: 'quantitative' },
        { channel: 'y', field: 'height', type: 'quantitative' },
        { channel: 'color', field: 'series', type: 'nominal' },
      ] }],
    })) as Record<string, any>
    expect(spec.params).toEqual([
      { name: 'zoom', select: { type: 'interval', encodings: ['x', 'y'] }, bind: 'scales' },
      { name: 'legend', select: { type: 'point', fields: ['series'] }, bind: 'legend' },
    ])
    expect(complaintsOf(withDatasets(spec as never, sampleDatasets()))).toEqual([])
  })

  it('declares selections on the first layer and values on the chart', () => {
    const spec = compileRecipe(recipe({
      params: [{ name: 'pick', kind: 'point' }, { name: 'limit', kind: 'value', value: '50' }],
      layers: [bars(), { mark: 'rule', encodings: [{ channel: 'y', field: 'amount', type: 'quantitative', aggregate: 'mean' }] }],
    })) as Record<string, any>
    expect(spec.params).toEqual([{ name: 'limit', value: 50 }])
    expect(spec.layer[0].params).toEqual([{ name: 'pick', select: { type: 'point' } }])
    expect(spec.layer[1].params).toBeUndefined()
    expect(complaintsOf(withDatasets(spec as never, sampleDatasets()))).toEqual([])
  })

  it('writes filter, fold and calculate steps, and skips the unfinished ones', () => {
    const spec = compileRecipe(recipe({ params: [{ name: 'pick', kind: 'point' }], layers: [bars({ transforms: [
      { kind: 'filter', field: 'amount', op: 'gte', value: '40' },
      { kind: 'filter', field: 'category', op: 'oneOf', value: 'A, B ,C' },
      { kind: 'filter', field: 'amount', op: 'range', value: '10,90' },
      { kind: 'filter', field: 'category', op: 'neq', value: 'F' },
      { kind: 'filter', op: 'param', param: 'pick' },
      { kind: 'fold', fields: ['north', 'south'], keyAs: 'region' },
      { kind: 'calculate', as: 'double', expression: 'datum.amount * 2' },
      { kind: 'calculate', as: 'nothing' },
      { kind: 'filter', op: 'eq' },
    ] })] })) as Record<string, any>
    expect(spec.transform).toEqual([
      { filter: { field: 'amount', gte: 40 } },
      { filter: { field: 'category', oneOf: ['A', 'B', 'C'] } },
      { filter: { field: 'amount', range: [10, 90] } },
      { filter: { not: { field: 'category', equal: 'F' } } },
      { filter: { param: 'pick' } },
      { fold: ['north', 'south'], as: ['region', 'value'] },
      { calculate: 'datum.amount * 2', as: 'double' },
    ])
  })

  it('writes an extract step as calculate, and Vega computes the part it names (#1295)', async () => {
    const spec = compileRecipe(recipe({ layers: [bars({ transforms: [
      { kind: 'extract', field: 'Baumart', pattern: '^(\\S+)', as: 'genus' },
      { kind: 'extract', field: 'Baumart', as: 'unfinished' },
    ] })] })) as Record<string, any>
    expect(spec.transform).toEqual([{
      calculate: 'test(regexp("^.*?(?:^(\\\\S+)).*$"), datum["Baumart"]) ? replace(datum["Baumart"], regexp("^.*?(?:^(\\\\S+)).*$"), \'$1\') : null',
      as: 'genus',
    }])
    const { parse, View } = await import('vega')
    const withRows = { ...spec, data: { values: [{ Baumart: 'Tilia cordata, Winterlinde', amount: 1, category: 'a' }, { Baumart: '', amount: 2, category: 'b' }] } }
    const compiled = compile(withRows as never).spec as any
    const view = new View(parse(compiled), { renderer: 'none' })
    await view.runAsync()
    const named = compiled.data.find((d: any) => (d.transform ?? []).some((t: any) => t.type === 'formula'))
    expect(view.data(named.name).map((row: any) => row.genus)).toEqual(['Tilia', null])
    view.finalize()
  })

  it('says why a chart without layers gives no chart', () => {
    expect(() => compileRecipe(recipe({ layers: [] }))).toThrow(RecipeError)
  })

  it('names its data and inlines none of it', () => {
    const spec = compileRecipe(recipe({ layers: [bars()] }))
    expect(JSON.stringify(spec)).not.toMatch(/"values"|"url"/)
  })

  it('is drawn at the size of its frame, labels and legend inside it', () => {
    const spec = withSize(compileRecipe(recipe({ layers: [bars({ encodings: [
      { channel: 'x', field: 'category', type: 'nominal', labelAngle: '-30' },
      { channel: 'y', field: 'amount', type: 'quantitative' },
      { channel: 'color', field: 'category', type: 'nominal' },
    ] })] })), 760.6, 420) as Record<string, any>
    expect([spec.width, spec.height, spec.autosize]).toEqual([760, 420, { type: 'fit', contains: 'padding' }])
    expect(complaintsOf(withDatasets(spec as never, sampleDatasets()))).toEqual([])
    /* An unmeasured frame still draws; small multiples keep sizing themselves. */
    expect((withSize(compileRecipe(recipe({ layers: [bars()] })), 0, 0) as any).width).toBe(300)
    const facet = compileRecipe(recipe({ facet: { column: 'series' }, layers: [bars()] }))
    expect(withSize(facet, 500, 300)).toBe(facet)
  })
})
