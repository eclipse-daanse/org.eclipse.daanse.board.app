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
import Icon from './assets/chart.svg'
import ChartWidget from './ChartWidget.vue'
import ChartWidgetSettings from './ChartWidgetSettings.vue'
import type { ChartSettings } from './gen/ChartSettings'
import { ChartSettingsImpl } from './gen/ChartSettingsImpl'
import { ChartsettingsPackage } from './gen/ChartsettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import chartSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
ChartsettingsPackage.eINSTANCE
import { ChartWidgetEvents } from './events/ChartWidgetEvents'
import { ChartWidgetInterface } from './api/ChartWidgetInterface'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'ChartWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class ChartWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = ChartWidget
  readonly settingsComponent = ChartWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Chart'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: chartSettingsFormXmi,
    uri: '/chart-settings.ui.xmi',
    ePackage: () => ChartsettingsPackage.eINSTANCE,
    create: () => new ChartSettingsImpl(),
    /*
     * The parts of the hand-written form the model does not describe: the
     * per-series list, and the reference lines and areas, which are four
     * lists the Ecore does not type. Named so that what is modelled is not
     * offered twice, in two forms that could disagree.
     */
    unmodelledSections: ['Per-Series Settings', 'Reference Lines & Areas'],
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, ChartWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, ChartWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { ChartWidget, ChartWidgetSettings }
export { ChartSettingsImpl, ChartsettingsPackage, chartSettingsFormXmi }
export type { ChartSettings }
