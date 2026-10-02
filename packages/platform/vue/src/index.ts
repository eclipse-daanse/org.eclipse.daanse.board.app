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

/**
 * The Vue platform bundle: serves vue, vue-router, pinia and vuedraggable as
 * standalone ESM artefacts next to this entry. The import map in the host
 * page points the bare specifiers at those files, so every bundle - and the
 * page itself, which no longer bundles any of them - shares one instance of
 * each by URL identity.
 *
 * activate registers the same instances into the tsm runtime: the consumers'
 * declared sharedDependencies keep being validated against offered versions,
 * and anything still calling `__tsm__.require('vue')` receives the
 * import-map instance rather than a second copy.
 *
 * vuedraggable is here because Sortable keeps its drag context in module
 * state: the palette (shell) starts a drag the grid's drop zone must
 * recognise - two copies are two drag worlds and drops die.
 */

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Must match the actually bundled versions; checked in index.test.ts. */
const VERSIONS = {
  vue: '3.5.24',
  'vue-router': '5.0.6',
  pinia: '3.0.4',
  vuedraggable: '4.1.0',
} as const

interface SharedLibraryRuntime {
  register(moduleId: string, exports: unknown, version: string, providedBy?: string): void
}

export async function activate({ log }: ActivationContext) {
  // The runtime the launcher initialized - the same global legacy
  // `__tsm__.require` callers use.
  const runtime = (globalThis as { __tsm__?: SharedLibraryRuntime }).__tsm__
  if (!runtime) {
    throw new Error('platform.vue: tsm runtime is not initialized')
  }

  // Relative imports resolve to the same URLs the import map names, so the
  // registered instances are identical to what bare imports receive.
  const [vue, vueRouter, pinia, vuedraggable] = await Promise.all([
    import('./artifacts/vue'),
    import('./artifacts/vue-router'),
    import('./artifacts/pinia'),
    import('./artifacts/vuedraggable'),
  ])

  runtime.register('vue', vue, VERSIONS.vue, 'platform.vue')
  runtime.register('vue-router', vueRouter, VERSIONS['vue-router'], 'platform.vue')
  runtime.register('pinia', pinia, VERSIONS.pinia, 'platform.vue')
  runtime.register('vuedraggable', vuedraggable, VERSIONS.vuedraggable, 'platform.vue')

  log.info(
    `shared libraries ready: vue@${VERSIONS.vue}, vue-router@${VERSIONS['vue-router']}, pinia@${VERSIONS.pinia}`,
  )
}

/**
 * Deliberately no deactivate: a shared library cannot vanish at runtime while
 * consumers are alive - every component in the tree hangs on this Vue
 * instance. It only becomes unloadable once the resolver stops consumers
 * first; until then an unregister would be a sham.
 */

export { VERSIONS }
