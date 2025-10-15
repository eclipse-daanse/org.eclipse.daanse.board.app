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

import { BaseDatasource, IBaseConnectionConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { identifier, DatasourceRepository, IDatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { container } from 'org.eclipse.daanse.board.app.lib.core';

export interface IDataTableComposerConfiguration extends IBaseConnectionConfiguration {
  connectedDatasources: string[];
  composeBy: string;
  name: string;
  type: string;
  uid: string;
}

export class DataTableComposer extends BaseDatasource {
  destroy(): void {
    console.log("Destroying DataTableComposer");
  }

  private connectedDatasources: string[] = [];
  private composeBy: string = '';

  // TODO: find a better way to do this
  public static availableTypes = ['rest', "csv", "xmla"];

  init(configuration: IDataTableComposerConfiguration) {
    super.init(configuration)

    this.connectedDatasources = configuration.connectedDatasources;

    const updateFn = async () => {
      await this.getData('DataTable');
      this.notify();
    };

    const datasourceRepository = container.get(
      identifier,
    ) as DatasourceRepository;

    this.connectedDatasources
      .filter((datasourceId) => datasourceId)
      .forEach(function (ds) {
        const datasource = datasourceRepository.getDatasource(ds);
        datasource.subscribe(updateFn)
      });

    this.composeBy = configuration.composeBy;
  }

  async getData(type: string): Promise<any> {
    if (!this.composeBy) return null;

    const datasourceRepository = container.get(
      identifier,
    ) as DatasourceRepository;
    const data = await Promise.all(
      this.connectedDatasources
        .filter((datasourceId) => datasourceId)
        .map(async (datasourceId) => {
          if (!datasourceRepository) {
            throw new Error('DatasourceRepository is not provided to DataSource Classes');
          }
          const datasourceInstance = datasourceRepository.getDatasource(datasourceId);

          return await datasourceInstance.getData('DataTable');
        })
    );

    if (type === "DataTable") {
      return this.composeArrays(data);
    } else {
      console.warn("Invalid data type");
      return;
    }
  }

  async getOriginalData() {
      return [];
  }

  callEvent(event: string, params: any) {
    console.warn(`Event "${event}" is not available for this type of store`, params)
  };

  static async getHeaders(connectedDatasources: string[], datasourceRepository: IDatasourceRepository): Promise<string[]> {
    console.log("Composing headers from", connectedDatasources);
    const data = await Promise.all(
      connectedDatasources
        .filter((datasourceId) => datasourceId)
        .map(async (datasourceId) => {
          if (!datasourceRepository) {
            throw new Error('DatasourceRepository is not provided to DataSource Classes');
          }
          const datasourceInstance = datasourceRepository.getDatasource(datasourceId);

          return await datasourceInstance.getData('DataTable');
        })
    );

    return data.reduce((acc, table: any) => {
      table.headers.forEach((header: string) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, [] as string[]);
  }

  private composeArrays(data: any[]): any {
    const resultingDataTable: any = {
      headers: [],
      rows: [],
      items: [],
      rowProperties: {},
    };

    const rowMap = new Map<string, any>();

    data.forEach((table) => {
      table.items.forEach((row: any) => {
        const key = row[this.composeBy];

        if (!rowMap.has(key)) {
          rowMap.set(key, {});
        }

        rowMap.set(key, {
          ...rowMap.get(key),
          ...row,
        });
      });

      Object.keys(table.rowProperties).forEach((key) => {
        const prop = table.rowProperties[key];
        resultingDataTable.rowProperties[key] = {
          ...resultingDataTable.rowProperties[key],
          ...prop,
        };
      });
    });

    resultingDataTable.items = Array.from(rowMap.values());

    resultingDataTable.headers = data.reduce((acc, table) => {
      table.headers.forEach((header: any) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, [] as string[]);

    const rows = [] as any[];

    resultingDataTable.items.forEach((row: any) => {
      const newRow = resultingDataTable.headers.map((header: any) => {
        return row[header];
      });

      rows.push(newRow);
    });

    resultingDataTable.rows = rows;
    return resultingDataTable
  }

  static validateConfiguration(config: any): boolean {
    if (!config.connectedDatasources) return false;
    return true;
  }
}
