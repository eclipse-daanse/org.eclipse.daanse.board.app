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

import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import TimelineWidget from './TimelineWidget.vue'
import TimelineWidgetSettings from './TimelineWidgetSettings.vue'
import icon from './assets/timeline.svg'
import { TimelineWidgetEvents } from './events/TimelineWidgetEvents'
import { TimelineWidgetInterface } from './api/TimelineWidgetInterface'
import { TimelineSettingsImpl } from './gen/TimelineSettingsImpl'
import { TimelinesettingsPackage } from './gen/TimelinesettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import timelineSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void TimelinesettingsPackage.eINSTANCE
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import type { Component } from 'vue'

export interface TimelineSettings {
  startTime?: string; // ISO 8601 DateTime
  endTime?: string;   // ISO 8601 DateTime or 'now'
  currentTime?: string;
  stepSize?: 'minute' | 'hour' | 'day' | 'week' | 'month';
  playbackSpeed?: number;
  autoPlay?: boolean;
}

const WIDGET_TYPE = 'TimelineWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class TimelineWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component: Component = TimelineWidget
  readonly settingsComponent: Component = TimelineWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = icon
  readonly name = 'Timeline'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: timelineSettingsFormXmi,
    uri: '/timeline-settings.ui.xmi',
    ePackage: () => TimelinesettingsPackage.eINSTANCE,
    create: () => new TimelineSettingsImpl(),
    /*
     * Which stretch of time the timeline covers is not a field: it is two
     * moments or an offset from now, typed or taken from a variable, with
     * each end edited as a date and a time apart.
     */
    unmodelledSections: ['Zeitraum'],
  }

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
export { TimelineSettingsImpl, TimelinesettingsPackage, timelineSettingsFormXmi }
