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
import { defineComponent, h, inject } from 'vue'
import { FRAMELESS_ATTRIBUTE, WIDGET_EDIT_MODE } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { WorkspaceFactory, type Widget } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WrapperSettingsPackage } from '../gen/WrapperSettingsPackage'
import { WrapperSettingsImpl } from '../gen/WrapperSettingsImpl'
import WidgetWrapper from '../WidgetWrapper.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

void WrapperSettingsPackage.eINSTANCE

const Probe = defineComponent({ setup: () => () => h('span', 'probe') })
/* A frameless widget that says whether it is edited, as a light source does (#1242) */
const Light = defineComponent({
  setup: () => {
    const editing = inject<{ value: boolean } | undefined>(WIDGET_EDIT_MODE, undefined)
    return () => h('span', { class: 'light' }, editing?.value ? 'edited' : 'shown')
  },
})
const registered = {
  Probe: { component: Probe, settingsComponent: 'div' },
  Light: { component: Light, settingsComponent: 'div', frameless: true },
}

function widgetWithFrame(frame: object): Widget {
  const widget = WorkspaceFactory.eINSTANCE.createWidget()
  widget.uid = 'w1'
  widget.type = 'Probe'
  widget.config = {} as never
  widget.wrapperConfig = frame as never
  return widget
}

function mounted(widget: Widget, editEnabled = false) {
  return mount(WidgetWrapper, {
    props: { widget: widget as never, editEnabled } as never,
    global: {
      provide: {
        [WIDGET_REPOSITORY as unknown as symbol]: {
          getWidget: (type: string) => registered[type as keyof typeof registered],
          getAllWidgets: () => registered,
          onChange: () => () => {},
        },
      },
      stubs: { teleport: true },
    },
  })
}

const title = (wrapper: ReturnType<typeof mounted>) => wrapper.find('.font-semibold').text()
const titleSize = (wrapper: ReturnType<typeof mounted>) =>
  (wrapper.find('.font-semibold').element as HTMLElement).style.fontSize

/*
 * #1233: the frame is edited while the widget is on the screen - in the
 * settings preview and on the board behind it - and has to follow there,
 * not only once the board is mounted again.
 */
describe('the frame around a widget', () => {
  it('follows a value written into one of its settings', async () => {
    const widget = widgetWithFrame({ title: new VariableWrapper('Before') })
    const wrapper = mounted(widget)
    await flushPromises()
    expect(title(wrapper)).toBe('Before')

    ;(widget.wrapperConfig as any).title.value = 'After'
    await flushPromises()
    expect(title(wrapper)).toBe('After')
  })

  it('follows a setting replaced inside the modelled frame', async () => {
    const frame = new WrapperSettingsImpl()
    frame.title = new VariableWrapper('Before') as never
    const widget = widgetWithFrame(frame)
    const wrapper = mounted(widget)
    await flushPromises()
    expect(title(wrapper)).toBe('Before')

    frame.title = new VariableWrapper('After') as never
    await flushPromises()
    expect(title(wrapper)).toBe('After')
  })

  it('follows the frame being replaced, as opening the settings does', async () => {
    const widget = widgetWithFrame({ title: new VariableWrapper('Before'), titleFontSize: new VariableWrapper(12) })
    const wrapper = mounted(widget)
    await flushPromises()
    expect(title(wrapper)).toBe('Before')
    expect(titleSize(wrapper)).toBe('12px')

    const frame = new WrapperSettingsImpl()
    frame.title = new VariableWrapper('After') as never
    frame.titleFontSize = new VariableWrapper('20') as never
    widget.wrapperConfig = frame as never
    await flushPromises()
    expect(title(wrapper)).toBe('After')
    expect(titleSize(wrapper)).toBe('20px')

    frame.title.value = 'Again'
    await flushPromises()
    expect(title(wrapper)).toBe('Again')
  })

  it('gives a frame that replaces the first one its defaults too', async () => {
    const widget = widgetWithFrame({})
    mounted(widget)
    await flushPromises()

    widget.wrapperConfig = { title: new VariableWrapper('Later') } as never
    await flushPromises()
    expect((widget.wrapperConfig as any).borderRadius?.value).toBe(8)
  })
})

describe('a frameless widget', () => {
  function light() {
    const widget = widgetWithFrame({ title: new VariableWrapper('Lamp') })
    widget.type = 'Light'
    return widget
  }

  it('gets no frame and no title, and lets every pointer through while shown', async () => {
    const wrapper = mounted(light())
    await flushPromises()
    const container = wrapper.find('.wrapper-container')
    expect(container.classes()).toContain('wrapper-container--frameless')
    expect(container.classes()).toContain('wrapper-container--pass-through')
    expect(container.attributes(FRAMELESS_ATTRIBUTE)).toBe('')
    expect(wrapper.find('.font-semibold').exists()).toBe(false)
    expect(wrapper.find('.light').text()).toBe('shown')
  })

  it('takes the pointer and is told so while edited', async () => {
    const wrapper = mounted(light(), true)
    await flushPromises()
    const container = wrapper.find('.wrapper-container')
    expect(container.classes()).toContain('wrapper-container--frameless')
    expect(container.classes()).not.toContain('wrapper-container--pass-through')
    expect(wrapper.find('.light').text()).toBe('edited')
  })

  it('leaves the frame of any other widget as it is', async () => {
    const wrapper = mounted(widgetWithFrame({ title: new VariableWrapper('Chart') }))
    await flushPromises()
    expect(wrapper.find('.wrapper-container').classes()).not.toContain('wrapper-container--frameless')
    expect(wrapper.find('.wrapper-container').attributes(FRAMELESS_ATTRIBUTE)).toBeUndefined()
    expect(title(wrapper)).toBe('Chart')
  })
})
