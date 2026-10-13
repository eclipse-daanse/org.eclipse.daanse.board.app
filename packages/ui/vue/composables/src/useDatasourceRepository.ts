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
import { onMounted, onUnmounted, inject, provide, type Ref, reactive, ComputedRef } from 'vue'
import { watch, ref, computed } from 'vue'
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
  /** True while a request of this widget is on its way. */
  loading: Readonly<Ref<boolean>>
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

  /* The datasource itself, for what the widget's parts need beyond its data - drillthrough asks it. */
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
  /* Requests of this widget still on their way; the widget can say it is waiting. */
  const inFlight = ref(0)
  const loading = computed(() => inFlight.value > 0)

  /*
   * The request whose answer this widget is waiting for. A newer one
   * replaces it, and an answer nobody waits for any more is dropped rather
   * than shown over the newer one - whether or not the datasource could
   * stop it on the way.
   */
  let pending: AbortController | null = null

  const nextRequest = (): AbortSignal => {
    pending?.abort()
    pending = new AbortController()
    return pending.signal
  }

  const getData = async () => {
    if (!dataSourceId.value) {
      pending?.abort()
      data.value = null
      return
    }
    const signal = nextRequest()
    startLoading()
    inFlight.value += 1
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type, { ...(requestConfig?.value || {}), signal });
      if (signal.aborted) return
      if (type === "PivotTable") {
        data.value = JSON.parse(JSON.stringify(dataRaw));
      } else {
        data.value = structuredClone(dataRaw);
      }
    } catch (e) {
      if (signal.aborted) return
      data.value = null
      console.warn(e)
    } finally {
      stopLoading()
      inFlight.value -= 1
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
          const signal = nextRequest()
          const dataRaw = await dataSource.getData(type, { signal })
          if (signal.aborted) return
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
      pending?.abort()
      data.value = null
      return
    }
    const signal = nextRequest()
    startLoading()
    inFlight.value += 1
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type, { ...(options || {}), signal });
      if (signal.aborted) return
      data.value = structuredClone(dataRaw);
    } catch (e) {
      if (signal.aborted) return
      data.value = null
      console.warn(e)
    } finally {
      stopLoading()
      inFlight.value -= 1
    }
  }

  const update = (newVal?: string, oldVal?: string) => {
    try {
      getData()
    } catch (e){
      console.warn(e)
    }

    if (!newVal || !oldVal || newVal === oldVal) return;

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
      // The function itself, so the unsubscribe above finds it next time.
      dataSource.subscribe(getData)
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
    pending?.abort()
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
    loading,
  }
}
