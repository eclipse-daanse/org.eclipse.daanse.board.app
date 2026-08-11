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

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import {
  type WidgetRepository,
  WIDGET_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.repository.widget'
import {
  type EventRegistry,
  EVENT_REGISTRY_ID,
} from 'org.eclipse.daanse.board.app.lib.events'

import Icon from './assets/sample.svg'
import SampleWidget from './SampleWidget.vue'
import SampleWidgetSettings from './SampleWidgetSettings.vue'
import { SampleWidgetEvents } from './events/SampleWidgetEvents'

const WIDGET_TYPE = 'SampleWidget'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget(WIDGET_TYPE, {
    component: SampleWidget,
    settingsComponent: SampleWidgetSettings,
    supportedDSTypes: ['csv'],
    icon: Icon,
    name: 'Sample',
  })

  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
    .registerWidget(WIDGET_TYPE, SampleWidgetEvents)
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget(WIDGET_TYPE)
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget(WIDGET_TYPE)
}

export { SampleWidget, SampleWidgetSettings }
