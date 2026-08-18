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
import { RestConnection, type IRestConnectionConfig } from './classes'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const REST_CONNECTION_FACTORY = 'RestConnectionFactory'

const factorySymbol = Symbol.for(REST_CONNECTION_FACTORY)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
function createRestConnection(config: any) {
  if (!RestConnection.validateConfiguration(config)) {
    throw new Error(
      'Invalid RestConnection configuration. Please provide a valid configuration.',
    )
  }

  const connection = new RestConnection()
  connection.init(config)

  return connection
}

export function activate({ services }: ActivationContext) {
  services.register(REST_CONNECTION_FACTORY, createRestConnection)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(REST_CONNECTION_FACTORY)
}

export {
  RestConnection,
  IRestConnectionConfig,
  factorySymbol,
  REST_CONNECTION_FACTORY,
}
