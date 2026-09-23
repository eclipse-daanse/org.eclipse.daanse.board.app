/**
 * Keeps the texts of every package honest.
 *
 * A package that shows words carries them itself: src/i18n/<language>.json,
 * one file per language, all under the one namespace the package owns. Its
 * manifest names that namespace (capability tsm.i18n); everything else
 * follows from those files, and this script is what makes it follow:
 *
 *   sync   writes src/i18n/index.ts of every package - the Translations
 *          component lib.i18next collects - exports it from src/index.ts,
 *          and writes the languages into the manifest's tsm.i18n capability.
 *          Nobody should have to keep those by hand.
 *   check  fails when
 *            - a key the code uses is missing from the namespace it names,
 *            - a package holds a key no code uses,
 *            - the languages of a package do not hold the same keys,
 *            - a key has an empty text,
 *            - two packages claim the same namespace,
 *            - a package reads a namespace that is neither its own nor one
 *              of a package it depends on - deployed alone, it would show
 *              its keys,
 *            - index.ts, the export or the manifest are out of date (run sync).
 *
 * A new package with texts: create src/i18n/en.json (and the other
 * languages), add to its manifest.json
 *   { "namespace": "tsm.i18n", "attributes": { "namespace": "<ns>" } }
 * and run sync.
 *
 * What counts as used:
 *   - t('Key') in a file that calls useTranslation('ns') - the namespace is
 *     prefixed the way useTranslation prefixes it; useText() in the controls
 *     stands for the namespace 'controls',
 *   - t('ns:Key'), and any other string literal of the exact shape ns:Key
 *     whose namespace exists - which covers .xmi labels and keys kept in
 *     metadata, such as a widget's name,
 *   - keys built at runtime cannot be seen, so a file declares them:
 *       i18n-keys: ns:Prefix.*   (in a comment; the * matches the rest)
 *
 * Usage: node scripts/i18n.mjs sync | check
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
const SOURCES = join(ROOT, 'packages')
const SKIP = new Set(['node_modules', 'dist', 'dist-bundle', 'dist-bundle.building', '.turbo', 'test-results', 'perf-results'])
/* The language every package has to speak: i18next falls back to it. */
const FALLBACK = 'en'
/* The id lib.i18next tracks - see packages/lib/i18next/src/translations.ts. */
const SERVICE = 'Translations'
const CAPABILITY = 'tsm.i18n'

const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'))

/* ---------- packages ---------- */

function* packageDirs(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue
    const path = join(dir, name)
    if (!statSync(path).isDirectory()) continue
    if (existsSync(join(path, 'package.json'))) yield path
    yield* packageDirs(path)
  }
}

/* Every package's manifest id, so a dependency can be followed to its directory. */
const manifests = new Map() // dir -> manifest
const dirById = new Map() // manifest id -> dir
for (const dir of packageDirs(SOURCES)) {
  const file = join(dir, 'manifest.json')
  if (!existsSync(file)) continue
  const manifest = readJson(file)
  manifests.set(dir, manifest)
  dirById.set(manifest.id, dir)
}

/* The packages with texts of their own: a src/i18n folder with JSON in it. */
const owners = [...packageDirs(SOURCES)]
  .filter((dir) => existsSync(join(dir, 'src/i18n')) && languagesOf(dir).length)
  .sort()

function languagesOf(dir) {
  return readdirSync(join(dir, 'src/i18n'))
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.slice(0, -'.json'.length))
    .sort()
}

function namespaceOf(dir) {
  const capability = (manifests.get(dir)?.capabilities ?? []).find((c) => c.namespace === CAPABILITY)
  return capability?.attributes?.namespace
}

function textsOf(dir, language) {
  return readJson(join(dir, 'src/i18n', `${language}.json`))
}

/* {a: {b: 'x'}} -> Map { 'a.b' => 'x' } */
function flatten(tree, prefix = '', out = new Map()) {
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (value && typeof value === 'object') flatten(value, path, out)
    else out.set(path, value)
  }
  return out
}

