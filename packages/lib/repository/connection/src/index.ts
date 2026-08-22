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
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import {
  ConnectionRepository,
  type ConnectionIdentifiers,
  type IConnection,
  type PubSubConnection,
  type PubSubEvents,
} from './classes'

/** Typed service id - the name and the contract declared once, here. */
const CONNECTION_REPOSITORY = serviceId<ConnectionRepository>('ConnectionRepository')

const identifier = Symbol.for(CONNECTION_REPOSITORY)

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

export { type ConnectionRepository, identifier, CONNECTION_REPOSITORY }
export type {
  ConnectionIdentifiers,
  IConnection,
  PubSubConnection,
  PubSubEvents,
}
