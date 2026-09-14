/**
 * Watches every bundle package's sources and rebuilds exactly the bundles a
 * change belongs to. The dev server's reload bridge (vite.config.ts) sees
 * the fresh dist-bundle/ and hot-swaps the module in the running app.
 *
 * Fast path: the first change to a bundle starts a persistent vite build in
 * watch mode (JS API, no process spawn, minify off). Rollup keeps the module
 * graph warm, so every further save of that bundle rebuilds incrementally in
 * a fraction of a second. Untouched bundles cost nothing.
 *
 * A change to a workspace package that bundles bake in is a change in every
 * one of them. Those carry a copy of the package's built output, so the
 * library is rebuilt first - through turbo, which also brings its own
 * dependencies up to date - and then the bundles that inline it.
 *
 * Persistent watchers are capped (WATCH_LIMIT, default 8): each one holds a
 * warm module graph, and a mass change - a codemod touching two hundred
 * files - would otherwise accumulate a hundred of them and eat the machine.
 * Beyond the cap a change gets a one-shot build instead.
 *
 * Usage: node scripts/watch-bundles.mjs [filter...]
 *   filter: only watch bundles whose path contains one of the terms
 */
import { exec } from 'node:child_process'
import { join, resolve, sep } from 'node:path'
import { promisify } from 'node:util'
import chokidar from 'chokidar'
import { build } from 'vite'
import { bundleDirs, inlinedInto } from './bundle-graph.mjs'
import { claim, describe, inheritEnv } from './bundle-lock.mjs'

const run = promisify(exec)
const ROOT = resolve(import.meta.dirname, '..')
const TURBO = join(ROOT, 'node_modules', '.bin', 'turbo')

const lock = claim('watch')
if (!lock.ok) {
  console.error(
    `${describe(lock.held)} is already running.\n` +
      'Two watchers write the same dist-bundle/ directories and leave them empty.',
  )
  process.exit(1)
}

const filters = process.argv.slice(2)
const bundles = bundleDirs(filters).sort((a, b) => b.length - a.length) // longest first: nested packages win

if (bundles.length === 0) {
  console.error('no bundles match', filters)
  process.exit(1)
}

/* dir -> { name, bundles }: the workspace packages baked into a bundle, and
   which bundles carry the copy. */
const inlined = inlinedInto(bundles)
/* Every package worth watching, longest path first so a nested one wins. */
const watched = [...new Set([...bundles, ...inlined.keys()])].sort((a, b) => b.length - a.length)

console.log(
  `watching ${bundles.length} bundle(s) and ${inlined.size} inlined package(s),` +
    ` builds start on first change` +
    (filters.length ? ` (filter: ${filters.join(' ')})` : ''),
)

const now = () => new Date().toLocaleTimeString()

/** Maps a changed file to the package that owns it. */
function ownerOf(file) {
  return watched.find((d) => file.startsWith(d + sep))
}

const active = new Map() // dir -> vite/rollup watcher
let starting = Promise.resolve() // serialise the expensive builds
const WATCH_LIMIT = Math.max(1, Number(process.env.WATCH_LIMIT) || 8)

async function buildOnce(dir) {
  const start = Date.now()
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
}

/**
 * Queues a build for one bundle.
 *
 * `oneShot` keeps a fan-out - one library change reaching two dozen bundles -
 * from claiming every persistent watcher slot for packages nobody is editing.
 */
function startBundleWatcher(dir, { oneShot = false } = {}) {
  if (active.has(dir)) return // vite's own watcher handles further changes
  const persistent = !oneShot && active.size < WATCH_LIMIT
  if (persistent) active.set(dir, null)
  starting = starting.then(async () => {
    if (!persistent) return buildOnce(dir)
    let start = Date.now()
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

/* Library changes arrive one file at a time; a save across several is still
   one rebuild. */
const pendingLibs = new Set()
let libTimer

function libChanged(dir) {
  pendingLibs.add(dir)
  clearTimeout(libTimer)
  libTimer = setTimeout(flushLibs, 200)
}

function flushLibs() {
  const libs = [...pendingLibs]
  pendingLibs.clear()
  const names = libs.map((d) => inlined.get(d).name)

  starting = starting.then(async () => {
    const start = Date.now()
    try {
      await run(`"${TURBO}" run build ${names.map((n) => `--filter=${n}`).join(' ')}`, {
        cwd: ROOT,
        env: inheritEnv({ ...process.env, SKIP_TYPE_CHECK: 'true' }),
      })
    } catch (error) {
      const tail = `${error.stdout ?? ''}\n${error.stderr ?? ''}`.trim().split('\n').slice(-8)
      console.error(`[${now()}] ${names.join(', ')} FAILED to build\n${tail.join('\n')}`)
      return
    }
    console.log(
      `[${now()}] ${names.join(', ')} built in ${((Date.now() - start) / 1000).toFixed(1)}s`,
    )

    /* Bundles with a live watcher pick this up themselves: the library's
       dist/ files are modules in their graph, and rollup watches those. They
       are also the ones a parallel build must not touch - two processes
       writing the same dist-bundle/ leave it empty. */
    const affected = [...new Set(libs.flatMap((d) => inlined.get(d).bundles))].filter(
      (d) => !active.has(d),
    )
    if (affected.length === 0) return

    /* Out of process and in parallel: lib.core reaches twenty-nine bundles,
       and one after another in here would take minutes. build-bundles.mjs
       skips whatever is already current, so naming them all is safe. */
    console.log(`[${now()}] ${affected.length} bundle(s) inline it, rebuilding`)
    const spread = Date.now()
    try {
      await run(`node scripts/build-bundles.mjs ${affected.join(' ')}`, {
        cwd: ROOT,
        env: inheritEnv(),
      })
      console.log(`[${now()}] inlining bundles rebuilt in ${((Date.now() - spread) / 1000).toFixed(1)}s`)
    } catch (error) {
      const tail = `${error.stdout ?? ''}\n${error.stderr ?? ''}`.trim().split('\n').slice(-12)
      console.error(`[${now()}] rebuilding the inlining bundles FAILED\n${tail.join('\n')}`)
    }
  })
}

const trigger = chokidar.watch(
  watched.flatMap((d) => [`${d}/src`, `${d}/manifest.json`, `${d}/vite.bundle.config.ts`]),
  { ignoreInitial: true, ignored: ['**/dist-bundle/**', '**/dist/**', '**/node_modules/**'] },
)
trigger.on('all', (_event, file) => {
  const dir = ownerOf(file)
  if (!dir) return
  // A package can be both: its own bundle, and a copy inside others
  if (bundles.includes(dir)) startBundleWatcher(dir)
  if (inlined.has(dir)) libChanged(dir)
})

async function shutdown() {
  await Promise.all([trigger.close(), ...[...active.values()].map((w) => w?.close())])
  lock.release()
  process.exit(0)
}
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
