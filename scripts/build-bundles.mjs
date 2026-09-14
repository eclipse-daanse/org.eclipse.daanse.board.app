/**
 * Builds every tsm bundle in the workspace - each package that carries a
 * vite.bundle.config.ts - the way deployed modules are built. The dev server
 * and the production build serve the resulting dist-bundle/ directories
 * under /bundles/<id>/.
 *
 * Only what changed is rebuilt. A bundle's inputs are its own files and the
 * built output of the workspace packages it inlines; shared dependencies are
 * externalized by the tsm plugin and never end up inside, so a change to one
 * of those is not a reason to build this. When every input is older than the
 * output, the build is skipped.
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
import { globSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { promisify } from 'node:util'

const run = promisify(exec)
const args = process.argv.slice(2)
const force = process.env.BUNDLE_FORCE === '1' || args.includes('--force')
const list = args.includes('--list')
const filters = args.filter((a) => !a.startsWith('--'))

const ROOT = resolve(import.meta.dirname, '..')
/* The binary directly: npx costs about half a second per call, and there
   are a hundred and forty of them. */
const VITE = join(ROOT, 'node_modules', '.bin', 'vite')

const configs = globSync('packages/**/vite.bundle.config.ts')
  .filter((f) => !f.includes('node_modules'))
  .filter((f) => filters.length === 0 || filters.some((t) => f.includes(t)))
  .sort()

/* Every workspace package by name, so a dependency can be found on disk. */
const packageDirs = new Map()
for (const file of globSync('packages/**/package.json').filter((f) => !f.includes('node_modules'))) {
  try {
    packageDirs.set(JSON.parse(readFileSync(file, 'utf8')).name, dirname(file))
  } catch {
    // a package.json that will not parse is not a dependency anyone resolves
  }
}

function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  } catch {
    return undefined
  }
}

/**
 * The newest mtime under a directory, or 0 when there is nothing.
 *
 * Directories count too: deleting a file leaves every remaining file older
 * than the output, and only the directory's own mtime says it happened.
 */
function newestUnder(dir, skip = []) {
  const excluded = (entry) =>
    skip.some((s) => entry === s || entry.startsWith(s + '/'))
  let newest = 0
  let entries
  try {
    entries = globSync('**/*', { cwd: dir, exclude: excluded })
  } catch {
    return 0
  }
  for (const entry of entries) {
    if (excluded(entry)) continue
    try {
      const at = statSync(join(dir, entry)).mtimeMs
      if (at > newest) newest = at
    } catch {
      // a file that vanished between listing and reading is not an input
    }
  }
  return newest
}

/** The oldest mtime in a directory - 0 when it is missing or empty. */
function oldestUnder(dir) {
  let oldest = Infinity
  let entries
  try {
    entries = globSync('**/*', { cwd: dir, nodir: true })
  } catch {
    return 0
  }
  for (const entry of entries) {
    try {
      const at = statSync(join(dir, entry)).mtimeMs
      if (at < oldest) oldest = at
    } catch {
      return 0
    }
  }
  return oldest === Infinity ? 0 : oldest
}

/**
 * Whether this bundle has to be built again.
 *
 * Its own files are inputs, and so is the built output of every workspace
 * package it inlines. What the manifest lists as shared is externalized, so
 * it is not.
 */
function isStale(dir) {
  const built = oldestUnder(join(dir, 'dist-bundle'))
  if (!built) return true

  /* dist/ is turbo's output for this same package, not an input, and
     .turbo holds its log. */
  let newest = newestUnder(dir, ['dist-bundle', 'dist', 'node_modules', '.turbo'])

  const manifest = readJson(join(dir, 'manifest.json')) ?? {}
  const shared = new Set((manifest.sharedDependencies ?? []).map((d) => d.id))
  const pkg = readJson(join(dir, 'package.json')) ?? {}

  for (const name of Object.keys(pkg.dependencies ?? {})) {
    if (shared.has(name)) continue
    const depDir = packageDirs.get(name)
    if (!depDir) continue
    const at = newestUnder(join(depDir, 'dist'))
    if (at > newest) newest = at
  }

  return newest > built
}

const jobs = Math.max(1, Number(process.env.BUNDLE_JOBS) || availableParallelism())

const all = configs.map((c) => dirname(c))
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
