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
 * The launcher - all that is left of the host.
 *
 * It owns nothing the user sees: the user interface is the app.shell
 * bundle, activated by the loader like every widget. What remains here is
 * what a framework launcher legitimately is: create the registry and the
 * loader, hand over the still-statically-bundled module containers, name
 * the manifests, start. The OSGi analogue is the framework launcher, which
 * is itself not a bundle.
 */

import 'reflect-metadata'
import { initTsmRuntime, ModuleLoader, type ModuleManifest } from '@eclipse-daanse/tsm'
import { installDevtools } from '@eclipse-daanse/tsm/devtools'
import * as libCore from 'org.eclipse.daanse.board.app.lib.core'
import { services } from 'org.eclipse.daanse.board.app.lib.core'
import { bundles } from './bundles'

const resolvedContainers = new Map<string, unknown>()

const loader = new ModuleLoader({
  serviceRegistry: services,
  hotReload: import.meta.env.DEV,
  continueOnError: true,
  entryResolver: (manifest) => resolvedContainers.get(manifest.id),
})

// The tsm console: tsm.lb(), tsm.services() and friends in the devtools
installDevtools({ loader })

/*
 * Dev reload bridge: the vite plugin in vite.config.ts watches the built
 * bundles and sends this event after every rebuild. This includes the
 * shell - saving in app.shell swaps the whole user interface live.
 */
if (import.meta.hot) {
  import.meta.hot.on('tsm:bundle-changed', ({ id }: { id: string }) => {
    loader.reloadModule(id).catch((error) => {
      console.error(`bundle reload failed for ${id}:`, error)
    })
  })
}

function hidePreloader() {
  const preloader = document.getElementById('preloader')
  if (preloader) preloader.style.display = 'none'
}
if (document.readyState === 'complete') hidePreloader()
else window.addEventListener('load', hidePreloader)

async function start() {
  /*
   * The framework publishes itself: the boot screen (and any diagnostic
   * bundle) consumes the loader as a service. The OSGi analogue is the
   * system bundle registering the framework's own services - the one
   * registration a launcher legitimately makes.
   */
  services.register('ModuleLoader', loader)

  /*
   * The system library: lib.core is the bridge to this very registry, so it
   * can only ever come from the launcher - a bundle-built copy would carry
   * its own registry instance. The OSGi analogue is the system bundle
   * exporting the framework packages.
   */
  initTsmRuntime().register(
    'org.eclipse.daanse.board.app.lib.core',
    libCore,
    '0.0.1-next.1',
    'system',
  )

  /*
   * Boot screen first, explicitly, before anything else is even registered:
   * a progress display that loads after the modules it should show would
   * miss its own point. Plain DOM, dependency-free by design.
   */
  await loader.loadModule(
    (await import('org.eclipse.daanse.board.app.platform.boot/manifest.json'))
      .default as ModuleManifest,
    { container: await import('org.eclipse.daanse.board.app.platform.boot') },
  )

  /*
   * The last statically bundled module: the shared vue stack. Everything
   * else arrives per URL.
   */
  const platform: Array<[ModuleManifest, () => Promise<unknown>]> = [
    [
      (await import('org.eclipse.daanse.board.app.platform.vue/manifest.json'))
        .default as ModuleManifest,
      () => import('org.eclipse.daanse.board.app.platform.vue'),
    ],
  ]

  for (const [manifest, load] of platform) {
    resolvedContainers.set(manifest.id, await load())
  }

  loader.register([...platform.map(([manifest]) => manifest), ...bundles])
  await loader.loadAll()

  const all = loader.getManifests()
  const active = all.filter((m) => loader.getModule(m.id)?.state === 'active').length
  const parked = loader.getUnsatisfiedModules()
  console.log(`✅ ${active}/${all.length} modules active (${bundles.length} URL bundles)`)
  if (parked.length > 0) {
    console.warn('⏸ unsatisfied:', parked.map((p) => `${p.moduleId} <- ${p.waitingFor.join(',')}`).join('; '))
  }
}

start().catch((err) => {
  console.error('❌ start failed:', err, '\ncause:', err?.cause ?? '(none)')
})
