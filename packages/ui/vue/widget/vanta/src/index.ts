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

import { EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import Icon from './assets/image.svg'
import VantaWidget from './VantaWidget.vue'
import { VantaWidgetEvents } from './events/VantaWidgetEvents'
import { VantaSettingsImpl } from './gen/VantaSettingsImpl'
import { VantasettingsPackage } from './gen/VantasettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import vantaSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void VantasettingsPackage.eINSTANCE
import type { EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import type { Component } from 'vue'

const WIDGET_TYPE = 'VantaWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class VantaWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component: Component = VantaWidget
  /*
   * No hand-written form: the model covers all of it, so there is nothing
   * to keep beside it and no second place for the two to disagree.
   *
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: vantaSettingsFormXmi,
    uri: '/vanta-settings.ui.xmi',
    ePackage: () => VantasettingsPackage.eINSTANCE,
    create: () => new VantaSettingsImpl(),
  }
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Vanta'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, VantaWidgetEvents)
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
  }
}

export { VantaWidget }
export { VantaSettingsImpl, VantasettingsPackage, vantaSettingsFormXmi }
