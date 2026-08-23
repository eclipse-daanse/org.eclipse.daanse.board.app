/**
 * Watches every bundle package's sources and rebuilds exactly the bundle a
 * change belongs to. The dev server's reload bridge (vite.config.ts) sees
 * the fresh dist-bundle/ and hot-swaps the module in the running app.
 *
 * Fast path: the first change to a bundle starts a persistent vite build in
 * watch mode (JS API, no process spawn, minify off). Rollup keeps the module
 * graph warm, so every further save of that bundle rebuilds incrementally in
 * a fraction of a second. Untouched bundles cost nothing.
 *
 * Persistent watchers are capped (WATCH_LIMIT, default 8): each one holds a
 * warm module graph, and a mass change - a codemod touching two hundred
 * files - would otherwise accumulate a hundred of them and eat the machine.
 * Beyond the cap a change gets a one-shot build instead.
 *
 * Usage: node scripts/watch-bundles.mjs [filter...]
 *   filter: only watch bundles whose path contains one of the terms
 */
import { globSync } from 'node:fs'
import { dirname, resolve, sep } from 'node:path'
import chokidar from 'chokidar'
import { build } from 'vite'

const filters = process.argv.slice(2)
const bundleDirs = globSync('packages/**/vite.bundle.config.ts')
  .filter((f) => !f.includes('node_modules'))
  .map((f) => dirname(f))
  .filter((d) => filters.length === 0 || filters.some((t) => d.includes(t)))
  .sort((a, b) => b.length - a.length) // longest first: nested packages win

if (bundleDirs.length === 0) {
  console.error('no bundles match', filters)
  process.exit(1)
}
console.log(
  `watching ${bundleDirs.length} bundle(s), builds start on first change` +
    (filters.length ? ` (filter: ${filters.join(' ')})` : ''),
)

const now = () => new Date().toLocaleTimeString()

/** Maps a changed file to the bundle that owns it. */
function ownerOf(file) {
  return bundleDirs.find((d) => file.startsWith(d + sep))
}

const active = new Map() // dir -> vite/rollup watcher
let starting = Promise.resolve() // serialise the expensive initial builds
const WATCH_LIMIT = Math.max(1, Number(process.env.WATCH_LIMIT) || 8)

function startBundleWatcher(dir) {
  if (active.has(dir)) return // vite's own watcher handles further changes
  const persistent = active.size < WATCH_LIMIT
  if (persistent) active.set(dir, null)
  starting = starting.then(async () => {
    let start = Date.now()
    if (!persistent) {
      // Over the cap: build once and let go - no warm graph to keep
      try {
        await build({
          configFile: resolve(dir, 'vite.bundle.config.ts'),
          root: resolve(dir),
          logLevel: 'silent',
          build: { minify: false },
        })
        console.log(`[${now()}] ${dir} rebuilt (one-shot) in ${((Date.now() - start) / 1000).toFixed(1)}s`)
      } catch (error) {
        console.error(`[${now()}] ${dir} FAILED\n${error.message ?? error}`)
      }
      return
    }
    try {
      const watcher = await build({
        configFile: resolve(dir, 'vite.bundle.config.ts'),
        root: resolve(dir),
        logLevel: 'silent',
        build: { watch: {}, minify: false },
      })
      watcher.on('event', (event) => {
        if (event.code === 'BUNDLE_START') {
          start = Date.now()
        } else if (event.code === 'BUNDLE_END') {
          console.log(`[${now()}] ${dir} rebuilt in ${((Date.now() - start) / 1000).toFixed(1)}s`)
          event.result?.close()
        } else if (event.code === 'ERROR') {
          console.error(`[${now()}] ${dir} FAILED\n${event.error.message}`)
          event.result?.close()
        }
      })
      active.set(dir, watcher)
    } catch (error) {
      // config-level failure; allow a retry on the next change
      console.error(`[${now()}] ${dir} FAILED to start\n${error.message ?? error}`)
      active.delete(dir)
    }
  })
}

const trigger = chokidar.watch(
  bundleDirs.flatMap((d) => [`${d}/src`, `${d}/manifest.json`, `${d}/vite.bundle.config.ts`]),
  { ignoreInitial: true, ignored: ['**/dist-bundle/**', '**/dist/**', '**/node_modules/**'] },
)
trigger.on('all', (_event, file) => {
  const dir = ownerOf(file)
  if (dir) startBundleWatcher(dir)
})

async function shutdown() {
  await Promise.all([trigger.close(), ...[...active.values()].map((w) => w?.close())])
  process.exit(0)
}
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
