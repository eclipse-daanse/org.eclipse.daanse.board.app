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
import { PagesettingsPackage } from '../gen/PagesettingsPackage'
import { PageWidgetSettingsImpl } from '../gen/PageWidgetSettingsImpl'
import PageWidget from '../PageWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { boardid: 'b1', pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
  RouterView: { template: '<div />' },
}))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return { ...actual, useTranslation: () => ({ t: (key: string) => key }) }
})

void PagesettingsPackage.eINSTANCE

async function show(settings: PageWidgetSettingsImpl) {
  const wrapper = mount(PageWidget, {
    props: { configv: settings },
    /* The page inside is not under test. */
    global: { stubs: { PageLayoutRenderer: { template: '<div class="inner-page" />' } } },
  })
  await flushPromises()
  return wrapper
}

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the page all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the frame: the title goes when it is hidden', async () => {
    const settings = new PageWidgetSettingsImpl()
    settings.path = '/board/b1/pages/p2'
    const wrapper = await show(settings)
    expect(wrapper.find('.page-info').exists()).toBe(true)

    settings.hideTitle = true
    await nextTick()

    expect(wrapper.find('.page-info').exists()).toBe(false)
  })

  it('reaches the frame: a page picked after the fact is shown', async () => {
    const settings = new PageWidgetSettingsImpl()
    const wrapper = await show(settings)
    expect(wrapper.find('.inner-page').exists()).toBe(false)

    settings.path = '/board/b1/pages/p2'
    await nextTick()

    expect(wrapper.find('.inner-page').exists()).toBe(true)
    expect(wrapper.find('.page-info').text()).toContain('Widget.target')
  })
})
