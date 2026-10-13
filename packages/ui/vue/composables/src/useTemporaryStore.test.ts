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
import { defineComponent, h, ref, shallowRef } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { useTemporaryStore } from './useTemporaryStore'

/** A factory that, like the XMLA one, refuses a source without its cube. */
function repository() {
  const factory = (config: { cube?: string }) => {
    if (!config.cube) throw new Error('Invalid XmlaStore configuration.')
    return { cube: config.cube, destroy() {} }
  }
  return {
    getDatasourceIdentifiers: () => ({ Store: 'store' }),
    resolveIdentifier: () => factory,
  }
}

function preview(config: Record<string, unknown>) {
  const settings = ref({ type: 'xmla', config })
  const store = shallowRef<any>(undefined)
  let api!: ReturnType<typeof useTemporaryStore>
  const Preview = defineComponent({
    setup() {
      api = useTemporaryStore('xmla', settings, store)
      return () => h('div')
    },
  })
  mount(Preview, { global: { provide: { [identifier as symbol]: repository() } } })
  return { settings, store, update: () => api.update() }
}

describe('useTemporaryStore', () => {
  it('opens without a store while the settings are incomplete', async () => {
    const { store } = preview({ connection: 'c' })
    await flushPromises()
    expect(store.value).toBeNull()
  })

  it('builds the store once the missing setting is there', async () => {
    const { settings, store, update } = preview({ connection: 'c' })
    await flushPromises()

    settings.value.config.cube = 'Sales'
    expect(await update()).toMatchObject({ cube: 'Sales' })
    expect(store.value).toMatchObject({ cube: 'Sales' })
  })

  it('answers an update it cannot build with nothing', async () => {
    const { update } = preview({ connection: 'c' })
    await flushPromises()
    expect(await update()).toBeNull()
  })
})
