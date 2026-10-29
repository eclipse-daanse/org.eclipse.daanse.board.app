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
import { identifier as CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import Catalogue from '../Catalogue.vue'
import { FILE_TYPE } from '../catalogue/types'
import en from '../i18n/en.json'

/* Answers from the package's own English texts, placeholders filled in. */
const translator = {
  language: 'en',
  t: (key: string, options?: Record<string, unknown>) => {
    const path = key.replace(/^datasourceSparql:/, '').split('.')
    const text = path.reduce<any>((held, step) => held?.[step], en)
    if (typeof text !== 'string') return key
    return Object.entries(options ?? {}).reduce(
      (filled, [name, value]) => filled.split(`{{${name}}}`).join(String(value)),
      text,
    )
  },
}

function row(at: number, kind = 'dataset', format?: string) {
  return {
    kind: { value: kind, type: 'literal' },
    title: { value: `entry ${at}`, type: 'literal' },
    accessUrl: { value: `https://example.org/${at}`, type: 'uri' },
    ...(format ? { format: { value: format, type: 'uri' } } : {}),
  }
}

function answering(bindings: Record<string, any>[]) {
  return vi.fn(async (_config: any, _options?: RequestInit) => ({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: async () => ({ head: { vars: [] }, results: { bindings } }),
  }))
}

function setUp(fetch = answering([row(1), row(2, 'service')])) {
  const wrapper = mount(Catalogue, {
    props: { dataSource: { type: 'sparql', config: { connection: 'c1' } } },
    global: {
      provide: {
        [CONNECTION_REPOSITORY]: { getConnection: () => ({ fetch }) },
        i18n: translator,
      },
    },
  })
  return { wrapper, fetch }
}

const search = (wrapper: ReturnType<typeof setUp>['wrapper']) => wrapper.find('form').trigger('submit')
const sentQuery = (fetch: ReturnType<typeof answering>, call = 0) =>
  decodeURIComponent(String(fetch.mock.calls[call]![1]?.body).replace(/^query=/, ''))

describe('the catalogue view', () => {
  it('lists datasets and services together, each marked as what it is', async () => {
    const { wrapper } = setUp()

    await search(wrapper)
    await flushPromises()

    const rows = wrapper.findAll('.result')
    expect(rows).toHaveLength(2)
    expect(rows[0].text()).toContain('Dataset')
    expect(rows[1].text()).toContain('Service')
  })

  it('asks for one kind when one is chosen', async () => {
    const { wrapper, fetch } = setUp()

    await search(wrapper)
    await flushPromises()
    await wrapper.findAll('.chip').find((c) => c.text() === 'Services')!.trigger('click')
    await flushPromises()

    expect(sentQuery(fetch, 1)).toContain('FILTER (?kind = "service")')
  })

  it('goes to the next page and back, and offsets the query by a page', async () => {
    /* 21 rows: a full page of 20 plus the probe, so there is a next. */
    const { wrapper, fetch } = setUp(answering(Array.from({ length: 21 }, (_, at) => row(at))))

    await search(wrapper)
    await flushPromises()
    expect(wrapper.findAll('.result')).toHaveLength(20)

    const next = wrapper.findAll('button').find((b) => b.text() === 'Next')!
    expect(next.attributes('disabled')).toBeUndefined()
    await next.trigger('click')
    await flushPromises()

    expect(sentQuery(fetch, 1)).toContain('OFFSET 20')
    expect(wrapper.find('.pager__at').text()).toBe('21-40')
  })

  it('offers no next page when the probe row did not arrive', async () => {
    const { wrapper } = setUp(answering([row(1)]))

    await search(wrapper)
    await flushPromises()

    const next = wrapper.findAll('button').find((b) => b.text() === 'Next')!
    expect(next.attributes('disabled')).toBeDefined()
  })

  it('says why when the endpoint refuses', async () => {
    const { wrapper } = setUp(
      vi.fn(async (_config: any, _options?: RequestInit) => ({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      })) as never,
    )

    await search(wrapper)
    await flushPromises()

    expect(wrapper.find('[role="alert"]').text()).toContain('500 Internal Server Error')
  })

  it('says so when the source has no connection, rather than failing quietly', async () => {
    const wrapper = mount(Catalogue, {
      props: { dataSource: { type: 'sparql', config: {} } },
      global: {
        provide: { [CONNECTION_REPOSITORY]: { getConnection: () => undefined }, i18n: translator },
      },
    })

    await search(wrapper)
    await flushPromises()

    expect(wrapper.find('[role="alert"]').text()).toContain('no connection yet')
  })

  it('shows what a format can be read with, where we have a source for it', async () => {
    const { wrapper } = setUp(answering([row(1, 'dataset', FILE_TYPE.CSV)]))

    await search(wrapper)
    await flushPromises()

    expect(wrapper.find('.result__format').text()).toBe('csv')
  })
})
