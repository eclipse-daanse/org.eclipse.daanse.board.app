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

/*
 * Bundles activate asynchronously. A datasource type, a connection type or
 * a widget can register after the dialog or palette that lists them has
 * mounted - xmla and the pivot table regularly did - and has to show up
 * there without a reload or a route change.
 *
 * Mounted against the real repositories: the defect was that they gave
 * nothing a component could re-render on.
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, nextTick } from 'vue'
import { WorkspaceImpl, identifier as WORKSPACE } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { TrackedWidgetRepository } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import NewDatasourceDialog from '../datasources/NewDatasourceDialog.vue'
import NewConnectionDialog from '../connections/NewConnectionDialog.vue'
import AddWidgetWindow from '../common/AddWidgetWindow.vue'

const workspace = new WorkspaceImpl()
const resolver = { getRequired: <T>() => workspace as unknown as T }

/* The modal teleports to the body; its content is all that matters here. */
const DModal = defineComponent({
  props: { modelValue: Boolean },
  setup: (props, { slots }) => () => (props.modelValue ? h('div', slots.default?.()) : null),
})

const type = (name: string) => ({
  Store: Symbol.for(`store.${name}`),
  Settings: Symbol.for(`settings.${name}`),
  Connection: Symbol.for(`connection.${name}`),
})

describe('a type registered after the shell mounted', () => {
  it('is offered by the Create data source dialog', async () => {
    const datasources = new DatasourceRepository(resolver)
    datasources.registerDatasourceType('rest', type('rest') as never)

    const wrapper = mount(NewDatasourceDialog, {
      props: { modelValue: true },
      global: {
        provide: { [DATASOURCE_REPOSITORY]: datasources, [WORKSPACE]: workspace },
        stubs: { DModal },
      },
    })
    expect(wrapper.text()).toContain('rest')
    expect(wrapper.text()).not.toContain('xmla')

    datasources.registerDatasourceType('xmla', type('xmla') as never)
    await nextTick()
    expect(wrapper.text()).toContain('xmla')

    /* And a type whose bundle stops is no longer offered. */
    datasources.unregisterDatasourceType('xmla')
    await nextTick()
    expect(wrapper.text()).not.toContain('xmla')
    wrapper.unmount()
  })

  it('is offered by the connection type picker', async () => {
    const connections = new ConnectionRepository(resolver)
    connections.registerConnectionType('rest', type('rest') as never)

    const wrapper = mount(NewConnectionDialog, {
      props: { modelValue: true },
      global: {
        provide: { [CONNECTION_REPOSITORY]: connections, [WORKSPACE]: workspace },
        stubs: { DModal },
      },
    })
    expect(wrapper.text()).not.toContain('xmla')

    connections.registerConnectionType('xmla', type('xmla') as never)
    await nextTick()
    expect(wrapper.text()).toContain('xmla')
    wrapper.unmount()
  })

  it('appears in the widget palette', async () => {
    const widgets = new TrackedWidgetRepository()
    widgets.registerWidget('TextWidget', { name: 'Text' } as never)

    const wrapper = mount(AddWidgetWindow, {
      global: { provide: { [WIDGET_REPOSITORY]: widgets, [WORKSPACE]: workspace } },
    })
    expect(wrapper.text()).toContain('Text')
    expect(wrapper.text()).not.toContain('Pivot table')

    /* What the loader does when the pivot bundle's provider arrives. */
    widgets.providers = [{ type: 'PivotTableWidget', name: 'Pivot table' } as never]
    await nextTick()
    expect(wrapper.text()).toContain('Pivot table')

    widgets.providers = []
    await nextTick()
    expect(wrapper.text()).not.toContain('Pivot table')
    wrapper.unmount()
  })

  it('stops being listened for once the component is gone', () => {
    const datasources = new DatasourceRepository(resolver)
    const wrapper = mount(NewDatasourceDialog, {
      props: { modelValue: true },
      global: {
        provide: { [DATASOURCE_REPOSITORY]: datasources, [WORKSPACE]: workspace },
        stubs: { DModal },
      },
    })
    const listeners = (datasources as unknown as { changeListeners: Set<unknown> }).changeListeners
    expect(listeners.size).toBe(1)
    wrapper.unmount()
    expect(listeners.size).toBe(0)
  })
})
