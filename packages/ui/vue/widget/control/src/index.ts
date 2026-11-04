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
  class, and every control's settings extend ControlSettingsImpl. Entered from the
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
import ToggleWidget from './ToggleWidget.vue'
import ToggleIcon from './assets/toggle.svg'
import { ToggleWidgetEvents } from './events/ToggleWidgetEvents'
import { ToggleWidgetInterface } from './api/ToggleWidgetInterface'
import { ToggleSettingsImpl } from './gen/ToggleSettingsImpl'
import MultiStateWidget from './MultiStateWidget.vue'
import MultiStateIcon from './assets/multistate.svg'
import { MultiStateWidgetEvents } from './events/MultiStateWidgetEvents'
import { MultiStateWidgetInterface } from './api/MultiStateWidgetInterface'
import { MultiStateSettingsImpl } from './gen/MultiStateSettingsImpl'
import SliderWidget from './SliderWidget.vue'
import SliderIcon from './assets/slider.svg'
import { SliderWidgetEvents } from './events/SliderWidgetEvents'
import { SliderWidgetInterface } from './api/SliderWidgetInterface'
import { SliderSettingsImpl } from './gen/SliderSettingsImpl'
/* The form for the button's settings, written as a model beside the Ecore. */
import buttonSettingsFormXmi from '../model/ui.xmi?raw'
import toggleSettingsFormXmi from '../model/ui-toggle.xmi?raw'
import multiStateSettingsFormXmi from '../model/ui-multistate.xmi?raw'
/* One state of a multi-state button, one option of a button group. */
import optionFormXmi from '../model/ui-option.xmi?raw'
import sliderSettingsFormXmi from '../model/ui-slider.xmi?raw'
/* One mark of a slider. */
import markFormXmi from '../model/ui-mark.xmi?raw'
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

const TOGGLE_TYPE = 'ToggleWidget'

/** The toggle button: on or off, a value written for each. */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': TOGGLE_TYPE },
})
export class ToggleWidgetProvider implements WidgetProvider {
  readonly type = TOGGLE_TYPE
  readonly name = 'Toggle button'
  readonly nameKey = 'control:Widget.toggle'

  readonly settingsForm = {
    xmi: toggleSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/toggle-settings.ui.xmi',
    ePackage: () => ControlwidgetsPackage.eINSTANCE,
    create: () => new ToggleSettingsImpl(),
  }

  readonly icon = ToggleIcon
  readonly reads = READS_NOTHING
  readonly component = ToggleWidget

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(TOGGLE_TYPE, ToggleWidgetEvents)
    this.actions.registerWidgetType(TOGGLE_TYPE, ToggleWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(TOGGLE_TYPE)
    this.actions.unregisterWidgetType(TOGGLE_TYPE)
  }
}

const MULTI_STATE_TYPE = 'MultiStateWidget'

/** The multi-state button: each press moves on to the next of its states. */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': MULTI_STATE_TYPE },
})
export class MultiStateWidgetProvider implements WidgetProvider {
  readonly type = MULTI_STATE_TYPE
  readonly name = 'Multi-state button'
  readonly nameKey = 'control:Widget.multiState'

  readonly settingsForm = {
    xmi: multiStateSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/multistate-settings.ui.xmi',
    ePackage: () => ControlwidgetsPackage.eINSTANCE,
    create: () => new MultiStateSettingsImpl(),
    entryForms: [{ xmi: optionFormXmi, uri: '/control-option.ui.xmi' }],
  }

  readonly icon = MultiStateIcon
  readonly reads = READS_NOTHING
  readonly component = MultiStateWidget

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(MULTI_STATE_TYPE, MultiStateWidgetEvents)
    this.actions.registerWidgetType(MULTI_STATE_TYPE, MultiStateWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(MULTI_STATE_TYPE)
    this.actions.unregisterWidgetType(MULTI_STATE_TYPE)
  }
}

const SLIDER_TYPE = 'SliderWidget'

/** The slider: a number in steps, with detents and an optional second thumb. */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': SLIDER_TYPE },
})
export class SliderWidgetProvider implements WidgetProvider {
  readonly type = SLIDER_TYPE
  readonly name = 'Slider'
  readonly nameKey = 'control:Widget.slider'

  readonly settingsForm = {
    xmi: sliderSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/slider-settings.ui.xmi',
    ePackage: () => ControlwidgetsPackage.eINSTANCE,
    create: () => new SliderSettingsImpl(),
    entryForms: [{ xmi: markFormXmi, uri: '/slider-mark.ui.xmi' }],
  }

  readonly icon = SliderIcon
  readonly reads = READS_NOTHING
  readonly component = SliderWidget

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(SLIDER_TYPE, SliderWidgetEvents)
    this.actions.registerWidgetType(SLIDER_TYPE, SliderWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(SLIDER_TYPE)
    this.actions.unregisterWidgetType(SLIDER_TYPE)
  }
}

export { ButtonWidget, ToggleWidget, MultiStateWidget, SliderWidget }
export { ButtonSettingsImpl, ToggleSettingsImpl, MultiStateSettingsImpl, SliderSettingsImpl, ControlwidgetsPackage }
export { buttonSettingsFormXmi, toggleSettingsFormXmi, multiStateSettingsFormXmi, optionFormXmi }
export { sliderSettingsFormXmi, markFormXmi }
export { ControlOptionImpl } from './gen/ControlOptionImpl'
export { SliderMarkImpl } from './gen/SliderMarkImpl'
export { SliderOrientation } from './gen/SliderOrientation'
export { ControlPayloadImpl } from './gen/ControlPayloadImpl'
export type { ButtonSettings } from './gen/ButtonSettings'
export type { ToggleSettings } from './gen/ToggleSettings'
export type { MultiStateSettings } from './gen/MultiStateSettings'
export type { ControlOption } from './gen/ControlOption'
export type { SliderSettings } from './gen/SliderSettings'
export type { SliderMark } from './gen/SliderMark'
export type { ControlSettings } from './gen/ControlSettings'
export type { ControlPayload } from './gen/ControlPayload'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { ControlTranslations } from './i18n'
