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

import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/pivot_table.svg'
import PivotTableWidget from './PivotTableWidget.vue'
import PivotTableWidgetSettings from './PivotTableWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

interface IPivotTable {
  rows: any[][]
  columns: any[][]
  cells: any[][]
  tableState: any
}

const register = () => {
  console.log('registering PivotTable widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('PivotTableWidget', {
    component: PivotTableWidget,
    settingsComponent: PivotTableWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'PivotTable'
  })
}

register();

export { PivotTableWidget, PivotTableWidgetSettings }
export type { IPivotTable }
