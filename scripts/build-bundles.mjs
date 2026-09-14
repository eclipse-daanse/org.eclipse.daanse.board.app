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
import { renameSync, rmSync } from 'node:fs'
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

/* A staging directory that outlived its build is rubbish, and `git add -A`
   would otherwise commit it. */
if (!list) {
  for (const dir of all) {
    rmSync(join(dir, 'dist-bundle.building'), { recursive: true, force: true })
  }
}
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

/*
 * Built beside the real output and moved into place only once it is whole.
 *
 * A bundle build empties its output directory before it writes into it, so a
 * build that is interrupted - Ctrl+C, a killed watcher, a machine that runs
 * out of memory - leaves an empty dist-bundle/ behind. Empty is worse than
 * stale: the module 404s at load time, far from the cause. Building next
 * door means an interrupted build changes nothing at all.
 */
const STAGING = 'dist-bundle.building'

async function worker() {
  for (let dir = queue.shift(); dir; dir = queue.shift()) {
    const staging = join(dir, STAGING)
    const output = join(dir, 'dist-bundle')
    try {
      rmSync(staging, { recursive: true, force: true })
      await run(`"${VITE}" build --config vite.bundle.config.ts --outDir ${STAGING}`, { cwd: dir })
      /* The gap between these two is a few milliseconds of work already
         done, against seconds of building - and nothing reads the directory
         while a build of it is running. */
      rmSync(output, { recursive: true, force: true })
      renameSync(staging, output)
      ok += 1
      console.log(`done   ${dir}`)
    } catch (error) {
      rmSync(staging, { recursive: true, force: true })
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
