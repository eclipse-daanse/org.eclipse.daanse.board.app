/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { type ValidityCheckI } from './api/ValidityCheckI'
import ValidityCheck from './utils/ValidityCheck'

/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const VALIDITY_CHECK = 'ValidityCheck'

const identifier = Symbol.for(VALIDITY_CHECK)

/** Singleton ohne eigene Abhaengigkeiten - siehe lib.repository.connection. */
export function activate({ services }: ActivationContext) {
  services.register(VALIDITY_CHECK, new ValidityCheck())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(VALIDITY_CHECK)
}

export {
  ValidityCheckI,
  identifier,
  VALIDITY_CHECK
}
