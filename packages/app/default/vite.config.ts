/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { cpSync, createReadStream, existsSync, statSync, watch } from 'node:fs'
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
  'ui.vue.widget.progress': resolve(__dirname, '../../ui/vue/widget/progress/dist-bundle'),
  'ui.vue.widget.map': resolve(__dirname, '../../ui/vue/widget/map/dist-bundle'),
  'ui.vue.plugins.geojson_renderer': resolve(__dirname, '../../ui/vue/plugins/geojson_renderer/dist-bundle'),
  'ui.vue.plugins.endpointfinder': resolve(__dirname, '../../ui/vue/plugins/endpointfinder/dist-bundle'),
  'ui.vue.composer.chart': resolve(__dirname, '../../ui/vue/composer/chart/dist-bundle'),
  'ui.vue.composer.datatable': resolve(__dirname, '../../ui/vue/composer/datatable/dist-bundle'),
  'ui.vue.composer.kpi': resolve(__dirname, '../../ui/vue/composer/kpi/dist-bundle'),
  'ui.vue.composer.ogc': resolve(__dirname, '../../ui/vue/composer/ogc/dist-bundle'),
  'ui.vue.composer.ogcsta2chart': resolve(__dirname, '../../ui/vue/composer/ogcsta2chart/dist-bundle'),
  'ui.vue.composer.weather': resolve(__dirname, '../../ui/vue/composer/weather/dist-bundle'),
  'ui.vue.connection.graphql': resolve(__dirname, '../../ui/vue/connection/graphql/dist-bundle'),
  'ui.vue.connection.mqtt': resolve(__dirname, '../../ui/vue/connection/mqtt/dist-bundle'),
  'ui.vue.connection.rest': resolve(__dirname, '../../ui/vue/connection/rest/dist-bundle'),
  'ui.vue.connection.rss': resolve(__dirname, '../../ui/vue/connection/rss/dist-bundle'),
  'ui.vue.connection.ws': resolve(__dirname, '../../ui/vue/connection/ws/dist-bundle'),
  'ui.vue.connection.xmla': resolve(__dirname, '../../ui/vue/connection/xmla/dist-bundle'),
  'ui.vue.datasource.csv': resolve(__dirname, '../../ui/vue/datasource/csv/dist-bundle'),
  'ui.vue.datasource.graphql': resolve(__dirname, '../../ui/vue/datasource/graphql/dist-bundle'),
  'ui.vue.datasource.kpi': resolve(__dirname, '../../ui/vue/datasource/kpi/dist-bundle'),
  'ui.vue.datasource.ogcsta': resolve(__dirname, '../../ui/vue/datasource/ogcsta/dist-bundle'),
  'ui.vue.datasource.rest': resolve(__dirname, '../../ui/vue/datasource/rest/dist-bundle'),
  'ui.vue.datasource.rss': resolve(__dirname, '../../ui/vue/datasource/rss/dist-bundle'),
  'ui.vue.datasource.sparql': resolve(__dirname, '../../ui/vue/datasource/sparql/dist-bundle'),
  'ui.vue.datasource.sql_xmla': resolve(__dirname, '../../ui/vue/datasource/sql_xmla/dist-bundle'),
  'ui.vue.datasource.valhalla': resolve(__dirname, '../../ui/vue/datasource/valhalla/dist-bundle'),
  'ui.vue.datasource.ws': resolve(__dirname, '../../ui/vue/datasource/ws/dist-bundle'),
  'ui.vue.datasource.xmla': resolve(__dirname, '../../ui/vue/datasource/xmla/dist-bundle'),
  'ui.vue.widget.chart': resolve(__dirname, '../../ui/vue/widget/chart/dist-bundle'),
  'ui.vue.widget.code': resolve(__dirname, '../../ui/vue/widget/code/dist-bundle'),
  'ui.vue.widget.icon': resolve(__dirname, '../../ui/vue/widget/icon/dist-bundle'),
  'ui.vue.widget.image': resolve(__dirname, '../../ui/vue/widget/image/dist-bundle'),
  'ui.vue.widget.markdown': resolve(__dirname, '../../ui/vue/widget/markdown/dist-bundle'),
  'ui.vue.widget.mermaid': resolve(__dirname, '../../ui/vue/widget/mermaid/dist-bundle'),
  'ui.vue.widget.page': resolve(__dirname, '../../ui/vue/widget/page/dist-bundle'),
  'ui.vue.widget.routing': resolve(__dirname, '../../ui/vue/widget/routing/dist-bundle'),
  'ui.vue.widget.rss': resolve(__dirname, '../../ui/vue/widget/rss/dist-bundle'),
  'ui.vue.widget.sample': resolve(__dirname, '../../ui/vue/widget/sample/dist-bundle'),
  'ui.vue.widget.svg.base': resolve(__dirname, '../../ui/vue/widget/svg/base/dist-bundle'),
  'ui.vue.widget.svg.repeat': resolve(__dirname, '../../ui/vue/widget/svg/repeat/dist-bundle'),
  'ui.vue.widget.table.data': resolve(__dirname, '../../ui/vue/widget/table/data/dist-bundle'),
  'ui.vue.widget.table.kpi': resolve(__dirname, '../../ui/vue/widget/table/kpi/dist-bundle'),
  'ui.vue.widget.table.pivot': resolve(__dirname, '../../ui/vue/widget/table/pivot/dist-bundle'),
  'ui.vue.widget.text.plain': resolve(__dirname, '../../ui/vue/widget/text/plain/dist-bundle'),
  'ui.vue.widget.text.rich': resolve(__dirname, '../../ui/vue/widget/text/rich/dist-bundle'),
  'ui.vue.widget.timeline': resolve(__dirname, '../../ui/vue/widget/timeline/dist-bundle'),
  'ui.vue.widget.vanta': resolve(__dirname, '../../ui/vue/widget/vanta/dist-bundle'),
  'ui.vue.widget.video': resolve(__dirname, '../../ui/vue/widget/video/dist-bundle'),
  'ui.vue.widget.weather': resolve(__dirname, '../../ui/vue/widget/weather/dist-bundle'),
  'ui.vue.widget.xmla.filters': resolve(__dirname, '../../ui/vue/widget/xmla/filters/dist-bundle'),
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

    /*
     * Production: the bundles are finished artefacts - copy them into the
     * build output under /bundles/<id>/, the same URLs the manifests name.
     * Any static file server then serves them exactly like the dev
     * middleware below does; no import map and no extra server logic needed,
     * because shared dependencies travel through the __tsm__ runtime.
     */
    closeBundle() {
      const outDir = resolve(__dirname, 'dist')
      if (!existsSync(outDir)) return
      let copied = 0
      for (const [id, dir] of Object.entries(bundleDirs)) {
        if (!existsSync(dir)) {
          console.warn(`[tsm-bundles] missing build output for ${id} - run its bundle build`)
          continue
        }
        cpSync(dir, join(outDir, 'bundles', id), { recursive: true })
        copied += 1
      }
      console.log(`[tsm-bundles] ${copied} bundle(s) copied into dist/bundles`)
    },

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
          // Exact match: a bare-string find matches as a prefix, which would
          // also rewrite 'pkg/manifest.json' onto a file path and break the
          // bundle manifest imports in bundles.ts.
          find: /^org\.eclipse\.daanse\.board\.app\.ui\.vue\.widget\.map$/,
          replacement: resolve(__dirname, '../../ui/vue/widget/map/src/index.ts')
        },
        {
          find: /^org\.eclipse\.daanse\.board\.app\.ui\.vue\.widget\.wrapper$/,
          replacement: resolve(__dirname, '../../ui/vue/widget/wrapper/src/index.ts')
        },
        {
          find: /^org\.eclipse\.daanse\.board\.app\.ui\.vue\.layouts\.grid$/,
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
