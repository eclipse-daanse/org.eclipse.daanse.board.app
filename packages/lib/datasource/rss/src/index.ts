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

import { RssStore, type IRssStoreConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

/** Typed service id - the name and the contract declared once, here. */
const RSS_STORE_FACTORY = serviceId<(config: IRssStoreConfiguration) => RssStore>('RssStoreFactory')

const factorySymbol = Symbol.for(RSS_STORE_FACTORY)

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(RSS_STORE_FACTORY, (config: IRssStoreConfiguration) => {
    if (!RssStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid RssStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(RssStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(RSS_STORE_FACTORY)
}

export { RssStore, IRssStoreConfiguration, RSS_STORE_FACTORY, factorySymbol }