/* i18next plural forms are one key to the code: count_one, count_other */
const PLURAL = /_(zero|one|two|few|many|other)$/
const baseKey = (key) => key.replace(PLURAL, '')

const HEADER = `/*********************************************************************
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
`

/* Single quotes, as the rest of the code writes them. */
const quote = (text) => `'${text.replace(/[\\']/g, '\\$&')}'`
const property = (name) => (/^[A-Za-z_$][\w$]*$/.test(name) ? name : quote(name))

const className = (namespace) => `${namespace[0].toUpperCase()}${namespace.slice(1)}Translations`

function indexFor(dir) {
  const namespace = namespaceOf(dir)
  const languages = languagesOf(dir)
  const ident = (language) => `lang_${language.replace(/\W/g, '_')}`
  return (
    HEADER +
    `
/*
 * Generated by scripts/i18n.mjs sync - the texts of this package, one file
 * per language in this folder. lib.i18next collects every ${quote(SERVICE)}
 * service, so these texts arrive with this bundle and leave with it.
 */
import { component } from '@eclipse-daanse/tsm'
` +
    languages.map((language) => `import ${ident(language)} from './${language}.json'`).join('\n') +
    `

export const NAMESPACE = ${quote(namespace)}

@component({
  service: [${quote(SERVICE)}],
  properties: { 'i18n.namespace': NAMESPACE },
})
export class ${className(namespace)} {
  readonly namespace = NAMESPACE
  readonly resources: Record<string, Record<string, unknown>> = {
` +
    languages.map((language) => `    ${property(language)}: ${ident(language)},`).join('\n') +
    `
  }
}
`
  )
}

const exportLine = (dir) => `export { ${className(namespaceOf(dir))} } from './i18n'`

const ENTRY_COMMENT = '/* Its texts - collected by lib.i18next, see src/i18n. */'

/* One line at the end of src/index.ts: whatever the package exports, its texts go with it. */
function entryFor(dir) {
  const text = readFileSync(join(dir, 'src/index.ts'), 'utf8')
    .replace(/\n*(\/\* Its texts[^\n]*\*\/\n)?export \{ \w+Translations \} from '\.\/i18n'\n?/g, '\n')
    .replace(/\n+$/, '')
  return `${text}\n\n${ENTRY_COMMENT}\n${exportLine(dir)}\n`
}

function manifestFor(dir) {
  const manifest = structuredClone(manifests.get(dir))
  manifest.capabilities = (manifest.capabilities ?? []).map((c) =>
    c.namespace === CAPABILITY ? { namespace: CAPABILITY, attributes: { namespace: namespaceOf(dir), languages: languagesOf(dir) } } : c,
  )
  return JSON.stringify(manifest, null, 2) + '\n'
}

/* The generated component needs the decorators - and the loader to find it. */
function packageJsonFor(dir) {
  const file = join(dir, 'package.json')
  const pkg = readJson(file)
  if (pkg.dependencies?.['@eclipse-daanse/tsm'] || pkg.peerDependencies?.['@eclipse-daanse/tsm']) return undefined
  pkg.dependencies = { '@eclipse-daanse/tsm': '0.1.0-next.1', ...pkg.dependencies }
  return JSON.stringify(pkg, null, 2) + '\n'
}

function entryIsCurrent(dir) {
  return readFileSync(join(dir, 'src/index.ts'), 'utf8').includes(exportLine(dir))
}

function sync() {
  const problems = []
  for (const dir of owners) {
    if (!namespaceOf(dir)) {
      problems.push(`${relative(ROOT, dir)}: manifest.json has no ${CAPABILITY} capability naming its namespace`)
      continue
    }
    writeFileSync(join(dir, 'src/i18n/index.ts'), indexFor(dir))
    if (!entryIsCurrent(dir)) writeFileSync(join(dir, 'src/index.ts'), entryFor(dir))
    writeFileSync(join(dir, 'manifest.json'), manifestFor(dir))
    const pkg = packageJsonFor(dir)
    if (pkg) writeFileSync(join(dir, 'package.json'), pkg)
  }
  if (problems.length) {
    console.error(problems.join('\n'))
    process.exit(1)
  }
  console.log(`synced ${owners.length} packages`)
}

