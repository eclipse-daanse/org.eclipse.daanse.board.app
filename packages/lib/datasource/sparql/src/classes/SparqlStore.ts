/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { Container, inject, injectable } from 'inversify'
import { QUERY } from '../interfaces/Constances'
import {
  identifier,
  type IConnection,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import {
  ISparqlStoreConfiguration,
  SparqlResponse,
} from '../interfaces/ISparqlStoreConfiguration'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

@injectable()
export default class SparqlStore extends BaseDatasource {
  private connection: any
  private query: string = ''

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: ISparqlStoreConfiguration) {
    super.init(configuration)

    this.connection = configuration.connection
    this.query = configuration.query
  }

  public static TYPE = 'sparql'

  datasourceId: string | null = null

  data: SparqlResponse | undefined

  callEvent(event: string, params: any) {
    if (event == QUERY) {
      this.query = params
    }
    this.notify()
  }
  getOriginalData(): any {
    throw new Error('not implemented')
  }

  destroy(): void {}

  static validateConfiguration(configuration: ISparqlStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }
    return true
  }

  async getData(type: string): Promise<any> {
    try {
      if (!this.connectionRepository) {
        throw new Error('ConnectionRepository is not provided to Store Classes')
      }
      const connection = this.connectionRepository.getConnection(
        this.connection,
      ) as IConnection

      let encodedValue = 'query=' + encodeURIComponent(this.query)

      const newData = await connection.fetch(
        { url: '' },
        {
          method: 'POST',
          body: encodedValue,
          headers: {
            'User-Agent': 'org.eclipse.daanse.datafinder.sparql/1.0',
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const parsed = await newData.json()
      this.data = parsed
    } catch (e) {
      this.data = undefined
    }
    if (type == 'DataTable') {
      if (this.data) {
        const headers = this.data.head.vars

        const items = this.data.results.bindings.map(binding => {
          const item: Record<string, any> = {}
          for (const key of headers) {
            item[key] = binding[key]?.value ?? null
          }
          return item
        })

        const rows = items.map(item => headers.map(key => item[key]))

        return { headers, items, rows }
      } else {
      }
      return { heders: [], items: [], rows: [] }
    }
    if (type == 'string') {
      return JSON.stringify(this.data)
    }
    return this.data
  }
}
