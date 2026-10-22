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

const mockFetch = vi.fn().mockResolvedValue({
  ok: true,
  status: 200
})

vi.stubGlobal('fetch', mockFetch)

const customStubs = {
  VaInput: {
    template: '<div><input class="va-input-stub" :data-label="label" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" /></div>',
    props: ['modelValue', 'label']
  },
  VaCheckbox: {
    template: '<div><input type="checkbox" class="va-checkbox-stub" :data-label="label" :checked="modelValue" @change="$emit(\'update:modelValue\', $event.target.checked)" /></div>',
    props: ['modelValue', 'label']
  }
}

describe('REST Connection Settings.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders standard fields URL and Caching Checkbox', () => {
    const config = { url: '', cacheEnabled: false }
    const wrapper = mount(Settings, {
      props: {
        config
      },
      global: {
        stubs: customStubs
      }
    })

    expect(wrapper.find('input[data-label="URL"]').exists()).toBe(true)
    expect(wrapper.find('input[type="checkbox"][data-label="Enable Response Caching"]').exists()).toBe(true)
    // TTL input should be hidden when cache is disabled
    expect(wrapper.find('input[data-label="Cache TTL (ms)"]').exists()).toBe(false)
  })

  it('renders Cache TTL input when cacheEnabled is true', () => {
    const config = { url: '', cacheEnabled: true, cacheTTL: 45000 }
    const wrapper = mount(Settings, {
      props: {
        config
      },
      global: {
        stubs: customStubs
      }
    })

    expect(wrapper.find('input[data-label="Cache TTL (ms)"]').exists()).toBe(true)
  })

  it('checks URL on mount if config has URL', async () => {
    const config = { url: 'https://api.example.com', cacheEnabled: false }
    mount(Settings, {
      props: {
        config
      },
      global: {
        stubs: customStubs
      }
    })

    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com', { method: 'HEAD' })
  })

  it('updates config when inputs are modified', async () => {
    const config = { url: '', cacheEnabled: false, cacheTTL: 30000 }
    const wrapper = mount(Settings, {
      props: {
        config
      },
      global: {
        stubs: customStubs
      }
    })

    // Modify URL
    const urlInput = wrapper.find('input[data-label="URL"]')
    await urlInput.setValue('https://api.newplace.com')
    // wait for 700ms debounce in updateUrl
    await new Promise(resolve => setTimeout(resolve, 800))
    expect(config.url).toBe('https://api.newplace.com')
    expect(mockFetch).toHaveBeenCalledWith('https://api.newplace.com', { method: 'HEAD' })

    // Enable caching
    const cacheSwitch = wrapper.find('input[type="checkbox"][data-label="Enable Response Caching"]')
    await (cacheSwitch as any).setChecked(true)
    expect(config.cacheEnabled).toBe(true)

    // Wait for DOM update
    await wrapper.vm.$nextTick()

    // Modify TTL
    const ttlInput = wrapper.find('input[data-label="Cache TTL (ms)"]')
    await ttlInput.setValue('15000')
    expect(config.cacheTTL).toBe(15000)
  })
})
