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

// import { extractDataByPath } from "@/utils/helpers";
import { inject, injectable } from 'inversify'
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  type IConnection,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { ComputedStoreParameter } from 'org.eclipse.daanse.board.app.lib.variables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'

export interface IRestStoreConfiguration extends IBaseConnectionConfiguration {
  resourceUrl: string
  connection: string
  selectedJSONValue?: string
  pollingInterval?: number
}

@injectable()
export class RestStore extends BaseDatasource {
  private connection: any
  private resourceUrl: ComputedStoreParameter | null = null
  private selectedJSONValue?: string

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: IRestStoreConfiguration) {
    super.init(configuration)

    this.connection = configuration.connection

    this.resourceUrl = super.initVariable(configuration.resourceUrl)

    this.selectedJSONValue = configuration.selectedJSONValue
    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }
  }

  //   async getData<T extends keyof DataMap>(type: T): Promise<DataMap[T]> {
  async getData(type: string): Promise<any> {
    let response = null
    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection,
      ) as IConnection
      const req = await connection.fetch({ url: this.resourceUrl?.value || '' })
      const data = await req.json()

      response = data

      // TODO: Restore after creating utils
      if (this.selectedJSONValue) {
        response = helpers.extractDataByPath(data, this.selectedJSONValue)
      }
      if (type === 'DataTable') {
        response = this.parseToDataTable(response)
      } else if (type === 'object') {
        // Do nothing
      } else if (type === 'string') {
        response = JSON.stringify(response)
      }
      return response
    } catch (e: any) {
      console.log(e)
      console.warn('Invalid resource URL', e.name)
    }
    return response
  }

  async getOriginalData() {
    // const connectionRepository = this.container.get(
    //   identifier,
    // ) as ConnectionRepository
    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection,
      ) as IConnection
      const req = await connection.fetch({ url: this.resourceUrl?.value || '' })
      const data = await req.json()
      return data
    } catch (e: any) {
      console.warn('Invalid resource URL', e.name)
    }
  }

  // TODO: Add proper typing and imports for interfaces
  // parseToDataTable(data: any): IDataTable {
  parseToDataTable(data: any): any {
    if (!Array.isArray(data)) return { items: [], headers: [], rows: [] }
    const headers: string[] = ['index']
    const rows: any[] = []
    const items = data.map((item: any, index: number) => {
      if (typeof item !== 'object') return {}
      // const row: IDataTableRow = {
      const row: any = {
        index,
      }
      for (const key in item) {
        if (typeof item[key] === 'object' || Array.isArray(item[key])) continue
        if (!headers.includes(key)) {
          headers.push(key)
        }
        row[key] = item[key]
      }
      return row
    })
    // items.forEach((item: IDataTableRow, index:number) => {
    items.forEach((item: any, index: number) => {
      rows[index] = []
      headers.forEach((header: string) => {
        rows[index].push(item[header])
      })
    })
    return { items, headers, rows }
  }

  callEvent(event: string, params: any) {
    console.warn(
      `Event "${event}" is not available for this type of store`,
      params,
    )
  }

  destroy(): void {
    this.stopPolling()
  }

  static validateConfiguration(configuration: IRestStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }

    if (!configuration.resourceUrl) {
      return false
    }

    return true
  }
}
