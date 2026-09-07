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

import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import { initTsmRuntime } from '@eclipse-daanse/tsm'
import Icon from './assets/map.svg'
import MapsWidget from './MapsWidget.vue'
import MapsWidgetSettings from './MapsWidgetSettings.vue'
import { useDataPointRegistry } from './composables/datapointRegistry'
import TLCDataLabelRendererDescription from './parts/dataLabelRenderer/TLCDataLabelRendererDescription'
import ValueUnitDataLabelRendererDescription from './parts/dataLabelRenderer/ValueUnitDataLabelRendererDescription'
import { MapWidgetEvents } from './events/MapWidgetEvents'
import MapMarker from './components/MapMarker.vue'
import ConditionSettings from './parts/conditionLogic/ConditionSettings.vue'
import PointStyler from './parts/styler/PointStyler.vue'
import AreaStyler from './parts/styler/AreaStyler.vue'
import { MapWidgetInterfaceImpl } from './gen/MapWidgetInterfaceImpl'
import ecoreModelContent from '../model/model.ecore?raw'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'MapWidget'

@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class MapWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = MapsWidget
  readonly settingsComponent = MapsWidgetSettings
  readonly supportedDSTypes = ['ogcsta', 'OGC Composer', 'rest', 'valhalla']
  readonly icon = Icon
  readonly name = 'Map'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    useDataPointRegistry().registerDataPointRenderer(new TLCDataLabelRendererDescription())
    useDataPointRegistry().registerDataPointRenderer(new ValueUnitDataLabelRendererDescription())

    this.events.registerWidget(WIDGET_TYPE, MapWidgetEvents)

    // Actions from the Ecore model; decorator registration is the fallback
    this.actions
      .registerActionsFromEcoreString(WIDGET_TYPE, ecoreModelContent, 'widget', 'model.ecore')
      .catch(() => {
        this.actions.registerWidgetType(WIDGET_TYPE, MapWidgetInterfaceImpl, 'widget')
      })

    /*
     * Publish this bundle's public API as a shared library: the geojson
     * renderer plugin registers itself into the DataPointRegistry, and that
     * registry is module state of THIS bundle - the plugin must reach this
     * copy, not one of its own.
     */
    initTsmRuntime().register(
      'org.eclipse.daanse.board.app.ui.vue.widget.map',
      {
        MapsWidget,
        MapsWidgetSettings,
        useDataPointRegistry,
        // Renderer building blocks: the geojson plugin composes its markers
        // and stylers from these. Public API on purpose - a deep import into
        // this bundle's src tree cannot be resolved at runtime.
        MapMarker,
        ConditionSettings,
        PointStyler,
        AreaStyler,
      },
      '0.0.1-next.1',
      'ui.vue.widget.map',
    )
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { MapsWidget, MapsWidgetSettings, useDataPointRegistry, MapMarker, ConditionSettings, PointStyler, AreaStyler }
export type { IDataPointDescription } from './composables/IDataPointDescription'
