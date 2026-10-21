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
 * Checks that a modelled EClass is the class the runtime actually uses.
 *
 * A model can be declared, code generated from it, and the runtime then wired
 * to a hand-written class of the same name - and nothing notices. That is how
 * VariableWrapper came to send no notification for weeks: the generated
 * BasicEObject exists, calls eNotify on every setter, and is never built.
 *
 * Three ways past the model are looked for:
 *   bypass    a package exports the EClass's name, but the name resolves to
 *             something other than its own generated class - whoever imports
 *             it gets the hand-written one
 *   twin      a class of the EClass's name is declared outside src/gen/ and
 *             does not extend the generated one
 *   shadow    an interface of a generated type's name is declared again by
 *             hand, so the two drift apart silently
 *
 * Findings that are already filed are listed in KNOWN below. They are
 * reported but do not fail the run, so the check can block a pull request
 * from the day it lands rather than waiting for the migration behind it.
 *
 * Usage: node scripts/check-model-conformance.mjs [filter...] [--all]
 *   filter: only check packages whose path contains one of the terms
 *   --all: fail on known findings too, which is what closing them looks like
 */
import { globSync, existsSync, readFileSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { declarationsIn } from './source-declarations.mjs'

const ROOT = resolve(import.meta.dirname, '..')
const args = process.argv.slice(2)
const all = args.includes('--all')
const filters = args.filter(a => !a.startsWith('--'))

/*
 * Known findings, by "<EClass> in <package path>", each with the issue that
 * covers it. Entries are removed as the issues close; an entry whose finding
 * has gone is reported as stale, so the list cannot rot quietly.
 */
const KNOWN = new Map([
  ['VariableWrapper in packages/lib/variables', 1068],
  ['VariableComplexStringWrapper in packages/ui/vue/composables', 1068],
  ['ImageGalleryItem in packages/ui/vue/widget/image', 1073],
  ['GallerySettings in packages/ui/vue/widget/image', 1073],
  ['IXmlaStoreConfiguration in packages/lib/datasource/xmla', 1073],
  ['XMLARequestParams in packages/lib/datasource/xmla', 1073],
  ['Service in packages/ui/vue/widget/map', 1073],
  ['TimelineSettings in packages/ui/vue/widget/timeline', 1073],
  ['ObjectFitSetting in packages/ui/vue/widget/video', 1073],
])

// ---------------------------------------------------------------- inventory

/* Built output carries a copy of src/gen, so /dist/ has to go as well. */
const notBuilt = f => !f.includes('node_modules') && !f.includes('/dist/')

const generated = globSync('packages/**/src/gen/*Impl.ts', { cwd: ROOT })
  .filter(notBuilt)
  .sort()

/*
 * Every hand-written declaration in the workspace, by the name it declares.
 * Collected in one pass: asking per EClass would read the tree ninety times.
 */
const declarations = new Map()
for (const file of globSync('packages/**/src/**/*.ts', { cwd: ROOT }).filter(
  notBuilt,
)) {
  if (file.includes('/src/gen/')) continue
  const source = readFileSync(join(ROOT, file), 'utf8')
  for (const found of declarationsIn(source)) {
    if (!declarations.has(found.name)) declarations.set(found.name, [])
    declarations.get(found.name).push({ file, ...found })
  }
}

/** What a package's index.ts exports, and where each name comes from. */
function indexExports(packageDir) {
  const file = join(ROOT, packageDir, 'src', 'index.ts')
  if (!existsSync(file)) return { exported: new Set(), origin: new Map() }
  const source = readFileSync(file, 'utf8')
  const exported = new Set()
  const origin = new Map()
  /*
   * Both shapes matter. `export { X } from './gen/XImpl'` names its origin
   * outright; a bare `export { X }` names one only together with the import
   * that brought X in, which is how the wrapper left the model behind.
   */
  for (const m of source.matchAll(
    /^\s*(import|export)\s*\{([^}]*)\}\s*(?:from\s*['"]([^'"]+)['"])?/gm,
  )) {
    const [, keyword, names, from] = m
    for (const entry of names.split(',')) {
      /* `X as Y` is re-exported under Y, so Y is the name callers see. */
      const name = entry
        .trim()
        .split(/\s+as\s+/)
        .pop()
        ?.trim()
      if (!name) continue
      if (keyword === 'export') exported.add(name)
      if (from) origin.set(name, from)
    }
  }
  return { exported, origin }
}

// ----------------------------------------------------------------- checking

const findings = []
const seen = new Set()

for (const implFile of generated) {
  const packageDir = dirname(dirname(dirname(implFile)))
  if (filters.length && !filters.some(t => packageDir.includes(t))) continue

  const name = basename(implFile, '.ts').replace(/Impl$/, '')
  const where = `${name} in ${packageDir}`
  seen.add(where)

  const report = (kind, detail, scope = 'same') =>
    findings.push({ where, kind, detail, scope, known: KNOWN.get(where) })

  /* bypass: the package hands out this name, but not its own generated class */
  const { exported, origin } = indexExports(packageDir)
  const from = origin.get(name)
  if (exported.has(name) && from && !from.includes('/gen/')) {
    report('bypass', `src/index.ts exports ${name} from '${from}'`)
  }

  /*
   * A declaration in another package is usually two unrelated models that
   * happened to pick the same word - lib.events and the map widget both have
   * a Condition. Those are reported as notes rather than failures; a real
   * cross-package substitution shows up as a bypass above, because the name
   * has to be re-exported for anyone to receive the wrong class.
   */
  const scopeOf = file => (file.startsWith(`${packageDir}/`) ? 'same' : 'cross')

  /* twin: a second class of the same name that does not build on the first */
  for (const found of declarations.get(name) ?? []) {
    if (found.kind !== 'class') continue
    if (found.extends === `${name}Impl`) continue
    report('twin', `${found.file} declares class ${name}`, scopeOf(found.file))
  }

  /* shadow: the generated interface re-declared by hand beside it */
  if (existsSync(join(ROOT, dirname(implFile), `${name}.ts`))) {
    for (const found of declarations.get(name) ?? []) {
      if (found.kind !== 'interface') continue
      report(
        'shadow',
        `${found.file} re-declares interface ${name}`,
        scopeOf(found.file),
      )
    }
  }
}

// ---------------------------------------------------------------- reporting

/* A bypass counts wherever it sits; a same-name declaration only at home. */
const counts = findings.filter(f => f.kind === 'bypass' || f.scope === 'same')
const notes = findings.filter(f => !counts.includes(f))
const open = counts.filter(f => all || !f.known)
const known = counts.filter(f => !all && f.known)

for (const f of open) {
  console.error(`${f.kind.padEnd(7)} ${f.where}\n        ${f.detail}`)
}
for (const f of known) {
  console.log(`known   ${f.where}  (#${f.known})\n        ${f.detail}`)
}
for (const f of notes) {
  console.log(
    `note    ${f.where} shares its name with another package\n        ${f.detail}`,
  )
}

/* A known entry whose finding has gone means the list outlived the defect. */
const stale = [...KNOWN.keys()].filter(
  where => seen.has(where) && !counts.some(f => f.where === where),
)
for (const where of stale) {
  console.error(`stale   ${where} is listed as known but no longer found`)
}

console.log(
  `${generated.length} generated classes checked, ` +
    `${open.length} finding(s)${known.length ? `, ${known.length} known` : ''}` +
    `${notes.length ? `, ${notes.length} note(s)` : ''}`,
)

process.exit(open.length || stale.length ? 1 : 0)
