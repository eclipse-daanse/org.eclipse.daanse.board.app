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

import { describe, it, expect, afterEach } from 'vitest'
import { version as vueVersion } from 'vue'
import { isTsmRuntimeAvailable, tsmRuntime } from '@eclipse-daanse/tsm'
import { activate, VERSIONS } from './index'

const silent = { debug() {}, info() {}, warn() {}, error() {} }

describe('platform.vue', () => {
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
  it('declares exactly the version that is actually bundled', () => {
    expect(VERSIONS.vue).toBe(vueVersion)
  })

  it('provides vue and vue-router under their names', () => {
    activate({ services: undefined as never, log: silent })

    expect(isTsmRuntimeAvailable()).toBe(true)
    const vue = globalThis.window.__tsm__.require('vue') as typeof import('vue')
    expect(vue.version).toBe(vueVersion)
    expect(globalThis.window.__tsm__.has('vue-router')).toBe(true)
  })

  /*
   * The transition constraint from the module comment: the provided instance
   * must be THE SAME one the host imports - two copies would be two
   * reactivity systems.
   */
  it('hands out the same Vue instance the host imports', async () => {
    activate({ services: undefined as never, log: silent })

    const shared = globalThis.window.__tsm__.require('vue') as typeof import('vue')
    const direct = await import('vue')
    expect(shared.ref).toBe(direct.ref)
  })
})
