/**
 * Builds every tsm bundle in the workspace - each package that carries a
 * vite.bundle.config.ts - the way deployed modules are built. The dev server
 * and the production build serve the resulting dist-bundle/ directories
 * under /bundles/<id>/.
 *
 * Builds run in a worker pool (default 6, override with BUNDLE_JOBS=n).
 *
 * Usage: node scripts/build-bundles.mjs [filter...]
 *   filter: only build bundles whose path contains one of the terms
 */
import { exec } from 'node:child_process'
import { globSync } from 'node:fs'
import { dirname } from 'node:path'
import { promisify } from 'node:util'

const run = promisify(exec)
const filters = process.argv.slice(2)
const configs = globSync('packages/**/vite.bundle.config.ts')
  .filter((f) => !f.includes('node_modules'))
  .filter((f) => filters.length === 0 || filters.some((t) => f.includes(t)))
  .sort()

const jobs = Math.max(1, Number(process.env.BUNDLE_JOBS) || 6)
console.log(`building ${configs.length} bundle(s), ${jobs} in parallel`)

const queue = configs.map((c) => dirname(c))
let ok = 0
const failed = []

async function worker() {
  for (let dir = queue.shift(); dir; dir = queue.shift()) {
    try {
      await run('npx vite build --config vite.bundle.config.ts', { cwd: dir })
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
console.log(`\n${ok}/${configs.length} bundles built${failed.length ? ', FAILED: ' + failed.join(', ') : ''}`)
process.exit(failed.length ? 1 : 0)
