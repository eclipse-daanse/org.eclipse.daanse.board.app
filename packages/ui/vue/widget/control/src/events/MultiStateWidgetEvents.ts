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

/* A press says the state's value it wrote and the one it replaced (#1221). */
export const MultiStateWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'State Changed',
    type: 'change',
    description: 'Triggered when a press moves the button to its next state',
    payloadType: ControlPayloadImpl,
  },
]
