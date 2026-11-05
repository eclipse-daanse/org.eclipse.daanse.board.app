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
 * #1264: a table of the Reference Areas with their state - one row per
 * thing, the latest value of chosen datastreams, codes shown as words.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { wireRepositories } from '../../../../../test/support/wiring'
import * as ogcsta from '../src/index'
import { factorySymbol } from '../src/index'
import { clearSharedCache } from '../src/client/CachingMiddleware'
import { formatTime, thingFilterOfNames } from '../src/util/latestValues'
import { IOGCSTAConfigurationImpl } from '../src/gen/IOGCSTAConfigurationImpl'
import { staServer, type StaFixture } from './support/staServer'

const T1 = '2026-11-05T10:00:00Z'
const T0 = '2026-11-04T10:00:00Z'

const thing = (id: string, suffixes: string[]) => ({
  '@iot.id': id,
  name: `Reference Area ${id}`,
  Datastreams: suffixes.map((s) => ({ '@iot.id': `${id}${s}`, name: s })),
})

const fixture: StaFixture = {
  things: [
    thing('ZW-01', ['~referenceArea~color', '~referenceArea~sensorCount']),
    thing('Löb/ZW-01', ['~referenceArea~color', '~referenceArea~sensorCount']),
    // No colour datastream at all, and no observation of its count.
    thing('JeN-02', ['~referenceArea~sensorCount']),
    { '@iot.id': '10567', name: 'Weather Jena', Datastreams: [{ '@iot.id': '10567~referenceArea~color', name: 'c' }] },
  ],
  observations: {
    'ZW-01~referenceArea~color': [{ phenomenonTime: T1, result: 'GREEN' }, { phenomenonTime: T0, result: 'RED' }],
    'ZW-01~referenceArea~sensorCount': [{ phenomenonTime: T1, result: 3 }],
    'Löb/ZW-01~referenceArea~color': [{ phenomenonTime: T1, result: 'PURPLE' }],
    'Löb/ZW-01~referenceArea~sensorCount': [{ phenomenonTime: T1, result: 2 }],
    '10567~referenceArea~color': [{ phenomenonTime: T1, result: 'RED' }],
  },
  // As on the server: the batch on /Observations misses some datastreams.
  missingFromObservations: ['Löb/ZW-01~referenceArea~color'],
}

const view = {
  thingNames: ['Reference Area*'],
  nameColumn: 'Fläche',
  columns: [
    {
      suffix: '~referenceArea~color',
      label: 'Zustand',
      mappings: [
        { code: 'BLUE', label: 'feucht', color: '#1e88e5' },
        { code: 'GREEN', label: 'optimal', color: '#43a047' },
        { code: 'YELLOW', label: 'leichter Trockenstress', color: '#fdd835' },
        { code: 'RED', label: 'Trockenstress', color: '#e53935' },
      ],
    },
    { suffix: '~referenceArea~sensorCount', label: 'Sensoren' },
    { suffix: '~referenceArea~color', label: 'Stand', part: 'phenomenonTime' },
  ],
}

function setup(extra: Partial<StaFixture> = {}, latestValues: unknown = view) {
  const server = staServer({ ...fixture, ...extra })
  const urls: string[] = []
  const fetch = server.connection.fetch
  server.connection.fetch = (config, init) => {
    urls.push(config.url)
    return fetch(config, init)
  }
  const { connectionRepository, datasourceRepository } = wireRepositories(ogcsta)
  vi.spyOn(connectionRepository, 'getConnection').mockReturnValue(server.connection as any)
  datasourceRepository.registerDatasourceType('ogcsta', { Store: factorySymbol, Preview: null as any, Settings: null as any })
  datasourceRepository.registerDatasource('sta', 'ogcsta', { uid: 'sta', type: 'ogcsta', name: 'STA', connection: 'conn', latestValues } as any)
  return { server, urls, store: datasourceRepository.getDatasource('sta') as any }
}

