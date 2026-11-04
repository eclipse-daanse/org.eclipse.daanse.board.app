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
import { DataTableRowPayloadImpl } from '../gen/DataTableRowPayloadImpl'
import { DataTableCellPayloadImpl } from '../gen/DataTableCellPayloadImpl'
import { DataTableColumnPayloadImpl } from '../gen/DataTableColumnPayloadImpl'

/*
 * What each event carries is declared by its payload type, which is what
 * the rule dialog offers to map from (#1221). A click on the table as a
 * whole says nothing about a row, so it keeps the bare payload.
 */
export const DataTableWidgetEvents: WidgetEventDefinition[] = [
  { name: 'DataTable Clicked', type: 'click', description: 'Triggered when the datatable widget is clicked', payloadType: PayloadImpl },
  { name: 'DataTable Right Clicked', type: 'right_click', description: 'Triggered when the datatable widget is right-clicked', payloadType: PayloadImpl },
  { name: 'DataTable Row Clicked', type: 'row_click', description: 'Triggered when a row is clicked', payloadType: DataTableRowPayloadImpl },
  { name: 'DataTable Row Right Clicked', type: 'row_right_click', description: 'Triggered when a row is right-clicked', payloadType: DataTableRowPayloadImpl },
  { name: 'DataTable Column Clicked', type: 'col_click', description: 'Triggered when a column header is clicked', payloadType: DataTableColumnPayloadImpl },
  { name: 'DataTable Column Right Clicked', type: 'col_right_click', description: 'Triggered when a column header is right-clicked', payloadType: DataTableColumnPayloadImpl },
  { name: 'DataTable Cell Clicked', type: 'cell_click', description: 'Triggered when a cell is clicked', payloadType: DataTableCellPayloadImpl },
  { name: 'DataTable Cell Right Clicked', type: 'cell_right_click', description: 'Triggered when a cell is right-clicked', payloadType: DataTableCellPayloadImpl }
];
