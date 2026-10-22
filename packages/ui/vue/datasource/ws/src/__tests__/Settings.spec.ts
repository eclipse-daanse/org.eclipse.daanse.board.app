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
import { describe, it, expect } from 'vitest'
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

describe('WS Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-ws', name: 'WebSocket Connection', type: 'ws' },
    { uid: 'conn-mqtt', name: 'MQTT Connection', type: 'mqtt' },
    { uid: 'conn-other', name: 'Other Connection', type: 'other' }
  ]

  it('renders all settings inputs', () => {
    const config = { connection: '', accumulate: false, topic: '' }
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
    expect(wrapper.find('input[type="text"].va-input-stub').exists()).toBe(true)
  })

  it('filters only WS and MQTT connections', () => {
    const config = { connection: '', accumulate: false, topic: '' }
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
    const options = select.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].text()).toBe('WebSocket Connection')
    expect(options[1].text()).toBe('MQTT Connection')
  })

  it('mutates configuration properties on user inputs', async () => {
    const config = { connection: '', accumulate: false, topic: '' }
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

    // Update connection
    const select = wrapper.find('select.va-select-stub')
    await select.setValue('conn-ws')
    expect(config.connection).toBe('conn-ws')

    // Toggle accumulate switch
    const toggle = wrapper.find('input[type="checkbox"].va-switch-stub')
    ;(toggle.element as HTMLInputElement).checked = true
    await toggle.trigger('change')
    expect(config.accumulate).toBe(true)

    // Update topic input
    const input = wrapper.find('input[type="text"].va-input-stub')
    await input.setValue('live/sensors/temp')
    expect(config.topic).toBe('live/sensors/temp')
  })
})
