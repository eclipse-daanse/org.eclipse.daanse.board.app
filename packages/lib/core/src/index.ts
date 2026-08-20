/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { Container } from 'inversify'

const identifiers = {
  TINY_EMITTER: Symbol.for('TINY_EMITTER'),
  CONTAINER: Symbol.for('CONTAINER'),
}
const container = new Container()

/*
 * The event bus is NOT created here anymore. platform.system owns it and
 * registers it as the TINY_EMITTER service; the identifier below stays for
 * symbol-based consumers, and the registry mirror keeps the legacy container
 * binding in sync.
 */

import { BoardServiceRegistry } from './BoardServiceRegistry'
import type { ActivationContext, ActivatableModule } from './api/ActivationContext'

/**
 * Die ServiceRegistry der Anwendung.
 *
 * Umgestellte Pakete registrieren hier über ihren `activate`-Kontext. Bis
 * alle Pakete umgestellt sind, löst die Registry unbekannte IDs zusätzlich
 * gegen den Inversify-Container auf.
 */
const services = new BoardServiceRegistry(container)

export {
  container,
  identifiers,
  services,
  BoardServiceRegistry,
  type ActivationContext,
  type ActivatableModule,
}
