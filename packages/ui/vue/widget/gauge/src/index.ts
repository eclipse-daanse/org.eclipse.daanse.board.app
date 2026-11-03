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
import type { EventActionsRegistry, EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import GaugeWidget from './GaugeWidget.vue'
import Icon from './assets/gauge.svg'
import { GaugeWidgetEvents } from './events/GaugeWidgetEvents'
import { GaugeWidgetInterface } from './api/GaugeWidgetInterface'
import { GaugeSettingsImpl } from './gen/GaugeSettingsImpl'
import { GaugewidgetsPackage } from './gen/GaugewidgetsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import gaugeSettingsFormXmi from '../model/ui.xmi?raw'
/* And the form for one row of the threshold list. */
import gaugeThresholdFormXmi from '../model/ui-threshold.xmi?raw'
/* The Ecore itself, for the sentences the generator drops. */
import settingsEcore from '../model/model.ecore?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void GaugewidgetsPackage.eINSTANCE

const WIDGET_TYPE = 'GaugeWidget'

/**
 * A dial showing one value, declared as a component: the loader registers
 * it under WIDGET_SERVICE_ID, the WidgetRepository tracks that into the
 * palette, and unloading the bundle withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class GaugeWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly name = 'Gauge'
  readonly nameKey = 'gauge:Widget.name'

  /*
   * No hand-written form: the model covers all of it, down to the list of
   * thresholds, which carries a form of its own for one row.
   */
  readonly settingsForm = {
    xmi: gaugeSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/gauge-settings.ui.xmi',
    ePackage: () => GaugewidgetsPackage.eINSTANCE,
    create: () => new GaugeSettingsImpl(),
    entryForms: [{ xmi: gaugeThresholdFormXmi, uri: '/gauge-threshold.ui.xmi' }],
  }

  readonly icon = Icon
  /* One number out of whatever the source answered - the same shape the
    progress bar reads, and resolved through the same $value placeholder. */
  readonly reads = ['object']
  readonly component = GaugeWidget

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, GaugeWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, GaugeWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { GaugeWidget }
export { GaugeSettingsImpl, GaugewidgetsPackage, gaugeSettingsFormXmi, gaugeThresholdFormXmi }
export { GaugeThresholdImpl } from './gen/GaugeThresholdImpl'
export type { GaugeSettings } from './gen/GaugeSettings'
export type { GaugeThreshold } from './gen/GaugeThreshold'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { GaugeTranslations } from './i18n'
