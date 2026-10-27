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

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  ConnectionImpl,
  identifier as WORKSPACE,
  WorkspaceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { resetModelDocs } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import NewDatasourceDialog from '../NewDatasourceDialog.vue'

const ROOT = resolve(__dirname, '../../../../../../..')
const XMLA_STORE = readFileSync(
  resolve(ROOT, 'packages/lib/datasource/xmla/model/XmlaDataSourceModel.ecore'),
  'utf8',
)

/*
 * The dialog as a person meets it: the xmla type registered the way its
 * bundle registers it, a workspace holding one xmla connection, and the
 * modal rendered into the document.
 */
function setUp() {
  const cubes = vi.fn(async (settings: Record<string, unknown>) =>
    settings.connection === 'c1'
      ? [
          { label: 'Sales', value: 'Sales' },
          { label: 'Warehouse', value: 'Warehouse' },
        ]
      : [],
  )
  const created: any[] = []
  const repository = {
    registeredDatasources: ['xmla'],
    getDatasourceIdentifiers: (type: string) =>
      type === 'xmla'
        ? { Model: XMLA_STORE, connections: ['xmla'], choices: { cube: cubes } }
        : undefined,
    createDatasource: vi.fn((type: string, config: Record<string, unknown>) => {
      const source = { uid: 'ds1', type, config, tags: new Set<string>() } as any
      created.push(source)
      return source
    }),
    saveDatasource: vi.fn(),
  }

  const workspace = new WorkspaceImpl()
  const connection = new ConnectionImpl()
  connection.uid = 'c1'
  connection.name = 'Demo'
  connection.type = 'xmla'
  workspace.connections.push(connection)

  const wrapper = mount(NewDatasourceDialog, {
    props: { modelValue: false, forConnection: 'c1' },
    attachTo: document.body,
    global: {
      provide: { [DATASOURCE_REPOSITORY]: repository, [WORKSPACE]: workspace },
    },
  })
  return { wrapper, cubes, repository, created }
}

const buttons = () => Array.from(document.body.querySelectorAll('button'))
const button = (text: string) => buttons().find((b) => b.textContent?.trim().includes(text))

function fieldNamed(label: string): HTMLInputElement | HTMLSelectElement | undefined {
  const tag = Array.from(document.body.querySelectorAll('label')).find((l) =>
    l.textContent?.includes(label),
  )
  return tag ? (document.getElementById(tag.getAttribute('for')!) as any) : undefined
}

async function choose(select: HTMLSelectElement, text: string) {
  const option = Array.from(select.options).find((o) => o.text.trim() === text)!
  select.value = option.value
  select.dispatchEvent(new Event('change'))
  await flushPromises()
}

describe('NewDatasourceDialog', () => {
  beforeEach(() => resetModelDocs())
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('asks for the cube from the connection\'s cubes, and will not create a source without one', async () => {
    const { wrapper, cubes, repository } = setUp()
    await wrapper.setProps({ modelValue: true })
    await flushPromises()

    button('xmla')!.click()
    await flushPromises()

    expect(cubes).toHaveBeenCalledWith(expect.objectContaining({ connection: 'c1' }))

    const name = fieldNamed('Editor.name') as HTMLInputElement
    name.value = 'Sales by month'
    name.dispatchEvent(new Event('input'))
    await flushPromises()

    const cube = fieldNamed('Cube') as HTMLSelectElement
    expect(cube.tagName).toBe('SELECT')
    expect(cube.required).toBe(true)
    expect(Array.from(cube.options).map((o) => o.text.trim())).toEqual(
      expect.arrayContaining(['Sales', 'Warehouse']),
    )

    /* No cube yet: the form is not complete. */
    expect(button('Wizard.create')!.disabled).toBe(true)

    await choose(cube, 'Warehouse')
    expect(button('Wizard.create')!.disabled).toBe(false)

    button('Wizard.create')!.click()
    await flushPromises()

    expect(repository.createDatasource).toHaveBeenCalledWith(
      'xmla',
      expect.objectContaining({ cube: 'Warehouse', connection: 'c1' }),
    )
    wrapper.unmount()
  })

  it('is not held back by a field it does not show', async () => {
    const { wrapper } = setUp()
    await wrapper.setProps({ modelValue: true })
    button('xmla')!.click()
    await flushPromises()

    /* requestParams is required by the model and written by the designer. */
    expect(fieldNamed('Request Params')).toBeUndefined()
    wrapper.unmount()
  })
})
