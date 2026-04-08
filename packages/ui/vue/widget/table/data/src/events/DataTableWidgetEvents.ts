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

export const DataTableWidgetEvents: WidgetEventDefinition[] = [
  { name: 'DataTable Clicked', type: 'click', description: 'Triggered when the datatable widget is clicked', payloadType: Payload },
  { name: 'DataTable Right Clicked', type: 'right_click', description: 'Triggered when the datatable widget is right-clicked', payloadType: Payload },
  { name: 'DataTable Row Clicked', type: 'row_click', description: 'Triggered when a row is clicked', payloadType: Payload },
  { name: 'DataTable Row Right Clicked', type: 'row_right_click', description: 'Triggered when a row is right-clicked', payloadType: Payload },
  { name: 'DataTable Column Clicked', type: 'col_click', description: 'Triggered when a column header is clicked', payloadType: Payload },
  { name: 'DataTable Column Right Clicked', type: 'col_right_click', description: 'Triggered when a column header is right-clicked', payloadType: Payload },
  { name: 'DataTable Cell Clicked', type: 'cell_click', description: 'Triggered when a cell is clicked', payloadType: Payload },
  { name: 'DataTable Cell Right Clicked', type: 'cell_right_click', description: 'Triggered when a cell is right-clicked', payloadType: Payload }
];
