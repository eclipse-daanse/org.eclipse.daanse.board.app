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
 * ********************************************************************/

import { describe, test, expect, vi, afterEach } from 'vitest'
import { RestConnection } from '../src/index'

let calls = 0

/** An endpoint that counts how often it was asked, and says what it answers with. */
function endpointAnswering(type: string, body: string) {
  calls = 0
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => {
      calls++
      return new Response(body, { status: 200, headers: { 'content-type': type } })
    }),
  )
}

function connected(config: Record<string, unknown> = {}) {
  const connection = new RestConnection()
  connection.init({ url: 'https://example.test', ...config } as never)
  return connection
}

afterEach(() => vi.unstubAllGlobals())

/*
 * What the preview does: it asks for the data and for the whole answer at
 * the same moment, and each of them reads the body it is given.
 *
 * The second one used to be handed `response.clone()` of an answer the
 * first had already started reading, which throws - and the datasource
 * turns that throw into `undefined`, so one half of the preview stayed
 * empty while the other showed the data.
 */
describe('two readers of one request', () => {
  test('both are given the body', async () => {
    endpointAnswering('application/json', JSON.stringify({ entries: [1, 2, 3] }))
    const connection = connected()

    const [first, second] = await Promise.all([
      connection.fetch({ url: '/d.json' }).then((answer) => answer.json()),
      connection.fetch({ url: '/d.json' }).then((answer) => answer.json()),
    ])

    expect(first).toEqual({ entries: [1, 2, 3] })
    expect(second).toEqual({ entries: [1, 2, 3] })
  })

  test('the endpoint is asked once', async () => {
    endpointAnswering('application/json', JSON.stringify({ entries: [] }))
    const connection = connected()

    await Promise.all([
      connection.fetch({ url: '/d.json' }).then((answer) => answer.json()),
      connection.fetch({ url: '/d.json' }).then((answer) => answer.json()),
    ])

    expect(calls).toBe(1)
  })

  test('a reader arriving after both still gets the body', async () => {
    endpointAnswering('text/csv', 'a;b\n1;2\n')
    const connection = connected()

    await Promise.all([
      connection.fetch({ url: '/d.csv' }).then((answer) => answer.text()),
      connection.fetch({ url: '/d.csv' }).then((answer) => answer.text()),
    ])
    const later = await (await connection.fetch({ url: '/d.csv' })).text()

    expect(later).toBe('a;b\n1;2\n')
  })
})

/*
 * The cache used to keep an answer only if `response.json()` parsed it, so
 * a connection whose setting said it was caching fetched every CSV, every
 * XML and every plain text answer again.
 */
describe('what the cache keeps', () => {
  test('a CSV answer is served from the cache', async () => {
    endpointAnswering('text/csv', 'a;b\n1;2\n')
    const connection = connected({ cacheEnabled: true })

    const first = await (await connection.fetch({ url: '/d.csv' })).text()
    const second = await (await connection.fetch({ url: '/d.csv' })).text()

    expect(calls).toBe(1)
    expect(second).toBe(first)
  })

  test('a JSON answer is served from the cache', async () => {
    endpointAnswering('application/json', JSON.stringify({ entries: [1] }))
    const connection = connected({ cacheEnabled: true })

    await (await connection.fetch({ url: '/d.json' })).json()
    const second = await (await connection.fetch({ url: '/d.json' })).json()

    expect(calls).toBe(1)
    expect(second).toEqual({ entries: [1] })
  })

  /* A reader asks what it was given; an answer re-serialised as JSON lies about that. */
  test('a cached answer keeps its content type', async () => {
    endpointAnswering('text/csv', 'a;b\n1;2\n')
    const connection = connected({ cacheEnabled: true })

    await (await connection.fetch({ url: '/d.csv' })).text()
    const cached = await connection.fetch({ url: '/d.csv' })

    expect(cached.headers.get('content-type')).toBe('text/csv')
  })

  test('an answer past its lifetime is fetched again', async () => {
    endpointAnswering('application/json', JSON.stringify({ entries: [] }))
    const connection = connected({ cacheEnabled: true, cacheTTL: 1 })

    await (await connection.fetch({ url: '/d.json' })).json()
    await new Promise((done) => setTimeout(done, 5))
    await (await connection.fetch({ url: '/d.json' })).json()

    expect(calls).toBe(2)
  })

  test('nothing is kept while the cache is off', async () => {
    endpointAnswering('application/json', JSON.stringify({ entries: [] }))
    const connection = connected()

    await (await connection.fetch({ url: '/d.json' })).json()
    await (await connection.fetch({ url: '/d.json' })).json()

    expect(calls).toBe(2)
  })

  test('clearCache makes the next read ask again', async () => {
    endpointAnswering('application/json', JSON.stringify({ entries: [] }))
    const connection = connected({ cacheEnabled: true })

    await (await connection.fetch({ url: '/d.json' })).json()
    connection.clearCache()
    await (await connection.fetch({ url: '/d.json' })).json()

    expect(calls).toBe(2)
  })
})

/* A POST is neither shared nor kept: two of the same shape are two different asks. */
describe('a request that is not a GET', () => {
  test('is made every time', async () => {
    endpointAnswering('application/json', JSON.stringify({ ok: true }))
    const connection = connected({ cacheEnabled: true })

    const options = { method: 'POST', body: JSON.stringify({ q: 1 }) }
    await (await connection.fetch({ url: '/ask' }, options)).json()
    await (await connection.fetch({ url: '/ask' }, options)).json()

    expect(calls).toBe(2)
  })
})
