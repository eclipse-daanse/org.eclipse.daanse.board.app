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
import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import { CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { identifier as DATASOURCE_REPOSITORY_ID } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  identifier as WORKSPACE_ID,
  ConnectionImpl,
  DatasourceImpl,
  WorkspaceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  activate as activateXmlaStore,
  XMLA_STORE_FACTORY,
  type XmlaStore,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import XMLA_STORE_MODEL from 'org.eclipse.daanse.board.app.lib.datasource.xmla/model/XmlaDataSourceModel.ecore?raw'
import NewDatasourceDialog from '../NewDatasourceDialog.vue'

/*
 * Creating an XMLA data source through the dialog. The repository is a
 * stand-in that keeps what the dialog hands it; the store the stored
 * configuration is then built into is the real one.
 */

let wrapper: VueWrapper | undefined

function setUp() {
  const workspace = new WorkspaceImpl()
  const held = new ConnectionImpl()
  held.uid = 'xmla-1'
  held.name = 'FoodMart'
  held.type = 'xmla'
  workspace.connections.push(held)

  const datasources = {
    registeredDatasources: ['xmla'],
    getDatasourceIdentifiers: () => ({ Model: XMLA_STORE_MODEL, icon: 'dataset', connections: ['xmla'] }),
    createDatasource(type: string, config: Record<string, unknown>) {
      const datasource = new DatasourceImpl()
      datasource.uid = 'source-1'
      datasource.type = type
      datasource.config = config
      workspace.datasources.push(datasource)
      return datasource
    },
    saveDatasource: vi.fn(),
  }

  wrapper = mount(NewDatasourceDialog, {
    props: { modelValue: false, forConnection: 'xmla-1' },
    attachTo: document.body,
    global: { provide: { [DATASOURCE_REPOSITORY_ID]: datasources, [WORKSPACE_ID]: workspace } },
  })
  return { workspace }
}

/* Opened from the connection's menu, the way the tree does it. */
async function openOnXmla() {
  await wrapper!.setProps({ modelValue: true })
  button('xmla').click()
  await flushPromises()
}

/* The dialog renders into a teleport, so it is looked for in the document. */
function button(text: string): HTMLButtonElement {
  const found = [...document.querySelectorAll('button')].find((b) => b.textContent?.includes(text))
  if (!found) throw new Error(`no button "${text}"`)
  return found
}

function labels(): string[] {
  return [...document.querySelectorAll('label')].map((l) => l.textContent?.replace('*', '').trim() ?? '')
}

async function type(label: string, value: string) {
  const tag = [...document.querySelectorAll('label')].find((l) => l.textContent?.trim().startsWith(label))
  const input = tag && (document.getElementById(tag.getAttribute('for') ?? '') as HTMLInputElement)
  if (!input) throw new Error(`no field "${label}"`)
  input.value = value
  input.dispatchEvent(new Event('input'))
  await flushPromises()
}

describe('NewDatasourceDialog - XMLA', () => {
  afterEach(() => {
    wrapper?.unmount()
    wrapper = undefined
    document.body.innerHTML = ''
  })

  it('does not ask for the request parameters', async () => {
    setUp()
    await openOnXmla()

    expect(labels()).toContain('Cube')
    expect(labels()).not.toContain('Request Params')
  })

  it('creates a source from a connection and a cube alone, and the store is built from it', async () => {
    const { workspace } = setUp()
    await openOnXmla()

    await type('Editor.name', 'Sales')
    await type('Cube', 'Sales')
    expect(button('Wizard.create').disabled).toBe(false)
    button('Wizard.create').click()
    await flushPromises()

    const [created] = workspace.datasources.toArray()
    expect(created.config).toMatchObject({ connection: 'xmla-1', cube: 'Sales' })
    expect((created.config as Record<string, unknown>).requestParams).toBeUndefined()

    /* The live half: the store takes that configuration as it is. */
    const services = new DefaultServiceRegistry()
    services.register(CONNECTION_REPOSITORY, { getConnection: () => ({}) } as never)
    activateXmlaStore({ services } as never)
    const store = services.getRequired<(config: unknown) => XmlaStore>(XMLA_STORE_FACTORY)(
      created.config,
    )
    expect(() => store.changeFilters({ area: 'rows', id: 'none', filters: [] })).not.toThrow()
    // At least these: a store may complete the request with axes of its own.
    expect((created.config as Record<string, unknown>).requestParams).toMatchObject({
      rows: [],
      columns: [],
      measures: [],
      filters: [],
    })
  })
})
