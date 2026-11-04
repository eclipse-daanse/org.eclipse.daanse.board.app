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
import { nextTick } from 'vue'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ControlwidgetsPackage } from '../gen/ControlwidgetsPackage'
import ToggleWidget from '../ToggleWidget.vue'
import { ToggleSettingsImpl } from '../gen/ToggleSettingsImpl'
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'
import { bound, settingsOf, show } from './helpers'

void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

function toggle(overrides: Record<string, unknown> = {}) {
  return settingsOf(() => new ToggleSettingsImpl(), {
    label: new VariableWrapper('Off'),
    onLabel: new VariableWrapper('On'),
    onColor: new VariableWrapper('#16a34a'),
    onValue: new VariableWrapper('true'),
    offValue: new VariableWrapper('false'),
    target: new VariableWrapper(''),
    ...overrides,
  })
}

describe('ToggleWidget', () => {
  it('a press writes the other state into the variable', async () => {
    const { variable, target } = bound('light', false)
    const { wrapper } = await show(ToggleWidget, toggle({ target }))

    await wrapper.find('button').trigger('click')
    expect(variable.value).toBe(true)
    await nextTick()
    await wrapper.find('button').trigger('click')
    expect(variable.value).toBe(false)
  })

  it('writes the configured values where they are not booleans', async () => {
    const { variable, target } = bound('mode', 'manual')
    const { wrapper } = await show(
      ToggleWidget,
      toggle({ target, onValue: new VariableWrapper('auto'), offValue: new VariableWrapper('manual') }),
    )
    await wrapper.find('button').trigger('click')
    expect(variable.value).toBe('auto')
  })

  it('shows a variable changed elsewhere', async () => {
    const { variable, target } = bound('light', false)
    const { wrapper } = await show(ToggleWidget, toggle({ target }))
    expect(wrapper.find('button').attributes('aria-pressed')).toBe('false')
    expect(wrapper.find('button').text()).toBe('Off')

    variable.value = true
    await nextTick()
    expect(wrapper.find('button').attributes('aria-pressed')).toBe('true')
    expect(wrapper.find('button').text()).toBe('On')
  })

  it('sends change with the value and the previous value', async () => {
    const { target } = bound('light', false)
    const { wrapper, sent, emit } = await show(ToggleWidget, toggle({ target }))
    await wrapper.find('button').trigger('click')

    expect(emit.mock.calls[0][0]).toBe('widget:ToggleWidget:change')
    const [payload] = sent('change')
    expect(payload).toBeInstanceOf(ControlPayloadImpl)
    expect(payload.value).toBe(true)
    expect(payload.previousValue).toBe(false)
  })

  it('keeps its state itself without a variable', async () => {
    const settings = toggle()
    const { wrapper } = await show(ToggleWidget, settings)
    await wrapper.find('button').trigger('click')
    await nextTick()
    expect(settings.target.value).toBe(true)
    expect(wrapper.find('button').attributes('aria-pressed')).toBe('true')
  })

  it('takes no press while disabled: no write, no event', async () => {
    const { variable, target } = bound('light', false)
    const { wrapper, emit } = await show(ToggleWidget, toggle({ target, disabled: new VariableWrapper('true') }))
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    await wrapper.find('button').trigger('click')
    expect(variable.value).toBe(false)
    expect(emit).not.toHaveBeenCalled()
  })

  it('is turned and enabled through its actions', async () => {
    const { variable, target } = bound('light', false)
    const { wrapper, api, emit } = await show(ToggleWidget, toggle({ target, disabled: new VariableWrapper('true') }))
    api().setValue(true)
    api().enable()
    await nextTick()
    expect(variable.value).toBe(true)
    expect(emit).not.toHaveBeenCalled()
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
  })
})
