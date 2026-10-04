/*
  Copyright (c) 2025 Contributors to the Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { RouteRegistryImpl } from './RouteRegistryImpl'
import { RouteRegistry } from 'org.eclipse.daanse.board.app.lib.api.route'
import { ROUTE_REGISTRY_ID, ROUTE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.route'
export { ROUTE_REGISTRY_ID, ROUTE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.route'

export { RouteDefinition } from 'org.eclipse.daanse.board.app.lib.api.route'
export { RouteRegistry } from 'org.eclipse.daanse.board.app.lib.api.route'
export { RouteRegistryImpl } from './RouteRegistryImpl'



/** Singleton ohne eigene Abhaengigkeiten - siehe lib.repository.connection. */
export function activate({ services }: ActivationContext) {
  services.register(ROUTE_REGISTRY_ID, new RouteRegistryImpl())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(ROUTE_REGISTRY_ID)
}

export const identifier = ROUTE_REGISTRY
