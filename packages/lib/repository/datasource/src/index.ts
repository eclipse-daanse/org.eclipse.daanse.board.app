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

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import {
  DatasourceRepository,
  type StoreIdentifiers,
  type IDataRetrieveable,
  type DataSourcePlugin,
  type StoreConstructor,
  type IDatasourceRepository,
} from './classes'

/** Typed service id - the name and the contract declared once, here. */
const DATASOURCE_REPOSITORY = serviceId<DatasourceRepository>('DatasourceRepository')

const identifier = Symbol.for(DATASOURCE_REPOSITORY)

/** Singleton ohne eigene Abhaengigkeiten - siehe lib.repository.connection. */
export function activate({ services }: ActivationContext) {
  services.register(DATASOURCE_REPOSITORY, new DatasourceRepository(services))
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(DATASOURCE_REPOSITORY)
}

export { DatasourceRepository, identifier, DATASOURCE_REPOSITORY }
export type {
  StoreIdentifiers,
  IDataRetrieveable,
  IDatasourceRepository,
  DataSourcePlugin,
  StoreConstructor,
}
