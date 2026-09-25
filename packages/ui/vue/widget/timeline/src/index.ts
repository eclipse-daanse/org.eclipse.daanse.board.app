/*
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import TimelineWidget from './TimelineWidget.vue'
import TimelineWidgetSettings from './TimelineWidgetSettings.vue'
import icon from './assets/timeline.svg'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'

export interface TimelineSettings {
  startTime?: string; // ISO 8601 DateTime
  endTime?: string;   // ISO 8601 DateTime or 'now'
  currentTime?: string;
  stepSize?: 'minute' | 'hour' | 'day' | 'week' | 'month';
  playbackSpeed?: number;
  autoPlay?: boolean;
}


import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { TimelineWidgetEvents } from './events/TimelineWidgetEvents'
import { TimelineWidgetInterface } from './api/TimelineWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('TimelineWidget', {
    component: TimelineWidget,
    settingsComponent: TimelineWidgetSettings,
    supportedDSTypes: [],
    icon: icon,
    name: 'Timeline'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('TimelineWidget', TimelineWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('TimelineWidget', TimelineWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('TimelineWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('TimelineWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('TimelineWidget')
}

export { TimelineWidget, TimelineWidgetSettings }
