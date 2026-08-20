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
} from 'org.eclipse.daanse.board.app.lib.core'
import { preloadedModules } from './preloaded'
import { bundles } from './bundles'
import { ModuleLoader, type ModuleManifest } from '@eclipse-daanse/tsm'
import { installDevtools } from '@eclipse-daanse/tsm/devtools'
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
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})


app.config.globalProperties.$container = container
app.provide('container', container);
app.provide('codeEditorType', 'monaco');
const symbolForApp = Symbol.for('App');
container.bind('App').toConstantValue(app);
/*
 * Zusaetzlich in der Registry: die Container-Bindung oben verwendet den String
 * 'App' als Identifier, waehrend der Rueckfallweg der Registry ueber
 * Symbol.for(id) sucht - er faende sie also nicht. Module, die die App-Instanz
 * brauchen, loesen sie ueber diese Registrierung auf.
 */
services.register('App', app);
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
import 'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart'


import 'org.eclipse.daanse.board.app.ui.vue.plugins.geojson_renderer'

import 'org.eclipse.daanse.board.app.lib.variables'
import {
  // init as initVariableWrapperFactory,
  type VariableWrapperFactory,
} from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import {
  VariableComplexStringWrapper,
  VARIABLECOMPLEXSTRINGWRAPPER,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'






import { identifier as LayoutRepositoryIdentifier, type LayoutRepositoryI }
  from 'org.eclipse.daanse.board.app.lib.repository.layout.page'

import {
  NAVIGATION_REGISTRY_ID,
  type NavigationRegistry,
  NavigationItem
} from 'org.eclipse.daanse.board.app.lib.repository.navigation'
import {
  ROUTE_REGISTRY_ID,
  type RouteRegistry,
  RouteDefinition
} from 'org.eclipse.daanse.board.app.lib.repository.route'

// Register built-in routes
import Configuration from './pages/Configuration.vue'
import SaveLoad from './pages/SaveLoad.vue'

import router from './router'

/**
 * Trägt die anwendungseigenen Seiten in Routen- und Navigationsregistrierung
 * ein und übernimmt anschließend alles Registrierte in den Router.
 *
 * Läuft nach der Modulaktivierung, weil beide Registries seit ihrer
 * Umstellung erst dort entstehen. Vorher stand dieser Block auf Modulebene
 * und griff auf Dienste zu, die zu dem Zeitpunkt gebunden waren, weil der
 * Import sie gebunden hatte — genau die Kopplung, die die Umstellung auflöst.
 */
function seitenEinrichten() {
  // VariableComplexStringWrapper haengt an Vue und bleibt deshalb in der
  // UI-Schicht; die Factory in lib kennt ihn nur ueber diese Registrierung.
  services
    .getRequired<VariableWrapperFactory>('VariableWrapperFactory')
    .registerWrapperType({
      type: VARIABLECOMPLEXSTRINGWRAPPER,
      create: (value: any) => new VariableComplexStringWrapper<string>(value),
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

  const dynamische = routeRegistry as unknown as {
    getAllRoutesArray?: () => Array<Record<string, any>>
  }
  for (const route of dynamische.getAllRoutesArray?.() ?? []) {
    router.addRoute({
      path: route.path,
      name: route.name,
      component: route.component,
      ...(route.meta && { meta: route.meta }),
    })
  }
}




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

/*
 * The whole start runs through the tsm ModuleLoader. Three kinds of modules
 * share one registry and one lifecycle model:
 *
 * - preloaded modules (preloaded.ts): still bundled with the host, their
 *   containers handed over via entryResolver. Order is not declared anywhere:
 *   a module whose required service is missing parks as 'unsatisfied' and
 *   activates in the cascade once the provider registered - tsm#18 at work.
 * - platform modules: preloaded as well; they publish shared libraries.
 * - real bundles (bundles.ts): fetched through their entry URL.
 *
 * The ModuleBootstrapper and the hand-derived ordering it carried are gone -
 * they were transition tools, and the loader owns both jobs now.
 */
const resolvedContainers = new Map<string, unknown>()

const loader = new ModuleLoader({
  serviceRegistry: services,
  hotReload: import.meta.env.DEV,
  continueOnError: true,
  entryResolver: (manifest) => resolvedContainers.get(manifest.id),
})

// The tsm console: tsm.lb(), tsm.services() and friends become available in
// the browser devtools - insight into modules, services and their states.
installDevtools({ loader })

/*
 * Dev reload bridge: the vite plugin in vite.config.ts watches the built
 * bundles and sends this event after every rebuild. A save in a bundle
 * (with `vite build --watch` running there) swaps the module live -
 * a real restart with deactivate/activate, not a component patch.
 */
if (import.meta.hot) {
  import.meta.hot.on('tsm:bundle-changed', ({ id }: { id: string }) => {
    loader.reloadModule(id).catch((error) => {
      console.error(`bundle reload failed for ${id}:`, error)
    })
  })
}

async function start() {
  // Two services the host itself provides: its Vue app instance, and the
  // event bus that lib.core still binds only into the legacy container.
  services.register('App', app)
  services.register('TINY_EMITTER', container.get(identifiers.TINY_EMITTER))

  const platform: Array<[ModuleManifest, () => Promise<unknown>]> = [
    [
      (await import('org.eclipse.daanse.board.app.platform.vue/manifest.json'))
        .default as ModuleManifest,
      () => import('org.eclipse.daanse.board.app.platform.vue'),
    ],
    [
      (await import('org.eclipse.daanse.board.app.platform.compat/manifest.json'))
        .default as ModuleManifest,
      () => import('org.eclipse.daanse.board.app.platform.compat'),
    ],
  ]

  const preloaded = [...platform, ...preloadedModules]
  for (const [manifest, load] of preloaded) {
    resolvedContainers.set(manifest.id, await load())
  }

  loader.register([...preloaded.map(([manifest]) => manifest), ...bundles])
  await loader.loadAll()

  const all = loader.getManifests()
  const active = all.filter((m) => loader.getModule(m.id)?.state === 'active').length
  const parked = loader.getUnsatisfiedModules()
  console.log(`✅ ${active}/${all.length} modules active (${bundles.length} URL bundles)`)
  if (parked.length > 0) {
    console.warn('⏸ unsatisfied:', parked.map((p) => `${p.moduleId} <- ${p.waitingFor.join(',')}`).join('; '))
  }

  seitenEinrichten()
}

start()
  .catch((err) => {
    console.error('❌ start failed:', err, '\ncause:', err?.cause ?? '(none)')
  })
  .finally(() => {
    app.mount('#app')
  })
