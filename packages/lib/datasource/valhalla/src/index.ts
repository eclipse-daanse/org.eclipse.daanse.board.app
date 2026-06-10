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

import { Factory } from 'inversify'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  ValhallaStore,
  type IValhallaStoreConfiguration,
} from './classes'

const factorySymbol = Symbol.for('ValhallaStoreFactory')

if (!container.isBound(ValhallaStore)) {
  container.bind(ValhallaStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container
    .bind<Factory<ValhallaStore>>(factorySymbol)
    .toFactory(() => {
      return (config: any) => {
        if (!ValhallaStore.validateConfiguration(config)) {
          throw new Error(
            'Invalid ValhallaStore configuration. ' +
              'Please provide a valid configuration.',
          )
        }
        const store = container.get<ValhallaStore>(ValhallaStore)
        store.init(config)
        return store
      }
    })
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
export { factorySymbol }