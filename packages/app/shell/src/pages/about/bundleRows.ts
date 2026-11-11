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
 * The bundles of a board, built against loaded.
 *
 * The build knows which bundles were meant to ship (/versions.json); the
 * module loader knows which ones it found and what became of them. Each
 * alone hides the failure that matters: a bundle left out of the image is
 * absent from the loader without a trace, and a bundle a deployment adds
 * is absent from the build. Set side by side, both show.
 */

/** What /versions.json says about one bundle. */
export interface BuiltBundle {
  id: string
  name: string
  version: string
  /** Whether the build holds its output. */
  included: boolean
}

/** What the module loader says about one bundle. */
export interface LoadedBundle {
  id: string
  name?: string
  version: string
  /** The loader's state, or 'not loaded' where it holds no module for it. */
  state: string
  error?: string
}

export type BundleStatus =
  /** Built, and it would not start. */
  | 'failed'
  /** Meant to ship, and the running board does not have it. */
  | 'missing'
  /** Running in another version than the one built. */
  | 'differs'
  /** Not part of the build: the deployment brought it (extraBundles). */
  | 'added'
  /** Running. */
  | 'active'
  /** Known and fine, and not started - loaded on demand, or not needed. */
  | 'idle'

export interface BundleRow {
  id: string
  name: string
  built?: string
  loaded?: string
  state?: string
  error?: string
  status: BundleStatus
}

/* What needs a look first, then what is fine. */
const ORDER: BundleStatus[] = ['failed', 'missing', 'differs', 'added', 'active', 'idle']

function statusOf(built: BuiltBundle | undefined, loaded: LoadedBundle | undefined): BundleStatus {
  if (loaded?.state === 'error') return 'failed'
  if (!loaded || (built && !built.included)) return 'missing'
  if (!built) return 'added'
  if (built.version !== loaded.version) return 'differs'
  return loaded.state === 'active' ? 'active' : 'idle'
}

/* Without a build to compare with, nothing can be missing or added. */
function stateAlone(loaded: LoadedBundle): BundleStatus {
  if (loaded.state === 'error') return 'failed'
  return loaded.state === 'active' ? 'active' : 'idle'
}

/**
 * One row per bundle either side knows of.
 *
 * @param built the build's list, or undefined where there is none - a
 *   board started from sources without /versions.json; every bundle is
 *   then judged by the loader alone
 */
export function bundleRows(built: BuiltBundle[] | undefined, loaded: LoadedBundle[]): BundleRow[] {
  const builtById = new Map((built ?? []).map((each) => [each.id, each]))
  const loadedById = new Map(loaded.map((each) => [each.id, each]))
  const ids = new Set([...builtById.keys(), ...loadedById.keys()])

  const rows = [...ids].map((id): BundleRow => {
    const b = builtById.get(id)
    const l = loadedById.get(id)
    return {
      id,
      name: l?.name ?? b?.name ?? id,
      built: b?.version,
      loaded: l?.version,
      state: l?.state,
      error: l?.error,
      status: built ? statusOf(b, l) : stateAlone(l!),
    }
  })

  return rows.sort(
    (a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status) || a.id.localeCompare(b.id),
  )
}
