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
import { EVENT_ACTIONS_REGISTRY, EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
/* Entered through the package, as the bundle's own entry does it. */
import { ControlwidgetsPackage } from '../gen/ControlwidgetsPackage'
import ButtonWidget from '../ButtonWidget.vue'
import { ButtonSettingsImpl } from '../gen/ButtonSettingsImpl'
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'

/* The payload extends the events model's Payload: that package first. */
void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/** A variable as far as a wrapper sees one: a value and its subscribers. */
function variable(name: string, initial: unknown) {
  const subscribers: Array<() => void> = []
  let held = initial
  return {
    name,
    get value() {
      return held
    },
    set value(next: unknown) {
      held = next
      subscribers.forEach((each) => each())
    },
    subscribe(fn: () => void) {
      subscribers.push(fn)
    },
    unsubscribe() {},
  }
}

function settingsWith(overrides: Record<string, unknown> = {}) {
  const settings: any = new ButtonSettingsImpl()
  settings.label = new VariableWrapper('Go')
  settings.color = new VariableWrapper('#2563eb')
  settings.textColor = new VariableWrapper('#ffffff')
  settings.disabled = new VariableWrapper('false')
  settings.target = new VariableWrapper('')
  settings.value = new VariableWrapper('on')
  for (const [key, value] of Object.entries(overrides)) settings[key] = value
  return settings
}

async function show(settings: any) {
  const emit = vi.fn()
  const wrapper = mount(ButtonWidget, {
    props: { id: 'w1', configv: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit, on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: {
          registerInstance: vi.fn(),
          unregisterInstance: vi.fn(),
        },
      },
    },
  })
  await flushPromises()
  return { wrapper, emit }
}

describe('ButtonWidget', () => {
  it('fires click with the modelled payload', async () => {
    const target = new VariableWrapper('')
    target.setTo(variable('mode', 'off') as any)
    const { wrapper, emit } = await show(settingsWith({ target }))

    await wrapper.find('button').trigger('click')

    expect(emit).toHaveBeenCalledTimes(1)
    const [type, event] = emit.mock.calls[0]
    expect(type).toBe('widget:ButtonWidget:click')
    expect(event.widgetId).toBe('w1')
    expect(event.payload).toBeInstanceOf(ControlPayloadImpl)
    expect(event.payload.widgetId).toBe('w1')
    expect(event.payload.value).toBe('on')
    expect(event.payload.previousValue).toBe('off')
  })

  it('writes the configured value into the variable its target follows', async () => {
    const mode = variable('mode', 'off')
    const target = new VariableWrapper('')
    target.setTo(mode as any)
    const settings = settingsWith({ target, value: new VariableWrapper('auto') })
    const { wrapper } = await show(settings)

    await wrapper.find('button').trigger('click')

    expect(mode.value).toBe('auto')
    /* Into the variable, not over the binding. */
    expect(settings.target.variable).toBe('mode')
    expect(settings.target.value).toBe('auto')
  })

  it('without a target only sends its event', async () => {
    const { wrapper, emit } = await show(settingsWith())
    await wrapper.find('button').trigger('click')
    expect(emit).toHaveBeenCalledTimes(1)
    expect(emit.mock.calls[0][1].payload.previousValue).toBeUndefined()
  })

  it('shows a changed label, written into the wrapper or as a new one', async () => {
    const settings = settingsWith()
    const { wrapper } = await show(settings)
    expect(wrapper.find('button').text()).toBe('Go')

    settings.label.value = 'Stop'
    await nextTick()
    expect(wrapper.find('button').text()).toBe('Stop')

    settings.label = new VariableWrapper('Pause')
    await nextTick()
    await nextTick()
    expect(wrapper.find('button').text()).toBe('Pause')
  })

  it('takes no press while disabled', async () => {
    const mode = variable('mode', 'off')
    const target = new VariableWrapper('')
    target.setTo(mode as any)
    const { wrapper, emit } = await show(settingsWith({ target, disabled: new VariableWrapper('true') }))

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    await wrapper.find('button').trigger('click')
    expect(emit).not.toHaveBeenCalled()
    expect(mode.value).toBe('off')
  })

  it('is enabled and relabelled through its actions', async () => {
    const settings = settingsWith({ disabled: new VariableWrapper('true') })
    const { wrapper } = await show(settings)
    const api = (wrapper.vm as any).$.exposed
    api.enable()
    api.setLabel('Now')
    await nextTick()
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
    expect(wrapper.find('button').text()).toBe('Now')
  })
})
