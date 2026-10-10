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
import Icon from './assets/weather.svg'
import WeatherWidget from './WeatherWidget.vue'
import WeatherWidgetSettings from './WeatherWidgetSettings.vue'
import type { WeatherWidgetSettings as IWeatherWidgetSettings } from './types/WeatherWidgetSettings'
import { WeatherSettingsImpl } from './gen/WeatherSettingsImpl'
import { WeathersettingsPackage } from './gen/WeathersettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import weatherSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void WeathersettingsPackage.eINSTANCE
import { WeatherWidgetEvents } from './events/WeatherWidgetEvents'
import { WeatherWidgetInterface } from './api/WeatherWidgetInterface'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'WeatherWidget'

@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class WeatherWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = WeatherWidget
  readonly settingsComponent = WeatherWidgetSettings
  readonly supportedDSTypes = ['OGCSTAData']
  readonly icon = Icon
  readonly name = 'Weather'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   *
   * The hand-written component keeps the two halves a form cannot state:
   * arriving at a stretch of time, and a colour per parameter. It has no
   * collapsible sections, so those are simply not in it twice rather than
   * being named here.
   */
  readonly settingsForm = {
    xmi: weatherSettingsFormXmi,
    uri: '/weather-settings.ui.xmi',
    ePackage: () => WeathersettingsPackage.eINSTANCE,
    create: () => new WeatherSettingsImpl(),
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, WeatherWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, WeatherWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export {
  WeatherWidget,
  WeatherWidgetSettings,
  type IWeatherWidgetSettings
}
