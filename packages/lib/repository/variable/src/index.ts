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

import { EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { VariableRepository, type VariableConfig } from './classes/VariableRepository'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'
import { registerVariableActions } from './actions/VariableActions'
import type { TinyEmitter } from 'tiny-emitter'
import type { EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import { VARIABLE_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.variable'
export { VARIABLE_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.variable'



/**
 * Singleton mit einer Abhaengigkeit (`TINY_EMITTER`), deshalb `construct`
 * statt `new`: das loest die mit `@inject` ausgezeichneten Felder auf.
 * Registriert wird die fertige Instanz, damit auch der Rueckfallweg sie sieht.
 */
export function activate({ services }: ActivationContext) {
  const repository = new VariableRepository(
    services,
    services.get(TINY_EMITTER),
  )
  services.register(VARIABLE_REPOSITORY, repository)
  registerVariableActions(
    services.getRequired(EVENT_ACTIONS_REGISTRY_ID),
    repository,
  )
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(VARIABLE_REPOSITORY)
}

export {
  VariableRepository,
  type VariableConfig,
}
