/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

/*
 * The model file itself, not the package around it: a value import from
 * the library would pull its runtime - and lib.core with it - into this
 * bundle, which has to share that, not carry a copy.
 */
import MODEL_ECORE from 'org.eclipse.daanse.board.app.lib.datasource.sparql/model/SparqlDataSourceModel.ecore?raw'
import {
  type DatasourceRepository,
  DATASOURCE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
// Service id of lib.datasource.sparql; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const symbol = Symbol.for('SparqlStore')
import Settings from './Settings.vue'
import Preview from './Preview.vue'
const previewSymbol = Symbol.for('SparqlPreview')
const settingsSymbol = Symbol.for('SparqlSettings')

export function activate({ services }: ActivationContext) {
  services.register('SparqlPreview', Preview)
  services.register('SparqlSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('sparql', {
      Model: MODEL_ECORE,
      Store: symbol,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('sparql')
  services.unregister('SparqlPreview')
  services.unregister('SparqlSettings')
}
