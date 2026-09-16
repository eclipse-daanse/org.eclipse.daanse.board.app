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

import { defineConfig } from 'vite'
import { resolve } from 'path'

// The language server worker, built self-contained.
//
// Deliberately the inverse of vite.config.ts: nothing is external, so Langium,
// Chevrotain, the grammar and the validators are all bundled into this one
// chunk. That is the point — the worker resolves no bare import at runtime,
// and none of it reaches a consuming application's main bundle.
//
// emptyOutDir is off because the library build runs first and owns dist/.
export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: false,
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'worker/sql-server.worker.ts'),
      formats: ['es'],
      fileName: () => 'sql-server.worker.js',
    },
    rollupOptions: {
      external: [],
      output: { inlineDynamicImports: true },
    },
  },
})
