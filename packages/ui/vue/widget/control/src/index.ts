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

/* The generated package first: it reaches the factory, the factory every
  class, and ButtonSettingsImpl extends ControlSettingsImpl. Entered from the
  base class instead, the chain reaches the button's settings while their
  base is not yet initialised, and the bundle fails with a ReferenceError -
  the same order the data table needs (#1221). */
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import './gen/ControlwidgetsPackage'
import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { EventActionsRegistry, EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import { READS_NOTHING } from 'org.eclipse.daanse.board.app.lib.core'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import ButtonWidget from './ButtonWidget.vue'
import ButtonIcon from './assets/button.svg'
import { ButtonWidgetEvents } from './events/ButtonWidgetEvents'
import { ButtonWidgetInterface } from './api/ButtonWidgetInterface'
import { ButtonSettingsImpl } from './gen/ButtonSettingsImpl'
import { ControlwidgetsPackage } from './gen/ControlwidgetsPackage'
/* The form for the button's settings, written as a model beside the Ecore. */
import buttonSettingsFormXmi from '../model/ui.xmi?raw'
/* The Ecore itself, for the sentences the generator drops. */
import settingsEcore from '../model/model.ecore?raw'

/*
 * Building the EPackages on load: the payload extends the events model's
 * Payload, which has to be registered before this package can point at it,
 * and until this one exists its class literals are null.
 */
void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

const BUTTON_TYPE = 'ButtonWidget'

/**
 * The button, declared as a component: the loader registers it under
 * WIDGET_SERVICE_ID, the WidgetRepository tracks that into the palette,
 * and unloading the bundle withdraws it. Every control of this package is
 * a provider of its own, so each is its own entry in the palette.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': BUTTON_TYPE },
})
export class ButtonWidgetProvider implements WidgetProvider {
  readonly type = BUTTON_TYPE
  readonly name = 'Button'
  readonly nameKey = 'control:Widget.button'

  readonly settingsForm = {
    xmi: buttonSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/button-settings.ui.xmi',
    ePackage: () => ControlwidgetsPackage.eINSTANCE,
    create: () => new ButtonSettingsImpl(),
  }

  readonly icon = ButtonIcon
  /* A button shows no data: what it says and writes are its settings. */
  readonly reads = READS_NOTHING
  readonly component = ButtonWidget

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(BUTTON_TYPE, ButtonWidgetEvents)
    this.actions.registerWidgetType(BUTTON_TYPE, ButtonWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(BUTTON_TYPE)
    this.actions.unregisterWidgetType(BUTTON_TYPE)
  }
}

export { ButtonWidget }
export { ButtonSettingsImpl, ControlwidgetsPackage, buttonSettingsFormXmi }
export { ControlPayloadImpl } from './gen/ControlPayloadImpl'
export type { ButtonSettings } from './gen/ButtonSettings'
export type { ControlSettings } from './gen/ControlSettings'
export type { ControlPayload } from './gen/ControlPayload'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { ControlTranslations } from './i18n'
