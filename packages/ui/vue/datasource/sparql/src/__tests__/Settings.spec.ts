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
      }
    })

    expect(wrapper.find('select').exists()).toBe(true)
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
      }
    })

    const select = wrapper.find('select')
    await chooseOption(wrapper, 'SPARQL Endpoint 2')
    expect(config.connection).toBe('conn-rest-2')
  })
})
