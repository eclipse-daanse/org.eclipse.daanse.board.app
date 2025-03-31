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
import { BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'
// import type { ComputedString } from "@/plugins/variables/ComputedString";

export interface IRestStoreConfiguration {
  resourceUrl: string
  connection: string
  selectedJSONValue?: string
  pollingInterval?: number
}

export class RestStore extends BaseDatasource {
  private connection: any
  //   private resourceUrl: ComputedString;
  private resourceUrl: string
  private selectedJSONValue?: string
  // private computedUrl: ComputedVariable;

  constructor(configuration: IRestStoreConfiguration) {
    super(configuration)

    // this.connection = configuration.connection;

    // // this.resourceUrl = super.initVariable(configuration.resourceUrl);
    this.resourceUrl = configuration.resourceUrl

    this.selectedJSONValue = configuration.selectedJSONValue
    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }
  }

  //   async getData<T extends keyof DataMap>(type: T): Promise<DataMap[T]> {
  async getData(type: string): Promise<any> {
    // let response = null;
    // const connectionRepository = this.connectionRepository;
    // if (!connectionRepository) {
    //   throw new Error('ConnectionRepository is not provided to Store Classes');
    // }
    // try {
    //   const connection = connectionRepository.getConnection(this.connection) as IConnection;
    //   const req = await connection.fetch({ url: this.resourceUrl.value });
    //   const data = await req.json();
    // //   if (this.selectedJSONValue) {
    // //     response = extractDataByPath(data, this.selectedJSONValue);
    // //   }
    //   if (type === 'DataTable') {
    //     response = this.parseToDataTable(response);
    //   } else if (type === 'object') {
    //     // Do nothing
    //   } else if (type === 'string') {
    //     response = JSON.stringify(response);
    //   }
    //   return response;
    // } catch (e: any) {
    //   console.log(e);
    //   console.warn("Invalid resource URL", e.name);
    // }
    // return response as unknown as DataMap[T];
  }

  async getOriginalData() {
    // const connectionRepository = this.connectionRepository;
    // if (!connectionRepository) {
    //   throw new Error('ConnectionRepository is not provided to Store Classes');
    // }
    // try {
    //   const connection = connectionRepository.getConnection(this.connection) as IConnection;
    //   const req = await connection.fetch({ url: this.resourceUrl.value });
    //   const data = await req.json();
    //   return data;
    // } catch (e: any) {
    //   console.warn("Invalid resource URL", e.name)
    // }
  }

  parseToDataTable(data: any): IDataTable {
    // if (!Array.isArray(data)) return { items: [], headers: [], rows: [] };
    // const headers: string[] = ['index'];
    // const rows: any[] = [];
    // const items = data.map((item: any, index: number) => {
    //   if (typeof item !== 'object') return {};
    //   const row: IDataTableRow = {
    //     index
    //   };
    //   for (const key in item) {
    //     if (typeof item[key] === 'object' || Array.isArray(item[key])) continue;
    //     if (!headers.includes(key)) {
    //       headers.push(key);
    //     }
    //     row[key] = item[key];
    //   }
    //   return row;
    // });
    // items.forEach((item: IDataTableRow, index:number) => {
    //   rows[index] = [];
    //   headers.forEach((header: string) => {
    //     rows[index].push(item[header]);
    //   })
    // })
    // return { items, headers, rows };
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
