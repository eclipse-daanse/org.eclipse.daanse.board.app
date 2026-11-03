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
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref, toRef } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  FilterOperator,
  SelectionPick,
  WorkspaceFactory,
  type Widget,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WrapperSettingsPackage } from '../gen/WrapperSettingsPackage'
import WidgetWrapper from '../WidgetWrapper.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as never
}

void WrapperSettingsPackage.eINSTANCE

/*
 * #1216: the part of its source's answer a widget takes is chosen on the
 * widget, applied before the widget sees its data, and no widget has to
 * know about it. So the widget here is the plainest one there is - it
 * reads through useDatasourceRepository and shows what it got.
 */

const answer = {
  readings: [
    { type: 'temperature', value: 9 },
    { type: 'humidity', value: 71 },
    { type: 'temperature', value: 10 },
  ],
}

let received: unknown = undefined

const Probe = defineComponent({
  props: { datasourceId: { type: String, default: '' } },
  setup(props) {
    const data = ref<unknown>(null)
    useDatasourceRepository(toRef(props, 'datasourceId'), 'object', data)
    return () => {
      received = data.value
      return h('pre', JSON.stringify(data.value))
    }
  },
})

function source() {
  const getData = vi.fn(async () => structuredClone(answer))
  return { getData, subscribe() {}, unsubscribe() {}, callEvent() {} }
}

function widgetReading(configure: (widget: Widget) => void = () => {}): Widget {
  const factory = WorkspaceFactory.eINSTANCE
  const widget = factory.createWidget()
  widget.uid = 'w1'
  widget.type = 'Probe'
  widget.config = { datasourceId: 'ds' } as never
  widget.wrapperConfig = {} as never
  configure(widget)
  return widget
}

function mounted(widget: Widget, store = source()) {
  const wrapper = mount(WidgetWrapper, {
    props: { widget: widget as never, editEnabled: false } as never,
    global: {
      provide: {
        [WIDGET_REPOSITORY as unknown as symbol]: {
          getWidget: (type: string) => (type === 'Probe' ? { component: Probe, settingsComponent: 'div' } : undefined),
          getAllWidgets: () => ({ Probe: { component: Probe, settingsComponent: 'div' } }),
          getWidgets: () => ({ Probe: { component: Probe, settingsComponent: 'div' } }),
          onChange: () => () => {},
        },
        [DATASOURCE_REPOSITORY as unknown as symbol]: { getDatasource: () => store },
      },
      stubs: { teleport: true },
    },
  })
  return { wrapper, store }
}

const temperatures = (widget: Widget) => {
  const factory = WorkspaceFactory.eINSTANCE
  const selection = factory.createDataSelection()
  selection.path = 'readings'
  const filter = factory.createDataFilter()
  filter.field = 'type'
  filter.operator = FilterOperator.EQUALS
  filter.value = 'temperature'
  selection.filters.push(filter)
  widget.selection = selection
}

describe('a widget with a data selection', () => {
  it('gets the whole answer without one', async () => {
    mounted(widgetReading())
    await flushPromises()

    expect(received).toEqual(answer)
  })

  it('gets only the part its selection names', async () => {
    mounted(widgetReading(temperatures))
    await flushPromises()

    expect(received).toEqual([
      { type: 'temperature', value: 9 },
      { type: 'temperature', value: 10 },
    ])
  })

  /*
   * The selection is edited while the widget is on the screen - that is
   * what the data tab does. A change has to reach it, and has to be taken
   * from the answer already there rather than asked of the source again.
   */
  it('follows a changed selection without asking its source again', async () => {
    const widget = widgetReading(temperatures)
    const { store } = mounted(widget)
    await flushPromises()
    const asked = store.getData.mock.calls.length

    widget.selection!.pick = SelectionPick.LAST
    await flushPromises()
    expect(received).toEqual([{ type: 'temperature', value: 10 }])

    widget.selection!.filters.get(0).value = 'humidity'
    await flushPromises()
    expect(received).toEqual([{ type: 'humidity', value: 71 }])

    expect(store.getData.mock.calls.length).toBe(asked)
  })

  it('gets the whole answer back once the selection is taken away', async () => {
    const widget = widgetReading(temperatures)
    mounted(widget)
    await flushPromises()

    widget.selection = undefined as never
    await flushPromises()
    expect(received).toEqual(answer)
  })
})
