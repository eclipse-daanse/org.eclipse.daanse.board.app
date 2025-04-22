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
  DatasourceFactory,
  identifier as factoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.factory.datasource'
import {
  DatasourceRepository,
  identifier as repositoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import {
  onMounted,
  watch,
  onBeforeUnmount,
  getCurrentInstance,
  Ref,
  toRef,
} from 'vue'
import { Container } from 'inversify'

export function useTemporaryStore(
  type: string,
  settings: Ref<any>,
  tempStore: Ref<any>,
) {
  const instance = getCurrentInstance()
  const container = instance?.appContext.config.globalProperties
    .$container as Container

  const datasourceRepository =
    container.get<DatasourceRepository>(repositoryIdentifier)
  const identifiers = datasourceRepository.getDatasourceIdentifiers(type)

  const datasourceFactory = container.get<DatasourceFactory>(factoryIdentifier)

  onMounted(async () => {
    tempStore.value = datasourceFactory.createDatasource(
      identifiers.Store,
      settings.value.config,
    )
  })

  const update = () => {
    tempStore.value?.destroy()
    console.log('settings changes', settings)
    tempStore.value = datasourceFactory.createDatasource(
      identifiers.Store,
      settings.value.config,
    )
  }

  watch(
    () => settings,
    async () => {},
    { deep: true },
  )

  onBeforeUnmount(() => {
    console.log('Destroying temporary store')
    tempStore.value?.destroy()
  })

  return {
    update,
  }
}
