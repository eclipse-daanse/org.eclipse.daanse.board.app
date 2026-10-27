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

import {
  identifier,
  DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { onMounted, onUnmounted, inject, type Ref, reactive, ComputedRef, provide, computed } from 'vue'
import { watch, ref } from 'vue'
import { useGlobalLoading } from './useGlobalLoading'

export interface IVueDatasourceRepository {
  data: any
  callEvent: (
    event: string,
    params: any,
    shouldUpdate?: boolean,
  ) => Promise<void>
  update: (oldVal?: string, newVal?: string) => void
  getDataWithOptions: (options?: any) => Promise<void>
  getDatasourceInstance: () => any
}

export function useDatasourceRepository(
  dataSourceId: Ref<string>,
  type: string,
  data: Ref<any>,
  subscriptions: Array<() => any> = [],
  requestConfig?: ComputedRef,
): IVueDatasourceRepository {
  // Vue-native DI: the host bridges every service into app-level provides
  // under its identifier symbol. A composable runs in setup, so inject works.
  const datasourceRepository = inject<DatasourceRepository>(identifier)
  if (!datasourceRepository) {
    throw new Error('DatasourceRepository not provided')
  }

  const datasourceInstance = computed(() => {
    if (dataSourceId.value) {
      try {
        return datasourceRepository.getDatasource(dataSourceId.value)
      } catch (e) {
        return null
      }
    }
    return null
  })
  provide('datasource', datasourceInstance)

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
      const dataRaw = await dataSource.getData(type, requestConfig?.value || {});
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

  /*
   * Which datasource this composable is listening to.
   *
   * Kept because unsubscribing needs the id it subscribed under - the one
   * in dataSourceId has already moved on by then - and because subscribing
   * twice to the same one is what left handlers behind.
   */
  let listeningTo: string | undefined

  const listen = (id?: string) => {
    if (id === listeningTo) return
    if (listeningTo) {
      try {
        const previous = datasourceRepository.getDatasource(listeningTo)
        previous.unsubscribe(getData)
        subscriptions.forEach((fn) => previous.unsubscribe(fn))
      } catch (e) {
        console.warn(e)
      }
    }
    listeningTo = undefined
    if (!id) return
    try {
      const next = datasourceRepository.getDatasource(id)
      /*
       * getData itself, not a wrapper around it. A fresh arrow function is
       * a different handler every time, so unsubscribe could never find it
       * again and every reassignment left one more behind.
       */
      next.subscribe(getData)
      subscriptions.forEach((fn) => next.subscribe(fn))
      listeningTo = id
    } catch (e) {
      console.warn(e)
    }
  }

  /**
   * Reads the data and listens for what comes after.
   *
   * The old shape bailed out before subscribing whenever there was no
   * previous id - which is every first assignment, the usual case. The data
   * arrived once and nothing after it ever did, and only remounting the
   * widget made it look alive again.
   */
  const update = (newVal?: string, _oldVal?: string) => {
    try {
      getData()
    } catch (e) {
      console.warn(e)
    }
    listen(newVal ?? dataSourceId.value)
  }

  const getDatasourceInstance = () => {
    // A widget without a datasource yet has nothing to ask for.
    if (!dataSourceId.value) return null
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
    listen(dataSourceId.value)
  })

  onUnmounted(() => {
    listen(undefined)
  })

  return {
    data,
    callEvent,
    update,
    getDataWithOptions,
    getDatasourceInstance,
  }
}
