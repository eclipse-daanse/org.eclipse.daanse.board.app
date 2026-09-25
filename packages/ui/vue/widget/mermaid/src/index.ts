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
import MermaidWidget from './MermaidWidget.vue'
import MermaidWidgetSettings from './MermaidWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableComplexStringWrapper, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

interface IMermaidWidgetSettings {
  theme: VariableWrapper<string>
  value: VariableComplexStringWrapper
}

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { MermaidWidgetEvents } from './events/MermaidWidgetEvents'
import { MermaidWidgetInterface } from './api/MermaidWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('MermaidWidget', {
    component: MermaidWidget,
    settingsComponent: MermaidWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Mermaid'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('MermaidWidget', MermaidWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('MermaidWidget', MermaidWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('MermaidWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('MermaidWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('MermaidWidget')
}

export { MermaidWidget, MermaidWidgetSettings }
export type { IMermaidWidgetSettings }
