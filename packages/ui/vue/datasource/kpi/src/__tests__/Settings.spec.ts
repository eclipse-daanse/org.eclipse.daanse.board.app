/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

const { mockFetchCubes } = vi.hoisted(() => {
  return {
    mockFetchCubes: vi.fn().mockResolvedValue([
      { CUBE_NAME: 'Accounting' },
      { CUBE_NAME: 'Sales' }
    ])
  }
})

vi.mock('org.eclipse.daanse.board.app.lib.datasource.xmla', () => {
  return {
    XmlaStore: {
      fetchCubes: mockFetchCubes
    }
  }
})

import Settings from '../Settings.vue'

/*
 * Mounted with its real controls. These tests were written when the dialogs
 * used Vuestic; the project's own DSelect and DInput render a plain select
 * and input, so there is nothing left to stand in for - and a stub left the
 * assertions with nothing to find.
 */
function fieldNamed(wrapper: ReturnType<typeof mount>, label: string) {
  const tag = wrapper.findAll('label').find((l) => l.text().includes(label))
  return tag ? wrapper.find(`#${tag.attributes('for')}`) : undefined
}

/*
 * DSelect gives its options the entry's index as value and maps back
 * internally, so a test picks an option by the words it shows.
 */
async function chooseOption(wrapper: ReturnType<typeof mount>, text: string, at = 0) {
  const select = wrapper.findAll('select')[at]
  const option = select.findAll('option').find((o) => o.text().includes(text))
  await select.setValue(option!.element.value)
}

describe('KPI Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-xmla-1', name: 'XMLA Connection 1', type: 'xmla' },
    { uid: 'conn-xmla-2', name: 'XMLA Connection 2', type: 'xmla' },
    { uid: 'other-conn', name: 'Other Connection', type: 'other' }
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders dropdowns and fetches cubes on mount if connection exists', async () => {
    const config = { connection: 'conn-xmla-1', cube: '' }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    // Allow watch/onMounted ticks to run
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(mockFetchCubes).toHaveBeenCalledWith('conn-xmla-1')
    expect(wrapper.findAll('select').length).toBe(2)
  })

  it('updates cube value in the config when selected', async () => {
    const config = { connection: 'conn-xmla-1', cube: '' }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    await new Promise(resolve => setTimeout(resolve, 0))

    const selects = wrapper.findAll('select')
    // Selects[1] is the Cube select
    await selects[1].setValue('Sales')
    expect(config.cube).toBe('Sales')
  })
})
