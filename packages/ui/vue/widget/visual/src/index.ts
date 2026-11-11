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
import VisualWidget from './VisualWidget.vue'
import Icon from './assets/visual.svg'
import { VisualWidgetEvents } from './events/VisualWidgetEvents'
import { VisualWidgetInterface } from './api/VisualWidgetInterface'
import { VisualSettingsImpl } from './gen/VisualSettingsImpl'
import { VisualwidgetsPackage } from './gen/VisualwidgetsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import visualSettingsFormXmi from '../model/ui.xmi?raw'
/* The Ecore itself, for the sentences the generator drops. */
import settingsEcore from '../model/model.ecore?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void VisualwidgetsPackage.eINSTANCE

const WIDGET_TYPE = 'VisualWidget'

/**
 * A table drawn as something to look at - declared as a component: the loader
 * registers it under WIDGET_SERVICE_ID, the WidgetRepository tracks that
 * into the palette, and unloading the bundle withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class VisualWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly name = 'Visual chart'
  readonly nameKey = 'visual:Widget.name'

  /*
   * No hand-written form: the model covers all of it. The names of the
   * kinds and palettes are put together in the form's optionLabel.
   * i18n-keys: visual:Options.*
   */
  readonly settingsForm = {
    xmi: visualSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/visual-settings.ui.xmi',
    ePackage: () => VisualwidgetsPackage.eINSTANCE,
    create: () => new VisualSettingsImpl(),
  }

  readonly icon = Icon
  /* A column of labels and columns of numbers - what XMLA, CSV, SQL and REST sources all answer. */
  readonly reads = ['DataTable']
  readonly component = VisualWidget

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, VisualWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, VisualWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { VisualWidget }
export { VisualSettingsImpl, VisualwidgetsPackage, visualSettingsFormXmi }
export type { VisualSettings } from './gen/VisualSettings'
export { draw, type Look, type Drawing } from './drawing'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { VisualTranslations } from './i18n'
