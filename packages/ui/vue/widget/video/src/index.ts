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

import VideoWidget from './VideoWidget.vue'
import VideoWidgetSettings from './VideoWidgetSettings.vue'
import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/video.svg'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

interface ObjectFitSetting {
  fit: string
}

interface IVideoSettings {
  videoSettings: ObjectFitSetting
  videoUrl: string
}

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { VideoWidgetEvents } from './events/VideoWidgetEvents'
import { VideoWidgetInterface } from './api/VideoWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('VideoWidget', {
    component: VideoWidget,
    settingsComponent: VideoWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Video'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('VideoWidget', VideoWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('VideoWidget', VideoWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('VideoWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('VideoWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('VideoWidget')
}

export { VideoWidget, VideoWidgetSettings }
export type { IVideoSettings }
