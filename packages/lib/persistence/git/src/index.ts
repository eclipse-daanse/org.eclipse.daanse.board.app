/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/


import { REPOSITORY_REGISTRY, Repository, RepositoryRegistryI, identifier as persistenceIdentifieer } from 'org.eclipse.daanse.board.app.lib.repository.persistence'

import GitRepositoryImpl from './GitRepository/GitRepositoryImpl'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type {GitWritableRepository} from './git_api/api/GitWritableRepsitory';
import {AuthentificationError} from "./git_api/services/common/CastError";
/** Typed service id - the name and the contract declared once, here. */
export const GIT_REPOSITORY = serviceId<GitRepositoryImpl>('GitRepository')

const identifier = Symbol.for(GIT_REPOSITORY)

const type = GitRepositoryImpl.type;

/**
 * Meldet die Repository-Umsetzung an und traegt ihren Typ in die
 * RepositoryRegistry ein.
 *
 * Die Klasse hat keine injizierten Felder, deshalb `new`. Vorher stand
 * beides auf Modulebene, und ob die Registry schon da war, entschied die
 * Importreihenfolge - fehlte sie, wurde der Typ still uebersprungen.
 */
export function activate({ services }: ActivationContext) {
  services.register(GIT_REPOSITORY, new GitRepositoryImpl())

  const repoRegistry = services.getRequired(REPOSITORY_REGISTRY)
  repoRegistry.registerRepoType(GitRepositoryImpl.type, identifier)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(GIT_REPOSITORY)
}
export {
  identifier,
  GitWritableRepository,
  type,
  AuthentificationError
}
