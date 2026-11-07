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
 * #1275: how a chart looks on the board - the curve of its lines, the
 * labels of its time axis, the colours and font of the theme, the zones
 * without their dashed edge - built by a real Chart.js, as Legend.spec.ts
 * does, with a canvas that draws nothing.
 */

import { describe, it, expect, vi, beforeAll } from 'vitest'
import { markRaw, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { Chart } from 'chart.js'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import ChartWidget from '../ChartWidget.vue'
import { ChartSettingsImpl } from '../gen/ChartSettingsImpl'
import { ChartsettingsPackage } from '../gen/ChartsettingsPackage'
import { isOn, numberOf, readThemeTokens } from '../chartTheme'

vi.mock('vue-router', () => ({ useRoute: () => ({ params: { pageid: 'page' } }) }))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useDatasourceRepository: (_id: unknown, _type: string, data: any) => {
      data.value = {
        labels: ['2026-11-01T00:00:00Z', '2026-11-02T00:00:00Z', '2026-11-03T00:00:00Z'],
        datasets: [{ label: 'pF 30 cm', data: [3.9, 3.8, 3.9] }],
      }
      return { data, update: vi.fn() }
    },
    /* As the real one does: every value comes back as text. */
    useVariableRepository: () => ({
      wrapParameters: (params: Record<string, { value: unknown }>) =>
        Object.fromEntries(Object.entries(params).map(([key, held]) => [key, { get value() { return String(held.value) } }])),
    }),
  }
})

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

async function chartOf(settings: ChartSettingsImpl) {
  const view = mount(ChartWidget, {
    props: { datasourceId: 'ds', configv: markRaw(settings) } as any,
    global: { provide },
    attachTo: document.body,
  })
  await flushPromises()
  await nextTick()
  const chart = Chart.getChart(view.find('canvas').element as HTMLCanvasElement)!
  return { view, chart }
}

function lineChart() {
  const settings = new ChartSettingsImpl()
  settings.chartType.value = 'line'
  return settings
}

describe('a line chart', () => {
  it('looks as before where the new settings are not set', async () => {
    const { view, chart } = await chartOf(lineChart())

    expect((chart.data.datasets[0] as any).tension).toBe(0)
    const ticks = (chart.options.scales as any).x.ticks
    expect(ticks.maxRotation).toBe(50)
    expect(ticks.maxTicksLimit).toBeUndefined()
    view.unmount()
  })

  it('curves its lines and keeps its time labels level and few', async () => {
    const settings = lineChart() as any
    settings.lineTension = new VariableWrapper<number>(0.35)
    settings.xTicksHorizontal = new VariableWrapper<boolean>(true)
    settings.xTicksLimit = new VariableWrapper<number>(8)

    const { view, chart } = await chartOf(settings)

    expect((chart.data.datasets[0] as any).tension).toBe(0.35)
    const ticks = (chart.options.scales as any).x.ticks
    expect(ticks.maxRotation).toBe(0)
    expect(ticks.autoSkip).toBe(true)
    expect(ticks.maxTicksLimit).toBe(8)
    view.unmount()
  })

  it('takes its colours and font from the theme, and follows a change of it', async () => {
    document.documentElement.style.setProperty('--color-dim', 'rgb(1, 2, 3)')
    document.documentElement.style.setProperty('--color-fg', 'rgb(4, 5, 6)')
    document.documentElement.style.setProperty('--font-sans', 'Barlow')
    const { view, chart } = await chartOf(lineChart())

    const scales = chart.options.scales as any
    expect(scales.x.ticks.color).toBe('rgb(1, 2, 3)')
    expect(scales.y.ticks.font.family).toBe('Barlow')
    expect((chart.options.plugins as any).legend.labels.color).toBe('rgb(4, 5, 6)')
    expect(chart.options.maintainAspectRatio).toBe(false)

    document.documentElement.style.setProperty('--color-dim', 'rgb(7, 8, 9)')
    document.documentElement.setAttribute('data-theme', 'light')
    await flushPromises()
    await nextTick()
    expect((Chart.getChart(view.find('canvas').element as HTMLCanvasElement)!.options.scales as any).x.ticks.color).toBe('rgb(7, 8, 9)')
    view.unmount()
  })

  it('draws a zone without a dashed edge when its edit mode is off, the name small at its left', async () => {
    const settings = lineChart() as any
    settings.annotationsEditMode = new VariableWrapper<boolean>(false)
    settings.horizontalBoxes.add({ yMin: 3.6, yMax: 5, color: '#E5393514', label: 'Trockenstress' } as any)

    const { view, chart } = await chartOf(settings)

    /* The options as handed over; the resolved ones are proxies that
      treat an object position as scriptable. */
    const box = (chart.config as any)._config.options.plugins.annotation.annotations.hbox_0
    expect(box.borderWidth).toBe(0)
    expect(box.borderDash ?? []).toEqual([])
    expect(box.draggable).toBe(false)
    expect(box.label.position).toEqual({ x: 'start', y: 'center' })
    expect(box.label.font.size).toBe(11)
    view.unmount()
  })
})

describe('a setting after the wrappers', () => {
  it('is read as the flag or number it stands for', () => {
    expect(isOn('false')).toBe(false)
    expect(isOn('true')).toBe(true)
    expect(isOn(true)).toBe(true)
    expect(numberOf('0.35', 0)).toBe(0.35)
    expect(numberOf('undefined', 0)).toBe(0)
    expect(numberOf(undefined, 3)).toBe(3)
  })

  it('falls back to what the chart drew with where the page has no tokens', () => {
    expect(readThemeTokens(null).dim).toBe('#666666')
  })
})
