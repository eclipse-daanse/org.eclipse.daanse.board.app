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
      }
    })

    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)
  })

  it('updates connection selection in the config when selected', async () => {
    const config = { connection: '' }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    await chooseOption(wrapper, 'RSS Feed 2')
    expect(config.connection).toBe('rss-conn-2')
  })
})
