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
 * Keeping track of how far the map is zoomed in.
 *
 * Which icons are drawn, and how large, is decided from it: the layer
 * compares it against each renderer's iconMinZoom and scales towards
 * iconFullSizeZoom. Where it never arrives, the layer substitutes 99,
 * which is above every threshold - so every icon is visible at every
 * zoom and none of them ever scale, and the settings for it look
 * ignored rather than broken (#1190).
 */

/** The part of a Leaflet map this needs, and all of it. */
export interface ZoomSource {
  getZoom?: () => number | undefined
  on?: (event: string, handler: () => void) => void
}

/**
 * Reports the map's zoom now, and again whenever it changes.
 *
 * The map is asked first and the configured zoom used where it cannot
 * answer - during startup the Leaflet object exists before it has a
 * view, and a number from the settings is better than nothing at all,
 * since it is the zoom the map is about to be at.
 */
export function followZoom(
  map: ZoomSource | undefined | null,
  configured: number | undefined,
  report: (zoom: number | undefined) => void,
): void {
  const asked = map?.getZoom?.()
  report(asked ?? configured)

  map?.on?.('zoomend', () => report(map.getZoom?.() ?? configured))
}
