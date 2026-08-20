/**
 * One-command dev environment: starts the vite dev server (launcher) and the
 * bundle watcher together; killing this process (Ctrl+C) takes both down.
 *
 * Usage: node scripts/dev.mjs [bundle-filter...]
 *   filter is passed through to watch-bundles.mjs
 */
import { spawn } from 'node:child_process'

const children = [
  spawn('npm', ['run', 'dev', '--workspace=packages/app/default'], {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' },
  }),
  spawn('node', ['scripts/watch-bundles.mjs', ...process.argv.slice(2)], {
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
