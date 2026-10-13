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

import { getMdxRequest, type NavigationItem } from '../utils/MdxRequestConstructor'
import { parseMdxRequest, parseRequestToTable } from '../utils/MdxRequestHelper'
import { parseCellset, slicesOf, type Cellset } from '../utils/Cellset'
import { pivotSlice, type PivotSliceParams } from '../utils/PivotSlice'
import { DrilldownHandler, DrilldownPayload } from './DrilldownHandler'
import { MetadataStore } from './MetadataStorage'
import { BaseDatasource, IBaseConnectionConfiguration, type ConfigurationOf } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { CONNECTION_REPOSITORY,
  identifier,
  ConnectionRepository,} from 'org.eclipse.daanse.board.app.lib.api.connection'
import { type XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import { inject, injectable } from '@eclipse-daanse/tsm'

/*
 * Still hand-written: requestParams is a nested object this store reads
 * and writes directly, and the model's XMLARequestParams is an EObject
 * with EList axes. Taking the generated type here means rewiring the
 * store's internals - a separate step. The Ecore beside this now says
 * what the four axes are, so the two no longer disagree.
 */
export interface IXmlaStoreConfiguration extends ConfigurationOf<IBaseConnectionConfiguration> {
  connection: string
  requestParams: XMLARequestParams
  useMdx: boolean
  mdx: string
  cube: string
  drilldownState?: any
  pollingInterval?: number
}

interface XMLARequestParams {
  rows: any[]
  columns: any[]
  measures: any[]
  filters: any[]
  /** Axis 2 and 3: which slice of the result the table shows. */
  pages?: NavigationItem[]
  chapters?: NavigationItem[]
}

export interface SecurityOptions {
  type: 'None' | 'Basic'
  user?: string
  password?: string
}

export interface FilterChangePayload {
  area: 'rows' | 'columns' | 'filters' | 'pages' | 'chapters'
  filters: any
  id: string
}

/** The hierarchies on the pages and chapters of an answer. */
function navigatedHierarchiesOf(cellset: Cellset): string[] {
  return [...new Set(cellset.axes.slice(2).flatMap(a => a.positions.flatMap(p => p.members.map(m => m.hierarchy))))]
}

function navigatedHierarchies(mdxResponse: unknown): string[] {
  const cellset = parseCellset(mdxResponse)
  return cellset && cellset.axes.length > 2 ? navigatedHierarchiesOf(cellset) : []
}

const AXIS_LISTS = ['rows', 'columns', 'measures', 'filters', 'pages', 'chapters'] as const

/*
 * Request params as stored can lack axes - older boards have no pages or
 * chapters - and the generic create form hands over whatever was typed,
 * "{}" as text included. Every list the query is built from is there.
 */
function withAllAxes(params: unknown): XMLARequestParams {
  let value = params
  if (typeof value === 'string') {
    try {
      value = JSON.parse(value)
    } catch {
      value = {}
    }
  }
  const source = (value && typeof value === 'object' ? value : {}) as Record<string, unknown>
  const lists = Object.fromEntries(
    AXIS_LISTS.map(axis => [axis, Array.isArray(source[axis]) ? source[axis] : []]),
  )
  return { ...source, ...lists } as unknown as XMLARequestParams
}

/* eMondrian's fault for a cell property it does not know: a null CellProperty. */
const refusesUpdateable = (error: unknown) =>
  /cellProperty|UPDATEABLE/i.test(error instanceof Error ? error.message : String(error))

// Built through services.construct, which takes only declared classes.
@injectable()
export class XmlaStore extends BaseDatasource {
  private connection: any
  private requestParams: XMLARequestParams = {
    rows: [],
    columns: [],
    measures: [],
    filters: [],
    pages: [],
    chapters: [],
  }
  private useMdx: boolean = false
  private mdx: string = ''
  private drilldownHandler: DrilldownHandler | null = null
  public metadata: MetadataStore = null as unknown as MetadataStore
  private cube: string = ''

  private initPromiseResolve: (() => void) | undefined
  private initPromise: Promise<void> = null as unknown as Promise<void>;

  /* Loaded once per configuration - every query and every widget needs it. */
  private metadataPromise: Promise<MetadataStore> | null = null

  @inject(CONNECTION_REPOSITORY)
  private connectionRepository!: ConnectionRepository

  constructor() {
    super()
  }

  init(configuration: ConfigurationOf<IXmlaStoreConfiguration>) {
    super.init(configuration)

    this.initPromise = new Promise(resolve => {
      this.initPromiseResolve = resolve
    })

    this.metadataPromise = null

    this.connection = configuration.connection
    this.cube = configuration.cube

    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as XmlaConnection

    if (!connection) {
      throw new Error(`Connection ${this.connection} not found`)
    }

    this.drilldownHandler = new DrilldownHandler(
      connection,
      configuration.drilldownState,
    )

    if (configuration.useMdx) {
      this.useMdx = configuration.useMdx
    }

    if (configuration.mdx) {
      this.mdx = configuration.mdx
    }
    if (configuration.requestParams) {
      this.requestParams = withAllAxes(configuration.requestParams)
    }

    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }

    this.initPromiseResolve?.()
  }

  /** One metadata store per configuration, built on the connection's API. */
  private metadataStore(): Promise<MetadataStore> {
    if (!this.metadataPromise) {
      const loading = (async () => {
        const connection = this.connectionRepository.getConnection(this.connection) as XmlaConnection
        const metadata = new MetadataStore()
        metadata.init(await connection.getApi())
        this.metadata = metadata
        return metadata
      })()
      this.metadataPromise = loading
      // A failed start is not kept; the next call tries again.
      loading.catch(() => {
        if (this.metadataPromise === loading) this.metadataPromise = null
      })
    }
    return this.metadataPromise
  }

  private catalogName(): string {
    const connection = this.connectionRepository.getConnection(this.connection) as XmlaConnection
    return connection.catalogName
  }

  /** The hierarchies the query is built from, on every axis and in the filters. */
  private queryHierarchies(): string[] {
    const params = this.requestParams
    const items = [params.rows, params.columns, params.pages, params.chapters, params.filters]
      .flatMap(list => (list ?? []) as any[])
      .filter(item => item?.type !== 'Values')
      .map(item => item?.originalItem?.HIERARCHY_UNIQUE_NAME)
      .filter((name): name is string => typeof name === 'string' && name !== '')
    return [...new Set(items)]
  }

  /** Metadata a query needs - its own hierarchies' levels - not the whole cube's. */
  private async queryMetadata(hierarchies: string[]): Promise<MetadataStore> {
    const metadata = await this.metadataStore()
    await metadata.loadQueryMetadata(this.catalogName(), this.cube, hierarchies)
    return metadata
  }

  /** The repository arrives as a parameter - callers inject it Vue-side. */
  static async fetchCubes(
    connection: string,
    connectionRepository: ConnectionRepository,
  ): Promise<MDSchemaCube[]> {
    if (!connectionRepository) {
      throw new Error('ConnectionRepository is required')
    }

    const conn = connectionRepository.getConnection(connection) as XmlaConnection
    if (!conn) {
      throw new Error(`Connection ${connection} not found`)
    }

    const api = await conn.getApi()
    const { cubes } = await api.getCubes(conn.catalogName)
    return cubes
  }

  public async setRequestParams(requestParams: XMLARequestParams) {
    this.requestParams = withAllAxes(requestParams);
    this.executeCleanup();
    this.mdx = await this.getMdxRequest();
  }

  /** Drilldowns and expansions of hierarchies no longer on their axis are dropped. */
  private executeCleanup() {
    if (this.drilldownHandler) {
      this.drilldownHandler.flushExpands(this.requestParams.columns, this.requestParams.rows)
      this.drilldownHandler.flushDrilldowns(this.requestParams.columns, this.requestParams.rows)
    }
  }

  /*
   * Polling only has to notify: every subscriber refetches through getData.
   * Running the query here as well would send it twice per tick.
   */
  async getOriginalData() {}

  async getData(type: string, requestConfig: any = {}): Promise<any> {
    let request
    let response = null

    // Before the query, not after: an unknown type is not worth a round trip.
    if (type !== 'PivotTable' && type !== 'DataTable') {
      throw new Error('Invalid data type')
    }

    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as any

    if (this.useMdx) {
      request = this.mdx
      // The pivot parser reads the properties even for hand-written MDX.
      if (type === 'PivotTable') await this.queryMetadata([])
    } else {
      request = await this.getMdxRequest(requestConfig)
    }

    const send = (mdx: string) =>
      connection.fetch({
        data: { mdx },
        // A caller that no longer needs the answer can give up on it.
        signal: requestConfig.signal,
      })

    let mdxResponse
    try {
      mdxResponse = await send(request)
    } catch (error) {
      // A server without writeback refuses UPDATEABLE; asked once, it is left out from then on.
      if (this.useMdx || !this.askUpdateable || !refusesUpdateable(error)) throw error
      this.askUpdateable = false
      request = await this.getMdxRequest(requestConfig)
      mdxResponse = await send(request)
    }

    if (type === 'PivotTable') {
      // Pages and chapters of hand-written MDX are known only from the answer.
      await this.queryMetadata(navigatedHierarchies(mdxResponse))
      response = this.parseToPivotTable(mdxResponse, requestConfig)
      if (!response) return null

      response.tableState = {
        rowsExpandedMembers: this.drilldownHandler?.rowsExpandedMembers || [],
        rowsDrilldownMembers: this.drilldownHandler?.rowsDrilldownMembers || [],
        columnsExpandedMembers:
          this.drilldownHandler?.columnsExpandedMembers || [],
        columnsDrilldownMembers:
          this.drilldownHandler?.columnsDrilldownMembers || [],
      }
    } else if (type === 'DataTable') {
      response = this.parseToDataTable(mdxResponse)
    } else {
      throw new Error('Invalid data type')
    }

    return response
  }

  /** Whether the server takes UPDATEABLE among the cell properties; eMondrian does not. */
  private askUpdateable = true

  async getMdxRequest(requestConfig: any = {}) {
    const metadata = await this.queryMetadata(this.queryHierarchies())
    this.executeCleanup();
    const properties = metadata.getProperties()
    const levels = metadata.getLevels()

    const mdxRequest = await getMdxRequest(
      this.cube,
      this.drilldownHandler?.rowsDrilldownMembers || [],
      this.drilldownHandler?.columnsDrilldownMembers || [],
      this.drilldownHandler?.rowsExpandedMembers || [],
      this.drilldownHandler?.columnsExpandedMembers || [],
      this.requestParams.rows,
      this.requestParams.columns,
      this.requestParams.measures,
      { ...requestConfig, updateable: this.askUpdateable },
      properties,
      this.requestParams.filters,
      levels,
      this.requestParams.pages ?? [],
      this.requestParams.chapters ?? [],
    )

    return mdxRequest
  }

  /** Everything the cube explorer shows. */
  async getMetadata() {
    await this.initPromise
    const metadata = await this.metadataStore()
    await metadata.loadMetadata(this.catalogName(), this.cube)
    return metadata
  }

  public getCubeName(): string {
    return this.cube
  }

  expand(e: DrilldownPayload): any {
    this.drilldownHandler?.handleExpand(e)

    return this.drilldownHandler?.getDrilldownState()
  }

  collapse(e: DrilldownPayload): any {
    this.drilldownHandler?.handleCollapse(e)

    return this.drilldownHandler?.getDrilldownState()
  }

  getConnection() {
    const connectionRepository = (this as any).connectionRepository
    return connectionRepository.getConnection(this.connection)
  }

  changeFilters(e: FilterChangePayload) {

    const originalItem = this.requestParams[e.area]?.find(
      (item) => item.id === e.id
    );

    if (originalItem) {
      originalItem.filters = e.filters;
    }
  }

  private generateUUID(): string {
    // Upper case: the Analysis Services properties this feeds are written
    // that way everywhere else, and the server echoes them back verbatim.
    return crypto.randomUUID().toUpperCase();
  }

  /** A statement that changes the cube rather than asks it: writeback and its transaction. */
  private async executeStatement(mdx: string) {
    const connection = this.getConnection()
    try {
      await connection.fetch({
        format: 'Native',
        properties: {
          Timeout: 0,
          VisualMode: 1,
          DbpropMsmdFlattened2: false,
          SafetyOptions: 2,
          Dialect: 'MDX',
          MdxMissingMemberMode: 'Error',
          DbpropMsmdActivityID: this.generateUUID(),
          DbpropMsmdRequestID: this.generateUUID(),
          LocaleIdentifier: 1049,
          DbpropMsmdMDXCompatibility: 1,
        },
        data: { mdx },
      })
    } catch (e) {
      console.error(`Error executing ${mdx}:`, e)
      throw e
    }
  }

  cellUpdate(params: { query: string }) {
    return this.executeStatement(params.query)
  }

  beginTransaction() {
    return this.executeStatement('BEGIN TRANSACTION')
  }

  commitTransaction() {
    return this.executeStatement('COMMIT TRANSACTION')
  }

  rollbackTransaction() {
    return this.executeStatement('ROLLBACK TRANSACTION')
  }

  async callEvent(event: string, params: any) {
    switch (event) {
      case 'expand':
        this.expand(params)
        break
      case 'collapse':
        this.collapse(params)
        break
      case 'filterChange':
        this.changeFilters(params)
        break
      case 'cellUpdate':
        await this.cellUpdate(params)
        break
      case 'beginTransaction':
        await this.beginTransaction()
        break
      case 'commitTransaction':
        await this.commitTransaction()
        break
      case 'rollbackTransaction':
        await this.rollbackTransaction()
        break
      default:
        console.warn('Event is not available for this type of store')
    }

    this.notify()
  }

  parseToPivotTable(mdxResponse: any, requestConfig: any = {}): any {
    const properties = this.metadata.getProperties()
    const params: PivotSliceParams = {
      rows: this.requestParams.rows,
      columns: this.requestParams.columns,
      measures: this.requestParams.measures,
      properties,
      showRowsProperties: requestConfig.showRowsProperties,
      showColumnsProperties: requestConfig.showColumnsProperties
    }

    const cellset = parseCellset(mdxResponse)
    if (!cellset || cellset.axes.length <= 2) {
      return parseMdxRequest(mdxResponse, params)
    }

    /*
     * Pages and chapters: the whole cellset goes along, so the widget can
     * show any slice without asking again. The table for the first slice
     * is ready-made, for a widget that knows nothing of slices.
     */
    const navigated = new Set(navigatedHierarchiesOf(cellset))
    const levels = (this.metadata.getLevels() ?? []).filter(l => navigated.has(l.HIERARCHY_UNIQUE_NAME))
    const dimensionNames = new Set(levels.map(l => l.DIMENSION_UNIQUE_NAME))
    const dimensions = (this.metadata.getDimensions() ?? []).filter(d => dimensionNames.has(d.DIMENSION_UNIQUE_NAME))

    const first = slicesOf(cellset)[0]
    const table = first
      ? pivotSlice(cellset, first, params)
      : { columns: [], rows: [], cells: [], propertiesRows: [], propertiesCols: [] }
    return {
      ...table,
      cellset,
      sliceParams: params,
      axisMetadata: { levels, dimensions },
    }
  }

  parseToDataTable(mdxResponce: any): any {
    return parseRequestToTable(mdxResponce, 0)
  }

  destroy(): void {
    this.stopPolling()
  }

  static validateConfiguration(configuration: IXmlaStoreConfiguration) {
    if (!configuration?.connection) {
      return false
    }
    if (!configuration?.cube) {
      return false
    }
    return true
  }
}