describe('the latest values view of an OGC STA source', () => {
  beforeEach(() => clearSharedCache())

  it('has a row per matched thing, with codes shown as words and their colours', async () => {
    const { store } = setup()

    const table = await store.getData('DataTable')

    expect(table.headers).toEqual(['Fläche', 'Zustand', 'Sensoren', 'Stand'])
    expect(table.items.map((r: any) => [r['Fläche'], r.Zustand, r.Sensoren])).toEqual([
      ['Reference Area JeN-02', undefined, undefined],
      ['Reference Area Löb/ZW-01', 'PURPLE', 2],
      ['Reference Area ZW-01', 'optimal', 3],
    ])
    expect(table.items[2].Stand).toBe(formatTime(T1))
    expect(table.items[0].Stand).toBeUndefined()
    expect(table.colors.Zustand).toEqual({
      feucht: '#1e88e5',
      optimal: '#43a047',
      'leichter Trockenstress': '#fdd835',
      Trockenstress: '#e53935',
    })
    expect(table.rows[2]).toEqual(['Reference Area ZW-01', 'optimal', 3, formatTime(T1)])
  })

  it('asks for the matched things and their latest values only, and directly for what a batch misses', async () => {
    const { server, urls, store } = setup()

    await store.getData('DataTable')

    expect(server.requests[0]).toBe("v1.1/Things?$select=@iot.id,name&$filter=startswith(name,'Reference Area')")
    // No catalogue: neither an expand of things nor the datastream collection.
    expect(server.requests.some((r) => r.includes('$expand=Datastreams') || r.startsWith('v1.1/Datastreams?'))).toBe(false)
    const batches = server.requests.filter((r) => r.startsWith('v1.1/Observations?'))
    expect(batches).toHaveLength(1)
    // Two columns on one datastream are asked for once.
    expect(batches[0].split(' or ')).toHaveLength(6)
    // The ones the batch missed, each directly - the slash in the id encoded.
    const single = server.requests.filter((r) => r.startsWith('v1.1/Datastreams('))
    expect(single.sort()).toEqual([
      'v1.1/Datastreams(JeN-02~referenceArea~color)/Observations?$top=1&$orderby=phenomenonTime desc',
      'v1.1/Datastreams(JeN-02~referenceArea~sensorCount)/Observations?$top=1&$orderby=phenomenonTime desc',
      'v1.1/Datastreams(Löb/ZW-01~referenceArea~color)/Observations?$top=1&$orderby=phenomenonTime desc',
    ])
    expect(urls.some((u) => u.startsWith('/v1.1/Datastreams(L%C3%B6b%2FZW-01~referenceArea~color)/Observations'))).toBe(true)
  })

  it('reads every datastream directly where /Observations keeps history', async () => {
    const { server, store } = setup({ observationsCollectionIsHistory: true })

    const table = await store.getData('DataTable')

    const zw = table.items.find((r: any) => r['Fläche'] === 'Reference Area ZW-01')
    expect(zw.Zustand).toBe('optimal')
    expect(server.requests.filter((r) => r.startsWith('v1.1/Datastreams(')).length).toBe(6)
  })

  it('has no rows without a thing name, and asks nothing', async () => {
    const { server, store } = setup({}, { ...view, thingNames: [] })

    const table = await store.getData('DataTable')

    expect(table.items).toEqual([])
    expect(table.headers).toEqual(['Fläche', 'Zustand', 'Sensoren', 'Stand'])
    expect(server.requests).toEqual([])
  })

  it('leaves a source without the view as it was', async () => {
    const { server, store } = setup({}, null)

    const data = await store.getData('DataTable')

    expect(data.items).toBeUndefined()
    expect(server.requests[0].startsWith('v1.1/Things?$expand=')).toBe(true)
  })
})

describe('the thing names of the view', () => {
  it('read as the map reads a name rule', () => {
    expect(thingFilterOfNames(['Reference Area*', '*-derived', "*O'Neil*", 'Weather Jena', '*', 'A*b*'])).toBe(
      "startswith(name,'Reference Area') or endswith(name,'-derived') or substringof('O''Neil',name) or name eq 'Weather Jena'",
    )
    expect(thingFilterOfNames(undefined)).toBeNull()
  })
})

describe('a stored configuration with the view', () => {
  it('keeps the view when written out', () => {
    const configuration = new IOGCSTAConfigurationImpl()
    configuration.connection = 'conn'
    configuration.latestValues = view as any
    expect(JSON.parse(JSON.stringify(configuration))).toEqual({ connection: 'conn', latestValues: view })
  })
})
