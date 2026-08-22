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
 * Bundle entry: the package's public API plus its registration as a shared
 * library. Other bundles import this package through `__tsm__.require(...)`;
 * the registration here is what makes that resolvable once this module is
 * active - the contract platform.compat carried transitionally.
 */

import * as library from './index'

export * from './index'

const LIBRARY_ID = 'org.eclipse.daanse.board.app.lib.datasource.xmla'
const VERSION = '0.0.1-next.1'

interface SharedLibraryRuntime {
  register(moduleId: string, exports: unknown, version: string, providedBy?: string): void
}

interface LifecycleModule {
  activate?: (context: unknown) => unknown
  deactivate?: (context: unknown) => unknown
}

export async function activate(context: unknown): Promise<void> {
  // The runtime the host initialized - the same global the rewritten
  // imports of consuming bundles resolve against.
  const runtime = (globalThis as { __tsm__?: SharedLibraryRuntime }).__tsm__
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`)
  }
  runtime.register(LIBRARY_ID, library, VERSION, 'lib.datasource.xmla')
  await (library as LifecycleModule).activate?.(context)
}

export async function deactivate(context: unknown): Promise<void> {
  await (library as LifecycleModule).deactivate?.(context)
}
