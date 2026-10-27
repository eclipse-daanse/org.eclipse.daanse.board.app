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
 * The chart as Chart.js builds it, legend included.
 *
 * What the integration build showed: a series' line set to red turned the
 * line red and left its legend swatch on the colour the data source had
 * proposed. The legend draws a line series by its point, and the point
 * kept the colour behind the line. Only a real Chart shows that - the
 * data handed to it looked right - so the canvas gets a context that
 * draws nothing and Chart.js does the rest.
 */

import { describe, it, expect, vi, beforeAll } from 'vitest'
import { markRaw, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { Chart } from 'chart.js'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import ChartWidget from '../ChartWidget.vue'
import { ChartSettingsImpl } from '../gen/ChartSettingsImpl'
import { ChartsettingsPackage } from '../gen/ChartsettingsPackage'
import { ChartsettingsFactory } from '../gen/ChartsettingsFactory'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'

vi.mock('vue-router', () => ({ useRoute: () => ({ params: { pageid: 'page' } }) }))

/* Two series, each in the colours a composer proposes. */
vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useDatasourceRepository: (_id: unknown, _type: string, data: any) => {
      data.value = {
        labels: ['a', 'b', 'c'],
        datasets: [
          { label: 'first', data: [1, 2, 3], borderColor: 'rgb(0, 128, 0)', backgroundColor: 'rgba(0, 128, 0, 0.2)' },
          { label: 'second', data: [3, 2, 1], borderColor: 'rgb(0, 0, 255)', backgroundColor: 'rgba(0, 0, 255, 0.2)' },
        ],
      }
      return { data, update: vi.fn() }
    },
    useVariableRepository: () => ({ wrapParameters: (params: any) => params }),
  }
})

/* A context that accepts every call and draws nothing. */
beforeAll(() => {
  const context: any = new Proxy(
    { measureText: () => ({ width: 10 }), getLineDash: () => [], createLinearGradient: () => ({ addColorStop() {} }) },
    {
      get: (target: any, key) => (key in target ? target[key] : typeof key === 'string' && key !== 'then' ? () => undefined : undefined),
      set: (target: any, key, value) => { target[key] = value; return true },
    },
  )
  HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement) {
    context.canvas = this
    return context
  } as any
  if (typeof globalThis.ResizeObserver === 'undefined') {
    globalThis.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} } as any
  }
})

void ChartsettingsPackage.eINSTANCE

const provide = {
  [EVENT_ACTIONS_REGISTRY as symbol]: { registerInstance() {}, unregisterInstance() {} },
  [identifiers.TINY_EMITTER as unknown as symbol]: { on() {}, off() {}, emit() {} },
}

async function legendOf(settings: ChartSettingsImpl) {
  const view = mount(ChartWidget, {
    props: { datasourceId: 'ds', configv: markRaw(settings) } as any,
    global: { provide },
    attachTo: document.body,
  })
  await flushPromises()
  await nextTick()
  const canvas = view.find('canvas').element as HTMLCanvasElement
  const chart = Chart.getChart(canvas)
  expect(chart, 'a Chart on the canvas').toBeDefined()
  const items = chart!.legend!.legendItems!
  return { view, chart: chart!, items }
}

function lineSeries(index: number, colour?: string) {
  const series = ChartsettingsFactory.eINSTANCE.createSeriesSettings()
  series.seriesIndex!.value = index as any
  series.chartType = new VariableWrapper<string>('line')
  if (colour) series.borderColor = new VariableWrapper<string>(colour)
  return series
}

describe('the chart legend', () => {
  it("shows a series in the colour its line is drawn in", async () => {
    const settings = new ChartSettingsImpl()
    settings.chartType.value = 'line'
    settings.seriesSettings.add(lineSeries(0, 'rgb(255, 0, 0)'))
    settings.seriesSettings.add(lineSeries(1))

    const { view, chart, items } = await legendOf(settings)

    expect(chart.data.datasets[0].borderColor).toBe('rgb(255, 0, 0)')
    expect(items[0].fillStyle).toBe('rgb(255, 0, 0)')
    expect(items[0].strokeStyle).toBe('rgb(255, 0, 0)')
    /* A series nobody changed keeps the colour proposed for it */
    expect(items[1].fillStyle).toBe('rgb(0, 0, 255)')

    view.unmount()
  })

  it('shows a point colour that was set over the line colour', async () => {
    const settings = new ChartSettingsImpl()
    settings.chartType.value = 'line'
    const series = lineSeries(0, 'rgb(255, 0, 0)')
    series.pointColor = new VariableWrapper<string>('rgb(255, 165, 0)')
    settings.seriesSettings.add(series)

    const { view, items } = await legendOf(settings)

    expect(items[0].fillStyle).toBe('rgb(255, 165, 0)')
    view.unmount()
  })

  it('follows the chart-wide line colour where no series has its own', async () => {
    const settings = new ChartSettingsImpl()
    settings.chartType.value = 'line'
    settings.borderColor.value = 'rgb(128, 0, 128)'

    const { view, items } = await legendOf(settings)

    expect(items.map((item) => item.fillStyle)).toEqual(['rgb(128, 0, 128)', 'rgb(128, 0, 128)'])
    view.unmount()
  })

  it('draws a stored dash pattern as dashes, and the old solid value as a line', async () => {
    const settings = new ChartSettingsImpl()
    settings.chartType.value = 'line'
    const dashed = lineSeries(0)
    dashed.borderDash = new VariableWrapper<unknown>('5,5')
    const solid = lineSeries(1)
    solid.borderDash = new VariableWrapper<unknown>('durchgezogen')
    settings.seriesSettings.add(dashed)
    settings.seriesSettings.add(solid)

    const { view, chart } = await legendOf(settings)

    expect((chart.data.datasets[0] as any).borderDash).toEqual([5, 5])
    expect((chart.data.datasets[1] as any).borderDash).toEqual([])
    view.unmount()
  })
})
