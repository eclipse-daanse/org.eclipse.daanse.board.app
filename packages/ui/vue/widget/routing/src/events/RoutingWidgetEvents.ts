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
import { RouteCalculatedPayloadImpl } from '../gen/RouteCalculatedPayloadImpl';
import { WaypointPayloadImpl } from '../gen/WaypointPayloadImpl';
import { PayloadImpl } from 'org.eclipse.daanse.board.app.lib.api.events'

export const RoutingWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Route Calculated',
    type: 'route_calculated',
    description: 'Triggered when a route has been calculated',
    payloadType: RouteCalculatedPayloadImpl,
  },
  {
    name: 'Waypoint Added',
    type: 'waypoint_added',
    description: 'Triggered when a waypoint is added',
    payloadType: WaypointPayloadImpl,
  },
  {
    name: 'Waypoint Removed',
    type: 'waypoint_removed',
    description: 'Triggered when a waypoint is removed',
    payloadType: WaypointPayloadImpl,
  },
  {
    name: 'Route Cleared',
    type: 'route_cleared',
    description: 'Triggered when all waypoints and the route are cleared',
    payloadType: PayloadImpl,
  },
];
