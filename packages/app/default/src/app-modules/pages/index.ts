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

/*
 * The application's own contributions - pages, navigation entries, actions -
 * packaged as a module like everything else. The host launcher no longer
 * calls any of this; the loader runs it once its required registries exist.
 */

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import {
  NAVIGATION_REGISTRY_ID,
  type NavigationRegistry,
  NavigationItem,
} from 'org.eclipse.daanse.board.app.lib.repository.navigation'
import {
  ROUTE_REGISTRY_ID,
  type RouteRegistry,
  RouteDefinition,
} from 'org.eclipse.daanse.board.app.lib.repository.route'
import type { VariableWrapperFactory } from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import {
  VariableComplexStringWrapper,
  VARIABLECOMPLEXSTRINGWRAPPER,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import Configuration from '../../pages/Configuration.vue'
import SaveLoad from '../../pages/SaveLoad.vue'
import router from '../../router'
import { provideVariablesStoreDependencies } from '../../stores/VariablesPinia'
import type { VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import type { TinyEmitter } from 'tiny-emitter'
import type { EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import { registerSystemActions } from '../../systemActions'
import { registerTestActions } from '../../testActions'

export async function activate({ services, log }: ActivationContext) {
  provideVariablesStoreDependencies({
    repository: services.getRequired<VariableRepository>('VariableRepository'),
    eventBus: services.getRequired<TinyEmitter>('TINY_EMITTER'),
  })

  // VariableComplexStringWrapper depends on Vue and therefore lives in the
  // UI layer; the factory in lib only knows it through this registration.
  services
    .getRequired<VariableWrapperFactory>('VariableWrapperFactory')
    .registerWrapperType({
      type: VARIABLECOMPLEXSTRINGWRAPPER,
      create: (value: unknown) => new VariableComplexStringWrapper<string>(value as string),
    })

  const routeRegistry = services.getRequired<RouteRegistry>(ROUTE_REGISTRY_ID)

  const configRoute = new RouteDefinition()
  configRoute.path = '/configuration'
  configRoute.name = 'config'
  configRoute.component = Configuration
  routeRegistry.registerRoute(configRoute)

  const saveRoute = new RouteDefinition()
  saveRoute.path = '/save'
  saveRoute.name = 'save'
  saveRoute.component = SaveLoad
  routeRegistry.registerRoute(saveRoute)

  const navRegistry = services.getRequired<NavigationRegistry>(NAVIGATION_REGISTRY_ID)

  const configNav = new NavigationItem()
  configNav.id = 'config'
  configNav.label = 'Environment variables'
  configNav.icon = 'settings'
  configNav.route = '/configuration'
  configNav.routeName = 'config'
  configNav.order = 10
  configNav.visible = true
  navRegistry.registerNavigationItem(configNav)

  const saveNav = new NavigationItem()
  saveNav.id = 'save'
  saveNav.label = 'Store and Restore'
  saveNav.icon = 'cloud_sync'
  saveNav.route = '/save'
  saveNav.routeName = 'save'
  saveNav.order = 20
  saveNav.visible = true
  navRegistry.registerNavigationItem(saveNav)

  // Everything registered so far - including routes other modules
  // contributed - goes into the router.
  const dynamic = routeRegistry as unknown as {
    getAllRoutesArray?: () => Array<Record<string, unknown>>
  }
  for (const route of dynamic.getAllRoutesArray?.() ?? []) {
    router.addRoute({
      path: route.path as string,
      name: route.name as string,
      component: route.component,
      ...(route.meta ? { meta: route.meta } : {}),
    } as Parameters<typeof router.addRoute>[0])
  }

  // One failing action set must not take the other down; both used to be
  // fire-and-forget next to the mount and hid their timing behind the race.
  try {
    await registerSystemActions(
      router,
      services.getRequired<EventActionsRegistry>('EventActionsRegistry'),
      services.getRequired<TinyEmitter>('TINY_EMITTER'),
    )
    log.info('system actions registered')
  } catch (error) {
    log.error('system actions failed', error)
  }
  try {
    await registerTestActions(services.getRequired<EventActionsRegistry>('EventActionsRegistry'))
    log.info('test actions registered')
  } catch (error) {
    log.error('test actions failed', error)
  }
}

export function deactivate({ services }: ActivationContext) {
  const routeRegistry = services.getRequired<RouteRegistry>(ROUTE_REGISTRY_ID)
  routeRegistry.unregisterRoute('config')
  routeRegistry.unregisterRoute('save')

  const navRegistry = services.getRequired<NavigationRegistry>(NAVIGATION_REGISTRY_ID)
  navRegistry.unregisterNavigationItem('config')
  navRegistry.unregisterNavigationItem('save')
}
