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
import SvgWidget from './SvgWidget.vue'
import Icon from './assets/svg_icon.svg'
import { SVGWidgetEvents } from './events/SVGWidgetEvents'
import { SvgWidgetInterface } from './api/SvgWidgetInterface'
import { SvgSettingsImpl } from './gen/SvgSettingsImpl'
import { SvgwidgetsPackage } from './gen/SvgwidgetsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import svgSettingsFormXmi from '../model/ui.xmi?raw'
/* The forms for the classes inside it: one rule, and what it paints. */
import svgEntryFormXmi from '../model/ui-entry.xmi?raw'
import svgRuleFormXmi from '../model/ui-rule.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
SvgwidgetsPackage.eINSTANCE
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

interface ISvgSettings {
  src: string
  classesConfig: Config
}
interface Config {
  [className: string]: ConfigItem
}
interface ConfigItem {
  fill: string
  stroke: string
  strokeWidth: string
}

const WIDGET_TYPE = 'SVGWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class SVGWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = SvgWidget
  /*
   * No hand-written form: the model covers all of it. Everything this
   * widget is configured with - the drawing and the rules that colour it -
   * is a field or a list of them, so there is nothing left to write by
   * hand and no second place for the two to disagree.
   */
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'SVG'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: svgSettingsFormXmi,
    uri: '/svg-settings.ui.xmi',
    ePackage: () => SvgwidgetsPackage.eINSTANCE,
    create: () => new SvgSettingsImpl(),
    /* Forms for the classes that appear inside this one. */
    entryForms: [
      { xmi: svgEntryFormXmi, uri: '/svg-entry.ui.xmi' },
      { xmi: svgRuleFormXmi, uri: '/svg-rule.ui.xmi' },
    ],
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, SVGWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, SvgWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { SvgWidget }
export { SvgSettingsImpl, SvgwidgetsPackage, svgSettingsFormXmi }
export type { ISvgSettings, Config, ConfigItem }
