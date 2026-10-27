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

/*
 * The chart composer cannot be built without "Compose by", and its form did
 * not say so: saving without it failed in the factory with an uncaught
 * error and nothing on screen. The form now marks what the composer itself
 * reports as missing.
 */

import { describe, expect, it } from 'vitest'
import { nextTick, reactive } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import i18next from 'i18next'
import { identifier as DATASOURCES } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import Settings from './Settings.vue'
import en from './i18n/en.json'

async function translator() {
  const i18n = i18next.createInstance()
  await i18n.init({ fallbackLng: 'en', lng: 'en', resources: { en: { composerChart: en } } })
  return i18n
}

async function settings(config: Record<string, unknown>) {
  const repository = { getDatasource: () => ({ getData: async () => ({ headers: [], items: [] }) }) }
  const view = mount(Settings, {
    props: { config, dataSources: [], connections: [] },
    global: { provide: { i18n: await translator(), [DATASOURCES]: repository } },
  })
  await flushPromises()
  return view
}

/** The field whose label reads `label`. */
function field(view: Awaited<ReturnType<typeof settings>>, label: string) {
  const found = view.findAll('.field').find((each) => each.text().includes(label))
  expect(found, label).toBeDefined()
  return found!
}

describe('the chart composer settings', () => {
  it('mark compose-by required, and say it is missing while it is', async () => {
    const config = reactive<Record<string, unknown>>({
      connectedDatasources: ['source'],
      usedSets: ['Unit Sales'],
      labelColumn: 'Caption',
    })
    const view = await settings(config)

    const composeBy = field(view, en.Settings.composeBy)
    expect(composeBy.find('.field__required').exists()).toBe(true)
    expect(composeBy.find('.field__error').text()).toBe(en.Settings.required)
    /* Only what is missing is flagged. */
    expect(view.findAll('.field__error')).toHaveLength(1)

    config.composeBy = 'Caption'
    await nextTick()

    expect(view.findAll('.field__error')).toHaveLength(0)
  })
})
