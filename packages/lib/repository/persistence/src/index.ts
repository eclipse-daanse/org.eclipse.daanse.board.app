/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import {container} from 'org.eclipse.daanse.board.app.lib.core';
import type { RepositoryRegistryI,WritableRepository,Entity,Repository } from './api/persistance'
import {BaseRepository} from './api/BaseRepository'
import { RepositoryRegistry } from './RepositoryRegistry/RepositoryRegistryImpl'
import type {RepositoryObserver} from './api/RepositoryObserverI';
const identifier = Symbol.for('RepositoryRegistry')
const identifierInternalContainer = Symbol.for('InternalContainer')

if(!container.isBound(identifier)){
  container.bind<RepositoryRegistryI>(identifier).to(RepositoryRegistry).inSingletonScope();
  console.log("📦 ReposetoryRegistry initialized");
}

export {
  RepositoryRegistryI,
  identifier,
  BaseRepository,
  WritableRepository,
  Entity,
  Repository,
  RepositoryObserver

}
