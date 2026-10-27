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
import { DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { XmlaStore } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { activate } from '../index'

/* The preview brings Monaco, which jsdom cannot host - and registering a
  type does not need it. */
vi.mock('../Preview.vue', () => ({ default: {} }))

vi.mock('org.eclipse.daanse.board.app.lib.datasource.xmla', () => ({
  factorySymbol: Symbol.for('XmlaStoreFactory'),
  XmlaStore: {
    fetchCubes: vi.fn().mockResolvedValue([
      { CUBE_NAME: 'Sales', CUBE_CAPTION: 'Sales figures' },
      { CUBE_NAME: 'Warehouse' },
    ]),
  },
}))

function register() {
  const registerDatasourceType = vi.fn()
  const connections = {}
  const services = {
    register: vi.fn(),
    getRequired: (id: string) =>
      id === DATASOURCE_REPOSITORY ? { registerDatasourceType } : id === CONNECTION_REPOSITORY ? connections : undefined,
  }
  activate({ services } as any)
  return { identifiers: registerDatasourceType.mock.calls[0][1], connections }
}

describe('xmla data source type', () => {
  it('offers the cubes of the chosen connection for the cube field', async () => {
    const { identifiers, connections } = register()

    expect(identifiers.namespace).toBe('datasourceXmla')
    const offered = await identifiers.choices.cube({ connection: 'c1' })

    expect(XmlaStore.fetchCubes).toHaveBeenCalledWith('c1', connections)
    expect(offered).toEqual([
      { label: 'Sales figures', value: 'Sales' },
      { label: 'Warehouse', value: 'Warehouse' },
    ])
  })

  it('offers nothing before a connection is chosen', async () => {
    const { identifiers } = register()
    vi.mocked(XmlaStore.fetchCubes).mockClear()

    expect(await identifiers.choices.cube({})).toEqual([])
    expect(XmlaStore.fetchCubes).not.toHaveBeenCalled()
  })
})
