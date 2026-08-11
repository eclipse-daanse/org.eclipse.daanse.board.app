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
import Icon from './assets/sample.svg'
import RssWidget from './RssWidget.vue'
import RssWidgetSettings from './RssWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { RssWidgetEvents } from './events/RssWidgetEvents'
import { RssWidgetInterface } from './api/RssWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('RssWidget', {
    component: RssWidget,
    settingsComponent: RssWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'RSS'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('RssWidget', RssWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('RssWidget', RssWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('RssWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('RssWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('RssWidget')
}

export { RssWidget, RssWidgetSettings }
