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

import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { wireRepositories } from '../../../../../test/support/wiring'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import * as restConnection from 'org.eclipse.daanse.board.app.lib.connection.rest'
import { factorySymbol as restConnFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rest'
import * as csvStore from '../src/index'
import { factorySymbol as csvStoreFactorySymbol } from '../src/index'

const { connectionRepository, datasourceRepository } = wireRepositories(restConnection, csvStore)

connectionRepository.registerConnectionType('rest', {
  Connection: restConnFactorySymbol,
  Settings: null as any,
})
datasourceRepository.registerDatasourceType('csv', {
  Store: csvStoreFactorySymbol,
  Preview: null as any,
  Settings: null as any,
})

/* Spaces on purpose: what getData trims is what tells the two apart. */
const ANSWER = 'id; name ;value\n1; Freizeitbad ;7.3\n2; Hallenbad ;8.1\n'

let requests = 0
let parses: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  requests = 0
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => {
      requests++
      return new Response(ANSWER, { status: 200, headers: { 'content-type': 'text/csv' } })
    }),
  )
  parses = vi.spyOn(helpers.csv, 'parse')
})

afterEach(() => {
  vi.unstubAllGlobals()
  parses.mockRestore()
})

let made = 0

function sourceOn(config: Record<string, unknown> = {}) {
  const uid = `ds-${made++}`
  const connection = `conn-${made}`
  connectionRepository.registerConnection(connection, 'rest', {
    url: 'https://example.test/',
    uid: connection,
    type: 'rest',
    name: connection,
  })
  const factory = datasourceRepository.resolveIdentifier(
    datasourceRepository.getDatasourceIdentifiers('csv').Store,
  ) as any
  return factory({
    connection,
    resourceUrl: 'd.csv',
    separators: [';'],
    uid,
    type: 'csv',
    name: uid,
    ...config,
  })
}

/*
 * A preview asks for the data and for the whole answer at once. Both used
 * to fetch and parse on their own: the connection answered the second
 * fetch from the one in flight, so there was one request - and two full
 * parses of the same text. On 0.92 MB that was 402 ms per opening.
 */
describe('a source asked for both halves at once', () => {
  test('parses what came back once', async () => {
    const source = sourceOn()

    await Promise.all([source.getData('DataTable'), source.getOriginalData()])

    expect(requests).toBe(1)
    expect(parses).toHaveBeenCalledTimes(1)
  })

  test('gives each half what it asked for', async () => {
    const source = sourceOn()

    const [table, whole] = await Promise.all([
      source.getData('DataTable'),
      source.getOriginalData(),
    ])

    expect(table.headers).toEqual(['id', 'name', 'value'])
    expect(whole.header).toEqual(['id', ' name ', 'value'])
  })

  /* The shared parse is the one getOriginalData holds; trimming it in
    place would trim what that reader is showing. */
  test('trimming the data leaves the whole answer as it came', async () => {
    const source = sourceOn()

    const [table, whole] = await Promise.all([
      source.getData('DataTable'),
      source.getOriginalData(),
    ])

    expect(table.rows[0]).toEqual(['1', 'Freizeitbad', '7.3'])
    expect(whole.rows[0]).toEqual(['1', ' Freizeitbad ', '7.3'])
  })
})

/*
 * Skipping rows makes a different answer out of the same text, so those
 * two readers are not one another's and each needs its own parse.
 */
describe('a source that skips rows', () => {
  test('parses once for each of the two answers', async () => {
    const source = sourceOn({ skipRowsFromStart: 1 })

    const [table, whole] = await Promise.all([
      source.getData('DataTable'),
      source.getOriginalData(),
    ])

    expect(parses).toHaveBeenCalledTimes(2)
    expect(whole.rows).toHaveLength(2)
    expect(table.rows).toHaveLength(1)
  })
})

describe('a source whose endpoint refuses', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('no', { status: 404 })))
  })

  test('says so in the shape each caller expects', async () => {
    const source = sourceOn()

    expect(await source.getData('DataTable')).toBeNull()
    expect(await source.getOriginalData()).toEqual([])
  })
})
