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
import Icon from './assets/data_table.svg'
import DataTableWidget from './DataTableWidget.vue'
import DataTableWidgetSettings from './DataTableWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const register = () => {
  console.log('registering DataTable widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('DataTableWidget', {
    component: DataTableWidget,
    settingsComponent: DataTableWidgetSettings,
    supportedDSTypes: ['csv', 'rest'],
    icon: Icon,
    name: 'DataTable'
  })
}

register();

export { DataTableWidget, DataTableWidgetSettings }
