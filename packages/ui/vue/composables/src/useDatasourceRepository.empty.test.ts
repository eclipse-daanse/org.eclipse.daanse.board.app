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

import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, ref } from 'vue'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { useDatasourceRepository, type IVueDatasourceRepository } from './useDatasourceRepository'

/*
 * A widget dropped onto a board has no datasource until its settings name
 * one. Asking the repository for it anyway is what filled the console with
 * "Store with id ... not found".
 */
function mountWithout(datasourceId: string | undefined) {
  const getDatasource = vi.fn(() => {
    throw new Error(`Store with id ${datasourceId} not found`)
  })
  let api!: IVueDatasourceRepository

  const Widget = defineComponent({
    setup() {
      api = useDatasourceRepository(ref(datasourceId as string), 'string', ref(null))
      return () => h('div')
    },
  })

  const wrapper = mount(Widget, {
    global: { provide: { [identifier as symbol]: { getDatasource } } },
  })
  return { wrapper, getDatasource, api: () => api }
}

describe('useDatasourceRepository', () => {
  it.each([undefined, ''])('does not ask the repository for a widget without datasource (%o)', async (id) => {
    const warn = vi.spyOn(console, 'warn')
    const { wrapper, getDatasource, api } = mountWithout(id)

    api().update()
    await api().callEvent('anything', {})
    expect(api().getDatasourceInstance()).toBeNull()
    wrapper.unmount()

    expect(getDatasource).not.toHaveBeenCalled()
    expect(warn).not.toHaveBeenCalled()
    warn.mockRestore()
  })
})
