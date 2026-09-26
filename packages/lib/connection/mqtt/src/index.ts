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

import { MQTTConnection, type IMQTTConnectionConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const MQTT_CONNECTION_FACTORY = 'MQTTConnectionFactory'

const factorySymbol = Symbol.for(MQTT_CONNECTION_FACTORY)

/**
 * Erzeugt eine Verbindung aus einer Konfiguration.
 *
 * `construct` statt `new`: die Klasse loest ihren Logger ueber
 * `@inject` auf. Jeder Aufruf liefert eine eigene
 * Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(MQTT_CONNECTION_FACTORY, (config: IMQTTConnectionConfiguration) => {
    if (!MQTTConnection.validateConfiguration(config)) {
      throw new Error(
        'Invalid MQTTConnection configuration. Please provide a valid configuration.',
      )
    }

    const connection = services.construct(MQTTConnection)
    connection.init(config)

    return connection
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(MQTT_CONNECTION_FACTORY)
}

export { MQTTConnection, IMQTTConnectionConfiguration, factorySymbol }
