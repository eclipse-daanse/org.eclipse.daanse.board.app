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

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui.vue.widget.page',
      fileName: 'ui.vue.widget.page',
    },
    rollupOptions: {
      external: (id) => !id.startsWith(".") && !id.startsWith("/") && !id.startsWith("\0"),
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia',
          'org.eclipse.daanse.board.app.lib.core':'org.eclipse.daanse.board.app.lib.core',
        }
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true
    }),
    libCss(),
    //@ts-ignore
    vue()
  ]
});

