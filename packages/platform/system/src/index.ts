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

import { TinyEmitter } from 'tiny-emitter'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'

/**
 * The system bundle: owner of the application-wide base services that no
 * feature package should have to create as a side effect.
 *
 * Today that is one service - the event bus. It used to be constructed and
 * bound inside lib.core's import, an anonymous side effect nobody's manifest
 * accounted for; now its provider is named, and every module that lists
 * TINY_EMITTER in requiresService is wired against this one.
 *
 * Deliberately NOT here: the Vue app instance ('App'). It is created by the
 * host launcher - the composition root - and registered there; a package
 * cannot own an instance only the host can construct.
 */

interface SharedLibraryRuntime {
  register(moduleId: string, exports: unknown, version: string, providedBy?: string): void
}

/** Must match the actually bundled version; checked in index.test.ts. */
export const EMFTS_CORE_VERSION = '0.1.1-next.18'

export async function activate({ services, log }: ActivationContext) {
  services.register(TINY_EMITTER, new TinyEmitter())

  // The runtime the launcher initialized - the same global legacy
  // `__tsm__.require` callers use.
  const runtime = (globalThis as { __tsm__?: SharedLibraryRuntime }).__tsm__
  if (!runtime) {
    throw new Error('platform.system: tsm runtime is not initialized')
  }

  /*
   * EMF has to exist exactly once. EPackageRegistry.INSTANCE is created at
   * import time, every generated package registers itself into it once, and
   * eObject.eClass() === Package.Literals.X has to hold. Two copies would
   * mean two registries and two EClass objects for the same model, and
   * every such comparison would quietly fail.
   *
   * It is registered here rather than with the Vue platform because it is
   * infrastructure. While it was served from there, a package that wanted
   * an EObject had to depend on Vue's bundle or carry a second copy - which
   * is what kept the variable wrappers outside the model (#1068).
   *
   * The relative import resolves to the same URL the import map names, so
   * the registered instance is identical to what bare imports receive.
   */
  const emftsCore = await import('./artifacts/emfts-core')
  runtime.register('@emfts/core', emftsCore, EMFTS_CORE_VERSION, 'platform.system')

  log.info(`system services ready: TINY_EMITTER, @emfts/core@${EMFTS_CORE_VERSION}`)
}

/**
 * No deactivate: the event bus carries subscriptions from every part of the
 * application; withdrawing it while consumers live would be a sham teardown.
 */
