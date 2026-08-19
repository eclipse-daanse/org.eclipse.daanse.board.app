/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Factory } from 'inversify'

import { OgcStaStore } from './classes/OgcSta'
import { FILTER, FILTERRESET, UPDATE_MQTT_SUBSCRIPTIONS, MQTT_UNSUBSCRIBE_ALL } from './interfaces/Constances'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const OGC_STA_STORE_FACTORY = 'OgcStaStoreFactory'

const factorySymbol = Symbol.for(OGC_STA_STORE_FACTORY)

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(OGC_STA_STORE_FACTORY, (config: any) => {
    if (!OgcStaStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid OgcStaStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(OgcStaStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(OGC_STA_STORE_FACTORY)
}

export { OGC_STA_STORE_FACTORY, factorySymbol, FILTER, FILTERRESET, UPDATE_MQTT_SUBSCRIPTIONS, MQTT_UNSUBSCRIBE_ALL }
export type { BoxedDatastream, BoxedThing, BoxedLocation, IOGCSTAData, IOGCSTAConfigartion, IOGCSTAHistoryConfig } from './interfaces/OgcStaConfiguration'
export type { Datastream } from './client'
