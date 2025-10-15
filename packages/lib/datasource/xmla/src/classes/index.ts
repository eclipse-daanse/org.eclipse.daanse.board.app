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
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { type XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import { inject } from 'inversify'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

export interface IXmlaStoreConfiguration extends IBaseConnectionConfiguration {
  connection: string
  requestParams: XMLARequestParams
  useVisualEditor: boolean
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

export class XmlaStore extends BaseDatasource {
  private connection: any
  private requestParams: XMLARequestParams = {
    rows: [],
    columns: [],
    measures: [],
    filters: [],
  }
  private useVisualEditor: boolean = false
  private mdx: string = ''
  private drilldownHandler: DrilldownHandler | null = null
  public metadata: MetadataStore = null as unknown as MetadataStore
  private cube: string = ''

  private initPromiseResolve: (() => void) | undefined
  private initPromise: Promise<void> = null as unknown as Promise<void>;

  private metadataPromiseResolve: ((value: MetadataStore) => void) | undefined
  private metadataPromise: Promise<MetadataStore> = null as unknown as Promise<MetadataStore>;

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  constructor() {
    super()
  }

  async init(configuration: IXmlaStoreConfiguration) {
    super.init(configuration)

    this.initPromise = new Promise(resolve => {
      this.initPromiseResolve = resolve
    })

    this.metadataPromise = new Promise(resolve => {
      this.metadataPromiseResolve = resolve
    })

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

    if (configuration.useVisualEditor) {
      this.useVisualEditor = configuration.useVisualEditor
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

  async loadMetadata() {
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as XmlaConnection

    this.metadata = new MetadataStore(await connection.getApi())
    await this.metadata.loadMetadata(connection.catalogName, this.cube)
    this.metadataPromiseResolve?.(this.metadata);

    return this.metadataPromise
  }

  static async fetchCubes(connection: string): Promise<MDSchemaCube[]> {
    const connectionRepository = container.get(identifier) as ConnectionRepository
    if (!connectionRepository) {
      throw new Error('ConnectionRepository is not instanciated')
    }

    const conn = connectionRepository.getConnection(connection) as XmlaConnection
    if (!conn) {
      throw new Error(`Connection ${connection} not found`)
    }

    const api = await conn.getApi()
    const { cubes } = await api.getCubes(conn.catalogName)
    return cubes
  }

  async getOriginalData() {
    throw new Error('Not Implemented')
  }

  async getData(type: string): Promise<any> {
    let request
    let response = null
    await this.initPromise;

    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as any

    if (this.useVisualEditor) {
      request = await this.getMdxRequest()
    } else {
      request = this.mdx
    }

    const mdxResponse = await connection.fetch({
      data: {
        mdx: request,
      },
    })

    if (type === 'PivotTable') {
      response = this.parseToPivotTable(mdxResponse)
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

  async getMdxRequest() {
    await this.loadMetadata()
    const properties = this.metadata.getProperties()
    const levels = this.metadata.getLevels()

    const mdxRequest = await getMdxRequest(
      this.cube,
      this.drilldownHandler?.columnsDrilldownMembers || [],
      this.drilldownHandler?.rowsDrilldownMembers || [],
      this.drilldownHandler?.rowsExpandedMembers || [],
      this.drilldownHandler?.columnsExpandedMembers || [],
      this.requestParams.rows,
      this.requestParams.columns,
      this.requestParams.measures,
      {},
      properties,
      [],
      levels,
    )

    return mdxRequest
  }

  async getMetadata() {
    await this.initPromise
    await this.loadMetadata()
    return this.metadata
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

  callEvent(event: string, params: any) {
    switch (event) {
      case 'expand':
        this.expand(params)
        break
      case 'collapse':
        this.collapse(params)
        break
      default:
        console.warn('Event is not available for this type of store')
    }

    this.notify()
  }

  parseToPivotTable(mdxResponse: any): any {
    return parseMdxRequest(mdxResponse)
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
