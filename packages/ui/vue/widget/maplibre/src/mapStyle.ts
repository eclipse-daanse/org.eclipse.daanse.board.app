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
 * What the map adds to its base style, from the settings: the raster base,
 * the 3D buildings, the terrain, the sky and the data layers.
 *
 * Plain functions from settings to style specifications, so the map
 * component only applies them and the tests read them without WebGL.
 * Everything added carries the PREFIX, which is how the component finds
 * and removes it again before it applies a changed setting.
 */

import { pinImageId } from './pin'
import type {
  ExpressionSpecification,
  LayerSpecification,
  RasterDEMSourceSpecification,
  RasterSourceSpecification,
  SkySpecification,
  StyleSpecification,
} from 'maplibre-gl'

/** The settings this module reads - the model's names, plain values. */
export interface BaseSettings {
  styleUrl?: string
  darkStyleUrl?: string
  rasterUrl?: string
  rasterLayers?: string
  rasterOpacity?: number
  rasterAttribution?: string
  rasterInvertDark?: boolean
  buildings?: boolean
  buildingColor?: string
  buildingOpacity?: number
  buildingSourceLayer?: string
  terrainUrl?: string
  terrainEncoding?: string
  terrainExaggeration?: number
  sky?: boolean
  selectionColor?: string
}

/** How a data layer looks - shared by the OGC STA and the GeoJSON layers. */
export interface FeatureLook {
  /** Colour of a feature without a colour property of its own. */
  color: string
  opacity: number
  outlineColor: string
  pointRadius: number
  extrude: boolean
  /** Height of a block in metres, as an expression on the feature. */
  height: ExpressionSpecification | number
  selectionColor: string
  /** circle, or pin: a marker standing on the place (#1273). */
  pointStyle?: string
  /** Size of a pin, 1 is 24 by 32 pixels. */
  markerSize?: number
  /** A Material Symbols icon in the head of a pin. */
  markerIcon?: string
}

export const PREFIX = 'daanse:'
export const RASTER_ID = `${PREFIX}raster`
export const BUILDINGS_ID = `${PREFIX}buildings`
export const TERRAIN_ID = `${PREFIX}terrain`

