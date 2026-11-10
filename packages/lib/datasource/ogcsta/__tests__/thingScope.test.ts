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
 * #1250: a map loaded every thing of the server with all datastreams and
 * locations (3.8 MB, up to a minute) to show the 24 things its rules match.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { wireRepositories } from '../../../../../test/support/wiring'
import * as ogcsta from '../src/index'
import { factorySymbol } from '../src/index'
import { clearSharedCache } from '../src/client/CachingMiddleware'
import { staServer, type StaFixture } from './support/staServer'

const area = { type: 'Polygon', coordinates: [[[11.5, 50.9], [11.6, 50.9], [11.6, 51], [11.5, 50.9]]] }

const fixture: StaFixture = {
  // The colour datastream of JeN-06 is missing from /Datastreams, as on the server.
  hiddenFromCollection: ['JeN-06~referenceArea~color'],
  things: [
    {
      '@iot.id': 'JeN-06', name: 'Reference Area JeN-06',
      Locations: [{ '@iot.id': 'loc-1', location: area }],
      Datastreams: [{
        '@iot.id': 'JeN-06~referenceArea~color', name: 'color', observedArea: area,
        ObservedProperty: { '@iot.id': 'op-color', name: 'color' },
      }],
    },
    {
      '@iot.id': 's1-derived', name: 'sensor-1-derived',
      Locations: [{ '@iot.id': 'loc-2', location: { type: 'Point', coordinates: [11.55, 50.95] } }],
      Datastreams: [{ '@iot.id': 's1-derived~color', name: 'color' }],
    },
    {
      '@iot.id': '10567', name: 'Weather Jena',
      Locations: [{ '@iot.id': 'loc-3', location: { type: 'Point', coordinates: [11.6, 50.9] } }],
      Datastreams: [{ '@iot.id': '10567~temp', name: 'temp' }],
    },
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

const RULES = "startswith(name,'Reference Area') or endswith(name,'-derived')"

describe('the catalogue of an OGC STA source', () => {
  beforeEach(() => clearSharedCache())

  it('loads only the things in the scope of its maps, with everything a map draws', async () => {
    const { server, store } = setup()
    store.setThingScope('map:a', RULES)

    const data = await store.getData('OGCSTAData')

    expect(server.requests).toEqual([
      `v1.1/Things?$expand=Datastreams/ObservedProperty,Locations&$filter=${RULES}`,
    ])
    expect(data.things.map((t: any) => t.iotId)).toEqual(['JeN-06', 's1-derived'])
    // The datastream /Datastreams does not list is there, with its area.
    const color = data.datastreams.find((d: any) => d.iotId === 'JeN-06~referenceArea~color')
    expect(color.observedArea).toEqual(area)
    expect(color.observedProperty.name).toBe('color')
    expect(data.locations).toHaveLength(2)
  })

  it('joins the scopes of two maps', async () => {
    const { server, store } = setup()
    store.setThingScope('map:a', "startswith(name,'Reference Area')")
    store.setThingScope('map:b', "name eq 'Weather Jena'")

    const data = await store.getData('OGCSTAData')

    expect(server.requests).toHaveLength(1)
    expect(server.requests[0]).toContain("$filter=(name eq 'Weather Jena') or (startswith(name,'Reference Area'))")
    expect(data.things.map((t: any) => t.iotId).sort()).toEqual(['10567', 'JeN-06'])
  })

  it('loads every thing when one map has a rule without a server form', async () => {
    const { server, store } = setup()
    store.setThingScope('map:a', RULES)
    store.setThingScope('map:b', null)

    const data = await store.getData('OGCSTAData')

    expect(server.requests).toEqual(['v1.1/Things?$expand=Datastreams,Locations'])
    expect(data.things).toHaveLength(3)
  })

  it('asks again without ObservedProperty when the server refuses the deep expand', async () => {
    const { server, store } = setup({ refuseDeepExpand: true })
    store.setThingScope('map:a', RULES)

    const data = await store.getData('OGCSTAData')

    expect(server.requests[1]).toBe(`v1.1/Things?$expand=Datastreams,Locations&$filter=${RULES}`)
    expect(data.things).toHaveLength(2)
  })

  it('loads again when the rules of a map change', async () => {
    const { server, store } = setup()
    store.setThingScope('map:a', RULES)
    await store.getData('OGCSTAData')
    const notified = vi.fn()
    store.subscribe(notified)

    store.setThingScope('map:a', "name eq 'Weather Jena'")
    const data = await store.getData('OGCSTAData')

    expect(notified).toHaveBeenCalled()
    expect(data.things.map((t: any) => t.iotId)).toEqual(['10567'])
    expect(server.requests).toHaveLength(2)
  })
})
