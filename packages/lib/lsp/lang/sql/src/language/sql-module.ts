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

import { EmptyFileSystem, inject, type Module } from 'langium'
import {
  createDefaultModule,
  createDefaultSharedModule,
  type DefaultSharedModuleContext,
  type LangiumServices,
  type LangiumSharedServices,
  type PartialLangiumServices,
} from 'langium/lsp'
import {
  SqlGeneratedModule,
  SqlGeneratedSharedModule,
} from './generated/module.js'
import { SqlValueConverter } from './sql-value-converter.js'
import { SqlDocumentSymbolProvider } from './sql-symbols.js'
import { registerSqlValidation } from './sql-validator.js'

export type SqlServices = LangiumServices

export const SqlModule: Module<SqlServices, PartialLangiumServices> = {
  parser: {
    ValueConverter: () => new SqlValueConverter(),
  },
  lsp: {
    DocumentSymbolProvider: services => new SqlDocumentSymbolProvider(services),
  },
}

export function createSqlServices(context: DefaultSharedModuleContext): {
  shared: LangiumSharedServices
  Sql: SqlServices
} {
  const shared = inject(
    createDefaultSharedModule(context),
    SqlGeneratedSharedModule,
  )
  const Sql = inject(
    createDefaultModule({ shared }),
    SqlGeneratedModule,
    SqlModule,
  )
  shared.ServiceRegistry.register(Sql)
  registerSqlValidation(Sql)
  if (!context.connection) {
    // Language servers are initialised by the client; without a connection
    // (tests, CLI) the configuration provider has to be primed manually.
    shared.workspace.ConfigurationProvider.initialized({})
  }
  return { shared, Sql }
}

export function createSqlServicesForTesting() {
  return createSqlServices(EmptyFileSystem)
}
