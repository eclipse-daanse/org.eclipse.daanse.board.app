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
import VideoWidget from './VideoWidget.vue'
import VideoWidgetSettings from './VideoWidgetSettings.vue'
import Icon from './assets/video.svg'
import { VideoWidgetEvents } from './events/VideoWidgetEvents'
import { VideoWidgetInterface } from './api/VideoWidgetInterface'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import type { WidgetProvider } from 'org.eclipse.daanse.board.app.lib.repository.widget'

interface ObjectFitSetting {
  fit: string
}
interface IVideoSettings {
  videoSettings: ObjectFitSetting
  videoUrl: string
}

/*
 * Literal on purpose (tsm#21): the build-time component scan cannot yet read
 * a constant behind a bare import, so the contract's WIDGET_SERVICE_ID from
 * lib.repository.widget cannot appear in @component directly. The type
 * annotation ties this literal to the same contract; the value must match.
 */
const WIDGET_SERVICE: typeof WIDGET_SERVICE_ID = 'daanse.widget'

const WIDGET_TYPE = 'VideoWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class VideoWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = VideoWidget
  readonly settingsComponent = VideoWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Video'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, VideoWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, VideoWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { VideoWidget, VideoWidgetSettings }
export type { IVideoSettings }
