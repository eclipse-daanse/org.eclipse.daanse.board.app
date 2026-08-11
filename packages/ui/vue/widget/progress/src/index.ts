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

import ProgressWidget from './ProgressWidget.vue'
import ProgressWidgetSettings from './ProgressWidgetSettings.vue'
import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/progress.svg'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

interface IProgressSettings {
  progress: string
  fillColor: string
  gradientColor?: string
  backgroundColor: string
  isGradient: boolean
  isVertical: boolean
  rotation: number
  min?: number
  max?: number
  barThickness?: string
  borderRadius?: string
  valueAlign?: 'left' | 'center' | 'right'
  valueJustify?: 'top' | 'center' | 'bottom'
  textColor?: string
}

import { EventRegistry, EVENT_REGISTRY_ID, EventActionsRegistry, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { ProgressWidgetEvents } from './events/ProgressWidgetEvents'
import { ProgressWidgetInterface } from './api/ProgressWidgetInterface'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('ProgressWidget', {
    component: ProgressWidget,
    settingsComponent: ProgressWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Progress'
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('ProgressWidget', ProgressWidgetEvents)

  const actionsRegistry = services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID)
  actionsRegistry.registerWidgetType('ProgressWidget', ProgressWidgetInterface, 'widget')
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('ProgressWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('ProgressWidget')
  services.getRequired<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY_ID).unregisterWidgetType('ProgressWidget')
}

export { ProgressWidget, ProgressWidgetSettings }
export type { IProgressSettings }
