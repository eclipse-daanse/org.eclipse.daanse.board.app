/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import TimelineWidget from './TimelineWidget.vue'
import TimelineWidgetSettings from './TimelineWidgetSettings.vue'
import icon from './assets/timeline.svg'
import { TimelineWidgetEvents } from './events/TimelineWidgetEvents'
import { TimelineWidgetInterface } from './api/TimelineWidgetInterface'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import type { WidgetProvider } from 'org.eclipse.daanse.board.app.lib.repository.widget'

export interface TimelineSettings {
  startTime?: string; // ISO 8601 DateTime
  endTime?: string;   // ISO 8601 DateTime or 'now'
  currentTime?: string;
  stepSize?: 'minute' | 'hour' | 'day' | 'week' | 'month';
  playbackSpeed?: number;
  autoPlay?: boolean;
}

/*
 * Literal on purpose: the tsm plugin derives the manifest's provides at
 * build time and cannot evaluate an imported constant. Must match
 * WIDGET_SERVICE_ID in lib.repository.widget.
 */
const WIDGET_SERVICE = 'daanse.widget'

const WIDGET_TYPE = 'TimelineWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class TimelineWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = TimelineWidget
  readonly settingsComponent = TimelineWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = icon
  readonly name = 'Timeline'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, TimelineWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, TimelineWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { TimelineWidget, TimelineWidgetSettings }
