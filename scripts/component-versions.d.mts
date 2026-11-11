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
/* The shape of /versions.json, for vite.config.ts and the /about screen. */

export interface ComponentVersions {
  app: { name: string; version: string; variant?: string }
  commit?: string
  builtAt: string
  bundles: Array<{ id: string; name: string; version: string; included: boolean }>
  packages: Array<{ name: string; version: string }>
  dependencies: Array<{ name: string; version: string }>
}

export declare const KEY_DEPENDENCIES: string[]

export declare function collectComponentVersions(options: {
  root: string
  included?: (dir: string) => boolean
  belongs?: (id: string) => boolean
  variant?: string
  commit?: string
  builtAt?: Date
}): ComponentVersions
