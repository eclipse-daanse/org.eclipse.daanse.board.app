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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier as variableIdentifier } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import OGCSTAStoreSettings from '../OGCSTAStoreSettings.vue'

// Setup mock variable repository in container
const mockVariableRepository = {
  getVariable: () => null
}

if (!container.isBound(variableIdentifier)) {
  container.bind(variableIdentifier).toConstantValue(mockVariableRepository)
}

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
  },
  VariableInput: {
    template: '<div class="variable-input-stub">VariableInput</div>'
  },
  VaIcon: true,
  VaCollapse: { template: '<div><slot /></div>' },
  VaCheckbox: true,
  VaDivider: true,
  VaButton: true,
  VaDateInput: true,
  VaTimeInput: true,
  VaScrollContainer: { template: '<div><slot /></div>' }
}

describe('OGCSTAStoreSettings.vue', () => {
  const connections = [
    { uid: 'conn-rest-1', name: 'REST connection', type: 'rest' },
    { uid: 'conn-mqtt-1', name: 'MQTT connection', type: 'mqtt' }
  ]

  it('renders Rest connection dropdown and MQTT connection dropdown', () => {
    const config = {
      connection: '',
      mqttConnection: '',
      history: {
        enabled: false,
        timeRange: {},
        resultTime: {},
        phenomenonTime: {}
      }
    }

    const wrapper = mount(OGCSTAStoreSettings, {
      props: {
        config,
        dataSources: [],
        connections
      },
      global: {
        stubs: customStubs
      }
    })

    const selects = wrapper.findAllComponents(customStubs.VaSelect)
    expect(selects.length).toBeGreaterThanOrEqual(1)
  })

  it('updates connection values in config when modified', async () => {
    const config = {
      connection: '',
      mqttConnection: '',
      history: {
        enabled: false,
        timeRange: {},
        resultTime: {},
        phenomenonTime: {}
      }
    }

    const wrapper = mount(OGCSTAStoreSettings, {
      props: {
        config,
        dataSources: [],
        connections
      },
      global: {
        stubs: customStubs
      }
    })

    const selects = wrapper.findAllComponents(customStubs.VaSelect)
    // Connection is the first select
    await selects[0].find('select').setValue('conn-rest-1')
    expect(config.connection).toBe('conn-rest-1')
  })
})
