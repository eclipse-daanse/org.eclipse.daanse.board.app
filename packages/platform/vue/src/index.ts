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

import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import * as Pinia from 'pinia'
import * as VueDraggable from 'vuedraggable'
import { initTsmRuntime } from '@eclipse-daanse/tsm'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/**
 * The library bundle for Vue: it provides the application's Vue instance as a
 * shared library, so URL-loaded bundles obtain it via `__tsm__.require('vue')`
 * instead of bundling a copy of their own.
 *
 * Why a bundle and not the host: who provides Vue becomes a matter of wiring
 * rather than a registration line in main.ts. This module's manifest carries
 * the `tsm.library` capabilities; the consumers' `sharedDependencies` are
 * checked against them by the resolver, and the tsm console can show who
 * offers Vue and who consumes it - like an OSGi bundle exporting a package
 * while the framework merely mediates.
 *
 * Transition constraint: as long as the host application itself is statically
 * built, this module MUST hand out the very instance the host renders with -
 * two Vue copies would be two reactivity systems. This is currently ensured
 * by construction, because this module lives in the host's module graph and
 * `import * as Vue from 'vue'` has exactly one resolution there. Once the
 * host shell becomes a bundle itself, the direction flips: this bundle's file
 * becomes the only Vue source via the import map, for the host as well.
 */

/** Must match the actually bundled versions; checked in index.test.ts. */
const VERSIONS = {
  vue: '3.5.24',
  'vue-router': '5.0.6',
  pinia: '3.0.4',
  /*
   * Shared because Sortable keeps its drag context in module state: the
   * palette (shell bundle) starts a drag that the grid's drop zone (host
   * graph) must recognise - two copies are two drag worlds and drops die.
   */
  vuedraggable: '4.1.0',
} as const

export function activate({ log }: ActivationContext) {
  const runtime = initTsmRuntime()

  runtime.register('vue', Vue, VERSIONS.vue, 'platform.vue')
  runtime.register('vue-router', VueRouter, VERSIONS['vue-router'], 'platform.vue')
  runtime.register('pinia', Pinia, VERSIONS.pinia, 'platform.vue')
  runtime.register('vuedraggable', VueDraggable, VERSIONS.vuedraggable, 'platform.vue')

  log.info(`shared libraries ready: vue@${VERSIONS.vue}, vue-router@${VERSIONS['vue-router']}, pinia@${VERSIONS.pinia}`)
}

/**
 * Deliberately no deactivate: a shared library cannot vanish at runtime while
 * consumers are alive - every component in the tree hangs on this Vue
 * instance. It only becomes unloadable once the resolver stops consumers
 * first; until then an unregister would be a sham.
 */

export { VERSIONS }