const text = (value: unknown) => String(value ?? '').trim()
const number = (value: unknown, fallback: number) => {
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

/** The style the map draws as its base, for the theme it is shown in. */
export function styleUrlOf(settings: BaseSettings, dark: boolean): string {
  const light = text(settings.styleUrl) || 'https://tiles.openfreemap.org/styles/liberty'
  return dark ? text(settings.darkStyleUrl) || light : light
}

/**
 * The tile addresses of the raster base, or null where there is none.
 *
 * With layers named, the address is a WMS server and is asked for a
 * GetMap in EPSG:3857, one 256 px tile at a time; otherwise it is an XYZ
 * template or a GetMap template that names {bbox-epsg-3857} itself.
 */
export function rasterTilesOf(settings: BaseSettings): string[] | null {
  const url = text(settings.rasterUrl)
  if (!url) return null
  const layers = text(settings.rasterLayers)
  if (!layers) return [url]
  const query = [
    'SERVICE=WMS',
    'VERSION=1.1.1',
    'REQUEST=GetMap',
    `LAYERS=${encodeURIComponent(layers)}`,
    'STYLES=',
    'FORMAT=image/png',
    'TRANSPARENT=true',
    'SRS=EPSG:3857',
    'WIDTH=256',
    'HEIGHT=256',
    'BBOX={bbox-epsg-3857}',
  ].join('&')
  const separator = url.includes('?') ? (/[?&]$/.test(url) ? '' : '&') : '?'
  return [`${url}${separator}${query}`]
}

/** The raster base as a source, or null where there is none. */
export function rasterSourceOf(settings: BaseSettings): RasterSourceSpecification | null {
  const tiles = rasterTilesOf(settings)
  if (!tiles) return null
  const source: RasterSourceSpecification = { type: 'raster', tiles, tileSize: 256 }
  const attribution = text(settings.rasterAttribution)
  if (attribution) source.attribution = attribution
  return source
}

/**
 * The raster base as a layer. It lies over the whole base style - a city
 * map with labels of its own needs none of the style's - and under the
 * buildings and the data. In the dark theme its brightness is turned
 * round where asked, so a light map comes out dark.
 */
export function rasterLayerOf(settings: BaseSettings, dark: boolean): LayerSpecification {
  const invert = dark && settings.rasterInvertDark !== false
  return {
    id: RASTER_ID,
    type: 'raster',
    source: RASTER_ID,
    paint: {
      'raster-opacity': number(settings.rasterOpacity, 1),
      ...(invert ? { 'raster-brightness-min': 1, 'raster-brightness-max': 0.15 } : {}),
    },
  }
}

/** The terrain as a raster-dem source, or null for a flat map. */
export function terrainSourceOf(settings: BaseSettings): RasterDEMSourceSpecification | null {
  const url = text(settings.terrainUrl)
  if (!url) return null
  const encoding = text(settings.terrainEncoding) === 'mapbox' ? 'mapbox' : 'terrarium'
  return url.includes('{z}')
    ? { type: 'raster-dem', tiles: [url], tileSize: 256, encoding, maxzoom: 15 }
    : { type: 'raster-dem', url, encoding }
}

/** The exaggeration the terrain is drawn with. */
export const exaggerationOf = (settings: BaseSettings) => number(settings.terrainExaggeration, 1)

/**
 * The vector source of the base style that holds the buildings: the one a
 * style layer reads the building layer from, else the first vector source.
 */
export function buildingSourceOf(style: Pick<StyleSpecification, 'sources' | 'layers'>, sourceLayer: string): string | null {
  for (const layer of style.layers ?? []) {
    const held = layer as { source?: string; 'source-layer'?: string }
    if (held['source-layer'] === sourceLayer && held.source) return held.source
  }
  for (const [id, source] of Object.entries(style.sources ?? {})) {
    if ((source as { type?: string }).type === 'vector') return id
  }
  return null
}

/**
 * The layers of the base style that draw buildings in 3D themselves. They
 * are hidden while the map draws its own, so no building stands twice,
 * and while it draws none, so "no buildings" means a flat map.
 */
export function styleExtrusionsOf(style: Pick<StyleSpecification, 'layers'>): string[] {
  return (style.layers ?? [])
    .filter((layer) => layer.type === 'fill-extrusion' && !layer.id.startsWith(PREFIX))
    .map((layer) => layer.id)
}

/**
 * The buildings of the base style in 3D: as tall as the style says
 * (render_height, else height), standing on render_min_height.
 */
export function buildingLayerOf(settings: BaseSettings, source: string): LayerSpecification {
  return {
    id: BUILDINGS_ID,
    type: 'fill-extrusion',
    source,
    'source-layer': text(settings.buildingSourceLayer) || 'building',
    minzoom: 13,
    filter: ['!=', ['get', 'hide_3d'], true],
    paint: {
      'fill-extrusion-color': text(settings.buildingColor) || '#d6d0c4',
      'fill-extrusion-opacity': number(settings.buildingOpacity, 0.85),
      'fill-extrusion-height': ['coalesce', ['get', 'render_height'], ['get', 'height'], 8],
      'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], ['get', 'min_height'], 0],
      'fill-extrusion-vertical-gradient': true,
    },
  }
}

/** The sky and fog above the horizon of a tilted map, in the theme's colours. */
export function skyOf(dark: boolean): SkySpecification {
  return dark
    ? {
        'sky-color': '#0b1220',
        'horizon-color': '#1f2a3d',
        'fog-color': '#111827',
        'sky-horizon-blend': 0.6,
        'horizon-fog-blend': 0.6,
        'fog-ground-blend': 0.3,
      }
    : {
        'sky-color': '#9cc7ef',
        'horizon-color': '#e8eef5',
        'fog-color': '#f1f4f8',
        'sky-horizon-blend': 0.5,
        'horizon-fog-blend': 0.6,
        'fog-ground-blend': 0.2,
      }
}

/** A feature's own colour, else the layer's; the selection colour while selected. */
function colorOf(look: FeatureLook): ExpressionSpecification {
  return [
    'case',
    ['boolean', ['get', 'selected'], false],
    look.selectionColor,
    ['coalesce', ['get', 'color'], look.color],
  ]
}

/* A multi geometry is named as such by newer style specs, as its single kind by older ones. */
const kind = (...names: string[]): ExpressionSpecification => ['in', ['geometry-type'], ['literal', names]]
const POLYGON = kind('Polygon', 'MultiPolygon')
const LINE = kind('LineString', 'MultiLineString')
const POINT = kind('Point', 'MultiPoint')

/**
 * The layers that draw one data source: areas flat or as blocks, their
 * outlines and lines, and points as circles. Their ids start with the
 * source id, so a click can name the layer it hit.
 */
export function featureLayersOf(source: string, look: FeatureLook): LayerSpecification[] {
  const color = colorOf(look)
  const layers: LayerSpecification[] = []
  if (look.extrude) {
    layers.push({
      id: `${source}:extrusion`,
      type: 'fill-extrusion',
      source,
      filter: POLYGON,
      paint: {
        'fill-extrusion-color': color,
        'fill-extrusion-opacity': look.opacity,
        'fill-extrusion-height': look.height,
        'fill-extrusion-base': 0,
      },
    })
  } else {
    layers.push({
      id: `${source}:fill`,
      type: 'fill',
      source,
      filter: POLYGON,
      paint: { 'fill-color': color, 'fill-opacity': look.opacity },
    })
  }
  layers.push(
    {
      id: `${source}:line`,
      type: 'line',
      source,
      filter: ['any', POLYGON, LINE],
      paint: {
        'line-color': [
          'case',
          ['boolean', ['get', 'selected'], false],
          look.selectionColor,
          LINE,
          color,
          look.outlineColor,
        ],
        'line-width': ['case', ['boolean', ['get', 'selected'], false], 3, 1.5],
      },
    },
  )
  layers.push(...(look.pointStyle === 'pin' ? pinLayersOf(source, look) : [circleLayerOf(source, look, color)]))
  return layers
}

function circleLayerOf(source: string, look: FeatureLook, color: ExpressionSpecification): LayerSpecification {
  return {
    id: `${source}:circle`,
    type: 'circle',
    source,
    filter: POINT,
    paint: {
      'circle-color': color,
      'circle-radius': look.pointRadius,
      'circle-stroke-color': look.outlineColor,
      'circle-stroke-width': 1.5,
      'circle-pitch-alignment': 'map',
    },
  }
}

/**
 * Points as pins (#1273): a ring on the ground under a selected one, and the
 * pin itself, standing on the place, upright however the map is tilted. The
 * image is named by its icon and colour (the widget makes it when asked); a
 * selected pin is larger, in the colour of its value, drawn over the others,
 * with a ring in the selection colour under it.
 */
function pinLayersOf(source: string, look: FeatureLook): LayerSpecification[] {
  const selected: ExpressionSpecification = ['boolean', ['get', 'selected'], false]
  const size = number(look.markerSize, 1)
  return [
    {
      id: `${source}:halo`,
      type: 'circle',
      source,
      filter: ['all', POINT, selected],
      paint: {
        'circle-radius': 14 * size,
        'circle-color': look.selectionColor,
        'circle-opacity': 0.35,
        'circle-stroke-color': look.selectionColor,
        'circle-stroke-width': 2,
        'circle-pitch-alignment': 'map',
      },
    },
    {
      id: `${source}:pin`,
      type: 'symbol',
      source,
      filter: POINT,
      layout: {
        // The colour of its value, selected or not: the size and the ring say it is selected.
        'icon-image': ['concat', pinImageId('', look.markerIcon), ['coalesce', ['get', 'color'], look.color]],
        'icon-anchor': 'bottom',
        'icon-size': ['case', selected, 1.35 * size, size],
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
        'icon-pitch-alignment': 'viewport',
        'symbol-sort-key': ['case', selected, 1, 0],
      },
    },
  ]
}

/**
 * The layer a data layer is put below, or undefined for the top (#1270).
 *
 * A flat layer drawn after the 3D buildings is painted over them, so an
 * area showed through every building in a tilted view. Flat layers go
 * below the buildings, which then hide what lies behind them; a block
 * stays on top and meets the buildings in the 3D pass.
 */
export function beforeIdOf(layer: Pick<LayerSpecification, 'type'>, buildingsShown: boolean): string | undefined {
  // A pin stands up from the ground: the buildings must not hide it either.
  return buildingsShown && layer.type !== 'fill-extrusion' && layer.type !== 'symbol' ? BUILDINGS_ID : undefined
}

/** The source id a data layer draws from. */
export const sourceIdOf = (kind: 'things' | 'geojson', id: string | undefined) => `${PREFIX}${kind}:${id ?? ''}`

/** The data layer a rendered layer id belongs to, or null for one of the base. */
export function dataLayerOf(layerId: string): { kind: 'things' | 'geojson'; id: string } | null {
  const match = /^daanse:(things|geojson):(.*):(fill|extrusion|line|circle|halo|pin)$/.exec(layerId)
  return match ? { kind: match[1] as 'things' | 'geojson', id: match[2] } : null
}

/** How an OGC STA layer looks: colour and height are worked out per thing. */
export function thingLookOf(
  layer: {
    fillColor?: string
    fillOpacity?: number
    outlineColor?: string
    pointRadius?: number
    extrude?: boolean
    pointStyle?: string
    markerSize?: number
    markerIcon?: string
  },
  selectionColor: string,
): FeatureLook {
  return {
    pointStyle: layer.pointStyle === 'pin' ? 'pin' : 'circle',
    markerSize: number(layer.markerSize, 1),
    markerIcon: text(layer.markerIcon).replace(/[^a-z0-9_]/gi, ''),
    color: text(layer.fillColor) || '#3388ff',
    opacity: number(layer.fillOpacity, 0.6),
    outlineColor: text(layer.outlineColor) || '#1f2937',
    pointRadius: number(layer.pointRadius, 7),
    extrude: layer.extrude === true,
    height: ['coalesce', ['get', 'height'], 0],
    selectionColor,
  }
}

/** How a GeoJSON layer looks: the height comes from a property of each feature. */
export function geoJsonLookOf(
  layer: {
    color?: string
    opacity?: number
    extrude?: boolean
    heightProperty?: string
    heightFactor?: number
    baseHeight?: number
  },
  selectionColor: string,
): FeatureLook {
  const property = text(layer.heightProperty) || 'height'
  const base = number(layer.baseHeight, 10)
  return {
    color: text(layer.color) || '#c45e00',
    opacity: number(layer.opacity, 0.6),
    outlineColor: text(layer.color) || '#c45e00',
    pointRadius: 6,
    extrude: layer.extrude === true,
    height: [
      'case',
      ['has', property],
      ['*', ['to-number', ['get', property], 0], number(layer.heightFactor, 1)],
      base,
    ],
    selectionColor,
  }
}
