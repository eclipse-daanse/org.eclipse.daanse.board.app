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

import { initTsmRuntime } from '@eclipse-daanse/tsm'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/**
 * Transitional library bundle: shares workspace packages that are still
 * statically built into the host, so URL-loaded bundles can import them via
 * `__tsm__.require(...)` instead of bundling their own copies.
 *
 * A copy would not merely waste bytes - it would break identity: decorator
 * metadata in lib.annotations, the VariableWrapper class consumed with
 * instanceof, the event registries' state. One instance or wrong behaviour.
 *
 * Every entry here is debt with a due date: when one of these packages
 * becomes a real bundle, its line and manifest capability move there.
 * When the list is empty, this bundle is deleted.
 */

const VERSION = '0.0.1-next.1'

export async function activate({ log }: ActivationContext) {
  const runtime = initTsmRuntime()

  const libraries: Record<string, () => Promise<unknown>> = {
    'org.eclipse.daanse.board.app.lib.core': () => import('org.eclipse.daanse.board.app.lib.core'),
    'org.eclipse.daanse.board.app.lib.events': () => import('org.eclipse.daanse.board.app.lib.events'),
    'org.eclipse.daanse.board.app.lib.annotations': () => import('org.eclipse.daanse.board.app.lib.annotations'),
    'org.eclipse.daanse.board.app.lib.utils.helpers': () => import('org.eclipse.daanse.board.app.lib.utils.helpers'),
    'org.eclipse.daanse.board.app.lib.i18next': () => import('org.eclipse.daanse.board.app.lib.i18next'),
    'org.eclipse.daanse.board.app.lib.repository.widget': () => import('org.eclipse.daanse.board.app.lib.repository.widget'),
    'org.eclipse.daanse.board.app.ui.vue.composables': () => import('org.eclipse.daanse.board.app.ui.vue.composables'),
    'org.eclipse.daanse.board.app.ui.vue.variable.components': () => import('org.eclipse.daanse.board.app.ui.vue.variable.components'),
    'org.eclipse.daanse.board.app.lib.variables': () => import('org.eclipse.daanse.board.app.lib.variables'),
    'org.eclipse.daanse.board.app.lib.logger': () => import('org.eclipse.daanse.board.app.lib.logger'),
    'org.eclipse.daanse.board.app.lib.repository.datasource': () => import('org.eclipse.daanse.board.app.lib.repository.datasource'),
    'org.eclipse.daanse.board.app.lib.repository.variable': () => import('org.eclipse.daanse.board.app.lib.repository.variable'),
    'org.eclipse.daanse.board.app.lib.repository.page': () => import('org.eclipse.daanse.board.app.lib.repository.page'),
    'org.eclipse.daanse.board.app.lib.repository.layout.page': () => import('org.eclipse.daanse.board.app.lib.repository.layout.page'),
    'org.eclipse.daanse.board.app.ui.vue.stores.layout': () => import('org.eclipse.daanse.board.app.ui.vue.stores.layout'),
    'org.eclipse.daanse.board.app.ui.vue.stores.widgets': () => import('org.eclipse.daanse.board.app.ui.vue.stores.widgets'),
    'org.eclipse.daanse.board.app.ui.vue.widget.wrapper': () => import('org.eclipse.daanse.board.app.ui.vue.widget.wrapper'),
    'org.eclipse.daanse.board.app.lib.repository.connection': () => import('org.eclipse.daanse.board.app.lib.repository.connection'),
    'org.eclipse.daanse.board.app.lib.datasource.xmla': () => import('org.eclipse.daanse.board.app.lib.datasource.xmla'),
    'org.eclipse.daanse.board.app.lib.connection.xmla': () => import('org.eclipse.daanse.board.app.lib.connection.xmla'),
    'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart': () => import('org.eclipse.daanse.board.app.lib.composer.ogcsta2chart'),
    'org.eclipse.daanse.board.app.ui.vue.stores.connection': () => import('org.eclipse.daanse.board.app.ui.vue.stores.connection'),
    'org.eclipse.daanse.board.app.ui.vue.stores.datasouce': () => import('org.eclipse.daanse.board.app.ui.vue.stores.datasouce'),
  }

  for (const [id, load] of Object.entries(libraries)) {
    runtime.register(id, await load(), VERSION, 'platform.compat')
  }

  log.info(`${Object.keys(libraries).length} workspace libraries shared (transitional)`)
}
