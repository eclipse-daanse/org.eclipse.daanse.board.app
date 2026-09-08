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
  mkdirSync, rmSync, cpSync, existsSync, mkdtempSync, writeFileSync,
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
  /*
   * Inheritance across packages is written as an attribute, not an href, so
   * it was missed - and the referenced ecore was never loaded. In decorator
   * mode that goes unnoticed, because the supertype is only named; in emf
   * mode the class hierarchy has to resolve, and generation failed with an
   * unresolved proxy on a package nobody had asked for.
   *
   * eSuperTypes holds a space-separated list, so each entry is taken.
   */
  for (const m of source.matchAll(/eSuperTypes="([^"]+)"/g)) {
    for (const uri of m[1].split(/\s+/)) {
      const base = uri.split('#')[0]
      if (base.startsWith('http')) refs.add(base)
    }
  }
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


/**
 * WORKAROUND (emf.ts.codegen#32): the generator imports every annotation
 * helper whether or not the class uses it; consumers compile these sources
 * under noUnusedLocals. Prune the unused names until the emitter does.
 */
function pruneUnusedAnnotationImports(file) {
  const source = readFileSync(file, 'utf-8')
  const match = source.match(/import \{([^}]*)\} from '([^']*lib\.annotations)';?\n/)
  if (!match) return
  const rest = source.replace(match[0], '')
  const used = match[1].split(',').map((n) => n.trim()).filter((n) => new RegExp('@' + n + '\\(').test(rest))
  const replacement = used.length ? `import { ${used.join(', ')} } from '${match[2]}';\n` : ''
  writeFileSync(file, source.replace(match[0], replacement))
}

/**
 * WORKAROUND (emf.ts.codegen#35): in emf mode the generator emits a
 * type-only import for a referenced class it then instantiates with `new`.
 * A type import is erased at compile time, so the bundle throws
 * "X is not defined" on first use. Promote the names that are instantiated
 * to a value import; the rest stay type-only.
 */
/**
 * WORKAROUND (emf.ts.codegen): an EOperation becomes a stub that throws, so
 * its parameters are never read - and a project with noUnusedParameters
 * refuses to compile the generated file. Prefixing them with _ is the
 * convention TypeScript honours for "declared on purpose, not used".
 *
 * The names are not part of the signature, so nothing that calls these is
 * affected. Belongs in the template; done here until it is.
 */
