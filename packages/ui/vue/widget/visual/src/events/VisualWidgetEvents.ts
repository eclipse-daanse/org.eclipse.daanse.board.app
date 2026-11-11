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
import { PayloadImpl } from 'org.eclipse.daanse.board.app.lib.api.events'

/* The payload names what was clicked - a bar, a ring, a flow, a day - and its value. */
export const VisualWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Element Clicked',
    type: 'click',
    description: 'Triggered when a bar, a ring, a tile, a flow or a day is clicked',
    payloadType: PayloadImpl,
  },
  {
    name: 'Element Right Clicked',
    type: 'right_click',
    description: 'Triggered when a bar, a ring, a tile, a flow or a day is right-clicked',
    payloadType: PayloadImpl,
  },
]
