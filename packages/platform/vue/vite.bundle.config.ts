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
 * Builds the Vue platform bundle: index.js (the tsm module) plus the shared
 * library artefacts the host page's import map points at. Each artefact
 * bundles its own package; what the artefacts need from each other stays a
 * bare import ('vue' inside vue-router.js), resolved by the same import map.
 */

import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const libraries = ['vue', 'vue-router', 'pinia', 'vuedraggable', '@emfts/core']

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
        vue: resolve(__dirname, 'src/artifacts/vue.ts'),
        'vue-router': resolve(__dirname, 'src/artifacts/vue-router.ts'),
        pinia: resolve(__dirname, 'src/artifacts/pinia.ts'),
        vuedraggable: resolve(__dirname, 'src/artifacts/vuedraggable.ts'),
        'emfts-core': resolve(__dirname, 'src/artifacts/emfts-core.ts'),
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
        // '@emfts/core' cannot be a file name; its artefact is emfts-core.ts
        const scoped = artifact === 'emfts-core' ? '@emfts/core' : artifact
        return scoped !== source
      },
    },
  },
})
