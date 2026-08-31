import type { Transport } from '@codemirror/lsp-client';

/**
 * Bridges `@codemirror/lsp-client` to a Langium server running in a web
 * worker.
 *
 * The two sides disagree about the shape of a message, and this is the whole
 * of the mismatch:
 *
 * - `Transport` deals in **JSON strings**, headerless. Its docs are explicit:
 *   "Messages should contain only the JSON messages, no LSP headers."
 * - `BrowserMessageReader`/`BrowserMessageWriter` on the server side deal in
 *   **structured-cloned objects**. The writer calls `postMessage(msg)` with
 *   the message object itself; the reader treats `event.data` as that object.
 *
 * So the bridge is one `JSON.parse` outbound and one `JSON.stringify` inbound.
 * There is no Content-Length framing anywhere in this path — `postMessage`
 * already delimits messages, which is why neither side needs it.
 */
export function workerTransport(worker: Worker): Transport {
    let handlers: ((value: string) => void)[] = [];

    worker.onmessage = (event: MessageEvent) => {
        const encoded = JSON.stringify(event.data);
        // Iterate a copy: a handler may unsubscribe itself while responding.
        for (const handler of handlers.slice()) {
            handler(encoded);
        }
    };

    return {
        send(message: string) {
            worker.postMessage(JSON.parse(message));
        },
        subscribe(handler: (value: string) => void) {
            handlers.push(handler);
        },
        unsubscribe(handler: (value: string) => void) {
            handlers = handlers.filter((existing) => existing !== handler);
        }
    };
}
