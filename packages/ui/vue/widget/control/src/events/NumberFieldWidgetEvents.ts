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
 * Committed - Enter, or leaving the field - the number field says what it
 * wrote and what the variable held before; while typing, what stands in
 * it, at most every 100 ms; on Enter, submit (#1221).
 */
export const NumberFieldWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Number Field Changed',
    type: 'change',
    description: 'Triggered when a changed number is committed: Enter, or leaving the field',
    payloadType: ControlPayloadImpl,
  },
  {
    name: 'Number Field Input',
    type: 'input',
    description: 'Triggered while typing, at most every 100 ms, with what stands in the field',
    payloadType: ControlPayloadImpl,
  },
  {
    name: 'Number Field Submitted',
    type: 'submit',
    description: 'Triggered when Enter is pressed in the field, after the number is committed',
    payloadType: ControlPayloadImpl,
  },
]
