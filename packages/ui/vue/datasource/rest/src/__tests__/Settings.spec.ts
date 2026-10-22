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
import Settings from '../Settings.vue'

const mockFetch = vi.fn().mockResolvedValue({
  ok: true,
  status: 200,
  statusText: 'OK'
})

vi.stubGlobal('fetch', mockFetch)

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

describe('REST Datasource Settings.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders standard fields', () => {
    const config = { connection: '', resourceUrl: '', selectedJSONValue: '', pollingEnabled: false }
    const wrapper = mount(Settings, {
      props: {
        config,
        connections: [],
        dataSources: []
      }
    })

    expect(wrapper.find('select[data-label="Connection"]').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input[type="checkbox"][data-label="Enable Long Polling"]').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(false)
  })

  it('filters connections list to type rest', () => {
    const config = { connection: '', resourceUrl: '', selectedJSONValue: '', pollingEnabled: false }
    const connections = [
      { name: 'Conn 1', uid: 'conn1', type: 'rest', config: { url: 'https://api.test.com/' } },
      { name: 'Conn 2', uid: 'conn2', type: 'mqtt' }
    ]
    const wrapper = mount(Settings, {
      props: {
        config,
        connections,
        dataSources: []
      }
    })

    const vm = wrapper.vm as any
    expect(vm.connectionsFiltered).toEqual([
      { name: 'Conn 1', uid: 'conn1', type: 'rest', config: { url: 'https://api.test.com/' } }
    ])
  })

  it('updates the config object when inputs are modified', async () => {
    const config = { connection: '', resourceUrl: '', selectedJSONValue: '', pollingEnabled: false, pollingInterval: 5000 }
    const connections = [
      { name: 'Conn 1', uid: 'conn1', type: 'rest', config: { url: 'https://api.test.com/' } }
    ]
    const wrapper = mount(Settings, {
      props: {
        config,
        connections,
        dataSources: []
      }
    })

    // Modify Connection
    const connSelect = wrapper.find('select[data-label="Connection"]')
    await connSelect.setValue('conn1')
    expect(config.connection).toBe('conn1')

    // Modify Resource Url (debounced)
    const resourceUrlInput = wrapper.find('input')
    await resourceUrlInput.setValue('users')
    // wait for 700ms debounce in updateResourceUrl
    await new Promise(resolve => setTimeout(resolve, 800))
    expect(config.resourceUrl).toBe('users')
    expect(mockFetch).toHaveBeenCalledWith('https://api.test.com/users', { method: 'HEAD' })

    // Modify Selected Value
    const selectValInput = wrapper.find('input')
    await selectValInput.setValue('data.items')
    expect(config.selectedJSONValue).toBe('data.items')

    // Enable Polling
    const pollingSwitch = wrapper.find('input[type="checkbox"][data-label="Enable Long Polling"]')
    await (pollingSwitch as any).trigger('click')
    expect(config.pollingEnabled).toBe(true)

    // Wait for DOM update
    await wrapper.vm.$nextTick()

    // Modify Polling Interval (debounced)
    const intervalInput = wrapper.find('input')
    await intervalInput.setValue('7500')
    // wait for 700ms debounce in intervalDebounce
    await new Promise(resolve => setTimeout(resolve, 800))
    expect(config.pollingInterval).toBe(7500)
  })
})
