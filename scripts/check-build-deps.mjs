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
 * Checks that a package declares what its build needs.
 *
 * A workspace hoists: a tool one package depends on lands in the root
 * node_modules and every other package can run it without ever saying so.
 * That works until the hoisting shifts - adding one package is enough -
 * and then a build fails with "vue-tsc: not found" in a package nobody
 * touched, which is how this was found (#1192).
 *
 * Three ways to depend on something without declaring it:
 *   tool      the build script runs a program the package does not declare
 *   config    vite.config.ts or vite.bundle.config.ts imports a package
 *             that is not declared
 *   vue       the package has .vue files, so it is compiled against Vue,
 *             and does not declare vue
 *   tsconfig  the package is built by Vite, and its tsconfig says commonjs
 *             or leaves out vite/client - so vue-tsc refuses import.meta
 *             with TS1343 and TS2339 the moment anything uses it
 *
 * Findings that are already filed are listed in KNOWN below. They are
 * reported but do not fail the run, so the check can block a pull request
 * from the day it lands rather than waiting for the work behind it.
 *
 * Reads only; it changes nothing.
 *
 * Usage: node scripts/check-build-deps.mjs [filter...] [--all]
 *   filter: only check packages whose path contains one of the terms
 *   --all: fail on known findings too, which is what closing them looks like
 *   --update-known: write today's findings down as the work list
 */
import { existsSync, globSync, readFileSync, writeFileSync } from 'node:fs'
import { builtinModules } from 'node:module'
import { dirname, join, relative, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
const args = process.argv.slice(2)
const all = args.includes('--all')
const filters = args.filter((a) => !a.startsWith('--'))

/*
 * Known findings, kept beside this script rather than in it.
 *
 * The model-conformance check carries its five in a Map here, which is
 * the right shape for five. This one starts with hundreds - a workspace
 * that has hoisted since the beginning - and that is a list to work
 * through (#1192), not a constant to read.
 *
 * The file is written by `--update-known` and is the work list for
 * closing them: a finding in it is reported and does not fail the run, a
 * finding not in it does. An entry whose finding has gone is reported as
 * stale, so the list cannot rot quietly.
 */
const KNOWN_FILE = join(ROOT, 'scripts/check-build-deps.known.json')
const known = existsSync(KNOWN_FILE)
  ? JSON.parse(readFileSync(KNOWN_FILE, 'utf8'))
  : { issue: 1192, findings: [] }
const KNOWN = new Set(known.findings ?? [])

/*
 * Words in a build script that are not packages: shell builtins, the
 * things a shell line is made of, and node itself, which is the one
 * program every package may assume.
 */
const NOT_A_PACKAGE = new Set([
  'node', 'npm', 'npx', 'yarn', 'pnpm',
  'sh', 'bash', 'cd', 'echo', 'exit', 'export', 'set', 'test', 'true', 'false',
  'cp', 'mv', 'rm', 'mkdir', 'touch', 'cat', 'sed', 'awk', 'grep', 'find', 'env',
  '[', '[[', 'then', 'else', 'fi', 'do', 'done', 'if',
])

/* Node's own modules, which every package may import and none declares -
  written both ways, since 'path' and 'node:path' are the same module. */
const BUILTIN = new Set(builtinModules)

/** The package a bare import specifier belongs to, where it is one. */
function packageOf(specifier) {
  if (specifier.startsWith('.') || specifier.startsWith('/')) return undefined
  if (specifier.startsWith('node:')) return undefined
  if (BUILTIN.has(specifier)) return undefined
  /* A specifier built at runtime is not an import of anything. */
  if (specifier.includes('${')) return undefined
  const parts = specifier.split('/')
  return specifier.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0]
}

/*
 * The programs a build script runs.
 *
 * A script is a shell line: commands sit at the start, after a separator,
 * or inside a subshell. Taking the first word of each of those and
 * dropping what is not a package is enough - the scripts here are one
 * line of `a && b || (c && d)`, not shell programming.
 */
function toolsIn(script) {
  const found = new Set()
  for (const piece of script.split(/&&|\|\||[;|()]/)) {
    const word = piece.trim().split(/\s+/)[0]
    if (!word) continue
    /* A variable, a redirect or a quoted literal is not a command. */
    if (/^[$"'<>-]/.test(word)) continue
    if (NOT_A_PACKAGE.has(word)) continue
    /* A path is a file in this repository, not a dependency. */
    if (word.includes('/')) continue
    found.add(word)
  }
  return found
}

/** The packages a config file imports, bare specifiers only. */
function importsIn(file) {
  /* Comments out first: these configs explain the import forms they
    rewrite, and an import written in a comment is not one. */
  const source = readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
  const found = new Set()
  /*
   * Static imports only.
   *
   * These configs build strings containing `__tsm__.require('<id>')` for
   * the bundle they emit; matching require() or a dynamic import() picks
   * those up as if the config itself imported them.
   */
  const patterns = [
    /\bimport\s+[^'"]*?\bfrom\s*['"]([^'"]+)['"]/g,
    /^\s*import\s*['"]([^'"]+)['"]/gm,
  ]
  for (const pattern of patterns) {
    for (const [, specifier] of source.matchAll(pattern)) {
      const name = packageOf(specifier)
      if (name) found.add(name)
    }
  }
  return found
}

// ------------------------------------------------------------------ walking

const manifests = globSync('packages/**/package.json', { cwd: ROOT })
  .filter((file) => !file.includes('node_modules') && !file.includes('/dist'))
  .sort()

const findings = []
let checked = 0

for (const manifest of manifests) {
  const dir = dirname(manifest)
  if (filters.length && !filters.some((term) => dir.includes(term))) continue

  let pkg
  try {
    pkg = JSON.parse(readFileSync(join(ROOT, manifest), 'utf8'))
  } catch {
    continue
  }
  if (!pkg.name) continue
  checked++

  /* Declared is declared, wherever it is said. */
  const declared = new Set([
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
    ...Object.keys(pkg.optionalDependencies ?? {}),
  ])

  const report = (kind, what, detail) => {
    const where = `${what} in ${dir}`
    findings.push({ kind, where, detail, known: KNOWN.has(`${kind} ${where}`) })
  }

  /* tool: what the build script runs */
  for (const tool of toolsIn(pkg.scripts?.build ?? '')) {
    if (declared.has(tool)) continue
    report('tool', tool, `build runs ${tool}, which the package does not declare`)
  }

  /* config: what the vite configs import */
  for (const name of ['vite.config.ts', 'vite.bundle.config.ts']) {
    const file = join(ROOT, dir, name)
    if (!existsSync(file)) continue
    for (const imported of importsIn(file)) {
      if (declared.has(imported)) continue
      /* A workspace package resolves through the workspace itself; an
        undeclared one is a finding like any other, and reads as one. */
      report('config', imported, `${name} imports ${imported}, which the package does not declare`)
    }
  }

  /*
   * tsconfig: a package Vite builds is compiled as ESM, against Vite's
   * own ambient types. A tsconfig saying commonjs, or without
   * vite/client in types, works right up until a source file writes
   * import.meta - and then vue-tsc refuses it.
   */
  const viteBuilt =
    existsSync(join(ROOT, dir, 'vite.config.ts')) ||
    existsSync(join(ROOT, dir, 'vite.bundle.config.ts'))
  const tsconfigFile = join(ROOT, dir, 'tsconfig.json')
  if (viteBuilt && existsSync(tsconfigFile)) {
    let options
    try {
      /* Trailing commas and comments are allowed in a tsconfig; only the
        two fields matter here, so they are read rather than parsed. */
      const text = readFileSync(tsconfigFile, 'utf8')
      options = {
        module: /"module"\s*:\s*"([^"]+)"/.exec(text)?.[1],
        types: /"types"\s*:\s*\[([^\]]*)\]/.exec(text)?.[1] ?? '',
      }
    } catch {
      options = undefined
    }

    if (options) {
      if (options.module && options.module.toLowerCase() === 'commonjs') {
        report('tsconfig', 'module', `built by Vite, and its tsconfig says module "${options.module}"`)
      }
      if (!options.types.includes('vite/client')) {
        report('tsconfig', 'vite/client', 'built by Vite, and its tsconfig does not list vite/client in types')
      }
    }
  }

  /* vue: a package built against Vue says so */
  const vueFiles = globSync('**/*.vue', { cwd: join(ROOT, dir) }).filter(
    (file) => !file.includes('node_modules') && !file.startsWith('dist'),
  )
  if (vueFiles.length && !declared.has('vue')) {
    report(
      'vue',
      'vue',
      `${vueFiles.length} .vue file(s), and vue is not declared`,
    )
  }
}

