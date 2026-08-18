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

import { XmlaConnection, type IXmlaConnectionConfiguration } from './classes'
import { XMLAApi } from './classes/xml'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const XMLA_CONNECTION_FACTORY = 'XmlaConnectionFactory'

const factorySymbol = Symbol.for(XMLA_CONNECTION_FACTORY)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
function createXmlaConnection(config: IXmlaConnectionConfiguration) {
  if (!XmlaConnection.validateConfiguration(config)) {
    throw new Error(
      'Invalid XmlaConnection configuration. Please provide a valid configuration.',
    )
  }

  const connection = new XmlaConnection()
  connection.init(config)

  return connection
}

export function activate({ services }: ActivationContext) {
  services.register(XMLA_CONNECTION_FACTORY, createXmlaConnection)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(XMLA_CONNECTION_FACTORY)
}

export {
  XmlaConnection,
  IXmlaConnectionConfiguration,
  factorySymbol,
  type XMLAApi,
  XMLA_CONNECTION_FACTORY,
}
