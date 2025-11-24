/*
  Copyright (c) 2025 Contributors to the Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { RouteRegistryImpl } from './RouteRegistryImpl'
import { RouteRegistry } from './gen/RouteRegistry'

export { RouteDefinition } from './gen/RouteDefinition'
export { RouteRegistry } from './gen/RouteRegistry'
export { RouteRegistryImpl } from './RouteRegistryImpl'

export const ROUTE_REGISTRY = Symbol.for('RouteRegistry')

if (!container.isBound(ROUTE_REGISTRY)) {
  container.bind<RouteRegistry>(ROUTE_REGISTRY).to(RouteRegistryImpl).inSingletonScope()
}

export const identifier = ROUTE_REGISTRY
