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
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui.vue.datasource.ogcsta',
      fileName: 'ui.vue.datasource.ogcsta',
    },
    rollupOptions: {
      external: (id) => {
        // Include leaflet CSS in the bundle
        if (id.includes('leaflet') && id.endsWith('.css')) {
          return false;
        }
        return !id.startsWith(".") && !id.startsWith("/") && !id.startsWith("\0");
      },
      output: {
        globals: {
          vue: 'Vue',
          'org.eclipse.daanse.board.app.lib.core':
            'org.eclipse.daanse.board.app.lib.core',
          inversify: 'inversify',
          'reflect-metadata': 'reflect-metadata',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    //@ts-ignore
    monacoEditorPlugin,
    dts({
      insertTypesEntry: true,
    }),
    vue(),
    // @ts-ignore
    libCss(),
  ],
})
