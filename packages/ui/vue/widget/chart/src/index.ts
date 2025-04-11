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

import { type WidgetRepository } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/chart.svg'
import ChartWidget from './ChartWidget.vue'
import ChartWidgetSettings from './ChartWidgetSettings.vue'

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('TextWidget', {
    component: ChartWidget,
    settingsComponent: ChartWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
  })
}

export { ChartWidget, ChartWidgetSettings, register }
