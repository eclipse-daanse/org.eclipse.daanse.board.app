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
import { identifier as variableIdentifier } from 'org.eclipse.daanse.board.app.lib.api.variable'
import OGCSTAStoreSettings from '../OGCSTAStoreSettings.vue'

/*
 * The dialog takes its variable repository from the component tree, not from
 * a container, so the mount provides one. Without it the wrappers stay
 * unbound and the dialog warns.
 */
const variableRepository = {
  getVariable: () => null,
  getAllVariables: () => []
} as any

/*
 * Mounted with its real controls. These tests were written when the dialogs
 * used Vuestic; the project's own DSelect renders a plain select, so there
 * is nothing left to stand in for - and a stub left the assertions with
 * nothing to find.
 *
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
      },
      global: { provide: { [variableIdentifier]: variableRepository } }
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
      },
      global: { provide: { [variableIdentifier]: variableRepository } }
    })

    const selects = wrapper.findAll('select')
    // Connection is the first select
    await chooseOption(wrapper, 'REST connection', 0)
    expect(config.connection).toBe('conn-rest-1')
  })
})

/*
 * #1264: the latest values view is set in the dialog and stored as plain
 * JSON, like the rest of the configuration.
 */
describe('the latest values view in OGCSTAStoreSettings.vue', () => {
  const mountWith = (config: any) =>
    mount(OGCSTAStoreSettings, {
      props: { config, dataSources: [], connections: [] },
      global: { provide: { [variableIdentifier]: variableRepository } },
    })

  it('is switched on with its summary and stored as plain objects', async () => {
    const config: any = { connection: '' }
    const wrapper = mountWith(config)
    expect(config.latestValues).toBeUndefined()

    await wrapper.find('details.latest summary').trigger('click')
    const textarea = wrapper.find('details.latest textarea')
    await textarea.setValue('Reference Area*\n\n*-derived ')
    const add = wrapper.findAll('details.latest button').find((b) => b.text() === 'Ogcsta.latest.addColumn')
    await add!.trigger('click')

    expect(JSON.parse(JSON.stringify(config.latestValues))).toEqual({
      thingNames: ['Reference Area*', '*-derived'],
      nameColumn: 'name',
      idColumn: '',
      columns: [{ suffix: '', label: '', part: 'result', mappings: [] }],
    })

    await wrapper.find('details.latest summary').trigger('click')
    expect('latestValues' in config).toBe(false)
  })

  it('shows a stored view with its mappings', () => {
    const config: any = {
      connection: '',
      latestValues: {
        thingNames: ['Reference Area*'],
        columns: [{ suffix: '~referenceArea~color', label: 'Zustand', mappings: [{ code: 'BLUE', label: 'feucht', color: '#1e88e5' }] }],
      },
    }
    const wrapper = mountWith(config)

    expect(wrapper.find('details.latest').attributes('open')).toBeDefined()
    expect(wrapper.findAll('details.latest .latest__mapping')).toHaveLength(1)
  })
})
