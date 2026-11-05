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

/*
 * #1251: the observations of a map were fetched by a web worker with plain
 * fetch - past the connection and past the cache, so every datastream two
 * widgets showed was asked for twice.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { wireRepositories } from '../../../../../test/support/wiring'
import * as ogcsta from '../src/index'
import { factorySymbol, FILTER } from '../src/index'
import { clearSharedCache } from '../src/client/CachingMiddleware'
import { staServer, type StaFixture } from './support/staServer'

const fixture: StaFixture = {
  delay: 5,
  observations: {
    'a~color': [{ phenomenonTime: '2026-11-05T10:00:00Z', result: 'RED' }, { phenomenonTime: '2026-11-04T10:00:00Z', result: 'GREEN' }],
    'b~color': [{ phenomenonTime: '2026-11-05T10:00:00Z', result: 'BLUE' }],
  },
  things: [{ '@iot.id': 'a', name: 'A', Datastreams: [{ '@iot.id': 'a~color', name: 'color' }, { '@iot.id': 'b~color', name: 'color' }] }],
}

/** Stores, each on its own connection: `{ sta: server, other: server }`. */
function setup(servers: Record<string, ReturnType<typeof staServer>>) {
  const { connectionRepository, datasourceRepository } = wireRepositories(ogcsta)
  vi.spyOn(connectionRepository, 'getConnection').mockImplementation((id: string) => servers[id].connection as any)
  datasourceRepository.registerDatasourceType('ogcsta', { Store: factorySymbol, Preview: null as any, Settings: null as any })
  for (const id of Object.keys(servers)) {
    datasourceRepository.registerDatasource(id, 'ogcsta', { uid: id, type: 'ogcsta', name: id, connection: id } as any)
  }
  return (id: string) => datasourceRepository.getDatasource(id) as any
}

const latest = (ids: string[]) => ({ observations: ids.map((iotId) => ({ iotId })) })

describe('the observations of a map', () => {
  beforeEach(() => clearSharedCache())

  it('go through the connection, once per datastream when two widgets ask at once', async () => {
    const server = staServer(fixture)
    const store = setup({ sta: server })('sta')

    await Promise.all([
      store.callEvent(FILTER, latest(['a~color', 'b~color']), false),
      store.callEvent(FILTER, latest(['a~color']), false),
    ])

    expect([...server.requests].sort()).toEqual([
      'v1.1/Datastreams(a~color)/Observations?$top=1&$orderby=phenomenonTime desc',
      'v1.1/Datastreams(b~color)/Observations?$top=1&$orderby=phenomenonTime desc',
    ])
  })

  it('are kept apart for two servers with the same paths', async () => {
    const one = staServer(fixture, 'https://one.example/sta/')
    const two = staServer(fixture, 'https://two.example/sta/')
    const store = setup({ one, two })

    await store('one').callEvent(FILTER, latest(['a~color']), false)
    await store('two').callEvent(FILTER, latest(['a~color']), false)

    expect(one.requests).toHaveLength(1)
    expect(two.requests).toHaveLength(1)
  })

  it('of one datastream that fails do not take the others with them', async () => {
    const server = staServer(fixture)
    const store = setup({ sta: server })('sta')
    await store.getData('OGCSTAData')

    await store.callEvent(FILTER, latest(['missing', 'b~color']), false)
    const data = await store.getData('OGCSTAData')

    const b = data.datastreams.find((d: any) => d.iotId === 'b~color')
    expect(b.observations.map((o: any) => o.result)).toEqual(['BLUE'])
  })
})
