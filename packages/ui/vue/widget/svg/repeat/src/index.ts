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
import RepeatableSvgWidget from './RepeatableSvgWidget.vue'
import Icon from './assets/repeatable_svg.svg'
import { RepeatableSVGWidgetEvents } from './events/RepeatableSVGWidgetEvents'
import { RepeatableSvgWidgetInterface } from './api/RepeatableSvgWidgetInterface'
import { RepeatableSVGSettingsImpl } from './gen/RepeatableSVGSettingsImpl'
import { RepeatableSvgWidgetsPackage } from './gen/RepeatableSvgWidgetsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import repeatSettingsFormXmi from '../model/ui.xmi?raw'
/* The form for the look one copy of the picture is painted with. */
import repeatStylesFormXmi from '../model/ui-styles.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
RepeatableSvgWidgetsPackage.eINSTANCE
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

interface IRepeatableSVGSettings {
  src: string
  activeItemStyles: {
    fill: string
    stroke: string
  }
  defaultItemStyles: {
    fill: string
    stroke: string
  }
  repeations: string
  progress: string
}

const WIDGET_TYPE = 'RepeatableSVGWidget'

@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class RepeatableSVGWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = RepeatableSvgWidget
  /*
   * No hand-written form: the model covers all of it. The picture, how many
   * of it, how far along, and the two looks - every one of them a field, so
   * there is nothing left to write by hand.
   */
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'RepeatableSVG'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: repeatSettingsFormXmi,
    uri: '/svg-repeat-settings.ui.xmi',
    ePackage: () => RepeatableSvgWidgetsPackage.eINSTANCE,
    create: () => new RepeatableSVGSettingsImpl(),
    /* The form for the class this one contains, twice. */
    entryForms: [{ xmi: repeatStylesFormXmi, uri: '/svg-repeat-styles.ui.xmi' }],
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, RepeatableSVGWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, RepeatableSvgWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { RepeatableSvgWidget }
export { RepeatableSVGSettingsImpl, RepeatableSvgWidgetsPackage, repeatSettingsFormXmi }
export type { IRepeatableSVGSettings }
