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

/* The generated package first, as in the control widgets (#1221). */
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import './gen/LampwidgetPackage'
import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { EventActionsRegistry, EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import LampWidget from './LampWidget.vue'
import LampIcon from './assets/lamp.svg'
import { LampWidgetEvents } from './events/LampWidgetEvents'
import { LampWidgetInterface } from './api/LampWidgetInterface'
import { LampSettingsImpl } from './gen/LampSettingsImpl'
import { LampwidgetPackage } from './gen/LampwidgetPackage'
/* The form for the lamp's settings, written as a model beside the Ecore. */
import lampSettingsFormXmi from '../model/ui.xmi?raw'
/* The Ecore itself, for the sentences the generator drops. */
import settingsEcore from '../model/model.ecore?raw'

/*
 * Building the EPackages on load: the payload extends the events model's
 * Payload, which has to be registered before this package can point at it.
 */
void EventsPackage.eINSTANCE
void LampwidgetPackage.eINSTANCE

const LAMP_TYPE = 'LampWidget'

/**
 * The lamp - a light source - declared as a component: the loader registers it under
 * WIDGET_SERVICE_ID, the WidgetRepository tracks that into the palette,
 * and unloading the bundle withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': LAMP_TYPE },
})
export class LampWidgetProvider implements WidgetProvider {
  readonly type = LAMP_TYPE
  readonly name = 'Light source'
  readonly nameKey = 'lamp:Widget.lamp'
  /* No picture on the board: shown, only its light is seen (#1242) */
  readonly frameless = true

  readonly settingsForm = {
    xmi: lampSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/lamp-settings.ui.xmi',
    ePackage: () => LampwidgetPackage.eINSTANCE,
    create: () => new LampSettingsImpl(),
  }

  readonly icon = LampIcon
  /* Its state may come from a source: a field somewhere in whatever it answered. */
  readonly reads = ['object']
  readonly component = LampWidget

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(LAMP_TYPE, LampWidgetEvents)
    this.actions.registerWidgetType(LAMP_TYPE, LampWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(LAMP_TYPE)
    this.actions.unregisterWidgetType(LAMP_TYPE)
  }
}

export { LampWidget, LampSettingsImpl, LampwidgetPackage, lampSettingsFormXmi }
export { LampPayloadImpl } from './gen/LampPayloadImpl'
export type { LampSettings } from './gen/LampSettings'
export type { LampPayload } from './gen/LampPayload'
export { kelvinToColor, stateFromSource, type LampState } from './support/lampState'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { LampTranslations } from './i18n'
