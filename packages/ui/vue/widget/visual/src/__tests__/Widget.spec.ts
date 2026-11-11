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
 * ********************************************************************/

// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import VisualWidget from '../VisualWidget.vue'
import { VisualSettingsImpl } from '../gen/VisualSettingsImpl'
import { VisualwidgetsPackage } from '../gen/VisualwidgetsPackage'
import { VisualKind } from '../gen/VisualKind'

void VisualwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/*
 * What the source answered, set per test, and where the widget holds it,
 * for a later answer. The answer comes as it does from a source: the
 * request is on its way first, and the data arrives a moment later - unless
 * a test holds it back.
 */
let answered: unknown = null
let held: { value: unknown } | undefined
let holdBack = false
let loading: { value: boolean } | undefined

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  const { ref } = await import('vue')
  return {
    ...actual,
    useDatasourceRepository: (_id: unknown, _shape: unknown, target: { value: unknown }) => {
      held = target
      loading = ref(true)
      const answer = answered
      if (!holdBack) {
        queueMicrotask(() => {
          target.value = answer
          loading!.value = false
        })
      }
      return { update: vi.fn(), loading, error: ref(null) }
    },
  }
})

/* jsdom has neither a canvas nor WebGL: the chart is a recorder. */
const chart = {
  setOption: vi.fn(),
  dispatchAction: vi.fn(),
  resize: vi.fn(),
  dispose: vi.fn(),
  handlers: {} as Record<string, (params: object) => void>,
  on(event: string, handler: (params: object) => void) {
    chart.handlers[event] = handler
  },
}
vi.mock('../echarts', () => ({ createChart: () => chart }))

globalThis.ResizeObserver ??= class {
  observe() {}
  disconnect() {}
} as unknown as typeof ResizeObserver

const SALES = {
  headers: ['Caption', '1997', '1998'],
  rows: [
    ['Drink', 24597, 30010],
    ['Food', 191940, 210000],
  ],
}

const emitted = vi.fn()

