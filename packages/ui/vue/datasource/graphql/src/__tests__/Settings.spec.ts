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
      }
    })

    expect(wrapper.find('select').exists()).toBe(true)
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
      }
    })

    const select = wrapper.find('select')
    await chooseOption(wrapper, 'GraphQL Connection 2')
    expect(config.connection).toBe('conn2')
  })

  it('updates pollingInterval after debounce delay', async () => {
    const config = { connection: 'conn1', pollingEnabled: true, pollingInterval: 5000 }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    const intervalInput = wrapper.find('input[type="text"].va-input-stub')
    await intervalInput.setValue('8000')

    // Wait for the 700ms debounce
    await new Promise(resolve => setTimeout(resolve, 850))

    expect(config.pollingInterval).toBe(8000)
  })
})
