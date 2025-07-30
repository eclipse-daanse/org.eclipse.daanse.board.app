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
      name: 'org.eclipse.daanse.board.app.ui.vue.widget.code',
      fileName: 'org.eclipse.daanse.board.app.ui.vue.widget.code'
    },
    rollupOptions: {
      external: [
        'vue',
        'org.eclipse.daanse.board.app.lib.core',
        'inversify',
        'reflect-metadata',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'org.eclipse.daanse.board.app.lib.core':
            'org.eclipse.daanse.board.app.lib.core',
          inversify: 'inversify',
          'reflect-metadata': 'reflect-metadata',
        },
      },
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
})
