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

import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { identifier as CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { identifier as WORKSPACE, WorkspaceImpl } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import ConnectionEditor from '../ConnectionEditor.vue'

const Preview = defineComponent({
  props: { itemId: { type: String, required: true } },
  setup: (props) => () => h('div', { class: 'catalogue' }, props.itemId),
})

const Settings = defineComponent({
  props: { config: { type: Object, required: true } },
  setup: () => () => h('div', { class: 'settings-form' }),
})

const PREVIEW = Symbol.for('ConnectionEditorSpecPreview')
const SETTINGS = Symbol.for('ConnectionEditorSpecSettings')

/* `withPreview` is the catalogue case; without it, every type we ship today. */
function setUp(withPreview: boolean, view: 'settings' | 'preview' = 'settings') {
  const connection: any = {
    uid: 'c1',
    name: 'govdata',
    type: 'sparql',
    tags: Object.assign(new Set<string>(), { clear: Set.prototype.clear }),
    config: { url: 'https://www.govdata.de/sparql' },
  }
  const repository = {
    getConnectionModel: () => connection,
    getConnections: () => [connection],
    getConnectionIdentifiers: () => ({
      Settings: SETTINGS,
      ...(withPreview ? { Preview: PREVIEW } : {}),
    }),
    resolveIdentifier: (symbol: symbol) =>
      symbol === PREVIEW ? Preview : symbol === SETTINGS ? Settings : null,
    registeredConnections: ['sparql'],
    saveConnection: vi.fn(),
  }
  const wrapper = mount(ConnectionEditor, {
    props: { itemId: 'c1', view },
    global: {
      provide: { [CONNECTION_REPOSITORY]: repository, [WORKSPACE]: new WorkspaceImpl() },
    },
  })
  return { wrapper, repository }
}

describe('ConnectionEditor', () => {
  it('shows what a type offers to look at, in the preview', async () => {
    const { wrapper } = setUp(true, 'preview')
    await flushPromises()

    expect(wrapper.find('.catalogue').text()).toBe('c1')
    /* The other half is not rendered beside it - they are two visits. */
    expect(wrapper.find('.settings-form').exists()).toBe(false)
  })

  it('shows the settings when that is the view, preview or not', async () => {
    const { wrapper } = setUp(true, 'settings')
    await flushPromises()

    expect(wrapper.find('.settings-form').exists()).toBe(true)
    expect(wrapper.find('.catalogue').exists()).toBe(false)
  })

  it('renders nothing in place of a preview a type does not have', async () => {
    const { wrapper } = setUp(false, 'preview')
    await flushPromises()

    expect(wrapper.find('.catalogue').exists()).toBe(false)
  })

  it('defaults to the settings, which is where every type without a preview stays', async () => {
    const wrapper = mount(ConnectionEditor, {
      props: { itemId: 'c1' },
      global: {
        provide: {
          [CONNECTION_REPOSITORY]: setUp(false).repository,
          [WORKSPACE]: new WorkspaceImpl(),
        },
      },
    })
    await flushPromises()

    expect(wrapper.find('.settings-form').exists()).toBe(true)
  })
})
