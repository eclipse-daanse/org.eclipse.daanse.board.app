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

import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/icon.svg'
import IconWidget from './IconWidget.vue'
import IconWidgetSettings from './IconWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { EventRegistry, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
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

export function activate({ services }: ActivationContext) {
  const widgetRepository = services.getRequired<WidgetRepository>(WIDGET_REPOSITORY)
  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)

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

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('IconWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('IconWidget')
}

export { IconWidget, IconWidgetSettings }
export type { IIconSettings }
