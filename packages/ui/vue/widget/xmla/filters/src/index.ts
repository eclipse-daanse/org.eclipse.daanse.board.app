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
import Icon from './assets/sample.svg'
import FiltersWidget from './FiltersWidget.vue';
import FiltersWidgetSettings from './FiltersWidgetSettings.vue';
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'



import { EventRegistry, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
import { FiltersWidgetEvents } from './events/FiltersWidgetEvents'

export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).registerWidget('FiltersWidget', {
    component: FiltersWidget,
    settingsComponent: FiltersWidgetSettings,
    supportedDSTypes: ['xmla'],
    icon: Icon,
    name: 'XMLA Filters',
  })

  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)
  eventRegistry.registerWidget('FiltersWidget', FiltersWidgetEvents)
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('FiltersWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('FiltersWidget')
}

export { FiltersWidget, FiltersWidgetSettings }
