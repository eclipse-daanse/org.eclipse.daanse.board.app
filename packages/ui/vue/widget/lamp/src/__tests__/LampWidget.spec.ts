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
import { flushPromises, mount } from '@vue/test-utils'
import { EventsPackage, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  ANNOUNCE_LIGHT,
  LIGHTS_WANTED,
  WITHDRAW_LIGHT,
  type LightSourceSpec,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { TinyEmitter } from 'tiny-emitter'
import { LampwidgetPackage } from '../gen/LampwidgetPackage'
import { LampSettingsImpl } from '../gen/LampSettingsImpl'
import { LampPayloadImpl } from '../gen/LampPayloadImpl'
import LampWidget from '../LampWidget.vue'

void EventsPackage.eINSTANCE
void LampwidgetPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* What the source answered, set per test; the setter lets a test answer again. */
let answered: unknown = null
let answer: ((value: unknown) => void) | undefined

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useDatasourceRepository: (_id: unknown, _shape: unknown, target: { value: unknown }) => {
      target.value = answered
      answer = (value) => (target.value = value)
      return { update: vi.fn() }
    },
  }
})

beforeEach(() => {
  answered = null
  answer = undefined
})

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

function bound(initial: unknown) {
  const v = variable('light', initial)
  const wrapper = new VariableWrapper('')
  wrapper.setTo(v as any)
  return { variable: v, wrapper }
}

function lampSettings(overrides: Record<string, unknown> = {}) {
  const settings: any = new LampSettingsImpl()
  for (const [key, value] of Object.entries(overrides)) settings[key] = value
  return settings
}

