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
 * Builds the CodeMirror platform bundle: index.js (the tsm module) plus the shared
 * library artefacts the host page's import map points at. Each artefact
 * bundles its own package; what the artefacts need from each other stays a
 * bare import ('@codemirror/state' inside view.js), resolved by the same import map.
 */

import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const FILE_OF: Record<string, string> = {
  '@codemirror/state': 'codemirror-state',
  '@codemirror/view': 'codemirror-view',
  '@codemirror/language': 'codemirror-language',
  '@codemirror/commands': 'codemirror-commands',
  '@codemirror/search': 'codemirror-search',
  '@codemirror/lint': 'codemirror-lint',
  '@codemirror/autocomplete': 'codemirror-autocomplete',
  '@codemirror/lsp-client': 'codemirror-lsp-client',
  '@lezer/highlight': 'lezer-highlight',
}

const libraries = [
  '@codemirror/state',
  '@codemirror/view',
  '@codemirror/language',
  '@codemirror/commands',
  '@codemirror/search',
  '@codemirror/lint',
  '@codemirror/autocomplete',
  '@codemirror/lsp-client',
  '@lezer/highlight',
]

export default defineConfig({
  define: {
    // vue's esm-bundler build reads these at compile time; devtools stay on
    // so the browser extension keeps working against the shared instance.
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'true',
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },
  build: {
    target: 'es2022',
    // Production artefacts are minified; the dev watcher overrides this
    // with `minify: false` for fast incremental rebuilds.
    minify: 'esbuild',
    outDir: resolve(__dirname, 'dist-bundle'),
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'codemirror-state': resolve(__dirname, 'src/artifacts/codemirror-state.ts'),
        'codemirror-view': resolve(__dirname, 'src/artifacts/codemirror-view.ts'),
        'codemirror-language': resolve(__dirname, 'src/artifacts/codemirror-language.ts'),
        'codemirror-commands': resolve(__dirname, 'src/artifacts/codemirror-commands.ts'),
        'codemirror-search': resolve(__dirname, 'src/artifacts/codemirror-search.ts'),
        'codemirror-lint': resolve(__dirname, 'src/artifacts/codemirror-lint.ts'),
        'codemirror-autocomplete': resolve(__dirname, 'src/artifacts/codemirror-autocomplete.ts'),
        'codemirror-lsp-client': resolve(__dirname, 'src/artifacts/codemirror-lsp-client.ts'),
        'lezer-highlight': resolve(__dirname, 'src/artifacts/lezer-highlight.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: (source, importer) => {
        if (!libraries.includes(source)) return false
        // The artefact for a library bundles that library itself; every
        // other reference stays bare for the import map.
        const artifact = importer?.match(/artifacts[\\/]([\w-]+)\.ts$/)?.[1]
        return artifact !== FILE_OF[source]
      },
    },
  },
})
