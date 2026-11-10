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
import TextFieldWidget from '../TextFieldWidget.vue'
import NumberFieldWidget from '../NumberFieldWidget.vue'
import { TextFieldSettingsImpl } from '../gen/TextFieldSettingsImpl'
import { NumberFieldSettingsImpl } from '../gen/NumberFieldSettingsImpl'
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'
import { bound, settingsOf, show } from './helpers'

void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

function textField(overrides: Record<string, unknown> = {}) {
  return settingsOf(() => new TextFieldSettingsImpl(), {
    label: new VariableWrapper('Name'),
    target: new VariableWrapper(''),
    placeholder: new VariableWrapper('Type a name'),
    ...overrides,
  })
}

function numberField(overrides: Record<string, unknown> = {}) {
  return settingsOf(() => new NumberFieldSettingsImpl(), {
    label: new VariableWrapper('Limit'),
    target: new VariableWrapper(''),
    min: new VariableWrapper('0'),
    max: new VariableWrapper('100'),
    step: new VariableWrapper('0.5'),
    unit: new VariableWrapper('km/h'),
    placeholder: new VariableWrapper('none'),
    ...overrides,
  })
}

async function type(wrapper: any, text: string) {
  const input = wrapper.find('input')
  ;(input.element as HTMLInputElement).value = text
  await input.trigger('input')
  return input
}

const shown = (wrapper: any) => (wrapper.find('input').element as HTMLInputElement).value

describe('TextFieldWidget', () => {
  it('writes what is typed once it is committed, by leaving the field or by Enter', async () => {
    const { variable, target } = bound('name', 'Ada')
    const { wrapper } = await show(TextFieldWidget, textField({ target }))
    const input = await type(wrapper, 'Grace')
    expect(variable.value).toBe('Ada')
    await input.trigger('blur')
    expect(variable.value).toBe('Grace')

    await type(wrapper, 'Linus')
    await input.trigger('keydown', { key: 'Enter' })
    expect(variable.value).toBe('Linus')
  })

  it('shows a variable changed elsewhere, and its placeholder', async () => {
    const { variable, target } = bound('name', 'Ada')
    const { wrapper } = await show(TextFieldWidget, textField({ target }))
    expect(shown(wrapper)).toBe('Ada')
    expect(wrapper.find('input').attributes('placeholder')).toBe('Type a name')
    variable.value = 'Grace'
    await nextTick()
    expect(shown(wrapper)).toBe('Grace')
  })

  it('sends change on commit, input while typing at most every 100 ms, and submit on Enter', async () => {
    vi.useFakeTimers()
    try {
      const { target } = bound('name', 'Ada')
      const { wrapper, sent, emit } = await show(TextFieldWidget, textField({ target }))
      await type(wrapper, 'G')
      await type(wrapper, 'Gr')
      const input = await type(wrapper, 'Gra')
      expect(sent('input').map((p) => p.value)).toEqual(['G'])
      vi.advanceTimersByTime(150)
      expect(sent('input').map((p) => p.value)).toEqual(['G', 'Gra'])
      expect(sent('input')[0].previousValue).toBe('Ada')
      expect(sent('change')).toHaveLength(0)

      await input.trigger('keydown', { key: 'Enter' })
      const [change] = sent('change')
      expect(change).toBeInstanceOf(ControlPayloadImpl)
      expect(change.value).toBe('Gra')
      expect(change.previousValue).toBe('Ada')
      const [submitted] = sent('submit')
      expect(submitted.value).toBe('Gra')
      expect(submitted.previousValue).toBe('Ada')
      const types = emit.mock.calls.map(([t]) => t)
      expect(types.indexOf('widget:TextFieldWidget:change')).toBeLessThan(types.indexOf('widget:TextFieldWidget:submit'))
    } finally {
      vi.useRealTimers()
    }
  })

  it('drops the draft on Escape', async () => {
    const { variable, target } = bound('name', 'Ada')
    const { wrapper, sent } = await show(TextFieldWidget, textField({ target }))
    const input = await type(wrapper, 'Grace')
    await input.trigger('keydown', { key: 'Escape' })
    await input.trigger('blur')
    expect(variable.value).toBe('Ada')
    expect(shown(wrapper)).toBe('Ada')
    expect(sent('change')).toHaveLength(0)
  })

  it('takes no input while disabled: no write, no event', async () => {
    const { variable, target } = bound('name', 'Ada')
    const { wrapper, emit } = await show(TextFieldWidget, textField({ target, disabled: new VariableWrapper('true') }))
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    const input = await type(wrapper, 'Grace')
    await input.trigger('keydown', { key: 'Enter' })
    await input.trigger('blur')
    expect(variable.value).toBe('Ada')
    expect(emit).not.toHaveBeenCalled()
  })

  it('is set and enabled through its actions', async () => {
    const { variable, target } = bound('name', 'Ada')
    const { wrapper, api, emit } = await show(TextFieldWidget, textField({ target, disabled: new VariableWrapper('true') }))
    api().setValue('Grace')
    api().enable()
    await nextTick()
    expect(variable.value).toBe('Grace')
    expect(emit).not.toHaveBeenCalled()
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })
})

