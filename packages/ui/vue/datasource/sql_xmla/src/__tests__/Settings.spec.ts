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
      }
    })

    const select = wrapper.find('select')
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
      }
    })

    const select = wrapper.find('select')
    await chooseOption(wrapper, 'XMLA Conn 2')
    expect(config.connection).toBe('conn-xmla-2')
  })
})
