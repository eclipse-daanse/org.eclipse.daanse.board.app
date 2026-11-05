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
import { defineComponent, h } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { WorkspaceFactory, type Widget } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WrapperSettingsPackage } from '../gen/WrapperSettingsPackage'
import WidgetWrapper from '../WidgetWrapper.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

void WrapperSettingsPackage.eINSTANCE

const Probe = defineComponent({ setup: () => () => h('span', 'probe') })
const registered = { Probe: { component: Probe, settingsComponent: 'div' } }

function mounted(frame: Record<string, unknown>) {
  const widget: Widget = WorkspaceFactory.eINSTANCE.createWidget()
  widget.uid = 'w1'
  widget.type = 'Probe'
  widget.config = {} as never
  widget.wrapperConfig = Object.fromEntries(
    Object.entries(frame).map(([key, value]) => [key, new VariableWrapper(value)]),
  ) as never
  return mount(WidgetWrapper, {
    props: { widget: widget as never, editEnabled: false } as never,
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

/* The frame's background, which the root element carries for its stylesheet */
function background(wrapper: ReturnType<typeof mounted>): string {
  const container = wrapper.find('.wrapper-container').element as HTMLElement
  return container.style.getPropertyValue('--frame-background').trim()
}

/*
 * #1260: the transparency and the blur of a frame had no effect on most
 * widgets, because a frame without a stored colour kept an opaque theme
 * background - and a blur shows only through a background that lets the
 * board through.
 */
describe('the transparency of a frame', () => {
  it('leaves the theme colour as it is while the frame is opaque', async () => {
    const wrapper = mounted({ backgroundColor: '', transparency: 255 })
    await flushPromises()
    expect(background(wrapper)).toBe('var(--color-pane)')
  })

  it('reaches the theme colour when no colour is stored', async () => {
    const wrapper = mounted({ backgroundColor: '', transparency: 128 })
    await flushPromises()
    expect(background(wrapper)).toBe('color-mix(in srgb, var(--color-pane) 50.2%, transparent)')
  })

  it('combines the background transparency with the overall one on the theme colour', async () => {
    const wrapper = mounted({ backgroundColorTransparence: 128, transparency: 128 })
    await flushPromises()
    // 128 * 128 / 255 = 64
    expect(background(wrapper)).toBe('color-mix(in srgb, var(--color-pane) 25.1%, transparent)')
  })

  it('reaches a stored colour as before', async () => {
    const wrapper = mounted({ backgroundColor: '#fff', transparency: 128 })
    await flushPromises()
    expect(background(wrapper)).toBe('#ffffff80')
  })

  it('reads values the form writes as strings', async () => {
    const wrapper = mounted({ backgroundColor: '#336699', backgroundColorTransparence: '128', transparency: '' })
    await flushPromises()
    expect(background(wrapper)).toBe('#33669980')
  })

  it('reaches a stored colour that is not plain hex', async () => {
    const wrapper = mounted({ backgroundColor: 'rgb(10, 20, 30)', transparency: 51 })
    await flushPromises()
    expect(background(wrapper)).toBe('color-mix(in srgb, rgb(10, 20, 30) 20%, transparent)')
  })
})

describe('the blur of a frame', () => {
  it('blurs what lies behind a translucent frame without a stored colour', async () => {
    const wrapper = mounted({ backgroundColor: '', transparency: 120, blur: '6' })
    await flushPromises()
    const container = wrapper.find('.wrapper-container').element as HTMLElement
    expect(container.style.getPropertyValue('--blur-amount')).toBe('6px')
    expect(background(wrapper)).toContain('transparent')
  })
})
