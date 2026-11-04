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

/*
 * Bundles a deployment adds without changing the board's source.
 *
 * bundles.ts is what the board ships with; config.json is what a deployment
 * says. Its `extraBundles` key names further manifests - URLs of manifest.json
 * files, or manifests written inline - and the launcher hands them to the
 * loader together with the built-in ones, before anything activates.
 *
 * A bundle runs with the app's rights, so where it comes from is checked:
 * the manifest URL and the entry it names must be same-origin, unless the
 * deployment lists the other origin in `extraBundles.allowedOrigins`. A
 * manifest that cannot be fetched, does not validate, or is refused is
 * reported and left out; the board starts without it.
 */

import type { ModuleManifest } from '@eclipse-daanse/tsm'

/** The `extraBundles` key of config.json */
export interface ExtraBundlesConfig {
  /** URLs of manifest.json files, relative to the page, or manifests inline */
  manifests?: Array<string | ModuleManifest>
  /** Origins other than the page's own that manifests and entries may come from */
  allowedOrigins?: string[]
}

export interface ExtraBundlesOptions {
  /** The page URL: relative manifest URLs resolve against it, its origin is trusted */
  base: string
  /** Manifest ids already taken by the built-in bundles */
  reserved?: Iterable<string>
  fetch?: typeof fetch
}

export interface ExtraBundlesResult {
  manifests: ModuleManifest[]
  /** One line per manifest that was left out, and why */
  problems: string[]
}

const OPTIONAL_LISTS = [
  'dependencies',
  'optionalDependencies',
  'provides',
  'requiresService',
  'sharedDependencies',
] as const

function nonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim() !== ''
}

/** Why a manifest is not usable, or null when it is */
function invalidity(manifest: unknown): string | null {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    return 'not a manifest object'
  }
  const candidate = manifest as Record<string, unknown>
  const missing = (['id', 'version', 'entry'] as const).filter((key) => !nonEmptyString(candidate[key]))
  if (missing.length > 0) return `missing ${missing.join(', ')}`
  const notLists = OPTIONAL_LISTS.filter(
    (key) => candidate[key] !== undefined && !Array.isArray(candidate[key]),
  )
  if (notLists.length > 0) return `${notLists.join(', ')} must be a list`
  return null
}

function originOf(url: string): string | null {
  try {
    return new URL(url).origin
  } catch {
    return null
  }
}

/**
 * The extra manifests a deployment asks for, fetched and checked.
 *
 * Never throws: whatever goes wrong with one manifest is a line in
 * `problems`, and the others are still returned.
 */
export async function loadExtraManifests(
  config: ExtraBundlesConfig | undefined | null,
  options: ExtraBundlesOptions,
): Promise<ExtraBundlesResult> {
  const result: ExtraBundlesResult = { manifests: [], problems: [] }
  if (config === undefined || config === null) return result
  if (typeof config !== 'object' || Array.isArray(config)) {
    result.problems.push('extraBundles: expected an object with a "manifests" list')
    return result
  }
  const entries = config.manifests ?? []
  if (!Array.isArray(entries)) {
    result.problems.push('extraBundles.manifests: expected a list')
    return result
  }

  const doFetch = options.fetch ?? globalThis.fetch.bind(globalThis)
  const pageOrigin = new URL(options.base).origin
  const trusted = new Set<string>([pageOrigin])
  for (const origin of Array.isArray(config.allowedOrigins) ? config.allowedOrigins : []) {
    const normalized = typeof origin === 'string' ? originOf(origin) : null
    if (normalized && normalized !== 'null') trusted.add(normalized)
    else result.problems.push(`extraBundles.allowedOrigins: "${String(origin)}" is not an origin`)
  }
  const taken = new Set<string>(options.reserved ?? [])

  for (const [index, entry] of entries.entries()) {
    const label = typeof entry === 'string' ? entry : `manifests[${index}]`
    try {
      let raw: unknown
      let manifestUrl: string
      if (typeof entry === 'string') {
        manifestUrl = new URL(entry, options.base).href
        const origin = originOf(manifestUrl)
        if (!origin || !trusted.has(origin)) {
          throw new Error(`origin ${origin} is not allowed`)
        }
        const response = await doFetch(manifestUrl)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        raw = await response.json()
      } else {
        manifestUrl = options.base
        raw = entry
      }

      const problem = invalidity(raw)
      if (problem) throw new Error(problem)
      const manifest = { ...(raw as ModuleManifest) }
      if (taken.has(manifest.id)) throw new Error(`id ${manifest.id} is already taken`)

      // A relative entry belongs to the manifest that names it, not to the page
      manifest.entry = new URL(manifest.entry, manifestUrl).href
      const entryOrigin = originOf(manifest.entry)
      if (!entryOrigin || !trusted.has(entryOrigin)) {
        throw new Error(`entry origin ${entryOrigin} is not allowed`)
      }

      taken.add(manifest.id)
      result.manifests.push(manifest)
    } catch (error) {
      result.problems.push(`${label}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
  return result
}
