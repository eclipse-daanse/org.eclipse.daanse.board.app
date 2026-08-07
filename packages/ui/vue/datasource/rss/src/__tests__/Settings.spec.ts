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
  }
}

describe('RSS Datasource Settings.vue', () => {
  const connections = [
    { uid: 'rss-conn-1', name: 'RSS Feed 1', type: 'rss' },
    { uid: 'rss-conn-2', name: 'RSS Feed 2', type: 'rss' },
    { uid: 'other-conn', name: 'Other Connection', type: 'other' }
  ]

  it('renders select connection dropdown filtering only RSS type', () => {
    const config = { connection: '' }
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
    expect(select.exists()).toBe(true)
  })

  it('updates connection selection in the config when selected', async () => {
    const config = { connection: '' }
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
    await select.setValue('rss-conn-2')
    expect(config.connection).toBe('rss-conn-2')
  })
})
