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
 * Builds this package as a standalone tsm bundle - the artefact the
 * ModuleLoader fetches through the manifest's entry URL. Shared libraries
 * never end up inside: the tsm plugin externalizes them and the chunk
 * rewriter (WORKAROUND tsm#20) turns every surviving import form into
 * `__tsm__.require(...)` against the host's single instances.
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
const importMapLibraries = allShared.filter((id) => !id.startsWith('org.eclipse.daanse'))

/**
 * WORKAROUND (tsm#20): rewrites every import form of a shared module that
 * survives into the chunks. This is the renderChunk half proposed in the
 * issue; it moves upstream as a PR and this helper disappears.
 */
function rewriteSharedImportsInChunks() {
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
        for (const id of sharedModules) {
          const q = `["']${esc(id)}["']`
          code = code.replace(
            new RegExp(`import\\s+([\\w$]+)\\s*,\\s*\\{([^}]*?)\\}\\s*from\\s*${q};?`, 'g'),
            (_, def, inner) =>
              `const __tsm_m = __tsm__.require('${id}'); const ${def} = (__tsm_m && __tsm_m.default) ?? __tsm_m; const { ${bindings(inner)} } = __tsm_m;`,
          )
          code = code.replace(
            new RegExp(`import\\s*\\{([^}]*?)\\}\\s*from\\s*${q};?`, 'g'),
            (_, inner) => `const { ${bindings(inner)} } = __tsm__.require('${id}');`,
          )
          code = code.replace(
            new RegExp(`import\\s+\\*\\s+as\\s+([\\w$]+)\\s*from\\s*${q};?`, 'g'),
            (_, ns) => `const ${ns} = __tsm__.require('${id}');`,
          )
          code = code.replace(
            new RegExp(`import\\s+([\\w$]+)\\s+from\\s*${q};?`, 'g'),
            (_, def) => `const ${def} = (() => { const m = __tsm__.require('${id}'); return (m && m.default) ?? m })();`,
          )
          code = code.replace(new RegExp(`import\\s*${q};?\\s*`, 'g'), '')
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

      const css = cssFiles.map((f) => String(f.source)).join('\n')
      const inject = `(function(){var i=${JSON.stringify(manifest.id)},d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=${JSON.stringify(css)};})();\n`
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
      // The tsm.js artefact bundles the framework API on purpose - this is
      // the system bundle exporting org.osgi.framework. The path is the
      // symlinked tsm workspace, which the boundary check sees as outside.
      boundary: { allow: ['../../../../EMFTs/tsm'] },
      sharedModules,
      // Cast: tsm links its own vite copy, whose Plugin type is nominally
      // incompatible with the workspace's - same shape, different identity.
    }) as unknown as import('vite').PluginOption,
  ],
  build: {
    target: 'es2022',
    rollupOptions: {
      external: (source: string, importer: string | undefined) => {
        if (source !== '@eclipse-daanse/tsm') return false
        // The artefact bundles the framework API itself; everything else
        // references it bare, for the import map.
        return !importer?.includes('artifacts/tsm.ts') && !importer?.endsWith('artifacts/tsm.ts')
      },
    },
    minify: false,
    outDir: resolve(__dirname, 'dist-bundle'),
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        tsm: resolve(__dirname, 'src/artifacts/tsm.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
  },
})
