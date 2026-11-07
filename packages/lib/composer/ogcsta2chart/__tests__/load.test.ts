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
 * #1250: a chart on an OGC STA source waited for the whole catalogue of the
 * server (every thing with every datastream, 3.7 MB, about a minute) before
 * it loaded its own two datastreams, one after the other.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { wireRepositories } from '../../../../../test/support/wiring'
import * as ogcsta from '../../../datasource/ogcsta/src/index'
import { factorySymbol, FILTER } from '../../../datasource/ogcsta/src/index'
import { clearSharedCache } from '../../../datasource/ogcsta/src/client/CachingMiddleware'
import { staServer } from '../../../datasource/ogcsta/__tests__/support/staServer'
import { OGCSTAToChartComposer } from '../src/classes/index'

const observations = {
  'JeN-06~soil~moisture': [
    { phenomenonTime: '2026-11-04T12:00:00Z', result: 31 },
    { phenomenonTime: '2026-11-03T12:00:00Z', result: 30 },
    { phenomenonTime: '2026-10-01T12:00:00Z', result: 99 },
  ],
  'JeN-06~soil~temperature': [
    { phenomenonTime: '2026-11-04T12:00:00Z', result: 7 },
  ],
}

function setup() {
  const server = staServer({
    delay: 5,
    observations,
    // The collection misses one of them, as on the real server.
    hiddenFromCollection: ['JeN-06~soil~moisture'],
    things: [{
      '@iot.id': 'JeN-06',
      name: 'Reference Area JeN-06',
      Datastreams: [
        { '@iot.id': 'JeN-06~soil~moisture', name: 'moisture', unitOfMeasurement: { symbol: '%' },
          phenomenonTime: '2026-10-01T12:00:00Z/2026-11-04T12:00:00Z' },
        // Without phenomenonTime, as on the real server
        { '@iot.id': 'JeN-06~soil~temperature', name: 'temperature', unitOfMeasurement: { symbol: '°C' } },
      ],
    }],
  })
  const { connectionRepository, datasourceRepository } = wireRepositories(ogcsta)
  vi.spyOn(connectionRepository, 'getConnection').mockReturnValue(server.connection as any)
  datasourceRepository.registerDatasourceType('ogcsta', { Store: factorySymbol, Preview: null as any, Settings: null as any })
  datasourceRepository.registerDatasource('sta', 'ogcsta', {
    uid: 'sta',
    type: 'ogcsta',
    name: 'STA',
    connection: 'conn',
    history: {
      enabled: false,
      phenomenonTime: { start: '2026-11-01T00:00:00Z', end: '2026-11-05T00:00:00Z' },
    },
  } as any)

  const composer = new OGCSTAToChartComposer(datasourceRepository)
  composer.init({
    uid: 'chart',
    name: 'chart',
    type: 'ogcsta2chart',
    connectedDatasources: ['sta'],
    thingIds: [],
    datastreams: [
      { datastreamId: 'JeN-06~soil~moisture', label: 'Moisture' },
      { datastreamId: 'JeN-06~soil~temperature' },
    ],
  } as any)
  return { server, composer, store: datasourceRepository.getDatasource('sta') as any }
}

describe('a chart on an OGC STA source', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout'], shouldAdvanceTime: true })
    clearSharedCache()
  })
  afterEach(() => vi.useRealTimers())

  it('loads its datastreams directly and in parallel, without the catalogue', async () => {
    const { server, composer } = setup()

    const chart = await composer.getData('ChartData')

    const paths = server.requests.map((r) => r.split('?')[0])
    expect(paths.sort()).toEqual([
      "v1.1/Datastreams(JeN-06~soil~moisture)",
      "v1.1/Datastreams(JeN-06~soil~moisture)/Observations",
      "v1.1/Datastreams(JeN-06~soil~temperature)",
      "v1.1/Datastreams(JeN-06~soil~temperature)/Observations",
    ])
    expect(server.requests.some((r) => r.includes('Things'))).toBe(false)
    expect(server.maxInFlight).toBeGreaterThanOrEqual(4)

    // The window applies though the source does not show history itself.
    expect(chart.labels).toEqual(['2026-11-03T12:00:00Z', '2026-11-04T12:00:00Z'])
    expect(chart.datasets.map((d: any) => [d.label, d.data])).toEqual([
      ['Moisture', [30, 31]],
      ['JeN-06~soil~temperature', [null, 7]],
    ])
  })

  it('keeps its series when a map loads the latest value of the same datastream', async () => {
    const { composer, store } = setup()
    const before = await composer.getData('ChartData')

    // What a map does: the latest value only, merged into the shared store.
    await store.callEvent(FILTER, { observations: [{ iotId: 'JeN-06~soil~moisture' }] }, false)
    const after = await composer.getData('ChartData')

    expect(after.datasets[0].data).toEqual(before.datasets[0].data)
  })

  it('shows the unit of each datastream in a table', async () => {
    const { composer } = setup()

    const table = await composer.getData('DataTable')

    expect(table.rows).toContainEqual(['Moisture', 31, '%', '2026-11-04T12:00:00Z'])
    expect(table.rows).toContainEqual(['temperature', 7, '°C', '2026-11-04T12:00:00Z'])
  })

  it('finds a thing and its datastreams for an action without the catalogue', async () => {
    const { server, composer } = setup()
    composer.removeAllDatastreams()
    server.reset()

    await composer.switchThingById('JeN-06')
    await composer.addDatastreamsByName('moisture')

    expect(server.requests).toEqual(['v1.1/Things?$select=@iot.id,name', 'v1.1/Things(JeN-06)/Datastreams'])
    expect((composer as any).datastreams.map((d: any) => d.datastreamId)).toEqual(['JeN-06~soil~moisture'])
  })

  it('says where each datastream holds data without loading an observation (#1279)', async () => {
    const { server, composer } = setup()

    const coverage = await composer.getData('TimeCoverage')

    const asked = server.requests.map((r) => decodeURIComponent(r))
    expect(asked.filter((r) => r.includes('moisture'))).toEqual([
      'v1.1/Datastreams(JeN-06~soil~moisture)?$select=name,phenomenonTime',
    ])
    // The server leaves it out: first and last observation, one each, and no $select
    const temperature = asked.filter((r) => r.includes('temperature'))
    expect(temperature).toHaveLength(3)
    expect(temperature.filter((r) => r.includes('/Observations')).every((r) => r.includes('$top=1') && !r.includes('$select'))).toBe(true)
    expect(coverage.series).toEqual([
      {
        id: 'JeN-06~soil~moisture', label: 'Moisture', color: undefined,
        intervals: [{ start: '2026-10-01T12:00:00Z', end: '2026-11-04T12:00:00Z' }],
      },
      {
        // One observation: an interval of no length
        id: 'JeN-06~soil~temperature', label: 'temperature', color: undefined,
        intervals: [{ start: '2026-11-04T12:00:00Z', end: '2026-11-04T12:00:00Z' }],
      },
    ])
  })
})
