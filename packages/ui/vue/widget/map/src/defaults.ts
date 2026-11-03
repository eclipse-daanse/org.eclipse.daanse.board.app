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

import { dataTypeFor } from './dataTypes'

/**
 * What a map needs before it draws anything at all.
 *
 * A map widget made from a data source arrives with the source set and
 * nothing else, and shows an empty tile layer: the component that draws
 * GeoJSON renders once per style, so with no style there is no loop to
 * run and no geometry on the map. Nothing says why. The person is left to
 * discover that a layer and a style have to be added by hand, in that
 * order, before the source they chose appears (#1187).
 *
 * So a map that has neither, and has been given a source whose geography
 * it can read, starts with one of each. Everything here is ordinary
 * configuration - the same a person would assemble through the renderer
 * dialog - and it is only ever written where there is none, so a map
 * someone has set up is never touched.
 */

/** The shapes this preset knows how to draw. */
const GEOJSON_SHAPES = new Set(['geojson', 'object'])

/** Whether a source of this type answers something the preset can draw. */
export function drawsGeoJson(sourceType: string | undefined): boolean {
  return GEOJSON_SHAPES.has(dataTypeFor(sourceType))
}

/**
 * A style that draws every feature it is given.
 *
 * Without conditions on the datastream, the comparator lets the whole
 * collection through - which is what is wanted before anybody has said
 * what to single out.
 */
export function geoJsonStyle(id: string) {
  return {
    id,
    name: 'GeoJSON',
    renderer: {
      point_render_as: 'icon',
      point_prop: 'name',
      point: {
        currentIcon: 'place',
        iconColor: '#2563eb',
        iconSize: 36,
        isIconFilled: true,
        strokeWeight: 2,
        opticSize: 24,
        grade: 1,
      },
      pointPin: { color: '#2563eb' },
      area: {
        stroke: true,
        color: '#2563eb',
        weight: 2,
        opacity: 1,
        lineCap: 'None',
        dashOffset: '2',
        fill: true,
        fillOpacity: 0.25,
        className: '',
      },
    },
  }
}

/**
 * The layer that draws the widget's own source through that style.
 *
 * No datasourceId of its own: a layer without one is handed the widget's
 * primary source, which is the one the person picked when they made it.
 */
export function geoJsonLayer(styleId: string) {
  return {
    type: 'REST-GEOJSON',
    name: 'GeoJSON',
    title: 'GeoJSON',
    level: 0,
    styleIds: [styleId],
  }
}

export interface MapPreset {
  layers: ReturnType<typeof geoJsonLayer>[]
  styles: ReturnType<typeof geoJsonStyle>[]
}

/**
 * What to start a map with, where it would otherwise show nothing.
 *
 * Answers nothing - and so changes nothing - for a map that already has
 * layers or styles, for one without a source, and for a source whose
 * geography is read another way (SensorThings brings its own layer).
 */
export function presetFor(
  sourceType: string | undefined,
  held: { layers?: unknown[]; styles?: unknown[] } | undefined,
  id: () => string,
): MapPreset | undefined {
  if (!sourceType || !drawsGeoJson(sourceType)) return undefined
  if (!held) return undefined
  if (held.layers?.length || held.styles?.length) return undefined

  const styleId = id()
  return { layers: [geoJsonLayer(styleId)], styles: [geoJsonStyle(styleId)] }
}
