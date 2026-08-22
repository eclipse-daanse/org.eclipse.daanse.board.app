/*
  Copyright (c) 2025 Contributors to the Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import { RouteRegistryImpl } from './RouteRegistryImpl'
import { RouteRegistry } from './gen/RouteRegistry'

export { RouteDefinition } from './gen/RouteDefinition'
export { RouteRegistry } from './gen/RouteRegistry'
export { RouteRegistryImpl } from './RouteRegistryImpl'

/** Typed service id - the name and the contract declared once, here. */
export const ROUTE_REGISTRY_ID = serviceId<RouteRegistryImpl>('RouteRegistry')

export const ROUTE_REGISTRY = Symbol.for(ROUTE_REGISTRY_ID)

/** Singleton ohne eigene Abhaengigkeiten - siehe lib.repository.connection. */
export function activate({ services }: ActivationContext) {
  services.register(ROUTE_REGISTRY_ID, new RouteRegistryImpl())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(ROUTE_REGISTRY_ID)
}

export const identifier = ROUTE_REGISTRY