/* ---------- sources ---------- */

/* The files of one package - not those of a package nested inside it. */
function* files(dir, top = dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue
    const path = join(dir, name)
    const stat = statSync(path)
    if (stat.isDirectory()) {
      if (path !== top && existsSync(join(path, 'package.json'))) continue
      yield* files(path, top)
    } else if (/\.(vue|ts|xmi)$/.test(name) && !/\.(test|spec|d)\.ts$/.test(name)) yield path
  }
}

const LITERAL = /(['"`])((?:(?!\1)[^\\\n]|\\.)*)\1/g
const QUALIFIED = /^([a-z][A-Za-z0-9]*):([A-Za-z][\w]*(?:\.[\w]+)*)$/
const XMI_LABEL = /\blabel="([^"]*)"/g
const DEFAULT_NS = /useTranslation\(\s*['"]([A-Za-z0-9]+)['"]\s*\)/
/* t('Key'), t("Key"), also $t / tt / i18n.t - anything named t right before the paren */
const CALL = /(?<![\w$])t\(\s*(['"])([^'"\n]+)\1/g
const DECLARED = /i18n-keys:\s*([a-z][A-Za-z0-9]*:[\w.]*\*?)/g

/* Every key a package uses, with the file it is used in. */
function usedKeys(known) {
  const uses = [] // [key, package dir, file]
  const prefixes = []
  const unqualified = [] // [file, key] - t('Key') without any namespace to resolve it against
  for (const pkg of packageDirs(SOURCES)) {
    for (const file of files(pkg)) {
      const note = (key) => uses.push([key, pkg, relative(ROOT, file)])
      const text = readFileSync(file, 'utf8')
      if (file.endsWith('.xmi')) {
        const model = text.replace(/<!--[\s\S]*?-->/g, '')
        for (const [, label] of model.matchAll(XMI_LABEL)) {
          const m = QUALIFIED.exec(label)
          if (m && known.has(m[1])) note(label)
        }
        /* An option's label is an expression inside an attribute, with the
           keys in single quotes. */
        for (const [, literal] of model.matchAll(/'([^'\n]*)'/g)) {
          const m = QUALIFIED.exec(literal)
          if (m && known.has(m[1])) note(literal)
        }
        continue
      }
      for (const [, declared] of text.matchAll(DECLARED)) prefixes.push([declared.replace(/\*$/, ''), pkg])
      /* A key in a comment is an example, not a use. */
      const code = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '').replace(/<!--[\s\S]*?-->/g, '')
      const namespace = DEFAULT_NS.exec(code)?.[1] ?? (/\buseText\(\)/.test(code) ? 'controls' : undefined)
      for (const [, , key] of code.matchAll(CALL)) {
        if (QUALIFIED.test(key)) note(key)
        else if (namespace) note(`${namespace}:${key}`)
        else unqualified.push([relative(ROOT, file), key])
      }
      for (const [, , literal] of code.matchAll(LITERAL)) {
        const m = QUALIFIED.exec(literal)
        if (m && known.has(m[1])) note(literal)
      }
    }
  }
  return { uses, prefixes, unqualified }
}

/* ---------- check ---------- */

function check() {
  const problems = []
  const ownerOf = new Map() // namespace -> dir
  const held = new Set() // ns:key, plural forms folded
  for (const dir of owners) {
    const where = relative(ROOT, dir)
    const namespace = namespaceOf(dir)
    if (!namespace) {
      problems.push(`${where}: manifest.json has no ${CAPABILITY} capability naming its namespace`)
      continue
    }
    if (ownerOf.has(namespace)) {
      problems.push(`${where}: namespace ${namespace} is already ${relative(ROOT, ownerOf.get(namespace))}'s`)
    }
    ownerOf.set(namespace, dir)

    const languages = languagesOf(dir)
    if (!languages.includes(FALLBACK)) problems.push(`${where}: has no ${FALLBACK}.json - it is what every language falls back to`)
    const keys = new Map(languages.map((language) => [language, flatten(textsOf(dir, language))]))
    const all = new Set([...keys.values()].flatMap((k) => [...k.keys()]))
    for (const [language, texts] of keys) {
      for (const key of all) if (!texts.has(key)) problems.push(`${where}: ${language}.json misses ${namespace}:${key}`)
      for (const [key, value] of texts) {
        if (typeof value !== 'string' || value.trim() === '') problems.push(`${where}: ${language}.json has no text for ${namespace}:${key}`)
      }
    }
    for (const key of all) held.add(`${namespace}:${baseKey(key)}`)

    const index = join(dir, 'src/i18n/index.ts')
    if (!existsSync(index) || readFileSync(index, 'utf8') !== indexFor(dir)) problems.push(`${where}: src/i18n/index.ts is out of date - run yarn i18n:sync`)
    if (!entryIsCurrent(dir)) problems.push(`${where}: src/index.ts does not export its Translations - run yarn i18n:sync`)
    if (readFileSync(join(dir, 'manifest.json'), 'utf8') !== manifestFor(dir)) problems.push(`${where}: manifest.json languages are out of date - run yarn i18n:sync`)
    if (packageJsonFor(dir)) problems.push(`${where}: package.json lacks @eclipse-daanse/tsm - run yarn i18n:sync`)
  }

  /* What a package may read: its own namespace and those of what it depends on. */
  const reachable = (dir) => {
    const namespaces = new Set([namespaceOf(dir)])
    for (const id of manifests.get(dir)?.dependencies ?? []) {
      const dependency = dirById.get(id)
      if (dependency && namespaceOf(dependency)) namespaces.add(namespaceOf(dependency))
    }
    return namespaces
  }

  const known = new Set(ownerOf.keys())
  const { uses, prefixes, unqualified } = usedKeys(known)
  const usedBase = new Set()
  const reported = new Set()
  for (const [key, dir, file] of uses) {
    usedBase.add(key)
    const namespace = key.split(':')[0]
    let problem
    if (!known.has(namespace)) problem = `${file}: ${key} - no package owns the namespace ${namespace}`
    else if (!held.has(key)) problem = `${file}: ${key} is used but ${relative(ROOT, ownerOf.get(namespace))} does not have it`
    /* A package without a manifest is no bundle - a test harness, say - and loads what it likes. */
    else if (manifests.has(dir) && !reachable(dir).has(namespace)) {
      problem = `${file}: ${key} belongs to ${relative(ROOT, ownerOf.get(namespace))}, which ${relative(ROOT, dir)} does not depend on`
    }
    if (problem && !reported.has(problem)) {
      reported.add(problem)
      problems.push(problem)
    }
  }
  for (const [file, key] of unqualified) {
    problems.push(`${file}: t('${key}') has no namespace - pass one to useTranslation or write ns:${key}`)
  }
  for (const key of held) {
    if (usedBase.has(key)) continue
    if (prefixes.some(([prefix]) => key.startsWith(prefix))) continue
    problems.push(`${relative(ROOT, ownerOf.get(key.split(':')[0]))}: ${key} is there but nothing uses it`)
  }

  if (problems.length) {
    console.error(problems.sort().join('\n'))
    console.error(`\n${problems.length} problem(s)`)
    process.exit(1)
  }
  const languages = new Set(owners.flatMap(languagesOf))
  console.log(`${held.size} keys in ${owners.length} packages, ${languages.size} languages - all used, none missing`)
}

const command = process.argv[2]
if (command === 'sync') sync()
else if (command === 'check') check()
else {
  console.error('usage: node scripts/i18n.mjs sync | check')
  process.exit(2)
}
