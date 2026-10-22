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
 * Mounted with its real controls. The dialog was written against Vuestic
 * when this test was, and stubbing VaInput left nothing for the assertions
 * to find once it moved to the project's own DInput.
 */

describe('RSS Connection Settings.vue', () => {
  it('renders standard URL input field', () => {
    const config = { url: '' }
    const wrapper = mount(Settings, {
      props: {
        config
      }
    })

    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('updates the config object when URL input is modified', async () => {
    const config = { url: '' }
    const wrapper = mount(Settings, {
      props: {
        config
      }
    })

    const urlInput = wrapper.find('input')
    await urlInput.setValue('https://news.ycombinator.com/rss')
    expect(config.url).toBe('https://news.ycombinator.com/rss')
  })
})
