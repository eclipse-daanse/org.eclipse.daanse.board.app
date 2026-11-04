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
import MultiStateWidget from '../MultiStateWidget.vue'
import { MultiStateSettingsImpl } from '../gen/MultiStateSettingsImpl'
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'
import { ControlOptionImpl } from '../gen/ControlOptionImpl'
import { bound, settingsOf, show } from './helpers'

void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

function option(label: string, value: string, color = '') {
  const made: any = new ControlOptionImpl()
  made.label = new VariableWrapper(label)
  made.value = new VariableWrapper(value)
  made.color = new VariableWrapper(color)
  return made
}

function multiState(overrides: Record<string, unknown> = {}) {
  const settings = settingsOf(() => new MultiStateSettingsImpl(), {
    label: new VariableWrapper('None'),
    target: new VariableWrapper(''),
    ...overrides,
  })
  settings.states.addAll([option('Low', 'low', '#16a34a'), option('Mid', 'mid'), option('High', 'high', '#dc2626')])
  return settings
}

describe('MultiStateWidget', () => {
  it('each press writes the next state, the last back to the first', async () => {
    const { variable, target } = bound('level', 'low')
    const { wrapper } = await show(MultiStateWidget, multiState({ target }))
    const face = () => wrapper.find('button')

    await face().trigger('click')
    expect(variable.value).toBe('mid')
    await nextTick()
    await face().trigger('click')
    expect(variable.value).toBe('high')
    await nextTick()
    await face().trigger('click')
    expect(variable.value).toBe('low')
  })

  it('shows the state a variable changed elsewhere holds, with its label and colour', async () => {
    const { variable, target } = bound('level', 'low')
    const { wrapper } = await show(MultiStateWidget, multiState({ target }))
    expect(wrapper.find('button').text()).toBe('Low')

    variable.value = 'high'
    await nextTick()
    expect(wrapper.find('button').text()).toBe('High')
    expect(wrapper.find('button').attributes('style')).toContain('background: rgb(220, 38, 38)')
    expect(wrapper.find('button').attributes('data-state')).toBe('2')
  })

  it('holding none of its states, shows the shared label and goes to the first', async () => {
    const { variable, target } = bound('level', 'unknown')
    const { wrapper } = await show(MultiStateWidget, multiState({ target }))
    expect(wrapper.find('button').text()).toBe('None')
    await wrapper.find('button').trigger('click')
    expect(variable.value).toBe('low')
  })

  it('sends change with the value and the previous value', async () => {
    const { target } = bound('level', 'mid')
    const { wrapper, sent, emit } = await show(MultiStateWidget, multiState({ target }))
    await wrapper.find('button').trigger('click')

    expect(emit.mock.calls[0][0]).toBe('widget:MultiStateWidget:change')
    const [payload] = sent('change')
    expect(payload).toBeInstanceOf(ControlPayloadImpl)
    expect(payload.value).toBe('high')
    expect(payload.previousValue).toBe('mid')
  })

  it('takes no press while disabled: no write, no event', async () => {
    const { variable, target } = bound('level', 'low')
    const { wrapper, emit } = await show(MultiStateWidget, multiState({ target, disabled: new VariableWrapper('true') }))
    await wrapper.find('button').trigger('click')
    expect(variable.value).toBe('low')
    expect(emit).not.toHaveBeenCalled()
  })

  it('shows a state added to the list', async () => {
    const { target } = bound('level', 'off')
    const settings = multiState({ target })
    const { wrapper } = await show(MultiStateWidget, settings)
    expect(wrapper.find('button').text()).toBe('None')
    settings.states.add(option('Off', 'off'))
    await nextTick()
    expect(wrapper.find('button').text()).toBe('Off')
  })

  it('is set and enabled through its actions', async () => {
    const { variable, target } = bound('level', 'low')
    const { wrapper, api, emit } = await show(MultiStateWidget, multiState({ target, disabled: new VariableWrapper('true') }))
    api().setValue('high')
    api().enable()
    await nextTick()
    expect(variable.value).toBe('high')
    expect(emit).not.toHaveBeenCalled()
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
  })
})
