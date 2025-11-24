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

import type { WidgetEventDefinition } from 'org.eclipse.daanse.board.app.lib.events';
import { ThingClickPayload } from '../gen/ThingClickPayload';
import { DatastreamClickPayload } from '../gen/DatastreamClickPayload';
import { ObservationClickPayload } from '../gen/ObservationClickPayload';
import { LocationClickPayload } from '../gen/LocationClickPayload';

export const MapWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Thing Clicked',
    type: 'click_on_thing',
    description: 'Triggered when a Thing marker is clicked on the map',
    payloadType: ThingClickPayload
  },
  {
    name: 'Datastream Clicked',
    type: 'click_on_datastream',
    description: 'Triggered when a Datastream is clicked on the map',
    payloadType: DatastreamClickPayload
  },
  {
    name: 'Observation Clicked',
    type: 'click_on_observation',
    description: 'Triggered when an Observation is clicked on the map',
    payloadType: ObservationClickPayload
  },
  {
    name: 'Location Clicked',
    type: 'click_on_location',
    description: 'Triggered when a Location is clicked on the map',
    payloadType: LocationClickPayload
  }
];
