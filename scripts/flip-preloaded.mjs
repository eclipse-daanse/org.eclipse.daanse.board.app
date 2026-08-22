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
 * Migration codemod: flips preloaded modules into URL bundles.
 *
 * For every package named on the command line it
 *   - points the manifest entry at /bundles/<id>/index.js,
 *   - derives sharedDependencies from the package's imports,
 *   - writes a vite.bundle.config.ts,
 *   - and, when the package is currently shared by platform.compat, adds a
 *     src/bundle.ts entry that self-registers the package as a tsm library
 *     plus the matching manifest capability, and removes it from compat.
 *
 * Afterwards it recomputes `dependencies` for EVERY bundle manifest from its
 * sharedDependencies (the provider of each library is what must be active
 * first), and regenerates preloaded.ts and bundles.ts.
 *
 * Usage: node scripts/flip-preloaded.mjs [--dry] <package-suffix>...
 *   package-suffix: e.g. lib.composer.chart (matched against the full name)
 */
import { existsSync, globSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'

const WS = 'org.eclipse.daanse.board.app.'
const NPM_SHARED = { vue: '^3.5.0', 'vue-router': '^5.0.0', pinia: '^3.0.0', vuedraggable: '^4.0.0' }
// Libraries the launcher itself registers before loadAll - the OSGi system
// bundle exporting the framework packages. No module dependency edge needed.
const HOST_LIBS = new Set(['org.eclipse.daanse.board.app.lib.core'])
const PRELOADED_TS = 'packages/app/default/src/preloaded.ts'
const BUNDLES_TS = 'packages/app/default/src/bundles.ts'
const COMPAT_TS = 'packages/platform/compat/src/index.ts'
const COMPAT_MANIFEST = 'packages/platform/compat/manifest.json'

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

const dry = process.argv.includes('--dry')
const recomputeOnly = process.argv.includes('--recompute')
const resync = process.argv.includes('--resync')
const libifyMode = process.argv.includes('--libify')
const libMode = process.argv.includes('--lib')
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
if (args.length === 0 && !recomputeOnly && !resync) {
  console.error('usage: node scripts/flip-preloaded.mjs [--dry] [--lib] <package-suffix>...')
  console.error('  --lib: the packages are not preloaded modules but pure static')
  console.error('         libraries; create a self-registering library bundle each')
  process.exit(1)
}

// ---------------------------------------------------------------- workspace
const packages = {} // full name -> { dir, version }
for (const pkgJson of globSync('packages/**/package.json')) {
  if (pkgJson.includes('node_modules') || pkgJson.includes('/dist')) continue
  let meta
  try { meta = JSON.parse(readFileSync(pkgJson, 'utf-8')) } catch { continue }
  if (meta.name?.startsWith(WS)) packages[meta.name] = { dir: dirname(pkgJson), version: meta.version }
}

const parseManifestImports = (file) =>
  [...readFileSync(file, 'utf-8').matchAll(/from '([^']+)\/manifest\.json'/g)].map((m) => m[1])

// preloaded.ts is deleted once its list is empty; --lib runs continue after that
const preloadedNow = existsSync(PRELOADED_TS) ? parseManifestImports(PRELOADED_TS) : []
const bundlesNow = parseManifestImports(BUNDLES_TS)
const compatNow = existsSync(COMPAT_TS)
  ? [...readFileSync(COMPAT_TS, 'utf-8').matchAll(/'(org\.eclipse[^']+)':/g)].map((m) => m[1])
  : []

const pool = libMode || libifyMode ? Object.keys(packages) : preloadedNow
const flips = args.map((suffix) => {
  const hits = pool.filter((p) => p === suffix || p === WS + suffix)
  if (hits.length !== 1) {
    console.error(`"${suffix}" matches ${hits.length} ${libMode ? 'workspace' : 'preloaded'} package(s): ${hits.join(', ')}`)
    process.exit(1)
  }
  return hits[0]
})
const flipSet = new Set(flips)

// ------------------------------------------------------------------ helpers
const readManifest = (full) => JSON.parse(readFileSync(join(packages[full].dir, 'manifest.json'), 'utf-8'))
const writeJson = (file, data) => writeFileSync(file, JSON.stringify(data, null, 2) + '\n')

function scanImports(dir) {
  const npm = new Set()
  const ws = new Set()
  const other = new Set()
  for (const file of globSync(join(dir, 'src/**/*.{ts,tsx,vue}'))) {
    // Type-only imports vanish at build time and must not force a runtime
    // library requirement; commented-out imports never existed.
    const text = readFileSync(file, 'utf-8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/[^\n]*$/gm, '')
      .replace(/^\s*(?:import|export)\s+type\s[^\n]*$/gm, '')
    const specs = [
      ...[...text.matchAll(/from\s+['"]([^'"]+)['"]/g)].map((m) => m[1]),
      ...[...text.matchAll(/import\s*\(\s*['"]([^'"]+)['"]/g)].map((m) => m[1]),
      ...[...text.matchAll(/^\s*import\s+['"]([^'"]+)['"]/gm)].map((m) => m[1]),
    ]
    for (const spec of specs) {
      if (spec.startsWith('.') || spec.startsWith('@/')) continue
      const base = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0]
      if (base in NPM_SHARED) npm.add(base)
      else if (base.startsWith(WS)) ws.add(base)
      else other.add(base)
    }
  }
  return { npm, ws, other }
}

/** Which module must be active for library `full` to be require-able. */
function providerOf(full, compatRemaining) {
  if (HOST_LIBS.has(full)) return 'host'
  const pkg = packages[full]
  if (pkg) {
    const manifestPath = join(pkg.dir, 'manifest.json')
    if (existsSync(manifestPath)) {
      const m = JSON.parse(readFileSync(manifestPath, 'utf-8'))
      const selfShared = (m.capabilities ?? []).some(
        (c) => c.namespace === 'tsm.library' && c.attributes?.library === full,
      )
      if (selfShared && m.entry?.startsWith('/bundles/')) return m.id
    }
  }
  if (compatRemaining.has(full)) return 'platform.compat'
  return null
}

const bundleConfig = (entryFile) => `${HEADER}
/**
 * Builds this package as a standalone tsm bundle - the artefact the
 * ModuleLoader fetches through the manifest's entry URL. Shared libraries
 * never end up inside: the tsm plugin externalizes them and the chunk
 * rewriter (WORKAROUND tsm#20) turns every surviving import form into
 * \`__tsm__.require(...)\` against the host's single instances.
 */

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { tsmPlugin } from '@eclipse-daanse/tsm/vite'
import manifest from './manifest.json'

const allShared = (manifest.sharedDependencies ?? []).map((d) => d.id)
// Workspace libraries resolve through __tsm__.require; browser-standard
// libraries (vue and friends) stay bare imports, resolved by the import map
// in the host page - platform.vue serves the artefacts they point at.
const sharedModules = allShared.filter((id) => id.startsWith('org.eclipse.daanse'))
// The framework API rides the import map too - the system bundle serves it.
const importMapLibraries = [...allShared.filter((id) => !id.startsWith('org.eclipse.daanse')), '@eclipse-daanse/tsm']

/**
 * WORKAROUND (tsm#20): rewrites every import form of a shared module that
 * survives into the chunks. This is the renderChunk half proposed in the
 * issue; it moves upstream as a PR and this helper disappears.
 */
function rewriteSharedImportsInChunks() {
  const esc = (s: string) => s.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&')
  const bindings = (inner: string) =>
    inner
      .split(',')
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => {
        const m = p.match(/^([\\w$]+)\\s+as\\s+([\\w$]+)$/)
        return m ? \`\${m[1]}: \${m[2]}\` : p
      })
      .join(', ')

  return {
    name: 'rewrite-shared-imports-in-chunks',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(_o: unknown, bundle: Record<string, { type: string; code?: string }>) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== 'chunk' || !chunk.code) continue
        let code = chunk.code
        for (const id of sharedModules) {
          const q = \`["']\${esc(id)}["']\`
          code = code.replace(
            new RegExp(\`import\\\\s+([\\\\w$]+)\\\\s*,\\\\s*\\\\{([^}]*?)\\\\}\\\\s*from\\\\s*\${q};?\`, 'g'),
            (_, def, inner) =>
              \`const __tsm_m = __tsm__.require('\${id}'); const \${def} = (__tsm_m && __tsm_m.default) ?? __tsm_m; const { \${bindings(inner)} } = __tsm_m;\`,
          )
          code = code.replace(
            new RegExp(\`import\\\\s*\\\\{([^}]*?)\\\\}\\\\s*from\\\\s*\${q};?\`, 'g'),
            (_, inner) => \`const { \${bindings(inner)} } = __tsm__.require('\${id}');\`,
          )
          code = code.replace(
            new RegExp(\`import\\\\s+\\\\*\\\\s+as\\\\s+([\\\\w$]+)\\\\s*from\\\\s*\${q};?\`, 'g'),
            (_, ns) => \`const \${ns} = __tsm__.require('\${id}');\`,
          )
          code = code.replace(
            new RegExp(\`import\\\\s+([\\\\w$]+)\\\\s+from\\\\s*\${q};?\`, 'g'),
            (_, def) => \`const \${def} = (() => { const m = __tsm__.require('\${id}'); return (m && m.default) ?? m })();\`,
          )
          code = code.replace(new RegExp(\`import\\\\s*\${q};?\\\\s*\`, 'g'), '')
        }
        chunk.code = code
      }
    },
  } as import('vite').Plugin
}

/**
 * Inlines the emitted CSS into the JS entry and injects it on import; the
 * loader only ever fetches index.js. The style tag is keyed by module id,
 * so a reload replaces it instead of stacking copies.
 */
function inlineCss() {
  return {
    name: 'inline-bundle-css',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(_options: unknown, bundle: Record<string, { type: string; source?: unknown; code?: string; fileName: string }>) {
      const cssFiles = Object.values(bundle).filter((f) => f.fileName.endsWith('.css'))
      const entry = Object.values(bundle).find((f) => f.fileName === 'index.js')
      if (!entry || cssFiles.length === 0) return

      const css = cssFiles.map((f) => String(f.source)).join('\\n')
      const inject = \`(function(){var i=\${JSON.stringify(manifest.id)},d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=\${JSON.stringify(css)};})();\\n\`
      entry.code = inject + entry.code
      for (const f of cssFiles) delete bundle[f.fileName]
    },
  } as import('vite').Plugin
}

export default defineConfig({
  // Bundles run in the browser; embedded third-party code still probing
  // process.env must see a value instead of throwing.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
  },
  plugins: [
    vue(),
    inlineCss(),
    rewriteSharedImportsInChunks(),
    tsmPlugin({
      manifest: resolve(__dirname, 'manifest.json'),
      components: 'derive',
      sharedModules,
      // Cast: tsm links its own vite copy, whose Plugin type is nominally
      // incompatible with the workspace's - same shape, different identity.
    }) as unknown as import('vite').PluginOption,
  ],
  build: {
    target: 'es2022',
    rollupOptions: { external: importMapLibraries },
    minify: false,
    outDir: resolve(__dirname, 'dist-bundle'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, '${entryFile}'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
  },
})
`

const libEntry = (full, shortId, version) => `${HEADER}
/**
 * Bundle entry: the package's public API plus its registration as a shared
 * library. Other bundles import this package through \`__tsm__.require(...)\`;
 * the registration here is what makes that resolvable once this module is
 * active - the contract platform.compat carried transitionally.
 */

import * as library from './index'

export * from './index'

const LIBRARY_ID = '${full}'
const VERSION = '${version}'

interface SharedLibraryRuntime {
  register(moduleId: string, exports: unknown, version: string, providedBy?: string): void
}

interface LifecycleModule {
  activate?: (context: unknown) => unknown
  deactivate?: (context: unknown) => unknown
}

export async function activate(context: unknown): Promise<void> {
  // The runtime the host initialized - the same global the rewritten
  // imports of consuming bundles resolve against.
  const runtime = (globalThis as { __tsm__?: SharedLibraryRuntime }).__tsm__
  if (!runtime) {
    throw new Error(\`\${LIBRARY_ID}: tsm runtime is not initialized\`)
  }
  runtime.register(LIBRARY_ID, library, VERSION, '${shortId}')
  await (library as LifecycleModule).activate?.(context)
}

export async function deactivate(context: unknown): Promise<void> {
  await (library as LifecycleModule).deactivate?.(context)
}
`

// ---------------------------------------------------------------- lib check
// A package needs the library treatment (self-registration as tsm.library)
// when any OTHER workspace package imports it at runtime - once everything
// is a bundle, that import becomes a `__tsm__.require` someone must serve.
const importedBy = new Set()
for (const [name, { dir }] of Object.entries(packages)) {
  for (const w of scanImports(dir).ws) if (w !== name) importedBy.add(w)
}

// ------------------------------------------------------------------- flips
const report = []
const problems = []
const flippedLibs = []

for (const full of recomputeOnly || resync || libifyMode ? [] : flips) {
  const pkg = packages[full]
  if (!pkg) { problems.push(`${full}: no workspace package found`); continue }
  const manifest = existsSync(join(pkg.dir, 'manifest.json'))
    ? readManifest(full)
    : {
        $schema: 'https://tsm.dev/schema/manifest/v1.json',
        id: full.slice(WS.length),
        name: full.slice(WS.length),
        version: pkg.version,
        exports: {},
      }
  const shortId = manifest.id
  const isLib = libMode || compatNow.includes(full) || importedBy.has(full)
  const { npm, ws, other } = scanImports(pkg.dir)

  const shared = []
  for (const [id, range] of Object.entries(NPM_SHARED)) if (npm.has(id)) shared.push({ id, versionRange: range })
  const compatRemaining = new Set(compatNow.filter((c) => !flipSet.has(c)))
  for (const w of [...ws].sort()) {
    if (w === full) continue
    const available =
      HOST_LIBS.has(w) || compatRemaining.has(w) || flipSet.has(w) || providerOf(w, compatRemaining) !== null
    if (!available) {
      problems.push(`${full}: imports ${w}, which no module shares - would be bundled (identity risk)`)
      continue
    }
    shared.push({ id: w, versionRange: '>=0.0.1-0' })
  }

  manifest.entry = `/bundles/${shortId}/index.js`
  if (shared.length > 0) manifest.sharedDependencies = shared
  else delete manifest.sharedDependencies
  if (isLib) {
    const capabilities = (manifest.capabilities ?? []).filter(
      (c) => !(c.namespace === 'tsm.library' && c.attributes?.library === full),
    )
    capabilities.push({ namespace: 'tsm.library', attributes: { library: full, version: pkg.version } })
    manifest.capabilities = capabilities
    if (compatNow.includes(full)) flippedLibs.push(full)
  }

  const entryFile = isLib ? 'src/bundle.ts' : 'src/index.ts'
  if (!dry) {
    writeJson(join(pkg.dir, 'manifest.json'), manifest)
    writeFileSync(join(pkg.dir, 'vite.bundle.config.ts'), bundleConfig(entryFile))
    if (isLib) writeFileSync(join(pkg.dir, 'src/bundle.ts'), libEntry(full, shortId, pkg.version))
  }
  report.push(
    `${shortId}${isLib ? ' [LIB]' : ''}: shared=[${shared.map((s) => s.id.replace(WS, '')).join(', ')}]` +
      (other.size ? ` bundled-npm=[${[...other].sort().join(', ')}]` : ''),
  )
}

// ------------------------------------------------------------------ libify
// An existing bundle that other bundles import at runtime additionally
// becomes a shared library: capability, self-registering entry, config entry.
if (libifyMode && !dry) {
  for (const full of flips) {
    const pkg = packages[full]
    const manifest = readManifest(full)
    const caps = manifest.capabilities ?? []
    if (!caps.some((c) => c.namespace === 'tsm.library' && c.attributes?.library === full)) {
      caps.push({ namespace: 'tsm.library', attributes: { library: full, version: pkg.version } })
      manifest.capabilities = caps
      writeJson(join(pkg.dir, 'manifest.json'), manifest)
    }
    if (!existsSync(join(pkg.dir, 'src/bundle.ts'))) {
      writeFileSync(join(pkg.dir, 'src/bundle.ts'), libEntry(full, manifest.id, pkg.version))
    }
    const configPath = join(pkg.dir, 'vite.bundle.config.ts')
    const config = readFileSync(configPath, 'utf-8')
    if (config.includes("'src/index.ts'")) {
      writeFileSync(configPath, config.replace("'src/index.ts'", "'src/bundle.ts'"))
    }
    console.log(`libified ${manifest.id}`)
  }
}

// ------------------------------------------------------------------- resync
// Re-derives every bundle manifest's sharedDependencies from its actual
// runtime imports - undeclared imports are silently bundled copies, declared
// but unused ones are stale edges. Version ranges are preserved.
if (resync && !dry) {
  const compatRemainingForScan = new Set(compatNow)
  for (const [full, pkg] of Object.entries(packages)) {
    const manifestPath = join(pkg.dir, 'manifest.json')
    if (!existsSync(manifestPath) || !existsSync(join(pkg.dir, 'vite.bundle.config.ts'))) continue
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
    if (!manifest.entry?.startsWith('/bundles/')) continue
    const { npm, ws } = scanImports(pkg.dir)
    const previous = new Map((manifest.sharedDependencies ?? []).map((d) => [d.id, d.versionRange]))
    // What a package offers as a capability is its own product, never its
    // own requirement - platform.vue imports vue to BE the vue provider.
    const offersItself = new Set(
      (manifest.capabilities ?? [])
        .filter((c) => c.namespace === 'tsm.library')
        .map((c) => c.attributes?.library),
    )
    const shared = []
    for (const [id, range] of Object.entries(NPM_SHARED)) {
      if (npm.has(id) && !offersItself.has(id)) shared.push({ id, versionRange: previous.get(id) ?? range })
    }
    for (const w of [...ws].sort()) {
      if (w === full) continue
      if (!HOST_LIBS.has(w) && providerOf(w, compatRemainingForScan) === null) {
        problems.push(`${manifest.id}: imports ${w}, which no module shares - would be bundled (identity risk)`)
        continue
      }
      shared.push({ id: w, versionRange: previous.get(w) ?? '>=0.0.1-0' })
    }
    const before = JSON.stringify(manifest.sharedDependencies ?? [])
    if (shared.length > 0) manifest.sharedDependencies = shared
    else delete manifest.sharedDependencies
    if (JSON.stringify(manifest.sharedDependencies ?? []) !== before) {
      writeJson(manifestPath, manifest)
      console.log(`resynced ${manifest.id}`)
    }
  }
}

// ------------------------------------------- global dependency recomputation
const compatRemaining = new Set(compatNow.filter((c) => !flipSet.has(c)))
const allBundleFulls = [...new Set([...bundlesNow, ...flips])]

if (!dry) {
  // Two passes: providerOf reads manifests, so all flips must be written first.
  for (const full of allBundleFulls) {
    const pkg = packages[full]
    if (!pkg) continue
    const manifestPath = join(pkg.dir, 'manifest.json')
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
    if (!manifest.entry?.startsWith('/bundles/')) continue
    const providers = new Set()
    for (const sd of manifest.sharedDependencies ?? []) {
      const provider = sd.id in NPM_SHARED ? 'platform.vue' : providerOf(sd.id, compatRemaining)
      if (!provider) problems.push(`${manifest.id}: no provider for shared dependency ${sd.id}`)
      else if (provider !== 'host' && provider !== manifest.id) providers.add(provider)
    }
    manifest.dependencies = [...providers].sort()
    if (manifest.dependencies.length === 0) delete manifest.dependencies
    writeJson(manifestPath, manifest)
  }

  // ------------------------------------------------------------- compat shrink
  if (flippedLibs.length > 0) {
    let compatSrc = readFileSync(COMPAT_TS, 'utf-8')
    for (const full of flippedLibs) {
      compatSrc = compatSrc.replace(new RegExp(`^\\s*'${full.replace(/\./g, '\\.')}':.*\\n`, 'm'), '')
    }
    writeFileSync(COMPAT_TS, compatSrc)
    const compatManifest = JSON.parse(readFileSync(COMPAT_MANIFEST, 'utf-8'))
    compatManifest.capabilities = (compatManifest.capabilities ?? []).filter(
      (c) => !(c.namespace === 'tsm.library' && flippedLibs.includes(c.attributes?.library)),
    )
    writeJson(COMPAT_MANIFEST, compatManifest)
  }

  // ------------------------------------------------- regenerate the two lists
  const remainingPreloaded = preloadedNow.filter((p) => !flipSet.has(p))
  if (remainingPreloaded.length > 0) writeFileSync(
    PRELOADED_TS,
    `${HEADER}
import type { ModuleManifest } from '@eclipse-daanse/tsm'
${remainingPreloaded.map((p, i) => `import m${i} from '${p}/manifest.json'`).join('\n')}

/**
 * Modules still statically bundled with the host, but run by the tsm
 * ModuleLoader: the host resolves their containers (entryResolver), the
 * loader does everything else - ordering via requiresService and the
 * unsatisfied state, lifecycle, scoped registrations.
 *
 * This replaced the hand-run ModuleBootstrapper. An entry leaves this list
 * by becoming a URL bundle in bundles.ts (scripts/flip-preloaded.mjs does
 * the move); when the list is empty, the file is deleted.
 */
export const preloadedModules: Array<[ModuleManifest, () => Promise<unknown>]> = [
${remainingPreloaded.map((p, i) => `  [m${i} as ModuleManifest, () => import('${p}')],`).join('\n')}
]
`,
  )
  writeFileSync(
    BUNDLES_TS,
    `${HEADER}
import type { ModuleManifest } from '@eclipse-daanse/tsm'
${allBundleFulls.map((p, i) => `import b${i} from '${p}/manifest.json'`).join('\n')}

/**
 * The URL bundles: modules the loader fetches through their manifest entry.
 * The dev server serves each package's dist-bundle/ under /bundles/<id>/;
 * the production build copies them into dist/bundles/.
 */
export const bundles: ModuleManifest[] = [
${allBundleFulls.map((p, i) => `  b${i} as ModuleManifest,`).join('\n')}
]
`,
  )
}

// ------------------------------------------------------------------- report
console.log(`${dry ? '[dry] ' : ''}flipped ${report.length} module(s):`)
for (const line of report) console.log('  ' + line)
if (flippedLibs.length) console.log(`compat shrinks by ${flippedLibs.length} to ${compatRemaining.size} libraries`)
console.log(`preloaded: ${preloadedNow.length} -> ${preloadedNow.length - flips.length} | bundles: ${bundlesNow.length} -> ${allBundleFulls.length}`)
if (problems.length) {
  console.error('\nPROBLEMS:')
  for (const p of problems) console.error('  ' + p)
  process.exitCode = 1
}
