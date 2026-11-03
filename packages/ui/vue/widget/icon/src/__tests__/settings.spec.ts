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
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { IconSettingsPackage } from '../gen/IconSettingsPackage'
import { IconSettingsImpl } from '../gen/IconSettingsImpl'
import IconWidget from '../IconWidget.vue'

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return { ...actual, useVariableRepository: () => ({ wrapParameters: (params: unknown) => params }) }
})

/* The icon's payloads point at the events model, so that one goes first. */
void EventsPackage.eINSTANCE
void IconSettingsPackage.eINSTANCE

async function show(settings: IconSettingsImpl) {
  const wrapper = mount(IconWidget, {
    props: { id: 'w1', configv: settings },
    global: { provide: { [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() } } },
  })
  await flushPromises()
  return wrapper
}

const symbol = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.find('.material-symbols-outlined')

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the icon all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the icon: a new symbol is drawn', async () => {
    const settings = new IconSettingsImpl()
    settings.currentIcon = 'home'
    const wrapper = await show(settings)
    expect(symbol(wrapper).text()).toBe('home')

    settings.currentIcon = 'settings'
    await nextTick()

    expect(symbol(wrapper).text()).toBe('settings')
  })

  /*
   * Read from the component, not the element: jsdom does not know
   * font-variation-settings and drops it from the style attribute.
   */
  it('reaches the icon: it fills when asked to', async () => {
    const settings = new IconSettingsImpl()
    settings.currentIcon = 'home'
    settings.isIconFilled = false
    const wrapper = await show(settings)
    expect((wrapper.vm as any).iconStyle).toContain("'FILL' 0")

    settings.isIconFilled = true
    await nextTick()

    expect((wrapper.vm as any).iconStyle).toContain("'FILL' 1")
  })
})
