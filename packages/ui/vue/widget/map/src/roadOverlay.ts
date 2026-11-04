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

import L from 'leaflet'
import { RoadOverlay } from './gen/RoadOverlay'
import './roadOverlay.css'

/**
 * Roads drawn over the base map (#1235).
 *
 * Transparent raster tiles in a pane of their own, above the base map and
 * below everything a board draws from its data. The presets are the two
 * services that deliver such tiles as transparent PNG; both ask for an
 * account for commercial use, which is why the model starts with none.
 */

/** The pane the overlay is drawn into. */
export const OVERLAY_PANE = 'roadOverlayPane'

/**
 * Above Leaflet's tilePane (200), where the base map sits, and below its
 * overlayPane (400) and the layer panes the widget creates from 400 up.
 */
export const OVERLAY_Z_INDEX = 250

/** Set on the pane when its colours are to be inverted in the dark theme. */
export const INVERT_CLASS = 'road-overlay--invert'

const STADIA_ATTRIBUTION =
  '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> ' +
  '&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> ' +
  '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> ' +
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'

const ESRI_ATTRIBUTION = 'Tiles &copy; <a href="https://www.esri.com/" target="_blank">Esri</a>'

const STADIA_LINES = 'https://tiles.stadiamaps.com/tiles/stamen_toner_lines/{z}/{x}/{y}.png'
const STADIA_LABELS = 'https://tiles.stadiamaps.com/tiles/stamen_toner_labels/{z}/{x}/{y}.png'
const ESRI_TRANSPORTATION =
  'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}'

interface Preset {
  /** Drawn in this order, the last one on top. */
  urls: string[]
  attribution: string
  /** Whether the service takes the key as api_key. */
  keyed: boolean
}

const PRESETS: Partial<Record<RoadOverlay, Preset>> = {
  [RoadOverlay.stadiaLines]: { urls: [STADIA_LINES], attribution: STADIA_ATTRIBUTION, keyed: true },
  [RoadOverlay.stadiaLinesLabels]: {
    urls: [STADIA_LINES, STADIA_LABELS],
    attribution: STADIA_ATTRIBUTION,
    keyed: true,
  },
  [RoadOverlay.esriTransportation]: {
    urls: [ESRI_TRANSPORTATION],
    attribution: ESRI_ATTRIBUTION,
    keyed: false,
  },
}

/** The settings the overlay is read from - the model's names. */
export interface OverlaySettings {
  overlay?: unknown
  overlayUrl?: unknown
  overlayApiKey?: unknown
  overlayOpacity?: unknown
  overlayInvertDark?: unknown
}

/** What is drawn: the tile URLs ready to load, and how. */
export interface OverlayTiles {
  urls: string[]
  attribution: string
  opacity: number
  invertInDark: boolean
}

/** A tile URL with the key appended, kept apart from a query it has. */
export function withApiKey(url: string, key: string): string {
  if (!key) return url
  return `${url}${url.includes('?') ? '&' : '?'}api_key=${encodeURIComponent(key)}`
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function opacityOf(value: unknown): number {
  const number = typeof value === 'number' ? value : Number(value)
  if (value === undefined || value === null || value === '' || Number.isNaN(number)) return 1
  return Math.min(1, Math.max(0, number))
}

/**
 * The overlay these settings ask for, or nothing.
 *
 * Nothing for 'none', for a value no preset knows, and for 'custom'
 * without an address. The key goes to Stadia only: the other services
 * have no use for it, and a key is not something to send where it is
 * not asked for.
 */
export function overlayTiles(settings: OverlaySettings | undefined): OverlayTiles | undefined {
  const choice = settings?.overlay as RoadOverlay | undefined
  const opacity = opacityOf(settings?.overlayOpacity)
  const invertInDark = settings?.overlayInvertDark === true

  if (choice === RoadOverlay.custom) {
    const url = text(settings?.overlayUrl)
    if (!url) return undefined
    return { urls: [url], attribution: '', opacity, invertInDark }
  }

  const preset = choice ? PRESETS[choice] : undefined
  if (!preset) return undefined

  const key = preset.keyed ? text(settings?.overlayApiKey) : ''
  return {
    urls: preset.urls.map((url) => withApiKey(url, key)),
    attribution: preset.attribution,
    opacity,
    invertInDark,
  }
}

/** A comparable form, so the overlay is redrawn only when it changes. */
export function overlayKey(tiles: OverlayTiles | undefined): string {
  return tiles ? JSON.stringify(tiles) : ''
}

export type TileLayerFactory = (url: string, options: L.TileLayerOptions) => L.Layer

/**
 * Draws the overlay onto a map and hands back what it added.
 *
 * The pane is made on first use and is where every overlay tile goes, so
 * the order against the base map does not depend on the order in which
 * layers happen to be added. The attribution sits on the first tile
 * layer only, so the credit is shown once. The caller removes the layers
 * before drawing a changed overlay.
 */
export function drawOverlay(
  map: L.Map,
  tiles: OverlayTiles | undefined,
  createTileLayer: TileLayerFactory = (url, options) => L.tileLayer(url, options),
): L.Layer[] {
  const pane = map.getPane(OVERLAY_PANE) ?? map.createPane(OVERLAY_PANE)
  pane.style.zIndex = String(OVERLAY_Z_INDEX)
  pane.style.pointerEvents = 'none'
  pane.classList.toggle(INVERT_CLASS, tiles?.invertInDark === true)

  if (!tiles) return []

  return tiles.urls.map((url, index) =>
    createTileLayer(url, {
      pane: OVERLAY_PANE,
      opacity: tiles.opacity,
      attribution: index === 0 ? tiles.attribution : '',
      maxNativeZoom: 19,
      maxZoom: 25,
    }).addTo(map),
  )
}
