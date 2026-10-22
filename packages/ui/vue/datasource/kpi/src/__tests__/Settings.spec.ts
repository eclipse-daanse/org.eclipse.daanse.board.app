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

const customStubs = {
  VaSelect: {
    template: '<div><select class="va-select-stub" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option v-for="opt in options" :value="opt.uid || opt.CUBE_NAME">{{ opt.name || opt.CUBE_NAME }}</option></select></div>',
    props: ['modelValue', 'options']
  }
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
      },
      global: {
        stubs: customStubs
      }
    })

    // Allow watch/onMounted ticks to run
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(mockFetchCubes).toHaveBeenCalledWith('conn-xmla-1')
    expect(wrapper.findAll('select.va-select-stub').length).toBe(2)
  })

  it('updates cube value in the config when selected', async () => {
    const config = { connection: 'conn-xmla-1', cube: '' }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      },
      global: {
        stubs: customStubs
      }
    })

    await new Promise(resolve => setTimeout(resolve, 0))

    const selects = wrapper.findAll('select.va-select-stub')
    // Selects[1] is the Cube select
    await selects[1].setValue('Sales')
    expect(config.cube).toBe('Sales')
  })
})
