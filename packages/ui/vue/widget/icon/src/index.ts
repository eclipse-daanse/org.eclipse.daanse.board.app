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

import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/icon.svg'
import IconWidget from './IconWidget.vue'
import IconWidgetSettings from './IconWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { EventRegistry, EVENT_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { IconWidgetEvents } from './events/IconWidgetEvents'

import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

interface IIconSettings {
  currentIcon: string;
  iconColor: string | VariableWrapper<string>;
  iconSize: number;
  isIconFilled: boolean;
  strokeWeight: number;
  opticSize: number;
  grade: number;
}

const register = () => {
  console.log('registering Icon widget', container)
  const widgetRepository = container.get<WidgetRepository>(identifier)
  const eventRegistry = container.get<EventRegistry>(EVENT_REGISTRY)

  widgetRepository.registerWidget('IconWidget', {
    component: IconWidget,
    settingsComponent: IconWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Icon'
  })

  // Register widget events
  eventRegistry.registerWidget('IconWidget', IconWidgetEvents)
}

register();

export { IconWidget, IconWidgetSettings }
export type { IIconSettings }
