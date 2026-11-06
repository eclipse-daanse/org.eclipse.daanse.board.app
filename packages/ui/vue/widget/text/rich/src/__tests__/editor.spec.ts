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
 **********************************************************************/

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as varIdentifier } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { RichTextEditorPackage } from '../gen/RichTextEditorPackage'
import { RichTextEditorSettingsImpl } from '../gen/RichTextEditorSettingsImpl'
import RichTextWidgetSettings from '../RichTextWidgetSettings.vue'

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return { ...actual, useTranslation: () => ({ t: (key: string) => key }) }
})

void RichTextEditorPackage.eINSTANCE

/*
 * #1269: the settings of a rich text widget showed the toolbar over an
 * empty box. The editor surface is a component of tiptap's; its import
 * had gone (d1e70cbe), and <editor-content> rendered as an unknown
 * element with nothing in it.
 */
describe('the rich text settings', () => {
  it('show the text in an editor that can be typed into', async () => {
    const settings = new RichTextEditorSettingsImpl()
    settings.editor = '<p>Stadt Jena</p><p><strong>Bodenfeuchte</strong></p>'
    const wrapper = mount(RichTextWidgetSettings, {
      props: { modelValue: settings },
      global: { provide: { [varIdentifier as unknown as symbol]: { getAllVariables: () => [], getVariable: () => null } } },
      attachTo: document.body,
    })
    await flushPromises()

    const surface = wrapper.find('.ProseMirror')
    expect(surface.exists()).toBe(true)
    expect(surface.attributes('contenteditable')).toBe('true')
    expect(surface.text()).toContain('Bodenfeuchte')
    expect(surface.find('strong').exists()).toBe(true)
    wrapper.unmount()
  })
})
