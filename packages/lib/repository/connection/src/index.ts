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

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import {
  ConnectionRepository,
  type ConnectionIdentifiers,
  type IConnection,
  type PubSubConnection,
  type PubSubEvents,
} from './classes'
import { CONNECTION_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.connection'
export { CONNECTION_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.connection'



/**
 * Das Repository ist ein Singleton ohne eigene Abhaengigkeiten - eine Instanz
 * genuegt, erzeugt beim Aktivieren statt beim ersten Zugriff.
 */
export function activate({ services }: ActivationContext) {
  services.register(CONNECTION_REPOSITORY, new ConnectionRepository(services))
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(CONNECTION_REPOSITORY)
}

export {
  type ConnectionRepository,
}
export type {
  ConnectionIdentifiers,
  IConnection,
  PubSubConnection,
  PubSubEvents,
}
