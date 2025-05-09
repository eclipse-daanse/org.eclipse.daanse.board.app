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

const rootPath = resolve(__dirname, '../../../../../../') // ← ggf. anpassen
export default defineConfig({
  resolve: {
    alias: {
      vue: resolve(rootPath, 'node_modules/vue') // ⬅️ Vue nur aus dem Root laden
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper',
      fileName: 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true
    }),
    //@ts-ignore
    vue(),
    libCss()
  ]
})
