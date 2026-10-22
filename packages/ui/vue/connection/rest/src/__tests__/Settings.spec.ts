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

/*
 * Mounted with its real controls, and found by what they render rather
 * than by a data-label the stubs used to add. DInput puts the label in a
 * <label for>, so a field is located by its words.
 */
function fieldNamed(wrapper: ReturnType<typeof mount>, label: string) {
  const tag = wrapper.findAll('label').find((l) => l.text().includes(label))
  if (!tag) return undefined
  return wrapper.find(`#${tag.attributes('for')}`)
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
      }
    })

    expect(fieldNamed(wrapper, 'URL')?.exists()).toBe(true)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
    // TTL input should be hidden when cache is disabled
    expect(wrapper.findAll('input[type="number"]').length).toBe(0)
  })

  it('renders Cache TTL input when cacheEnabled is true', () => {
    const config = { url: '', cacheEnabled: true, cacheTTL: 45000 }
    const wrapper = mount(Settings, {
      props: {
        config
      }
    })

    expect(wrapper.findAll('input[type="number"]').length).toBe(1)
  })

  it('checks URL on mount if config has URL', async () => {
    const config = { url: 'https://api.example.com', cacheEnabled: false }
    mount(Settings, {
      props: {
        config
      }
    })

    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com', { method: 'HEAD' })
  })

  it('updates config when inputs are modified', async () => {
    const config = { url: '', cacheEnabled: false, cacheTTL: 30000 }
    const wrapper = mount(Settings, {
      props: {
        config
      }
    })

    // Modify URL
    const urlInput = fieldNamed(wrapper, 'URL')!
    await urlInput.setValue('https://api.newplace.com')
    // wait for 700ms debounce in updateUrl
    await new Promise(resolve => setTimeout(resolve, 800))
    expect(config.url).toBe('https://api.newplace.com')
    expect(mockFetch).toHaveBeenCalledWith('https://api.newplace.com', { method: 'HEAD' })

    // Enable caching
    const cacheSwitch = wrapper.find('input[type="checkbox"]')
    await (cacheSwitch as any).setChecked(true)
    expect(config.cacheEnabled).toBe(true)

    // Wait for DOM update
    await wrapper.vm.$nextTick()

    // Modify TTL
    const ttlInput = wrapper.find('input[type="number"]')
    await ttlInput.setValue('15000')
    expect(config.cacheTTL).toBe(15000)
  })
})