function silenceUnusedStubParameters(file) {
  const before = readFileSync(file, 'utf8')
  const after = before.replace(
    /(\n\s+\w+\()([^)]*)(\)[^{]*\{\s*throw new Error\('[^']*not implemented'\);)/g,
    (all, head, params, tail) => {
      if (!params.trim()) return all
      const renamed = params
        .split(',')
        .map((p) => p.replace(/^(\s*)([A-Za-z]\w*)/, (_m, space, name) => `${space}_${name}`))
        .join(',')
      return head + renamed + tail
    },
  )
  if (after !== before) writeFileSync(file, after)
}

/**
 * WORKAROUND (emf.ts.codegen): a class with a type parameter is referred to
 * without one in the generated factory and impl - `VariableWrapper` where
 * the declaration says `VariableWrapper<T>`. TypeScript refuses it, and the
 * generator has no way to know what to put there, so `unknown` it is: the
 * factory hands back a wrapper whose value type the caller narrows.
 *
 * Only the bare name is touched, never one that already carries arguments.
 */
function fillMissingTypeArguments(file) {
  const before = readFileSync(file, 'utf8')
  const generic = /\bVariableWrapper\b(?!\s*<)(?!\s*\()/g
  const after = before.replace(
    /(implements|extends|:|<)(\s*)VariableWrapper\b(?!\s*<)/g,
    (_all, keyword, space) => `${keyword}${space}VariableWrapper<unknown>`,
  )
  if (after !== before) writeFileSync(file, after)
}

/**
 * WORKAROUND (emf.ts.codegen): a many-valued feature whose Ecore carries
 * defaultValueLiteral="[]" is emitted as `x: string[] = "[]"` - the literal
 * passed through as text. An empty list is what was meant.
 *
 * Only the exact "[]" is touched; a real default string is left alone.
 */
function fixArrayDefaults(file) {
  const before = readFileSync(file, 'utf8')
  let after = before.replace(/(:\s*\w+\[\]\s*=\s*)(["'])\[\]\2/g, '$1[]')
  /*
   * A modelled list is an EList, created lazily in its getter - it takes no
   * initialiser at all, and the field already carries a definite-assignment
   * mark. The literal "[]" there is the same mistake in the other shape.
   */
  after = after.replace(/(!?:\s*EList<[^>]+>)\s*=\s*[^;]+;/g, '$1;')
  if (after !== before) writeFileSync(file, after)
}

/**
 * WORKAROUND (emf.ts.codegen): a class inheriting across packages is given
 * a subpath import - `from 'pkg/FooImpl'` - which no package here exposes;
 * they export from their index. Rewritten to the package name, which is
 * where the class actually is.
 */
/**
 * WORKAROUND (emf.ts.codegen#32, wider): the emitter imports the helpers a
 * class might need, not the ones it uses - EClass, BasicEObject, EEnum and
 * friends turn up unused. Harmless where a package compiles its own
 * sources loosely, fatal where one ships src and a consumer compiles it
 * under noUnusedLocals. The names that never appear again are dropped, and
 * an import left with nothing goes with them.
 */
function pruneUnusedNamedImports(file) {
  const before = readFileSync(file, 'utf8')
  let after = before

  for (const m of before.matchAll(/import (type )?\{([^}]*)\} from '([^']*)';?\n/g)) {
    const [all, typeOnly = '', names, from] = m
    // The rest of the file, so a name is not counted as used by its own import
    const rest = before.replace(all, '')
    const kept = names
      .split(',')
      .map((n) => n.trim())
      .filter(Boolean)
      .filter((n) => new RegExp(`\\b${n.replace(/^type /, '')}\\b`).test(rest))
    if (kept.length === names.split(',').filter((n) => n.trim()).length) continue
    const replacement = kept.length
      ? `import ${typeOnly}{ ${kept.join(', ')} } from '${from}';\n`
      : ''
    after = after.replace(all, replacement)
  }

  if (after !== before) writeFileSync(file, after)
}

/**
 * WORKAROUND (emf.ts.codegen): an Impl keeps its values in private fields
 * behind the getters, so JSON.stringify writes _title and _borderColor
 * rather than title and borderColor. A stored workspace then holds names
 * that only this class knows, and everything reading a board back - our
 * own adopt(), the variable-wrapper factory, anything hand-written that
 * spreads a settings object - has to know the convention or silently miss
 * every value.
 *
 * Giving the class a toJSON() makes it store what the model calls these.
 * Values are left as they are: a VariableWrapper serialises itself the way
 * the rest of the application already reads it.
 */
function addToJson(file) {
  if (!file.endsWith('Impl.ts')) return
  const before = readFileSync(file, 'utf8')
  if (before.includes('toJSON(')) return

  /*
   * Only the classes that hold model values; a factory or package has none.
   *
   * Three shapes come out of the generator and all three have to match:
   * a field with a default, an optional one, and one the generator asserts
   * is assigned - which is what a many-valued feature gets.
   */
  const fields = [...before.matchAll(/^  private _([A-Za-z0-9_]+)[!?]?\s*:\s*([^=;]+?)\s*(?:=[^;]*)?;/gm)]
  if (!fields.length) return

  const lines = fields.map(([, name, type = '']) => {
    /* A list is stored as the values in it, not as the list object */
    const many = /\bEList\s*</.test(type)
    return many
      ? `      ${name}: this.${name}?.toArray?.() ?? this.${name},`
      : `      ${name}: this.${name},`
  })

  const method = [
    '',
    '  /**',
    '   * What this object is when it is stored.',
    '   *',
    '   * The plain names, not the private fields the getters sit in: those',
    '   * are this class\'s business, and a stored board is read by things',
    '   * that only know the model.',
    '   */',
    '  toJSON(): Record<string, unknown> {',
    '    return {',
    ...lines,
    '    };',
    '  }',
    '',
  ].join('\n')

  /* Before the final closing brace of the class */
  const at = before.lastIndexOf('\n}')
  if (at < 0) return
  writeFileSync(file, before.slice(0, at) + '\n' + method + before.slice(at + 1))
}

function collapseSubpathImports(file) {
  const before = readFileSync(file, 'utf8')
  const after = before.replace(
    /from '(org\.eclipse\.daanse\.board\.app[\w.]*)\/(\w+)'/g,
    (all, pkg) => `from '${pkg}'`,
  )
  if (after !== before) writeFileSync(file, after)
}

function promoteInstantiatedTypeImports(file) {
  const source = readFileSync(file, 'utf-8')
  let out = source
  for (const match of source.matchAll(/import type \{([^}]*)\} from '([^']*)';?\n/g)) {
    const names = match[1].split(',').map((n) => n.trim()).filter(Boolean)
    const asValue = names.filter((n) => new RegExp('new ' + n + '\\b').test(source))
    if (!asValue.length) continue
    const asType = names.filter((n) => !asValue.includes(n))
    let replacement = `import { ${asValue.join(', ')} } from '${match[2]}';\n`
    if (asType.length) replacement += `import type { ${asType.join(', ')} } from '${match[2]}';\n`
    out = out.replace(match[0], replacement)
  }
  if (out !== source) writeFileSync(file, out)
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
            pruneUnusedAnnotationImports(join(genDir, entry))
            promoteInstantiatedTypeImports(join(genDir, entry))
            silenceUnusedStubParameters(join(genDir, entry))
            fillMissingTypeArguments(join(genDir, entry))
            fixArrayDefaults(join(genDir, entry))
            collapseSubpathImports(join(genDir, entry))
            pruneUnusedNamedImports(join(genDir, entry))
            addToJson(join(genDir, entry))
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
