/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import {container} from "org.eclipse.daanse.board.app.lib.core"
import { identifier as persistenceIdentifieer, Repository, type RepositoryRegistryI } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import LocalRepositoryImpl from './classes/LocalRepositoryImpl'

const identifier = Symbol.for('LocalRepository')
if(!container.isBound(identifier)){
  container.bind<Repository>(identifier).to(LocalRepositoryImpl)
  const repoRegistry = container.get<RepositoryRegistryI>(persistenceIdentifieer)
  if (!repoRegistry) {
    console.log('RepositoryRegistry not found')
  }else {
    repoRegistry.registerRepoType(LocalRepositoryImpl.type, identifier)
    console.log('📦 LocalRepository registered')
  }

}

