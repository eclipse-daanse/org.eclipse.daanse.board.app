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

const customStubs = {
  VaSelect: {
    template: '<div><select class="va-select-stub" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option v-for="opt in options" :value="opt.value || opt.uid">{{ opt.label || opt.name }}</option></select></div>',
    props: ['modelValue', 'options']
  },
  VaInput: {
    template: '<div><input class="va-input-stub" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" /></div>',
    props: ['modelValue']
  },
  VaSwitch: {
    template: '<input type="checkbox" class="va-switch-stub" :checked="modelValue" @change="$emit(\'update:modelValue\', $event.target.checked)" />',
    props: ['modelValue']
  },
  VaIcon: true
}

describe('CSV Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-rest-1', name: 'REST Conn 1', type: 'rest', config: { url: 'https://api.example.com/' } },
    { uid: 'conn-rest-2', name: 'REST Conn 2', type: 'rest', config: { url: 'https://api.test.com/' } },
    { uid: 'other-conn', name: 'Other Conn', type: 'other' }
  ]

  beforeEach(() => {
    vi.useFakeTimers()
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK'
    })
  })

  it('renders all input fields', () => {
    const config = { connection: '', resourceUrl: '', separators: [','], skipRowsFromStart: 0, skipRowsFromEnd: 0, pollingEnabled: false }
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
    expect(wrapper.findAll('input.va-input-stub').length).toBeGreaterThanOrEqual(1)
  })

  it('updates connection selection in config', async () => {
    const config = { connection: '', resourceUrl: '', separators: [','], skipRowsFromStart: 0, skipRowsFromEnd: 0, pollingEnabled: false }
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

    const selects = wrapper.findAll('select.va-select-stub')
    await selects[0].setValue('conn-rest-2')
    expect(config.connection).toBe('conn-rest-2')
  })

  it('debounces and propagates resourceUrl changes', async () => {
    const config = { connection: 'conn-rest-1', resourceUrl: '', separators: [','], skipRowsFromStart: 0, skipRowsFromEnd: 0, pollingEnabled: false }
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

    const inputs = wrapper.findAll('input.va-input-stub')
    // First input is resourceUrl
    await inputs[0].setValue('users.csv')
    expect(config.resourceUrl).toBe('') // should not update immediately due to debounce

    vi.advanceTimersByTime(750)
    expect(config.resourceUrl).toBe('users.csv')
  })
})