async function show(settings = new VisualSettingsImpl()) {
  const wrapper = mount(VisualWidget, {
    props: { datasourceId: 'ds1', id: 'w1', configv: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: emitted, on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  return wrapper
}

/** What the chart was last told to draw. */
const lastDrawn = () => chart.setOption.mock.calls.at(-1)?.[0]

describe('VisualWidget', () => {
  beforeEach(() => {
    answered = SALES
    holdBack = false
    chart.setOption.mockClear()
    emitted.mockClear()
  })

  it('draws what the source answered, as bars in 3D unless told otherwise', async () => {
    await show()
    expect(lastDrawn().series[0].type).toBe('bar3D')
    expect(lastDrawn().xAxis3D.data).toEqual(['Drink', 'Food'])
  })

  /*
   * The kind is set on the very instance the widget holds - which is what
   * the settings form does - so nothing but EMF can say it changed.
   */
  it('draws the kind chosen in the settings, started afresh', async () => {
    const settings = new VisualSettingsImpl()
    await show(settings)

    settings.kind = VisualKind.SUNBURST
    await flushPromises()

    expect(lastDrawn().series[0].type).toBe('sunburst')
    expect(chart.setOption.mock.calls.at(-1)?.[1]).toMatchObject({ notMerge: true })
  })

  it('moves to a new answer of the same shape rather than drawing it afresh', async () => {
    await show(new VisualSettingsImpl())

    held!.value = { headers: SALES.headers, rows: [['Drink', 1, 2], ['Food', 3, 9]] }
    await flushPromises()
    expect(chart.setOption.mock.calls.at(-1)?.[1]).toMatchObject({ notMerge: false })
  })

  it('writes no title where a stored board gives back a wrapper holding an empty object', async () => {
    const settings = new VisualSettingsImpl()
    const title = new VariableWrapper('')
    ;(title as unknown as { value: unknown }).value = {}
    settings.title = title
    await show(settings)

    expect(lastDrawn().title).toEqual({ show: false, text: '' })
  })

  it('follows a wrapped setting whose value changes', async () => {
    const settings = new VisualSettingsImpl()
    settings.title = new VariableWrapper('Sales')
    await show(settings)
    expect(lastDrawn().title.text).toBe('Sales')

    settings.title.value = 'Sales by year'
    await flushPromises()

    expect(lastDrawn().title.text).toBe('Sales by year')
  })

  it('follows a plain setting set on the same instance', async () => {
    const settings = new VisualSettingsImpl()
    await show(settings)

    expect(lastDrawn().grid3D.viewControl.autoRotate).toBe(false)

    settings.autoRotate = true
    await flushPromises()

    expect(lastDrawn().grid3D.viewControl.autoRotate).toBe(true)
  })

  it('says in words why it draws nothing, rather than showing an empty canvas', async () => {
    answered = { headers: ['Name'], rows: [['a']] }
    const wrapper = await show()
    expect(wrapper.find('.visual__problem').text()).toContain('Problem.needsNumbers')
    expect(chart.setOption).not.toHaveBeenCalled()
  })

  it('names no problem while the source is still loading, and the problem once the answer is empty', async () => {
    holdBack = true
    const wrapper = await show()
    expect(wrapper.find('.visual__problem').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('Problem.')

    held!.value = null
    loading!.value = false
    await flushPromises()
    expect(wrapper.find('.visual__problem').text()).toContain('Problem.noData')
  })

  it('names the problem when a request comes back with nothing, though the data never changed', async () => {
    holdBack = true
    const wrapper = await show()
    loading!.value = false
    await flushPromises()
    expect(wrapper.find('.visual__problem').text()).toContain('Problem.noData')
  })

  it('keeps quiet again while a newer request is on its way', async () => {
    answered = null
    const wrapper = await show()
    expect(wrapper.find('.visual__problem').exists()).toBe(true)

    loading!.value = true
    await flushPromises()
    expect(wrapper.find('.visual__problem').exists()).toBe(false)
  })

  it('takes the levels of a crossjoin from its members, not from a caption that holds the separator', async () => {
    const tuple = (gender: string, income: string) => [
      { Caption: gender, UName: `[Gender].[${gender}]` },
      { Caption: income, UName: `[Yearly Income].[${income}]` },
    ]
    answered = {
      headers: ['Caption', 'Unit Sales'],
      rows: [
        ['F - $30K - $50K', 10],
        ['F - $50K - $70K', 20],
        ['M - $30K - $50K', 30],
      ],
      rowProperties: {
        'F - $30K - $50K': tuple('F', '$30K - $50K'),
        'F - $50K - $70K': tuple('F', '$50K - $70K'),
        'M - $30K - $50K': tuple('M', '$30K - $50K'),
      },
    }
    const settings = new VisualSettingsImpl()
    settings.kind = VisualKind.SUNBURST
    await show(settings)

    const rings = lastDrawn().series[0].data
    expect(rings.map((ring: { name: string }) => ring.name)).toEqual(['F', 'M'])
    expect(rings[0].children.map((ring: { name: string }) => ring.name)).toEqual(['$30K - $50K', '$50K - $70K'])
  })

  it('tells the board what was clicked', async () => {
    await show()
    chart.handlers.click({ name: 'Food', value: [1, 0, 191940] })
    expect(emitted).toHaveBeenCalledWith(
      'widget:VisualWidget:click',
      expect.objectContaining({ widgetId: 'w1', payload: expect.objectContaining({ name: 'Food', value: [1, 0, 191940] }) }),
    )
  })


  it('stands still until the reader turns it, and a double click brings it back', async () => {
    const wrapper = await show()
    expect(lastDrawn().grid3D.viewControl.autoRotate).toBe(false)

    await wrapper.find('.visual__canvas').trigger('dblclick')
    expect(lastDrawn()).toEqual({ grid3D: { viewControl: { alpha: 24, beta: 38, distance: 380 } } })
  })

  it('lets go of its chart when it leaves the board', async () => {
    const wrapper = await show()
    wrapper.unmount()
    expect(chart.dispose).toHaveBeenCalled()
  })
})
