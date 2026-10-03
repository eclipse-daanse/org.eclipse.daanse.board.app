/**
 * What a tsm bundle is made of, and when it has gone stale.
 *
 * The build (build-bundles.mjs) and the dev watcher (watch-bundles.mjs) have
 * to agree on this, so the rule lives here once.
 *
 * A bundle's inputs are its own files and the built output - dist/ - of every
 * workspace package it inlines. What the manifest lists under
 * sharedDependencies is externalized by the tsm plugin and never ends up
 * inside, so a change to one of those is not a reason to build.
 */
import { globSync, readFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'

/** Every workspace package by name, so a dependency can be found on disk. */
export const packageDirs = new Map()
for (const file of globSync('packages/**/package.json').filter((f) => !f.includes('node_modules'))) {
  try {
    packageDirs.set(JSON.parse(readFileSync(file, 'utf8')).name, dirname(file))
  } catch {
    // a package.json that will not parse is not a dependency anyone resolves
  }
}

export function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  } catch {
    return undefined
  }
}

/** Every package that carries a vite.bundle.config.ts, path-filtered. */
export function bundleDirs(filters = []) {
  return globSync('packages/**/vite.bundle.config.ts')
    .filter((f) => !f.includes('node_modules'))
    .map((f) => dirname(f))
    .filter((d) => filters.length === 0 || filters.some((t) => d.includes(t)))
    .sort()
}

/**
 * The newest mtime under a directory, or 0 when there is nothing.
 *
 * Directories count too: deleting a file leaves every remaining file older
 * than the output, and only the directory's own mtime says it happened.
 */
export function newestUnder(dir, skip = []) {
  const excluded = (entry) => skip.some((s) => entry === s || entry.startsWith(s + '/'))
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
export function oldestUnder(dir) {
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

/** The workspace packages this bundle bakes in, as { name, dir }. */
export function inlinedDeps(dir) {
  const shared = new Set(
    ((readJson(join(dir, 'manifest.json')) ?? {}).sharedDependencies ?? []).map((d) => d.id),
  )
  const pkg = readJson(join(dir, 'package.json')) ?? {}
  const deps = []
  for (const name of Object.keys(pkg.dependencies ?? {})) {
    if (shared.has(name)) continue
    const depDir = packageDirs.get(name)
    if (depDir) deps.push({ name, dir: depDir })
  }
  return deps
}

/**
 * The reverse edges: for every inlined workspace package, the bundles that
 * carry a copy of it. A change there is a change in all of them.
 */
export function inlinedInto(dirs = bundleDirs()) {
  const byDep = new Map()
  for (const dir of dirs) {
    for (const dep of inlinedDeps(dir)) {
      if (!byDep.has(dep.dir)) byDep.set(dep.dir, { name: dep.name, bundles: [] })
      byDep.get(dep.dir).bundles.push(dir)
    }
  }
  return byDep
}

/** Whether this bundle has to be built again. */
export function isStale(dir) {
  const built = oldestUnder(join(dir, 'dist-bundle'))
  if (!built) return true

  /* dist/ is turbo's output for this same package, not an input, and
     .turbo holds its log. */
  let newest = newestUnder(dir, ['dist-bundle', 'dist-bundle.building', 'dist', 'node_modules', '.turbo'])

  for (const dep of inlinedDeps(dir)) {
    const at = newestUnder(join(dep.dir, 'dist'))
    if (at > newest) newest = at
  }

  return newest > built
}
