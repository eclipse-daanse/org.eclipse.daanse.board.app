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
import Icon from './assets/progress.svg'
import MapsWidget from './MapsWidget.vue'
import MapsWidgetSettings from './MapsWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { useDataPointRegistry } from './composables/datapointRegistry'
import TLCDataLabelRendererDescription from './parts/dataLabelRenderer/TLCDataLabelRendererDescription'
import ValueUnitDataLabelRendererDescription from './parts/dataLabelRenderer/ValueUnitDataLabelRendererDescription'
import { EventRegistry, EVENT_REGISTRY, EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { MapWidgetEvents } from './events/MapWidgetEvents'
import { MapWidgetInterface } from './gen/MapWidgetInterface'
import ecoreModelContent from '../model/model.ecore?raw'

const register = () => {
  console.log('registering Map widget', container)
  console.log('EVENT_REGISTRY bound?', container.isBound(EVENT_REGISTRY))
  const widgetRepository = container.get<WidgetRepository>(identifier)
  const eventRegistry = container.get<EventRegistry>(EVENT_REGISTRY)
  const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)

  useDataPointRegistry().registerDataPointRenderer(new TLCDataLabelRendererDescription())
  useDataPointRegistry().registerDataPointRenderer(new ValueUnitDataLabelRendererDescription())

  widgetRepository.registerWidget('MapWidget', {
    component: MapsWidget,
    settingsComponent: MapsWidgetSettings,
    supportedDSTypes: ['ogcsta','OGC Composer','rest'],
    icon: Icon,
    name: 'Map'
  })

  eventRegistry.registerWidget('MapWidget', MapWidgetEvents)

  // Register widget actions from Ecore model (async, non-blocking)
  actionsRegistry.registerActionsFromEcoreString('MapWidget', ecoreModelContent, 'widget', 'model.ecore')
    .catch((error) => {
      console.error('Failed to register MapWidget from Ecore, falling back to decorator-based registration:', error)
      // Fallback to decorator-based registration
      actionsRegistry.registerWidgetType('MapWidget', MapWidgetInterface, 'widget')
    })
}

register();

export { MapsWidget, MapsWidgetSettings, useDataPointRegistry }
export type { IDataPointDescription } from './composables/IDataPointDescription'
