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
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Settings from '../Settings.vue'

const customStubs = {
  VaSelect: {
    template: '<div><select class="va-select-stub" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option v-for="opt in options" :value="opt.uid">{{ opt.name }}</option></select></div>',
    props: ['modelValue', 'options']
  },
  VaSwitch: {
    template: '<input type="checkbox" class="va-switch-stub" :checked="modelValue" @change="$emit(\'update:modelValue\', $event.target.checked)" />',
    props: ['modelValue']
  },
  VaInput: {
    template: '<input type="text" class="va-input-stub" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" />',
    props: ['modelValue']
  }
}

describe('GraphQL Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn1', name: 'GraphQL Connection 1', type: 'graphql' },
    { uid: 'conn2', name: 'GraphQL Connection 2', type: 'graphql' },
    { uid: 'conn3', name: 'REST Connection', type: 'rest' }
  ]

  it('renders select connection dropdown and switch', () => {
    const config = { connection: '', pollingEnabled: false, pollingInterval: 5000 }
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
    expect(wrapper.find('input[type="checkbox"].va-switch-stub').exists()).toBe(true)
    expect(wrapper.find('input[type="text"].va-input-stub').exists()).toBe(false)
  })

  it('shows polling interval input when polling is enabled', async () => {
    const config = { connection: '', pollingEnabled: true, pollingInterval: 5000 }
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

    expect(wrapper.find('input[type="text"].va-input-stub').exists()).toBe(true)
  })

  it('updates connection selection in the config', async () => {
    const config = { connection: '', pollingEnabled: false, pollingInterval: 5000 }
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
    await select.setValue('conn2')
    expect(config.connection).toBe('conn2')
  })

  it('updates pollingInterval after debounce delay', async () => {
    const config = { connection: 'conn1', pollingEnabled: true, pollingInterval: 5000 }
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

    const intervalInput = wrapper.find('input[type="text"].va-input-stub')
    await intervalInput.setValue('8000')

    // Wait for the 700ms debounce
    await new Promise(resolve => setTimeout(resolve, 850))

    expect(config.pollingInterval).toBe(8000)
  })
})
