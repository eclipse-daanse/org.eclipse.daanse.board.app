/**
 * Builds every tsm bundle in the workspace - each package that carries a
 * vite.bundle.config.ts - the way deployed modules are built. The dev server
 * and the production build serve the resulting dist-bundle/ directories
 * under /bundles/<id>/.
 *
 * Usage: node scripts/build-bundles.mjs [filter...]
 *   filter: only build bundles whose path contains one of the terms
 */
import { execSync } from 'node:child_process'
import { globSync } from 'node:fs'
import { dirname } from 'node:path'

const filters = process.argv.slice(2)
const configs = globSync('packages/**/vite.bundle.config.ts')
  .filter((f) => !f.includes('node_modules'))
  .filter((f) => filters.length === 0 || filters.some((t) => f.includes(t)))
  .sort()

let ok = 0
const failed = []
for (const config of configs) {
  const dir = dirname(config)
  process.stdout.write(`building ${dir} ... `)
  try {
    execSync('npx vite build --config vite.bundle.config.ts', { cwd: dir, stdio: 'pipe' })
    ok += 1
    process.stdout.write('done\n')
  } catch (error) {
    failed.push(dir)
    process.stdout.write('FAILED\n')
    process.stdout.write(String(error.stdout ?? '').split('\n').filter((l) => l.includes('ERROR') || l.includes('error during')).join('\n') + '\n')
  }
}
console.log(`\n${ok}/${configs.length} bundles built${failed.length ? ', FAILED: ' + failed.join(', ') : ''}`)
process.exit(failed.length ? 1 : 0)
