/**
 * Watches every bundle package's sources and rebuilds exactly the bundle a
 * change belongs to. The dev server's reload bridge (vite.config.ts) sees
 * the fresh dist-bundle/ and hot-swaps the module in the running app -
 * lifecycle included. One process instead of 51 vite --watch instances.
 *
 * Usage: node scripts/watch-bundles.mjs [filter...]
 *   filter: only watch bundles whose path contains one of the terms
 */
import { execSync } from 'node:child_process'
import { globSync } from 'node:fs'
import { dirname, sep } from 'node:path'
import chokidar from 'chokidar'

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
console.log(`watching ${bundleDirs.length} bundle(s)` + (filters.length ? ` (filter: ${filters.join(' ')})` : ''))

/** Maps a changed file to the bundle that owns it. */
function ownerOf(file) {
  return bundleDirs.find((d) => file.startsWith(d + sep))
}

const pending = new Map() // dir -> timer
let building = Promise.resolve()

function schedule(dir) {
  clearTimeout(pending.get(dir))
  pending.set(dir, setTimeout(() => {
    pending.delete(dir)
    // Serialised: parallel vite builds fight over CPU and interleave output
    building = building.then(() => {
      const start = Date.now()
      process.stdout.write(`[${new Date().toLocaleTimeString()}] ${dir} ... `)
      try {
        execSync('npx vite build --config vite.bundle.config.ts', { cwd: dir, stdio: 'pipe' })
        console.log(`rebuilt in ${((Date.now() - start) / 1000).toFixed(1)}s`)
      } catch (error) {
        console.log('FAILED')
        // vite prints build errors on stderr; keep the message, drop the stack
        const output = `${error.stdout ?? ''}\n${error.stderr ?? ''}`
        const lines = output.split('\n').filter((l) => l.trim() && !l.trim().startsWith('at '))
        const from = lines.findIndex((l) => l.includes('error during build'))
        console.error((from >= 0 ? lines.slice(from) : lines.slice(-10)).join('\n'))
      }
    })
  }, 300))
}

const watcher = chokidar.watch(
  bundleDirs.flatMap((d) => [`${d}/src`, `${d}/manifest.json`, `${d}/vite.bundle.config.ts`]),
  { ignoreInitial: true, ignored: ['**/dist-bundle/**', '**/dist/**', '**/node_modules/**'] },
)
watcher.on('all', (_event, file) => {
  const dir = ownerOf(file)
  if (dir) schedule(dir)
})
