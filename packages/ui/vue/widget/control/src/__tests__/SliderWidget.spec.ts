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
import SliderWidget from '../SliderWidget.vue'
import { SliderSettingsImpl } from '../gen/SliderSettingsImpl'
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'
import { SliderMarkImpl } from '../gen/SliderMarkImpl'
import { bound, settingsOf, show } from './helpers'

void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

function mark(at: string, label = '') {
  const made: any = new SliderMarkImpl()
  made.at = new VariableWrapper(at)
  made.label = new VariableWrapper(label)
  return made
}

function slider(overrides: Record<string, unknown> = {}) {
  return settingsOf(() => new SliderSettingsImpl(), {
    label: new VariableWrapper('Speed'),
    target: new VariableWrapper(''),
    upperTarget: new VariableWrapper(''),
    min: new VariableWrapper('0'),
    max: new VariableWrapper('100'),
    step: new VariableWrapper('5'),
    unit: new VariableWrapper('%'),
    markEvery: new VariableWrapper(''),
    ...overrides,
  })
}

/** Moves a thumb to a value, as dragging it there would. */
async function slide(wrapper: any, to: number, thumb = 'lower') {
  const input = wrapper.find(`input[data-thumb="${thumb}"]`)
  ;(input.element as HTMLInputElement).value = String(to)
  await input.trigger('input')
  return input.element as HTMLInputElement
}

describe('SliderWidget', () => {
  it('moving the thumb writes the value, on the step grid, into the variable', async () => {
    const { variable, target } = bound('speed', 0)
    const { wrapper } = await show(SliderWidget, slider({ target }))
    const input = await slide(wrapper, 42)
    expect(variable.value).toBe(40)
    expect(input.value).toBe('40')
  })

  it('snaps to the nearest mark, listed or every n steps', async () => {
    const { variable, target } = bound('speed', 0)
    const settings = slider({ target, markEvery: new VariableWrapper('10') })
    settings.marks.add(mark('33', 'third'))
    const { wrapper } = await show(SliderWidget, settings)

    await slide(wrapper, 36)
    expect(variable.value).toBe(33)
    await slide(wrapper, 46)
    expect(variable.value).toBe(50)
    expect(wrapper.findAll('.control-slider__mark').map((m) => m.text())).toEqual(['0', 'third', '50', '100'])
  })

  it('moves in steps despite marks where it does not snap', async () => {
    const { variable, target } = bound('speed', 0)
    const settings = slider({ target, snap: false })
    settings.marks.add(mark('50'))
    const { wrapper } = await show(SliderWidget, settings)
    await slide(wrapper, 36)
    expect(variable.value).toBe(35)
  })

  it('shows a variable changed elsewhere', async () => {
    const { variable, target } = bound('speed', 10)
    const { wrapper } = await show(SliderWidget, slider({ target }))
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('10')

    variable.value = 75
    await nextTick()
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('75')
    expect(wrapper.find('.control-slider__value').text()).toBe('75 %')
  })

  it('sends change with the value and the previous value, and release on letting go', async () => {
    const { target } = bound('speed', 10)
    const { wrapper, sent, emit } = await show(SliderWidget, slider({ target }))
    await slide(wrapper, 60)

    expect(emit.mock.calls[0][0]).toBe('widget:SliderWidget:change')
    const [payload] = sent('change')
    expect(payload).toBeInstanceOf(ControlPayloadImpl)
    expect(payload.value).toBe(60)
    expect(payload.previousValue).toBe(10)

    await wrapper.find('input').trigger('change')
    expect(sent('release')[0].value).toBe(60)
  })

  it('throttles change while dragging and covers the whole burst', async () => {
    vi.useFakeTimers()
    try {
      const { variable, target } = bound('speed', 0)
      const { wrapper, sent } = await show(SliderWidget, slider({ target }))
      await slide(wrapper, 10)
      await slide(wrapper, 20)
      await slide(wrapper, 30)
      expect(variable.value).toBe(30)
      expect(sent('change')).toHaveLength(1)

      vi.advanceTimersByTime(150)
      const changes = sent('change')
      expect(changes).toHaveLength(2)
      expect(changes[1].value).toBe(30)
      expect(changes[1].previousValue).toBe(10)
    } finally {
      vi.useRealTimers()
    }
  })

  it('as a range writes each thumb into its own variable, and neither passes the other', async () => {
    const low = bound('from', 20)
    const high = bound('to', 80)
    const { wrapper, sent } = await show(
      SliderWidget,
      slider({ target: low.target, upperTarget: high.target, range: true }),
    )
    await slide(wrapper, 90, 'upper')
    expect(high.variable.value).toBe(90)
    expect(sent('change')[0].value).toEqual([20, 90])
    expect(sent('change')[0].previousValue).toEqual([20, 80])

    await nextTick()
    const input = await slide(wrapper, 95, 'lower')
    expect(low.variable.value).toBe(90)
    expect(input.value).toBe('90')
  })

  it('takes no move while disabled: no write, no event', async () => {
    const { variable, target } = bound('speed', 10)
    const { wrapper, emit } = await show(SliderWidget, slider({ target, disabled: new VariableWrapper('true') }))
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    await slide(wrapper, 60)
    expect(variable.value).toBe(10)
    expect(emit).not.toHaveBeenCalled()
  })

  it('runs bottom to top where it is vertical', async () => {
    const { wrapper } = await show(SliderWidget, slider({ orientation: 'vertical' }))
    expect(wrapper.find('.control-slider--vertical').exists()).toBe(true)
    expect(wrapper.find('input').attributes('aria-orientation')).toBe('vertical')
  })

  it('is set and enabled through its actions, placed on the grid', async () => {
    const { variable, target } = bound('speed', 0)
    const { wrapper, api, emit } = await show(SliderWidget, slider({ target, disabled: new VariableWrapper('true') }))
    api().setValue(57)
    api().enable()
    await nextTick()
    expect(variable.value).toBe(55)
    expect(emit).not.toHaveBeenCalled()
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('puts the value badge on the thumb, and it follows the thumb', async () => {
    const { variable, target } = bound('speed', 25)
    const { wrapper } = await show(SliderWidget, slider({ target }))
    const badge = () => wrapper.find('.control-slider__value')
    expect(badge().text()).toBe('25 %')
    expect((badge().element as HTMLElement).style.left).toBe('25%')

    variable.value = 80
    await nextTick()
    expect((badge().element as HTMLElement).style.left).toBe('80%')
  })

  it('gives each thumb of a range a badge of its own', async () => {
    const low = bound('from', 20)
    const high = bound('to', 80)
    const { wrapper } = await show(SliderWidget, slider({ target: low.target, upperTarget: high.target, range: true }))
    expect(wrapper.findAll('.control-slider__value').map((b) => b.text())).toEqual(['20 %', '80 %'])
  })

  it('draws a tick at each mark with its label under it, beside the track where vertical', async () => {
    const settings = slider({ markEvery: new VariableWrapper('10') })
    const { wrapper } = await show(SliderWidget, settings)
    const marks = wrapper.findAll('.control-slider__mark')
    expect(marks).toHaveLength(3)
    expect(marks.every((m) => m.find('.control-slider__tick').exists())).toBe(true)
    expect((marks[1].element as HTMLElement).style.left).toBe('50%')

    settings.orientation = 'vertical'
    await nextTick()
    const beside = wrapper.findAll('.control-slider__mark')
    expect((beside[1].element as HTMLElement).style.bottom).toBe('50%')
    expect((wrapper.find('.control-slider__value').element as HTMLElement).style.bottom).toBe('0%')
  })
})
