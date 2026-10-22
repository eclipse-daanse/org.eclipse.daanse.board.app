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

const { mockSetQuery, mockGetQuery, mockAddTab, mockOn } = vi.hoisted(() => {
  return {
    mockSetQuery: vi.fn(),
    mockGetQuery: vi.fn().mockReturnValue('SELECT * WHERE {}'),
    mockAddTab: vi.fn().mockImplementation(() => {
      return {
        setQuery: mockSetQuery,
        getQuery: mockGetQuery,
        on: mockOn
      }
    }),
    mockOn: vi.fn()
  }
})

vi.mock('@triply/yasgui', () => {
  const MockYasgui = function(this: any) {
    this.addTab = mockAddTab;
  };
  return {
    default: MockYasgui,
    __esModule: true
  }
})

import Settings from '../Settings.vue'

const customStubs = {
  VaSelect: {
    template: '<div><select class="va-select-stub" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option v-for="opt in options" :value="opt.uid">{{ opt.name }}</option></select></div>',
    props: ['modelValue', 'options']
  }
}

describe('SPARQL Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-rest-1', name: 'SPARQL Endpoint 1', type: 'rest' },
    { uid: 'conn-rest-2', name: 'SPARQL Endpoint 2', type: 'rest' },
    { uid: 'other-conn', name: 'Other Connection', type: 'other' }
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders dropdown and initializes Yasgui editor', () => {
    const config = {
      connection: '',
      query: 'SELECT ?s ?p ?o WHERE {}',
      uid: 'sparql-test',
      type: 'sparql',
      name: 'SPARQL'
    } as any

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

    expect(wrapper.find('select.va-select-stub').exists()).toBe(true)
    expect(mockAddTab).toHaveBeenCalled()
    expect(mockSetQuery).toHaveBeenCalledWith('SELECT ?s ?p ?o WHERE {}')
  })

  it('updates connection in the config when selected', async () => {
    const config = {
      connection: '',
      query: '',
      uid: 'sparql-test',
      type: 'sparql',
      name: 'SPARQL'
    } as any

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

    const select = wrapper.find('select.va-select-stub')
    await select.setValue('conn-rest-2')
    expect(config.connection).toBe('conn-rest-2')
  })
})
