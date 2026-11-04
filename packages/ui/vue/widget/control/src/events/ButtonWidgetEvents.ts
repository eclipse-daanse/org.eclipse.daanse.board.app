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
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'

/*
 * A press says what it wrote and what was there before, as the modelled
 * payload declares it - which is what the rule dialog offers to map from
 * (#1221).
 */
export const ButtonWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Button Clicked',
    type: 'click',
    description: 'Triggered when the button is pressed',
    payloadType: ControlPayloadImpl,
  },
]
