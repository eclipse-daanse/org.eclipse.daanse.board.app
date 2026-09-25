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
import Icon from './assets/chart.svg'
import ChartWidget from './ChartWidget.vue'
import ChartWidgetSettings from './ChartWidgetSettings.vue'
import { ChartSettings } from './gen/ChartSettings'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { ChartWidgetEvents } from './events/ChartWidgetEvents'
import { ChartWidgetInterface } from './api/ChartWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('ChartWidget', {
    component: ChartWidget,
    settingsComponent: ChartWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name:'Chart'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('ChartWidget', ChartWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('ChartWidget', ChartWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('ChartWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('ChartWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('ChartWidget')
}

export { ChartWidget, ChartWidgetSettings, ChartSettings }
