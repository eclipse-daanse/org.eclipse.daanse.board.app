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
 * Lints the complete manifest set the application starts from - the safety
 * net that died with modules.test.ts when the bootstrapper went. tsm#17
 * will move part of this into the build; until then it lives here.
 *
 * Everything asserted is a wiring truth: duplicate ids silently shadow each
 * other, an unprovided required service parks its module forever, and a
 * shared dependency nothing offers fails only at load time in the browser.
 */

import { describe, it, expect } from 'vitest'
import type { ModuleManifest } from '@eclipse-daanse/tsm'
import { bundles } from '../packages/app/default/src/bundles'
import { preloadedModules } from '../packages/app/default/src/preloaded'
import platformVue from '../packages/platform/vue/manifest.json'
import platformCompat from '../packages/platform/compat/manifest.json'
import platformBoot from '../packages/platform/boot/manifest.json'

const platform = [platformVue as ModuleManifest, platformCompat as ModuleManifest, platformBoot as ModuleManifest]
const preloaded = preloadedModules.map(([manifest]) => manifest)
const all: ModuleManifest[] = [...platform, ...preloaded, ...bundles]

/**
 * Services the host itself registers. Exactly one since the shell step: the
 * ModuleLoader publishing itself, the way the OSGi system bundle registers
 * the framework's own services. Everything else comes from bundles.
 */
const HOST_PROVIDED = new Set<string>(['ModuleLoader'])

describe('manifest lint', () => {
  it('module ids are unique', () => {
    const seen = new Map<string, number>()
    for (const m of all) seen.set(m.id, (seen.get(m.id) ?? 0) + 1)
    const dupes = [...seen].filter(([, n]) => n > 1).map(([id]) => id)
    expect(dupes).toEqual([])
  })

  it('every provided service id has exactly one provider', () => {
    const providers = new Map<string, string[]>()
    for (const m of all) {
      for (const p of m.provides ?? []) {
        providers.set(p.id, [...(providers.get(p.id) ?? []), m.id])
      }
    }
    const dupes = [...providers].filter(([, ms]) => ms.length > 1)
    expect(dupes, dupes.map(([id, ms]) => `${id} <- ${ms.join(', ')}`).join('; ')).toEqual([])
  })

  it('every required service is provided by some module or the host', () => {
    const provided = new Set(HOST_PROVIDED)
    for (const m of all) for (const p of m.provides ?? []) provided.add(p.id)
    // Widget providers register under daanse.widget via @component
    provided.add('daanse.widget')

    const missing: string[] = []
    for (const m of all) {
      for (const r of m.requiresService ?? []) {
        if (!provided.has(r.id)) missing.push(`${m.id} requires ${r.id}`)
      }
    }
    expect(missing).toEqual([])
  })

  it('every module dependency names a registered module', () => {
    const ids = new Set(all.map((m) => m.id))
    const missing: string[] = []
    for (const m of all) {
      for (const d of m.dependencies ?? []) {
        const id = typeof d === 'string' ? d : d.id
        if (!ids.has(id)) missing.push(`${m.id} depends on ${id}`)
      }
    }
    expect(missing).toEqual([])
  })

  it('bundle entries follow the /bundles/<id>/index.js convention and are unique', () => {
    const entries = new Set<string>()
    const wrong: string[] = []
    for (const m of bundles) {
      if (m.entry !== `/bundles/${m.id}/index.js`) wrong.push(`${m.id}: ${m.entry}`)
      if (entries.has(m.entry)) wrong.push(`duplicate entry ${m.entry}`)
      entries.add(m.entry)
    }
    expect(wrong).toEqual([])
  })

  it('every shared dependency is offered as a tsm.library capability or by platform.vue', () => {
    const offered = new Set<string>()
    for (const m of all) {
      for (const c of m.capabilities ?? []) {
        if (c.namespace === 'tsm.library') offered.add(String(c.attributes?.library))
      }
    }
    const missing: string[] = []
    for (const m of all) {
      for (const s of m.sharedDependencies ?? []) {
        if (!offered.has(s.id)) missing.push(`${m.id} shares ${s.id}`)
      }
    }
    expect(missing).toEqual([])
  })

  it('preloaded modules keep the placeholder entry, bundles a real URL', () => {
    const wrong: string[] = []
    for (const m of preloaded) {
      if (m.entry.startsWith('/bundles/')) {
        wrong.push(`${m.id} is preloaded but has a bundle URL - move it to bundles.ts`)
      }
    }
    expect(wrong).toEqual([])
  })
})
