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
import VideoWidget from './VideoWidget.vue'
import Icon from './assets/video.svg'
import { VideoWidgetEvents } from './events/VideoWidgetEvents'
import { VideoWidgetInterface } from './api/VideoWidgetInterface'
import { VideoSettingsImpl } from './gen/VideoSettingsImpl'
import { VideoSettingsPackage } from './gen/VideoSettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import videoSettingsFormXmi from '../model/ui.xmi?raw'
/* The form for the nested fitting options. */
import videoFitFormXmi from '../model/ui-fit.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void VideoSettingsPackage.eINSTANCE
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

interface ObjectFitSetting {
  fit: string
}
interface IVideoSettings {
  videoSettings: ObjectFitSetting
  videoUrl: string
}

const WIDGET_TYPE = 'VideoWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class VideoWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = VideoWidget
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Video'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: videoSettingsFormXmi,
    uri: '/video-settings.ui.xmi',
    ePackage: () => VideoSettingsPackage.eINSTANCE,
    create: () => new VideoSettingsImpl(),
    /* The form for the class this one contains. */
    entryForms: [{ xmi: videoFitFormXmi, uri: '/video-fit.ui.xmi' }],
  }

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

export { VideoWidget }
export { VideoSettingsImpl, VideoSettingsPackage, videoSettingsFormXmi, videoFitFormXmi }
export type { IVideoSettings }
