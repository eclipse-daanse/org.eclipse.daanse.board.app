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
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { onMounted, onBeforeUnmount, inject, Ref } from 'vue'

export function useTemporaryStore(
  type: string,
  settings: Ref<any>,
  tempStore: Ref<any>,
) {
  const datasourceRepository = inject<DatasourceRepository>(repositoryIdentifier)
  if (!datasourceRepository) {
    throw new Error('DatasourceRepository not provided')
  }
  const identifiers = datasourceRepository.getDatasourceIdentifiers(type)
  console.log('Identifiers for datasource type', type, identifiers)

  /* Through update, so the first build is remembered like any other and
    the settings watch that follows does not build a second one. */
  onMounted(() => {
    void update()
  })

  /*
   * A preview opens as soon as a source is created, before its settings are
   * complete - an XMLA source without its cube. A factory that refuses such
   * a configuration leaves the preview without a store, not broken; the next
   * update, once the setting is there, builds it.
   */
  const build = () => {
    const factory = datasourceRepository.resolveIdentifier(identifiers.Store) as any
    try {
      // Mark as temporary preview - factories should not register these in EventActionsRegistry
      return factory({ ...settings.value.config, _isTemporaryPreview: true })
    } catch (error) {
      console.info('No preview store yet:', error instanceof Error ? error.message : error)
      return null
    }
  }

  /**
   * The configuration the store standing there was built from.
   *
   * Every preview watches the settings and asks for a rebuild when they
   * change, and the editor touches them once as it mounts - so the store
   * was built, thrown away and built again, and every preview read its
   * endpoint twice within a few dozen milliseconds. Measured against a
   * csv source: two GETs, 20ms apart, for one opening.
   *
   * Compared as text because the configuration is a plain object of
   * values, and because what matters is whether a rebuilt store would
   * differ, not whether the object is the same one.
   */
  let built: string | undefined

  const update = async () => {
    const wanted = JSON.stringify(settings.value.config ?? {})
    if (tempStore.value && wanted === built) return tempStore.value
    built = wanted

    tempStore.value?.destroy()

    tempStore.value = null

    const newStore = build()
    if (!newStore) return null
    if (newStore.initPromise) {
        await newStore.initPromise
        tempStore.value = newStore
        return newStore
    } else {
      tempStore.value = newStore
      return newStore
    }
  }

  onBeforeUnmount(() => {
    console.log('Destroying temporary store')
    tempStore.value?.destroy()
  })

  return {
    update,
  }
}
