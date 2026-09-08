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
import TextWidget from './TextWidget.vue'
import TextWidgetSettings from './TextWidgetSettings.vue'
import { TextWidgetEvents } from './events/TextWidgetEvents'
import { TextWidgetInterface } from './api/TextWidgetInterface'
import { TextSettingsImpl } from './gen/TextSettingsImpl'
import { TextsettingsPackage } from './gen/TextsettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import textSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
TextsettingsPackage.eINSTANCE
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'TextWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class TextWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = TextWidget
  readonly settingsComponent = TextWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Text'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: textSettingsFormXmi,
    uri: '/text-settings.ui.xmi',
    ePackage: () => TextsettingsPackage.eINSTANCE,
    create: () => new TextSettingsImpl(),
    /*
     * What the text says and how it is set are not fields: the text is
     * written in a field that can name variables inside it, and the rest
     * is six buttons that show at a glance which way it sits.
     */
    unmodelledSections: ['Text und Formatierung'],
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, TextWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, TextWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { TextWidget, TextWidgetSettings }
export { TextSettingsImpl, TextsettingsPackage, textSettingsFormXmi }
