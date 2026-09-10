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
import Icon from './assets/rich_text.svg'
import RichTextWidget from './RichTextWidget.vue'
import RichTextWidgetSettings from './RichTextWidgetSettings.vue'
import type { RichTextEditorSettings } from './gen/RichTextEditorSettings'
import { RichTextEditorSettingsImpl } from './gen/RichTextEditorSettingsImpl'
import { RichTextEditorPackage } from './gen/RichTextEditorPackage'
import richTextSettingsFormXmi from '../model/ui.xmi?raw'
import { RichTextWidgetEvents } from './events/RichTextWidgetEvents'
import { RichTextWidgetInterface } from './api/RichTextWidgetInterface'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

/*
 * Touching eINSTANCE is what builds the EPackage: until then the class
 * literals are null and an instance cannot say what it is - eClass()
 * returns null and anything reading the model sees nothing. EMF expects
 * the package to register itself when its code is loaded, and for a bundle
 * that moment is here.
 */
void RichTextEditorPackage.eINSTANCE

const WIDGET_TYPE = 'RichTextWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class RichTextWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = RichTextWidget
  readonly settingsComponent = RichTextWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'RichText'

  /**
   * The form for this widget's settings, as a model rather than a
   * template - read by whoever shows the settings, so the shell needs no
   * dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: richTextSettingsFormXmi,
    uri: '/rich-text-settings.ui.xmi',
    ePackage: () => RichTextEditorPackage.eINSTANCE,
    create: () => new RichTextEditorSettingsImpl(),
    /*
     * Writing the text is not a field: a rich text editor is a surface you
     * type into and a row of things you press. Named so that what is
     * modelled is not offered twice.
     */
    unmodelledSections: ['Text und Formatierung'],
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, RichTextWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, RichTextWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { RichTextWidget, RichTextWidgetSettings }
export { RichTextEditorSettingsImpl, RichTextEditorPackage, richTextSettingsFormXmi }
export type { RichTextEditorSettings }
