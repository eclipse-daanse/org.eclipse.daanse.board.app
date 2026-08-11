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
import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/repeatable_svg.svg'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

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

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { RepeatableSVGWidgetEvents } from './events/RepeatableSVGWidgetEvents'
import { RepeatableSvgWidgetInterface } from './api/RepeatableSvgWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('RepeatableSVGWidget', {
    component: RepeatableSvgWidget,
    settingsComponent: RepeatableSvgWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'RepeatableSVG'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('RepeatableSVGWidget', RepeatableSVGWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('RepeatableSVGWidget', RepeatableSvgWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('RepeatableSVGWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('RepeatableSVGWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('RepeatableSVGWidget')
}

export { RepeatableSvgWidget, RepeatableSvgWidgetSettings }
export type { IRepeatableSVGSettings }
