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
import Icon from './assets/data_table.svg'
import KpiTableWidget from './KpiTableWidget.vue'
import KpiTableWidgetSettings from './KpiTableWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { KpiTableWidgetEvents } from './events/KpiTableWidgetEvents'
import { KpiTableWidgetInterface } from './api/KpiTableWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('KpiTableWidget', {
    component: KpiTableWidget,
    settingsComponent: KpiTableWidgetSettings,
    supportedDSTypes: ['csv', 'rest'],
    icon: Icon,
    name: 'KpiTable'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('KpiTableWidget', KpiTableWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('KpiTableWidget', KpiTableWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('KpiTableWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('KpiTableWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('KpiTableWidget')
}

export { KpiTableWidget, KpiTableWidgetSettings }
