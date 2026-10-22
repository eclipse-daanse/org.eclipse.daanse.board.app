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
      }
    })

    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.find('[role="switch"]').exists()).toBe(true)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
  })

  it('filters only WS and MQTT connections', () => {
    const config = { connection: '', accumulate: false, topic: '' }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    const select = wrapper.find('select')
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
      }
    })

    // Update connection
    const select = wrapper.find('select')
    await chooseOption(wrapper, 'WebSocket Connection')
    expect(config.connection).toBe('conn-ws')

    // Toggle accumulate switch
    const toggle = wrapper.find('[role="switch"]')
    await toggle.trigger('click')
    expect(config.accumulate).toBe(true)

    // Update topic input
    const input = wrapper.find('input[type="text"]')
    await input.setValue('live/sensors/temp')
    expect(config.topic).toBe('live/sensors/temp')
  })
})
