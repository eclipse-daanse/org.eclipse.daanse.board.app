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

import { VariableRepository, type VariableConfig } from './classes/VariableRepository'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { registerVariableActions } from './actions/VariableActions'

/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const VARIABLE_REPOSITORY = 'VariableRepository'

const identifier = Symbol.for(VARIABLE_REPOSITORY)

/**
 * Singleton mit einer Abhaengigkeit (`TINY_EMITTER`), deshalb `construct`
 * statt `new`: das loest die mit `@inject` ausgezeichneten Felder auf.
 * Registriert wird die fertige Instanz, damit auch der Rueckfallweg sie sieht.
 */
export function activate({ services }: ActivationContext) {
  services.register(VARIABLE_REPOSITORY, services.construct(VariableRepository))
  registerVariableActions()
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(VARIABLE_REPOSITORY)
}

export { VariableRepository, type VariableConfig, identifier, VARIABLE_REPOSITORY }
