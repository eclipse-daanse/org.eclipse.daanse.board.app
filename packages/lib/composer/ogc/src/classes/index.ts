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
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { identifier, DatasourceRepository, IDatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource';

export interface IOgcFeatureComposerConfiguration extends IBaseConnectionConfiguration {
  connectedDatasources: string[];
  composeBy: string;
  name: string;
  type: string;
  uid: string;
  xField: string;
  yField: string;
  useGeometryFromData?: boolean;
  useGeometryFromProps?: boolean;
  geometryField?: string;
  geometryPropsField?: string;
}

export class OgcFeatureComposer extends BaseDatasource {
  private connectedDatasources: string[] = [];
  private xField: string = '';
  private yField: string = '';
  private geometryType: string = 'Point';
  private composeBy: string = '';
  private useGeometryFromData: boolean = false;
  private useGeometryFromProps: boolean = false;
  private geometryField: string = '';
  private geometryPropsField: string = '';


  init(configuration: IOgcFeatureComposerConfiguration) {
    super.init(configuration);
    this.connectedDatasources = configuration.connectedDatasources;
    this.composeBy = configuration.composeBy;
    this.useGeometryFromProps = configuration.useGeometryFromProps ?? false;
    this.useGeometryFromData = configuration.useGeometryFromData ?? false;

    console.log(configuration);
    if (configuration.geometryPropsField) {
      this.geometryPropsField = configuration.geometryPropsField?.trim() || '';
    } else if (configuration.geometryField) {
      this.geometryField = configuration.geometryField.trim();
    } else {
      this.xField = configuration.xField.trim();
      this.yField = configuration.yField.trim();
      this.geometryType = configuration.geometryType.trim();
    }
  }

  static validateConfiguration(config: IOgcFeatureComposerConfiguration): boolean {
    return Array.isArray(config.connectedDatasources);
  }

  async createFeatureCollection(): Promise<any> {
    const repo = container.get<DatasourceRepository>(identifier);
    const datasourcesData = await Promise.all(
      this.connectedDatasources
        .filter(id => id)
        .map(async (id) => {
          const datasource = repo.getDatasource(id);
          if (!datasource) return null;
          return await datasource.getData('DataTable');
        })
    );

    // Compose OGC FeatureCollection
    const features = [];
    console.log("Datasources data:", datasourcesData);
    if (this.useGeometryFromProps && this.geometryPropsField) {

      for (const data of datasourcesData) {
        if (!data || !Array.isArray(data.items)) continue;

        for (const row of data.items) {
          let geometry = null;
          const caption = row.Caption;
          let property = data.rowProperties?.[caption]?.[this.geometryPropsField];
          if (Array.isArray(property)) property = property[0];

          if (property) {
            try {
              geometry = JSON.parse(property);
            } catch (e) {
              console.warn(`Failed to parse geometry from properties field ${this.geometryPropsField}:`, e);
            }
          }

          features.push({
            type: 'Feature',
            geometry,
            properties: { ...row }
          });
        }
      }
      return {
        type: 'FeatureCollection',
        features
      };
    }

    if (this.useGeometryFromData && this.geometryField) {

      for (const data of datasourcesData) {
        if (!data || !Array.isArray(data.items)) continue;

        for (const row of data.items) {
          let geometry = null;
          if (row[this.geometryField]) {
            geometry = JSON.parse(row[this.geometryField]);
          }

          features.push({
            type: 'Feature',
            geometry,
            properties: { ...row }
          });
        }
      }
      return {
        type: 'FeatureCollection',
        features
      };
    }

    for (const data of datasourcesData) {
      if (!data || !Array.isArray(data.items)) continue;

      for (const row of data.items) {
        let geometry = null;
        console.log("Processing row:", row);
        console.log("xField:", this.xField, "yField:", this.yField);
        console.log("row[xField]:", row[this.xField], "row[yField]:", row[this.yField]);
        if (this.xField && this.yField && row[this.xField] != null && row[this.yField] != null) {
          geometry = {
            type: 'Point',
            coordinates: [Number(row[this.xField]), Number(row[this.yField])]
          };
        } else if (row.geometry) {
          geometry = row.geometry;
        }
        features.push({
          type: 'Feature',
          geometry,
          properties: { ...row }
        });
      }
    }
    return {
      type: 'FeatureCollection',
      features
    };
  }

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

    return data.reduce((acc: any, table: any) => {
      table.headers.forEach((header: string) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, [] as string[]);
  }

  static async getProperties(connectedDatasources: string[], datasourceRepository: IDatasourceRepository): Promise<string[]> {
    console.log("Composing properties from", connectedDatasources);
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

    return data.reduce((acc: any, table: any) => {
      if (!table || !table.rowProperties) return acc;

      const rows = Object.keys(table.rowProperties);
      if (rows.length === 0) return acc;

      console.log(rows);

      const keys = Object.keys(table.rowProperties[rows[1]] || table.rowProperties[rows[0]] || {});
      keys.forEach((key: string) => {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      });
      return acc;
    }, [] as string[]);
  }


  async getData(type: string): Promise<any> {
    return this.createFeatureCollection();
  }

  getOriginalData(): any {
    return null;
  }

  callEvent(event: string, params: any): void {
    // No events for composer
    console.warn(`Event '${event}' not supported in OgcFeatureComposer`, params);
  }

  destroy(): void {
    console.log('Destroying OgcFeatureComposer');
  }
}
