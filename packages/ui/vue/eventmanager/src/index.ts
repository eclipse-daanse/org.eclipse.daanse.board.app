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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { NAVIGATION_REGISTRY, type NavigationRegistry, NavigationItem } from 'org.eclipse.daanse.board.app.lib.repository.navigation'
import { ROUTE_REGISTRY, type RouteRegistry, RouteDefinition } from 'org.eclipse.daanse.board.app.lib.repository.route'

// Register Event Manager route
try {
  const routeRegistry = container.get<RouteRegistry>(ROUTE_REGISTRY)
  const eventRoute = new RouteDefinition()
  eventRoute.path = '/events'
  eventRoute.name = 'events'
  eventRoute.component = EventManagerUI

  routeRegistry.registerRoute(eventRoute)
} catch (e) {
  console.warn('Could not register Event Manager route:', e)
}

// Register Event Manager in navigation
try {
  const navRegistry = container.get<NavigationRegistry>(NAVIGATION_REGISTRY)
  const eventManagerNav = new NavigationItem()
  eventManagerNav.id = 'events'
  eventManagerNav.label = 'Event Manager'
  eventManagerNav.icon = 'event'
  eventManagerNav.route = '/events'
  eventManagerNav.routeName = 'events'
  eventManagerNav.order = 15
  eventManagerNav.visible = true

  navRegistry.registerNavigationItem(eventManagerNav)
} catch (e) {
  console.warn('Could not register Event Manager navigation:', e)
}

export { EventManagerUI }
