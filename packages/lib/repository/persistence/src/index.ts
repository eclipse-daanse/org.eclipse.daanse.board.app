/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core';
import type { RepositoryRegistryI,WritableRepository,Entity,Repository } from './api/persistance'
import {BaseRepository} from './api/BaseRepository'
import { RepositoryRegistry } from './RepositoryRegistry/RepositoryRegistryImpl'
import type {RepositoryObserver} from './api/RepositoryObserverI';
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
/** Typed service id - the name and the contract declared once, here. */
const REPOSITORY_REGISTRY = serviceId<RepositoryRegistry>('RepositoryRegistry')

const identifier = Symbol.for(REPOSITORY_REGISTRY)

/** Singleton ohne eigene Abhaengigkeiten - siehe lib.repository.connection. */
export function activate({ services, log }: ActivationContext) {
  services.register(REPOSITORY_REGISTRY, new RepositoryRegistry())
  log.info('RepositoryRegistry bereit')
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(REPOSITORY_REGISTRY)
}

export {
  RepositoryRegistryI,
  identifier,
  BaseRepository,
  WritableRepository,
  Entity,
  Repository,
  RepositoryObserver, REPOSITORY_REGISTRY }
