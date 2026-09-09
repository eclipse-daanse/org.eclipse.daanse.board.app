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

// The library half. Everything bare is external, as everywhere else here.
// The worker is NOT built by this config — see vite.worker.config.ts.
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'org.eclipse.daanse.board.app.lib.lsp.lang.dmv',
      fileName: 'org.eclipse.daanse.board.app.lib.lsp.lang.dmv',
      formats: ['es'],
    },
    rollupOptions: {
      external: id =>
        !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0'),
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
})
