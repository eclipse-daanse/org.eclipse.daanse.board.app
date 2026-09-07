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
import { PayloadImpl } from 'org.eclipse.daanse.board.app.lib.api.events'

export const RichTextWidgetEvents: WidgetEventDefinition[] = [
  { name: 'RichText Clicked', type: 'click', description: 'Triggered when the richtext widget is clicked', payloadType: PayloadImpl },
  { name: 'RichText Right Clicked', type: 'right_click', description: 'Triggered when the richtext widget is right-clicked', payloadType: PayloadImpl },
  { name: 'RichText Changed', type: 'text_change', description: 'Triggered when the richtext changes', payloadType: PayloadImpl }
];
