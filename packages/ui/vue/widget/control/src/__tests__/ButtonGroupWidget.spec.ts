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
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ControlwidgetsPackage } from '../gen/ControlwidgetsPackage'
import ButtonGroupWidget from '../ButtonGroupWidget.vue'
import { ButtonGroupSettingsImpl } from '../gen/ButtonGroupSettingsImpl'
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'
import { ControlOptionImpl } from '../gen/ControlOptionImpl'
import { bound, settingsOf, show } from './helpers'

void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* What the source answered, set per test. */
let answered: unknown = null

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useDatasourceRepository: (_id: unknown, _shape: unknown, target: { value: unknown }) => {
      target.value = answered
      return { update: vi.fn() }
    },
  }
})

beforeEach(() => {
  answered = null
})

function option(label: string, value: string, color = '') {
  const made: any = new ControlOptionImpl()
  made.label = new VariableWrapper(label)
  made.value = new VariableWrapper(value)
  made.color = new VariableWrapper(color)
  return made
}

function group(overrides: Record<string, unknown> = {}) {
  const settings = settingsOf(() => new ButtonGroupSettingsImpl(), {
    label: new VariableWrapper(''),
    target: new VariableWrapper(''),
    optionsPath: new VariableWrapper(''),
    optionLabel: new VariableWrapper(''),
    optionValue: new VariableWrapper(''),
    ...overrides,
  })
  settings.options.addAll([option('Day', 'day'), option('Week', 'week'), option('Month', 'month')])
  return settings
}

const chosen = (wrapper: any) =>
  wrapper.findAll('button').filter((b: any) => b.classes('control-group__option--chosen')).map((b: any) => b.text())

describe('ButtonGroupWidget', () => {
  it('taking one, a press writes the option chosen into the variable', async () => {
    const { variable, target } = bound('period', 'day')
    const { wrapper } = await show(ButtonGroupWidget, group({ target }))
    await wrapper.findAll('button')[2].trigger('click')
    expect(variable.value).toBe('month')
    await nextTick()
    expect(chosen(wrapper)).toEqual(['Month'])
    expect(wrapper.findAll('button')[2].attributes('aria-checked')).toBe('true')
  })

  it('taking several, a press adds or takes away an option, and the list is written in option order', async () => {
    const { variable, target } = bound('periods', ['week'])
    const { wrapper } = await show(ButtonGroupWidget, group({ target, multiple: true }))

    await wrapper.findAll('button')[2].trigger('click')
    expect(variable.value).toEqual(['week', 'month'])
    await nextTick()
    await wrapper.findAll('button')[0].trigger('click')
    expect(variable.value).toEqual(['day', 'week', 'month'])
    await nextTick()
    await wrapper.findAll('button')[1].trigger('click')
    expect(variable.value).toEqual(['day', 'month'])
  })

  it('shows a variable changed elsewhere, one value or a list as text', async () => {
    const single = bound('period', 'day')
    const one = await show(ButtonGroupWidget, group({ target: single.target }))
    single.variable.value = 'week'
    await nextTick()
    expect(chosen(one.wrapper)).toEqual(['Week'])

    const several = bound('periods', [])
    const many = await show(ButtonGroupWidget, group({ target: several.target, multiple: true }))
    several.variable.value = 'day, month'
    await nextTick()
    expect(chosen(many.wrapper)).toEqual(['Day', 'Month'])
    several.variable.value = '["week"]'
    await nextTick()
    expect(chosen(many.wrapper)).toEqual(['Week'])
  })

  it('sends change with the value and the previous value', async () => {
    const { target } = bound('periods', ['day'])
    const { wrapper, sent, emit } = await show(ButtonGroupWidget, group({ target, multiple: true }))
    await wrapper.findAll('button')[1].trigger('click')

    expect(emit.mock.calls[0][0]).toBe('widget:ButtonGroupWidget:change')
    const [payload] = sent('change')
    expect(payload).toBeInstanceOf(ControlPayloadImpl)
    expect(payload.value).toEqual(['day', 'week'])
    expect(payload.previousValue).toEqual(['day'])
  })

  it('takes options from the source, after the listed ones', async () => {
    answered = { rows: [{ id: 7, name: 'Seven' }, { id: 9, name: 'Nine' }] }
    const { variable, target } = bound('pick', 'day')
    const { wrapper } = await show(
      ButtonGroupWidget,
      group({
        target,
        optionsPath: new VariableWrapper('rows'),
        optionLabel: new VariableWrapper('name'),
        optionValue: new VariableWrapper('id'),
      }),
    )
    expect(wrapper.findAll('button').map((b) => b.text())).toEqual(['Day', 'Week', 'Month', 'Seven', 'Nine'])
    await wrapper.findAll('button')[4].trigger('click')
    expect(variable.value).toBe(9)
  })

  it('takes a list of plain values from the source as it is', async () => {
    answered = ['red', 'green']
    const settings = group()
    settings.options.clear()
    const { wrapper } = await show(ButtonGroupWidget, settings)
    expect(wrapper.findAll('button').map((b) => b.text())).toEqual(['red', 'green'])
  })

  it('takes no press while disabled: no write, no event', async () => {
    const { variable, target } = bound('period', 'day')
    const { wrapper, emit } = await show(ButtonGroupWidget, group({ target, disabled: new VariableWrapper('true') }))
    expect(wrapper.findAll('button')[1].attributes('disabled')).toBeDefined()
    await wrapper.findAll('button')[1].trigger('click')
    expect(variable.value).toBe('day')
    expect(emit).not.toHaveBeenCalled()
  })

  it('is set and enabled through its actions', async () => {
    const { variable, target } = bound('periods', [])
    const { wrapper, api, emit } = await show(
      ButtonGroupWidget,
      group({ target, multiple: true, disabled: new VariableWrapper('true') }),
    )
    api().setValue('week,month')
    api().enable()
    await nextTick()
    expect(variable.value).toEqual(['week', 'month'])
    expect(emit).not.toHaveBeenCalled()
    expect(wrapper.findAll('button')[0].attributes('disabled')).toBeUndefined()
  })
})
