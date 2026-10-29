/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import DiscoverExplorer from './DiscoverExplorer.vue'
import english from '../i18n/en.json'
import german from '../i18n/de.json'

/* The parts of i18next the explorer uses: t with values, and the switch with its event. */
function translator() {
  const packs: Record<string, unknown> = { en: english, de: german }
  const handlers = new Set<() => void>()
  return {
    language: 'en',
    t(key: string, options?: Record<string, unknown>) {
      const path = key.includes(':') ? key.split(':', 2)[1]! : key
      const text = path
        .split('.')
        .reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], packs[this.language])
      if (typeof text !== 'string') return key
      return text.replace(/\{\{(\w+)\}\}/g, (_, name) => String(options?.[name] ?? ''))
    },
    on(event: string, handler: () => void) {
      if (event === 'languageChanged') handlers.add(handler)
    },
    off(_event: string, handler: () => void) {
      handlers.delete(handler)
    },
    changeLanguage(language: string) {
      this.language = language
      handlers.forEach(handler => handler())
    },
  }
}

type Answers = Record<string, (restrictions?: Record<string, unknown>) => unknown[] | Promise<unknown[]>>

function mountExplorer(answers: Answers, props: { catalog?: string; cube?: string } = {}) {
  const i18n = translator()
  const discover = vi.fn(async (requestType: string, restrictions?: Record<string, unknown>) => {
    const answer = answers[requestType]
    return (answer ? await answer(restrictions) : []) as Record<string, unknown>[]
  })
  const wrapper = mount(DiscoverExplorer, { props: { discover, ...props }, global: { provide: { i18n } } })
  return { wrapper, discover, i18n }
}

async function twist(wrapper: VueWrapper, label: string) {
  const row = wrapper.findAll('.node__row').find(r => r.find('.explorer__label').text() === label)
  expect(row, label).toBeDefined()
  await row!.find('.node__twist').trigger('click')
  await flushPromises()
}

const calls = (discover: ReturnType<typeof vi.fn>, requestType: string) =>
  discover.mock.calls.filter(([type]) => type === requestType).length

describe('the server explorer', () => {
  const CATALOGS = () => [{ CATALOG_NAME: 'FoodMart' }]

  it('asks again for a branch that failed when it is opened again, and clears the error then', async () => {
    let attempt = 0
    const { wrapper, discover } = mountExplorer({
      DBSCHEMA_CATALOGS: CATALOGS,
      MDSCHEMA_CUBES: () => {
        attempt += 1
        if (attempt === 1) throw new Error('timeout')
        return [{ CUBE_NAME: 'Sales' }]
      },
    })
    await flushPromises()

    await twist(wrapper, 'FoodMart')
    expect(wrapper.text()).toContain('Could not be read: timeout')
    expect(wrapper.find('.explorer__failed').text()).toContain('timeout')

    await twist(wrapper, 'FoodMart')
    expect(calls(discover, 'MDSCHEMA_CUBES')).toBe(1)
    await twist(wrapper, 'FoodMart')

    expect(calls(discover, 'MDSCHEMA_CUBES')).toBe(2)
    expect(wrapper.text()).toContain('Sales')
    expect(wrapper.text()).not.toContain('Could not be read')
    expect(wrapper.find('.explorer__failed').exists()).toBe(false)
  })

  it('does not ask again for a branch that answered', async () => {
    const { wrapper, discover } = mountExplorer({ DBSCHEMA_CATALOGS: CATALOGS, MDSCHEMA_CUBES: () => [{ CUBE_NAME: 'Sales' }] })
    await flushPromises()
    await twist(wrapper, 'FoodMart')
    await twist(wrapper, 'FoodMart')
    await twist(wrapper, 'FoodMart')
    expect(calls(discover, 'MDSCHEMA_CUBES')).toBe(1)
  })

  it('writes the texts it builds in the language switched to', async () => {
    const { wrapper, i18n } = mountExplorer(
      { DBSCHEMA_CATALOGS: CATALOGS, MDSCHEMA_CUBES: () => [{ CUBE_NAME: 'Sales' }] },
      { catalog: 'FoodMart' },
    )
    await flushPromises()
    expect(wrapper.text()).toContain('Rowsets of the catalog')
    expect(wrapper.text()).toContain('Relational')

    i18n.changeLanguage('de')
    await flushPromises()

    expect(wrapper.text()).toContain(german.Explorer.catalogRowsets)
    expect(wrapper.text()).toContain(german.Explorer.relational)
    expect(wrapper.text()).not.toContain('Rowsets of the catalog')
  })

  it('shows the measures once under a cube - as the group, not again as a dimension', async () => {
    const { wrapper } = mountExplorer(
      {
        DBSCHEMA_CATALOGS: CATALOGS,
        MDSCHEMA_CUBES: () => [{ CUBE_NAME: 'Sales' }],
        MDSCHEMA_DIMENSIONS: () => [
          { DIMENSION_UNIQUE_NAME: '[Measures]', DIMENSION_CAPTION: 'Measures', DIMENSION_TYPE: '2' },
          { DIMENSION_UNIQUE_NAME: '[Time]', DIMENSION_CAPTION: 'Time', DIMENSION_TYPE: '1' },
        ],
        MDSCHEMA_MEASURES: () => [{ MEASURE_NAME: 'Unit Sales' }],
      },
      { catalog: 'FoodMart', cube: 'Sales' },
    )
    await flushPromises()
    await twist(wrapper, 'Sales')

    const labels = wrapper.findAll('.explorer__label').map(label => label.text())
    expect(labels.filter(label => label === 'Measures')).toHaveLength(1)
    expect(labels).toContain('Time')
  })
})
