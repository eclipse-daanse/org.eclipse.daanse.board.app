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
 * What the launcher shows, by the app it was built as (VITE_APP, see
 * scripts/apps.mjs).
 *
 * The board shell and the MDX workbench both create the Vue application,
 * provide it as 'App' and mount it on #app, so exactly one of them is
 * registered; every other bundle is shared.
 *
 * The board shows the workbench at /workbench - a single segment, since the
 * production build loads its assets relative to the page - and the shell
 * everywhere else. The workbench app shows the workbench on every path, /
 * included, and holds only the bundles the workbench needs.
 */
import type { ModuleManifest } from '@eclipse-daanse/tsm'

export const FRAMES = ['app.shell', 'app.workbench']

export interface AppSettings {
  /** The frame on every path; null: by path, as the board does. */
  frame: string | null
  /** The bundles the build holds; null: every one. */
  bundles: string[] | null
}

export function frameOf(pathname: string, { frame }: Pick<AppSettings, 'frame'>): string {
  if (frame) return frame
  const workbench = pathname === '/workbench' || pathname.startsWith('/workbench/')
  return workbench ? 'app.workbench' : 'app.shell'
}

/**
 * The manifests the launcher registers on this path: the one frame, and
 * besides it, of the built-in ones those the build holds - a manifest of a
 * bundle the build left out would only fail to load - and every one the
 * deployment adds (config.json's extraBundles).
 */
export function framed(
  builtIn: ModuleManifest[],
  extras: ModuleManifest[],
  pathname: string,
  settings: AppSettings,
): ModuleManifest[] {
  const frame = frameOf(pathname, settings)
  const held = settings.bundles ? new Set(settings.bundles) : undefined
  return [...builtIn.filter((manifest) => !held || held.has(manifest.id)), ...extras].filter(
    (manifest) => !FRAMES.includes(manifest.id) || manifest.id === frame,
  )
}
