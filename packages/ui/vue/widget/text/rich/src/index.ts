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
import Icon from './assets/rich_text.svg'
import RichTextWidget from './RichTextWidget.vue'
import RichTextWidgetSettings from './RichTextWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import {RichTextEditorSettings} from './gen/RichTextEditorSettings'


import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { RichTextWidgetEvents } from './events/RichTextWidgetEvents'
import { RichTextWidgetInterface } from './api/RichTextWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('RichTextWidget', {
    component: RichTextWidget,
    settingsComponent: RichTextWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'RichText'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('RichTextWidget', RichTextWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('RichTextWidget', RichTextWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('RichTextWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('RichTextWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('RichTextWidget')
}

export { RichTextWidget, RichTextWidgetSettings,RichTextEditorSettings }

