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

/* What every control's tests need: a variable, settings and a mounted control. */
import { vi, type Mock } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

/** A variable as far as a wrapper sees one: a value and its subscribers. */
export function variable(name: string, initial: unknown) {
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

/** A target wrapper bound to a fresh variable. */
export function bound(name: string, initial: unknown) {
  const v = variable(name, initial)
  const target = new VariableWrapper('')
  target.setTo(v as any)
  return { variable: v, target }
}

/** Settings of the given class, every shared wrapper filled, then the overrides. */
export function settingsOf(make: () => any, overrides: Record<string, unknown> = {}) {
  const settings: any = make()
  settings.label = new VariableWrapper('Go')
  settings.color = new VariableWrapper('#2563eb')
  settings.textColor = new VariableWrapper('#ffffff')
  settings.fontSize = new VariableWrapper('14')
  settings.disabled = new VariableWrapper('false')
  for (const [key, value] of Object.entries(overrides)) settings[key] = value
  return settings
}

export async function show(component: any, settings: any, provide: Record<symbol | string, unknown> = {}) {
  const emit: Mock = vi.fn()
  const wrapper = mount(component, {
    props: { id: 'w1', configv: settings },
    attachTo: document.body,
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit, on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: {
          registerInstance: vi.fn(),
          unregisterInstance: vi.fn(),
        },
        ...provide,
      },
    },
  })
  await flushPromises()
  /** The events sent, by name, with their payloads. */
  const sent = (event: string) =>
    emit.mock.calls.filter(([type]) => String(type).endsWith(`:${event}`)).map(([, e]) => e.payload)
  return { wrapper, emit, sent, api: () => (wrapper.vm as any).$.exposed }
}
