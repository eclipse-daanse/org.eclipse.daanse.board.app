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
import Icon from './assets/data_table.svg'
import DataTableWidget from './DataTableWidget.vue'
import DataTableWidgetSettings from './DataTableWidgetSettings.vue'
import { DataTableWidgetEvents } from './events/DataTableWidgetEvents'
import { DataTableWidgetInterface } from './api/DataTableWidgetInterface'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import type { Component } from 'vue'

const WIDGET_TYPE = 'DataTableWidget'

@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class DataTableWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component: Component = DataTableWidget
  readonly settingsComponent: Component = DataTableWidgetSettings
  readonly supportedDSTypes = ['csv', 'rest']
  readonly icon = Icon
  readonly name = 'DataTable'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, DataTableWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, DataTableWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { DataTableWidget, DataTableWidgetSettings }
