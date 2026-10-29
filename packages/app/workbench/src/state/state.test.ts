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
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { XMLA_TRAFFIC, XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import { parseCellset, getSlice, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import sales from '../../../../lib/datasource/xmla/src/utils/__fixtures__/sales-4-axes.json'
import { decodeQuery, encodeQuery, queryFromHash, sharedFromHash, shareLink } from './share'
import { clearHistory, HISTORY_LIMIT, loadHistory, recordHistory, type HistoryEntry } from './history'
import { runnableExamples } from './examples'
import {
  emptyMetadata,
  entriesOf,
  memberSearchStatement,
  membersFromSearchCell,
  searchableHierarchies,
  searchEntries,
  SHORT_SEARCH_LIMIT,
} from './metadata'
import { connectionConfig, loadConnections, storeConnections, PRESETS } from './connections'
import { answerTable, AnswerSource, LABEL_COLUMN } from './answer'
import { rowColumns } from './rowInfo'
import { createWorkbench, linkedServerName, type RunResult } from './workbench'

describe('a shared query', () => {
  it('survives the round trip, umlauts and newlines included', () => {
    const text = 'SELECT {[Measures].[Umsatz größer]} ON 0\nFROM [Sales]'
    expect(decodeQuery(encodeQuery(text))).toBe(text)
    expect(encodeQuery(text)).not.toMatch(/[+/=]/)
  })

  it('is read from the hash of a link', () => {
    const link = shareLink({ origin: 'http://localhost', pathname: '/workbench' }, 'SELECT FROM [Sales]')
    expect(link.startsWith('http://localhost/workbench#q=')).toBe(true)
    expect(queryFromHash(new URL(link).hash)).toBe('SELECT FROM [Sales]')
    expect(queryFromHash('#other=1')).toBeNull()
  })

  it('carries the server, catalog and cube it ran on, and no more', () => {
    const link = shareLink({ origin: 'http://localhost', pathname: '/workbench' }, 'SELECT FROM [Sales]', {
      url: 'https://demo.emondrian.com/xmla?x=1&y=2',
      catalog: 'Food Mart',
      cube: 'Sales & Co',
    })
    expect(sharedFromHash(new URL(link).hash)).toEqual({
      text: 'SELECT FROM [Sales]',
      url: 'https://demo.emondrian.com/xmla?x=1&y=2',
      catalog: 'Food Mart',
      cube: 'Sales & Co',
    })
    expect(link).not.toMatch(/password|user/i)
  })

  it('reads an older link that has only the query', () => {
    expect(sharedFromHash('#q=' + encodeQuery('SELECT FROM [Sales]'))).toEqual({
      text: 'SELECT FROM [Sales]',
      url: undefined,
      catalog: undefined,
      cube: undefined,
    })
  })
})

describe('the history', () => {
  beforeEach(() => localStorage.clear())
  const entry = (mdx: string, time = 1): HistoryEntry => ({ mdx, time, outcome: 'ok' })

  it('keeps the newest first, once per statement, within the limit', () => {
    let history: HistoryEntry[] = []
    history = recordHistory(history, entry('A'))
    history = recordHistory(history, entry('B'))
    history = recordHistory(history, entry(' A ', 3))
    expect(history.map(e => e.mdx)).toEqual([' A ', 'B'])
    for (let i = 0; i < HISTORY_LIMIT + 5; i++) history = recordHistory(history, entry(String(i)))
    expect(history).toHaveLength(HISTORY_LIMIT)
    expect(loadHistory()).toHaveLength(HISTORY_LIMIT)
    expect(clearHistory()).toEqual([])
    expect(loadHistory()).toEqual([])
  })
})

describe('the connections', () => {
  beforeEach(() => localStorage.clear())

  it('stores the person’s servers, never the presets', () => {
    storeConnections([{ ...PRESETS[0] }, { uid: 'x', name: 'Mine', url: 'https://example.test/xmla', catalog: 'C', cube: 'K', security: 'None' }])
    expect(loadConnections().map(c => c.uid)).toEqual(['x'])
  })

  it('becomes the configuration XmlaConnection reads', () => {
    expect(connectionConfig(PRESETS[0])).toMatchObject({ type: 'xmla', url: 'https://demo.emondrian.com/xmla', catalogName: 'FoodMart', cubeName: 'Sales' })
  })
})

describe('the examples', () => {
  const metadata = {
    ...emptyMetadata(),
    cube: 'Sales',
    measures: [{ MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]' }, { MEASURE_UNIQUE_NAME: '[Measures].[Store Sales]' }],
    hierarchies: [
      { HIERARCHY_UNIQUE_NAME: '[Measures]', DIMENSION_UNIQUE_NAME: '[Measures]' },
      { HIERARCHY_UNIQUE_NAME: '[Product]', DIMENSION_UNIQUE_NAME: '[Product]' },
      { HIERARCHY_UNIQUE_NAME: '[Product].[Brand]', DIMENSION_UNIQUE_NAME: '[Product]' },
      { HIERARCHY_UNIQUE_NAME: '[Time]', DIMENSION_UNIQUE_NAME: '[Time]' },
      { HIERARCHY_UNIQUE_NAME: '[Store]', DIMENSION_UNIQUE_NAME: '[Store]' },
    ],
  }

  it('are built from the cube, one hierarchy per dimension, axes from 3 on by number', () => {
    const examples = runnableExamples(metadata)
    expect(examples.map(e => e.id)).toEqual(['two-axes', 'calculated', 'top', 'pages', 'drillthrough', 'dmv'])
    const pages = examples.find(e => e.id === 'pages')!.text
    expect(pages).toContain('[Product].Children ON ROWS')
    expect(pages).toContain('[Time].Children ON PAGES')
    expect(pages).toContain('[Store].Children ON AXIS(3)')
    expect(pages).not.toContain('[Product].[Brand]')
  })

  it('are none without a cube', () => {
    expect(runnableExamples(emptyMetadata())).toEqual([])
  })

  it('name every object for the search, measures before members of [Measures]', () => {
    const entries = entriesOf({ ...metadata, members: [{ MEMBER_UNIQUE_NAME: '[Time].[1997]', MEMBER_CAPTION: '1997' }] })
    expect(entries.find(e => e.uniqueName === '[Time].[1997]')?.kind).toBe('member')
    expect(entries.filter(e => e.kind === 'measure')).toHaveLength(2)
  })
})

describe('the search over the cube', () => {
  const metadata = {
    ...emptyMetadata(),
    measures: [{ MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]', MEASURE_CAPTION: 'Unit Sales' }],
    dimensions: [{ DIMENSION_UNIQUE_NAME: '[Store]', DIMENSION_CAPTION: 'Store' }],
    members: [
      { MEMBER_UNIQUE_NAME: '[Measures].[Unit Sales]', MEMBER_CAPTION: 'Unit Sales' },
      { MEMBER_UNIQUE_NAME: '[Time].[1997]', MEMBER_CAPTION: '1997' },
      ...Array.from({ length: 80 }, (_, i) => ({ MEMBER_UNIQUE_NAME: `[Customers].[C${i}]`, MEMBER_CAPTION: `Customer ${i}` })),
    ],
  }

  it('lists a measure once, as the measure, not again as a member of [Measures]', () => {
    const named = entriesOf(metadata).filter(e => e.uniqueName === '[Measures].[Unit Sales]')
    expect(named.map(e => e.kind)).toEqual(['measure'])
  })

  it('finds by one letter what starts with it, within a cap', () => {
    expect(searchEntries(entriesOf(metadata), 's').map(e => e.caption)).toEqual(['Store', 'Unit Sales'])
    expect(searchEntries(entriesOf(metadata), 'c')).toHaveLength(SHORT_SEARCH_LIMIT)
    expect(searchEntries(entriesOf(metadata), '1')[0].uniqueName).toBe('[Time].[1997]')
  })

  it('puts the exact caption first, then what starts with the needle, then what contains it', () => {
    expect(searchEntries(entriesOf(metadata), 'store')[0].kind).toBe('dimension')
    expect(searchEntries(entriesOf(metadata), 'unit sales').map(e => e.kind)).toEqual(['measure'])
    expect(searchEntries(entriesOf(metadata), 'ales').map(e => e.caption)).toEqual(['Unit Sales'])
    expect(searchEntries(entriesOf(metadata), '  ')).toEqual([])
  })

  it('finds a measure by any letter of its caption or its name, however many members match', () => {
    const cube = {
      ...metadata,
      measures: [
        ...metadata.measures,
        { MEASURE_UNIQUE_NAME: '[Measures].[Profit]', MEASURE_NAME: 'Profit', MEASURE_CAPTION: 'Profit' },
        { MEASURE_UNIQUE_NAME: '[Measures].[Profit Growth]', MEASURE_NAME: 'Profit Growth', MEASURE_CAPTION: 'Gewinn-Wachstum' },
      ],
    }
    expect(searchEntries(entriesOf(cube), 'f').map(e => e.caption)).toEqual(['Profit', 'Gewinn-Wachstum'])
    expect(searchEntries(entriesOf(cube), 'growth').map(e => e.caption)).toEqual(['Gewinn-Wachstum'])
    const c = searchEntries(entriesOf(cube), 'c')
    expect(c).toHaveLength(SHORT_SEARCH_LIMIT)
    expect(c.filter(e => e.kind === 'measure').map(e => e.caption)).toEqual(['Gewinn-Wachstum'])
    expect(searchEntries(entriesOf({ ...cube, members: [...cube.members, ...Array.from({ length: 80 }, (_, i) => ({ MEMBER_UNIQUE_NAME: `[P].[P${i}]`, MEMBER_CAPTION: `Pr ${i}` }))] }), 'p').filter(e => e.kind === 'measure')).toHaveLength(2)
  })
})

describe('the search on the server', () => {
  const hierarchies = [
    { HIERARCHY_UNIQUE_NAME: '[Measures]', DIMENSION_TYPE: 2 },
    { HIERARCHY_UNIQUE_NAME: '[Product]', DIMENSION_TYPE: 3 },
    { HIERARCHY_UNIQUE_NAME: '[Store.Store City]', DIMENSION_TYPE: 3 },
  ]

  it('asks every hierarchy but the measures in one statement, the needle escaped', () => {
    const asked = searchableHierarchies({ ...emptyMetadata(), hierarchies })
    expect(asked).toEqual(['[Product]', '[Store.Store City]'])
    const statement = memberSearchStatement('Sales', asked, ' fo"o ')!
    expect(statement).toContain('Filter([Product].AllMembers, InStr(1, UCase([Product].CurrentMember.Caption), "FO""O") > 0)')
    expect(statement).toContain('Head(Filter([Store.Store City].AllMembers')
    expect(statement).toContain('SELECT {[Measures].[__search 0], [Measures].[__search 1]} ON COLUMNS')
    expect(statement.endsWith('FROM [Sales]')).toBe(true)
    expect(memberSearchStatement('Sales', [], 'foo')).toBeNull()
    expect(memberSearchStatement('Sales', asked, '  ')).toBeNull()
  })

  it('reads the members out of what a hierarchy answered', () => {
    expect(membersFromSearchCell('[Product].[Food]\tFood\n[Product].[Food].[Seafood]\tSeafood\n', '[Product]')).toEqual([
      { MEMBER_UNIQUE_NAME: '[Product].[Food]', MEMBER_CAPTION: 'Food', HIERARCHY_UNIQUE_NAME: '[Product]' },
      { MEMBER_UNIQUE_NAME: '[Product].[Food].[Seafood]', MEMBER_CAPTION: 'Seafood', HIERARCHY_UNIQUE_NAME: '[Product]' },
    ])
    expect(membersFromSearchCell('', '[Product]')).toEqual([])
  })
})

describe('a row in the properties dialog', () => {
  it('shows an empty element as nothing and an OLE DB type by its name', () => {
    const columns = rowColumns({ DESCRIPTION: {}, DEFAULT_FORMAT_STRING: { __attrs: { nil: 'true' } }, DATA_TYPE: '130', MEASURE_NAME: 'Unit Sales', __attrs: {} })
    expect(Object.fromEntries(columns.map(c => [c.key, c.value]))).toEqual({
      DESCRIPTION: '',
      DEFAULT_FORMAT_STRING: '',
      DATA_TYPE: 'VARCHAR (130)',
      MEASURE_NAME: 'Unit Sales',
    })
    expect(rowColumns({ DATA_TYPE: '999' })[0].value).toBe('999')
    expect(rowColumns({ ROWSET: { row: [1] } })[0]).toMatchObject({ nested: true })
  })
})

describe('the answer as the chart reads it', () => {
  const cellset = parseCellset(sales) as Cellset

  it('is one series per column, the rows along the axis', () => {
    const matrix = getSlice(cellset, { axis2: 0, axis3: 0 })
    const table = answerTable(matrix, 'Value')
    expect(table.headers).toEqual([LABEL_COLUMN, ...matrix.columns.map(c => c.label)])
    expect(table.items.map(i => i[LABEL_COLUMN])).toEqual(matrix.rows.map(r => r.label))
    const first = matrix.cells[0][0]
    expect(table.items[0][matrix.columns[0].label]).toBe(first && typeof first.value === 'number' ? first.value : undefined)
  })

  it('is one series of the columns when the answer has no rows', () => {
    const matrix = { columns: getSlice(cellset, { axis2: 0, axis3: 0 }).columns, rows: [], cells: [[{ value: 3, formatted: '3' } as any, null]] }
    const table = answerTable(matrix, 'Value')
    expect(table.headers).toEqual([LABEL_COLUMN, 'Value'])
    expect(table.items.map(i => i.Value)).toEqual([3, undefined])
  })

  it('keeps two rows of one caption apart', () => {
    const position = (label: string, index: number) => ({ index, label, key: `${label}${index}`, members: [] })
    const matrix = { columns: [position('A', 0)], rows: [position('Q1', 0), position('Q1', 1)], cells: [[null], [null]] }
    expect(answerTable(matrix, 'Value').items.map(i => i[LABEL_COLUMN])).toEqual(['Q1', 'Q1 (2)'])
  })

  it('is handed out as it is, without asking anything', async () => {
    const table = answerTable(getSlice(cellset, { axis2: 0, axis3: 0 }), 'Value')
    const source = new AnswerSource(table)
    expect(await source.getData('DataTable')).toBe(table)
    expect(typeof source.subscribe(() => {})).toBe('function')
  })
})

describe('the workbench and its servers', () => {
  const answering = 'https://good.test/xmla'

  function services() {
    const live = new Map<string, any>()
    const discover = vi.fn(async (requestType: string) => {
      if (requestType === 'DBSCHEMA_CATALOGS') return [{ CATALOG_NAME: 'FoodMart' }]
      if (requestType === 'MDSCHEMA_CUBES') return [{ CUBE_NAME: 'Sales' }]
      if (requestType === 'MDSCHEMA_MEASURES') return [{ MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]' }]
      return []
    })
    const repository = {
      registerConnection(uid: string, _type: string, config: any) {
        // What XmlaConnection's factory does with a configuration it cannot use.
        if (!config.catalogName) throw new Error('Invalid XmlaConnection configuration. Please provide a valid configuration.')
        live.set(uid, {
          getApi: async () => {
            if (config.url !== answering) throw new Error('Failed to fetch')
            return { discover }
          },
        })
      },
      getConnection(uid: string) {
        if (!live.has(uid)) throw new Error(`no connection ${uid}`)
        return live.get(uid)
      },
      removeConnection(uid: string) {
        live.delete(uid)
      },
    }
    const registry: Record<string, unknown> = {
      [CONNECTION_REPOSITORY]: repository,
      [XMLA_TRAFFIC]: { subscribe: () => () => {} },
    }
    return { getRequired: (id: string) => registry[id], get: () => undefined } as any
  }
  const log = { info() {}, warn() {}, error() {}, debug() {} } as any

  beforeEach(() => {
    localStorage.clear()
    vi.spyOn(XmlaConnection, 'getCatalogs').mockImplementation(async url => {
      if (url !== answering) throw new Error('Failed to fetch')
      return [{ CATALOG_NAME: 'FoodMart', DESCRIPTION: '' }]
    })
  })
  afterEach(() => {
    vi.restoreAllMocks()
    window.history.replaceState(null, '', '/')
  })

  it('does not add a server from the dialog that never answered, and says why', async () => {
    const wb = createWorkbench(services(), log)
    await expect(wb.addConnection({ name: 'Wrong', url: 'https://wrong.test/xmla', catalog: '', cube: '', security: 'None' })).rejects.toThrow('Failed to fetch')
    expect(wb.connections.value.some(c => c.url === 'https://wrong.test/xmla')).toBe(false)
    expect(loadConnections()).toEqual([])
  })

  it('keeps a server from a link, named apart from the presets, and marks it failing with the real reason', async () => {
    const link = shareLink({ origin: 'http://localhost', pathname: '/workbench' }, 'SELECT FROM [Sales]', { url: 'https://wrong.test/olap/xmla/' })
    window.history.replaceState(null, '', '/workbench' + new URL(link).hash)
    const wb = createWorkbench(services(), log)
    await flushPromises()
    const linked = wb.connections.value.find(c => c.url === 'https://wrong.test/olap/xmla/')!
    expect(linked).toMatchObject({ name: 'wrong.test/olap/xmla', fromLink: true })
    expect(wb.failing.value).toEqual([linked.uid])
    expect(wb.connectionError.value).toBe('Failed to fetch')
    expect(wb.notice.value).toMatchObject({ text: 'Notice.connectFailed', values: { error: 'Failed to fetch' } })
  })

  it('names a linked server by host and path', () => {
    expect(linkedServerName('https://demo.emondrian.com/xmla')).toBe('demo.emondrian.com/xmla')
    expect(linkedServerName('https://h.test/')).toBe('h.test')
    expect(linkedServerName('not a url')).toBe('not a url')
  })

  it('takes the cube and the answers along when the active server is removed', async () => {
    const wb = createWorkbench(services(), log)
    await wb.addConnection({ name: 'Good', url: answering, catalog: '', cube: '', security: 'None' })
    await flushPromises()
    expect(wb.catalog.value).toBe('FoodMart')
    expect(wb.metadata.value.measures).toHaveLength(1)
    const tab = wb.activeTab.value!
    tab.result = { status: 'done', statement: 'x', catalog: 'FoodMart', cube: 'Sales', startedAt: 1 } as RunResult
    wb.removeConnection(wb.activeId.value!)
    await flushPromises()
    expect(wb.activeId.value).toBeNull()
    expect(wb.metadata.value.measures).toEqual([])
    expect(tab.result).toBeNull()
  })

  it('keeps the chart settings for the session, one object for every tab', () => {
    const wb = createWorkbench(services(), log)
    expect(wb.chartSettings.value).toBeNull()
    const settings = { chartType: 'line' }
    wb.chartSettings.value = settings
    wb.addTab()
    expect(wb.chartSettings.value).toBe(settings)
  })

  it('keeps the chosen result view', async () => {
    const wb = createWorkbench(services(), log)
    wb.resultView.value = 'chart'
    await flushPromises()
    expect(createWorkbench(services(), log).resultView.value).toBe('chart')
  })
})
