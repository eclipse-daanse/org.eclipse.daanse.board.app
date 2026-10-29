/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import { XmlaClient } from '@eclipse-daanse/xmla-client'
import type { Credentials, Transport } from '@eclipse-daanse/xmla-client'
import { DynamicModelRegistry } from '@eclipse-daanse/xmla-dynamic'
import { RowsetCatalog } from '@eclipse-daanse/xmla-model'
import { rowToRecord } from '@eclipse-daanse/xmla-workbench-adapter'
import type { EClass } from '@emfts/core'

import { readableFault } from '../client/fault'
import { toLegacyEnvelope, toLegacyRecord } from '../client/legacyEnvelope'
import { propertyList, statement, xmlaModels } from '../client/models'
import { AbortableFetchTransport, bounded } from '../client/transport'

/** How long a request may take when the connection does not say. */
export const DEFAULT_TIMEOUT_SECONDS = 60

export interface XMLAApiOptions {
  url: string
  credentials?: Credentials
  /** The catalog an Execute runs against when the caller names none. */
  catalog?: string
  transport?: Transport
  /** How long one request may take; 0 waits for as long as the server does. */
  timeoutSeconds?: number
}

export interface RequestOptions {
  /** Gives up on the request; the promise rejects with the signal's reason. */
  signal?: AbortSignal
  /** Further Execute properties - a writeback statement needs a few. */
  properties?: Record<string, unknown>
}

interface ExecuteInFlight {
  xml: Promise<string>
  controller: AbortController
  /** Callers still waiting; the request is aborted when the last one leaves. */
  waiting: number
}

type Restrictions = Record<string, string | number | boolean | undefined>

/*
 * Row classes learned from a response's inline schema. Building one costs
 * up to a few hundred milliseconds, and a schema describes the same rows
 * on every connection, so they are learned once per page.
 */
const registry = new DynamicModelRegistry('org.eclipse.daanse.board.app')
const rowClasses = new Map<string, EClass>()

/*
 * Restrictions or properties as they go on the wire: without the empty
 * ones, which are not sent, and in one order. Two callers asking the same
 * thing in other words - CUBE_NAME before CATALOG_NAME, or an empty
 * restriction beside the others - send the same Discover, and share it.
 */
function sentAs(values: Restrictions): [string, string][] {
  return Object.entries(values)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([name, value]): [string, string] => [name, String(value)])
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
}

/** A fault saying the session the request named is gone. */
export function isLostSession(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error)
  return /session/i.test(message) && /(does not exist|not found|expired|invalid|unknown)/i.test(message)
}

class XMLAApi {
  public url: string
  public catalog: string | undefined

  private client: XmlaClient
  private readonly options: XMLAApiOptions
  private readonly transport: Transport
  private readonly timeoutSeconds: number
  private readonly rowsets = new RowsetCatalog(xmlaModels())

  /*
   * Metadata does not change within a session, and the same rowset is
   * asked for by the store, the metadata tree, the filters and every
   * widget on the cube - so a Discover is sent once and shared.
   */
  private readonly discoverCache = new Map<string, Promise<any[]>>()
  /*
   * An Execute is not cached - the data behind it changes - but identical
   * statements in flight at the same time travel once: every widget on a
   * datasource refetches on the same notify.
   */
  private readonly executesInFlight = new Map<string, ExecuteInFlight>()

  constructor(options: XMLAApiOptions) {
    this.url = options.url
    this.catalog = options.catalog || undefined
    this.options = options
    this.transport = options.transport ?? new AbortableFetchTransport()
    this.timeoutSeconds = options.timeoutSeconds ?? DEFAULT_TIMEOUT_SECONDS
    this.client = this.clientFor(null)
  }

  /**
   * A client whose requests give up on the signal or the timeout. One per
   * cancellable call, since the library takes no signal per call; it is
   * built from the shared models, which is what makes that cheap.
   */
  private clientFor(signal: AbortSignal | null, sessionId?: string | null): XmlaClient {
    return new XmlaClient({
      url: this.options.url,
      transport: bounded(this.transport, this.timeoutSeconds, signal ?? undefined),
      models: xmlaModels(),
      credentials: this.options.credentials ?? { kind: 'none' },
      sessionId: sessionId ?? null,
    })
  }

  get sessionId(): string {
    return this.client.sessionId ?? ''
  }

