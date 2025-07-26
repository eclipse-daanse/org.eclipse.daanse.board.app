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

import { injectable, inject } from 'inversify'
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  identifier,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
// import type { ComputedString } from "@/plugins/variables/ComputedString";

export interface IGraphQLStoreConfiguration
  extends IBaseConnectionConfiguration {
  connection: string
  query: string
  variables?: any
}

@injectable()
export class GraphQLStore extends BaseDatasource {
  private connection: any
  private query: string = ''

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: IGraphQLStoreConfiguration) {
    super.init(configuration)

    this.connection = configuration.connection
    this.query = configuration.query
    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }
  }

  get fetcher() {
    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as any
    return connection.fetcher
  }

  async getData(type: string): Promise<any> {
    if (this.query) {
      const request = (await this.fetcher({ query: this.query })) as any
      const result = (await request.next()).value.data
      return result
    } else {
      console.warn('Query is not provided for GraphQLStore')
      return null
    }
  }

  async getOriginalData() {
    throw new Error('Not Implemented')
  }

  parseToDataTable(data: any) {
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

  static validateConfiguration(configuration: IGraphQLStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }

    return true
  }
}
