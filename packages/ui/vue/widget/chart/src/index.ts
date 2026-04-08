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

import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/chart.svg'
import ChartWidget from './ChartWidget.vue'
import ChartWidgetSettings from './ChartWidgetSettings.vue'
import { ChartSettings } from './gen/ChartSettings'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

import { EventRegistry, EVENT_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { ChartWidgetEvents } from './events/ChartWidgetEvents'

const register = () => {
  container.get<WidgetRepository>(identifier).registerWidget('ChartWidget', {
    component: ChartWidget,
    settingsComponent: ChartWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name:'Chart'
  })

  const eventRegistry = container.get<EventRegistry>(EVENT_REGISTRY)
  eventRegistry.registerWidget('ChartWidget', ChartWidgetEvents)
}

register();

export { ChartWidget, ChartWidgetSettings, ChartSettings }
