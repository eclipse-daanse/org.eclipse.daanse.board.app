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
  GraphQLConnection,
  type IGraphQLConnectionConfiguration,
} from './classes'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const GRAPHQL_CONNECTION_FACTORY = 'GraphQLConnectionFactory'

const factorySymbol = Symbol.for(GRAPHQL_CONNECTION_FACTORY)

/**
 * Erzeugt eine Verbindung aus einer Konfiguration.
 *
 * Die Klasse hat keine Abhaengigkeiten, deshalb `new` statt eines
 * Umwegs ueber den Container. Jeder Aufruf liefert eine eigene
 * Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(GRAPHQL_CONNECTION_FACTORY, (config: IGraphQLConnectionConfiguration) => {
    if (!GraphQLConnection.validateConfiguration(config)) {
      throw new Error(
        'Invalid GraphQLConnection configuration. Please provide a valid configuration.',
      )
    }

    const connection = new GraphQLConnection()
    connection.init(config)

    return connection
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(GRAPHQL_CONNECTION_FACTORY)
}

export {
  type GraphQLConnection,
  IGraphQLConnectionConfiguration,
  factorySymbol,
}
