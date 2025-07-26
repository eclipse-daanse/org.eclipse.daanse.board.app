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

import { injectable, inject, Container } from 'inversify'
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  type IConnection,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'

export interface IRssStoreConfiguration extends IBaseConnectionConfiguration {
  resourceUrl: string
  connection: string
}

export interface IRssParseResult {
  header: string[]
  rows: any[]
  // mappedRows: IDataTableRow[];
  mappedRows: any[]
}

export class RssStore extends BaseDatasource {
  private connection: any

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: IRssStoreConfiguration) {
    super.init(configuration)

    this.connection = configuration.connection
  }

  async getOriginalData() {
    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    const req = await connection.fetch({} as any)
    return req
  }

  async getData(type: string): Promise<any> {
    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    const req = await connection.fetch({} as any)
    if (type === 'object') {
      return req
    } else if (type === 'string') {
      return JSON.stringify(req)
    } else if (type === 'DataTable') {
      const data = req.items
      return this.parseToDataTable(data)
    } else {
      console.warn('Invalid data type')
      return null
    }
  }

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

  destroy(): void {}

  static validateConfiguration(configuration: IRssStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }

    return true
  }
}
