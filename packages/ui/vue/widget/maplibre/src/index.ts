/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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


/* The events package first: the payloads and the actions extend its classes. */
import './referencedPackages'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { EventActionsRegistry, EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { MaplibrePackage } from './gen/MaplibrePackage'
import { MapLibreWidgetInterfaceImpl } from './gen/MapLibreWidgetInterfaceImpl'
import MapLibreWidget from './MapLibreWidget.vue'
import MapLibreWidgetSettings from './MapLibreWidgetSettings.vue'
import Icon from './assets/maplibre.svg'
import { MapLibreWidgetEvents } from './events/MapLibreWidgetEvents'
import { WIDGET_TYPE } from './events/payloads'
import ecoreModelContent from '../model/model.ecore?raw'

/*
 * Building the EPackages on load: until then the class literals are null,
 * and the payloads point at the events model's Payload.
 */
void EventsPackage.eINSTANCE
void MaplibrePackage.eINSTANCE

/**
 * The 3D map (#1266), declared as a component: the loader registers it
 * under WIDGET_SERVICE_ID and the palette shows it next to the Leaflet map.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class MapLibreWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = MapLibreWidget
  readonly settingsComponent = MapLibreWidgetSettings
  /* It reads OGC STA sources by itself, per layer. */
  readonly reads = ['OGCSTAData']
  readonly icon = Icon
  readonly name = '3D Map'
  readonly nameKey = 'maplibre:Widget.name'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, MapLibreWidgetEvents)
    // Actions from the Ecore model; the generated class is the fallback.
    this.actions
      .registerActionsFromEcoreString(WIDGET_TYPE, ecoreModelContent, 'widget', 'model.ecore')
      .catch(() => {
        this.actions.registerWidgetType(WIDGET_TYPE, MapLibreWidgetInterfaceImpl, 'widget')
      })
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { MapLibreWidget, MapLibreWidgetSettings, MaplibrePackage }
export { MapLibreSettingsImpl } from './gen/MapLibreSettingsImpl'
export type { MapLibreSettings } from './gen/MapLibreSettings'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { MaplibreTranslations } from './i18n'
