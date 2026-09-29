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
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'

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

  const createDataSource = (type: any, config: any = {}) => {
    const uid = Math.random().toString(36).substring(7)
    const name = 'DataSource ' + uid
    config['name'] = name;
    config['type'] = type;
    config['uid'] = uid;
    datasourceRepository.registerDatasource(uid, type, config)
    dataSources.value.push({ uid, type, name, config })
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
    dataSource.config = dataSourceProxy.config??{}

    dataSource.config['name'] = dataSourceProxy.name
    dataSource.config['type'] =dataSourceProxy.type
    dataSource.config['uid'] =dataSourceProxy.uid

    datasourceRepository.registerDatasource(dataSourceId, dataSource.type, dataSource.config)
    console.log(datasourceRepository)
  }

  const updateDataSources = (dataSourceProxies: DataSourceDTO[]) => {
    dataSources.value.splice(0)
    dataSourceProxies.forEach((dataSourceProxy) => {
      dataSources.value.push(dataSourceProxy)
      if(!dataSourceProxy.config)dataSourceProxy.config = {};
      dataSourceProxy.config['name'] = dataSourceProxy.name
      dataSourceProxy.config['type'] =dataSourceProxy.type
      dataSourceProxy.config['uid'] =dataSourceProxy.uid

      datasourceRepository.registerDatasource(
        dataSourceProxy.uid,
        dataSourceProxy.type,
        dataSourceProxy.config,
      )
    })
  }

  return { dataSources, createDataSource, removeDataSource, updateDataSource, updateDataSources }
})
