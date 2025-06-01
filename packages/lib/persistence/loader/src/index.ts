/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0
  Contributors: Smart City Jena
*/

import type { Container } from 'inversify'
import { inject, optional, ServiceIdentifier } from 'inversify'
import { identifier, SettingsManagerI } from 'org.eclipse.daanse.board.app.lib.settings.manager'
import { identifier as RepoManagerId, Repository, RepositoryRegistryI } from 'org.eclipse.daanse.board.app.lib.repository.persistence'

const init = async (container: Container) => {

  const settingsManager = container.get<SettingsManagerI>(identifier)
  const repoManager: RepositoryRegistryI = container.get<RepositoryRegistryI>(RepoManagerId)

  console.info('📦 RepoRepositoryLoader started')
  if (!settingsManager) {
    console.info('SettingsManager not installed')
    return
  }
  let persirepos = await settingsManager.getSettings(['persistanceRepositories'])
  console.log(persirepos)
  if (!persirepos) return
  for (let [type, instances] of Object.entries(persirepos)) {
    let baseclass = repoManager.availableRepoTypes.get(type)
    if (!baseclass) {
      console.log(`${type} not registered`)
      continue
    }

    const aclass = container.get<Repository>(baseclass as ServiceIdentifier)
    if (aclass) {
      for (let entitysetting of (instances as any[])) {
        if (entitysetting.name && entitysetting.url) {
          aclass.init(new URL(entitysetting.url), entitysetting.name, entitysetting) as Repository
          repoManager.register(aclass)
        }
      }
    } else {
      console.warn('found no RepositoryType for:', type)
    }
  }
}


export {
  init
}
