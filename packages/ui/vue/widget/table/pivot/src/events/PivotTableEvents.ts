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
import { HeaderExpandedPayload } from '../gen/HeaderExpandedPayload';
import { HeaderClickedPayload } from '../gen/HeaderClickedPayload';

export const PivotTableEvents: WidgetEventDefinition[] = [
  {
    name: 'Row Expanded',
    type: 'row_expanded',
    description: 'Triggered when a row is expanded in the pivot table',
    payloadType: HeaderExpandedPayload
  },
  {
    name: 'Row Collapsed',
    type: 'row_collapsed',
    description: 'Triggered when a row is collapsed in the pivot table',
    payloadType: HeaderExpandedPayload
  },
  {
    name: 'Column Expanded',
    type: 'column_expanded',
    description: 'Triggered when a column is expanded in the pivot table',
    payloadType: HeaderExpandedPayload
  },
  {
    name: 'Column Collapsed',
    type: 'column_collapsed',
    description: 'Triggered when a column is collapsed in the pivot table',
    payloadType: HeaderExpandedPayload
  },
  {
    name: 'Row Clicked',
    type: 'row_clicked',
    description: 'Triggered when a row is clicked in the pivot table',
    payloadType: HeaderClickedPayload
  },
  {
    name: 'Column Clicked',
    type: 'column_clicked',
    description: 'Triggered when a column is clicked in the pivot table',
    payloadType: HeaderClickedPayload
  }
];
