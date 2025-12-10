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
import { resolve } from 'path'

const isDev = process.env.NODE_ENV !== 'production'

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
      // Dev mode: Use source files directly for HMR
      ...(isDev ? [
        {
          find: 'org.eclipse.daanse.board.app.ui.vue.widget.map',
          replacement: resolve(__dirname, '../../ui/vue/widget/map/src/index.ts')
        },
        {
          find: 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper',
          replacement: resolve(__dirname, '../../ui/vue/widget/wrapper/src/index.ts')
        },
      ] : [])
    ],
    dedupe: ['vue', 'pinia', 'debug']

  },
  server: {
    fs: {
      // Allow serving files from workspace root for monorepo
      allow: [searchForWorkspaceRoot(process.cwd())]
    }
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
