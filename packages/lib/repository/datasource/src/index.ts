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

import { Container } from 'inversify'
import {
  DatasourceRepository,
  type StoreIdentifiers,
  type IDataRetrieveable,
  type DataSourcePlugin,
  type StoreConstructor,
  type IDatasourceRepository,
} from './classes'

const identifier = Symbol.for('DatasourceRepository')

const init = (container: Container) => {
  container
    .bind<DatasourceRepository>(identifier)
    .to(DatasourceRepository)
    .inSingletonScope()
}

export { DatasourceRepository, init, identifier }
export type {
  StoreIdentifiers,
  IDataRetrieveable,
  IDatasourceRepository,
  DataSourcePlugin,
  StoreConstructor,
}
