/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Checks that a bundle's define follows the build mode.
 *
 * Every bundle config carries `process.env.NODE_ENV` in its define: code
 * from outside that probes it must see a value instead of throwing. For
 * years that value was the string "production" in all 147 of them, so the
 * app on the dev server ran on libraries whose warnings had been compiled
 * out, and nobody could see it from the outside (#1196).
 *
 * The value now comes from the mode. That is one line per config, and a
 * new package copied from an old one brings the hardcoded value straight
 * back - which is invisible until somebody wonders, months later, why a
 * warning never appears. Hence this check.
 *
 * It asks vite, rather than reading the file: a config is a program, and
 * what it means is what `build()` resolves it to. Each config is resolved
 * twice, the way build() does it - once as a release and once the way the
 * watcher calls it - and the two answers have to differ accordingly.
 *
 * Reads only; it changes nothing. It builds nothing, so it needs no lock.
 *
 * Usage: node scripts/check-bundle-mode.mjs [filter...]
 *   filter: only check bundles whose path contains one of the terms
 */
import { spawnSync } from 'node:child_process'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveConfig } from 'vite'
import { bundleDirs } from './bundle-graph.mjs'

const ROOT = resolve(import.meta.dirname, '..')
const filters = process.argv.slice(2).filter((a) => !a.startsWith('--'))

/*
 * The real work runs in a child whose stderr is discarded.
 *
 * Loading a config bundles it with esbuild, and esbuild's own process
 * writes straight to the inherited stderr: a hundred lines about
 * package.json files whose `exports` lists "types" after "import". That
 * is a real defect and not this check's, and a finding printed among
 * those lines would never be read. It cannot be held back from inside -
 * neither process.stderr.write nor console.error is the path it takes.
 *
 * So everything this check has to say goes to stdout, and the child is
 * given the repository root, which is where bundleDirs globs from.
 */
const WORKER = 'CHECK_BUNDLE_MODE_WORKER'
if (!process.env[WORKER]) {
  const child = spawnSync(
    process.execPath,
    [fileURLToPath(import.meta.url), ...process.argv.slice(2)],
    {
      cwd: ROOT,
      stdio: ['ignore', 'inherit', 'ignore'],
      env: { ...process.env, [WORKER]: '1' },
    },
  )
  process.exit(child.status ?? 1)
}

const KEY = 'process.env.NODE_ENV'

/**
 * What the define says, resolved the way `build()` resolves it.
 *
 * The two trailing arguments are build()'s own defaults and they matter:
 * resolveConfig falls back to development without them, and every config
 * would then look like it followed the mode.
 */
async function defineOf(dir, mode) {
  /* resolveConfig writes NODE_ENV as it goes. Left standing, the answer
    to one question would decide the next one. */
  delete process.env.NODE_ENV
  const config = await resolveConfig(
    {
      configFile: join(ROOT, dir, 'vite.bundle.config.ts'),
      root: join(ROOT, dir),
      ...(mode ? { mode } : {}),
      logLevel: 'silent',
    },
    'build',
    'production',
    'production',
  )
  return config.define?.[KEY]
}

const dirs = bundleDirs(filters)

/* The child is started in the root, so this only ever fires on a filter
  that matches nothing - but a check that finds nothing must never be
  mistaken for a check that passed. */
if (dirs.length === 0) {
  console.log(
    filters.length
      ? `no bundles match ${filters.join(' ')}`
      : 'no bundles found - run this from the repository root',
  )
  process.exit(1)
}

const findings = []

for (const dir of dirs) {
  let release
  let development
  try {
    release = await defineOf(dir, undefined)
    development = await defineOf(dir, 'development')
  } catch (error) {
    findings.push({ where: dir, detail: `the config does not load: ${error.message ?? error}` })
    continue
  }

  if (release !== '"production"') {
    findings.push({
      where: dir,
      detail: `a release build defines ${KEY} as ${release}, and it has to be "production"`,
    })
  } else if (development !== '"development"') {
    findings.push({
      where: dir,
      detail:
        `a development build defines ${KEY} as ${development}: the define does not ` +
        'follow the mode. Take the mode - defineConfig(({ mode }) => ({ ... })) - and ' +
        'derive the value from it.',
    })
  }
}

for (const finding of findings) {
  console.log(`${finding.where}\n  ${finding.detail}`)
}

console.log(`${dirs.length} bundle(s) checked, ${findings.length} finding(s)`)

process.exit(findings.length ? 1 : 0)
