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
 * WORKAROUND (tsm FR pending): the tsm plugin rewrites named, namespace and
 * default imports of shared modules to __tsm__.require(), but leaves bare
 * side-effect imports (`import "module"`) untouched; Rollup then emits them
 * into the entry chunk, where the browser cannot resolve the bare specifier.
 * Shared libraries are side-effect-free by definition here, so stripping is
 * sound. Remove once the plugin handles the bare form itself.
 */
function stripBareSharedImports() {
  const ids = ['vue', 'vue-router', ...manifest.sharedDependencies.map((d) => d.id)]
  return {
    name: 'strip-bare-shared-imports',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(_o: unknown, bundle: Record<string, { type: string; code?: string }>) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== 'chunk' || !chunk.code) continue
        for (const id of ids) {
          const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          chunk.code = chunk.code.replace(
            new RegExp('^import\\s*["\']' + escaped + '["\'];?\\s*$', 'gm'), '')
        }
      }
    },
  }
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
  }
}

const sharedModules = ['vue', 'vue-router', ...manifest.sharedDependencies
  .map((dependency) => dependency.id)
  .filter((id) => id.startsWith('org.eclipse.daanse'))]

export default defineConfig({
  plugins: [
    vue(),
    inlineCss(),
    stripBareSharedImports(),
    tsmPlugin({
      manifest: resolve(__dirname, 'manifest.json'),
      components: 'derive',
      sharedModules,
    }),
  ],
  build: {
    target: 'es2022',
    minify: false,
    outDir: resolve(__dirname, 'dist-bundle'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
  },
})
