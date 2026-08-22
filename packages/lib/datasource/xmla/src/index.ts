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

import { XmlaStore, type IXmlaStoreConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

/** Typed service id - the name and the contract declared once, here. */
const XMLA_STORE_FACTORY = serviceId<(config: IXmlaStoreConfiguration) => XmlaStore>('XmlaStoreFactory')

const factorySymbol = Symbol.for(XMLA_STORE_FACTORY)

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(XMLA_STORE_FACTORY, (config: IXmlaStoreConfiguration) => {
    if (!XmlaStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid XmlaStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(XmlaStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(XMLA_STORE_FACTORY)
}

export { XmlaStore, IXmlaStoreConfiguration, XMLA_STORE_FACTORY, factorySymbol }
