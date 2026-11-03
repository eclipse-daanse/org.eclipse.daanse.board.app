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
import { CodesettingsPackage } from '../gen/CodesettingsPackage'
import { CodeSettingsImpl } from '../gen/CodeSettingsImpl'
import CodeWidget from '../CodeWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* The highlighter is not under test; what it is asked to draw is. */
vi.mock('shiki', () => ({
  codeToHtml: async (code: string, options: { theme: string; lang: string }) =>
    `<pre class="shiki" data-theme="${options.theme}" data-lang="${options.lang}">${code}</pre>`,
}))

void CodesettingsPackage.eINSTANCE

async function show(settings: CodeSettingsImpl) {
  const wrapper = mount(CodeWidget, {
    props: { id: 'w1', config: settings },
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
 * dialog has to reach the code block all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the block: new code is drawn', async () => {
    const settings = new CodeSettingsImpl()
    settings.code = 'const a = 1'
    const wrapper = await show(settings)
    expect(wrapper.text()).toContain('const a = 1')

    settings.code = 'const b = 2'
    await nextTick()
    await flushPromises()

    expect(wrapper.text()).toContain('const b = 2')
    expect(wrapper.text()).not.toContain('const a = 1')
  })

  it('reaches the highlighter: a new language and theme are handed on', async () => {
    const settings = new CodeSettingsImpl()
    settings.code = 'print(1)'
    const wrapper = await show(settings)
    expect(wrapper.find('pre').attributes('data-lang')).toBe('typescript')

    settings.language = 'python'
    settings.theme = 'github-dark'
    await nextTick()
    await flushPromises()

    expect(wrapper.find('pre').attributes('data-lang')).toBe('python')
    expect(wrapper.find('pre').attributes('data-theme')).toBe('github-dark')
  })
})
