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
import { RestStore, type IRestStoreConfiguration } from './classes'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const REST_STORE_FACTORY = 'RestStoreFactory'

const factorySymbol = Symbol.for(REST_STORE_FACTORY)

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(REST_STORE_FACTORY, (config: any) => {
    if (!RestStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid RestStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(RestStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(REST_STORE_FACTORY)
}

// const symbol = Symbol.for('RestStore')

// const init = (container: Container) => {
//   container.bind(symbol).toConstantValue(RestStore);
// }

export { type RestStore, IRestStoreConfiguration, REST_STORE_FACTORY, factorySymbol }
