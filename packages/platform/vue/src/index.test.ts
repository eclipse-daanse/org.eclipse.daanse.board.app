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
import { activate, VERSIONEN } from './index'

const stille = { debug() {}, info() {}, warn() {}, error() {} }

describe('platform.vue', () => {
  afterEach(() => {
    // Runtime ist ein globales Singleton; aufraeumen, damit Folgetests
    // nicht von dieser Registrierung abhaengen.
    if (isTsmRuntimeAvailable()) {
      tsmRuntime.unregister?.('vue')
      tsmRuntime.unregister?.('vue-router')
    }
  })

  /*
   * Die deklarierte Version ist ein Versprechen an die versionRange-Pruefung
   * der Konsumenten. Stimmt sie nicht mit der tatsaechlich gebuendelten
   * ueberein, prueft der Resolver gegen eine Fiktion.
   */
  it('deklariert genau die Version, die tatsaechlich gebuendelt ist', () => {
    expect(VERSIONEN.vue).toBe(vueVersion)
  })

  it('stellt vue und vue-router unter ihren Namen bereit', () => {
    activate({ services: undefined as never, log: stille })

    expect(isTsmRuntimeAvailable()).toBe(true)
    const vue = globalThis.window.__tsm__.require('vue') as typeof import('vue')
    expect(vue.version).toBe(vueVersion)
    expect(globalThis.window.__tsm__.has('vue-router')).toBe(true)
  })

  /*
   * Die Uebergangsbedingung aus dem Kommentar im Modul: die bereitgestellte
   * Instanz muss DIESELBE sein, die der Host importiert - zwei Kopien waeren
   * zwei Reaktivitaetssysteme.
   */
  it('gibt dieselbe Vue-Instanz aus, die der Host importiert', async () => {
    activate({ services: undefined as never, log: stille })

    const geteilt = globalThis.window.__tsm__.require('vue') as typeof import('vue')
    const direkt = await import('vue')
    expect(geteilt.ref).toBe(direkt.ref)
  })
})
