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
 *
 * DSelect gives its options the entry's index as value and maps back
 * internally, so a test picks an option by the words it shows. Without a
 * translator the options show their raw keys, which is what is searched for
 * here.
 */
async function chooseOption(wrapper: ReturnType<typeof mount>, text: string, at = 0) {
  const select = wrapper.findAll('select')[at]
  const option = select.findAll('option').find((o) => o.text().includes(text))
  await select.setValue(option!.element.value)
}

describe('Valhalla Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-rest-valhalla', name: 'Valhalla Routing Rest', type: 'rest' },
    { uid: 'conn-other', name: 'Other Rest API', type: 'rest' }
  ]

  it('sets default config parameters if not defined', () => {
    const config = {} as any
    mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    expect(config.costing).toBe('auto')
    expect(config.units).toBe('kilometers')
    expect(config.language).toBe('de-DE')
  })

  it('updates costing, units, and connection values', async () => {
    const config = {
      connection: '',
      costing: 'auto',
      units: 'kilometers',
      language: 'de-DE'
    } as any

    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    // Set connection (first select)
    await chooseOption(wrapper, 'Valhalla Routing Rest', 0)
    expect(config.connection).toBe('conn-rest-valhalla')

    // Set costing (second select)
    await chooseOption(wrapper, 'costing.bicycle', 1)
    expect(config.costing).toBe('bicycle')

    // Set units (third select)
    await chooseOption(wrapper, 'units.miles', 2)
    expect(config.units).toBe('miles')

    // Change language
    await wrapper.find('input').setValue('en-US')
    expect(config.language).toBe('en-US')
  })
})
