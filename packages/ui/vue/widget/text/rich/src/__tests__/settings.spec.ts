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
import { RichTextEditorPackage } from '../gen/RichTextEditorPackage'
import { RichTextEditorSettingsImpl } from '../gen/RichTextEditorSettingsImpl'
import RichTextWidget from '../RichTextWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useVariableRepository: () => ({ calculateValue: (text: string) => text, wrapParameters: (params: unknown) => params }),
    useDatasourceRepository: (_id: unknown, _type: string, data: { value: unknown }) => {
      data.value = {}
      return { update: vi.fn() }
    },
  }
})

void RichTextEditorPackage.eINSTANCE

async function show(settings: RichTextEditorSettingsImpl) {
  const wrapper = mount(RichTextWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', config: settings },
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
  it('reaches the text: new content is drawn', async () => {
    const settings = new RichTextEditorSettingsImpl()
    settings.editor = '<p>first</p>'
    const wrapper = await show(settings)
    expect(wrapper.find('.editor-content').text()).toBe('first')

    settings.editor = '<p>second</p>'
    await nextTick()

    expect(wrapper.find('.editor-content').text()).toBe('second')
  })
})
