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
//@ts-ignore
import Icon from './assets/progress.svg'
import PageWidget from './PageWidget.vue'
import PageWidgetSettings from './PageWidgetSettings.vue'
import { type PageI } from './interface/PageI'
import { PageWidgetSettingsImpl } from './gen/PageWidgetSettingsImpl'
import { PagesettingsPackage } from './gen/PagesettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import pageSettingsFormXmi from '../model/ui.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void PagesettingsPackage.eINSTANCE
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'PageWidget'

/**
 * Delayed component - no lifecycle methods, nothing to do until the palette
 * resolves it. The nested-board machinery it renders (wrapper, layout and
 * page stores) comes through the shared workspace libraries.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class PageWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = PageWidget
  readonly settingsComponent = PageWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Page'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: pageSettingsFormXmi,
    uri: '/page-settings.ui.xmi',
    ePackage: () => PagesettingsPackage.eINSTANCE,
    create: () => new PageWidgetSettingsImpl(),
    /*
     * Picking the page is not a field: the choices are the pages that exist
     * right now, and it refuses the page it is sitting on. Named so that
     * what is modelled is not offered twice.
     */
    unmodelledSections: ['Seite wählen'],
  }
}

export { PageWidget, PageWidgetSettings }
export { PageWidgetSettingsImpl, PagesettingsPackage, pageSettingsFormXmi }
export { type PageI }
