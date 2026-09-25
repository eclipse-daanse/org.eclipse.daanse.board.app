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

import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/pivot_table.svg'
import PivotTableWidget from './PivotTableWidget.vue'
import PivotTableWidgetSettings from './PivotTableWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { PivotTableEvents } from './events/PivotTableEvents'
import { PivotTableInterface } from './gen/PivotTableInterface'
import ecoreModelContent from '../model/model.ecore?raw'

interface IPivotTable {
  rows: any[][]
  columns: any[][]
  cells: any[][]
  tableState: any
}

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('PivotTableWidget', {
    component: PivotTableWidget,
    settingsComponent: PivotTableWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'PivotTable'
  })


  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)

  eventRegistry.registerWidget('PivotTableWidget', PivotTableEvents)

  // Register widget actions from Ecore model (async, non-blocking)
  actionsRegistry.registerActionsFromEcoreString('PivotTableWidget', ecoreModelContent, 'widget', 'model.ecore')
    .catch((error) => {
      console.error('Failed to register PivotTableWidget from Ecore, falling back to decorator-based registration:', error)
      // Fallback to decorator-based registration
      actionsRegistry.registerWidgetType('PivotTableWidget', PivotTableInterface, 'widget')
    })
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('PivotTableWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('PivotTableWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('PivotTableWidget')
}

export { PivotTableWidget, PivotTableWidgetSettings }
export type { IPivotTable }
