import {
    DefaultDocumentValidator,
    EmptyFileSystem,
    inject,
    type LangiumDocument,
    type Module,
    type ValidationOptions
} from 'langium';
import {
    createDefaultModule,
    createDefaultSharedModule,
    type DefaultSharedModuleContext,
    type LangiumServices,
    type LangiumSharedServices,
    type PartialLangiumServices,
    type PartialLangiumSharedServices
} from 'langium/lsp';
import type { Diagnostic } from 'vscode-languageserver-types';
import { MdxGeneratedModule, MdxGeneratedSharedModule } from './generated/module.js';
import { MdxCompletionProvider } from './mdx-completion-provider.js';
import { MdxScopeProvider } from './mdx-scope.js';
import { MdxDocumentSymbolProvider, MdxNodeKindProvider } from './mdx-symbols.js';
import { registerValidationChecks } from './mdx-validator.js';

/**
 * Cube, dimension, hierarchy, level and member names are held in server
 * metadata, not in the document, so an unresolved reference is the normal case
 * rather than a defect. Linking errors are therefore dropped. A name that
 * *does* match an in-file declaration still links, which is what powers
 * go-to-definition and rename for named sets and calculated members.
 */
export class MdxDocumentValidator extends DefaultDocumentValidator {
    protected override processLinkingErrors(
        _document: LangiumDocument,
        _diagnostics: Diagnostic[],
        _options: ValidationOptions
    ): void {
        // Intentionally empty.
    }
}

export type MdxAddedServices = {
    // Reserved for language-specific services; keeps the module type stable as
    // services are added.
};

export type MdxServices = LangiumServices & MdxAddedServices;

export const MdxModule: Module<MdxServices, PartialLangiumServices & MdxAddedServices> = {
    references: {
        ScopeProvider: (services) => new MdxScopeProvider(services)
    },
    validation: {
        DocumentValidator: (services) => new MdxDocumentValidator(services)
    },
    lsp: {
        DocumentSymbolProvider: (services) => new MdxDocumentSymbolProvider(services),
        CompletionProvider: (services) => new MdxCompletionProvider(services)
    }
};

/**
 * `NodeKindProvider` is a shared service rather than a language-specific one,
 * so the icon mapping that `MdxDocumentSymbolProvider` reads has to be
 * overridden here rather than in `MdxModule`.
 */
export const MdxSharedModule: Module<LangiumSharedServices, PartialLangiumSharedServices> = {
    lsp: {
        NodeKindProvider: () => new MdxNodeKindProvider()
    }
};

export function createMdxServices(context: DefaultSharedModuleContext): {
    shared: LangiumSharedServices;
    Mdx: MdxServices;
} {
    const shared = inject(createDefaultSharedModule(context), MdxGeneratedSharedModule, MdxSharedModule);
    const Mdx = inject(createDefaultModule({ shared }), MdxGeneratedModule, MdxModule);
    shared.ServiceRegistry.register(Mdx);
    registerValidationChecks(Mdx);
    if (!context.connection) {
        // Language servers are initialised by the client; without a connection
        // (tests, CLI) the configuration provider has to be primed manually.
        shared.workspace.ConfigurationProvider.initialized({});
    }
    return { shared, Mdx };
}

/** Services backed by an in-memory file system, for tests and the CLI. */
export function createMdxServicesForTesting(): {
    shared: LangiumSharedServices;
    Mdx: MdxServices;
} {
    return createMdxServices(EmptyFileSystem);
}
