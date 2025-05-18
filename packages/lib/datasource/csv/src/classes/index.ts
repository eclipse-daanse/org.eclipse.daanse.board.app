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
import { Container } from 'inversify'
import {
  BaseDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  type IConnection,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { ComputedStoreParameter } from 'org.eclipse.daanse.board.app.lib.variables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { ParseOptions } from 'org.eclipse.daanse.board.app.lib.utils.helpers'

export interface ICsvStoreConfiguration  {
  resourceUrl: string
  connection: string
  pollingInterval?: number
  type: string
  name: string
  uid: string
  separators: string[]
}

export interface ICsvParseResult {
  header: string[]
  rows: any[]
  // mappedRows: IDataTableRow[];
  mappedRows: any[]
}

export class CsvStore extends BaseDatasource {
  private connection: any
  private resourceUrl: ComputedStoreParameter
  private parseOptions: ParseOptions

  constructor(
    configuration: ICsvStoreConfiguration,
    public container: Container,
  ) {
    super(configuration, container)
    this.connection = configuration.connection
    this.parseOptions = {
      separators: configuration.separators,
    }

    this.resourceUrl = super.initVariable(configuration.resourceUrl);
    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }
  }

  async getOriginalData(): Promise<any> {
    const connectionRepository = this.container.get(
      identifier,
    ) as ConnectionRepository
    if (!connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    const req = await connection.fetch({ url: this.resourceUrl.value })
    if (!req.ok) return []
    const text = await req.text()

    const data = helpers.csv.parse(text, this.parseOptions);
    return data;
  }

  async getData(type: string): Promise<any> {
    const connectionRepository = this.container.get(
      identifier,
    ) as ConnectionRepository
    if (!connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    const req = await connection.fetch({ url: this.resourceUrl.value })
    if (!req.ok) return null
    const text = await req.text()
    const data: ICsvParseResult = helpers.csv.parse(text, this.parseOptions);
    if (type === 'DataTable') {
      return {
        headers: data.header,
        items: data.mappedRows,
        rows: data.rows,
      };
    } else {
      console.warn('Invalid data type')
      return null
    }
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

  static validateConfiguration(configuration: ICsvStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }

    if (!configuration.resourceUrl) {
      return false
    }

    return true
  }
}
