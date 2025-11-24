/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    minify: false, // Deaktiviert Minifizierung für besseres Debugging
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui.vue.eventmanager',
      fileName: 'ui.vue.eventmanager'
    },
    rollupOptions: {
      external: (id) => {
        // Alle node_modules und Workspace-Packages als external
        // Nur relative und absolute Pfade (eigener Code) werden gebundled
        return !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0')
      },
      output: {
        globals: {
          vue: 'Vue',
          'org.eclipse.daanse.board.app.lib.core': 'org.eclipse.daanse.board.app.lib.core',
          'org.eclipse.daanse.board.app.lib.events': 'org.eclipse.daanse.board.app.lib.events',
          inversify: 'inversify',
          'reflect-metadata': 'reflect-metadata',
        },
      },
    }
  },
  plugins: [
    // @ts-ignore
    dts({
      insertTypesEntry: true
    }),
    //@ts-ignore
    vue(),
    // @ts-ignore
    libCss()
  ]
})
