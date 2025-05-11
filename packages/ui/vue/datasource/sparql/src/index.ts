/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from 'inversify'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'

import { symbol} from 'org.eclipse.daanse.board.app.lib.datasource.sparql'
import Settings from './Settings.vue'
import Preview from './Preview.vue'
const previewSymbol = Symbol.for('SparqlPreview')
const settingsSymbol = Symbol.for('SparqlSettings')

const init = (container: Container) => {
  const datasourceRepository = container.get<DatasourceRepository>(identifier)



  container.bind(previewSymbol).toConstantValue(Preview)
  container.bind(settingsSymbol).toConstantValue(Settings)
  console.log(symbol);
  datasourceRepository.registerDatasourceType('sparql', {
    Store: symbol,
    Preview: previewSymbol,
    Settings: settingsSymbol,
  })
  const identifiers = datasourceRepository.getDatasourceIdentifiers('sparql')
  console.log(identifiers.Store == symbol);
  console.log('📦 SparqlStoreUI initialized')
}

export {
  init
}
