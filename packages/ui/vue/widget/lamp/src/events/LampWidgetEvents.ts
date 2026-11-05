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
import { LampPayloadImpl } from '../gen/LampPayloadImpl'

/* Both carry the lamp's whole state, so a rule can pass it on (#1221). */
export const LampWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Lamp Clicked',
    type: 'clicked',
    description: 'Triggered when the lamp is clicked, before it is switched',
    payloadType: LampPayloadImpl,
  },
  {
    name: 'Lamp State Changed',
    type: 'stateChanged',
    description: 'Triggered when the lamp is switched, dimmed or changes its colour, from whatever source',
    payloadType: LampPayloadImpl,
  },
]
