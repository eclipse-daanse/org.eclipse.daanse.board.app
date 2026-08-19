/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { createReadStream, existsSync, statSync, watch } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { defineConfig, searchForWorkspaceRoot, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

const isDev = process.env.NODE_ENV !== 'production'

/** Where the separately built tsm bundles live, keyed by module id. */
const bundleDirs: Record<string, string> = {
  'ui.vue.widget.progress': resolve(
    __dirname,
    '../../ui/vue/widget/progress/dist-bundle',
  ),
}

const BUNDLE_TYPES: Record<string, string> = {
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.map': 'application/json',
  '.css': 'text/css',
}

/**
 * Serves the built bundles under /bundles/<id>/ as plain files and reloads
 * them in the running app when their build output changes.
 *
 * The bundles must not pass through Vite's transform pipeline: they are
 * finished artefacts the ModuleLoader fetches by URL, exactly as a web
 * server would hand them over in production. (public/ does not work - Vite
 * refuses dynamic imports from there.)
 *
 * The reload half watches each dist-bundle directory and sends a custom HMR
 * event; the client side (main.ts) answers it with loader.reloadModule().
 * Save in the bundle -> `vite build --watch` rebuilds -> this fires -> the
 * widget swaps live, lifecycle included.
 */
function tsmBundles(): Plugin {
  return {
    name: 'serve-tsm-bundles',
    configureServer(server) {
      server.middlewares.use('/bundles', (request, response, next) => {
        const relative = normalize(decodeURIComponent((request.url ?? '/').split('?')[0]))
        if (relative.includes('..')) return next()

        const [, id, ...rest] = relative.split('/')
        const dir = bundleDirs[id]
        if (!dir) return next()

        const file = join(dir, rest.join('/') || 'index.js')
        if (!existsSync(file) || !statSync(file).isFile()) return next()

        response.setHeader('Content-Type', BUNDLE_TYPES[extname(file)] ?? 'application/octet-stream')
        response.setHeader('Cache-Control', 'no-store')
        createReadStream(file).pipe(response)
      })

      for (const [id, dir] of Object.entries(bundleDirs)) {
        if (!existsSync(dir)) continue
        let timer: ReturnType<typeof setTimeout> | undefined
        watch(dir, () => {
          // Debounced: one build touches several files
          clearTimeout(timer)
          timer = setTimeout(() => {
            server.ws.send({ type: 'custom', event: 'tsm:bundle-changed', data: { id } })
          }, 150)
        })
      }
    },
  }
}


export default defineConfig({
  base: './',
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true
      }
    }
  },
  plugins: [
    tsmBundles(),
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
        {
          find: 'org.eclipse.daanse.board.app.ui.vue.layouts.grid',
          replacement: resolve(__dirname, '../../ui/vue/layouts/grid/src/index.ts')
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
