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

import './referencedPackages'
import { component, inject } from '@eclipse-daanse/tsm'
import { DATASOURCE_REPOSITORY, type DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'
import Icon from './assets/vega.svg'
import VegaWidget from './VegaWidget.vue'
import { VegawidgetPackage } from './gen/VegawidgetPackage'
import { emptySettings } from './settingsModel'
import { headersOfAnswer, suggestFields } from './suggest'
/* The form for these settings, written as a model beside the Ecore, and
 * the forms of what its lists hold. */
import vegaSettingsFormXmi from '../model/ui.xmi?raw'
import layerFormXmi from '../model/ui-layer.xmi?raw'
import encodingFormXmi from '../model/ui-encoding.xmi?raw'
import transformFormXmi from '../model/ui-transform.xmi?raw'
import paramFormXmi from '../model/ui-param.xmi?raw'
import facetFormXmi from '../model/ui-facet.xmi?raw'
import datasetFormXmi from '../model/ui-dataset.xmi?raw'
import columnTypeFormXmi from '../model/ui-column-type.xmi?raw'
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
 * It draws the data of board datasources (#1286); a widget without one
 * draws a sample in the dataset its starter layer reads. Its events follow
 * (#1289).
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class VegaWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = VegaWidget
  /* Its own source as a table; datasets with a source of their own ask for theirs. */
  readonly reads = ['DataTable']
  readonly icon = Icon
  readonly name = 'Vega-Lite chart'
  readonly nameKey = 'vega:Widget.name'

  /* The settings form, as a model - no settings component of its own. */
  readonly settingsForm = {
    xmi: vegaSettingsFormXmi,
    ecore: settingsEcore,
    uri: '/vega-settings.ui.xmi',
    ePackage: () => VegawidgetPackage.eINSTANCE,
    /* Empty: the form adopts the stored chart into it, layers and all. */
    create: () => emptySettings(),
    entryForms: [
      { xmi: layerFormXmi, uri: '/vega-layer.ui.xmi' },
      { xmi: encodingFormXmi, uri: '/vega-encoding.ui.xmi' },
      { xmi: transformFormXmi, uri: '/vega-transform.ui.xmi' },
      { xmi: paramFormXmi, uri: '/vega-param.ui.xmi' },
      { xmi: facetFormXmi, uri: '/vega-facet.ui.xmi' },
      { xmi: datasetFormXmi, uri: '/vega-dataset.ui.xmi' },
      { xmi: columnTypeFormXmi, uri: '/vega-column-type.ui.xmi' },
    ],
    /* i18n-keys: vega:Hints.* - the hint under each field, one per feature (#1285). */
    /* A field is picked from the names the chart's data has. */
    suggest: (owner: unknown, feature: string, context: { datasourceId?: string }) =>
      suggestFields(owner, feature, context.datasourceId, {
        headersOf: async (id) => headersOfAnswer(await this.datasources.getDatasource(id).getData('DataTable')),
        datasourceIds: () => this.datasources.getDatasources().map((each) => each.uid).filter(Boolean),
      }),
  }

  constructor(@inject(DATASOURCE_REPOSITORY) private readonly datasources: DatasourceRepository) {}
}

export { VegaWidget, VegawidgetPackage, vegaSettingsFormXmi }
export { VegaWidgetSettingsImpl } from './gen/VegaWidgetSettingsImpl'
export type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
export { compileRecipe, RecipeError } from './recipe'
export { modelledSettings } from './settingsModel'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { VegaTranslations } from './i18n'
