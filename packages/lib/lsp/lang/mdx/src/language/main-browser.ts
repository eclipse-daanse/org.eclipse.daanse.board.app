/// <reference lib="WebWorker" />

import { startWorkerLanguageServer } from 'org.eclipse.daanse.board.app.lib.lsp.server/worker';
import { MDX_AST_STRATEGY } from './mdx-ast.js';
import { createMdxServices } from './mdx-module.js';

/**
 * Runs the MDX language server inside a web worker.
 *
 * `EmptyFileSystem` and the request-registration ordering live in
 * `startWorkerLanguageServer`; what is MDX-specific is only the two lines
 * below. MDX's cross-references are almost entirely intra-document (see
 * `MdxScopeProvider`), so having no file system costs it nothing.
 *
 * @param port the worker's global scope, or a `MessagePort` when the client
 *   drives the server over an explicit channel.
 */
export function startMdxLanguageServer(port: DedicatedWorkerGlobalScope | MessagePort): void {
    startWorkerLanguageServer(port, {
        createServices: createMdxServices,
        astStrategy: MDX_AST_STRATEGY
    });
}
