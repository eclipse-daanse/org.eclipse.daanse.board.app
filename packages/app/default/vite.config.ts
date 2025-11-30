/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
export default defineConfig({
  base: './',
  plugins: [
    //@ts-ignore
    vue(),
    vueDevTools(),
    tailwindcss(),

    dts({
      insertTypesEntry: true,
    }),

  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
    dedupe: ['vue', 'pinia', 'debug']

  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  optimizeDeps: {
    include: ['highlight.js']
  },
  build: {
    minify: false,
    cssMinify: false,
    target: ['chrome90', 'firefox88', 'safari14', 'edge90'],
    rollupOptions: {
      //external: ['org.eclipse.daanse.board.app.lib.core'],
      output: {
        globals: {
          // 'org.eclipse.daanse.board.app.lib.core': 'org.eclipse.daanse.board.app.lib.core',
        }
      }
    }
  }
})
