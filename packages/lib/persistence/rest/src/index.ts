/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import type { Container } from 'inversify'
import { Repository, RepositoryRegistryI, identifier as persistenceIdentifieer } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import RestRepositoryImpl from './RestRepository/RestRepository'

const identifier = Symbol.for('RestRepository')

const init = (container: Container) => {
  container.bind<Repository>(identifier).to(RestRepositoryImpl)
  const repoRegistry = container.get<RepositoryRegistryI>(persistenceIdentifieer)
  if (!repoRegistry) {
    console.log('RepositoryRegistry not found')
    return
  }
  repoRegistry.registerRepoType(RestRepositoryImpl.type, identifier)
  console.log('📦 RestRepository registered')
}

export {
  init
}
