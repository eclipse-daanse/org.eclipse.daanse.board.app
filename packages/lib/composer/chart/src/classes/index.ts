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

import { Container } from 'inversify';
import { BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { identifier, DatasourceRepository, IDatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource';

export interface IChartComposerConfiguration {
  connectedDatasources: string[];
  composeBy: string;
  usedSets: string[];
  labelColumn: string;
  name: string;
  type: string;
  uid: string;
}

export class ChartComposer extends BaseDatasource {
  destroy(): void {
    console.log("Destroying ChartComposer");
  }

  private connectedDatasources: string[];
  private composeBy: string;
  private usedSets: string[];
  private labelColumn: string;

  constructor(
    configuration: IChartComposerConfiguration,
    private container: Container,
  ) {
    super(configuration, container);

    this.connectedDatasources = configuration.connectedDatasources;

    const updateFn = async () => {
      await this.getData('DataTable');
      this.notify();
    };

    const datasourceRepository = this.container.get(
      identifier,
    ) as DatasourceRepository;

    this.connectedDatasources
      .filter((datasourceId) => datasourceId)
      .forEach(function (ds) {
        const datasource = datasourceRepository.getDatasource(ds);
        datasource.subscribe(updateFn)
      });

    this.composeBy = configuration.composeBy;
    this.usedSets = configuration.usedSets;
    this.labelColumn = configuration.labelColumn;
  }

  async getData(type: string): Promise<any> {
    if (!this.composeBy) return null;

    const datasourceRepository = this.container.get(
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
    } else if (type === "ChartData") {
      const composedData = this.composeArrays(data);
      return this.parseToChartData(composedData);
    } else {
      console.warn("Invalid data type");
      return null;
    }
  }

  async getOriginalData() {
    return [];
  }

  callEvent(event: string, params: any) {
    console.warn(`Event "${event}" is not available for this type of store`, params)
  };

  static async getHeaders(connectedDatasources: string[], datasourceRepository: DatasourceRepository): Promise<string[]> {
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

  private composeArrays(data: any): any {
    const resultingDataTable: any = {
      headers: [],
      rows: [],
      items: [],
    };

    const rowMap = new Map<string, any>();

    data.forEach((table: any) => {
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
    });

    resultingDataTable.items = Array.from(rowMap.values());

    resultingDataTable.headers = data.reduce((acc: any, table: any) => {
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

  private parseToChartData(data: any): any {
    const chartData = {} as any;
    chartData.labels = data.items.map((e: any) => e[this.labelColumn]);
    chartData.datasets = this.usedSets.map((set) => {
      return {
        label: set,
        data: data.items.map((e: any) => --e[set]),
        backgroundColor: 'red',
      }
    });

    return chartData;
  }

  static validateConfiguration(config: IChartComposerConfiguration): boolean {
    if (!config.connectedDatasources || !config.labelColumn || !config.usedSets || !config.composeBy) return false;
    return true;
  }
}
