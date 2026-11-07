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

/*
 * The WFS data source in the board (#1282): its settings, its preview, and
 * its registration as a type. The model file is read as text; the helpers
 * come from lib.datasource.wfs, a shared library.
 */
import MODEL_ECORE from 'org.eclipse.daanse.board.app.lib.datasource.wfs/model/WfsDataSourceModel.ecore?raw'
import { type DatasourceRepository, DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import Preview from './Preview.vue'
import Settings from './Settings.vue'
import { NAMESPACE } from './i18n'

/* Symbol.for is global: the same symbol lib.datasource.wfs registers its factory under. */
const WFSDatasourceIdentifier = Symbol.for('WfsStoreFactory')
const previewSymbol = Symbol.for('WfsPreview')
const settingsSymbol = Symbol.for('WfsSettings')

export function activate({ services }: ActivationContext) {
  services.register('WfsPreview', Preview)
  services.register('WfsSettings', Settings)
  services.getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY).registerDatasourceType('wfs', {
    answers: ['geojson', 'object', 'DataTable'],
    icon: 'forest',
    namespace: NAMESPACE,
    connections: ['rest'],
    Model: MODEL_ECORE,
    Store: WFSDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol,
  })
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY).unregisterDatasourceType('wfs')
  services.unregister('WfsPreview')
  services.unregister('WfsSettings')
}

/* Its texts - collected by lib.i18next, see src/i18n. */
/* The hints of the generated forms are read by the form under its field (i18n-keys: datasourceWfs:Hints.IWfsStoreConfiguration.*). */
export { DatasourceWfsTranslations } from './i18n'
