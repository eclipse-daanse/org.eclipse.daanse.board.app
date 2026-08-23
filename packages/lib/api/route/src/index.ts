/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/**
 * The route registry contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
/*
 * Ecore-generated model classes live in the implementation package; the
 * types travel with the contract, the constructors do not. Moving the
 * models is a generator concern, noted as follow-up.
 */
import type { RouteDefinition } from 'org.eclipse.daanse.board.app.lib.repository.route'

export type { RouteDefinition }

export interface RouteRegistry {
  registerRoute(route: RouteDefinition): boolean;
  unregisterRoute(name?: string): boolean;
  getRoute(name?: string): RouteDefinition;
  getAllRoutes(): RouteDefinition;
  getAllRoutesArray(): RouteDefinition[];
}

export const ROUTE_REGISTRY_ID = serviceId<RouteRegistry>('RouteRegistry')
export const ROUTE_REGISTRY = Symbol.for(ROUTE_REGISTRY_ID)
