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

/* A changed choice says what is chosen now and what was before (#1221). */
export const ChoiceWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Choice Changed',
    type: 'change',
    description: 'Triggered when another option is chosen from the dropdown',
    payloadType: ControlPayloadImpl,
  },
]
