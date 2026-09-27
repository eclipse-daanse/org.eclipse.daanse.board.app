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

import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm/decorators'
import Icon from './assets/pivot_table.svg'
import PivotTableWidget from './PivotTableWidget.vue'
import PivotTableWidgetSettings from './PivotTableWidgetSettings.vue'
import { PivotTableEvents } from './events/PivotTableEvents'
import { PivotTableInterface } from './gen/PivotTableInterface'
import ecoreModelContent from '../model/model.ecore?raw'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import type { WidgetProvider } from 'org.eclipse.daanse.board.app.lib.repository.widget'

interface IPivotTable {
  rows: any[][]
  columns: any[][]
  cells: any[][]
  tableState: any
}

/*
 * Literal on purpose: the tsm plugin derives the manifest's provides at
 * build time and cannot evaluate an imported constant. Must match
 * WIDGET_SERVICE_ID in lib.repository.widget.
 */
const WIDGET_SERVICE = 'daanse.widget'

const WIDGET_TYPE = 'PivotTableWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class PivotTableWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = PivotTableWidget
  readonly settingsComponent = PivotTableWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'PivotTable'

  constructor(
    @inject('EventRegistry') private readonly events: EventRegistry,
    @inject('EventActionsRegistry') private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, PivotTableEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, PivotTableInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { PivotTableWidget, PivotTableWidgetSettings }
export type { IPivotTable }
