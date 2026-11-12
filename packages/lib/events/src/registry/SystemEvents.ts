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
 * The events the board itself sends, offered to rules beside the widgets'
 * (#1288). Registered under the source System: a rule in the system
 * context names System:<type>, and the bus carries system:System:<type>.
 */
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { SystemeventsPackage } from '../gen/SystemeventsPackage'
import { VariableChangedPayloadImpl } from '../gen/VariableChangedPayloadImpl'
import type { WidgetEventDefinition } from './EventRegistry'

/* The payloads extend the events model's Payload: that package first. */
void EventsPackage.eINSTANCE
void SystemeventsPackage.eINSTANCE

export const SYSTEM_EVENT_SOURCE = 'System'

export const SystemEvents: WidgetEventDefinition[] = [
  {
    name: 'Variable Changed',
    type: 'variable_changed',
    description: 'Triggered when a board variable takes another value (provides name, value and previous value)',
    payloadType: VariableChangedPayloadImpl,
  },
]
