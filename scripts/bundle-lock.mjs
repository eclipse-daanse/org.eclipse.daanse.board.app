/**
 * One writer at a time for the dist-bundle/ directories.
 *
 * Every bundle build empties its output directory before it fills it again
 * (emptyOutDir), so two of them in the same package leave it empty - and a
 * bundle that is empty rather than stale fails at load time, far from the
 * cause. Within one watcher the builds are serialised; between two processes
 * nothing was stopping them.
 *
 * The lock is advisory and process-scoped: a holder that died leaves a file
 * behind, and the next claim takes it over once it sees the pid is gone.
 */
import { mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
/* Under node_modules: not the working tree, and cleared by a fresh install */
const LOCK = join(ROOT, 'node_modules', '.cache', 'daanse-bundles.lock')

/* A build started by the process that already holds the lock is the same
   writer, not a second one. */
const INHERITED = 'DAANSE_BUNDLE_LOCK'

function alive(pid) {
  try {
    process.kill(pid, 0)
    return true
  } catch (error) {
    return error.code === 'EPERM' // running, just not ours to signal
  }
}

/** Who holds the lock right now, or undefined when nobody does. */
export function holder() {
  let held
  try {
    held = JSON.parse(readFileSync(LOCK, 'utf8'))
  } catch {
    return undefined
  }
  return held?.pid && alive(held.pid) ? held : undefined
}

/** The environment a child needs to build under this process's claim. */
export function inheritEnv(env = process.env) {
  return { ...env, [INHERITED]: String(process.pid) }
}

/**
 * Claims the lock for this process.
 *
 * Returns `{ ok: true, release }`, or `{ ok: false, held }` naming the
 * process that has it. A claim inherited from the parent always succeeds -
 * the parent is holding it on this process's behalf.
 */
export function claim(what) {
  if (process.env[INHERITED]) return { ok: true, release: () => {} }

  mkdirSync(dirname(LOCK), { recursive: true })
  const mine = JSON.stringify({ pid: process.pid, what, since: new Date().toISOString() })

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      writeFileSync(LOCK, mine, { flag: 'wx' })
      const release = () => {
        try {
          if (JSON.parse(readFileSync(LOCK, 'utf8')).pid === process.pid) unlinkSync(LOCK)
        } catch {
          // gone already, or taken over after we died - either way, nothing to do
        }
      }
      process.on('exit', release)
      return { ok: true, release }
    } catch (error) {
      if (error.code !== 'EEXIST') throw error
      const held = holder()
      if (held) return { ok: false, held }
      // the holder is gone but its lock is not
      try {
        unlinkSync(LOCK)
      } catch {
        // someone else cleared it first; the retry will find out
      }
    }
  }
  return { ok: false, held: holder() }
}

/** A line naming the holder, for a message that has to explain itself. */
export function describe(held) {
  if (!held) return 'another process'
  const what = held.what === 'watch' ? 'a bundle watcher' : 'a bundle build'
  return `${what} (pid ${held.pid}, since ${new Date(held.since).toLocaleTimeString()})`
}
