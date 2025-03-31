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
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
// import type { ComputedString } from "@/plugins/variables/ComputedString";

export interface ICsvStoreConfiguration extends IBaseConnectionConfiguration {
  resourceUrl: string
  connection: string
}

export interface ICsvParseResult {
  header: string[]
  rows: any[]
  // mappedRows: IDataTableRow[];
  mappedRows: any[]
}

export class CsvStore extends BaseDatasource {
  private connection: any
  private resourceUrl: string

  constructor(configuration: ICsvStoreConfiguration) {
    super(configuration)

    this.connection = configuration.connection

    // this.resourceUrl = super.initVariable(configuration.resourceUrl);
    this.resourceUrl = configuration.resourceUrl
    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }
  }

  async getOriginalData() {
    // const connectionRepository = this.connectionRepository;
    // if (!connectionRepository) {
    //   throw new Error('ConnectionRepository is not provided to Store Classes');
    // }
    // const connection = connectionRepository.getConnection(this.connection) as CsvConnection;
    // const req = await connection.fetch({ url: this.resourceUrl.value });
    // if (!req.ok) return [];
    // const text = await req.text();
    // const data = CSV.parse(text);
    // return data;
  }

  async getData(type: string): Promise<any> {
    // const connectionRepository = this.connectionRepository;;
    // if (!connectionRepository) {
    //   throw new Error('ConnectionRepository is not provided to Store Classes');
    // }
    // const connection = connectionRepository.getConnection(this.connection) as CsvConnection;
    // const req = await connection.fetch({ url: this.resourceUrl.value });
    // if (!req.ok) return null as unknown as DataMap[T];
    // const text = await req.text();
    // const data: ICsvParseResult = CSV.parse(text);
    // if (type === "DataTable") {
    //   return {
    //     headers: data.header,
    //     items: data.mappedRows,
    //     rows: data.rows,
    //   } as IDataTable as DataMap[T];
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
