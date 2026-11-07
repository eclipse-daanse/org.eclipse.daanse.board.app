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
import { drawChart, refusingLoader, replaceData, restoreSignals, signalsOf, UrlRefusedError } from '../embedChart'
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
