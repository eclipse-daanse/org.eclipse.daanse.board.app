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
import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'

export interface DataSourceDTO {
  uid: string
  name: string
  type: string
  config?: {
    [key: string]: any
    name?:string
    type?:string
    uid?:string
  }
}

let repository: DatasourceRepository | undefined

/** Called by this package's activate - dependency injection at the module boundary. */
export function provideRepository(instance: DatasourceRepository): void {
  repository = instance
}

function requireRepository(): DatasourceRepository {
  if (!repository) {
    throw new Error('DatasourceRepository not provided - is the ui.vue.stores.datasouce module active?')
  }
  return repository
}

export const useDataSourcesStore = defineStore('datasource', () => {
  const dataSources = ref([
    {
      uid: 'test_ds',
      name: 'Test DataSource 01',
      type: 'rest',
      config: {
        resourceUrl: 'posts',
        connection: 'test'
      },
    },
  ] as DataSourceDTO[])
  /*
   * Injected at module activation (see ../index.ts). The store is a global
   * singleton and may be first used outside component setup, so Vue's
   * inject() is not available here.
   */
  const datasourceRepository = requireRepository()

  /**
   * Puts a data source into the repository, where the live store that reads
   * it is built.
   *
   * Every path that adds or changes one goes through here - creating,
   * editing, loading a stored board, and the list this store starts with.
   * That last one used to be missed, and there is no autoload, so on a
   * normal start this list is all there is.
   *
   * The uid, name and type are copied into the config because that is where
   * a store's own init() reads them.
   */
  const register = (dataSource: DataSourceDTO) => {
    if (!dataSource.config) dataSource.config = {}
    dataSource.config['name'] = dataSource.name
    dataSource.config['type'] = dataSource.type
    dataSource.config['uid'] = dataSource.uid
    datasourceRepository.registerDatasource(
      dataSource.uid,
      dataSource.type,
      dataSource.config,
    )
  }

  dataSources.value.forEach(register)

  const createDataSource = (type: any, config: any = {}) => {
    const uid = Math.random().toString(36).substring(7)
    const dataSource: DataSourceDTO = { uid, type, name: 'DataSource ' + uid, config }
    dataSources.value.push(dataSource)
    register(dataSource)
    return uid;
  }

  const removeDataSource = (dataSourceId: string) => {
    const index = dataSources.value.findIndex((c) => c.uid === dataSourceId)
    datasourceRepository.removeDatasource(dataSourceId)

    if (index > -1) {
      dataSources.value.splice(index, 1)
    }
  }

  const updateDataSource = (dataSourceId: string, dataSourceProxy: DataSourceDTO) => {
    const dataSource = dataSources.value.find((c) => c.uid === dataSourceId)

    if (!dataSource) return
    datasourceRepository.removeDatasource(dataSourceId)
    dataSource.uid = dataSourceProxy.uid
    dataSource.type = dataSourceProxy.type
    dataSource.name = dataSourceProxy.name
    dataSource.config = dataSourceProxy.config ?? {}

    register(dataSource)
  }

  const updateDataSources = (dataSourceProxies: DataSourceDTO[]) => {
    dataSources.value.splice(0)
    dataSourceProxies.forEach((dataSourceProxy) => {
      dataSources.value.push(dataSourceProxy)
      register(dataSourceProxy)
    })
  }

  return { dataSources, createDataSource, removeDataSource, updateDataSource, updateDataSources }
})
