/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import {
  type DatasourceRepository,
  DATASOURCE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  type ConnectionRepository,
  CONNECTION_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import {
  factorySymbol as XmlaDatasourceIndentifier,
  XmlaStore,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { NAMESPACE } from './i18n'
/*
 * The model file itself, not the package around it: a value import from
 * the library would pull its runtime - and lib.core with it - into this
 * bundle, which has to share that, not carry a copy.
 */
import MODEL_ECORE from 'org.eclipse.daanse.board.app.lib.datasource.xmla/model/XmlaDataSourceModel.ecore?raw'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('XmlaPreview')
const settingsSymbol = Symbol.for('XmlaSettings')

/*
 * The labels of the model's fields, looked up by the create form by name.
 * i18n-keys: datasourceXmla:Fields.*, i18n-keys: datasourceXmla:Hints.*
 */

export function activate({ services }: ActivationContext) {
  services.register('XmlaPreview', Preview)
  services.register('XmlaSettings', Settings)

  /*
   * The cube is asked for when the source is created, from the catalogue
   * its connection names. A source without one has no store to build, and
   * the widget on it said only that the store was missing.
   */
  const cubes = async (settings: Record<string, unknown>) => {
    if (!settings.connection) return []
    const found = await XmlaStore.fetchCubes(
      settings.connection as string,
      services.getRequired<ConnectionRepository>(CONNECTION_REPOSITORY),
    )
    return found.map((cube: any) => ({ label: cube.CUBE_CAPTION || cube.CUBE_NAME, value: cube.CUBE_NAME }))
  }

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('xmla', {
      icon: 'dataset',
      connections: ['xmla'],
      namespace: NAMESPACE,
      choices: { cube: cubes },
      Model: MODEL_ECORE,
      Store: XmlaDatasourceIndentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('xmla')
  services.unregister('XmlaPreview')
  services.unregister('XmlaSettings')
}

/* Its texts - collected by lib.i18next, see src/i18n. */
export { DatasourceXmlaTranslations } from './i18n'
