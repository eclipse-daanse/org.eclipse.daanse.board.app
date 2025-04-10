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

import VideoVidget from './VideoWidget.vue'
import VideoWidgetSettings from './VideoWidgetSettings.vue'
import { type WidgetRepository } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/video.svg'

interface ObjectFitSetting {
  fit: string
}

interface IVideoSettings {
  videoSettings: ObjectFitSetting
  videoUrl: string
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('VideoWidget', {
    component: VideoVidget,
    settingsComponent: VideoWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
  })
}

export default {
  VideoVidget,
  VideoWidgetSettings,
  register,
}

export type { IVideoSettings }
