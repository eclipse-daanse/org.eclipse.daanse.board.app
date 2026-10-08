/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
import { ThingClickPayloadImpl } from '../gen/ThingClickPayloadImpl';
import { DatastreamClickPayloadImpl } from '../gen/DatastreamClickPayloadImpl';
import { ObservationClickPayloadImpl } from '../gen/ObservationClickPayloadImpl';
import { LocationClickPayloadImpl } from '../gen/LocationClickPayloadImpl';
import { MapClickPayloadImpl } from '../gen/MapClickPayloadImpl';

export const MapWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Map Clicked',
    type: 'click_on_map',
    description: 'Triggered when the map background is clicked (provides lat/lon)',
    payloadType: MapClickPayloadImpl
  },
  {
    name: 'Thing Clicked',
    type: 'click_on_thing',
    description: 'Triggered when a Thing marker is clicked on the map',
    payloadType: ThingClickPayloadImpl
  },
  {
    name: 'Datastream Clicked',
    type: 'click_on_datastream',
    description: 'Triggered when a Datastream is clicked on the map',
    payloadType: DatastreamClickPayloadImpl
  },
  {
    name: 'Observation Clicked',
    type: 'click_on_observation',
    description: 'Triggered when an Observation is clicked on the map',
    payloadType: ObservationClickPayloadImpl
  },
  {
    name: 'Location Clicked',
    type: 'click_on_location',
    description: 'Triggered when a Location is clicked on the map',
    payloadType: LocationClickPayloadImpl
  },
  {
    name: 'Thing Hovered',
    type: 'hover_on_thing',
    description: 'Triggered when hovering over a Thing marker on the map',
    payloadType: ThingClickPayloadImpl
  },
  {
    name: 'Datastream Hovered',
    type: 'hover_on_datastream',
    description: 'Triggered when hovering over a Datastream marker on the map',
    payloadType: DatastreamClickPayloadImpl
  }
];
