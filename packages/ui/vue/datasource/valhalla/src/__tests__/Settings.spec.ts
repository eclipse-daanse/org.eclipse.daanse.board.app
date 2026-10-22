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
    template: '<div><select class="va-select-stub" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option v-for="opt in options" :value="opt.value || opt.uid">{{ opt.text || opt.name }}</option></select></div>',
    props: ['modelValue', 'options']
  },
  VaInput: {
    template: '<input type="text" class="va-input-stub" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" />',
    props: ['modelValue']
  }
}

describe('Valhalla Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-rest-valhalla', name: 'Valhalla Routing Rest', type: 'rest' },
    { uid: 'conn-other', name: 'Other Rest API', type: 'rest' }
  ]

  it('sets default config parameters if not defined', () => {
    const config = {} as any
    mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      },
      global: {
        stubs: customStubs
      }
    })

    expect(config.costing).toBe('auto')
    expect(config.units).toBe('kilometers')
    expect(config.language).toBe('de-DE')
  })

  it('updates costing, units, and connection values', async () => {
    const config = {
      connection: '',
      costing: 'auto',
      units: 'kilometers',
      language: 'de-DE'
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

    const selects = wrapper.findAll('select.va-select-stub')
    const langInput = wrapper.find('input.va-input-stub')

    // Set connection (first select)
    await selects[0].setValue('conn-rest-valhalla')
    expect(config.connection).toBe('conn-rest-valhalla')

    // Set costing (second select)
    await selects[1].setValue('bicycle')
    expect(config.costing).toBe('bicycle')

    // Set units (third select)
    await selects[2].setValue('miles')
    expect(config.units).toBe('miles')

    // Change language
    await langInput.setValue('en-US')
    expect(config.language).toBe('en-US')
  })
})