// ---------------------------------------------------------------- reporting

const open = findings.filter((f) => all || !f.known)
const settled = findings.filter((f) => !all && f.known)

/* Writing the list down is how it starts: every finding of today becomes
  the work to do, and anything new after that fails the run. */
if (args.includes('--update-known')) {
  const listed = findings.map((f) => `${f.kind} ${f.where}`).sort()
  writeFileSync(
    KNOWN_FILE,
    `${JSON.stringify({ issue: 1192, findings: listed }, null, 2)}\n`,
  )
  console.log(`${listed.length} finding(s) written to ${relative(ROOT, KNOWN_FILE)}`)
  process.exit(0)
}

for (const f of open) {
  console.error(`${f.kind.padEnd(8)} ${f.where}\n         ${f.detail}`)
}
if (settled.length) {
  console.log(`known    ${settled.length} finding(s) from #${known.issue ?? 1192}`)
}

/*
 * A known entry whose finding has gone means the list outlived the
 * defect - but only a full run can tell: a filtered one did not look at
 * the other packages, and everything it skipped would read as gone.
 */
const here = new Set(findings.map((f) => `${f.kind} ${f.where}`))
const stale = filters.length ? [] : [...KNOWN].filter((entry) => !here.has(entry))
for (const where of stale) {
  console.error(`stale   ${where} is listed as known but no longer found`)
}

const byKind = (kind) => findings.filter((f) => f.kind === kind).length
console.log(
  `${checked} packages checked, ` +
    `${open.length} finding(s)${settled.length ? `, ${settled.length} known` : ''}` +
    ` - ${byKind('tool')} tool, ${byKind('config')} config, ` +
    `${byKind('vue')} vue, ${byKind('tsconfig')} tsconfig`,
)

process.exit(open.length || stale.length ? 1 : 0)
