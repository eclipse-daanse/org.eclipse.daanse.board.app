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
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
// Service id of lib.datasource.sql_xmla; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const SqlXmlaDatasourceIdentifier = Symbol.for('SqlXmlaStoreFactory')
import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('SqlXmlaPreview')
const settingsSymbol = Symbol.for('SqlXmlaSettings')

export function activate({ services }: ActivationContext) {
  services.register('SqlXmlaPreview', Preview)
  services.register('SqlXmlaSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('sql_xmla', {
      Store: SqlXmlaDatasourceIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('sql_xmla')
  services.unregister('SqlXmlaPreview')
  services.unregister('SqlXmlaSettings')
}
