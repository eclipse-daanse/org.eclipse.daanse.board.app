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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'

export interface TimelineSettings {
  startTime?: string; // ISO 8601 DateTime
  endTime?: string;   // ISO 8601 DateTime or 'now'
  currentTime?: string;
  stepSize?: 'minute' | 'hour' | 'day' | 'week' | 'month';
  playbackSpeed?: number;
  autoPlay?: boolean;
}


const register = () => {
  console.log('registering Timeline widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('TimelineWidget', {
    component: TimelineWidget,
    settingsComponent: TimelineWidgetSettings,
    supportedDSTypes: [],
    icon: icon,
    name: 'Timeline'
  })
}

register();

export { TimelineWidget, TimelineWidgetSettings }
