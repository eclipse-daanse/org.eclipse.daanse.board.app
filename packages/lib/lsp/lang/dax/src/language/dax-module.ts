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

/**
 * Two languages over one grammar core: `dax-query` for `.dax` files (DEFINE,
 * EVALUATE) and `dax-formula` for `.daxe` files (one expression). They share
 * the lexer, the expression rules and every service below; the extension of
 * a document decides which parser reads it, the way the reference parser's
 * two entry points do.
 */
import {
  DefaultDocumentValidator,
  DefaultServiceRegistry,
  EmptyFileSystem,
  inject,
  type LangiumCoreServices,
  type Module,
  type URI,
} from 'langium'
import {
  createDefaultModule,
  createDefaultSharedModule,
  type DefaultSharedModuleContext,
  type LangiumServices,
  type LangiumSharedServices,
  type PartialLangiumServices,
} from 'langium/lsp'
import {
  DaxFormulaGeneratedModule,
  DaxGeneratedSharedModule,
  DaxQueryGeneratedModule,
} from './generated/module.js'
import { DaxCompletionProvider } from './dax-completion-provider.js'
import { DaxScopeProvider } from './dax-scope.js'
import {
  DaxDocumentSymbolProvider,
  DaxNodeKindProvider,
} from './dax-symbols.js'
import { registerValidationChecks } from './dax-validator.js'
import { DaxValueConverter } from './dax-value-converter.js'

/**
 * No diagnostics for references that do not resolve.
 *
 * Most names in a DAX expression belong to the model - its tables, columns
 * and measures - and the editor does not know the model. A reference that
 * resolves inside the document (a VAR, a DEFINE MEASURE) is navigable; one
 * that does not is simply a name of the model, not an error.
 */
export class DaxDocumentValidator extends DefaultDocumentValidator {
  protected override processLinkingErrors(): void {
    // Intentionally empty.
  }
}

/**
 * Routes a document by extension, and a document with any other name to the
 * query language.
 *
 * Langium throws for an extension no language claims. With one language that
 * never happens - the registry hands everything to it - but with two, a host
 * that names its documents `inmemory://editor/1` would get no services at
 * all. A query is what an editor without a file name most likely holds.
 */
export class DaxServiceRegistry extends DefaultServiceRegistry {
  override getServices(uri: URI): LangiumCoreServices {
    try {
      return super.getServices(uri)
    } catch (error) {
      const query = this.languageIdMap.get('dax-query')
      if (query) return query
      throw error
    }
  }
}

export type DaxServices = LangiumServices

export const DaxModule: Module<DaxServices, PartialLangiumServices> = {
  parser: {
    ValueConverter: () => new DaxValueConverter(),
  },
  references: {
    ScopeProvider: services => new DaxScopeProvider(services),
  },
  validation: {
    DocumentValidator: services => new DaxDocumentValidator(services),
  },
  lsp: {
    CompletionProvider: services => new DaxCompletionProvider(services),
    DocumentSymbolProvider: services => new DaxDocumentSymbolProvider(services),
  },
}

export function createDaxServices(context: DefaultSharedModuleContext): {
  shared: LangiumSharedServices
  DaxQuery: DaxServices
  DaxFormula: DaxServices
} {
  const shared = inject(
    createDefaultSharedModule(context),
    DaxGeneratedSharedModule,
    {
      ServiceRegistry: (services: LangiumSharedServices) =>
        new DaxServiceRegistry(services),
      lsp: { NodeKindProvider: () => new DaxNodeKindProvider() },
    },
  )
  const DaxQuery = inject(
    createDefaultModule({ shared }),
    DaxQueryGeneratedModule,
    DaxModule,
  )
  const DaxFormula = inject(
    createDefaultModule({ shared }),
    DaxFormulaGeneratedModule,
    DaxModule,
  )
  registerValidationChecks(DaxQuery)
  registerValidationChecks(DaxFormula)
  shared.ServiceRegistry.register(DaxQuery)
  shared.ServiceRegistry.register(DaxFormula)
  if (!context.connection) {
    // Language servers are initialised by the client; without a connection
    // (tests, CLI) the configuration provider has to be primed manually.
    shared.workspace.ConfigurationProvider.initialized({})
  }
  return { shared, DaxQuery, DaxFormula }
}

export function createDaxServicesForTesting() {
  return createDaxServices(EmptyFileSystem)
}
