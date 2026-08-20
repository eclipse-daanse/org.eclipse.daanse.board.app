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

/*
 * The host launcher. Everything the application contributes - pages,
 * navigation, actions - lives in modules (see preloaded.ts and bundles.ts);
 * what remains here is bootstrapping the frame: Vue app, UI kit, router,
 * store, the legacy container bridge, and the tsm ModuleLoader.
 */

import 'reflect-metadata'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { ModuleLoader, type ModuleManifest } from '@eclipse-daanse/tsm'
import { installDevtools } from '@eclipse-daanse/tsm/devtools'
import { services } from 'org.eclipse.daanse.board.app.lib.core'
import App from './App.vue'
import router from './router'
import { preloadedModules } from './preloaded'
import { bundles } from './bundles'

const app = createApp(App)

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

/*
 * Vue DI bridge: every service is provided into the Vue app under its
 * string id AND under Symbol.for(id) - which is exactly the `identifier`
 * constant the packages already export. A component declares its dependency
 * with plain Vue means:
 *
 *   const repo = inject<WidgetRepository>(identifier)
 *
 * No container object, no registry object, no lookup API in components -
 * the dependency is named at the consumption site and Vue delivers it.
 * Services registered later (bundle loads, reloads) become visible to
 * components created after that point; components track liveness through
 * the repositories' own change notifications where they need it.
 */
function bridgeServicesIntoVue() {
  const provide = (id: string) => {
    const service = services.get(id)
    app.provide(id, service)
    app.provide(Symbol.for(id), service)
  }
  for (const id of services.getServiceIds()) provide(id)
  services.addListener({
    onServiceEvent(event) {
      provide(event.serviceId)
    },
  })
}

app.provide('codeEditorType', 'monaco')

function hidePreloader() {
  const preloader = document.getElementById('preloader')
  if (preloader) preloader.style.display = 'none'
}
if (document.readyState === 'complete') hidePreloader()
else window.addEventListener('load', hidePreloader)

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
  // The single service the host itself provides: its Vue app instance.
  // Only the composition root can construct it; everything else that used
  // to be registered here has an owning module now (platform.system).
  services.register('App', app)

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

  // Before loadAll: modules may mount components during their activate
  // (the endpoint finder does), and those components inject services - the
  // bridge's listener has to be feeding the provides while loading runs.
  bridgeServicesIntoVue()

  loader.register([...preloaded.map(([manifest]) => manifest), ...bundles])
  await loader.loadAll()

  const all = loader.getManifests()
  const active = all.filter((m) => loader.getModule(m.id)?.state === 'active').length
  const parked = loader.getUnsatisfiedModules()
  console.log(`✅ ${active}/${all.length} modules active (${bundles.length} URL bundles)`)
  if (parked.length > 0) {
    console.warn('⏸ unsatisfied:', parked.map((p) => `${p.moduleId} <- ${p.waitingFor.join(',')}`).join('; '))
  }
}

start()
  .catch((err) => {
    console.error('❌ start failed:', err, '\ncause:', err?.cause ?? '(none)')
  })
  .finally(() => {
    app.mount('#app')
  })
