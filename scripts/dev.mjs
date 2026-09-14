/**
 * One-command dev environment: brings the bundles up to date, then starts the
 * vite dev server (launcher) and the bundle watcher together; killing this
 * process (Ctrl+C) takes both down.
 *
 * The catch-up build matters after a pull or a branch switch: the watcher
 * only reacts to changes it sees while running, so anything that went stale
 * in between would be served from an old dist-bundle/. On an untouched tree
 * it costs well under a second.
 *
 * Usage: node scripts/dev.mjs [bundle-filter...] [--port n]
 *   filter is passed through to both the catch-up build and watch-bundles.mjs
 *   --port: hand a port to vite; without it the package's own default holds
 */
import { spawn, spawnSync } from 'node:child_process'
import { describe, holder } from './bundle-lock.mjs'

const args = process.argv.slice(2)
const portAt = args.indexOf('--port')
/* The port decides the origin, and the origin decides which localStorage the
   app sees - a fallback port would silently open an empty workspace. */
const port = portAt >= 0 ? args[portAt + 1] : undefined
const filters = args.filter((a, i) => i !== portAt && i !== portAt + 1)

/* Checked here rather than left to the catch-up build, so the reason is the
   first thing on screen instead of a build error. */
const held = holder()
if (held) {
  console.error(
    `${describe(held)} is already running - stop it before starting another.`,
  )
  process.exit(1)
}

const catchUp = spawnSync('node', ['scripts/build-bundles.mjs', ...filters], { stdio: 'inherit' })
if (catchUp.status !== 0) {
  // A bundle that will not build is worth seeing now, not behind a dev server
  console.error('\nbundles are not up to date - fix the build above, then start again')
  process.exit(catchUp.status ?? 1)
}

const children = [
  spawn(
    'npm',
    ['run', 'dev', '--workspace=packages/app/default', ...(port ? ['--', '--port', port, '--strictPort'] : [])],
    {
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'development' },
    },
  ),
  spawn('node', ['scripts/watch-bundles.mjs', ...filters], {
    stdio: 'inherit',
  }),
]

function shutdown(code) {
  for (const child of children) child.kill('SIGTERM')
  process.exit(code)
}
process.on('SIGINT', () => shutdown(130))
process.on('SIGTERM', () => shutdown(143))
// If either process dies, tear the other one down too
for (const child of children) child.on('exit', (code) => shutdown(code ?? 1))
