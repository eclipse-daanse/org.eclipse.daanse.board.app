/**
 * Builds every tsm bundle in the workspace - each package that carries a
 * vite.bundle.config.ts - the way deployed modules are built. The dev server
 * and the production build serve the resulting dist-bundle/ directories
 * under /bundles/<id>/.
 *
 * Only what changed is rebuilt; bundle-graph.mjs holds the rule for that.
 *
 * Builds run in a worker pool (defaults to the number of cores, override with
 * BUNDLE_JOBS=n).
 *
 * Usage: node scripts/build-bundles.mjs [filter...] [--force] [--list]
 *   filter: only build bundles whose path contains one of the terms
 *   --force (or BUNDLE_FORCE=1): build everything, skipping nothing
 *   --list: name what would be built and stop
 */
import { exec } from 'node:child_process'
import { availableParallelism } from 'node:os'
import { join, resolve } from 'node:path'
import { promisify } from 'node:util'
import { bundleDirs, isStale } from './bundle-graph.mjs'
import { claim, describe } from './bundle-lock.mjs'

const run = promisify(exec)
const args = process.argv.slice(2)
const force = process.env.BUNDLE_FORCE === '1' || args.includes('--force')
const list = args.includes('--list')
const filters = args.filter((a) => !a.startsWith('--'))

const ROOT = resolve(import.meta.dirname, '..')
/* The binary directly: npx costs about half a second per call, and there
   are a hundred and forty of them. */
const VITE = join(ROOT, 'node_modules', '.bin', 'vite')

/* --list only reads mtimes; everything else writes to dist-bundle/ */
if (!list) {
  const lock = claim('build')
  if (!lock.ok) {
    console.error(
      `${describe(lock.held)} is running.\n` +
        'Only one process may write dist-bundle/ - two of them leave it empty.',
    )
    process.exit(1)
  }
}

const jobs = Math.max(1, Number(process.env.BUNDLE_JOBS) || availableParallelism())

const all = bundleDirs(filters)
const queue = force ? [...all] : all.filter(isStale)
const toBuild = queue.length
const skipped = all.length - toBuild

console.log(
  `${all.length} bundle(s), ${toBuild} to build` +
    (skipped ? `, ${skipped} up to date` : '') +
    `, ${jobs} in parallel`,
)

if (list) {
  for (const dir of queue) console.log(`stale  ${dir}`)
  process.exit(0)
}

let ok = 0
const failed = []

async function worker() {
  for (let dir = queue.shift(); dir; dir = queue.shift()) {
    try {
      await run(`"${VITE}" build --config vite.bundle.config.ts`, { cwd: dir })
      ok += 1
      console.log(`done   ${dir}`)
    } catch (error) {
      failed.push(dir)
      // vite prints build errors on stderr; keep the message, drop the stack
      const lines = `${error.stdout ?? ''}\n${error.stderr ?? ''}`
        .split('\n').filter((l) => l.trim() && !l.trim().startsWith('at '))
      const from = lines.findIndex((l) => l.includes('error during build'))
      console.error(`FAILED ${dir}\n${(from >= 0 ? lines.slice(from) : lines.slice(-10)).join('\n')}`)
    }
  }
}

await Promise.all(Array.from({ length: jobs }, worker))
console.log(
  `\n${ok}/${toBuild} built${skipped ? `, ${skipped} unchanged` : ''}` +
    `${failed.length ? ', FAILED: ' + failed.join(', ') : ''}`,
)
process.exit(failed.length ? 1 : 0)
