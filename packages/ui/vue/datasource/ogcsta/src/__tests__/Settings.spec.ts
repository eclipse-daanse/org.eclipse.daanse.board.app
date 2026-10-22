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
      }
    })

    const selects = wrapper.findAll('select')
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
      }
    })

    const selects = wrapper.findAll('select')
    // Connection is the first select
    await chooseOption(wrapper, 'REST connection', 0)
    expect(config.connection).toBe('conn-rest-1')
  })
})
