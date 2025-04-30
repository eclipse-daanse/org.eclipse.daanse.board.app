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
import { ref, getCurrentInstance } from 'vue'
import { defineStore } from 'pinia'
import type { Container } from 'inversify'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'

interface DataSourceDTO {
  uid: string
  name: string
  type: string
  config?: {
    [key: string]: any
  }
}

export const useDataSourcesStore = defineStore('datasource', () => {
  const instance = getCurrentInstance()
  const container = instance?.appContext.config.globalProperties.$container as Container

  const dataSources = ref([
    {
      uid: 'test_ds',
      name: 'Test DataSource 01',
      type: 'rest',
      config: {
        resourceUrl: '$test',
        connection: 'test',
      },
    },
  ] as DataSourceDTO[])
  const datasourceRepository = container.get<DatasourceRepository>(identifier)

  const createDataSource = (type: any, config: any = {}) => {
    const uid = Math.random().toString(36).substring(7)
    const name = 'DataSource ' + uid

    datasourceRepository.registerDatasource(uid, type, config)
    dataSources.value.push({ uid, type, name, config })
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
    dataSource.config = dataSourceProxy.config

    datasourceRepository.registerDatasource(dataSourceId, dataSource.type, dataSource.config)
    console.log(datasourceRepository)
  }

  const updateDataSources = (dataSourceProxies: DataSourceDTO[]) => {
    dataSources.value.splice(0)
    dataSourceProxies.forEach((dataSourceProxy) => {
      dataSources.value.push(dataSourceProxy)

      datasourceRepository.registerDatasource(
        dataSourceProxy.uid,
        dataSourceProxy.type,
        dataSourceProxy.config,
      )
    })
  }

  return { dataSources, createDataSource, removeDataSource, updateDataSource, updateDataSources }
})
