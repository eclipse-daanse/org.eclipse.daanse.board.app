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
import MarkdownWidget from './MarkdownWidget.vue'
import MarkdownWidgetSettings from './MarkdownWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

interface IMarkdownWidgetSettings {
  value: string;
}

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { MarkdownWidgetEvents } from './events/MarkdownWidgetEvents'
import { MarkdownWidgetInterface } from './api/MarkdownWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('MarkdownWidget', {
    component: MarkdownWidget,
    settingsComponent: MarkdownWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Markdown'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('MarkdownWidget', MarkdownWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('MarkdownWidget', MarkdownWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('MarkdownWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('MarkdownWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('MarkdownWidget')
}

export { MarkdownWidget, MarkdownWidgetSettings }
export type { IMarkdownWidgetSettings }
