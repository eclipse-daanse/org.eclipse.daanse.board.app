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
import { IconClickPayloadImpl } from '../gen/IconClickPayloadImpl';
import { IconRightClickPayloadImpl } from '../gen/IconRightClickPayloadImpl';

export const IconWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Icon Clicked',
    type: 'click',
    description: 'Triggered when the icon is clicked',
    payloadType: IconClickPayloadImpl
  },
  {
    name: 'Icon Right Clicked',
    type: 'right_click',
    description: 'Triggered when the icon is right-clicked',
    payloadType: IconRightClickPayloadImpl
  }
];
