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

import { describe, expect, it } from 'vitest'
import { ChartComposer } from './index'

describe('ChartComposer', () => {
  it('charts the values as they are, without touching the table', async () => {
    const table = {
      headers: ['Caption', 'Unit Sales'],
      items: [
        { Caption: 'Drink', 'Unit Sales': '24597' },
        { Caption: 'Food', 'Unit Sales': '191940' },
      ],
      rows: [],
    }
    const source = { getData: async () => table, subscribe() {} }
    const repository = { getDatasource: () => source } as any
    const composer = new ChartComposer(repository)
    composer.init({
      uid: 'chart',
      name: 'chart',
      type: 'chart',
      connectedDatasources: ['source'],
      composeBy: 'Caption',
      labelColumn: 'Caption',
      usedSets: ['Unit Sales'],
    } as any)

    const chart = await composer.getData('ChartData')
    expect(chart.labels).toEqual(['Drink', 'Food'])
    expect(chart.datasets[0].data).toEqual([24597, 191940])
    expect(table.items[0]['Unit Sales']).toBe('24597')
  })

  it('names what a configuration lacks, compose-by among it', () => {
    const complete = {
      connectedDatasources: ['source'],
      composeBy: 'Caption',
      labelColumn: 'Caption',
      usedSets: ['Unit Sales'],
    } as any

    expect(ChartComposer.missingConfiguration(complete)).toEqual([])
    expect(ChartComposer.validateConfiguration(complete)).toBe(true)

    const withoutComposeBy = { ...complete, composeBy: '' }
    expect(ChartComposer.missingConfiguration(withoutComposeBy)).toEqual(['composeBy'])
    expect(ChartComposer.validateConfiguration(withoutComposeBy)).toBe(false)

    expect(ChartComposer.missingConfiguration({} as any)).toEqual([...ChartComposer.requiredConfiguration])
  })
})
