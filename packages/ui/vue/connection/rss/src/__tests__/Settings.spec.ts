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
  VaInput: {
    template: '<div><input class="va-input-stub" :data-label="label" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" /></div>',
    props: ['modelValue', 'label']
  }
}

describe('RSS Connection Settings.vue', () => {
  it('renders standard URL input field', () => {
    const config = { url: '' }
    const wrapper = mount(Settings, {
      props: {
        config
      },
      global: {
        stubs: customStubs
      }
    })

    expect(wrapper.find('input[data-label="URL"]').exists()).toBe(true)
  })

  it('updates the config object when URL input is modified', async () => {
    const config = { url: '' }
    const wrapper = mount(Settings, {
      props: {
        config
      },
      global: {
        stubs: customStubs
      }
    })

    const urlInput = wrapper.find('input[data-label="URL"]')
    await urlInput.setValue('https://news.ycombinator.com/rss')
    expect(config.url).toBe('https://news.ycombinator.com/rss')
  })
})
