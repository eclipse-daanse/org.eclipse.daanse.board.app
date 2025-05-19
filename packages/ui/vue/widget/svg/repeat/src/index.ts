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

import RepeatableSvgWidget from './RepeatableSvgWidget.vue'
import RepeatableSvgWidgetSettings from './RepeatableSvgWidgetSettings.vue'
import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/repeatable_svg.svg'
import { Container } from 'inversify'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

interface IRepeatableSVGSettings {
  src: string
  activeItemStyles: {
    fill: string
    stroke: string
  }
  defaultItemStyles: {
    fill: string
    stroke: string
  }
  repeations: string
  progress: string
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('RepeatableSVGWidget', {
    component: RepeatableSvgWidget,
    settingsComponent: RepeatableSvgWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'RepeatableSVG'
  })
}

export { RepeatableSvgWidget, RepeatableSvgWidgetSettings, init }

export type { IRepeatableSVGSettings }
