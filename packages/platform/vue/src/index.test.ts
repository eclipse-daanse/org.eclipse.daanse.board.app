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
import { version as vueVersion } from 'vue'
import { initTsmRuntime, isTsmRuntimeAvailable, tsmRuntime } from '@eclipse-daanse/tsm'
import { activate, VERSIONS } from './index'

const silent = { debug() {}, info() {}, warn() {}, error() {} }

describe('platform.vue', () => {
  beforeEach(() => {
    // The launcher initializes the runtime before any module activates;
    // the bundle reads it from the global instead of importing tsm.
    initTsmRuntime()
  })

  afterEach(() => {
    // The runtime is a global singleton; clean up so later tests do not
    // depend on this registration.
    if (isTsmRuntimeAvailable()) {
      tsmRuntime.unregister?.('vue')
      tsmRuntime.unregister?.('vue-router')
    }
  })

  /*
   * The declared version is a promise to the consumers' versionRange check.
   * If it does not match what is actually bundled, the resolver validates
   * against a fiction.
   */
  it('declares exactly the versions that are actually bundled', async () => {
    expect(VERSIONS.vue).toBe(vueVersion)
    const pinia = await import('pinia/package.json')
    expect(VERSIONS.pinia).toBe(pinia.version)
  })

  it('provides vue and vue-router under their names', async () => {
    await activate({ services: undefined as never, log: silent })

    expect(isTsmRuntimeAvailable()).toBe(true)
    const vue = globalThis.window.__tsm__.require('vue') as typeof import('vue')
    expect(vue.version).toBe(vueVersion)
    expect(globalThis.window.__tsm__.has('vue-router')).toBe(true)
  })

  /*
   * In the browser the identity guarantee is the import map (one URL, one
   * instance); in this test environment both paths resolve through node,
   * which proves the artefact re-exports the real package.
   */
  it('hands out the same Vue instance a bare import receives', async () => {
    await activate({ services: undefined as never, log: silent })

    const shared = globalThis.window.__tsm__.require('vue') as typeof import('vue')
    const direct = await import('vue')
    expect(shared.ref).toBe(direct.ref)
  })
})
