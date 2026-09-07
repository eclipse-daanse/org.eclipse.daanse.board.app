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
import ProgressWidget from './ProgressWidget.vue'
import ProgressWidgetSettings from './ProgressWidgetSettings.vue'
import Icon from './assets/progress.svg'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { ProgressWidgetEvents } from './events/ProgressWidgetEvents'
import { ProgressWidgetInterface } from './api/ProgressWidgetInterface'
import { ProgressSettingsImpl } from './gen/ProgressSettingsImpl'
import { ProgresswidgetsPackage } from './gen/ProgresswidgetsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import progressSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
ProgresswidgetsPackage.eINSTANCE

const WIDGET_TYPE = 'ProgressWidget'

/**
 * The widget as a declared component: the loader registers it under
 * WIDGET_SERVICE_ID, the WidgetRepository tracks that registration into the
 * palette, and unloading the bundle withdraws it - nobody calls
 * registerWidget or unregisterWidget for this module anymore.
 *
 * Immediate (it has an @activate method), because the event and action
 * registrations must exist whether or not the palette ever resolves the
 * provider.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class ProgressWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly name = 'Progress'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: progressSettingsFormXmi,
    uri: '/progress-settings.ui.xmi',
    ePackage: () => ProgresswidgetsPackage.eINSTANCE,
    create: () => new ProgressSettingsImpl(),
    /*
     * The gradient's stops stay with the hand-written component: they are a
     * table built up row by row, and the colour they produce is worked out
     * rather than typed.
     */
    unmodelledSections: ['Farbstopps'],
  }
  readonly icon = Icon
  readonly supportedDSTypes: string[] = []
  readonly component = ProgressWidget
  readonly settingsComponent = ProgressWidgetSettings

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, ProgressWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, ProgressWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { ProgressWidget, ProgressWidgetSettings }
export { ProgressSettingsImpl, ProgresswidgetsPackage, progressSettingsFormXmi }
