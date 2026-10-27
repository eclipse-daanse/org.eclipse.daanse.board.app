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
import { MetadataStore } from './MetadataStorage'
import { clearMemoryCache } from './metadataCache'

type Restrictions = Record<string, string>

/* A cube of two dimensions, Airline and Time; Time has two hierarchies. */
const levels: Record<string, object[]> = {
  '[Airline]': [
    { HIERARCHY_UNIQUE_NAME: '[Airline]', DIMENSION_UNIQUE_NAME: '[Airline]', LEVEL_NUMBER: '0' },
    { HIERARCHY_UNIQUE_NAME: '[Airline]', DIMENSION_UNIQUE_NAME: '[Airline]', LEVEL_NUMBER: '1' },
  ],
  '[Time]': [{ HIERARCHY_UNIQUE_NAME: '[Time]', DIMENSION_UNIQUE_NAME: '[Time]', LEVEL_NUMBER: '0' }],
  // Listed out of order, as a server may.
  '[Time.Year]': [
    { HIERARCHY_UNIQUE_NAME: '[Time.Year]', DIMENSION_UNIQUE_NAME: '[Time]', LEVEL_NUMBER: '1' },
    { HIERARCHY_UNIQUE_NAME: '[Time.Year]', DIMENSION_UNIQUE_NAME: '[Time]', LEVEL_NUMBER: '0' },
  ],
}
const dimensions = ['[Airline]', '[Time]']

/** An API that answers by restriction and writes down what it was asked. */
function api(schemaVersion = '2026-10-13T22:05:09') {
  const asked: { type: string; restrictions: Restrictions }[] = []
  return {
    asked,
    url: 'https://xmla.test',
    async discover(type: string, restrictions: Restrictions = {}) {
      asked.push({ type, restrictions })
      switch (type) {
        case 'MDSCHEMA_CUBES':
          return [{ CUBE_NAME: 'OnTime', LAST_SCHEMA_UPDATE: schemaVersion }]
        case 'MDSCHEMA_MEASUREGROUP_DIMENSIONS':
          return [...dimensions, '[Measures]'].map(d => ({ DIMENSION_UNIQUE_NAME: d }))
        case 'MDSCHEMA_DIMENSIONS':
          return (restrictions.DIMENSION_UNIQUE_NAME ? [restrictions.DIMENSION_UNIQUE_NAME] : [...dimensions, '[Measures]'])
            .map(name => ({
              DIMENSION_UNIQUE_NAME: name,
              DIMENSION_CAPTION: `Caption of ${name}`,
              DIMENSION_TYPE: name === '[Measures]' ? '2' : '0',
            }))
        case 'MDSCHEMA_HIERARCHIES':
          return restrictions.DIMENSION_UNIQUE_NAME === '[Time]'
            ? [{ HIERARCHY_UNIQUE_NAME: '[Time]' }, { HIERARCHY_UNIQUE_NAME: '[Time.Year]' }]
            : [{ HIERARCHY_UNIQUE_NAME: restrictions.DIMENSION_UNIQUE_NAME }]
        case 'MDSCHEMA_LEVELS':
          return levels[restrictions.HIERARCHY_UNIQUE_NAME] ?? []
        default:
          return []
      }
    },
  }
}

function storeOn(source: ReturnType<typeof api>) {
  const store = new MetadataStore()
  store.init(source as never)
  return store
}

const types = (source: ReturnType<typeof api>) => source.asked.map(a => a.type)
const wholeCube = (source: ReturnType<typeof api>, type: string) =>
  source.asked.filter(a => a.type === type && !a.restrictions.HIERARCHY_UNIQUE_NAME && !a.restrictions.DIMENSION_UNIQUE_NAME)

beforeEach(() => clearMemoryCache())

