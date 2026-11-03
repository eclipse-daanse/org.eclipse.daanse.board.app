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
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { ChartsettingsPackage } from '../gen/ChartsettingsPackage'
import { ChartSettingsImpl } from '../gen/ChartSettingsImpl'
import ChartWidget from '../ChartWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/*
 * The canvas is not under test; what it is handed is. Each chart kind is
 * the same stub, which writes down the annotations it was given.
 */
vi.mock('vue-chartjs', () => {
  const Canvas = {
    props: ['data', 'options'],
    template: `<div class="canvas" :data-annotations="Object.keys(options?.plugins?.annotation?.annotations ?? {}).join(',')" />`,
  }
  return { Bar: Canvas, Line: Canvas, Radar: Canvas, Pie: Canvas, Doughnut: Canvas, PolarArea: Canvas }
})

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useVariableRepository: () => ({ wrapParameters: (params: unknown) => params }),
    useDatasourceRepository: (_id: unknown, _type: string, data: { value: unknown }) => {
      data.value = { labels: ['a', 'b'], datasets: [{ label: 'one', data: [1, 2] }] }
      return { update: vi.fn() }
    },
  }
})

void ChartsettingsPackage.eINSTANCE

async function show(settings: ChartSettingsImpl) {
  const wrapper = mount(ChartWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', configv: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  return wrapper
}

const annotations = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.find('.canvas').attributes('data-annotations')

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the chart all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the canvas: a reference line added is drawn', async () => {
    const settings = new ChartSettingsImpl()
    const wrapper = await show(settings)
    expect(annotations(wrapper)).toBe('')

    settings.horizontalLines.add({ value: 5, color: '#ff0000', width: 1 })
    await nextTick()

    expect(annotations(wrapper)).toBe('hline_0')
  })
})
