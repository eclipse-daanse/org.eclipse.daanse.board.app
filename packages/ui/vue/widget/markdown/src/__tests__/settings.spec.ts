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
import { MarkdownwidgetPackage } from '../gen/MarkdownwidgetPackage'
import { MarkdownWidgetSettingsImpl } from '../gen/MarkdownWidgetSettingsImpl'
import MarkdownWidget from '../MarkdownWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* The editor is not under test; what it is handed is. */
const shown = vi.fn()
vi.mock('easymde', () => ({
  default: class {
    value(text?: string) {
      if (text !== undefined) shown(text)
      return ''
    }
    togglePreview() {}
  },
}))

void MarkdownwidgetPackage.eINSTANCE

async function show(settings: MarkdownWidgetSettingsImpl) {
  const wrapper = mount(MarkdownWidget, {
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
 * dialog has to reach the text all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the text: new markdown is drawn and handed to the editor', async () => {
    const settings = new MarkdownWidgetSettingsImpl()
    settings.value = '# first'
    const wrapper = await show(settings)
    expect(wrapper.find('textarea').text()).toContain('# first')
    shown.mockClear()

    settings.value = '# second'
    await nextTick()

    expect(wrapper.find('textarea').text()).toContain('# second')
    expect(shown).toHaveBeenCalledWith('# second')
  })
})
