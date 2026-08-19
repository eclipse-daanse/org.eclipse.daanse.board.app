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
  ValhallaStore,
  type IValhallaStoreConfiguration,
} from './classes'

/** Dienst-ID im Namensraum der ServiceRegistry; `factorySymbol` ist das dazu passende Symbol. */
const VALHALLA_STORE_FACTORY = 'ValhallaStoreFactory'

const factorySymbol = Symbol.for(VALHALLA_STORE_FACTORY)

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(VALHALLA_STORE_FACTORY, (config: any) => {
    if (!ValhallaStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid ValhallaStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(ValhallaStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(VALHALLA_STORE_FACTORY)
}

export {
  type ValhallaStore,
  type IValhallaStoreConfiguration,
  SET_WAYPOINTS,
  SET_COSTING,
  OPTIMIZE_ROUTE,
} from './classes'
export type {
  Waypoint,
  CostingModel,
  ValhallaRouteResult,
  RouteLeg,
  RouteManeuver,
  RouteSummary,
} from './classes'
export { VALHALLA_STORE_FACTORY, factorySymbol }
