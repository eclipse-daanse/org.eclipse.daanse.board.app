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
 * What a build of the board consists of: written to dist/versions.json by
 * the production build and served at /versions.json by the dev server.
 *
 * The /about screen sets it against what the module loader actually
 * loaded. A build is the only place that knows which bundles were meant
 * to ship - the running board only knows the ones it found - so a bundle
 * that never made it into the image shows up as missing rather than not
 * at all.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, globSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The libraries from outside the repository that decide most about how
 * the board behaves. Every one of them is in yarn.lock; these are the
 * ones worth naming when someone asks what a deployment runs on.
 */
export const KEY_DEPENDENCIES = [
  'vue',
  'vue-router',
  '@emfts/core',
  '@eclipse-daanse/tsm',
  'i18next',
  'monaco-editor',
  'leaflet',
]

/* Directories that hold copies or output, never a package of the tree. */
const NOT_SOURCE = /(^|[/\\])(node_modules|dist|dist-bundle|dist-bundle\.building)$/

const readJson = (path) => JSON.parse(readFileSync(path, 'utf-8'))

const byName = (a, b) => a.name.localeCompare(b.name)

/** The commit built: CI names it; a local build asks git, and may have none. */
function commitOf(root) {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA
  try {
    return execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf-8' }).trim()
  } catch {
    return undefined
  }
}

/**
 * @param {object} options
 * @param {string} options.root the repository root
 * @param {(dir: string) => boolean} [options.included] whether the bundle
 *   in a package directory is part of this build; by default, whether its
 *   output exists
 * @param {(id: string) => boolean} [options.belongs] whether a bundle is
 *   one of this app's at all (scripts/apps.mjs); by default, every one is.
 *   One that is not is left out, rather than listed as missing.
 * @param {string} [options.variant] which app this build is (VITE_APP)
 * @param {string} [options.commit]
 * @param {Date} [options.builtAt]
 */
export function collectComponentVersions({
  root,
  included = (dir) => existsSync(join(dir, 'dist-bundle')),
  belongs = () => true,
  variant,
  commit = commitOf(root),
  builtAt = new Date(),
}) {
  const app = readJson(join(root, 'package.json'))

  const manifests = globSync('packages/**/package.json', {
    cwd: root,
    exclude: (path) => NOT_SOURCE.test(path),
  }).map((path) => join(root, path))

  const packages = manifests
    .map((path) => readJson(path))
    .filter((pkg) => pkg.name)
    .map((pkg) => ({ name: pkg.name, version: pkg.version }))
    .sort(byName)

  /* A bundle is a package with a vite.bundle.config.ts; its id and
    version are the ones in its manifest.json, which the loader reads. */
  const bundles = manifests
    .map((path) => join(path, '..'))
    .filter((dir) => existsSync(join(dir, 'vite.bundle.config.ts')))
    .map((dir) => {
      const manifest = readJson(join(dir, 'manifest.json'))
      return {
        id: manifest.id,
        name: manifest.name ?? manifest.id,
        version: manifest.version,
        included: included(dir),
      }
    })
    .filter((bundle) => belongs(bundle.id))
    .sort((a, b) => a.id.localeCompare(b.id))

  const dependencies = KEY_DEPENDENCIES.map((name) => {
    const path = join(root, 'node_modules', name, 'package.json')
    return existsSync(path) ? { name, version: readJson(path).version } : undefined
  }).filter(Boolean)

  return {
    app: { name: app.name, version: app.version, ...(variant ? { variant } : {}) },
    commit,
    builtAt: builtAt.toISOString(),
    bundles,
    packages,
    dependencies,
  }
}
