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

import SvgWidget from './SvgWidget.vue'
import SvgWidgetSettings from './SvgWidgetSettings.vue'
import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/svg_icon.svg'
import { Container } from 'inversify'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

interface ISvgSettings {
  src: string
  classesConfig: Config
}

interface Config {
  [className: string]: ConfigItem
}

interface ConfigItem {
  fill: string
  stroke: string
  strokeWidth: string
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('SVGWidget', {
    component: SvgWidget,
    settingsComponent: SvgWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
  })
}

export { SvgWidget, SvgWidgetSettings, init }

export type { ISvgSettings, Config, ConfigItem }
