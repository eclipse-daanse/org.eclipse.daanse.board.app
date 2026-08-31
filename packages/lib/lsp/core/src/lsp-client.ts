import { LSPClient, languageServerExtensions } from '@codemirror/lsp-client';
import type { LanguageDescriptor } from './language-descriptor.js';
import { workerTransport } from './worker-transport.js';

/**
 * One language server per language, each in its own worker, started on first
 * use and shared by every editor instance thereafter.
 *
 * Which languages exist is not known here. A descriptor carries its own
 * `createServerWorker()`, so this registry never imports a language package
 * and never holds a table of them — that was the thing that made adding a
 * language a change to shared code.
 *
 * Started lazily: `startLanguageClient` is awaited by whoever is about to open
 * a document, so the first document is opened against a server that has
 * already advertised its capabilities.
 */
const clients = new Map<string, LSPClient>();
const workers = new Map<string, Worker>();
const starting = new Map<string, Promise<LSPClient>>();

export function startLanguageClient(language: LanguageDescriptor): Promise<LSPClient> {
    const existing = starting.get(language.id);
    if (existing) {
        return existing;
    }

    const promise = (async () => {
        const worker = language.createServerWorker();
        workers.set(language.id, worker);

        const client = new LSPClient({
            rootUri: 'file:///workspace',
            extensions: languageServerExtensions()
        }).connect(workerTransport(worker));
        clients.set(language.id, client);

        // Resolves once `initialize`/`initialized` have been exchanged.
        await client.initializing;
        return client;
    })();

    starting.set(language.id, promise);
    return promise;
}

/** The client for a language, once its `startLanguageClient()` has resolved. */
export function getLanguageClient(languageId: string): LSPClient | undefined {
    return clients.get(languageId);
}

export function isLanguageClientConnected(languageId: string): boolean {
    return clients.get(languageId)?.connected ?? false;
}

/** Tears down every client and worker. Used by tests and HMR teardown. */
export function stopLanguageClients(): void {
    for (const client of clients.values()) {
        client.disconnect();
    }
    for (const worker of workers.values()) {
        worker.terminate();
    }
    clients.clear();
    workers.clear();
    starting.clear();
}
