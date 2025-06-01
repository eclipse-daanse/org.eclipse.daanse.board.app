/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from 'inversify'
import type { RepositoryRegistryI,WritableRepository,Entity,Repository } from './api/persistance'
import {BaseRepository} from './api/BaseRepository'
import { RepositoryRegistry } from './RepositoryRegistry/RepositoryRegistryImpl'
const identifier = Symbol.for('RepositoryRegistry')
const identifierInternalContainer = Symbol.for('InternalContainer')
const init = (container: Container) => {
  console.log("📦 ReposetoryRegistry initialized");
  container.bind<Container>(identifierInternalContainer).toConstantValue(container);
  container.bind<RepositoryRegistryI>(identifier).to(RepositoryRegistry).inSingletonScope();
  const registry = container.get<RepositoryRegistryI>(identifier);

}

export {
  init,
  RepositoryRegistryI,
  identifier,
  BaseRepository,
  WritableRepository,
  Entity,
  Repository

}
