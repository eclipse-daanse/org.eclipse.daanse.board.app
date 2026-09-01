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

import {
  DefaultDocumentValidator,
  EmptyFileSystem,
  inject,
  type LangiumDocument,
  type Module,
  type ValidationOptions,
} from 'langium'
import {
  createDefaultModule,
  createDefaultSharedModule,
  type DefaultSharedModuleContext,
  type LangiumServices,
  type LangiumSharedServices,
  type PartialLangiumServices,
  type PartialLangiumSharedServices,
} from 'langium/lsp'
import type { Diagnostic } from 'vscode-languageserver-types'
import {
  MdxGeneratedModule,
  MdxGeneratedSharedModule,
} from './generated/module.js'
import { MdxCompletionProvider } from './mdx-completion-provider.js'
import { MdxScopeProvider } from './mdx-scope.js'
import {
  MdxDocumentSymbolProvider,
  MdxNodeKindProvider,
} from './mdx-symbols.js'
import { registerValidationChecks } from './mdx-validator.js'

export class MdxDocumentValidator extends DefaultDocumentValidator {
  protected override processLinkingErrors(
    _document: LangiumDocument,
    _diagnostics: Diagnostic[],
    _options: ValidationOptions,
  ): void {
    // Intentionally empty.
  }
}

export type MdxAddedServices = {
  // Reserved for language-specific services; keeps the module type stable as
  // services are added.
}

export type MdxServices = LangiumServices & MdxAddedServices

export const MdxModule: Module<
  MdxServices,
  PartialLangiumServices & MdxAddedServices
> = {
  references: {
    ScopeProvider: services => new MdxScopeProvider(services),
  },
  validation: {
    DocumentValidator: services => new MdxDocumentValidator(services),
  },
  lsp: {
    DocumentSymbolProvider: services => new MdxDocumentSymbolProvider(services),
    CompletionProvider: services => new MdxCompletionProvider(services),
  },
}

export const MdxSharedModule: Module<
  LangiumSharedServices,
  PartialLangiumSharedServices
> = {
  lsp: {
    NodeKindProvider: () => new MdxNodeKindProvider(),
  },
}

export function createMdxServices(context: DefaultSharedModuleContext): {
  shared: LangiumSharedServices
  Mdx: MdxServices
} {
  const shared = inject(
    createDefaultSharedModule(context),
    MdxGeneratedSharedModule,
    MdxSharedModule,
  )
  const Mdx = inject(
    createDefaultModule({ shared }),
    MdxGeneratedModule,
    MdxModule,
  )
  shared.ServiceRegistry.register(Mdx)
  registerValidationChecks(Mdx)
  if (!context.connection) {
    // Language servers are initialised by the client; without a connection
    // (tests, CLI) the configuration provider has to be primed manually.
    shared.workspace.ConfigurationProvider.initialized({})
  }
  return { shared, Mdx }
}

export function createMdxServicesForTesting(): {
  shared: LangiumSharedServices
  Mdx: MdxServices
} {
  return createMdxServices(EmptyFileSystem)
}
