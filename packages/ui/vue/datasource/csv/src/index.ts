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
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
// Service id of lib.datasource.csv; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const CSVDatasourceIdentifier = Symbol.for('CsvStoreFactory')
import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('CsvPreview')
const settingsSymbol = Symbol.for('CsvSettings')

export function activate({ services }: ActivationContext) {
  services.register('CsvPreview', Preview)
  services.register('CsvSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('csv', {
      Store: CSVDatasourceIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('csv')
  services.unregister('CsvPreview')
  services.unregister('CsvSettings')
}
