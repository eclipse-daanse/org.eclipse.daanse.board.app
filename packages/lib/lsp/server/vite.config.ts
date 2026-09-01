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
import dts from 'vite-plugin-dts'

// Two entries, deliberately. '.' is the parse-tree serializer and is
// environment-neutral: the language packages' Node tests import it. './worker'
// is the browser bootstrap and pulls vscode-languageserver/browser, which does
// not resolve under Node. Folding them into one entry would break those tests.
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        worker: resolve(__dirname, 'src/worker.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: id =>
        !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0'),
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
})
