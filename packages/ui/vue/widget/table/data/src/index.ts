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

import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
/* The generated package first: it reaches the factory, the factory every
  payload class, and DataTableCellPayloadImpl extends the row payload. Entered
  from the row payload instead (through the widget and its events), the cell
  class is evaluated while its base class is not yet initialised, and the
  bundle fails with a ReferenceError (#1221). */
import './gen/DatatablesettingsPackage'
import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import Icon from './assets/data_table.svg'
import DataTableWidget from './DataTableWidget.vue'
import { DataTableWidgetEvents } from './events/DataTableWidgetEvents'
import { DataTableWidgetInterface } from './api/DataTableWidgetInterface'
import DataTableWidgetSettings from './DataTableWidgetSettings.vue'
import { DataTableSettingsImpl } from './gen/DataTableSettingsImpl'
import { DatatablesettingsPackage } from './gen/DatatablesettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import dataTableSettingsFormXmi from '../model/ui.xmi?raw'
/* The Ecore itself, for the sentences the generator drops. */
import settingsEcore from '../model/model.ecore?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
/* The payloads extend the events model's Payload, which has to be
  registered before this package can point at it. */
void EventsPackage.eINSTANCE
void DatatablesettingsPackage.eINSTANCE
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

  /*
   * One question the model cannot ask: which columns to show.
   *
   * It would have to know what columns the answer carries, and it cannot -
   * they come from the source at runtime. So that section is hand-written
   * and named here, and everything else renders from the model.
   */
  readonly settingsComponent = DataTableWidgetSettings

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: dataTableSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/data-table-settings.ui.xmi',
    ePackage: () => DatatablesettingsPackage.eINSTANCE,
    create: () => new DataTableSettingsImpl(),
    unmodelledSections: ['columns', 'colorRules', 'filterRules'],
  }
  readonly reads = ['DataTable']
  readonly icon = Icon
  readonly name = 'DataTable'
  readonly nameKey = 'tableData:Widget.name'

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

export { DataTableWidget }
export { DataTableSettingsImpl, DatatablesettingsPackage, dataTableSettingsFormXmi }

/* Its texts - collected by lib.i18next, see src/i18n. */
export { TableDataTranslations } from './i18n'
