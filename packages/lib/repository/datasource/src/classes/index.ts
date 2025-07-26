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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { injectable } from 'inversify'

export interface IDataRetrieveable {
  getData(type: string): Promise<any>
  getOriginalData(): any
  callEvent: (event: string, params: any) => void
  subscribe: (subscriber: () => any) => void
  unsubscribe: (subscriber: () => any) => void
  destroy: () => void
  startPolling: (interval: number) => void
  stopPolling: () => void
}

export interface IDatasourceRepository {
  getDatasource(datasourceName: string): IDataRetrieveable
  registerDatasource(datasourceName: string, type: string, config: any): void
}

export interface DataSourcePlugin<T> {
  Preview: any
  Settings: any
  Store: StoreConstructor<T>
  Identifiers: StoreIdentifiers
  Name: string
}

export interface StoreIdentifiers {
  Store: symbol
  Preview: symbol
  Settings: symbol
}

export interface StoreConstructor<T> {
  new (config: any): T
  validateConfiguration: (config: any) => boolean
}

const datasources = new Map<string, IDataRetrieveable>()

@injectable()
export class DatasourceRepository implements IDatasourceRepository {
  private availableDatasources: Record<string, StoreIdentifiers> = {}
  private datasourcesByType: Record<string, string> = {}

  constructor() {}

  removeDatasource(datasourceId: string): void {
    if (datasources.has(datasourceId)) {
      const datasource = datasources.get(datasourceId)
      console.log(datasource)
      datasource?.destroy()

      datasources.delete(datasourceId)
    }
  }

  getDatasource(datasourceId: string): IDataRetrieveable {
    const datasource = datasources.get(datasourceId)
    if (!datasource) throw new Error(`Store with id ${datasourceId} not found`)

    return datasource
  }

  registerDatasourceType(name: string, identifiers: StoreIdentifiers): void {
    this.availableDatasources[name] = identifiers
  }
  getDataSourceTypes() {
    return Object.keys(this.availableDatasources)
  }

  get registeredDatasources(): String[] {
    return Object.keys(this.availableDatasources)
  }

  getDatasourceIdentifiers(type: string): StoreIdentifiers {
    return this.availableDatasources[type]
  }
  registerDatasource(datasourceId: string, type: string, config: any): void {
    const identifiers = this.availableDatasources[type]

    if (identifiers) {
      const datasourceFactory = container.get(identifiers.Store) as any
      const datasource = datasourceFactory(config)
      datasources.set(datasourceId, datasource)
      this.datasourcesByType[datasourceId] = type
    }
  }
  getDatasourceType(datasourceId: string) {
    return this.datasourcesByType[datasourceId]
  }
  getDatasourceId(dataSource: IDataRetrieveable) {
    let key: string | undefined
    datasources.forEach((aDataSource, akey) => {
      if (dataSource === aDataSource) {
        key = akey
      }
    })
    return key
  }
  getDatasourceTypeFromDatasource(dataSource: IDataRetrieveable) {
    const id = this.getDatasourceId(dataSource)
    if (!id) return undefined
    return this.getDatasourceType(id)
  }
}
