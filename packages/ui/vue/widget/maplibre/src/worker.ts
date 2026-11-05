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
 * Where the MapLibre worker comes from.
 *
 * MapLibre 6 parses tiles in a module worker of its own file. The bundle
 * carries it beside index.js (see vite.bundle.config.ts), as .js, the type
 * every server hands out as JavaScript. Without this MapLibre looks for
 * maplibre-gl-worker.mjs beside the module that imports it.
 */

import { getWorkerUrl, setWorkerUrl } from 'maplibre-gl'

export const WORKER_FILE = 'maplibre-gl-worker.js'

/** Points MapLibre at the worker beside this bundle, once. */
export function useMapLibreWorker(): void {
  if (getWorkerUrl()) return
  const here = import.meta.url
  if (!/^https?:/.test(here)) return
  // Not new URL(..., import.meta.url): vite would take that for an asset of the sources.
  setWorkerUrl(here.replace(/[^/?#]*([?#].*)?$/, WORKER_FILE))
}
