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

import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import * as workspaceModule from 'org.eclipse.daanse.board.app.lib.model.workspace'
import * as pageModule from 'org.eclipse.daanse.board.app.lib.repository.page'
import {
  PAGE_REPOSITORY,
  identifier as PageIdentifier,
  type PageRegistryI,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  identifier as LayoutRepositoryIdentifier,
  type LayoutI,
  type LayoutRepositoryI,
} from 'org.eclipse.daanse.board.app.lib.api.layout.page'
import LayoutRenderer from './LayoutRenderer.vue'

const BASE = 'org.eclipse.daanse.board.app.ui.vue.layouts.base'

/* A view that draws one element per widget, which is all the renderer is asked for */
const View = defineComponent({
  setup: () => () => h('div', { class: 'board' }, [h('div', { 'data-widget': 'w1' }, 'w1')]),
})

const BASE_LAYOUT = {
  id: BASE,
  name: 'Free layout',
  description: '',
  component: View,
  editor: View,
} as unknown as LayoutI

/** The repository's contract, held in a map, telling its listeners as the real one does. */
function layoutRepository(): LayoutRepositoryI {
  const held = new Map<string, LayoutI>()
  const listeners = new Set<() => void>()
  const tell = () => listeners.forEach((listener) => listener())
  return {
    addLayout: (layout) => (held.set(layout.id, layout), tell()),
    removeLayout: (id) => held.delete(id),
    getLayout: (id) => held.get(id),
    getAllLayouts: () => [...held.values()],
    hasLayout: (id) => held.has(id),
    onChange: (listener) => (listeners.add(listener), () => listeners.delete(listener)),
  }
}

describe('LayoutRenderer', () => {
  it('draws the widgets of a page with a background image whose layout registers after it opened (#1231)', async () => {
    const services = new DefaultServiceRegistry()
    const context = { services } as unknown as ActivationContext
    workspaceModule.activate(context)
    pageModule.activate(context)
    const pages = services.getRequired<PageRegistryI>(PAGE_REPOSITORY)
    const page = pages.registerPage({ id: 'p1', name: 'Overview' } as never)
    page.layoutId = BASE
    page.backgroundImage = 'https://example.org/photo.jpg'

    /* Opened from its address: the layout's bundle has not activated yet */
    const layouts = layoutRepository()
    const wrapper = mount(LayoutRenderer, {
      props: { pageId: 'p1', viewMode: true },
      global: {
        provide: {
          [PageIdentifier as symbol]: pages,
          [LayoutRepositoryIdentifier as symbol]: layouts,
        },
      },
    })
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 80))

    layouts.addLayout(BASE_LAYOUT)
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 80))
    await flushPromises()

    expect(wrapper.find('[data-widget="w1"]').exists()).toBe(true)
    expect(wrapper.find('.layout-renderer').attributes('style')).toContain('photo.jpg')
    wrapper.unmount()
  })
})
