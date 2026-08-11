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
import Icon from './assets/text.svg'
import CodeWidget from './CodeWidget.vue'
import CodeWidgetSettings from './CodeWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

interface ICodeSettings {
  code: string;
  theme: string;
  language: string;
}

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { CodeWidgetEvents } from './events/CodeWidgetEvents'
import { CodeWidgetInterface } from './api/CodeWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('CodeWidget', {
    component: CodeWidget,
    settingsComponent: CodeWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Code'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('CodeWidget', CodeWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('CodeWidget', CodeWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('CodeWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('CodeWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('CodeWidget')
}

export { CodeWidget, CodeWidgetSettings, type ICodeSettings }
