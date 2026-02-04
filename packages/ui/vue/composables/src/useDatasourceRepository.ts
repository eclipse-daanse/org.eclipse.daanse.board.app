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

import { type Container } from 'inversify'
import {
  identifier,
  DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { onMounted, onUnmounted, type Ref, getCurrentInstance, reactive } from 'vue'
import { watch, ref } from 'vue'
import { useGlobalLoading } from './useGlobalLoading'

export interface IVueDatasourceRepository {
  data: any
  callEvent: (
    event: string,
    params: any,
    shouldUpdate?: boolean,
  ) => Promise<void>
  update: (oldVal: string, newVal: string) => void
  getDataWithOptions: (options?: any) => Promise<void>
  getDatasourceInstance: () => any
}

export function useDatasourceRepository(
  dataSourceId: Ref<string>,
  type: string,
  data: Ref<any>,
  subscriptions: Array<() => any> = [],
): IVueDatasourceRepository {
  const instance = getCurrentInstance()
  const container = instance?.appContext.config.globalProperties
    .$container as Container

  if (!container) {
    throw new Error(
      'Container not found. Check if youe modules is properly configured.',
    )
  }

  const datasourceRepository = container.get<DatasourceRepository>(identifier)
  const { startLoading, stopLoading } = useGlobalLoading()

  const getData = async () => {
    if (!dataSourceId.value) {
      data.value = null
      return
    }
    console.log('getData', dataSourceId.value)
    console.log('type', type)
    startLoading()
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type);
      if (type === "PivotTable") {
        data.value = JSON.parse(JSON.stringify(dataRaw));
      } else {
        data.value = structuredClone(dataRaw);
      }
    } catch (e) {
      data.value = null
      console.warn(e)
    } finally {
      stopLoading()
    }
  }

  const callEvent = async (event: string, params: any, shouldUpdate: boolean = true) => {
    if (dataSourceId.value) {
      try {
        const dataSource = datasourceRepository.getDatasource(
          dataSourceId.value,
        )
        const result = dataSource.callEvent(event, params, shouldUpdate)

        // When shouldUpdate=false, wait for data to be ready, then update our own data
        if (!shouldUpdate && result instanceof Promise) {
          await result
          const dataRaw = await dataSource.getData(type)
          data.value = structuredClone(dataRaw)
        }
      } catch (e) {
        console.warn(e)
      }
    }
  }

  // watch(
  //   () => dataSourceId.value,
  //   (newVal, oldVal) => {
  //     getData()
  //     try {
  //       const oldDataSource = datasourceRepository.getDatasource(oldVal)
  //       oldDataSource.unsubscribe(getData)

  //       const dataSource = datasourceRepository.getDatasource(newVal)
  //       dataSource.subscribe(getData)
  //     } catch (e) {
  //       console.warn(e)
  //     }
  //   },
  // )

  const getDataWithOptions = async (options?: any) => {
    if (!dataSourceId.value) {
      data.value = null
      return
    }
    console.log('getDataWithOptions', dataSourceId.value, options)
    console.log('type', type)
    startLoading()
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type, options);
      data.value = structuredClone(dataRaw);
    } catch (e) {
      data.value = null
      console.warn(e)
    } finally {
      stopLoading()
    }
  }

  const update = (newVal: string, oldVal: string) => {
    try {
      getData()
    }catch (e){
      console.warn(e)
    }

    try {
      const oldDataSource = datasourceRepository.getDatasource(oldVal)
      oldDataSource.unsubscribe(getData)
      subscriptions.forEach(fn => {
        oldDataSource.unsubscribe(fn);
      });
    } catch (e) {
      console.warn(e)
    }
    try {
      const dataSource = datasourceRepository.getDatasource(newVal)
      // TODO: fix duplicate subscription
      dataSource.subscribe(()=>getData())
      subscriptions.forEach(fn => {
        dataSource.subscribe(fn);
      })
    } catch (e) {
      console.warn(e)
    }
  }

  const getDatasourceInstance = () => {
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value)
      return dataSource
    }
    catch (e) {
      console.warn(e)
      return null
    }
  }

  onMounted(() => {
    getData()

    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value)
      dataSource.subscribe(getData)
      subscriptions.forEach(fn => {
        dataSource.subscribe(fn);
      })
    } catch (e) {
      console.warn(e)
    }
  })

  onUnmounted(() => {
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value)
      dataSource.unsubscribe(getData)
      subscriptions.forEach(fn => {
        dataSource.unsubscribe(fn);
      })
    } catch (e) {
      console.warn(e)
    }
  })

  return {
    data,
    callEvent,
    update,
    getDataWithOptions,
    getDatasourceInstance,
  }
}
