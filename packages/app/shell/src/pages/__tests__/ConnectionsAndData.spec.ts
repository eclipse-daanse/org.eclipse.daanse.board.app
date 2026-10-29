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

import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  identifier as WORKSPACE,
  WorkspaceImpl,
  ConnectionImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import ConnectionsAndData from '../ConnectionsAndData.vue'

/*
 * Which tabs a selection is given. The editors below are stubbed: what is
 * under test is the choice between one tab and two, which the page makes
 * before either of them is reached.
 */
const PREVIEW = Symbol.for('ConnectionsAndDataSpecPreview')

function connection(uid: string, type: string) {
  const held = new ConnectionImpl()
  held.uid = uid
  held.name = uid
  held.type = type
  return held
}

function setUp() {
  const workspace = new WorkspaceImpl()
  workspace.connections.add(connection('catalogue', 'sparql'))
  workspace.connections.add(connection('server', 'xmla'))

  /* Only the catalogue has anything to look at. */
  const repository = {
    getConnectionIdentifiers: (type: string) => ({
      Settings: Symbol.for('S'),
      ...(type === 'sparql' ? { Preview: PREVIEW } : {}),
    }),
    resolveIdentifier: () => null,
    registeredConnections: ['sparql', 'xmla'],
    getConnections: () => [...workspace.connections],
  }

  const wrapper = mount(ConnectionsAndData, {
    global: {
      provide: { [CONNECTION_REPOSITORY]: repository, [WORKSPACE]: workspace },
      stubs: {
        DataTree: { name: 'DataTree', template: '<div class="tree" />' },
        ConnectionEditor: { props: ['itemId', 'view'], template: '<div class="ce">{{ view }}</div>' },
        DatasourceEditor: { template: '<div />' },
      },
    },
  })
  return { wrapper }
}

const tabs = (wrapper: ReturnType<typeof setUp>['wrapper']) =>
  wrapper.findAll('[role="tab"]').map((each) => each.text())

async function select(wrapper: ReturnType<typeof setUp>['wrapper'], itemId: string) {
  await wrapper.findComponent({ name: 'DataTree' }).vm.$emit('update:modelValue', {
    type: 'Connection',
    itemId,
  })
  await flushPromises()
}

describe('ConnectionsAndData tabs', () => {
  it('gives a connection whose type offers a preview two tabs, and opens on it', async () => {
    const { wrapper } = setUp()
    await select(wrapper, 'catalogue')

    expect(tabs(wrapper)).toHaveLength(2)
    expect(wrapper.find('.ce').text()).toBe('preview')
  })

  it('leaves a connection with nothing to show on its settings, with one tab', async () => {
    const { wrapper } = setUp()
    await select(wrapper, 'server')

    expect(tabs(wrapper)).toHaveLength(1)
    expect(wrapper.find('.ce').text()).toBe('settings')
  })

  it('follows the selection from one kind of connection to the other', async () => {
    const { wrapper } = setUp()

    await select(wrapper, 'catalogue')
    expect(tabs(wrapper)).toHaveLength(2)

    await select(wrapper, 'server')
    expect(tabs(wrapper)).toHaveLength(1)
    expect(wrapper.find('.ce').text()).toBe('settings')
  })
})
