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
import { flushPromises, mount } from '@vue/test-utils'
import en from '../i18n/en.json'

/*
 * The store is built by useTemporaryStore from the type and the
 * settings; here it only has to answer, because what is under test is
 * what the view says about the answer.
 */
const { answer } = vi.hoisted(() => ({ answer: { value: undefined as unknown } }))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async () => {
  const vue = await import('vue')
  return {
    /* Handed over after setup, so the watch on it sees a change - which
      is how the real one behaves, the store being built from the
      settings rather than standing there. */
    useTemporaryStore: (_type: string, _settings: unknown, store: any) => {
      void Promise.resolve().then(() => {
        store.value = { getData: async () => answer.value }
      })
      return { update: () => {} }
    },
    useTranslation: () => ({
      t: (key: string) =>
        key
          .replace(/^datasourceCsv:/, '')
          .split('.')
          .reduce<any>((held, step) => held?.[step], en) ?? key,
    }),
    /* Re-exported so the component's other imports still resolve. */
    ...vue,
  }
})

import Preview from '../Preview.vue'

function setUp(given: unknown) {
  answer.value = given
  return mount(Preview, {
    props: { dataSource: { type: 'csv', config: {} } },
    global: { stubs: { DTable: { template: '<table class="table" />' } } },
  })
}

/*
 * Three different things used to look the same: not asked yet, asked and
 * refused, asked and answered with nothing. An empty pane for all three
 * is three ways to be stuck with no way to tell which.
 */
describe('what the csv preview says', () => {
  it('shows the rows where there are rows', async () => {
    const wrapper = setUp({ headers: ['a'], items: [{ a: 1 }] })
    await flushPromises()

    expect(wrapper.find('.table').exists()).toBe(true)
    expect(wrapper.find('.preview__note').exists()).toBe(false)
  })

  it('says so when the address answered nothing at all', async () => {
    const wrapper = setUp(null)
    await flushPromises()

    expect(wrapper.find('.table').exists()).toBe(false)
    expect(wrapper.find('.preview__note').text()).toBe(en.Preview.failed)
  })

  /* What a JSON endpoint behind a csv source looks like: something came
    back, and nothing in it was a row. */
  it('says so when something came back that held no rows', async () => {
    const wrapper = setUp({ headers: [], items: [] })
    await flushPromises()

    expect(wrapper.find('.table').exists()).toBe(false)
    expect(wrapper.find('.preview__note').text()).toBe(en.Preview.empty)
  })
})

