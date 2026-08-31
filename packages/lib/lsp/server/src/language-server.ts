/**
 * The boilerplate every language server in this workspace was repeating.
 *
 * Before this, each language's `main-browser.ts` was 33 lines of which three
 * were language-specific: which services factory to call, which parse-tree
 * strategy to register, and the name. The rest — the reader, the writer, the
 * connection, `EmptyFileSystem`, and the ordering constraint below — was
 * copied, and would have been copied again by the next language.
 *
 * Runs inside a worker. Importing this pulls in Langium, which is why it lives
 * behind `org.eclipse.daanse.board.app.lib.lsp.server` and never behind `org.eclipse.daanse.board.app.lib.lsp.core`.
 */
import { EmptyFileSystem } from 'langium';
import type { DefaultSharedModuleContext, LangiumSharedServices } from 'langium/lsp';
import { startLanguageServer } from 'langium/lsp';
import {
    BrowserMessageReader,
    BrowserMessageWriter,
    createConnection
} from 'vscode-languageserver/browser';
import { registerAstRequest } from './ast-tree.js';
import type { AstTreeStrategy } from './ast-tree.js';

/**
 * What a language package must supply to run a server: a services factory in
 * the shape `langium-cli` generates, and optionally a parse-tree strategy.
 */
export interface LanguageServerDefinition {
    /**
     * The generated `create<Name>Services`. Called with a connection and a
     * file system; only its `shared` half is used here, so the language's own
     * services bag can be any shape.
     */
    createServices(context: DefaultSharedModuleContext): { shared: LangiumSharedServices };
    /**
     * Language-specific parse-tree serialization. Omit when the default walk
     * covers everything the grammar can produce.
     */
    astStrategy?: AstTreeStrategy;
}

/**
 * Runs a Langium language server inside a web worker.
 *
 * There is no file system in the browser, so `EmptyFileSystem` is used: every
 * document is held in memory and pushed in by the client.
 *
 * @param port the worker's global scope, or a `MessagePort` when the client
 *   drives the server over an explicit channel.
 */
export function startWorkerLanguageServer(
    port: DedicatedWorkerGlobalScope | MessagePort,
    definition: LanguageServerDefinition
): void {
    const messageReader = new BrowserMessageReader(port);
    const messageWriter = new BrowserMessageWriter(port);
    const connection = createConnection(messageReader, messageWriter);
    const { shared } = definition.createServices({ connection, ...EmptyFileSystem });

    // Before `startLanguageServer`, which calls `connection.listen()`.
    // Registering a request handler after that races the first message.
    registerAstRequest(connection, shared, definition.astStrategy);

    startLanguageServer(shared);
}
