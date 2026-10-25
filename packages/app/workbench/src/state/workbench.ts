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
 * Everything the workbench holds, in one place every pane reads: which
 * server, catalog and cube it is on, the query tabs and what running each
 * one answered, the history of runs and the request log.
 *
 * It owns no protocol of its own. A connection is an XmlaConnection from
 * the connection repository, a run is that connection's Execute, the cube's
 * metadata for the tree comes from an XmlaStore built by the store factory -
 * the bundles a board uses, used here directly.
 */

import { computed, reactive, ref, shallowRef, watch, type InjectionKey, type Ref, type ShallowRef } from 'vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

type ServiceRegistry = ActivationContext['services']
type ModuleLogger = ActivationContext['log']
import { CONNECTION_REPOSITORY, type ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  XMLA_TRAFFIC,
  XmlaConnection,
  type XMLAApi,
  type XmlaExchange,
  type XmlaTraffic,
} from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import {
  XMLA_STORE_FACTORY,
  isTabularStatement,
  parseCellset,
  tabularRows,
  columnsOf,
  type Cellset,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import {
  PRESETS,
  connectionConfig,
  loadConnections,
  newConnectionId,
  storeConnections,
  type SavedConnection,
} from './connections'
import { clearHistory, loadHistory, recordHistory, type HistoryEntry } from './history'
import { readStored, writeStored } from './storage'
import { sharedFromHash, type SharedQuery } from './share'
import { emptyMetadata, loadCubeMetadata, type CubeMetadata } from './metadata'

export type { SavedConnection, HistoryEntry, CubeMetadata }

/** What running a tab answered, or is still waiting for. */
export interface RunResult {
  status: 'running' | 'done' | 'error' | 'aborted'
  statement: string
  catalog: string
  cube: string
  startedAt: number
  durationMs?: number
  /** A cellset, rows from a tabular statement, or nothing - an UPDATE CUBE, a CREATE. */
  kind?: 'cellset' | 'rows' | 'empty'
  cellset?: Cellset
  rows?: Record<string, unknown>[]
  columns?: string[]
  /** The answer as it came, for the raw view. */
  response?: unknown
  error?: string
}

export type ResultViewKind = 'pivot' | 'grid' | 'chart' | 'list' | 'raw'

export interface QueryTab {
  id: string
  title: string
  /** The document the language server knows this tab by. */
  uri: string
  text: string
  result: RunResult | null
}

export interface Notice {
  kind: 'info' | 'error'
  text: string
  /** Arguments of the text, which is a translation key. */
  values?: Record<string, unknown>
}

/** The LCIDs offered; LocaleIdentifier goes with every Discover and Execute. */
export const LOCALES = [
  { lcid: 1033, tag: 'en-US' },
  { lcid: 1031, tag: 'de-DE' },
  { lcid: 1036, tag: 'fr-FR' },
  { lcid: 3082, tag: 'es-ES' },
  { lcid: 1049, tag: 'ru-RU' },
  { lcid: 1041, tag: 'ja-JP' },
]

const LOG_LIMIT = 300

export function starterQuery(cube: string): string {
  const name = cube ? `[${cube.replace(/]/g, ']]')}]` : '[Cube]'
  return `SELECT\n  {} ON COLUMNS,\n  {} ON ROWS\nFROM ${name}\n`
}

export function createWorkbench(services: ServiceRegistry, log: ModuleLogger) {
  const connectionRepository = services.getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
  const traffic = services.getRequired<XmlaTraffic>(XMLA_TRAFFIC)
  const storeFactory = services.get(XMLA_STORE_FACTORY) as unknown as ((config: Record<string, unknown>) => any) | undefined

  /* ---- connections ------------------------------------------------- */

  const saved = ref<SavedConnection[]>(loadConnections())
  const connections = computed(() => [...saved.value, ...PRESETS.filter(p => !saved.value.some(s => s.uid === p.uid))])
  const activeId = ref<string | null>(readStored<string | null>('active', null))
  const active = computed(() => connections.value.find(c => c.uid === activeId.value) ?? null)

  const catalogs = shallowRef<any[]>([])
  const cubes = shallowRef<any[]>([])
  const catalog = ref('')
  const cube = ref('')
  const lcid = ref<number>(readStored('lcid', 1033))
  const connecting = ref(false)
  const connectionError = ref<string | null>(null)
  /** Servers whose last connect failed; the topbar marks them. */
  const failing = ref<string[]>([])
  /** Bumped whenever the server, catalog or cube change; panes reload on it. */
  const generation = ref(0)

  const notice = ref<Notice | null>(null)
  let noticeTimer: ReturnType<typeof setTimeout> | undefined
  function notify(text: string, kind: Notice['kind'] = 'info', values?: Record<string, unknown>) {
    notice.value = { kind, text, values }
    if (noticeTimer) clearTimeout(noticeTimer)
    noticeTimer = setTimeout(() => (notice.value = null), 5000)
  }

  /** The live connection for the active server, registered on first use. */
  function connection(): XmlaConnection | null {
    const current = active.value
    if (!current) return null
    try {
      return connectionRepository.getConnection(current.uid) as unknown as XmlaConnection
    } catch {
      connectionRepository.registerConnection(current.uid, 'xmla', connectionConfig(current) as any)
      return connectionRepository.getConnection(current.uid) as unknown as XmlaConnection
    }
  }

  async function api(): Promise<XMLAApi> {
    const live = connection()
    if (!live) throw new Error('no connection')
    return live.getApi()
  }

  /** Discover with the LCID the topbar says. */
  async function discover(requestType: string, restrictions: Record<string, unknown> = {}): Promise<any[]> {
    const client = await api()
    return client.discover(requestType, restrictions as any, { LocaleIdentifier: String(lcid.value), ...(catalog.value ? { Catalog: catalog.value } : {}) })
  }

  function persistConnection(next: SavedConnection) {
    const others = saved.value.filter(c => c.uid !== next.uid)
    saved.value = next.preset ? others : [...others, next]
    storeConnections(saved.value)
  }

  /* The live object follows the saved one: a new catalog is a new init. */
  function register(current: SavedConnection) {
    try {
      connectionRepository.removeConnection(current.uid)
    } catch {
      // It was not there yet.
    }
    connectionRepository.registerConnection(current.uid, 'xmla', connectionConfig(current) as any)
  }

  async function open(uid: string, prefer: { catalog?: string; cube?: string } = {}) {
    const found = connections.value.find(c => c.uid === uid)
    if (!found) return
    const target = { ...found, catalog: prefer.catalog ?? found.catalog, cube: prefer.cube ?? found.cube }
    activeId.value = uid
    writeStored('active', uid)
    connecting.value = true
    connectionError.value = null
    catalogs.value = []
    cubes.value = []
    try {
      /*
       * XmlaConnection will not be built without a catalog. Registered
       * with none - a server whose catalogue the form could not read - it
       * failed as "Invalid XmlaConnection configuration", which hid the
       * reason: the server did not answer. Asked first, the server says so.
       */
      if (!target.catalog) {
        target.catalog = await firstCatalog(target)
        persistConnection({ ...found, catalog: target.catalog })
      }
      register(target)
      const list = await discover('DBSCHEMA_CATALOGS')
      catalogs.value = list
      const names = list.map(row => String(row.CATALOG_NAME))
      catalog.value = names.includes(target.catalog) ? target.catalog : (names[0] ?? '')
      await useCatalog(catalog.value, target.cube)
      failing.value = failing.value.filter(id => id !== uid)
    } catch (error) {
      connectionError.value = describe(error)
      if (!failing.value.includes(uid)) failing.value = [...failing.value, uid]
      if (error instanceof NoCatalogs) notify('Notice.noCatalogs', 'error', { url: target.url })
      else notify('Notice.connectFailed', 'error', { error: connectionError.value })
      log.warn('connect failed', error)
    } finally {
      connecting.value = false
    }
  }

  async function useCatalog(name: string, preferredCube?: string) {
    const current = active.value
    if (!current) return
    catalog.value = name
    if (current.catalog !== name) {
      const next = { ...current, catalog: name }
      persistConnection(next)
      register(next)
    }
    const list = name ? await discover('MDSCHEMA_CUBES', { CATALOG_NAME: name }) : []
    cubes.value = list
    const names = list.map(row => String(row.CUBE_NAME))
    const pick = preferredCube && names.includes(preferredCube) ? preferredCube : (names[0] ?? '')
    await useCube(pick)
  }

  async function useCube(name: string) {
    cube.value = name
    const current = active.value
    if (current && current.cube !== name) persistConnection({ ...current, cube: name })
    generation.value++
    await loadMetadata()
  }

  /** The first catalog the server lists - asked without a session, as the connection form does. */
  async function firstCatalog(target: SavedConnection): Promise<string> {
    const list = await XmlaConnection.getCatalogs(target.url, { type: target.security, user: target.user, password: target.password })
    const name = String(list[0]?.CATALOG_NAME ?? '')
    if (!name) throw new NoCatalogs(target.url)
    return name
  }

  /**
   * A server added in the dialog is kept only once it has answered: one
   * that never did is not a server to list as if it were fine. What it
   * said goes back to the dialog, which stays open to correct the URL.
   * A server from a link is kept either way (`keep`) - the link is gone
   * from the address bar, so dropping it would lose where the query ran -
   * and is listed as failing until it answers.
   */
  async function addConnection(entry: Omit<SavedConnection, 'uid'> & { uid?: string }, options: { keep?: boolean } = {}) {
    const next = { ...entry, uid: entry.uid ?? newConnectionId(), preset: false } as SavedConnection
    const known = saved.value.some(c => c.uid === next.uid)
    if (!known && !options.keep) {
      // Throws with the server's own reason; nothing is saved then.
      const first = await firstCatalog(next)
      if (!next.catalog) next.catalog = first
    }
    persistConnection(next)
    return open(next.uid)
  }

  function removeConnection(uid: string) {
    failing.value = failing.value.filter(id => id !== uid)
    saved.value = saved.value.filter(c => c.uid !== uid)
    storeConnections(saved.value)
    try {
      connectionRepository.removeConnection(uid)
    } catch {
      // Never opened.
    }
    if (activeId.value === uid) {
      activeId.value = null
      writeStored('active', null)
      catalogs.value = []
      cubes.value = []
      catalog.value = ''
      cube.value = ''
      connectionError.value = null
      generation.value++
      /*
       * What came from that server goes with it: the cube's names the
       * inspector and completion resolve against, and the answers on the
       * tabs. The editors re-parse on the generation (App.vue).
       */
      void loadMetadata()
      for (const tab of tabs.value) {
        abort(tab)
        tab.result = null
      }
    }
  }

  watch(lcid, value => writeStored('lcid', value))

  /* ---- the cube's metadata ----------------------------------------- */

  /** Plain rows for completion, search and the inspector. */
  const metadata = shallowRef<CubeMetadata>(emptyMetadata())
  /** The store the cube tree and the pivot designer work on. */
  const store = shallowRef<any>(null)
  /** What store.getMetadata() answered - the MetadataTree's input. */
  const metadataStore = shallowRef<any>(null)
  const metadataLoading = ref(false)

  async function loadMetadata() {
    const at = generation.value
    store.value?.destroy?.()
    store.value = null
    metadataStore.value = null
    metadata.value = emptyMetadata()
    const current = active.value
    if (!current || !cube.value) return
    metadataLoading.value = true
    try {
      const rows = await loadCubeMetadata(discover, catalog.value, cube.value)
      if (at !== generation.value) return
      metadata.value = rows
      if (storeFactory) {
        const built = storeFactory({ connection: current.uid, cube: cube.value, _isTemporaryPreview: true })
        await built?.initPromise
        if (at !== generation.value) return
        store.value = built
        const loaded = await built?.getMetadata()
        if (at !== generation.value) return
        metadataStore.value = loaded
      }
    } catch (error) {
      notify('Notice.metadataFailed', 'error', { error: describe(error) })
      log.warn('metadata failed', error)
    } finally {
      if (at === generation.value) metadataLoading.value = false
    }
  }

  /** Members of a level or under a member, asked for when a tree or the completion needs them. */
  async function membersOf(restrictions: Record<string, unknown>): Promise<any[]> {
    const rows = await discover('MDSCHEMA_MEMBERS', {
      CATALOG_NAME: catalog.value,
      CUBE_NAME: cube.value,
      ...Object.fromEntries(Object.entries(restrictions).map(([key, value]) => [key, String(value)])),
    })
    metadata.value = { ...metadata.value, members: mergeMembers(metadata.value.members, rows) }
    return rows
  }

  /* ---- query tabs -------------------------------------------------- */

  let tabCounter = 0
  const tabs = ref<QueryTab[]>([])
  const activeTabId = ref('')
  const activeTab = computed(() => tabs.value.find(t => t.id === activeTabId.value) ?? tabs.value[0] ?? null)

  function addTab(text?: string, title?: string): QueryTab {
    tabCounter += 1
    const tab = reactive<QueryTab>({
      id: `tab-${tabCounter}`,
      title: title ?? `#${tabCounter}`,
      uri: `inmemory://workbench/query-${tabCounter}.mdxq`,
      text: text ?? starterQuery(cube.value),
      result: null,
    }) as QueryTab
    tabs.value = [...tabs.value, tab]
    activeTabId.value = tab.id
    return tab
  }

  function closeTab(id: string) {
    const index = tabs.value.findIndex(t => t.id === id)
    if (index < 0 || tabs.value.length === 1) return
    abort(tabs.value[index])
    tabs.value = tabs.value.filter(t => t.id !== id)
    if (activeTabId.value === id) activeTabId.value = tabs.value[Math.max(0, index - 1)].id
  }

  /* A shared link brings its query - and, below, the cube it ran on. */
  const shared = sharedFromHash(window.location.hash)
  if (shared) window.history.replaceState(null, '', window.location.pathname + window.location.search)
  addTab(shared?.text)

  /* ---- running ----------------------------------------------------- */

  /*
   * How an answer is shown - pivot, grid, chart, list, as it came. Kept
   * here, not in the results view, which is unmounted whenever another
   * output tab is up and came back on the pivot every time.
   */
  const resultView = ref<ResultViewKind>(readStored<ResultViewKind>('resultView', 'pivot'))
  watch(resultView, value => writeStored('resultView', value))

  /*
   * The chart widget's settings - type, colours, series - for the session,
   * for the same reason: the chart view is rebuilt every time it comes up.
   * One object for every tab, so a chart set up once draws the next answer
   * the same way. Held as it is, an EObject: never made reactive.
   */
  const chartSettings = shallowRef<any>(null)

  const controllers = new Map<string, AbortController>()
  const history = ref<HistoryEntry[]>(loadHistory())

  function abort(tab: QueryTab | null) {
    if (!tab) return
    controllers.get(tab.id)?.abort(new DOMException('aborted', 'AbortError'))
  }

  async function run(tab: QueryTab | null = activeTab.value, statement?: string) {
    if (!tab) return
    const text = (statement ?? tab.text).trim()
    if (!text) return
    abort(tab)
    const controller = new AbortController()
    controllers.set(tab.id, controller)
    const result = reactive<RunResult>({
      status: 'running',
      statement: text,
      catalog: catalog.value,
      cube: cube.value,
      startedAt: Date.now(),
    }) as RunResult
    tab.result = result
    try {
      const client = await api()
      const tabular = isTabularStatement(text)
      const response = await client.getMDX(text, catalog.value || undefined, tabular ? 'Tabular' : 'Multidimensional', {
        signal: controller.signal,
        properties: { LocaleIdentifier: lcid.value },
      })
      const fault = faultOf(response)
      if (fault) throw new Error(fault)
      result.response = response
      if (tabular) {
        result.rows = tabularRows(response)
        result.columns = columnsOf(result.rows)
        result.kind = 'rows'
      } else {
        const cellset = parseCellset(response)
        result.cellset = cellset ?? undefined
        result.kind = cellset && cellset.axes.length > 0 ? 'cellset' : 'empty'
      }
      result.status = 'done'
    } catch (error) {
      result.status = controller.signal.aborted ? 'aborted' : 'error'
      result.error = controller.signal.aborted ? undefined : describe(error)
    } finally {
      result.durationMs = Date.now() - result.startedAt
      if (controllers.get(tab.id) === controller) controllers.delete(tab.id)
      history.value = recordHistory(history.value, {
        mdx: text,
        time: result.startedAt,
        connection: active.value?.name,
        catalog: result.catalog,
        cube: result.cube,
        durationMs: result.durationMs,
        outcome: result.status === 'done' ? 'ok' : result.status === 'aborted' ? 'aborted' : 'error',
        size: result.kind === 'rows' ? result.rows?.length : result.cellset ? Object.keys(result.cellset.cells).length : undefined,
        error: result.error,
      })
    }
    return result
  }

  /** A statement run beside the tab - a writeback - after which the tab runs again. */
  async function execute(statement: string) {
    const client = await api()
    const response = await client.getMDX(statement, catalog.value || undefined, 'Multidimensional', {
      properties: { LocaleIdentifier: lcid.value },
    })
    const fault = faultOf(response)
    if (fault) throw new Error(fault)
    return response
  }

  /* ---- the request log --------------------------------------------- */

  const exchanges = shallowRef<XmlaExchange[]>([])
  const logPaused = ref(false)
  const stopTraffic = traffic.subscribe((exchange: XmlaExchange) => {
    if (logPaused.value) return
    const list = exchanges.value.filter(e => e.id !== exchange.id)
    exchanges.value = [{ ...exchange }, ...list].slice(0, LOG_LIMIT)
  })

  /* ---- start ------------------------------------------------------- */

  /*
   * A link names its server by URL: a known connection to it is used, else
   * one is added for it - without credentials, which a link never carries.
   */
  function openShared(place: SharedQuery & { url: string }) {
    const prefer = { catalog: place.catalog, cube: place.cube }
    const known =
      connections.value.find(c => c.url === place.url && (!place.catalog || c.catalog === place.catalog)) ??
      connections.value.find(c => c.url === place.url)
    if (known) return open(known.uid, prefer)
    return addConnection(
      {
        name: linkedServerName(place.url),
        url: place.url,
        catalog: place.catalog ?? '',
        cube: place.cube ?? '',
        security: 'None',
        fromLink: true,
      },
      { keep: true },
    )
  }

  if (shared?.url) void openShared(shared as SharedQuery & { url: string })
  else if (activeId.value && connections.value.some(c => c.uid === activeId.value)) void open(activeId.value)

  return {
    connections,
    active,
    activeId,
    catalogs,
    cubes,
    catalog,
    cube,
    lcid,
    connecting,
    connectionError,
    failing,
    resultView,
    chartSettings,
    generation,
    notice,
    notify,
    connection,
    api,
    discover,
    open,
    useCatalog,
    useCube,
    addConnection,
    removeConnection,
    metadata,
    metadataStore,
    metadataLoading,
    store,
    loadMetadata,
    membersOf,
    tabs,
    activeTabId,
    activeTab,
    addTab,
    closeTab,
    run,
    abort,
    execute,
    history,
    clearHistory: () => (history.value = clearHistory()),
    exchanges,
    logPaused,
    clearLog: () => (exchanges.value = []),
    dispose() {
      stopTraffic()
      for (const controller of controllers.values()) controller.abort()
      store.value?.destroy?.()
    },
  }
}

export type Workbench = ReturnType<typeof createWorkbench>

export const WORKBENCH: InjectionKey<Workbench> = Symbol('mdx workbench')

/** A server that answered with no catalog at all - nothing to run a query against. */
export class NoCatalogs extends Error {
  constructor(readonly url: string) {
    super(`${url} lists no catalog`)
  }
}

/*
 * What a server from a link is called: its host and path, so two endpoints
 * on one host stay apart. Shown with a mark saying where it came from
 * (Topbar), which keeps it from reading like one of the presets.
 */
export function linkedServerName(url: string): string {
  try {
    const parsed = new URL(url)
    const path = parsed.pathname.replace(/\/+$/, '')
    return `${parsed.host}${path}`
  } catch {
    return url
  }
}

function describe(error: unknown): string {
  if (error instanceof Error) return error.message
  return String(error)
}

/** A SOAP fault the client handed back as an answer. */
function faultOf(response: any): string | null {
  const fault = response?.Body?.Fault
  if (!fault) return null
  const text = (value: any) => (typeof value === 'string' ? value : value?.Description ?? value?.__text ?? null)
  return text(fault.faultstring) ?? text(fault.detail?.Error?.__attrs?.Description) ?? JSON.stringify(fault)
}

function mergeMembers(known: any[], incoming: any[]): any[] {
  const byName = new Map(known.map(m => [m.MEMBER_UNIQUE_NAME, m]))
  for (const member of incoming) byName.set(member.MEMBER_UNIQUE_NAME, member)
  return [...byName.values()]
}

export type { Ref, ShallowRef }
