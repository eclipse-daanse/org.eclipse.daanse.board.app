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
import { BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { Container } from 'inversify'

export interface ISqlXmlaStoreConfiguration {
  connection: string
  sql: string
  pollingInterval?: number
}

export class SqlXmlaStore extends BaseDatasource {
  private connection: any
  private sql: string
  // private computedUrl: ComputedVariable;

  constructor(
    configuration: ISqlXmlaStoreConfiguration,
    private container: Container,
  ) {
    super(configuration, container)

    this.connection = configuration.connection
    this.sql = configuration.sql
  }

  async getData(type: string): Promise<any> {
    let response = null
    const connectionRepository = this.container.get(
      identifier,
    ) as ConnectionRepository
    if (!connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    try {
      const connection = connectionRepository.getConnection(
        this.connection,
      ) as any
      const mdxResponse = await connection.fetch({
        data: {
          mdx: this.sql,
        },
      })
      //   const req = await connection.fetch({ url: this.resourceUrl.value });
      //   const data = await req.json();

      const rowset = mdxResponse.Body?.DiscoverResponse?.return?.[0]?.root?.row
      // console.log(rowset);
      // console.log(mdxResponse);
      if (!rowset) return null

      let response = null as any

      if (type === 'DataTable') {
        response = this.parseToDataTable(rowset)
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
    // Not implemented
  }

  parseToDataTable(data: any): any {
    if (!Array.isArray(data)) return { items: [], headers: [], rows: [] }

    const headers: string[] = ['index']
    const rows: any[] = []

    const items = data.map((item: any, index: number) => {
      if (typeof item !== 'object') return {}

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

  static validateConfiguration(configuration: ISqlXmlaStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }

    return true
  }
}
