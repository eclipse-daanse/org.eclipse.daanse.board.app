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


import type { WidgetEventDefinition } from 'org.eclipse.daanse.board.app.lib.events'
import { MapClickPayloadImpl } from '../gen/MapClickPayloadImpl'
import { ThingClickPayloadImpl } from '../gen/ThingClickPayloadImpl'
import { FeatureClickPayloadImpl } from '../gen/FeatureClickPayloadImpl'

/*
 * The event types are those of the Leaflet map where the meaning is the
 * same (click_on_map, click_on_thing), so a rule is written alike for both.
 */
export const MapLibreWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Map Clicked',
    type: 'click_on_map',
    description: 'Triggered when the map is clicked where no feature is (provides lat/lon)',
    payloadType: MapClickPayloadImpl,
  },
  {
    name: 'Thing Clicked',
    type: 'click_on_thing',
    description: 'Triggered when a thing of an OGC STA layer is clicked',
    payloadType: ThingClickPayloadImpl,
  },
  {
    name: 'Feature Clicked',
    type: 'click_on_feature',
    description: 'Triggered when a feature of a GeoJSON layer is clicked',
    payloadType: FeatureClickPayloadImpl,
  },
]
