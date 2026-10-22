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

const customStubs = {
  VaSelect: {
    template: '<div><select class="va-select-stub" :data-label="label" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option value="conn1">conn1</option><option v-for="opt in options" :value="opt.uid || opt">{{ opt.name || opt }}</option></select></div>',
    props: ['modelValue', 'label', 'options']
  },
  VaSwitch: {
    template: '<div><input type="checkbox" class="va-switch-stub" :data-label="label" :checked="modelValue" @change="$emit(\'update:modelValue\', $event.target.checked)" /></div>',
    props: ['modelValue', 'label']
  },
  VaInput: {
    template: '<div><input class="va-input-stub" :data-label="label" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" /></div>',
    props: ['modelValue', 'label']
  }
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
      },
      global: {
        stubs: customStubs
      }
    })

    expect(wrapper.find('select[data-label="Connection"]').exists()).toBe(true)
    expect(wrapper.find('input[data-label="Resource Url"]').exists()).toBe(true)
    expect(wrapper.find('input[data-label="Selected value"]').exists()).toBe(true)
    expect(wrapper.find('input[type="checkbox"][data-label="Enable Long Polling"]').exists()).toBe(true)
    expect(wrapper.find('input[data-label="Polling Interval (ms)"]').exists()).toBe(false)
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
      },
      global: {
        stubs: customStubs
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
      },
      global: {
        stubs: customStubs
      }
    })

    // Modify Connection
    const connSelect = wrapper.find('select[data-label="Connection"]')
    await connSelect.setValue('conn1')
    expect(config.connection).toBe('conn1')

    // Modify Resource Url (debounced)
    const resourceUrlInput = wrapper.find('input[data-label="Resource Url"]')
    await resourceUrlInput.setValue('users')
    // wait for 700ms debounce in updateResourceUrl
    await new Promise(resolve => setTimeout(resolve, 800))
    expect(config.resourceUrl).toBe('users')
    expect(mockFetch).toHaveBeenCalledWith('https://api.test.com/users', { method: 'HEAD' })

    // Modify Selected Value
    const selectValInput = wrapper.find('input[data-label="Selected value"]')
    await selectValInput.setValue('data.items')
    expect(config.selectedJSONValue).toBe('data.items')

    // Enable Polling
    const pollingSwitch = wrapper.find('input[type="checkbox"][data-label="Enable Long Polling"]')
    await (pollingSwitch as any).setChecked(true)
    expect(config.pollingEnabled).toBe(true)

    // Wait for DOM update
    await wrapper.vm.$nextTick()

    // Modify Polling Interval (debounced)
    const intervalInput = wrapper.find('input[data-label="Polling Interval (ms)"]')
    await intervalInput.setValue('7500')
    // wait for 700ms debounce in intervalDebounce
    await new Promise(resolve => setTimeout(resolve, 800))
    expect(config.pollingInterval).toBe(7500)
  })
})
