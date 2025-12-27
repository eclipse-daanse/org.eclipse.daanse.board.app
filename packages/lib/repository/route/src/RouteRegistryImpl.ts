/*
  Copyright (c) 2025 Contributors to the Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import { injectable } from 'inversify'
import { RouteRegistry } from './gen/RouteRegistry'
import { RouteDefinition } from './gen/RouteDefinition'

@injectable()
export class RouteRegistryImpl extends RouteRegistry {
  private routesMap: Map<string, RouteDefinition> = new Map()

  registerRoute(route: RouteDefinition): boolean {
    if (!route.name) {
      console.warn('Cannot register route without name')
      return false
    }

    this.routesMap.set(route.name, route)
    this.routes = Array.from(this.routesMap.values())
    console.log(`Registered route: ${route.name} (${route.path})`)
    return true
  }

  unregisterRoute(name?: string): boolean {
    if (!name) {
      return false
    }
    const removed = this.routesMap.delete(name)
    if (removed) {
      this.routes = Array.from(this.routesMap.values())
      console.log(`Unregistered route: ${name}`)
    }
    return removed
  }

  getRoute(name?: string): RouteDefinition {
    if (!name) {
      return new RouteDefinition()
    }
    return this.routesMap.get(name) || new RouteDefinition()
  }

  getAllRoutes(): RouteDefinition {
    // Note: Ecore generator creates wrong return type - should be RouteDefinition[]
    // We return the array cast as RouteDefinition to match the generated interface
    const routes = Array.from(this.routesMap.values())
    return routes as any as RouteDefinition
  }

  // Correct typed method for actual use
  getAllRoutesArray(): RouteDefinition[] {
    return Array.from(this.routesMap.values())
  }
}
