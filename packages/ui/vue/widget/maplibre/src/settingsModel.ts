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
 * The settings of a 3D map as the model's own object - the adopt path of
 * the Leaflet map (#1262).
 *
 * A board hands a widget its settings as parsed JSON. Adopted into a
 * MapLibreSettings, every layer list is a containment EList, and one
 * useEObject on the settings hears every change below them. The settings,
 * the preview and the board hold the same configuration, so the adoption
 * is cached by the stored object: whichever comes first makes it, and the
 * others get the same instance.
 */

import { toRaw } from 'vue'
import { adopt, isModelled } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { MaplibreFactory } from './gen/MaplibreFactory'
import type { MapLibreSettings } from './gen/MapLibreSettings'
import type { ThingLayer } from './gen/ThingLayer'
import type { GeoJsonLayer } from './gen/GeoJsonLayer'
import type { ColorMapping } from './gen/ColorMapping'
import type { WmsService } from './gen/WmsService'
import type { WmsLayer } from './gen/WmsLayer'

/* Read when used: the package needs the events package registered first */
const factory = () => MaplibreFactory.eINSTANCE

/** Adoptions already made, by the stored object they were made from. */
const adopted = new WeakMap<object, MapLibreSettings>()

/**
 * The settings of a map as a MapLibreSettings, adopted once per stored
 * object. Already modelled input is handed back as it is; nothing at all
 * gives fresh settings with the model's defaults.
 */
export function modelledSettings(given: unknown): MapLibreSettings {
  /* By the object itself: a reactive proxy of it is the same configuration. */
  const stored = given && typeof given === 'object' ? toRaw(given) : given
  if (!stored || typeof stored !== 'object') return factory().createMapLibreSettings()
  if (isModelled(stored)) return stored as unknown as MapLibreSettings
  const held = adopted.get(stored)
  if (held) return held
  const made = migrated(adopt(factory().createMapLibreSettings(), stored))
  adopted.set(stored, made)
  return made
}

/**
 * A board from before #1274 named its WMS layers in rasterLayers, comma
 * separated, on the server in rasterUrl. That becomes a service with one
 * layer per name, at the opacity of the raster base; the two old fields are
 * emptied. Nothing changes for a board that has services already, or no
 * layers named.
 */
export function migrated(settings: MapLibreSettings): MapLibreSettings {
  const names = String(settings.rasterLayers ?? '')
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
  const url = String(settings.rasterUrl ?? '').trim()
  if (!names.length || !url || settings.services.size() > 0) return settings
  const service = factory().createWmsService()
  service.id = layerId('wms-service')
  service.url = url
  service.title = hostOf(url)
  settings.services.add(service)
  for (const name of names) {
    const layer = factory().createWmsLayer()
    layer.id = layerId('wms')
    layer.serviceId = service.id
    layer.name = name
    layer.title = name
    layer.opacity = Number.isFinite(Number(settings.rasterOpacity)) ? Number(settings.rasterOpacity) : 1
    layer.attribution = String(settings.rasterAttribution ?? '')
    settings.wmsLayers.add(layer)
  }
  settings.rasterLayers = ''
  settings.rasterUrl = ''
  settings.rasterAttribution = ''
  return settings
}

const hostOf = (url: string) => {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

/** A new WMS service, from the address it was found at and what its capabilities say. */
export function newWmsService(url: string, title: string, getMapUrl: string): WmsService {
  const service = factory().createWmsService()
  service.id = layerId('wms-service')
  service.url = url
  service.title = title || hostOf(url)
  service.getMapUrl = getMapUrl
  return service
}

/** A new WMS layer of a service. */
export function newWmsLayer(serviceId: string, name: string, title: string): WmsLayer {
  const layer = factory().createWmsLayer()
  layer.id = layerId('wms')
  layer.serviceId = serviceId
  layer.name = name
  layer.title = title || name
  return layer
}

let counter = 0
/** An id unique enough for a layer in one map. */
export const layerId = (kind: string) => `${kind}-${Date.now().toString(36)}-${(counter++).toString(36)}`

/** A new OGC STA layer, ready to be added to the settings. */
export function newThingLayer(name: string): ThingLayer {
  const layer = factory().createThingLayer()
  layer.id = layerId('things')
  layer.name = name
  return layer
}

/** A new GeoJSON layer, ready to be added to the settings. */
export function newGeoJsonLayer(name: string): GeoJsonLayer {
  const layer = factory().createGeoJsonLayer()
  layer.id = layerId('geojson')
  layer.name = name
  return layer
}

/** A new value-to-colour rule. */
export function newColorMapping(code: string, color: string): ColorMapping {
  const mapping = factory().createColorMapping()
  mapping.code = code
  mapping.color = color
  return mapping
}