  public async startSession(): Promise<void> {
    try {
      this.client = await this.client.beginSession()
    } catch (error) {
      // A server without sessions still answers every request.
      console.warn('XMLA: the server opened no session, continuing without', error)
    }
    this.clearCache()
  }

  public async endSession(): Promise<void> {
    this.client = await this.client.endSession().catch(error => {
      throw readableFault(error)
    })
    this.clearCache()
  }

  public clearCache(): void {
    this.discoverCache.clear()
  }

  /*
   * A server forgets a session after a while - eMondrian answers "Session
   * with id ... does not exist" - and every request on it fails from then
   * on. Such a request opens a new session and is sent once more; requests
   * failing at the same time share the one renewal.
   */
  private renewal: Promise<void> | null = null

  private renewSession(stale: string): Promise<void> {
    if (this.client.sessionId !== stale) return Promise.resolve()
    if (!this.renewal) {
      this.renewal = this.clientFor(null)
        .beginSession()
        .then(client => {
          this.client = client
          this.clearCache()
        })
        .finally(() => {
          this.renewal = null
        })
    }
    return this.renewal
  }

  /** A request, sent once more on a lost session; a fault it ends in reads as text. */
  private withSession<T>(send: () => Promise<T>): Promise<T> {
    return this.renewingSession(send).catch(error => {
      throw readableFault(error)
    })
  }

  private async renewingSession<T>(send: () => Promise<T>): Promise<T> {
    const session = this.client.sessionId
    try {
      return await send()
    } catch (error) {
      if (!session || !isLostSession(error)) throw error
      await this.renewSession(session)
      return send()
    }
  }

  /**
   * One Discover, as plain records with their values as text.
   *
   * The row class is built from the schema the response carries rather than
   * taken from the static model: servers send columns the model does not
   * have (eMondrian: HIERARCHY_VISIBILITY, MEASURE_VISIBILITY, DEPTH ...),
   * and the static class refuses to read them.
   */
  public discover(
    requestType: string,
    restrictions: Restrictions = {},
    properties: Restrictions = {},
  ): Promise<any[]> {
    const key = JSON.stringify([requestType, sentAs(restrictions), sentAs(properties)])
    let rows = this.discoverCache.get(key)
    if (!rows) {
      rows = this.sendDiscover(requestType, restrictions, properties)
      this.discoverCache.set(key, rows)
      rows.catch(() => this.discoverCache.delete(key))
    }
    // A copy of the list, so a caller sorting it does not reorder the cache.
    return rows.then(list => list.slice())
  }

  private async sendDiscover(
    requestType: string,
    restrictions: Restrictions,
    properties: Restrictions,
  ): Promise<any[]> {
    const entries = Object.entries(restrictions)
      .filter(([, value]) => value !== undefined && value !== '')
      .map(([name, value]) => ({ name, value: String(value) }))

    const xml = await this.withSession(() => this.client.discoverRaw(requestType, entries, propertyList(properties)))
    const rowClass = this.rowClassFor(requestType, this.client.schemaOf(xml))
    return this.client
      .readRows(xml, rowClass)
      .rows.map(row => toLegacyRecord(rowToRecord(row)))
  }

  private rowClassFor(requestType: string, schema: string | null): EClass {
    if (schema === null) {
      const known = this.rowsets.forRequestType(requestType)
      if (!known) throw new Error(`no row class for ${requestType}, and the response carried no schema`)
      return known
    }
    const key = `${requestType}:${hash(schema)}`
    let rowClass = rowClasses.get(key)
    if (!rowClass) {
      rowClass = registry.learn(key, schema).rowClass as EClass
      rowClasses.set(key, rowClass)
    }
    return rowClass
  }

  private execute(text: string, properties: Restrictions, signal?: AbortSignal): Promise<string> {
    signal?.throwIfAborted()

    const key = JSON.stringify([text, properties])
    let request = this.executesInFlight.get(key)
    if (!request) {
      const controller = new AbortController()
      // The session is read per attempt: a renewal in between gives the retry the new one.
      const xml = this.withSession(() =>
        this.clientFor(controller.signal, this.client.sessionId).execute(statement(text), propertyList(properties)),
      )
      const entry: ExecuteInFlight = { xml, controller, waiting: 0 }
      this.executesInFlight.set(key, entry)
      const settle = () => {
        if (this.executesInFlight.get(key) === entry) this.executesInFlight.delete(key)
      }
      xml.then(settle, settle)
      request = entry
    }
    return this.follow(key, request, signal)
  }

