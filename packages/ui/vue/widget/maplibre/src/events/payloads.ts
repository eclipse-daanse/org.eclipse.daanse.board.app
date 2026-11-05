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
 * What a click on the map sends: the payload of the event it is, filled
 * from what was hit. Apart from the component, so a test reads the payload
 * without WebGL.
 */

import { MapClickPayloadImpl } from '../gen/MapClickPayloadImpl'
import { ThingClickPayloadImpl } from '../gen/ThingClickPayloadImpl'
import { FeatureClickPayloadImpl } from '../gen/FeatureClickPayloadImpl'
import type { ThingLike } from '../things'

export const WIDGET_TYPE = 'MapLibreWidget'

/** A click as the map reports it: where, and the features under it. */
export interface MapHit {
  lng: number
  lat: number
  /** The data layer hit first, if any. */
  layer?: { kind: 'things' | 'geojson'; id: string }
  properties?: Record<string, unknown>
  featureId?: string | number
}

/** The event a click sends, with its payload. */
export type ClickEvent =
  | { event: 'click_on_map'; payload: MapClickPayloadImpl }
  | { event: 'click_on_thing'; payload: ThingClickPayloadImpl }
  | { event: 'click_on_feature'; payload: FeatureClickPayloadImpl }

const stamp = <T extends { widgetId?: string; timestamp?: number }>(payload: T, widgetId: string): T => {
  payload.widgetId = widgetId
  payload.timestamp = Date.now()
  return payload
}

/**
 * The event of a click. A thing hit is reported with what its source says
 * of it; the properties of its feature only fill what the source does not
 * know.
 */
export function clickEventOf(hit: MapHit, widgetId: string, findThing: (id: string) => ThingLike | undefined): ClickEvent {
  const props = hit.properties ?? {}
  if (hit.layer?.kind === 'things' && props.thingId !== undefined) {
    const id = String(props.thingId)
    const thing = findThing(id)
    const payload = stamp(new ThingClickPayloadImpl(), widgetId)
    payload.id = id
    payload.name = String(thing?.name ?? props.name ?? id)
    payload.description = String(thing?.description ?? '')
    payload.properties = thing?.properties ?? {}
    payload.location = thing?.locations?.[0]?.location
    payload.layerId = hit.layer.id
    if (props.value !== undefined) payload.value = String(props.value)
    if (props.heightValue !== undefined) payload.height = Number(props.heightValue)
    return { event: 'click_on_thing', payload }
  }
  if (hit.layer?.kind === 'geojson') {
    const payload = stamp(new FeatureClickPayloadImpl(), widgetId)
    payload.layerId = hit.layer.id
    if (hit.featureId !== undefined) payload.featureId = String(hit.featureId)
    payload.properties = props
    payload.lat = hit.lat
    payload.lon = hit.lng
    return { event: 'click_on_feature', payload }
  }
  const payload = stamp(new MapClickPayloadImpl(), widgetId)
  payload.lat = hit.lat
  payload.lon = hit.lng
  return { event: 'click_on_map', payload }
}

/** The bus event name of a widget event, as every widget names it. */
export const busEventOf = (event: ClickEvent['event']) => `widget:${WIDGET_TYPE}:${event}`
