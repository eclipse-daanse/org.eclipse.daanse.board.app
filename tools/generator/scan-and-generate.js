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
 * Regenerates every package's src/gen from its Ecore models, driven by
 * @emfts/codegen (decorator mode, shared annotations from lib.annotations).
 *
 * This replaced the in-repo generator (main.js + templates/): the upstream
 * codegen reached output parity in the 2026-08-24 trial - enum literals,
 * generics, reference instantiation, defaults, plain decorator names and
 * literal import mappings all verified against the previous output. What it
 * additionally emits (class documentation, .js import extensions) we accept
 * as improvements.
 *
 * Cross-package wiring is derived, not configured: every model's outbound
 * nsURI references become -d (when the referenced model lives in this
 * workspace) and an --import-mapping to the owning package's npm name.
 * The one nsURI without a model of its own (ui.vue.composables, home of
 * VariableWrapper) maps by name alone.
 *
 * Output flattening: codegen nests its output under the GenConfig's base
 * package (org/example/...). Our gen layout is flat, so the driver
 * generates into a temp dir and moves the .ts files - minus the index
 * barrel - into <package>/src/gen.
 *
 * Usage: node tools/generator/scan-and-generate.js [filter...]
 */
import { execFileSync } from 'node:child_process'
import {
  globSync, readFileSync, readdirSync, statSync,
  mkdirSync, rmSync, cpSync, existsSync, mkdtempSync,
} from 'node:fs'
import { join, dirname, basename, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import os from 'node:os'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
// The package exports no ./cli subpath; the bin path is the stable entry.
const CODEGEN = join(ROOT, 'node_modules', '@emfts', 'codegen', 'dist', 'cli', 'index.js')
const ANNOTATIONS = 'org.eclipse.daanse.board.app.lib.annotations'
const filters = process.argv.slice(2)

// ---------------------------------------------------------------- inventory
const models = globSync(join(ROOT, 'packages/**/model/*.ecore'))
  .filter((f) => !f.includes('node_modules'))
  .sort()

const nsuriToModel = new Map()
const nsuriToPackage = new Map()
for (const file of models) {
  const source = readFileSync(file, 'utf-8')
  const ns = source.match(/nsURI="([^"]+)"/)?.[1]
  if (!ns) continue
  nsuriToModel.set(ns, file)
  const pkgJson = join(dirname(file), '..', 'package.json')
  if (existsSync(pkgJson)) {
    nsuriToPackage.set(ns, JSON.parse(readFileSync(pkgJson, 'utf-8')).name)
  }
}

/** Outbound cross-package references of a model, as nsURIs. */
function referencesOf(file) {
  const source = readFileSync(file, 'utf-8')
  const own = source.match(/nsURI="([^"]+)"/)?.[1]
  const refs = new Set()
  for (const m of source.matchAll(/href="(http[^"#]+)#/g)) refs.add(m[1])
  for (const m of source.matchAll(/eClassifier="([^"#]+)#/g)) refs.add(m[1])
  refs.delete(own)
  return [...refs].filter((r) => !r.includes('eclipse.org/emf'))
}

/** npm package name a nsURI belongs to; the nsURI itself when it IS one. */
function packageFor(nsuri) {
  return nsuriToPackage.get(nsuri)
    ?? (nsuri.replace(/^http:\/\//, '').startsWith('org.eclipse.daanse')
      ? nsuri.replace(/^http:\/\//, '')
      : undefined)
}

// ----------------------------------------------------------------- generate
let ok = 0
const failed = []
const byPackage = new Map() // package dir -> model files
for (const file of models) {
  if (filters.length && !filters.some((t) => file.includes(t))) continue
  const pkgDir = resolve(dirname(file), '..')
  if (!byPackage.has(pkgDir)) byPackage.set(pkgDir, [])
  byPackage.get(pkgDir).push(file)
}

console.log(`zu generieren: ${[...byPackage.values()].flat().length} Modelle in ${byPackage.size} Paketen`)

for (const [pkgDir, pkgModels] of byPackage) {
  const genDir = join(pkgDir, 'src', 'gen')
  rmSync(genDir, { recursive: true, force: true })
  mkdirSync(genDir, { recursive: true })

  for (const file of pkgModels) {
    const refs = referencesOf(file)
    const deps = refs.map((r) => nsuriToModel.get(r)).filter(Boolean)
    const mappings = refs
      .map((r) => [r, packageFor(r)])
      .filter(([, pkg]) => pkg)
      .map(([r, pkg]) => `${r}=${pkg}`)

    const genconfig = join(dirname(file), basename(file, '.ecore') + '.genconfig.xmi')
    const tmp = mkdtempSync(join(os.tmpdir(), 'daanse-gen-'))
    try {
      if (!existsSync(genconfig)) {
        const args = ['init', '-m', file, '--mode', 'decorator', '-a', ANNOTATIONS, '-o', genconfig]
        if (deps.length) args.push('-d', ...deps)
        if (mappings.length) args.push('--import-mapping', ...mappings)
        execFileSync('node', [CODEGEN, ...args], { stdio: 'pipe' })
      }
      const args = ['generate', '-m', file, '-c', genconfig, '-o', tmp]
      if (deps.length) args.push('-d', ...deps)
      if (mappings.length) args.push('--import-mapping', ...mappings)
      execFileSync('node', [CODEGEN, ...args], { stdio: 'pipe' })

      // Flatten: codegen nests under the base package; our layout is flat.
      const flatten = (dir) => {
        for (const entry of readdirSync(dir)) {
          const full = join(dir, entry)
          if (statSync(full).isDirectory()) flatten(full)
          else if (entry.endsWith('.ts') && entry !== 'index.ts') {
            cpSync(full, join(genDir, entry))
          }
        }
      }
      flatten(tmp)
      ok += 1
      console.log(`  ok ${file.replace(ROOT + '/', '')}`)
    } catch (error) {
      failed.push(file.replace(ROOT + '/', ''))
      const output = `${error.stdout ?? ''}\n${error.stderr ?? ''}`
      console.error(`  FEHLER ${file.replace(ROOT + '/', '')}`)
      console.error('    ' + output.split('\n').filter((l) => l.trim()).slice(-3).join('\n    '))
    } finally {
      rmSync(tmp, { recursive: true, force: true })
    }
  }
}

console.log(`\n${ok} Modelle generiert${failed.length ? `, FEHLGESCHLAGEN: ${failed.length}` : ''}`)
for (const f of failed) console.log('  ✗ ' + f)
process.exit(failed.length ? 1 : 0)
