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
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { inject } from 'inversify'

export interface IXmlaStoreConfiguration extends IBaseConnectionConfiguration {
  connection: string
  requestParams: XMLARequestParams
  useVisualEditor: boolean
  mdx: string
  drilldownState?: any
  pollingInterval?: number
}

interface XMLARequestParams {
  rows: any[]
  columns: any[]
  measures: any[]
  filters: any[]
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

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: IXmlaStoreConfiguration) {
    super.init(configuration)

    this.connection = configuration.connection

    if (this.connection) {
      if (!this.connectionRepository) {
        throw new Error('ConnectionRepository is not provided to Store Classes')
      }
      const connection = this.connectionRepository.getConnection(
        this.connection,
      )

      this.drilldownHandler = new DrilldownHandler(
        connection,
        configuration.drilldownState,
      )
    }

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
  }

  async getOriginalData() {
    throw new Error('Not Implemented')
  }

  async getData(type: string): Promise<any> {
    let request
    let response = null

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
    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as any
    const properties = await connection.getProperties()
    const levels = await connection.getLevels()

    const mdxRequest = await getMdxRequest(
      connection.cubeName,
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
    return true
  }
}
