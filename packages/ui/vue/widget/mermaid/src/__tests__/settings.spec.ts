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
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { MermaidwidgetsPackage } from '../gen/MermaidwidgetsPackage'
import { MermaidWidgetSettingsImpl } from '../gen/MermaidWidgetSettingsImpl'
import MermaidWidget from '../MermaidWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* The renderer is not under test; what reaches it is. */
const initialize = vi.fn()
vi.mock('mermaid', () => ({
  default: { initialize: (...args: unknown[]) => initialize(...args), run: vi.fn().mockResolvedValue(undefined) },
}))

void MermaidwidgetsPackage.eINSTANCE

async function show(settings: MermaidWidgetSettingsImpl) {
  const wrapper = mount(MermaidWidget, {
    props: { id: 'w1', configv: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  return wrapper
}

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the diagram all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the diagram: new source is drawn', async () => {
    const settings = new MermaidWidgetSettingsImpl()
    settings.value = 'graph LR; A-->B'
    const wrapper = await show(settings)
    expect(wrapper.text()).toContain('A-->B')

    settings.value = 'graph LR; C-->D'
    await nextTick()

    expect(wrapper.text()).toContain('C-->D')
    expect(wrapper.text()).not.toContain('A-->B')
  })

  it('reaches the renderer: a new theme is handed on', async () => {
    const settings = new MermaidWidgetSettingsImpl()
    await show(settings)
    initialize.mockClear()

    settings.theme = 'dark'
    await nextTick()

    expect(initialize).toHaveBeenCalledWith({ theme: 'dark' })
  })
})
