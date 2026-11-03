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
 * What the map's zoom decides about an icon or a label.
 *
 * Out of the layer component so it can be checked without mounting one:
 * the layer takes twenty-one props and builds its markers through a
 * cluster pass, which is a great deal of scaffolding around three small
 * sums.
 *
 * The sums are worth checking on their own account. Where the zoom does
 * not arrive, `effectiveZoom` falls back to 99 - above every threshold
 * anyone would set - so every icon shows at every zoom and none of them
 * scale. That is not a visible failure; it is the settings quietly doing
 * nothing, which is how it survived four weeks unnoticed (#1190).
 */

/** The parts of a renderer's settings that depend on the zoom. */
export interface ZoomSettings {
  iconMinZoom?: number | null
  iconScaleWithZoom?: boolean
  iconFullSizeZoom?: number | null
  labelMinZoom?: number | null
  labelScaleWithZoom?: boolean
  clusterEnabled?: boolean
}

/*
 * Named for what it holds, not for what holds it.
 *
 * Calling this Renderer put a second declaration of that name in the
 * package, beside the generated one in src/gen - the very shadowing the
 * model conformance check exists to catch. The two are not the same
 * thing either: the generated Renderer is a renderer, this is the part
 * of one that the zoom consults.
 */
export interface ZoomRules {
  renderer?: ZoomSettings | null
  ds_renderer?: Array<{ renderer?: ZoomSettings | null }> | null
}

/** Whether these settings ask anything of the zoom at all. */
export function usesZoomSettings(settings: ZoomSettings | null | undefined): boolean {
  if (settings == null) return false
  return (
    settings.iconMinZoom != null ||
    !!settings.iconScaleWithZoom ||
    settings.labelMinZoom != null ||
    !!settings.labelScaleWithZoom ||
    !!settings.clusterEnabled
  )
}

/**
 * Whether any renderer on the layer does.
 *
 * Where none does, the zoom is held constant so that panning and zooming
 * never re-render what may be hundreds of markers - Leaflet moves those
 * itself, in CSS.
 */
export function zoomFeaturesActive(renderers: readonly ZoomRules[]): boolean {
  return renderers.some(
    (each) =>
      usesZoomSettings(each.renderer) ||
      (each.ds_renderer ?? []).some((inner) => usesZoomSettings(inner.renderer)),
  )
}

/** Above every threshold, which is what "no zoom in play" means here. */
export const ALWAYS = 99

/** The zoom to compare thresholds against. */
export function effectiveZoom(
  renderers: readonly ZoomRules[],
  currentZoom: number | undefined,
): number {
  return zoomFeaturesActive(renderers) ? (currentZoom ?? ALWAYS) : ALWAYS
}

/** Whether this renderer's icon is drawn at that zoom. */
export function isIconVisible(renderer: ZoomRules, zoom: number): boolean {
  const settings = renderer.renderer
  if (settings?.iconMinZoom == null) return true
  return zoom >= settings.iconMinZoom
}

/** Whether this renderer's label is drawn at that zoom. */
export function isLabelVisible(renderer: ZoomRules, zoom: number): boolean {
  const settings = renderer.renderer
  if (settings?.labelMinZoom == null) return true
  return zoom >= settings.labelMinZoom
}

/**
 * How large the icon is drawn, between a fifth and its full size.
 *
 * Measured against the map's own zoom rather than the effective one: a
 * renderer that asks to scale has said so, and the floor keeps an icon
 * from vanishing at the far end.
 */
export function iconScale(renderer: ZoomRules, currentZoom: number | undefined): number {
  const settings = renderer.renderer
  if (!settings?.iconScaleWithZoom) return 1

  const fullSizeZoom = settings.iconFullSizeZoom ?? 18
  const zoom = currentZoom ?? fullSizeZoom
  if (zoom >= fullSizeZoom) return 1
  return Math.max(0.2, zoom / fullSizeZoom)
}
