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
import Icon from './assets/text.svg'
import MermaidWidget from './MermaidWidget.vue'
import { MermaidWidgetEvents } from './events/MermaidWidgetEvents'
import { MermaidWidgetInterface } from './api/MermaidWidgetInterface'
import { MermaidWidgetSettingsImpl } from './gen/MermaidWidgetSettingsImpl'
import { MermaidwidgetsPackage } from './gen/MermaidwidgetsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import mermaidSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
MermaidwidgetsPackage.eINSTANCE
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'MermaidWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class MermaidWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = MermaidWidget
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Mermaid'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: mermaidSettingsFormXmi,
    uri: '/mermaid-settings.ui.xmi',
    ePackage: () => MermaidwidgetsPackage.eINSTANCE,
    create: () => new MermaidWidgetSettingsImpl(),
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, MermaidWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, MermaidWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { MermaidWidget }
export { MermaidWidgetSettingsImpl, MermaidwidgetsPackage, mermaidSettingsFormXmi }
