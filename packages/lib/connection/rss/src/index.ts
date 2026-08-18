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

import { RssConnection, type IRssConnectionConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const RSS_CONNECTION_FACTORY = 'RssConnectionFactory'

const factorySymbol = Symbol.for(RSS_CONNECTION_FACTORY)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
function createRssConnection(config: IRssConnectionConfiguration) {
  if (!RssConnection.validateConfiguration(config)) {
    throw new Error(
      'Invalid RssConnection configuration. Please provide a valid configuration.',
    )
  }

  const connection = new RssConnection()
  connection.init(config)

  return connection
}

export function activate({ services }: ActivationContext) {
  services.register(RSS_CONNECTION_FACTORY, createRssConnection)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(RSS_CONNECTION_FACTORY)
}

export {
  RssConnection,
  IRssConnectionConfiguration,
  factorySymbol,
  RSS_CONNECTION_FACTORY,
}
