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

/* Types of apps.mjs, for vite.config.ts. */

export interface AppDefinition {
  title: string
  favicon: string
  /** The frame bundle the launcher shows on every path; none: by path. */
  frame?: string
  /** Where the app's bundles start; none: every bundle. */
  roots?: string[]
}

export declare const APPS: Record<string, AppDefinition>

export declare function appOf(
  env?: Record<string, string | undefined>,
): AppDefinition & { id: string; outDir: string }
