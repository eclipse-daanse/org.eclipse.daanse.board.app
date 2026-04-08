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
import type { WidgetEventDefinition } from 'org.eclipse.daanse.board.app.lib.events';
import { Payload } from 'org.eclipse.daanse.board.app.lib.events';

export const WeatherWidgetEvents: WidgetEventDefinition[] = [
  { name: 'Weather Clicked', type: 'click', description: 'Triggered when the weather widget is clicked', payloadType: Payload },
  { name: 'Weather Right Clicked', type: 'right_click', description: 'Triggered when the weather widget is right-clicked', payloadType: Payload }
];
