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
import { onMounted, onUnmounted, type Ref, getCurrentInstance } from 'vue'
import { watch, ref } from 'vue'

export interface IVueDatasourceRepository {
  data: any
  callEvent: (
    event: string,
    params: any,
    shouldUpdate?: boolean,
  ) => Promise<void>
}

export function useDatasourceRepository(
  dataSourceId: Ref<string>,
  type: string,
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
  const data = ref(null)

  const getData = async () => {
    if (!dataSourceId.value) {
      data.value = null
      return
    }

    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value)
      data.value = await dataSource.getData(type)
      console.log(data.value, type)
    } catch (e) {
      data.value = null
      console.warn(e)
    }
  }

  const callEvent = async (event: string, params: any) => {
    if (dataSourceId.value) {
      try {
        const dataSource = datasourceRepository.getDatasource(
          dataSourceId.value,
        )
        await dataSource.callEvent(event, params)
      } catch (e) {
        console.warn(e)
      }
    }
  }

  watch(
    () => dataSourceId.value,
    (newVal, oldVal) => {
      getData()
      try {
        const oldDataSource = datasourceRepository.getDatasource(oldVal)
        oldDataSource.unsubscribe(getData)

        const dataSource = datasourceRepository.getDatasource(newVal)
        dataSource.subscribe(getData)
      } catch (e) {
        console.warn(e)
      }
    },
  )

  onMounted(() => {
    getData()

    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value)
      dataSource.subscribe(getData)
    } catch (e) {
      console.warn(e)
    }
  })

  onUnmounted(() => {
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value)
      dataSource.unsubscribe(getData)
    } catch (e) {
      console.warn(e)
    }
  })

  return {
    data,
    callEvent,
  }
}