describe('NumberFieldWidget', () => {
  it('writes a number, kept between min and max and on its steps, once committed', async () => {
    const { variable, target } = bound('limit', 10)
    const { wrapper } = await show(NumberFieldWidget, numberField({ target }))
    const input = await type(wrapper, '42.3')
    expect(variable.value).toBe(10)
    await input.trigger('blur')
    expect(variable.value).toBe(42.5)

    await type(wrapper, '250')
    await input.trigger('keydown', { key: 'Enter' })
    expect(variable.value).toBe(100)

    await type(wrapper, '-3')
    await input.trigger('blur')
    expect(variable.value).toBe(0)
  })

  it('writes nothing for what is no number, and goes back to the variable', async () => {
    const { variable, target } = bound('limit', 10)
    const { wrapper, sent } = await show(NumberFieldWidget, numberField({ target }))
    const input = await type(wrapper, '')
    await input.trigger('blur')
    await nextTick()
    expect(variable.value).toBe(10)
    expect(shown(wrapper)).toBe('10')
    expect(sent('change')).toHaveLength(0)
  })

  it('shows a variable changed elsewhere, with its unit, limits, step and placeholder', async () => {
    const { variable, target } = bound('limit', 10)
    const { wrapper } = await show(NumberFieldWidget, numberField({ target }))
    expect(shown(wrapper)).toBe('10')
    const input = wrapper.find('input')
    expect(input.attributes('min')).toBe('0')
    expect(input.attributes('max')).toBe('100')
    expect(input.attributes('step')).toBe('0.5')
    expect(input.attributes('placeholder')).toBe('none')
    expect(wrapper.find('.control-field__unit').text()).toBe('km/h')
    variable.value = 55
    await nextTick()
    expect(shown(wrapper)).toBe('55')
  })

  it('sends change, input and submit with the value and the previous value', async () => {
    const { target } = bound('limit', 10)
    const { wrapper, sent } = await show(NumberFieldWidget, numberField({ target }))
    const input = await type(wrapper, '20')
    expect(sent('input')[0].value).toBe(20)
    expect(sent('input')[0].previousValue).toBe(10)
    await input.trigger('keydown', { key: 'Enter' })
    expect(sent('change')[0]).toBeInstanceOf(ControlPayloadImpl)
    expect(sent('change')[0].value).toBe(20)
    expect(sent('change')[0].previousValue).toBe(10)
    expect(sent('submit')[0].value).toBe(20)
    expect(sent('submit')[0].previousValue).toBe(10)
  })

  it('takes no input while disabled: no write, no event', async () => {
    const { variable, target } = bound('limit', 10)
    const { wrapper, emit } = await show(NumberFieldWidget, numberField({ target, disabled: new VariableWrapper('true') }))
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    const input = await type(wrapper, '20')
    await input.trigger('keydown', { key: 'Enter' })
    await input.trigger('blur')
    expect(variable.value).toBe(10)
    expect(emit).not.toHaveBeenCalled()
  })

  it('is set through its action within its limits, and enabled', async () => {
    const { variable, target } = bound('limit', 10)
    const { wrapper, api, emit } = await show(NumberFieldWidget, numberField({ target, disabled: new VariableWrapper('true') }))
    api().setValue(500)
    api().enable()
    await nextTick()
    expect(variable.value).toBe(100)
    expect(emit).not.toHaveBeenCalled()
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })
})
