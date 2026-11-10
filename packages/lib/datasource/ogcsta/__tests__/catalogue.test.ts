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

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { wireRepositories } from '../../../../../test/support/wiring'
import * as ogcsta from '../src/index'
import { factorySymbol } from '../src/index'
import { clearSharedCache } from '../src/client/CachingMiddleware'
import { transformFromThingLocationDastreamToLocationThingDatastream } from '../src/util/transformThings'
import { indexCatalogue } from '../src/util/idIndex'
import { staServer, type StaFixture } from './support/staServer'

const fixture: StaFixture = {
  hiddenFromCollection: ['t1~hidden'],
  observations: {
    't1~a': [5, 4, 3, 2, 1].map((n) => ({ phenomenonTime: `2026-11-0${n}T00:00:00Z`, result: n })),
  },
  things: [
    { '@iot.id': 't1', name: 'One', Datastreams: [{ '@iot.id': 't1~a', name: 'a' }, { '@iot.id': 't1~hidden', name: 'hidden' }] },
    { '@iot.id': 't2', name: 'Two' },
  ],
}

function setup(extra: Partial<StaFixture> = {}) {
  const server = staServer({ ...fixture, ...extra })
  const { connectionRepository, datasourceRepository } = wireRepositories(ogcsta)
  vi.spyOn(connectionRepository, 'getConnection').mockReturnValue(server.connection as any)
  datasourceRepository.registerDatasourceType('ogcsta', { Store: factorySymbol, Preview: null as any, Settings: null as any })
  datasourceRepository.registerDatasource('sta', 'ogcsta', { uid: 'sta', type: 'ogcsta', name: 'STA', connection: 'conn' } as any)
  return { server, store: datasourceRepository.getDatasource('sta') as any }
}

describe('lists of an OGC STA source', () => {
  beforeEach(() => clearSharedCache())

  it('give a picker ids and names, without the catalogue', async () => {
    const { server, store } = setup()

    expect(await store.listThings()).toEqual([{ id: 't1', name: 'One' }, { id: 't2', name: 'Two' }])
    expect(server.requests).toEqual(['v1.1/Things?$select=@iot.id,name'])
  })

  it('give the datastreams of a thing by navigation, also those /Datastreams misses', async () => {
    const { server, store } = setup()

    const datastreams = await store.listDatastreamsOfThing('t1')

    expect(datastreams.map((d: any) => d.iotId)).toEqual(['t1~a', 't1~hidden'])
    expect(server.requests).toEqual(['v1.1/Things(t1)/Datastreams'])
  })

  it('follow next links, written http:// on an https server, through the connection', async () => {
    const { server, store } = setup({ observationPageSize: 2 })

    const { observations } = await store.loadDatastreamWindow('t1~a')

    expect(observations.map((o: any) => o.result)).toEqual([5, 4, 3, 2, 1])
    const pages = server.requests.filter((r) => r.includes('/Observations'))
    expect(pages).toHaveLength(3)
    expect(pages[2]).toContain('$skip=4')
  })

  it('stop at a next link that leads away from the connection', async () => {
    const { server, store } = setup()
    const followed = await (store as any).followNextLinks(
      { value: [1], iotNextLink: 'http://elsewhere.example/udp/rest/v1.1/Things?$skip=1' },
      (x: unknown) => x,
    )
    expect(followed).toEqual([1])
    expect(server.requests).toEqual([])
  })
})

describe('the catalogue turned around for a map', () => {
  it('keeps both things at a location they share', () => {
    const at = () => ({ iotId: 'loc', location: { type: 'Point', coordinates: [1, 2] } }) as any
    const device = { iotId: 'dev', name: 'dev', locations: [at()], datastreams: [{ iotId: 'dev~a' }] } as any
    const derived = { iotId: 'dev-derived', name: 'dev-derived', locations: [at()] } as any

    const data = transformFromThingLocationDastreamToLocationThingDatastream([device, derived])

    expect(data.locations).toHaveLength(1)
    expect(data.locations![0].things.map((t) => t.iotId)).toEqual(['dev', 'dev-derived'])
    expect(data.datastreams![0].thing).toBe(device)
  })

  it('is indexed by id, every copy of a datastream included', () => {
    const ds = { iotId: 'a' } as any
    const copy = { iotId: 'a' } as any
    const index = indexCatalogue({
      datastreams: [ds],
      things: [{ iotId: 't', datastreams: [ds] } as any],
      locations: [{ iotId: 'l', things: [{ iotId: 't', datastreams: [copy] }] } as any],
    })
    expect(index.datastreams.get('a')).toEqual([ds, copy])
    expect(index.locations.get('l')).toHaveLength(1)
  })
})
