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


import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import 'reflect-metadata'

import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

import App from './App.vue'

import { init } from 'org.eclipse.daanse.board.app.lib.module1'
import {
  container,
  identifiers,
  services,
  ModuleBootstrapper,
} from 'org.eclipse.daanse.board.app.lib.core'
import { modules } from './modules'
import { init as initLogger } from 'org.eclipse.daanse.board.app.lib.logger'
import { registerSystemActions } from './systemActions'
import { registerTestActions } from './testActions'

const app = createApp(App)
app.use(createVuestic({
  config: {
    colors: {
      presets: {
        light: {
          primary: '#606060',
          lightPrim: '#cbcbcb',
          orange: '#c29803',
          //active:"rgba(255,201,132,0.25)",
          active: "rgba(147,147,147,0.25)",
          /*secondary: '#E79542',*/
          textPrimary: '#3a3a3a',
        }
      }
    }
  },
}))

init(container)
initLogger(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})


app.config.globalProperties.$container = container
app.provide('container', container);
app.provide('codeEditorType', 'monaco');
const symbolForApp = Symbol.for('App');
container.bind('App').toConstantValue(app);
const pinia = createPinia();
setActivePinia(pinia)
app.use(pinia)

import {
  type PageI,
  identifier as PageReoIdentifier,
  type PageRegistryI
} from 'org.eclipse.daanse.board.app.lib.repository.page'
// TODO: Move this to initialization of the app
import {
  type ConnectionRepository,
  identifier as ConnectionIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import {
  DatasourceRepository,
  identifier as DatasourceIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import 'org.eclipse.daanse.board.app.lib.connection.graphql'
import 'org.eclipse.daanse.board.app.lib.connection.websocket'
import 'org.eclipse.daanse.board.app.lib.connection.mqtt'
import 'org.eclipse.daanse.board.app.lib.datasource.rest'
import 'org.eclipse.daanse.board.app.lib.datasource.csv'
import 'org.eclipse.daanse.board.app.lib.datasource.rss'
import 'org.eclipse.daanse.board.app.lib.datasource.graphql'
import 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import 'org.eclipse.daanse.board.app.lib.datasource.sql_xmla'
import 'org.eclipse.daanse.board.app.lib.datasource.websocket'
import 'org.eclipse.daanse.board.app.lib.datasource.kpi_tmp'
import 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.lib.datasource.sparql'
import 'org.eclipse.daanse.board.app.lib.datasource.valhalla'
import 'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart'

import 'org.eclipse.daanse.board.app.lib.repository.navigation'
import 'org.eclipse.daanse.board.app.lib.repository.route'

import 'org.eclipse.daanse.board.app.ui.vue.plugins.geojson_renderer'
import 'org.eclipse.daanse.board.app.ui.vue.eventmanager'

import 'org.eclipse.daanse.board.app.lib.variables'
import {
  // init as initVariableWrapperFactory,
  identifier as variableFactoryWrapperIdentifier,
  type VariableWrapperFactory,
} from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import 'org.eclipse.daanse.board.app.lib.repository.variable'
import {
  VariableComplexStringWrapper,
  VARIABLECOMPLEXSTRINGWRAPPER,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'

// VariableComplexStringWrapper haengt an Vue und bleibt deshalb in der
// UI-Schicht; die Factory in lib kennt ihn nur ueber diese Registrierung.
container
  .get<VariableWrapperFactory>(variableFactoryWrapperIdentifier)
  .registerWrapperType({
    type: VARIABLECOMPLEXSTRINGWRAPPER,
    create: (value: any) => new VariableComplexStringWrapper<string>(value),
  })




import { identifier as LayoutRepositoryIdentifier, type LayoutRepositoryI }
  from 'org.eclipse.daanse.board.app.lib.repository.layout.page'

import {
  NAVIGATION_REGISTRY,
  type NavigationRegistry,
  NavigationItem
} from 'org.eclipse.daanse.board.app.lib.repository.navigation'
import {
  ROUTE_REGISTRY,
  type RouteRegistry,
  RouteDefinition
} from 'org.eclipse.daanse.board.app.lib.repository.route'

// Register built-in routes
import Configuration from './pages/Configuration.vue'
import SaveLoad from './pages/SaveLoad.vue'

const routeRegistry = container.get<RouteRegistry>(ROUTE_REGISTRY)

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

// Import router AFTER all packages are loaded so routes can be registered
import router from './router'

// Add dynamically registered routes to router
const routeRegistryForDynamic = container.get<RouteRegistry>(ROUTE_REGISTRY) as any
const allRoutes = routeRegistryForDynamic.getAllRoutesArray
  ? routeRegistryForDynamic.getAllRoutesArray()
  : []
allRoutes.forEach((route: any) => {
  router.addRoute({
    path: route.path,
    name: route.name,
    component: route.component,
    ...(route.meta && { meta: route.meta })
  })
  console.log('Added dynamic route:', route.name, route.path)
})

const navRegistry = container.get<NavigationRegistry>(NAVIGATION_REGISTRY)

// Register navigation items
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




if (document.readyState === 'complete') {
  // load-Event ist schon vorbei
  onLoaded()
} else {
  window.addEventListener('load', onLoaded)
}
function onLoaded() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none'
  }
}

// variableRepository.registerVariableType('constant', {
//   Variable: ConstantVariableSymbol,
//   Settings: null as any,
// })

/**
 * Grunddienste, die umgestellte Module in `activate` bereits benötigen —
 * allen voran i18next, an das sich die Sprachmodule hängen.
 */
async function loadGrunddienste() {
  await import('org.eclipse.daanse.board.app.lib.i18next')
  await import('org.eclipse.daanse.board.app.ui.vue.plugins.i18next')
  await import('org.eclipse.daanse.board.app.lib.settings.manager')
}

/**
 * Pakete, die die registrierten Typen der Module bereits benutzen.
 *
 * Muss **nach** der Modulaktivierung laufen — zwei Beispiele aus diesem
 * Bündel: der Endpointfinder legt beim Laden eine REST-Verbindung an, und der
 * Persistenz-Loader stellt ein gespeichertes Board wieder her. Beides setzt
 * registrierte Verbindungs- und Datenquellentypen voraus. Vor der Umstellung
 * war das nur dadurch gegeben, dass jene Pakete weiter oben im Importblock
 * standen.
 */
async function loadNachModulen() {
  await import('org.eclipse.daanse.board.app.ui.vue.plugins.endpointfinder')

  await import('org.eclipse.daanse.board.app.lib.repository.persistence')
  await import('org.eclipse.daanse.board.app.lib.persistence.local')
  await import('org.eclipse.daanse.board.app.lib.persistence.util')
  await import('org.eclipse.daanse.board.app.lib.persistence.rest')
  await import('org.eclipse.daanse.board.app.lib.persistence.git')
  await import('org.eclipse.daanse.board.app.ui.vue.persistence.git')
  await import('org.eclipse.daanse.board.app.lib.persistence.loader')
  await import('org.eclipse.daanse.board.app.ui.vue.page_provider')
}

//initSettingsManager(container)

app.config.globalProperties.$container = container
app.provide('container', container)
app.provide('codeEditorType', 'monaco')



app.use(router)

// Register system actions (async, but app can mount before it completes)
registerSystemActions(router).then(() => {
  console.log('✅ System actions registered')
}).catch((err) => {
  console.error('❌ Failed to register system actions:', err)
})

registerTestActions().then(() => {
  console.log('✅ Test actions registered')
}).catch((err) => {
  console.error('❌ Failed to register test actions:', err)
})

// Module aktivieren, bevor die Oberfläche montiert wird — sonst fehlten ihre
// Beiträge (Widgets, Datenquellen, ...) beim ersten Rendern.
const bootstrapper = new ModuleBootstrapper(services, {
  debug: (msg, ...args) => console.debug(msg, ...args),
  info: (msg, ...args) => console.info(msg, ...args),
  warn: (msg, ...args) => console.warn(msg, ...args),
  error: (msg, ...args) => console.error(msg, ...args),
})

// Startreihenfolge, jetzt explizit statt als Nebenwirkung der Importzeilen:
// Grunddienste, dann die Module, dann die Wiederherstellung gespeicherter
// Boards — die setzt die registrierten Typen der Module bereits voraus.
loadGrunddienste()
  .then(() => bootstrapper.activateAll(modules))
  .then(({ activated }) => {
    console.log(`✅ ${activated.length} Module aktiviert`)
    return loadNachModulen()
  })
  .catch((err) => {
    // Die Ursache mit ausgeben - der Bootstrapper hängt sie als `cause` an,
    // und ohne sie steht in der Konsole nur, welches Modul scheiterte.
    console.error('❌ Start fehlgeschlagen:', err, '\nUrsache:', err?.cause ?? '(keine)')
  })
  .finally(() => {
    app.mount('#app')
  })
