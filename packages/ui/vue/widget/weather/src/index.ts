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
import Icon from './assets/weather.svg'
import WeatherWidget from './WeatherWidget.vue'
import WeatherWidgetSettings from './WeatherWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import type { WeatherWidgetSettings as IWeatherWidgetSettings } from './types/WeatherWidgetSettings'

const register = () => {
  try {
    console.log('registering Weather widget', container)
    const widgetRepository = container.get<WidgetRepository>(identifier);
    console.log(widgetRepository);
    widgetRepository.registerWidget('WeatherWidget', {
      component: WeatherWidget,
      settingsComponent: WeatherWidgetSettings,
      supportedDSTypes: ['OGCSTAData'],
      icon: Icon,
      name: 'Weather'
    })
    console.log('Weather widget registered successfully')
  } catch (error) {
    console.error('Failed to register Weather widget:', error)
  }
}

register();

export {
  WeatherWidget,
  WeatherWidgetSettings,
  type IWeatherWidgetSettings
}
