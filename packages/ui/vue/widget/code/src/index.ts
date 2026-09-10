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
import CodeWidget from './CodeWidget.vue'
import CodeWidgetSettings from './CodeWidgetSettings.vue'
import type { CodeSettings } from './gen/CodeSettings'
import { CodeSettingsImpl } from './gen/CodeSettingsImpl'
import { CodesettingsPackage } from './gen/CodesettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import codeSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void CodesettingsPackage.eINSTANCE
import { CodeWidgetEvents } from './events/CodeWidgetEvents'
import { CodeWidgetInterface } from './api/CodeWidgetInterface'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'CodeWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class CodeWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = CodeWidget
  readonly settingsComponent = CodeWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Code'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: codeSettingsFormXmi,
    uri: '/code-settings.ui.xmi',
    ePackage: () => CodesettingsPackage.eINSTANCE,
    create: () => new CodeSettingsImpl(),
    /*
     * Writing the code is not a field: the editor is chosen at runtime and
     * there are three of them. Named so that what is modelled is not
     * offered twice.
     */
    unmodelledSections: ['Quelltext'],
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, CodeWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, CodeWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { CodeWidget, CodeWidgetSettings }
export { CodeSettingsImpl, CodesettingsPackage, codeSettingsFormXmi }
export type { CodeSettings }
