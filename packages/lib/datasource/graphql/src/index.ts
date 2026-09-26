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

import { GraphQLStore, type IGraphQLStoreConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const GRAPHQL_STORE_FACTORY = 'GraphQLStoreFactory'

const factorySymbol = Symbol.for(GRAPHQL_STORE_FACTORY)

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(GRAPHQL_STORE_FACTORY, (config: IGraphQLStoreConfiguration) => {
    if (!GraphQLStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid GraphQLStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(GraphQLStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(GRAPHQL_STORE_FACTORY)
}

export { GraphQLStore, IGraphQLStoreConfiguration, GRAPHQL_STORE_FACTORY, factorySymbol }
