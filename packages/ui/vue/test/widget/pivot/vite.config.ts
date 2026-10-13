/**
Copyright (c) 2026 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const source = (path: string) => fileURLToPath(new URL(`../../../../../${path}`, import.meta.url))

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    // The sources, not the last build: the harness shows what is being written.
    alias: {
      'org.eclipse.daanse.board.app.lib.datasource.xmla': source('lib/datasource/xmla/src/index.ts'),
    },
  },
  server: {
    port: 5181,
    // The editor's statements go to the demo server; through here, so CORS is not in the way.
    proxy: {
      '/xmla': { target: 'https://demo.emondrian.com', changeOrigin: true, secure: true },
    },
  },
})
