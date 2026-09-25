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
import Icon from './assets/weather.svg'
import WeatherWidget from './WeatherWidget.vue'
import WeatherWidgetSettings from './WeatherWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import type { WeatherWidgetSettings as IWeatherWidgetSettings } from './types/WeatherWidgetSettings'

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { WeatherWidgetEvents } from './events/WeatherWidgetEvents'
import { WeatherWidgetInterface } from './api/WeatherWidgetInterface'

export function activate({ services }: ActivationContext) {
  try {
    const widgetRepository = services.getRequired<WidgetRepository>(WIDGET_REPOSITORY);
    console.log(widgetRepository);
    widgetRepository.registerWidget('WeatherWidget', {
      component: WeatherWidget,
      settingsComponent: WeatherWidgetSettings,
      supportedDSTypes: ['OGCSTAData'],
      icon: Icon,
      name: 'Weather'
    })
    console.log('Weather widget registered successfully')

    const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
    eventRegistry.registerWidget('WeatherWidget', WeatherWidgetEvents)

    const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
    actionsRegistry.registerWidgetType('WeatherWidget', WeatherWidgetInterface, 'widget')
  } catch (error) {
    console.error('Failed to register Weather widget:', error)
  }
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('WeatherWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('WeatherWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('WeatherWidget')
}

export {
  WeatherWidget,
  WeatherWidgetSettings,
  type IWeatherWidgetSettings
}