  /**
   * One caller's view of a shared request. Leaving it rejects that caller
   * only; the request itself is aborted when nobody waits for it any more.
   */
  private follow(key: string, request: ExecuteInFlight, signal?: AbortSignal): Promise<string> {
    request.waiting++
    if (!signal) return request.xml

    return new Promise((resolve, reject) => {
      const leave = () => {
        reject(signal.reason)
        if (--request.waiting > 0) return
        // Nobody joins a request that is being abandoned.
        if (this.executesInFlight.get(key) === request) this.executesInFlight.delete(key)
        request.controller.abort(signal.reason)
      }
      signal.addEventListener('abort', leave, { once: true })
      request.xml
        .then(resolve, reject)
        .finally(() => signal.removeEventListener('abort', leave))
    })
  }

  public async getKpis(catalog: string, cube: string): Promise<{ kpis: any[] }> {
    const kpis = await this.discover(
      'MDSCHEMA_KPIS',
      { CATALOG_NAME: catalog, CUBE_NAME: cube },
      { Catalog: catalog, Cube: cube },
    )
    return { kpis }
  }

  public async getCatalogs(): Promise<{ catalogs: DBSchemaCatalog[] }> {
    return { catalogs: await this.discover('DBSCHEMA_CATALOGS') }
  }

  public async getTables(): Promise<{ tables: any[] }> {
    return { tables: await this.discover('DBSCHEMA_TABLES') }
  }

  public async getColumns(): Promise<{ columns: any[] }> {
    return { columns: await this.discover('DBSCHEMA_COLUMNS') }
  }

  public async getCubes(catalogName: string): Promise<{ cubes: MDSchemaCube[] }> {
    return { cubes: await this.discover('MDSCHEMA_CUBES', { CATALOG_NAME: catalogName }) }
  }

  public getDimensions(catalogName: string, cubeName: string): Promise<MDSchemaDimension[]> {
    return this.discover('MDSCHEMA_DIMENSIONS', { CATALOG_NAME: catalogName, CUBE_NAME: cubeName })
  }

  public getHierarchies(catalogName: string, cubeName: string): Promise<MDSchemaHierarchy[]> {
    return this.discover('MDSCHEMA_HIERARCHIES', { CATALOG_NAME: catalogName, CUBE_NAME: cubeName })
  }

  public getLevels(catalogName: string, cubeName: string): Promise<MDSchemaLevel[]> {
    return this.discover('MDSCHEMA_LEVELS', { CATALOG_NAME: catalogName, CUBE_NAME: cubeName })
  }

  public getHierarchyLevels(
    catalogName: string,
    cubeName: string,
    hierarchyUniqueName: string,
  ): Promise<MDSchemaLevel[]> {
    return this.discover('MDSCHEMA_LEVELS', {
      CATALOG_NAME: catalogName,
      CUBE_NAME: cubeName,
      HIERARCHY_UNIQUE_NAME: hierarchyUniqueName,
    })
  }

  public getMeasureGroups(catalogName: string, cubeName: string): Promise<MDSchemaMeasureGroup[]> {
    return this.discover('MDSCHEMA_MEASUREGROUPS', { CATALOG_NAME: catalogName, CUBE_NAME: cubeName })
  }

  public getMeasures(catalogName: string, cubeName: string): Promise<MDSchemaMeasure[]> {
    return this.discover('MDSCHEMA_MEASURES', { CATALOG_NAME: catalogName, CUBE_NAME: cubeName })
  }

  public getSets(catalogName: string, cubeName: string): Promise<MDSchemaSet[]> {
    return this.discover('MDSCHEMA_SETS', { CATALOG_NAME: catalogName, CUBE_NAME: cubeName })
  }

  public getProperties(catalogName: string, cubeName: string): Promise<MDSchemaProperty[]> {
    return this.discover('MDSCHEMA_PROPERTIES', { CATALOG_NAME: catalogName, CUBE_NAME: cubeName })
  }

  public getMembers(level: MDSchemaLevel): Promise<MDSchemaMember[]> {
    return this.discover('MDSCHEMA_MEMBERS', {
      CATALOG_NAME: level.CATALOG_NAME,
      CUBE_NAME: level.CUBE_NAME,
      DIMENSION_UNIQUE_NAME: level.DIMENSION_UNIQUE_NAME,
      HIERARCHY_UNIQUE_NAME: level.HIERARCHY_UNIQUE_NAME,
      LEVEL_UNIQUE_NAME: level.LEVEL_UNIQUE_NAME,
    })
  }

