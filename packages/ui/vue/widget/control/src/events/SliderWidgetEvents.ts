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
 * While dragged the slider says what it wrote, at most every 100 ms, and
 * what the variable held before; letting go says where it was left. For a
 * range both carry the pair (#1221).
 */
export const SliderWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Slider Changed',
    type: 'change',
    description: 'Triggered while the slider is moved, at most every 100 ms',
    payloadType: ControlPayloadImpl,
  },
  {
    name: 'Slider Released',
    type: 'release',
    description: 'Triggered when the slider is let go',
    payloadType: ControlPayloadImpl,
  },
]
