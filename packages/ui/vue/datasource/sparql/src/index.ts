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
import Catalogue from './Catalogue.vue'
import Query from './Query.vue'
const catalogueSymbol = Symbol.for('SparqlCatalogue')
const querySymbol = Symbol.for('SparqlQuery')
const settingsSymbol = Symbol.for('SparqlSettings')

export function activate({ services }: ActivationContext) {
  services.register('SparqlCatalogue', Catalogue)
  services.register('SparqlQuery', Query)
  services.register('SparqlSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('sparql', {
      icon: 'share',
      connections: ['rest'],
      Model: MODEL_ECORE,
      Store: symbol,
      /*
       * Three things, not two halves of one: finding an endpoint, asking
       * it, and the settings the shell appends. The preview stays named
       * because the contract asks for one; it is the first view here.
       */
      Preview: catalogueSymbol,
      Views: [
        { id: 'endpoints', label: 'datasourceSparql:View.endpoints', component: catalogueSymbol },
        { id: 'query', label: 'datasourceSparql:View.query', component: querySymbol },
      ],
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('sparql')
  services.unregister('SparqlCatalogue')
  services.unregister('SparqlQuery')
  services.unregister('SparqlSettings')
}

/* Its texts - collected by lib.i18next, see src/i18n. */
export { DatasourceSparqlTranslations } from './i18n'
