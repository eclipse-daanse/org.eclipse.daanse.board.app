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
import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/svg_icon.svg'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

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

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { SVGWidgetEvents } from './events/SVGWidgetEvents'
import { SvgWidgetInterface } from './api/SvgWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('SVGWidget', {
    component: SvgWidget,
    settingsComponent: SvgWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'SVG'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('SVGWidget', SVGWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('SVGWidget', SvgWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('SVGWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('SVGWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('SVGWidget')
}

export { SvgWidget, SvgWidgetSettings }
export type { ISvgSettings, Config, ConfigItem }
