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
 * Builds this widget as a standalone tsm bundle - the artefact the
 * ModuleLoader fetches through the manifest's entry URL.
 *
 * Nothing shared ends up inside: vue, vue-router and the still-static
 * workspace packages are rewritten to `__tsm__.require(...)` by the tsm
 * plugin, so the bundle uses the host's single instances. The manifest is
 * the source of that list - the declaration the loader validates and the
 * build that has to honour it are the same sentence.
 *
 * The regular vite.config.ts still builds the package as a workspace
 * library; this config exists solely for the bundle artefact.
 */

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { tsmPlugin } from '@eclipse-daanse/tsm/vite'
import manifest from './manifest.json'

/**
 * Inlines the emitted CSS into the JS entry and injects it on import.
 *
 * A library build writes styles to a separate .css file, but the loader only
 * imports index.js - nothing would ever fetch the stylesheet. Inlining keeps
 * the bundle a single self-contained artefact; the style tag is keyed by
 * module id, so a reload replaces it instead of stacking copies.
 */

/**
 * WORKAROUND (tsm#20): rewrites every import form of a shared module that
 * survives into the chunks - source-level transform cannot see what Rollup
 * synthesizes or what third-party code inside node_modules carries, and the
 * tsm plugin misses the combined `import Default, { named }` form entirely.
 * This is the renderChunk half proposed in the issue; it moves upstream as
 * a PR and this helper disappears.
 */
function rewriteSharedImportsInChunks() {
  const ids = sharedModules
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const bindings = (inner: string) =>
    inner
      .split(',')
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => {
        const m = p.match(/^([\w$]+)\s+as\s+([\w$]+)$/)
        return m ? `${m[1]}: ${m[2]}` : p
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
        for (const id of ids) {
          const q = `["']${esc(id)}["']`
          // import Default, { named } from 'id'
          code = code.replace(
            new RegExp(`import\\s+([\\w$]+)\\s*,\\s*\\{([^}]*?)\\}\\s*from\\s*${q};?`, 'g'),
            (_, def, inner) =>
              `const __tsm_m = __tsm__.require('${id}'); const ${def} = (__tsm_m && __tsm_m.default) ?? __tsm_m; const { ${bindings(inner)} } = __tsm_m;`,
          )
          // import { named } from 'id'
          code = code.replace(
            new RegExp(`import\\s*\\{([^}]*?)\\}\\s*from\\s*${q};?`, 'g'),
            (_, inner) => `const { ${bindings(inner)} } = __tsm__.require('${id}');`,
          )
          // import * as ns from 'id'
          code = code.replace(
            new RegExp(`import\\s+\\*\\s+as\\s+([\\w$]+)\\s*from\\s*${q};?`, 'g'),
            (_, ns) => `const ${ns} = __tsm__.require('${id}');`,
          )
          // import Default from 'id'
          code = code.replace(
            new RegExp(`import\\s+([\\w$]+)\\s+from\\s*${q};?`, 'g'),
            (_, def) => `const ${def} = (() => { const m = __tsm__.require('${id}'); return (m && m.default) ?? m })();`,
          )
          // bare side-effect import
          code = code.replace(new RegExp(`import\\s*${q};?\\s*`, 'g'), '')
        }
        chunk.code = code
      }
    },
  } as import('vite').Plugin
}

function inlineCss() {
  return {
    name: 'inline-bundle-css',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(_options: unknown, bundle: Record<string, { type: string; source?: unknown; code?: string; fileName: string }>) {
      const cssFiles = Object.values(bundle).filter((f) => f.fileName.endsWith('.css'))
      const entry = Object.values(bundle).find((f) => f.fileName === 'index.js')
      if (!entry || cssFiles.length === 0) return

      const css = cssFiles.map((f) => String(f.source)).join('\n')
      const inject = `(function(){var i=${JSON.stringify(manifest.id)},d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=${JSON.stringify(css)};})();\n`
      entry.code = inject + entry.code
      for (const f of cssFiles) delete bundle[f.fileName]
    },
  } as import('vite').Plugin
}

const allShared = (manifest.sharedDependencies ?? []).map((d) => d.id)
// Workspace libraries resolve through __tsm__.require; browser-standard
// libraries (vue and friends) stay bare imports, resolved by the import map
// in the host page - platform.vue serves the artefacts they point at.
// Only the host library stays on __tsm__.require: lib.core carries the
// service registry singleton and can never arrive by URL. Every other
// library is a bare import, resolved by the import map.
const sharedModules = allShared.filter((id) => id === 'org.eclipse.daanse.board.app.lib.core')
// The framework API rides the import map too - the system bundle serves it.
const importMapLibraries = [...allShared.filter((id) => id !== 'org.eclipse.daanse.board.app.lib.core'), '@eclipse-daanse/tsm']

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
      /*
       * The model file is a contract, not code: it is read for the field
       * descriptions the generator drops, and carrying a copy of a text
       * file across the boundary costs nothing at runtime.
       */
      boundary: { allow: ['../../../../lib/datasource/sparql/model'] },
      components: 'derive',
      sharedModules,
      // Cast: tsm links its own vite copy, whose Plugin type is nominally
      // incompatible with the workspace's - same shape, different identity.
    }) as unknown as import('vite').PluginOption,
  ],
  build: {
    target: 'es2022',
    rollupOptions: { external: importMapLibraries },
    // Production artefacts are minified; the dev watcher overrides this
    // with `minify: false` for fast incremental rebuilds.
    minify: 'esbuild',
    outDir: resolve(__dirname, 'dist-bundle'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
  },
})
