/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'org.eclipse.daanse.board.app.ui.vue.variable.components',
      fileName: 'org.eclipse.daanse.board.app.ui.vue.variable.components',
    },
    rollupOptions: {
      external: [
        'vue',
        'org.eclipse.daanse.board.app.lib.core',
        'inversify',
        'reflect-metadata',
        'vue-mention',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'org.eclipse.daanse.board.app.lib.core':
            'org.eclipse.daanse.board.app.lib.core',
          inversify: 'inversify',
          'reflect-metadata': 'reflect-metadata',
          'vue-mention': 'VueMention',
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    //@ts-ignore
    vue(),
    libCss(),
  ],
})
