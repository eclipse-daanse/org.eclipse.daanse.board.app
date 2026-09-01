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
  DmvGeneratedModule,
  DmvGeneratedSharedModule,
} from './generated/module.js'
import { DmvValueConverter } from './dmv-value-converter.js'

export type DmvServices = LangiumServices

export const DmvModule: Module<DmvServices, PartialLangiumServices> = {
  parser: {
    ValueConverter: () => new DmvValueConverter(),
  },
}

export function createDmvServices(context: DefaultSharedModuleContext): {
  shared: LangiumSharedServices
  Dmv: DmvServices
} {
  const shared = inject(
    createDefaultSharedModule(context),
    DmvGeneratedSharedModule,
  )
  const Dmv = inject(
    createDefaultModule({ shared }),
    DmvGeneratedModule,
    DmvModule,
  )
  shared.ServiceRegistry.register(Dmv)
  if (!context.connection) {
    // Language servers are initialised by the client; without a connection
    // (tests, CLI) the configuration provider has to be primed manually.
    shared.workspace.ConfigurationProvider.initialized({})
  }
  return { shared, Dmv }
}

export function createDmvServicesForTesting() {
  return createDmvServices(EmptyFileSystem)
}
