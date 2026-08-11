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

import {
  type WidgetRepository,
  WIDGET_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/routing.svg'
import RoutingWidget from './RoutingWidget.vue'
import RoutingWidgetSettings from './RoutingWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import {
  EventRegistry,
  EVENT_REGISTRY_ID,
  EventActionsRegistry,
  EVENT_ACTIONS_REGISTRY_ID,
} from 'org.eclipse.daanse.board.app.lib.events'
import { RoutingWidgetEvents } from './events/RoutingWidgetEvents'
import { RoutingWidgetInterface } from './gen/RoutingWidgetInterface'
import ecoreModelContent from '../model/model.ecore?raw'

export function activate({ services }: ActivationContext) {
  const widgetRepository =
    services.getRequired<WidgetRepository>(WIDGET_REPOSITORY)
  const eventRegistry =
    services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  const actionsRegistry =
    services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)

  widgetRepository.registerWidget('RoutingWidget', {
    component: RoutingWidget,
    settingsComponent: RoutingWidgetSettings,
    supportedDSTypes: ['valhalla'],
    icon: Icon,
    name: 'Routing',
  })

  eventRegistry.registerWidget('RoutingWidget', RoutingWidgetEvents)

  actionsRegistry
    .registerActionsFromEcoreString(
      'RoutingWidget',
      ecoreModelContent,
      'widget',
      'model.ecore',
    )
    .catch((error) => {
      console.error(
        'Failed to register RoutingWidget from Ecore:',
        error,
      )
      actionsRegistry.registerWidgetType(
        'RoutingWidget',
        RoutingWidgetInterface,
        'widget',
      )
    })
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('RoutingWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('RoutingWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('RoutingWidget')
}

export { RoutingWidget, RoutingWidgetSettings }
