/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { cpSync, createReadStream, existsSync, globSync, readFileSync, statSync, watch } from 'node:fs'
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

/**
 * Where the separately built tsm bundles live, keyed by module id: every
 * workspace package carrying a vite.bundle.config.ts, discovered at config
 * load. A new bundle package appears here by existing.
 */
const bundleDirs: Record<string, string> = Object.fromEntries(
  globSync(resolve(__dirname, '../../**/vite.bundle.config.ts'))
    .filter((configPath) => !configPath.includes('node_modules'))
    .map((configPath) => {
      const dir = join(configPath, '..')
      const manifest = JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf-8'))
      return [manifest.id, join(dir, 'dist-bundle')]
    }),
)

const BUNDLE_TYPES: Record<string, string> = {
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.map': 'application/json',
  '.css': 'text/css',
}

/* How long to let a bundle's output settle before telling the client about
   it: two checks of the same size, up to a minute for a slow build. */
const SETTLE_STEP = 150
const SETTLE_TRIES = 400

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
/**
 * The workspace half of the import map, generated from the manifests: every
 * bundle offering a `tsm.library` capability for a workspace package is a
 * library bundle, and its entry URL IS the package. Consumers write plain
 * bare imports; who serves them is wiring, not code.
 *
 * The vue stack and the tsm API keep their hand-written entries in
 * index.html - their capabilities name artefact files, not the entry.
 * lib.core never appears here: it carries the host's service registry
 * singleton and travels through __tsm__.require by design.
 */
function workspaceImportMapEntries(): Record<string, string> {
  const entries: Record<string, string> = {}
  for (const configPath of globSync(resolve(__dirname, '../../**/vite.bundle.config.ts'))) {
    if (configPath.includes('node_modules')) continue
    const manifestPath = join(configPath, '..', 'manifest.json')
    if (!existsSync(manifestPath)) continue
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
    if (!manifest.entry?.startsWith('/bundles/')) continue
    for (const capability of manifest.capabilities ?? []) {
      const library = capability?.attributes?.library
      if (capability?.namespace === 'tsm.library' && typeof library === 'string'
          && library.startsWith('org.eclipse.daanse.board.app.')) {
        entries[library] = manifest.entry
      }
    }
  }
  return entries
}

function tsmBundles(): Plugin {
  return {
    name: 'serve-tsm-bundles',

    /*
     * Both dev and build: merge the generated workspace entries into the
     * static import map in index.html. In dev this runs per request, so a
     * freshly added library bundle appears on reload.
     */
    transformIndexHtml(html) {
      return html.replace(
        /(<script type="importmap">\s*)([\s\S]*?)(\s*<\/script>)/,
        (_match, open, json, close) => {
          const map = JSON.parse(json)
          map.imports = { ...workspaceImportMapEntries(), ...map.imports }
          return open + JSON.stringify(map, null, 2) + close
        },
      )
    },

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
        const entry = join(dir, 'index.js')
        let timer: ReturnType<typeof setTimeout> | undefined
        let seen = -1

        /*
         * A build empties the directory before it writes into it, and the
         * first thing the watch reports is the emptying. Announcing then
         * sends the client after a file that is not there yet - a 404 that
         * leaves the module unloaded. So wait for the entry to exist and to
         * stop growing; a build that never finishes announces nothing, and
         * the next one that does will.
         */
        const announce = (attempt: number) => {
          const size = existsSync(entry) ? statSync(entry).size : -1
          if (size > 0 && size === seen) {
            seen = -1
            server.ws.send({ type: 'custom', event: 'tsm:bundle-changed', data: { id } })
            return
          }
          seen = size
          if (attempt >= SETTLE_TRIES) {
            seen = -1
            return
          }
          timer = setTimeout(() => announce(attempt + 1), SETTLE_STEP)
        }

        watch(dir, () => {
          // Debounced: one build touches several files
          clearTimeout(timer)
          seen = -1
          timer = setTimeout(() => announce(0), SETTLE_STEP)
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
    dedupe: ['vue', 'debug']

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
