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

// @vitest-environment jsdom
/*
 * Drawing a spec the way every chart is drawn (#1283): with interpreted
 * expressions and without loading anything by URL.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { TopLevelSpec } from 'vega-lite'
import { drawChart, drawnSize, fitTo, refusingLoader, replaceData, restoreSignals, signalsOf, UrlRefusedError } from '../embedChart'
import { compileRecipe } from '../recipe'
import { sampleDatasets, withDatasets } from '../sample'
import { modelledSettings } from '../settingsModel'

const host = () => {
  const el = document.createElement('div')
  document.body.appendChild(el)
  return el
}

afterEach(() => {
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('drawChart', () => {
  it('draws the sample as SVG marks', async () => {
    const chart = await drawChart(host(), withDatasets(compileRecipe(modelledSettings({ title: 'Sales' })), sampleDatasets()), { renderer: 'svg' })
    try {
      const svg = chart.view.container()?.querySelector('svg')
      expect(svg).toBeTruthy()
      expect(svg!.querySelectorAll('.mark-rect path').length).toBe(6)
      expect(svg!.textContent).toContain('Sales')
    } finally {
      chart.finalize()
    }
  })

  it('evaluates expressions without the Function constructor', async () => {
    const spec: TopLevelSpec = {
      data: { values: [{ a: 1 }, { a: 2 }] },
      transform: [{ calculate: 'datum.a * 10', as: 'b' }],
      mark: 'point',
      encoding: { x: { field: 'b', type: 'quantitative' } },
    }
    const original = globalThis.Function
    const refuse = () => {
      throw new Error('Function constructor used')
    }
    globalThis.Function = new Proxy(original, { construct: refuse, apply: refuse }) as FunctionConstructor
    let chart
    try {
      chart = await drawChart(host(), spec, { renderer: 'svg' })
    } finally {
      globalThis.Function = original
    }
    try {
      expect(chart.view.data('data_0').map((d: { b: number }) => d.b)).toEqual([10, 20])
    } finally {
      chart.finalize()
    }
  })

  it('loads nothing a spec names by URL', async () => {
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)
    const spec: TopLevelSpec = {
      data: { url: 'https://example.org/secret.json' },
      mark: 'bar',
      encoding: { x: { field: 'a', type: 'nominal' } },
    }
    const warn = vi.spyOn(console, 'error').mockImplementation(() => {})
    const chart = await drawChart(host(), spec, { renderer: 'svg' }).catch((e) => e)
    if (!(chart instanceof Error)) {
      await chart.view.runAsync().catch(() => {})
      chart.finalize()
    }
    expect(fetchSpy).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
    warn.mockRestore()
  })
})

describe('replaceData', () => {
  it('puts new rows into the drawn chart and keeps what the reader picked', async () => {
    const spec = withDatasets(
      compileRecipe(modelledSettings({ params: [{ name: 'limit', kind: 'value', value: '3' }] })),
      sampleDatasets(),
    )
    const chart = await drawChart(host(), spec, { renderer: 'svg' })
    try {
      chart.view.signal('limit', 9)
      await chart.view.runAsync()
      expect(await replaceData(chart.view, 'table', [{ category: 'Z', amount: 5 }])).toBe(true)
      expect(chart.view.data('table')).toEqual([expect.objectContaining({ category: 'Z', amount: 5 })])
      expect(chart.view.signal('limit')).toBe(9)
      expect(await replaceData(chart.view, 'nothing', [])).toBe(false)
    } finally {
      chart.finalize()
    }
  })
})

describe('replaceData and the size', () => {
  it('fits the chart into its size again when the new rows need more room', async () => {
    const spec = {
      width: 400,
      height: 240,
      autosize: { type: 'fit', contains: 'padding' },
      datasets: { table: [] },
      data: { name: 'table' },
      mark: 'bar',
      encoding: {
        x: { field: 'f', type: 'nominal', axis: { labelAngle: -30 } },
        y: { field: 's', type: 'quantitative' },
        color: { field: 'z', type: 'nominal' },
      },
    } as unknown as TopLevelSpec
    const chart = await drawChart(host(), spec, { renderer: 'svg' })
    try {
      const rows = Array.from({ length: 12 }, (_, i) => ({ f: `Area with a long name ${i}`, s: i, z: i % 2 ? 'dry stress' : 'moist' }))
      await replaceData(chart.view, 'table', rows)
      const bounds = (chart.view.scenegraph() as unknown as { root: { bounds: { x1: number; x2: number; y1: number; y2: number } } }).root.bounds
      expect(bounds.x2 - bounds.x1).toBeLessThanOrEqual(400)
      expect(bounds.y2 - bounds.y1).toBeLessThanOrEqual(240)
    } finally {
      chart.finalize()
    }
  })
})

describe('fitTo', () => {
  const layered = {
    width: 300,
    height: 200,
    autosize: { type: 'fit', contains: 'padding' },
    datasets: { table: Array.from({ length: 24 }, (_, i) => ({ t: `2026-11-0${(i % 9) + 1}T10:00:00Z`, v: i, w: i % 3 })) },
    resolve: { scale: { y: 'independent' } },
    layer: [
      { data: { name: 'table' }, mark: 'line', encoding: { x: { field: 't', type: 'temporal' }, y: { field: 'v', type: 'quantitative' } } },
      { data: { name: 'table' }, mark: 'bar', encoding: { x: { field: 't', type: 'temporal' }, y: { field: 'w', type: 'quantitative', axis: { orient: 'right' } } } },
    ],
  } as unknown as TopLevelSpec

  it('lays a two-layer chart out inside the new size (#1305)', async () => {
    const chart = await drawChart(host(), layered, { renderer: 'svg' })
    try {
      await fitTo(chart.view, 400, 240)
      const { bounds } = (chart.view.scenegraph() as unknown as { root: { bounds: { x1: number; x2: number; y1: number; y2: number } } }).root
      expect(bounds.x2 - bounds.x1).toBeLessThanOrEqual(400)
      expect(bounds.y2 - bounds.y1).toBeLessThanOrEqual(240)
    } finally {
      chart.finalize()
    }
  })

  it('lays a chart that stayed larger than its frame out once more, from a pixel smaller (#1305)', async () => {
    /* A view as far as fitTo uses it, whose first layout stays 10 px too tall. */
    const sizes: Array<[number, number]> = []
    let tall = true
    const view = {
      w: 0,
      h: 0,
      width(w: number) { this.w = w; return this },
      height(h: number) { this.h = h; sizes.push([this.w, h]); if (h !== 437) tall = false; return this },
      resize() { return this },
      async runAsync() { return this },
      padding: () => ({ top: 5, bottom: 5, left: 5, right: 5 }),
      scenegraph() { return { root: { bounds: { x1: 0, x2: 874, y1: 0, y2: tall ? 437 : 427 } } } },
    }
    await fitTo(view as never, 884, 437)
    expect(sizes).toEqual([[884, 437], [883, 436], [884, 437]])
    expect(drawnSize(view as never)).toEqual({ width: 884, height: 437 })
  })

  it('leaves a chart that fits after one layout alone', async () => {
    const sizes: number[] = []
    const view = {
      width(w: number) { sizes.push(w); return this },
      height() { return this },
      resize() { return this },
      async runAsync() { return this },
      padding: () => ({ top: 5, bottom: 5, left: 5, right: 5 }),
      scenegraph: () => ({ root: { bounds: { x1: 0, x2: 870, y1: 0, y2: 420 } } }),
    }
    await fitTo(view as never, 884, 437)
    expect(sizes).toEqual([884])
  })

  it('lays the chart out again at the size it has - for text that changed, not the frame', async () => {
    const chart = await drawChart(host(), layered, { renderer: 'svg' })
    try {
      const resize = vi.spyOn(chart.view, 'resize')
      await fitTo(chart.view, 300, 200)
      expect(resize).toHaveBeenCalled()
    } finally {
      chart.finalize()
    }
  })
})

describe('signalsOf and restoreSignals', () => {
  it('carry what a reader set over to a chart drawn anew', async () => {
    const spec = withDatasets(
      compileRecipe(modelledSettings({ params: [{ name: 'limit', kind: 'value', value: '3' }] })),
      sampleDatasets(),
    )
    const before = await drawChart(host(), spec, { renderer: 'svg' })
    before.view.signal('limit', 42)
    await before.view.runAsync()
    const kept = signalsOf(before.view)
    before.finalize()
    const after = await drawChart(host(), spec, { renderer: 'svg', config: { mark: { color: 'red' } } })
    try {
      expect(after.view.signal('limit')).toBe(3)
      await restoreSignals(after.view, kept)
      expect(after.view.signal('limit')).toBe(42)
    } finally {
      after.finalize()
    }
  })
})

describe('refusingLoader', () => {
  it('refuses every URL before a request is made', async () => {
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)
    await expect(refusingLoader().load('data/cars.json')).rejects.toBeInstanceOf(UrlRefusedError)
    await expect(refusingLoader().load('https://example.org/x.csv')).rejects.toBeInstanceOf(UrlRefusedError)
    expect(fetchSpy).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
