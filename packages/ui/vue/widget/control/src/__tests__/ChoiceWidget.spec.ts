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
import ChoiceWidget from '../ChoiceWidget.vue'
import { ChoiceSettingsImpl } from '../gen/ChoiceSettingsImpl'
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

function option(label: string, value: string) {
  const made: any = new ControlOptionImpl()
  made.label = new VariableWrapper(label)
  made.value = new VariableWrapper(value)
  made.color = new VariableWrapper('')
  return made
}

function choice(overrides: Record<string, unknown> = {}) {
  const settings = settingsOf(() => new ChoiceSettingsImpl(), {
    label: new VariableWrapper('Period'),
    target: new VariableWrapper(''),
    optionsPath: new VariableWrapper(''),
    optionLabel: new VariableWrapper(''),
    optionValue: new VariableWrapper(''),
    placeholder: new VariableWrapper('Pick one'),
    ...overrides,
  })
  settings.options.addAll([option('Day', 'day'), option('Week', 'week'), option('Month', 'month')])
  return settings
}

async function pick(wrapper: any, index: number) {
  const select = wrapper.find('select')
  ;(select.element as HTMLSelectElement).value = String(index)
  await select.trigger('change')
}

const shownText = (wrapper: any) => {
  const select = wrapper.find('select').element as HTMLSelectElement
  return select.options[select.selectedIndex]?.text
}

describe('ChoiceWidget', () => {
  it('writes the option chosen into the variable', async () => {
    const { variable, target } = bound('period', 'day')
    const { wrapper } = await show(ChoiceWidget, choice({ target }))
    expect(wrapper.findAll('option').map((o) => o.text())).toEqual(['Day', 'Week', 'Month'])
    await pick(wrapper, 2)
    expect(variable.value).toBe('month')
    await nextTick()
    expect(shownText(wrapper)).toBe('Month')
  })

  it('shows a variable changed elsewhere, and the placeholder while it holds none of the options', async () => {
    const { variable, target } = bound('period', 'day')
    const { wrapper } = await show(ChoiceWidget, choice({ target }))
    expect(shownText(wrapper)).toBe('Day')
    variable.value = 'week'
    await nextTick()
    expect(shownText(wrapper)).toBe('Week')
    variable.value = 'year'
    await nextTick()
    expect(shownText(wrapper)).toBe('Pick one')
  })

  it('sends change with the value and the previous value', async () => {
    const { target } = bound('period', 'day')
    const { wrapper, sent, emit } = await show(ChoiceWidget, choice({ target }))
    await pick(wrapper, 1)

    expect(emit.mock.calls[0][0]).toBe('widget:ChoiceWidget:change')
    const [payload] = sent('change')
    expect(payload).toBeInstanceOf(ControlPayloadImpl)
    expect(payload.value).toBe('week')
    expect(payload.previousValue).toBe('day')
  })

  it('takes options from the source, after the listed ones, and writes their values as they are', async () => {
    answered = { rows: [{ id: 7, name: 'Seven' }, { id: 9, name: 'Nine' }] }
    const { variable, target } = bound('pick', 'day')
    const { wrapper } = await show(
      ChoiceWidget,
      choice({
        target,
        optionsPath: new VariableWrapper('rows'),
        optionLabel: new VariableWrapper('name'),
        optionValue: new VariableWrapper('id'),
      }),
    )
    expect(wrapper.findAll('option').map((o) => o.text())).toEqual(['Day', 'Week', 'Month', 'Seven', 'Nine'])
    await pick(wrapper, 4)
    expect(variable.value).toBe(9)
  })

  it('takes no choice while disabled: no write, no event', async () => {
    const { variable, target } = bound('period', 'day')
    const { wrapper, emit } = await show(ChoiceWidget, choice({ target, disabled: new VariableWrapper('true') }))
    expect(wrapper.find('select').attributes('disabled')).toBeDefined()
    await pick(wrapper, 1)
    expect(variable.value).toBe('day')
    expect(emit).not.toHaveBeenCalled()
  })

  it('is set and enabled through its actions', async () => {
    answered = [1, 2, 3]
    const { variable, target } = bound('pick', 'day')
    const { wrapper, api, emit } = await show(ChoiceWidget, choice({ target, disabled: new VariableWrapper('true') }))
    api().setValue('2')
    api().enable()
    await nextTick()
    expect(variable.value).toBe(2)
    expect(emit).not.toHaveBeenCalled()
    expect(wrapper.find('select').attributes('disabled')).toBeUndefined()
  })
})