describe('MetadataStore for a query', () => {
  it('asks for the levels of its own hierarchies only, and their dimensions', async () => {
    const source = api()
    const store = storeOn(source)

    await store.loadQueryMetadata('OnTime', 'OnTime', ['[Airline]'])

    expect(source.asked.filter(a => a.type === 'MDSCHEMA_LEVELS').map(a => a.restrictions.HIERARCHY_UNIQUE_NAME))
      .toEqual(['[Airline]'])
    expect(wholeCube(source, 'MDSCHEMA_LEVELS')).toEqual([])
    expect(types(source)).not.toContain('MDSCHEMA_HIERARCHIES')
    expect(store.getLevels()).toHaveLength(2)
    expect(store.getDimensions().map(d => d.DIMENSION_UNIQUE_NAME)).toEqual(['[Airline]'])
  })

  it('asks once when two queries want the same levels at the same time', async () => {
    const source = api()
    const store = storeOn(source)

    await Promise.all([
      store.loadQueryMetadata('OnTime', 'OnTime', ['[Airline]']),
      store.loadQueryMetadata('OnTime', 'OnTime', ['[Airline]', '[Time]']),
    ])

    const asked = source.asked.filter(a => a.type === 'MDSCHEMA_LEVELS').map(a => a.restrictions.HIERARCHY_UNIQUE_NAME)
    expect(asked.sort()).toEqual(['[Airline]', '[Time]'])
    expect(store.getLevels()).toHaveLength(3)
  })
})

describe('MetadataStore for the cube explorer', () => {
  it('starts from the dimensions by name, asking no hierarchies or levels', async () => {
    const source = api()
    const store = storeOn(source)

    await store.loadMetadata('OnTime', 'OnTime')

    expect(types(source)).not.toContain('MDSCHEMA_HIERARCHIES')
    expect(types(source)).not.toContain('MDSCHEMA_LEVELS')
    expect(store.getDimensions().map(d => d.DIMENSION_UNIQUE_NAME)).toEqual(['[Airline]', '[Time]', '[Measures]'])
    expect(store.getDimensions().find(d => d.DIMENSION_UNIQUE_NAME === '[Measures]')?.DIMENSION_TYPE).toBe('2')
    await expect(store.getMetadataStorage()).resolves.toMatchObject({ measures: expect.any(Array) })
  })

  it('replaces the stand-ins with the dimensions\' own rows', async () => {
    const source = api()
    const store = storeOn(source)
    await store.loadMetadata('OnTime', 'OnTime')

    await store.dimensionsReady()

    expect(store.getDimensions().map(d => d.DIMENSION_UNIQUE_NAME)).toEqual(['[Airline]', '[Time]', '[Measures]'])
    expect(store.getDimensions().map(d => d.DIMENSION_CAPTION)).toEqual([
      'Caption of [Airline]',
      'Caption of [Time]',
      'Caption of [Measures]',
    ])
  })

  /*
   * One request per dimension was fourteen MDSCHEMA_DIMENSIONS at once on
   * FoodMart's Sales, on every cube switch - the explorer wants them all.
   */
  it('asks for the dimensions\' rows in one request, shared with a query starting at the same time', async () => {
    const source = api()
    const store = storeOn(source)

    await Promise.all([
      store.loadMetadata('OnTime', 'OnTime').then(() => store.dimensionsReady()),
      store.loadQueryMetadata('OnTime', 'OnTime', ['[Airline]', '[Time]']),
    ])

    expect(source.asked.filter(a => a.type === 'MDSCHEMA_DIMENSIONS')).toHaveLength(1)
    expect(wholeCube(source, 'MDSCHEMA_DIMENSIONS')).toHaveLength(1)
    expect(store.getDimensions().map(d => d.DIMENSION_CAPTION)).toEqual([
      'Caption of [Airline]',
      'Caption of [Time]',
      'Caption of [Measures]',
    ])
  })

  it('asks for a dimension\'s hierarchies when it is opened, that dimension only', async () => {
    const source = api()
    const store = storeOn(source)
    await store.loadMetadata('OnTime', 'OnTime')

    await store.loadHierarchies('[Time]')

    expect(source.asked.filter(a => a.type === 'MDSCHEMA_HIERARCHIES').map(a => a.restrictions.DIMENSION_UNIQUE_NAME))
      .toEqual(['[Time]'])
    expect(store.getHierarchies().map(h => h.HIERARCHY_UNIQUE_NAME)).toEqual(['[Time]', '[Time.Year]'])
  })
})

