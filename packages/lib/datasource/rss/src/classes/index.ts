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

import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'

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

  constructor(configuration: IRssStoreConfiguration) {
    super(configuration)

    this.connection = configuration.connection
  }

  async getOriginalData() {
    // const connectionRepository = this.connectionRepository;
    // if (!connectionRepository) {
    //   throw new Error('ConnectionRepository is not provided to Store Classes');
    // }
    // const connection = connectionRepository.getConnection(this.connection) as RSSConnection;
    // const req = await connection.fetch({});
    // return req;
  }

  async getData(type: string): Promise<any> {
    // const connectionRepository = this.connectionRepository;;
    // if (!connectionRepository) {
    //   throw new Error('ConnectionRepository is not provided to Store Classes');
    // }
    // const connection = connectionRepository.getConnection(this.connection) as RSSConnection;
    // const req = await connection.fetch({});
    // if (type === "object") {
    //   return req;
    // } else {
    //   console.warn("Invalid data type");
    //   return null as unknown as DataMap[T];
    // }
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
