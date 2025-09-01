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
  DatasourceRepository,
  identifier as repositoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { onMounted, watch, onBeforeUnmount, Ref } from 'vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

export function useTemporaryStore(
  type: string,
  settings: Ref<any>,
  tempStore: Ref<any>,
) {
  console.log('Container for useTemporaryStore', container)
  const datasourceRepository =
    container.get<DatasourceRepository>(repositoryIdentifier)
  console.log('Using datasource repository', datasourceRepository)
  const identifiers = datasourceRepository.getDatasourceIdentifiers(type)
  console.log('Identifiers for datasource type', type, identifiers)

  onMounted(async () => {
    console.log(
      'Creating temporary store for type',
      type,
      'with settings',
      settings.value,
    )
    const factory = container.get(identifiers.Store) as any
    tempStore.value = factory(settings.value.config)
  })

  const update = async () => {
    tempStore.value?.destroy()

    tempStore.value = null

    const factory = container.get(identifiers.Store) as any

    const newStore = factory(settings.value.config) 
    if (newStore.initPromise) {
        await newStore.initPromise
        tempStore.value = newStore
        return newStore
    } else {
      tempStore.value = newStore
      return newStore
    }
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
