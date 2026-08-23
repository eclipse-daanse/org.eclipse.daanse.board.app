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

import EventManagerUI from './components/EventManagerUI.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { NAVIGATION_REGISTRY_ID, type NavigationRegistry } from 'org.eclipse.daanse.board.app.lib.api.navigation'
import { NavigationItem } from 'org.eclipse.daanse.board.app.lib.repository.navigation'
import { ROUTE_REGISTRY_ID, type RouteRegistry } from 'org.eclipse.daanse.board.app.lib.api.route'
import { RouteDefinition } from 'org.eclipse.daanse.board.app.lib.repository.route'

const ROUTE_NAME = 'events'
const NAV_ID = 'events'

/*
 * Vorher stand beides auf Modulebene, jeweils in try/catch: fehlte eine der
 * Registries, verschwand der Event-Manager still aus Navigation und Router.
 * Als Modul ist die Bedingung deklariert statt abgefangen - fehlt eine
 * Registry, bricht die Aktivierung mit Grund ab.
 */
export function activate({ services }: ActivationContext) {
  const routeRegistry = services.getRequired<RouteRegistry>(ROUTE_REGISTRY_ID)
  const eventRoute = new RouteDefinition()
  eventRoute.path = '/events'
  eventRoute.name = ROUTE_NAME
  eventRoute.component = EventManagerUI
  routeRegistry.registerRoute(eventRoute)

  const navRegistry = services.getRequired<NavigationRegistry>(NAVIGATION_REGISTRY_ID)
  const eventManagerNav = new NavigationItem()
  eventManagerNav.id = NAV_ID
  eventManagerNav.label = 'Event Manager'
  eventManagerNav.icon = 'event'
  eventManagerNav.route = '/events'
  eventManagerNav.routeName = ROUTE_NAME
  eventManagerNav.order = 15
  eventManagerNav.visible = true
  navRegistry.registerNavigationItem(eventManagerNav)
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<RouteRegistry>(ROUTE_REGISTRY_ID).unregisterRoute(ROUTE_NAME)
  services
    .getRequired<NavigationRegistry>(NAVIGATION_REGISTRY_ID)
    .unregisterNavigationItem(NAV_ID)
}

export { EventManagerUI }
