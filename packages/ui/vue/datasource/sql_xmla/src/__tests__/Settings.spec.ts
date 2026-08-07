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

describe('SQL_XMLA Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-xmla-1', name: 'XMLA Conn 1', type: 'xmla' },
    { uid: 'conn-xmla-2', name: 'XMLA Conn 2', type: 'xmla' },
    { uid: 'conn-other', name: 'Other Conn', type: 'other' }
  ]

  it('filters and displays only xmla connections', () => {
    const config = {
      connection: '',
      sql: 'SELECT * FROM Accounting',
      uid: 'sql-xmla-ds',
      type: 'sql_xmla',
      name: 'SQL XMLA'
    } as any

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

    const select = wrapper.findComponent(customStubs.VaSelect)
    const options = select.props('options')
    expect(options.length).toBe(2)
    expect(options.find((o: any) => o.uid === 'conn-other')).toBeUndefined()
  })

  it('updates connection property in config', async () => {
    const config = {
      connection: '',
      sql: '',
      uid: 'sql-xmla-ds',
      type: 'sql_xmla',
      name: 'SQL XMLA'
    } as any

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
    await select.setValue('conn-xmla-2')
    expect(config.connection).toBe('conn-xmla-2')
  })
})
