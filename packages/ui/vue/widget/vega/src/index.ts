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

import { component } from '@eclipse-daanse/tsm'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { READS_NOTHING } from 'org.eclipse.daanse.board.app.lib.core'
import Icon from './assets/vega.svg'
import VegaWidget from './VegaWidget.vue'
import { VegawidgetPackage } from './gen/VegawidgetPackage'
import { VegaWidgetSettingsImpl } from './gen/VegaWidgetSettingsImpl'
/* The form for these settings, written as a model beside the Ecore. */
import vegaSettingsFormXmi from '../model/ui.xmi?raw'
/* The Ecore itself, for the sentences the generator drops. */
import settingsEcore from '../model/model.ecore?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void VegawidgetPackage.eINSTANCE

export const WIDGET_TYPE = 'VegaWidget'

/**
 * The Vega-Lite chart (#1283), declared as a component: the loader
 * registers it under WIDGET_SERVICE_ID and the palette shows it.
 *
 * Its data and its events follow (#1286, #1289); until then it draws a
 * sample and reads nothing.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class VegaWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = VegaWidget
  readonly reads = READS_NOTHING
  readonly icon = Icon
  readonly name = 'Vega-Lite chart'
  readonly nameKey = 'vega:Widget.name'

  /* The settings form, as a model - no settings component of its own. */
  readonly settingsForm = {
    xmi: vegaSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/vega-settings.ui.xmi',
    ePackage: () => VegawidgetPackage.eINSTANCE,
    create: () => new VegaWidgetSettingsImpl(),
  }
}

export { VegaWidget, VegawidgetPackage, VegaWidgetSettingsImpl, vegaSettingsFormXmi }
export type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
export { specOf } from './spec'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { VegaTranslations } from './i18n'
