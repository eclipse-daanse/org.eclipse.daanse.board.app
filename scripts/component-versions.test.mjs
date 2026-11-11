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

// @vitest-environment node

import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { collectComponentVersions } from './component-versions.mjs'

let root

const put = (path, content) => {
  const file = join(root, path)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, typeof content === 'string' ? content : JSON.stringify(content))
}

/*
 * A tree of three packages: a bundle that was built, a bundle that was
 * not, and a library that is no bundle at all. Beside them the kind of
 * copy a tree is full of, which must not be counted as a package.
 */
beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'component-versions-'))
  put('package.json', { name: 'board', version: '0.1.0' })

  put('packages/ui/chart/package.json', { name: 'ui.chart', version: '0.1.0' })
  put('packages/ui/chart/manifest.json', { id: 'ui.chart', name: 'Chart', version: '0.1.0' })
  put('packages/ui/chart/vite.bundle.config.ts', '')
  put('packages/ui/chart/dist-bundle/index.js', '')

  put('packages/ui/map/package.json', { name: 'ui.map', version: '0.1.0' })
  put('packages/ui/map/manifest.json', { id: 'ui.map', version: '0.1.0' })
  put('packages/ui/map/vite.bundle.config.ts', '')

  put('packages/lib/core/package.json', { name: 'lib.core', version: '0.1.0' })
  put('packages/lib/core/node_modules/left-pad/package.json', {
    name: 'left-pad',
    version: '1.0.0',
  })
  put('packages/lib/core/dist/package.json', { name: 'lib.core', version: '0.0.0' })

  put('node_modules/vue/package.json', { name: 'vue', version: '3.5.24' })
})

afterEach(() => rmSync(root, { recursive: true, force: true }))

const collect = () =>
  collectComponentVersions({ root, commit: 'abc123', builtAt: new Date('2026-11-11T12:00:00Z') })

describe('what a build consists of', () => {
  it('names the app, the commit and when it was built', () => {
    const versions = collect()
    expect(versions.app).toEqual({ name: 'board', version: '0.1.0' })
    expect(versions.commit).toBe('abc123')
    expect(versions.builtAt).toBe('2026-11-11T12:00:00.000Z')
  })

  it('lists the packages of the tree, and not the copies beside them', () => {
    expect(collect().packages.map((each) => each.name)).toEqual(['lib.core', 'ui.chart', 'ui.map'])
  })

  /* The one a build left out is the one /about has to be able to show. */
  it('lists every bundle by its manifest, and says which of them the build holds', () => {
    expect(collect().bundles).toEqual([
      { id: 'ui.chart', name: 'Chart', version: '0.1.0', included: true },
      { id: 'ui.map', name: 'ui.map', version: '0.1.0', included: false },
    ])
  })

  it('names the versions of the libraries it runs on, where they are installed', () => {
    expect(collect().dependencies).toEqual([{ name: 'vue', version: '3.5.24' }])
  })
})