async function show(settings: any, props: Record<string, unknown> = {}) {
  const bus = new TinyEmitter()
  const sent: { type: string; payload: LampPayloadImpl }[] = []
  const lights: LightSourceSpec[] = []
  const withdrawn: unknown[] = []
  const emit = bus.emit.bind(bus)
  bus.emit = ((type: string, event: any) => {
    if (type.startsWith('widget:LampWidget:')) sent.push({ type, payload: event.payload })
    if (type === ANNOUNCE_LIGHT) lights.push(event)
    if (type === WITHDRAW_LIGHT) withdrawn.push(event)
    return emit(type, event)
  }) as typeof bus.emit
  const wrapper = mount(LampWidget, {
    props: { id: 'lamp1', configv: settings, ...props },
    attachTo: document.body,
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: bus,
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  const events = (name: string) => sent.filter((each) => each.type.endsWith(`:${name}`)).map((each) => each.payload)
  return { wrapper, bus, events, lights, withdrawn, api: () => (wrapper.vm as any).$.exposed }
}

describe('LampWidget', () => {
  it('starts off, every setting in a wrapper, an empty one read as the model default', async () => {
    const settings = lampSettings()
    const { wrapper, lights } = await show(settings)
    expect(wrapper.find('button').attributes('aria-checked')).toBe('false')
    expect(settings.brightness).toBeInstanceOf(VariableWrapper)
    expect(wrapper.find('.lamp').classes()).toContain('lamp--bulb')
    expect(lights.at(-1)).toMatchObject({ on: false, radius: 240, shape: 'round', direction: 90, angle: 60, x: 0.5, y: 0.5 })
  })

  it('a press sends clicked and switches the lamp, sending stateChanged with the whole state', async () => {
    const { wrapper, events } = await show(lampSettings({ colorTemperature: new VariableWrapper('2700') }))
    await wrapper.find('button').trigger('click')
    await nextTick()

    expect(wrapper.find('button').attributes('aria-checked')).toBe('true')
    expect(events('clicked')).toHaveLength(1)
    expect(events('clicked')[0].on).toBe(false)
    const changed = events('stateChanged')
    expect(changed).toHaveLength(1)
    expect(changed[0]).toBeInstanceOf(LampPayloadImpl)
    expect(changed[0]).toMatchObject({ widgetId: 'lamp1', on: true, brightness: 100, color: '', colorTemperature: 2700 })
    expect(changed[0].lightColor).toMatch(/^rgb\(255, /)
  })

  it('turns on, off and over through its actions', async () => {
    const { wrapper, api, events } = await show(lampSettings())
    const button = () => wrapper.find('button').attributes('aria-checked')

    api().turnOn()
    await nextTick()
    expect(button()).toBe('true')
    api().turnOff()
    await nextTick()
    expect(button()).toBe('false')
    api().toggle()
    await nextTick()
    expect(button()).toBe('true')
    expect(events('stateChanged').map((each) => each.on)).toEqual([true, false, true])
    expect(events('clicked')).toHaveLength(0)
  })

  it('dims and colours through its actions, within their bounds', async () => {
    const settings = lampSettings()
    const { api, events } = await show(settings)

    api().setBrightness(40)
    await nextTick()
    api().setBrightness(250)
    await nextTick()
    api().setColor('#ff0000')
    await nextTick()
    api().setColorTemperature(6500)
    await nextTick()

    expect(settings.brightness.value).toBe('100')
    expect(settings.color.value).toBe('#ff0000')
    expect(settings.colorTemperature.value).toBe('6500')
    expect(events('stateChanged').map((each) => [each.brightness, each.color, each.colorTemperature])).toEqual([
      [40, '', 2700],
      [100, '', 2700],
      [100, '#ff0000', 2700],
      [100, '#ff0000', 6500],
    ])
  })

  it('mirrors a variable bound to on, and writes into it rather than into the wrapper', async () => {
    const { variable, wrapper: on } = bound(false)
    const { wrapper, api, events } = await show(lampSettings({ on }))
    expect(wrapper.find('button').attributes('aria-checked')).toBe('false')

    variable.value = true
    await nextTick()
    expect(wrapper.find('button').attributes('aria-checked')).toBe('true')
    expect(events('stateChanged').at(-1)?.on).toBe(true)

    api().turnOff()
    expect(variable.value).toBe(false)
    expect(on.reference).toBe(variable)
  })

  it('follows a datasource field: a word switches it, a number dims it, an object says it all', async () => {
    answered = { status: { light: 'on' } }
    const { wrapper, events } = await show(lampSettings({ stateField: new VariableWrapper('status.light') }), {
      datasourceId: 'ds1',
    })
    expect(wrapper.find('button').attributes('aria-checked')).toBe('true')

    answer!({ status: { light: 30 } })
    await nextTick()
    expect(events('stateChanged').at(-1)).toMatchObject({ on: true, brightness: 30 })

    answer!({ status: { light: { on: false, color: 'blue' } } })
    await nextTick()
    expect(wrapper.find('button').attributes('aria-checked')).toBe('false')
    expect(events('stateChanged').at(-1)).toMatchObject({ on: false, color: 'blue' })
  })

  it('reads no datasource without a field named', async () => {
    answered = { light: 'on' }
    const { wrapper } = await show(lampSettings(), { datasourceId: 'ds1' })
    expect(wrapper.find('button').attributes('aria-checked')).toBe('false')
  })

  it('announces its light, announces it again when it changes or is asked, and withdraws it when removed', async () => {
    const settings = lampSettings({
      on: new VariableWrapper('true'),
      brightness: new VariableWrapper('50'),
      color: new VariableWrapper('#00ff00'),
      lightShape: new VariableWrapper('cone'),
      direction: new VariableWrapper('180'),
      originX: new VariableWrapper('0'),
      lightsWidgets: new VariableWrapper('true'),
    })
    const { wrapper, bus, lights, withdrawn, api } = await show(settings)
    expect(lights.at(-1)).toMatchObject({
      widgetId: 'lamp1',
      on: true,
      intensity: 0.5,
      color: '#00ff00',
      shape: 'cone',
      direction: 180,
      x: 0,
      y: 0.5,
      radius: 240,
      lightsWidgets: true,
    })

    api().turnOff()
    await nextTick()
    expect(lights.at(-1)?.on).toBe(false)

    const before = lights.length
    bus.emit(LIGHTS_WANTED)
    expect(lights.length).toBe(before + 1)

    wrapper.unmount()
    expect(withdrawn).toEqual([{ widgetId: 'lamp1' }])
    bus.emit(LIGHTS_WANTED)
    expect(lights.length).toBe(before + 1)
  })

  it('a setting written while it is shown reaches it (#1203)', async () => {
    const settings = lampSettings()
    const { wrapper } = await show(settings)
    settings.fixture = new VariableWrapper('strip')
    await nextTick()
    expect(wrapper.find('.lamp').classes()).toContain('lamp--strip')
  })
})