  public async getMember(level: MDSchemaLevel, MEMBER_UNIQUE_NAME: string): Promise<MDSchemaMember> {
    const members = await this.discover('MDSCHEMA_MEMBERS', {
      CATALOG_NAME: level.CATALOG_NAME,
      CUBE_NAME: level.CUBE_NAME,
      DIMENSION_UNIQUE_NAME: level.DIMENSION_UNIQUE_NAME,
      HIERARCHY_UNIQUE_NAME: level.HIERARCHY_UNIQUE_NAME,
      LEVEL_UNIQUE_NAME: level.LEVEL_UNIQUE_NAME,
      MEMBER_UNIQUE_NAME,
    })
    return members[0]
  }

  /**
   * One page of a level's members: up to amount + 1 tuples from start, the
   * extra one telling the caller that there is more to fetch. In the named
   * catalog, or the client's own.
   */
  public async getLevelMembers(level: MDSchemaLevel, amount: number, start: number, catalog?: string): Promise<any[]> {
    const mdx = `
      select Subset(${level.LEVEL_UNIQUE_NAME}.AllMembers, ${start}, ${amount + 1})
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${cubeRef(level.CUBE_NAME)}
    `
    return this.firstAxisTuples(await this.getMDX(mdx, catalog))
  }

  public async getChildMembers(member: MDSchemaMember, amount: number, start: number): Promise<any[]> {
    const mdx = `
      select Subset({AddCalculatedMembers(${member.MEMBER_UNIQUE_NAME}.Children)}, ${start}, ${amount + 1})
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${cubeRef(member.CUBE_NAME)}
    `
    return this.firstAxisTuples(await this.getMDX(mdx))
  }

  public async getLevelChildMembers(level: MDSchemaLevel): Promise<any[]> {
    const mdx = `
            SELECT {AddCalculatedMembers({${level.HIERARCHY_UNIQUE_NAME}.Levels(0).Members})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${cubeRef(level.CUBE_NAME)} CELL PROPERTIES CELL_ORDINAL
        `
    return this.firstAxisTuples(await this.getMDX(mdx))
  }

  public async getChildren(member: any, cube: string): Promise<any[]> {
    const mdx = `
            SELECT {AddCalculatedMembers({${member.UName}.Children})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${cubeRef(cube)} CELL PROPERTIES CELL_ORDINAL
        `
    return this.firstAxisTuples(await this.getMDX(mdx))
  }

  /** An Execute, answered in the shape the former SOAP client produced. */
  public async getMDX(
    mdx: string,
    catalog?: string,
    format: string = 'Multidimensional',
    options: RequestOptions = {},
  ): Promise<any> {
    const xml = await this.execute(
      mdx,
      { ...stringValues(options.properties), Format: format, Catalog: catalog || this.catalog },
      options.signal,
    )
    return toLegacyEnvelope(xml)
  }

  public getDrillthroughMDX(mdx: string, options: RequestOptions = {}): Promise<any> {
    return this.getMDX(mdx, undefined, 'Tabular', options)
  }

  private firstAxisTuples(response: any): any[] {
    const tuples = response?.Body?.ExecuteResponse?.return?.root?.Axes?.Axis?.[0]?.Tuples?.Tuple
    if (Array.isArray(tuples)) return tuples
    return tuples ? [tuples] : []
  }
}

/**
 * A cube name as MDX reads it. Unbracketed, `Sales Ragged` is the cube
 * `Sales` followed by a syntax error. Callers pass either form.
 */
function cubeRef(name: string): string {
  return name.startsWith('[') ? name : `[${name.replace(/]/g, ']]')}]`
}

/** Execute properties as the property list carries them: text. */
function stringValues(properties: Record<string, unknown> = {}): Restrictions {
  return Object.fromEntries(Object.entries(properties).map(([key, value]) => [key, value == null ? undefined : String(value)]))
}

/** Enough to tell two schemas of one request type apart. */
function hash(text: string): string {
  let value = 0
  for (let i = 0; i < text.length; i++) {
    value = (value * 31 + text.charCodeAt(i)) | 0
  }
  return String(value >>> 0)
}

export { XMLAApi }
