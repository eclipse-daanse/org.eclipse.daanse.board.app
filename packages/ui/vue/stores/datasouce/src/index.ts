/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { useDataSourcesStore ,type DataSourceDTO} from './store/DatasourcePinia'

// Diese Zeile im globalen Kontext aufrufen, z. B. einmalig in main.ts

export {
  useDataSourcesStore,
  type DataSourceDTO
}

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { provideRepository } from './store/DatasourcePinia'
import type { DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource'

export function activate({ services }: ActivationContext) {
  provideRepository(services.getRequired<DatasourceRepository>('DatasourceRepository'))
}
