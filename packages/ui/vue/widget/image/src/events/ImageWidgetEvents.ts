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
// payloadType wants the class, which in emf mode is the Impl
import { ImageClickPayloadImpl } from '../gen/ImageClickPayloadImpl';
import { ImageRightClickPayloadImpl } from '../gen/ImageRightClickPayloadImpl';

export const ImageWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Image Clicked',
    type: 'click',
    description: 'Triggered when the image is clicked',
    payloadType: ImageClickPayloadImpl
  },
  {
    name: 'Image Right Clicked',
    type: 'right_click',
    description: 'Triggered when the image is right-clicked',
    payloadType: ImageRightClickPayloadImpl
  }
];
