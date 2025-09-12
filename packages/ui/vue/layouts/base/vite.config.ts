/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from "vite-plugin-dts";
import vue from '@vitejs/plugin-vue'
import libCss from 'vite-plugin-libcss'

const rootPath = resolve(__dirname, '../../../../../') // ← Fixed: 5 levels up to root
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
      name: 'ui.vue.layouts.base',
      fileName: 'ui.vue.layouts.base',
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'vue3-moveable',
        'vuedraggable',
        'lodash',
        'flatted',
        'org.eclipse.daanse.board.app.ui.vue.widget.wrapper',
        'org.eclipse.daanse.board.app.ui.vue.stores.widgets',
        'org.eclipse.daanse.board.app.ui.vue.stores.layout',
        'org.eclipse.daanse.board.app.lib.repository.layout.page',
        'org.eclipse.daanse.board.app.lib.core'
      ],
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
    vue(),
    libCss()
  ],
});

