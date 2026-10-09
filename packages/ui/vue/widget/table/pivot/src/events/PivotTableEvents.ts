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
import { HeaderExpandedPayloadImpl } from '../gen/HeaderExpandedPayloadImpl';
import { HeaderClickedPayloadImpl } from '../gen/HeaderClickedPayloadImpl';

export const PivotTableEvents: WidgetEventDefinition[] = [
  {
    name: 'Row Expanded',
    type: 'row_expanded',
    description: 'Triggered when a row is expanded in the pivot table',
    payloadType: HeaderExpandedPayloadImpl
  },
  {
    name: 'Row Collapsed',
    type: 'row_collapsed',
    description: 'Triggered when a row is collapsed in the pivot table',
    payloadType: HeaderExpandedPayloadImpl
  },
  {
    name: 'Column Expanded',
    type: 'column_expanded',
    description: 'Triggered when a column is expanded in the pivot table',
    payloadType: HeaderExpandedPayloadImpl
  },
  {
    name: 'Column Collapsed',
    type: 'column_collapsed',
    description: 'Triggered when a column is collapsed in the pivot table',
    payloadType: HeaderExpandedPayloadImpl
  },
  {
    name: 'Row Clicked',
    type: 'row_clicked',
    description: 'Triggered when a row is clicked in the pivot table',
    payloadType: HeaderClickedPayloadImpl
  },
  {
    name: 'Column Clicked',
    type: 'column_clicked',
    description: 'Triggered when a column is clicked in the pivot table',
    payloadType: HeaderClickedPayloadImpl
  },
  {
    name: 'Row Right Clicked',
    type: 'row_right_clicked',
    description: 'Triggered when a row is right-clicked in the pivot table',
    payloadType: HeaderClickedPayloadImpl
  },
  {
    name: 'Column Right Clicked',
    type: 'column_right_clicked',
    description: 'Triggered when a column is right-clicked in the pivot table',
    payloadType: HeaderClickedPayloadImpl
  },
  {
    name: 'Cell Clicked',
    type: 'cell_clicked',
    description: 'Triggered when a cell is clicked in the pivot table',
    payloadType: PayloadImpl
  },
  {
    name: 'Cell Right Clicked',
    type: 'cell_right_clicked',
    description: 'Triggered when a cell is right-clicked in the pivot table',
    payloadType: PayloadImpl
  }
];
