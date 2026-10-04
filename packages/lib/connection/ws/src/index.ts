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

import { WSConnection, type IWSConnectionConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

/** Typed service id - the name and the contract declared once, here. */
const WSCONNECTION_FACTORY = serviceId<typeof createWSConnection>('WSConnectionFactory')

const factorySymbol = Symbol.for(WSCONNECTION_FACTORY)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
function createWSConnection(config: IWSConnectionConfiguration) {
  if (!WSConnection.validateConfiguration(config)) {
    throw new Error(
      'Invalid WSConnection configuration. Please provide a valid configuration.',
    )
  }

  const connection = new WSConnection()
  connection.init(config)

  return connection
}

export function activate({ services }: ActivationContext) {
  services.register(WSCONNECTION_FACTORY, createWSConnection)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(WSCONNECTION_FACTORY)
}

export {
  WSConnection,
  IWSConnectionConfiguration,
  factorySymbol,
  WSCONNECTION_FACTORY,
}
