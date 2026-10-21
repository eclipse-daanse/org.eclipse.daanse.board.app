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

import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { initTsmRuntime, isTsmRuntimeAvailable, tsmRuntime } from '@eclipse-daanse/tsm'
import { activate, EMFTS_CORE_VERSION } from './index'
import manifest from '../manifest.json'

const silent = { debug() {}, info() {}, warn() {}, error() {} }
const services = { register() {} } as never

describe('platform.system', () => {
  beforeEach(() => {
    // The launcher initializes the runtime before any module activates;
    // the bundle reads it from the global instead of importing tsm.
    initTsmRuntime()
  })

  afterEach(() => {
    // The runtime is a global singleton; clean up so later tests do not
    // depend on this registration.
    if (isTsmRuntimeAvailable()) {
      tsmRuntime.unregister?.('@emfts/core')
    }
  })

  it('provides @emfts/core under its name', async () => {
    await activate({ services, log: silent })

    expect(isTsmRuntimeAvailable()).toBe(true)
    expect(globalThis.window.__tsm__.has('@emfts/core')).toBe(true)
  })

  /*
   * The point of serving EMF from one bundle. EPackageRegistry.INSTANCE is
   * created at import time and every generated package registers into it
   * once, so a second copy would mean two registries and two EClass objects
   * for the same model - and eObject.eClass() === Package.Literals.X, which
   * the whole model layer rests on, would quietly stop holding.
   *
   * In the browser that guarantee is the import map (one URL, one instance);
   * here both paths resolve through node, which proves the artefact
   * re-exports the real package rather than a copy of it.
   */
  it('hands out the same EMF instance a bare import receives', async () => {
    await activate({ services, log: silent })

    const shared = globalThis.window.__tsm__.require('@emfts/core') as typeof import('@emfts/core')
    const direct = await import('@emfts/core')
    expect(shared.EPackageRegistry.INSTANCE).toBe(direct.EPackageRegistry.INSTANCE)
  })

  /*
   * The declared version is a promise to the consumers' versionRange check.
   * Code and manifest drifting apart means the resolver validates against a
   * fiction, and the two live in different files.
   */
  it('declares the same version in the manifest and in the code', () => {
    const capability = manifest.capabilities.find(
      (c) => c.attributes.library === '@emfts/core',
    )
    expect(capability?.attributes.version).toBe(EMFTS_CORE_VERSION)
  })
})
