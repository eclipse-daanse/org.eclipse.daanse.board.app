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
 * The application shell as a bundle: the frame (App.vue), navigation,
 * router, editors and built-in pages. The host launcher no longer creates
 * a Vue app at all - the shell does, when the loader activates it, and
 * withdraws it on deactivate. `tsm.unload('app.shell')` takes the whole
 * user interface down and `load` brings it back, exactly like any widget.
 */

import { createApp, type App as VueApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
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
import type { VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import type { EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import type { TinyEmitter } from 'tiny-emitter'
import {
  VariableComplexStringWrapper,
  VARIABLECOMPLEXSTRINGWRAPPER,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import App from './App.vue'
import router from './router'
import Configuration from './pages/Configuration.vue'
import SaveLoad from './pages/SaveLoad.vue'
import { registerSystemActions } from './systemActions'
import { registerTestActions } from './testActions'
import { provideVariablesStoreDependencies } from './stores/VariablesPinia'

let app: VueApp | undefined

export async function activate({ services, log }: ActivationContext) {
  app = createApp(App)

  app.use(createVuestic({
    config: {
      colors: {
        presets: {
          light: {
            primary: '#606060',
            lightPrim: '#cbcbcb',
            orange: '#c29803',
            active: 'rgba(147,147,147,0.25)',
            textPrimary: '#3a3a3a',
          },
        },
      },
    },
  }))

  const pinia = createPinia()
  setActivePinia(pinia)
  app.use(pinia)
  app.use(router)
  app.provide('codeEditorType', 'monaco')

  /*
   * Vue DI bridge: every service is provided into this app under its string
   * id AND under Symbol.for(id) - the identifier constants the packages
   * export. Components declare dependencies with plain inject(). Installed
   * before mount and kept live through the registry listener, so components
   * created later see services registered later.
   */
  const registry = services as ActivationContext['services'] & {
    addListener?(l: { onServiceEvent(e: { serviceId: string }): void }): void
  }
  const provide = (id: string) => {
    const service = services.get(id)
    app?.provide(id, service)
    app?.provide(Symbol.for(id), service)
  }
  for (const id of services.getServiceIds()) provide(id)
  registry.addListener?.({ onServiceEvent: (event) => provide(event.serviceId) })

  // The one service the shell owns: the app instance it just created.
  services.register('App', app)

  // Store dependencies, closed over at the module boundary
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

  // Built-in pages and their navigation entries
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

  // Routes other modules contributed before the shell came up
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

  // One failing action set must not take the other down
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

  app.mount('#app')
  log.info('shell mounted')
}

export function deactivate({ services }: ActivationContext) {
  const routeRegistry = services.getRequired<RouteRegistry>(ROUTE_REGISTRY_ID)
  routeRegistry.unregisterRoute('config')
  routeRegistry.unregisterRoute('save')

  const navRegistry = services.getRequired<NavigationRegistry>(NAVIGATION_REGISTRY_ID)
  navRegistry.unregisterNavigationItem('config')
  navRegistry.unregisterNavigationItem('save')

  // 'App' was registered through the scoped context and is withdrawn by the
  // loader; unmounting is ours.
  app?.unmount()
  app = undefined
}
