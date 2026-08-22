/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import { REPOSITORY_REGISTRY, Repository, RepositoryRegistryI, identifier as persistenceIdentifieer } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import RestRepositoryImpl from './RestRepository/RestRepository'

/** Typed service id - the name and the contract declared once, here. */
export const REST_REPOSITORY = serviceId<RestRepositoryImpl>('RestRepository')

const identifier = Symbol.for(REST_REPOSITORY)

/**
 * Meldet die Repository-Umsetzung an und traegt ihren Typ in die
 * RepositoryRegistry ein.
 *
 * Die Klasse hat keine injizierten Felder, deshalb `new`. Vorher stand
 * beides auf Modulebene, und ob die Registry schon da war, entschied die
 * Importreihenfolge - fehlte sie, wurde der Typ still uebersprungen.
 */
export function activate({ services }: ActivationContext) {
  services.register(REST_REPOSITORY, new RestRepositoryImpl())

  const repoRegistry = services.getRequired(REPOSITORY_REGISTRY)
  repoRegistry.registerRepoType(RestRepositoryImpl.type, identifier)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(REST_REPOSITORY)
}