describe('MetadataStore kept between page loads', () => {
  it('asks a second store for nothing but the schema version', async () => {
    const first = api()
    const one = storeOn(first)
    await one.loadMetadata('OnTime', 'OnTime')
    await one.dimensionsReady()
    await one.loadHierarchies('[Time]')
    await one.loadQueryMetadata('OnTime', 'OnTime', ['[Airline]'])

    const second = api()
    const two = storeOn(second)
    await two.loadMetadata('OnTime', 'OnTime')
    await two.dimensionsReady()
    await two.loadHierarchies('[Time]')
    await two.loadQueryMetadata('OnTime', 'OnTime', ['[Airline]'])

    expect(types(second)).toEqual(['MDSCHEMA_CUBES'])
    expect(two.getLevels()).toHaveLength(2)
    expect(two.getHierarchies()).toHaveLength(2)
  })

  it('asks again once the schema has changed', async () => {
    await storeOn(api('v1')).loadQueryMetadata('OnTime', 'OnTime', ['[Airline]'])

    const changed = api('v2')
    await storeOn(changed).loadQueryMetadata('OnTime', 'OnTime', ['[Airline]'])

    expect(types(changed)).toContain('MDSCHEMA_LEVELS')
  })
})

describe('MetadataStore below a hierarchy', () => {
  it('gives an opened hierarchy its levels in level order, asking for that hierarchy only', async () => {
    const source = api()
    const store = storeOn(source)
    await store.loadMetadata('OnTime', 'OnTime')

    const loaded = await store.loadHierarchyLevels('[Time.Year]')

    expect(loaded.map(l => l.LEVEL_NUMBER)).toEqual(['0', '1'])
    expect(source.asked.filter(a => a.type === 'MDSCHEMA_LEVELS').map(a => a.restrictions.HIERARCHY_UNIQUE_NAME))
      .toEqual(['[Time.Year]'])
  })

  it('fetches a level\'s members one page at a time, in the cube\'s catalog', async () => {
    const level = {
      CATALOG_NAME: 'OnTime',
      CUBE_NAME: 'OnTime',
      DIMENSION_UNIQUE_NAME: '[Airline]',
      HIERARCHY_UNIQUE_NAME: '[Airline]',
      LEVEL_NAME: 'Carrier',
      LEVEL_UNIQUE_NAME: '[Airline].[Carrier]',
      LEVEL_CAPTION: 'Carrier',
      LEVEL_NUMBER: '1',
    } as unknown as MDSchemaLevel
    const tuple = (code: string) => ({ Member: { UName: `[Airline].[${code}]`, Caption: code, LNum: '1' } })
    const source = { ...api(), getLevelMembers: vi.fn(async () => [tuple('AA'), tuple('DL'), tuple('UA')]) }
    const store = storeOn(source)
    await store.loadMetadata('OnTime', 'OnTime')

    const page = await store.loadLevelMembers(level, 4, 2)

    expect(source.getLevelMembers).toHaveBeenCalledWith(level, 2, 4, 'OnTime')
    expect(page.hasMore).toBe(true)
    expect(page.members.map(m => m.MEMBER_CAPTION)).toEqual(['AA', 'DL'])
    expect(page.members[0]).toMatchObject({
      MEMBER_UNIQUE_NAME: '[Airline].[AA]',
      LEVEL_UNIQUE_NAME: '[Airline].[Carrier]',
      HIERARCHY_UNIQUE_NAME: '[Airline]',
    })

    source.getLevelMembers.mockResolvedValueOnce([tuple('AA')])
    expect((await store.loadLevelMembers(level, 6, 2)).hasMore).toBe(false)
  })
})
