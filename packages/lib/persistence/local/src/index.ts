/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier as persistenceIdentifieer, Repository, type RepositoryRegistryI } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import LocalRepositoryImpl from './classes/LocalRepositoryImpl'

/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const LOCAL_REPOSITORY = 'LocalRepository'

const identifier = Symbol.for(LOCAL_REPOSITORY)

/**
 * Meldet die Repository-Umsetzung an und traegt ihren Typ in die
 * RepositoryRegistry ein.
 *
 * `construct`, weil die Klasse ihren ValidityCheck ueber `@inject` bezieht. Vorher stand
 * beides auf Modulebene, und ob die Registry schon da war, entschied die
 * Importreihenfolge - fehlte sie, wurde der Typ still uebersprungen.
 */
export function activate({ services }: ActivationContext) {
  services.register(LOCAL_REPOSITORY, services.construct(LocalRepositoryImpl))

  const repoRegistry = services.getRequired<RepositoryRegistryI>('RepositoryRegistry')
  repoRegistry.registerRepoType(LocalRepositoryImpl.type, identifier)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(LOCAL_REPOSITORY)
}

