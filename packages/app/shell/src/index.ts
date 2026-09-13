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

import { APP, TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'
import { VARIABLE_WRAPPER_FACTORY } from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import { EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import { VARIABLE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { createApp, type App as VueApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { NAVIGATION_REGISTRY_ID, type NavigationRegistry } from 'org.eclipse.daanse.board.app.lib.api.navigation'
import { NavigationItem } from 'org.eclipse.daanse.board.app.lib.api.navigation'
import { ROUTE_REGISTRY_ID, type RouteRegistry } from 'org.eclipse.daanse.board.app.lib.api.route'
import { RouteDefinition } from 'org.eclipse.daanse.board.app.lib.api.route'
import type { VariableWrapperFactory } from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import type { VariableRepository } from 'org.eclipse.daanse.board.app.lib.api.variable'
import type { EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { TinyEmitter } from 'tiny-emitter'
import {
  VariableComplexStringWrapper,
  VARIABLECOMPLEXSTRINGWRAPPER,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import App from './App.vue'
import router from './router'
import Configuration from './pages/Configuration.vue'
import Appearance from './pages/Appearance.vue'
import { initTheme } from './theme/useTheme'
import { initBoardBackdrop } from './composables/useBoardBackdrop'
import { initGridSnap } from './composables/useGridSnap'
import { registerSystemActions } from './systemActions'
import { registerTestActions } from './testActions'
import {
  CONNECTION_REPOSITORY,
  type ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'

let app: VueApp | undefined

export async function activate({ services, log }: ActivationContext) {
  /*
   * Before the first view: main.css already carries a full set of values, so
   * this only replaces them where the person chose something else.
   */
  initTheme()
  initBoardBackdrop()
  initGridSnap()

  app = createApp(App)

  /*
   * Vuestic palette, aligned with the design tokens in assets/main.css
   * (which come from docs/mdx-workbench-layout-mockups.html). Keep the two
   * in step: these values are what the va-* components paint with, the CSS
   * tokens are what everything else uses.
   */
  app.use(createVuestic({
    config: {
      colors: {
        presets: {
          light: {
            primary: '#2b5599',
            secondary: '#5c5c55',
            success: '#1f6f4a',
            info: '#2b5599',
            danger: '#b02a1c',
            warning: '#8a5a0c',
            lightPrim: '#d5d5d0',
            orange: '#c08a10',
            active: 'rgba(43,85,153,0.10)',
            backgroundPrimary: '#f8f8f6',
            backgroundSecondary: '#ffffff',
            backgroundElement: '#efefec',
            backgroundBorder: '#d5d5d0',
            textPrimary: '#24241f',
            textInverted: '#ffffff',
          },
          dark: {
            primary: '#86aef0',
            secondary: '#9d9d95',
            success: '#6cc79a',
            info: '#86aef0',
            danger: '#ec8189',
            warning: '#dfb069',
            lightPrim: '#3a3a36',
            orange: '#dfab35',
            active: 'rgba(134,174,240,0.16)',
            backgroundPrimary: '#262624',
            backgroundSecondary: '#2d2d2b',
            backgroundElement: '#1f1f1e',
            backgroundBorder: '#3a3a36',
            textPrimary: '#dcdcd7',
            textInverted: '#12120f',
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
  services.register(APP, app)

  /*
   * What an empty workspace starts with.
   *
   * It used to be a hard-coded entry in the connections store, which is
   * both the wrong layer for it and the reason it was never registered with
   * anything. Deciding what an application opens with is the application's
   * business, so it is here - and only when nothing has been loaded, so a
   * stored board is never overwritten.
   */
  const connectionRepository = services.getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
  const datasourceRepository = services.getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
  if (connectionRepository.getConnections().length === 0) {
    /*
     * Created without a type, then filled in, then saved once. Creating
     * with the type would build the live object straight away - under the
     * generated uid, and from a configuration that is not finished yet.
     * A source would be rejected outright for naming no connection.
     */
    const connection = connectionRepository.createConnection('')
    connection.uid = 'test'
    connection.name = 'Test Connection 01'
    connection.type = 'rest'
    connection.config = { url: 'https://jsonplaceholder.typicode.com/' }
    connectionRepository.saveConnection(connection)

    const source = datasourceRepository.createDatasource('')
    source.uid = 'test_ds'
    source.name = 'Test DataSource 01'
    source.type = 'rest'
    source.connection = connection
    source.config = { resourceUrl: 'posts' }
    datasourceRepository.saveDatasource(source)
  }

  // VariableComplexStringWrapper depends on Vue and therefore lives in the
  // UI layer; the factory in lib only knows it through this registration.
  services
    .getRequired(VARIABLE_WRAPPER_FACTORY)
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

  const appearanceRoute = new RouteDefinition()
  appearanceRoute.path = '/appearance'
  appearanceRoute.name = 'appearance'
  appearanceRoute.component = Appearance
  routeRegistry.registerRoute(appearanceRoute)

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

  /*
   * Storing and restoring is deliberately not an area of its own: it is
   * reached where it is needed - from the launcher to open a stored
   * workspace, and from the topbar of an open board to store it. The
   * route stays registered above; only the rail entry is gone.
   */

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

  /*
   * A page opened straight at /configuration or /appearance rendered
   * nothing: those routes did not exist when the router first resolved the
   * url. Point it at the address bar now that they do - and read the url
   * from the browser, because this runs before the first navigation, when
   * the router still reports its start location rather than where we are.
   */
  const opened = window.location.pathname + window.location.search + window.location.hash
  if (router.resolve(opened).matched.length && router.currentRoute.value.fullPath !== opened) {
    router.replace(opened)
  }

  // One failing action set must not take the other down
  try {
    await registerSystemActions(
      router,
      services.getRequired(EVENT_ACTIONS_REGISTRY_ID),
      services.getRequired(TINY_EMITTER),
    )
    log.info('system actions registered')
  } catch (error) {
    log.error('system actions failed', error)
  }
  try {
    await registerTestActions(services.getRequired(EVENT_ACTIONS_REGISTRY_ID))
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
