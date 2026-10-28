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

import { getMdxRequest } from '../utils/MdxRequestConstructor'
import { parseMdxRequest, parseRequestToTable } from '../utils/MdxRequestHelper'
import { DrilldownHandler, DrilldownPayload } from './DrilldownHandler'
import { MetadataStore } from './MetadataStorage'
import { BaseDatasource, IBaseConnectionConfiguration, type ConfigurationOf } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { CONNECTION_REPOSITORY,
  identifier,
  ConnectionRepository,} from 'org.eclipse.daanse.board.app.lib.api.connection'
import { type XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import { injectable, inject } from '@eclipse-daanse/tsm'

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
}

export interface SecurityOptions {
  type: 'None' | 'Basic'
  user?: string
  password?: string
}

export interface FilterChangePayload {
  area: 'rows' | 'columns' | 'filters'
  filters: any
  id: string
}

@injectable()
export class XmlaStore extends BaseDatasource {
  private connection: any
  private requestParams: XMLARequestParams = {
    rows: [],
    columns: [],
    measures: [],
    filters: [],
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
      this.requestParams = configuration.requestParams
    }

    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }

    this.initPromiseResolve?.()
  }

  loadMetadata(): Promise<MetadataStore> {
    if (!this.metadataPromise) {
      const loading = this.fetchMetadata()
      this.metadataPromise = loading
      // A failed load is not kept; the next call tries again.
      loading.catch(() => {
        if (this.metadataPromise === loading) this.metadataPromise = null
      })
    }
    return this.metadataPromise
  }

  private async fetchMetadata(): Promise<MetadataStore> {
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as XmlaConnection

    const metadata = new MetadataStore()
    metadata.init(await connection.getApi())
    await metadata.loadMetadata(connection.catalogName, this.cube)
    this.metadata = metadata

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
    this.requestParams = requestParams;
    this.executeCleanup();
    this.mdx = await this.getMdxRequest();
  }

  private executeCleanup() {
    if (this.drilldownHandler) {
      this.drilldownHandler.flushExpands(
        this.requestParams.columns,
        this.requestParams.rows,
      )
      this.drilldownHandler.flushDrilldowns(
        this.requestParams.columns,
        this.requestParams.rows,
      )
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
      if (type === 'PivotTable') await this.loadMetadata()
    } else {
      request = await this.getMdxRequest(requestConfig)
    }

    const mdxResponse = await connection.fetch({
      data: {
        mdx: request,
      },
      // A caller that no longer needs the answer can give up on it.
      signal: requestConfig.signal,
    })

    if (type === 'PivotTable') {
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

  async getMdxRequest(requestConfig: any = {}) {
    const metadata = await this.loadMetadata()
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
      requestConfig,
      properties,
      this.requestParams.filters,
      levels,
    )

    return mdxRequest
  }

  async getMetadata() {
    await this.initPromise
    return this.loadMetadata()
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

    const originalItem = this.requestParams[e.area].find(
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

  async cellUpdate(params: { query: string }) {
    console.log('Executing cellUpdate MDX:', params.query);
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
        data: {
          mdx: params.query,
        },
      })
    } catch (e) {
      console.error('Error executing cellUpdate MDX:', e)
      throw e;
    }
  }

  async beginTransaction() {
    console.log('Beginning transaction');
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
        data: {
          mdx: 'BEGIN TRANSACTION',
        },
      })
    } catch (e) {
      console.error('Error executing BEGIN TRANSACTION:', e)
      throw e;
    }
  }

  async commitTransaction() {
    console.log('Committing transaction');
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
        data: {
          mdx: 'COMMIT TRANSACTION',
        },
      })
    } catch (e) {
      console.error('Error executing COMMIT TRANSACTION:', e)
      throw e;
    }
  }

  async rollbackTransaction() {
    console.log('Rolling back transaction');
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
        data: {
          mdx: 'ROLLBACK TRANSACTION',
        },
      })
    } catch (e) {
      console.error('Error executing ROLLBACK TRANSACTION:', e)
      throw e;
    }
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

    return parseMdxRequest(mdxResponse, {
      rows: this.requestParams.rows,
      columns: this.requestParams.columns,
      measures: this.requestParams.measures,
      properties,
      showRowsProperties: requestConfig.showRowsProperties,
      showColumnsProperties: requestConfig.showColumnsProperties
    })
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
