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

describe('CSV Datasource Settings.vue', () => {
  const connections = [
    { uid: 'conn-rest-1', name: 'REST Conn 1', type: 'rest', config: { url: 'https://api.example.com/' } },
    { uid: 'conn-rest-2', name: 'REST Conn 2', type: 'rest', config: { url: 'https://api.test.com/' } },
    { uid: 'other-conn', name: 'Other Conn', type: 'other' }
  ]

  beforeEach(() => {
    vi.useFakeTimers()
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK'
    })
  })

  it('renders all input fields', () => {
    const config = { connection: '', resourceUrl: '', separators: [','], skipRowsFromStart: 0, skipRowsFromEnd: 0, pollingEnabled: false }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.findAll('input').length).toBeGreaterThanOrEqual(1)
  })

  it('updates connection selection in config', async () => {
    const config = { connection: '', resourceUrl: '', separators: [','], skipRowsFromStart: 0, skipRowsFromEnd: 0, pollingEnabled: false }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    const selects = wrapper.findAll('select')
    await chooseOption(wrapper, 'REST Conn 2', 0)
    expect(config.connection).toBe('conn-rest-2')
  })

  it('debounces and propagates resourceUrl changes', async () => {
    const config = { connection: 'conn-rest-1', resourceUrl: '', separators: [','], skipRowsFromStart: 0, skipRowsFromEnd: 0, pollingEnabled: false }
    const wrapper = mount(Settings, {
      props: {
        config,
        dataSources: [],
        connections
      }
    })

    const inputs = wrapper.findAll('input')
    // First input is resourceUrl
    await inputs[0].setValue('users.csv')
    expect(config.resourceUrl).toBe('') // should not update immediately due to debounce

    vi.advanceTimersByTime(750)
    expect(config.resourceUrl).toBe('users.csv')
  })

  it('names the separators in the language in use, and marks the path required', () => {
    const english: Record<string, string> = {
      'datasourceCsv:Csv.separators.comma': 'Comma (,)',
      'datasourceCsv:Csv.separators.semicolon': 'Semicolon (;)',
      'datasourceCsv:Settings.path': 'Path',
    }
    const i18n = { language: 'en', t: (key: string) => english[key] ?? key }
    const config = { connection: '', resourceUrl: '', separators: [','], skipRowsFromStart: 0, skipRowsFromEnd: 0, pollingEnabled: false }
    const wrapper = mount(Settings, {
      props: { config, dataSources: [], connections },
      global: { provide: { i18n } },
    })

    const separators = wrapper.findAll('select')[1].findAll('option').map((o) => o.text())
    expect(separators).toEqual(expect.arrayContaining(['Comma (,)', 'Semicolon (;)']))
    expect(wrapper.text()).not.toContain('Komma')

    expect(fieldNamed(wrapper, 'Path')!.attributes('required')).toBeDefined()
  })
})
